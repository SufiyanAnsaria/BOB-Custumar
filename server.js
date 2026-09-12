const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 10000;

const PAYU_MODE = (process.env.PAYU_MODE || "UAT").toUpperCase();
const PAYU_CLIENT_ID = process.env.PAYU_CLIENT_ID;
const PAYU_CLIENT_SECRET = process.env.PAYU_CLIENT_SECRET;

const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "*";

app.use(express.json({ limit: "100kb" }));

app.use(
  cors({
    origin:
      FRONTEND_ORIGIN === "*"
        ? true
        : FRONTEND_ORIGIN.split(",").map((x) => x.trim()),
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);


/* =========================
   SERVER TEST
========================= */

app.get("/", (req, res) => {
  res.json({
    ok: true,
    message: "PayU Bank Verification Backend is running",
    mode: PAYU_MODE,
  });
});

app.get("/health", (req, res) => {
  res.json({
    ok: true,
    message: "Server is running",
  });
});


/* =========================
   PAYU ACCESS TOKEN
========================= */

async function getPayUToken() {
  if (!PAYU_CLIENT_ID || !PAYU_CLIENT_SECRET) {
    throw new Error(
      "PAYU_CLIENT_ID या PAYU_CLIENT_SECRET Render में सेट नहीं है।"
    );
  }

  const TOKEN_URL =
    PAYU_MODE === "PRODUCTION"
      ? "https://accounts.payu.in/oauth/token"
      : "https://uat-accounts.payu.in/oauth/token";

  const form = new URLSearchParams();

  form.append("grant_type", "client_credentials");
  form.append("scope", "verify_bank_account");
  form.append("client_id", PAYU_CLIENT_ID);
  form.append("client_secret", PAYU_CLIENT_SECRET);

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: form.toString(),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || !data.access_token) {
    console.error("PayU Token Error:", data);

    throw new Error(
      data.error_description ||
        data.error ||
        "PayU access token नहीं मिला।"
    );
  }

  return data.access_token;
}


/* =========================
   BANK ACCOUNT VERIFICATION
========================= */

app.post("/api/verify-bank", async (req, res) => {
  try {

    const {
      account_number,
      ifsc,
      name,
      name_match_required = true,
      leniency = "Medium",
    } = req.body || {};


    /* Account Number साफ करें */

    const account = String(account_number || "")
      .replace(/[^0-9]/g, "");


    /* IFSC साफ करें */

    const cleanIfsc = String(ifsc || "")
      .replace(/\s+/g, "")
      .toUpperCase();


    /* Name optional */

    const holderName = String(name || "").trim();


    /* =====================
       ACCOUNT VALIDATION
    ===================== */

    if (account.length < 6 || account.length > 25) {
      return res.status(400).json({
        ok: false,
        error: "Invalid account number.",
      });
    }


    /* =====================
       IFSC VALIDATION
    ===================== */

    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(cleanIfsc)) {
      return res.status(400).json({
        ok: false,
        error: "Invalid IFSC code.",
      });
    }


    /* =====================
       NAME VALIDATION

       Name optional है।
    ===================== */

    if (holderName && holderName.length < 2) {
      return res.status(400).json({
        ok: false,
        error: "Invalid account holder name.",
      });
    }


    /* =====================
       PAYU TOKEN
    ===================== */

    const accessToken = await getPayUToken();


    /* =====================
       PAYU VERIFY URL
    ===================== */

    const VERIFY_URL =
      PAYU_MODE === "PRODUCTION"
        ? "https://onboarding.payu.in/dvs/bank_accounts/acc_verification"
        : "https://uat-onepayuonboarding.payu.in/dvs/bank_accounts/acc_verification";


    /* =====================
       PAYU REQUEST BODY
    ===================== */

    const requestBody = {
      account_number: account,
      ifsc: cleanIfsc,

      // Name सिर्फ तब भेजें जब दिया गया हो
      ...(holderName
        ? {
            name: holderName,
          }
        : {}),

      // Name नहीं है तो name matching बंद
      name_match_required: holderName
        ? Boolean(name_match_required)
        : false,

      leniency: leniency,
    };


    /* =====================
       PAYU API CALL
    ===================== */

    const payuResponse = await fetch(VERIFY_URL, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },

      body: JSON.stringify(requestBody),
    });


    const data = await payuResponse
      .json()
      .catch(() => ({}));


    /* =====================
       PAYU ERROR
    ===================== */

    if (!payuResponse.ok) {

      console.error(
        "PayU Verification Error:",
        data
      );

      return res.status(payuResponse.status).json({
        ok: false,

        error:
          data.message ||
          data.error ||
          "PayU bank verification failed.",

        details: data,
      });
    }


    /* =====================
       RESULT
    ===================== */

    const result = data.result || data;


    /* अलग-अलग possible नाम fields */

    const accountName =
      result.accountName ||
      result.account_holder_name ||
      result.accountHolderName ||
      result.name ||
      null;


    return res.json({

      ok: true,

      verified:
        result.bankTxnStatus === true ||
        result.accountStatus === "ACTIVE" ||
        result.status === "SUCCESS" ||
        result.status === true,

      accountStatus:
        result.accountStatus ||
        result.status ||
        null,

      accountName: accountName,

      bankResponse:
        result.bankResponse ||
        result.message ||
        data.message ||
        null,

      payuRequestId:
        data.payuRequestId ||
        data.requestId ||
        null,

      raw: data,

    });

  } catch (error) {

    console.error(
      "Bank Verification Error:",
      error.message
    );

    return res.status(500).json({

      ok: false,

      error:
        error.message ||
        "Internal server error.",

    });

  }

});


/* =========================
   START SERVER
========================= */

app.listen(PORT, "0.0.0.0", () => {

  console.log(
    `PayU Bank Verification Backend running on port ${PORT}`
  );

});
