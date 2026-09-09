import express from "express";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.static(__dirname));


/*
==========================================
ACCOUNT VERIFICATION API SETTINGS
==========================================

यहाँ API Key HTML में नहीं रखनी है।

Hosting service की Environment Variables में रखें:

ACCOUNT_VERIFY_URL
ACCOUNT_VERIFY_API_KEY

Example:

ACCOUNT_VERIFY_URL = https://your-api-provider.com/verify
ACCOUNT_VERIFY_API_KEY = YOUR_SECRET_API_KEY

==========================================
*/


app.post("/api/verify-account", async (req, res) => {

    try {

        const { bank, ifsc, accountNumber } = req.body;


        // Required fields check

        if (!bank || !ifsc || !accountNumber) {

            return res.status(400).json({
                verified: false,
                message: "Bank, IFSC Code and Account Number are required."
            });

        }


        // Account number digits check

        if (!/^\d+$/.test(String(accountNumber))) {

            return res.status(400).json({
                verified: false,
                message: "Account number must contain digits only."
            });

        }


        /*
        ==========================================
        CHECK API CONFIGURATION
        ==========================================
        */

        if (
            !process.env.ACCOUNT_VERIFY_URL ||
            !process.env.ACCOUNT_VERIFY_API_KEY
        ) {

            return res.status(503).json({

                verified: false,

                message:
                "Authorized Account Verification API is not configured."

            });

        }


        /*
        ==========================================
        SEND REQUEST TO AUTHORIZED API
        ==========================================

        API provider के अनुसार यह request बदल सकती है।
        */

        const providerResponse = await fetch(

            process.env.ACCOUNT_VERIFY_URL,

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json",

                    "Authorization":
                    `Bearer ${process.env.ACCOUNT_VERIFY_API_KEY}`

                },


                body: JSON.stringify({

                    bank: bank,

                    ifsc: ifsc,

                    account_number: accountNumber

                })

            }

        );


        // API Response

        const providerData =
            await providerResponse.json().catch(() => ({}));


        /*
        ==========================================
        API ERROR
        ==========================================
        */

        if (!providerResponse.ok) {

            return res.status(providerResponse.status).json({

                verified: false,

                message:
                providerData.message ||
                "Verification provider returned an error."

            });

        }


        /*
        ==========================================
        READ API RESPONSE

        Provider के अनुसार fields अलग हो सकती हैं।
        ==========================================
        */


        const verified = Boolean(

            providerData.verified ??

            providerData.success ??

            providerData.account_verified ??

            false

        );


        const accountHolderName =

            providerData.accountHolderName ??

            providerData.account_holder_name ??

            providerData.name ??

            "";


        /*
        ==========================================
        ACCOUNT NOT VERIFIED
        ==========================================
        */


        if (!verified) {

            return res.json({

                verified: false,

                message:

                providerData.message ||

                "Account could not be verified."

            });

        }


        /*
        ==========================================
        CREATE VERIFICATION TOKEN
        ==========================================
        */


        const verificationToken = crypto

            .createHash("sha256")

            .update(

                `${bank}|${ifsc}|${accountNumber}|${Date.now()}`

            )

            .digest("hex");


        /*
        ==========================================
        SUCCESS RESPONSE
        ==========================================
        */


        return res.json({

            verified: true,

            accountHolderName:

                accountHolderName ||

                "Verified Account",

            verificationToken

        });


    }

    catch (error) {

        console.error("Verification Error:", error);


        return res.status(500).json({

            verified: false,

            message:

            "Unable to complete account verification."

        });

    }

});


/*
==========================================
OPEN WEBSITE
==========================================
*/


app.get("/", (req, res) => {

    res.sendFile(

        path.join(__dirname, "index.html")

    );

});


/*
==========================================
START SERVER
==========================================
*/


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {

    console.log(

        `Server running on port ${PORT}`

    );

});
