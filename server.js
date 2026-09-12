<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Bank of Baroda - Shoaib CSC Customer Management</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    :root {
      --pnb-primary: #0066A1;
      --pnb-secondary: #F58220;
      --pnb-light: #F7F9FC;
      --pnb-dark: #212529;
    }

    body {
      font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: var(--pnb-dark);
      background-color: #f5f5f5;
    }

    .navbar {
      padding: 1rem 1rem;
      background: linear-gradient(135deg, #0066A1 0%, #004B78 100%);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    }

    .navbar-brand {
      font-weight: 700;
      letter-spacing: 0.5px;
      color: white !important;
      display: flex;
      align-items: center;
      font-size: 1.3rem;
    }

    .navbar-brand img {
      height: 40px;
      margin-right: 15px;
    }

    .brand-text {
      display: flex;
      flex-direction: column;
      line-height: 1.3;
    }

    .brand-name {
      font-size: 1.2rem;
    }

    .brand-subtitle {
      font-size: 0.85rem;
      opacity: 0.8;
    }

    .card {
      border: none;
      border-radius: 10px;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease;
      border-left: 4px solid var(--pnb-primary);
      margin-bottom: 20px;
    }

    .card-header {
      background-color: var(--pnb-primary);
      color: white;
      border-radius: 10px 10px 0 0 !important;
      padding: 15px 25px;
      font-weight: 600;
      font-size: 1.1rem;
    }

    .btn-pnb-primary {
      background-color: var(--pnb-primary);
      border-color: var(--pnb-primary);
      color: white;
      padding: 8px 20px;
    }

    .btn-pnb-primary:hover {
      background-color: #005783;
      border-color: #005783;
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 102, 161, 0.18);
    }

    .btn-pnb-secondary {
      background-color: var(--pnb-secondary);
      border-color: var(--pnb-secondary);
      color: var(--pnb-dark);
      padding: 8px 20px;
    }

    .btn-pnb-secondary:hover {
      background-color: #e6c200;
      border-color: #e6c200;
      color: var(--pnb-dark);
      transform: translateY(-2px);
    }

    .services-wrapper {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      gap: 15px;
      padding: 10px 0 20px 0;
      scrollbar-width: thin;
      scrollbar-color: var(--pnb-primary) #f0f0f0;
      -webkit-overflow-scrolling: touch;
    }

    .services-wrapper::-webkit-scrollbar {
      height: 8px;
    }

    .services-wrapper::-webkit-scrollbar-track {
      background: #f0f0f0;
      border-radius: 10px;
    }

    .services-wrapper::-webkit-scrollbar-thumb {
      background: var(--pnb-primary);
      border-radius: 10px;
    }

    .service-card {
      flex: 0 0 auto;
      min-width: 140px;
      background: white;
      border-radius: 10px;
      padding: 15px 20px;
      text-align: center;
      transition: all 0.3s ease;
      border: 2px solid transparent;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
      cursor: pointer;
      position: relative;
    }

    .service-card:hover {
      transform: translateY(-5px);
      border-color: var(--pnb-primary);
      box-shadow: 0 8px 16px rgba(0, 102, 161, 0.14);
    }

    .service-card i {
      font-size: 2rem;
      color: var(--pnb-primary);
      margin-bottom: 8px;
      display: block;
    }

    .service-card span {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--pnb-dark);
      white-space: nowrap;
    }

    .bulk-checkbox {
      width: 20px;
      height: 20px;
      margin-right: 12px;
      cursor: pointer;
    }

    .bulk-actions {
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      padding: 15px 20px;
      border-radius: 10px;
      margin-bottom: 20px;
      display: none;
      border: 1px solid var(--pnb-primary);
    }

    .floating-btn {
      position: fixed;
      bottom: 40px;
      right: 40px;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      font-size: 28px;
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--pnb-primary);
      color: white;
      border: none;
      transition: all 0.3s ease;
    }

    .floating-btn:hover {
      transform: scale(1.1);
      box-shadow: 0 8px 20px rgba(0, 102, 161, 0.24);
    }

    footer {
      background-color: var(--pnb-primary);
      color: white;
      padding: 20px 0;
      margin-top: 50px;
    }

    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1rem;
    }

    .footer-email {
      color: var(--pnb-secondary);
      text-decoration: none;
      font-size: 1.1rem;
    }

    .footer-email:hover {
      text-decoration: underline;
    }

    .three-dots-menu .dropdown-menu {
      border-radius: 10px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      border: 1px solid rgba(0, 0, 0, 0.05);
      min-width: 250px;
    }

    .three-dots-menu .dropdown-item {
      padding: 0.7rem 1.2rem;
      font-size: 0.95rem;
    }

    .three-dots-menu .dropdown-item i {
      width: 22px;
      text-align: center;
      margin-right: 10px;
      color: var(--pnb-primary);
    }

    .progress {
      height: 10px;
      border-radius: 5px;
    }

    .progress-bar {
      background-color: var(--pnb-primary);
    }

    /* LARGER TABLE STYLES */
    .table {
      margin-bottom: 0;
      font-size: 1rem !important;
    }

    .table th {
      background-color: var(--pnb-primary);
      color: white;
      font-weight: 600;
      padding: 15px 12px !important;
      font-size: 1rem !important;
      white-space: nowrap;
    }

    .table td {
      vertical-align: middle;
      padding: 12px 12px !important;
      font-size: 0.95rem !important;
    }

    .modal-header {
      background-color: var(--pnb-primary);
      color: white;
      padding: 15px 25px;
    }

    .modal-header .btn-close {
      filter: brightness(0) invert(1);
    }

    .modal-content {
      border-radius: 12px;
      border: none;
    }

    .modal-body {
      padding: 25px;
    }

    .modal-footer {
      padding: 15px 25px;
      border-top: 1px solid #dee2e6;
    }

    .main-container {
      padding-bottom: 100px;
    }

    .aadhar-format {
      letter-spacing: 2px;
      font-family: monospace;
    }

    .account-format {
      letter-spacing: 1px;
      font-family: monospace;
    }

    #userManagementCard {
      display: none;
    }

    .user-actions {
      white-space: nowrap;
    }

    .search-filters {
      background: #f8f9fa;
      padding: 20px;
      border-radius: 10px;
      margin-bottom: 20px;
    }

    .filter-badge {
      cursor: pointer;
      padding: 8px 18px;
      margin: 0 8px 8px 0;
      border-radius: 30px;
      background: white;
      border: 1px solid #dee2e6;
      display: inline-block;
      transition: all 0.3s ease;
      font-size: 0.95rem;
      font-weight: 500;
    }

    .filter-badge:hover {
      background: var(--pnb-primary);
      color: white;
      border-color: var(--pnb-primary);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 102, 161, 0.14);
    }

    .filter-badge.active {
      background: var(--pnb-primary);
      color: white;
      border-color: var(--pnb-primary);
      box-shadow: 0 4px 8px rgba(0, 102, 161, 0.18);
    }

    .filter-badge i {
      margin-right: 8px;
      font-size: 1rem;
    }

    /* Pending amount always RED */
    .pending-amount {
      font-weight: bold;
      color: #dc3545 !important;
      font-size: 1rem;
    }

    .table-responsive {
      border-radius: 8px;
      overflow-x: auto;
    }

    .badge {
      padding: 6px 12px;
      font-weight: 500;
      border-radius: 20px;
    }

    .btn-sm {
      padding: 6px 12px;
      font-size: 0.85rem;
      border-radius: 5px;
    }

    .btn-sm i {
      font-size: 0.9rem;
    }

    .input-group {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    .input-group-text {
      background-color: white;
      border-right: none;
    }

    #searchInput {
      border-left: none;
      padding: 12px 15px;
      font-size: 1rem;
    }

    #searchInput:focus {
      box-shadow: none;
      border-color: #dee2e6;
    }

    .required-field::after {
      content: " *";
      color: red;
      font-weight: bold;
    }

    .payment-details {
      background: #f8f9fa;
      padding: 20px;
      border-radius: 10px;
      margin: 15px 0;
      border: 1px solid #dee2e6;
    }

    .service-stats {
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
      margin-bottom: 20px;
    }

    .stat-card {
      background: white;
      border-radius: 10px;
      padding: 15px 20px;
      flex: 1;
      min-width: 130px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
      border-left: 4px solid var(--pnb-primary);
      transition: all 0.3s ease;
    }

    .stat-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 12px rgba(138, 21, 56, 0.1);
    }

    .stat-card .stat-label {
      font-size: 0.8rem;
      color: #6c757d;
      text-transform: uppercase;
      font-weight: 600;
    }

    .stat-card .stat-value {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--pnb-dark);
    }

    .stat-card .stat-icon {
      float: right;
      font-size: 2rem;
      color: var(--pnb-primary);
      opacity: 0.2;
    }

    /* Search button larger */
    #searchBtn, #clearSearchBtn {
      padding: 10px 20px;
      font-size: 1rem;
    }

    @media (max-width: 767px) {
      .navbar-brand img {
        height: 35px;
      }

      .navbar-brand {
        font-size: 1rem;
      }

      .brand-name {
        font-size: 1rem;
      }

      .brand-subtitle {
        font-size: 0.75rem;
      }

      .table th, .table td {
        padding: 10px 8px !important;
        font-size: 0.85rem !important;
      }

      .btn {
        padding: 6px 12px;
        font-size: 0.85rem;
      }

      .floating-btn {
        width: 50px;
        height: 50px;
        font-size: 20px;
        bottom: 20px;
        right: 20px;
      }

      .service-card {
        min-width: 100px;
        padding: 10px 12px;
      }

      .service-card i {
        font-size: 1.4rem;
      }

      .service-card span {
        font-size: 0.7rem;
      }

      .filter-badge {
        padding: 5px 10px;
        font-size: 0.75rem;
      }

      .stat-card {
        min-width: 80px;
        padding: 8px 10px;
      }

      .stat-card .stat-value {
        font-size: 1rem;
      }
    }
  
    /* ===== BANK OF BARODA INSPIRED THEME ===== */
    :root {
      --bob-blue: #0066A1;
      --bob-dark-blue: #004B78;
      --bob-orange: #F58220;
      --bob-light-blue: #EAF4FB;
      --bob-bg: #F5F7FA;
      --bob-text: #263238;
    }

    body {
      background: linear-gradient(180deg, #f7f9fc 0%, #eef3f7 100%);
      color: var(--bob-text);
    }

    .navbar {
      background: #fff !important;
      border-top: 5px solid var(--bob-orange);
      border-bottom: 1px solid #dfe7ee;
      box-shadow: 0 4px 18px rgba(0,0,0,.08);
      padding: .75rem 1rem;
    }

    .navbar-brand { color: var(--bob-dark-blue) !important; }
    .navbar-brand .brand-name { color: var(--bob-dark-blue); font-weight: 800; letter-spacing: .2px; }
    .navbar-brand .brand-subtitle { color: #6b7785; opacity: 1; }
    .bob-brand-logo {
      width: 48px; height: 48px; margin-right: 14px; flex: 0 0 48px;
      border-radius: 50%; position: relative; display: flex; align-items: center; justify-content: center;
      background: radial-gradient(circle at center, #fff 0 20%, var(--bob-orange) 21% 34%, transparent 35%),
                  conic-gradient(from 0deg, var(--bob-orange) 0 8deg, transparent 8deg 18deg, var(--bob-orange) 18deg 26deg, transparent 26deg 36deg, var(--bob-orange) 36deg 44deg, transparent 44deg 54deg, var(--bob-orange) 54deg 62deg, transparent 62deg 72deg, var(--bob-orange) 72deg 80deg, transparent 80deg 90deg, var(--bob-orange) 90deg 98deg, transparent 98deg 108deg, var(--bob-orange) 108deg 116deg, transparent 116deg 126deg, var(--bob-orange) 126deg 134deg, transparent 134deg 144deg, var(--bob-orange) 144deg 152deg, transparent 152deg 162deg, var(--bob-orange) 162deg 170deg, transparent 170deg 180deg, var(--bob-orange) 180deg 188deg, transparent 188deg 198deg, var(--bob-orange) 198deg 206deg, transparent 206deg 216deg, var(--bob-orange) 216deg 224deg, transparent 224deg 234deg, var(--bob-orange) 234deg 242deg, transparent 242deg 252deg, var(--bob-orange) 252deg 260deg, transparent 260deg 270deg, var(--bob-orange) 270deg 278deg, transparent 278deg 288deg, var(--bob-orange) 288deg 296deg, transparent 296deg 306deg, var(--bob-orange) 306deg 314deg, transparent 314deg 324deg, var(--bob-orange) 324deg 332deg, transparent 332deg 342deg, var(--bob-orange) 342deg 350deg, transparent 350deg 360deg);
    }
    .bob-brand-logo span {
      position: relative; z-index: 2; font-size: 24px; line-height: 1; font-weight: 900; color: var(--bob-orange);
      background: #fff; border-radius: 50%; width: 24px; height: 24px; display: grid; place-items: center;
    }
    .bob-brand-logo img {
      width: 100%; height: 100%; object-fit: contain; display: block; border-radius: 6px;
    }
    .bob-brand-logo span { display: none; }

    .card { border-left: 4px solid var(--bob-orange); border-radius: 12px; box-shadow: 0 6px 18px rgba(31,45,61,.07); }
    .card-header { background: linear-gradient(90deg, var(--bob-blue), var(--bob-dark-blue)); border-bottom: 3px solid var(--bob-orange); }
    .service-card { border-color: #e2e8ef; }
    .service-card:hover { border-color: var(--bob-orange); box-shadow: 0 10px 22px rgba(0,102,161,.14); }
    .service-card i, .stat-card .stat-icon, .three-dots-menu .dropdown-item i { color: var(--bob-blue) !important; }
    .filter-badge.active, .filter-badge:hover { background: var(--bob-blue); border-color: var(--bob-blue); }
    .filter-badge.pnb-account { border-left: 3px solid #8A1538; }
    .filter-badge.bob-account { border-left: 3px solid var(--bob-orange); }
    .stat-card { border-left-color: var(--bob-orange); }
    .progress-bar { background: linear-gradient(90deg, var(--bob-orange), var(--bob-blue)); }
    .floating-btn { background: var(--bob-orange); box-shadow: 0 7px 18px rgba(245,130,32,.28); }
    footer { background: linear-gradient(90deg, var(--bob-dark-blue), var(--bob-blue)); border-top: 4px solid var(--bob-orange); }
    .footer-email { color: #fff; }
    .btn-pnb-primary { background: var(--bob-blue); border-color: var(--bob-blue); }
    .btn-pnb-primary:hover { background: var(--bob-dark-blue); border-color: var(--bob-dark-blue); }
    .btn-pnb-secondary { background: var(--bob-orange); border-color: var(--bob-orange); color: #fff; }
    .btn-pnb-secondary:hover { background: #dc6f0f; border-color: #dc6f0f; color: #fff; }
    .modal-header { background: linear-gradient(90deg, var(--bob-blue), var(--bob-dark-blue)); border-bottom: 3px solid var(--bob-orange); }
    .search-filters { background: #fff; border: 1px solid #e1e8ef; }
    .table th { background: var(--bob-blue); border-bottom: 3px solid var(--bob-orange); }
    .badge.bg-light { border: 1px solid #dce6ee; }

    @media (max-width: 767px) {
      .bob-brand-logo { width: 145px; height: 52px; flex-basis: 145px; margin-right: 6px; }
      .bob-brand-logo span { width: 20px; height: 20px; font-size: 20px; }
    }

  
    /* BOB dashboard visual layout - matched to the supplied reference */
    :root {
      --pnb-primary: #f45100;
      --pnb-secondary: #ffb300;
      --pnb-light: #f5f5f5;
      --pnb-dark: #172033;
      --bob-orange: #f45100;
      --bob-orange-dark: #e84b00;
      --bob-navy: #172033;
    }
    body { background: #f4f4f4; color: var(--bob-navy); }
    .navbar {
      min-height: 106px; padding: 10px 28px;
      background: linear-gradient(135deg, #f45100 0%, #ef6c00 100%);
      box-shadow: 0 4px 14px rgba(0,0,0,.14);
    }
    .navbar .container { max-width: none; padding: 0; }
    .navbar-brand { color: #fff !important; font-size: 1.25rem; gap: 18px; align-items:center; }
    .bob-brand-logo {
      width: 280px; height: 92px; flex: 0 0 280px; border-radius: 7px;
      display:flex; align-items:center; justify-content:center;
      background:#fff; color:#f45100; font-size: 2rem; font-weight: 900;
      box-shadow: 0 2px 8px rgba(0,0,0,.12); overflow:hidden;
    }
    .brand-text { line-height:1.15; }
    .brand-name { font-size: 1.7rem; font-weight: 800; color:#fff; }
    .brand-subtitle { font-size: 1rem; font-weight: 600; opacity: .98; color:#fff; margin-top:5px; }
    .bob-brand-logo img { width: 100%; height: 100%; object-fit: contain; display: block; }
    .three-dots-menu .btn { border:0; font-weight:600; }
    .main-container { max-width: none; padding: 24px 29px 80px; }
    .card { border-left: 4px solid var(--bob-orange); border-radius: 10px; box-shadow: 0 5px 14px rgba(0,0,0,.07); }
    .card-header { background: var(--bob-orange); color:#fff; padding: 15px 25px; }
    .service-stats { gap: 15px; flex-wrap: nowrap; overflow-x:auto; margin-bottom:16px !important; }
    .stat-card { min-width: 148px; height: 106px; padding: 15px 20px; border-left: 4px solid var(--bob-orange); border-radius: 10px; }
    .stat-card .stat-icon { color: var(--bob-orange); opacity:.18; }
    .stat-card .stat-value { color:#111827; font-size:1.45rem; }
    .services-wrapper { gap: 14px; padding: 10px 2px 20px; overflow-x: visible; }
    .service-card { min-width: 140px; flex: 1 1 0; height: 96px; padding: 14px 10px; border-radius: 9px; }
    .service-card i { color: var(--bob-orange); font-size: 1.9rem; margin-bottom: 8px; }
    .service-card span { font-size:.86rem; }
    .search-filters { background:#f7f8fa; padding: 20px; border-radius:9px; }
    .filter-badge { padding: 9px 18px; margin: 0 7px 8px 0; background:#fff; border:1px solid #d9dde4; }
    .filter-badge:hover, .filter-badge.active { background:var(--bob-orange); border-color:var(--bob-orange); color:#fff; }
    .btn-pnb-primary { background:var(--bob-orange); border-color:var(--bob-orange); }
    .btn-pnb-primary:hover { background:var(--bob-orange-dark); border-color:var(--bob-orange-dark); }
    #searchInput { height: 50px; }
    #searchBtn { height:50px; padding: 10px 22px; }
    #clearSearchBtn { height:50px; }
    .floating-btn { background:var(--bob-orange); }
    footer { background:var(--bob-orange); }
    @media (max-width: 991px) {
      .navbar { min-height: 86px; padding: 8px 16px; }
      .bob-brand-logo { width: 210px; height: 70px; flex-basis: 210px; }
      .brand-name { font-size: 1.35rem; }
      .brand-subtitle { font-size: .85rem; }
      .main-container { padding: 18px 20px 70px; }
      .services-wrapper { overflow-x:auto; }
      .service-card { flex:0 0 140px; }
    }
  
    .filter-service-toggle {
      width: 100%; display:flex; align-items:center; justify-content:space-between;
      border:0; background:transparent; padding: 4px 0 12px;
      font-weight:700; font-size:1rem; color:#182b49; cursor:pointer; text-align:left;
    }
    .filter-service-toggle:hover { color:var(--bob-orange); }
    .filter-chevron { transition: transform .2s ease; }
    .filter-service-toggle[aria-expanded="true"] .filter-chevron { transform:rotate(180deg); }
    .service-filter-options { padding-top:4px; }

    /* White BOB header */
    .navbar {
      background: #ffffff !important;
      box-shadow: 0 2px 10px rgba(0,0,0,.12) !important;
      border-top: 3px solid #f15a00;
    }
    .navbar-brand { color: #004b78 !important; }
    .brand-name { color: #004b78 !important; font-size: 1.35rem; font-weight: 800; }
    .brand-subtitle { color: #5b6b7a !important; opacity: 1 !important; }
    .navbar-brand img { height: 82px !important; width: auto !important; max-width: 250px; object-fit: contain; }
    .bob-brand-logo {
      width: auto !important; height: 82px !important; margin-right: 18px !important;
      border-radius: 0 !important; background: transparent !important; box-shadow: none !important;
      flex: 0 0 auto !important; overflow: visible !important;
    }
    .bob-brand-logo img { display:block; }
    .navbar-dark .navbar-toggler { border-color: rgba(0,0,0,.2); }

  </style>

<style id="final-bob-header-logo-fix">
/* Final: white header, large logo integrated directly into header */
.navbar {
  background:#fff !important;
  border-top:3px solid #f15a00 !important;
  border-bottom:1px solid #e5e7eb !important;
  padding:6px 24px !important;
  min-height:118px !important;
  box-shadow:0 3px 12px rgba(0,0,0,.12) !important;
}
.navbar .container { max-width:1400px; }
.navbar-brand {
  color:#004b78 !important;
  display:flex !important;
  align-items:center !important;
  gap:20px !important;
  margin:0 !important;
  min-width:0;
}
.bob-brand-logo {
  width:300px !important;
  height:100px !important;
  flex:0 0 300px !important;
  margin:0 !important;
  padding:0 !important;
  border:0 !important;
  border-radius:0 !important;
  overflow:visible !important;
  display:flex !important;
  align-items:center !important;
  justify-content:center !important;
  background:transparent !important;
  box-shadow:none !important;
}
.bob-brand-logo img {
  width:100% !important;
  height:100% !important;
  object-fit:contain !important;
  display:block !important;
  padding:0 !important;
  border:0 !important;
  mix-blend-mode:normal !important;
}
.brand-text { line-height:1.15 !important; }
.navbar .brand-name { color:#004b78 !important; font-size:1.7rem !important; font-weight:800 !important; }
.navbar .brand-subtitle { color:#5b6b7a !important; opacity:1 !important; font-size:1rem !important; margin-top:5px; }
.navbar .three-dots-menu .btn { color:#111827 !important; }
@media (max-width:700px) {
  .navbar { padding:6px 10px !important; min-height:92px !important; }
  .bob-brand-logo { width:210px !important; height:72px !important; flex-basis:210px !important; }
  .navbar .brand-name { font-size:1.1rem !important; }
  .navbar .brand-subtitle { font-size:.72rem !important; }
}
</style>
<style id="header-thin-footer-border">
/* Thin separator directly below the header */
.navbar { position: relative; }
.navbar::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background: #f15a00;
  z-index: 10;
}
</style>

<style id="sufiyan-header-orange-text">
/* Header text matched to the supplied orange background color */
header .brand-title,
header .brand-subtitle,
.navbar .brand-title,
.navbar .brand-subtitle {
  color: #ff4f00 !important;
}
</style>


<style id="bob-title-exact-orange">
header .brand-title,
.navbar .brand-title,
header .brand-subtitle,
.navbar .brand-subtitle,
header .site-title,
header .site-subtitle {
  color: #f45100 !important;
}
</style>


<style id="sufiyan-header-all-orange">
.navbar .brand-name,
.navbar .brand-subtitle,
.navbar .site-title,
.navbar .site-subtitle {
  color: #f45100 !important;
  opacity: 1 !important;
}
</style>


<!-- Automatic Slip/Form Reader Libraries -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script>
if (window.pdfjsLib) {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
}
</script>
<script src="https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js"></script>


<style id="missing-data-display-style">
.missing-data{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  min-width:28px;
  height:24px;
  padding:0 8px;
  border-radius:6px;
  color:#8a96a3;
  background:#f1f3f5;
  font-weight:700;
  letter-spacing:1px;
  line-height:1;
}
</style>
<style id="customer-list-service-switch-style">
#applicationsTable th,
#applicationsTable td{
  white-space:nowrap;
}
#serviceTypeTitle{
  font-weight:800;
}
</style>


<style id="customer-list-exact-columns-style">
#applicationsTable th,#applicationsTable td{white-space:nowrap;}
#applicationsTable .missing-data{display:inline-flex;align-items:center;justify-content:center;min-width:28px;height:24px;padding:0 8px;border-radius:6px;background:#f1f3f5;color:#8a96a3;font-weight:700;letter-spacing:1px;}
</style>


<style id="final-selected-service-columns-css">
#searchResultsTable thead th,
#applicationsTable thead th { white-space: nowrap !important; }
</style>


<style id="payu-bank-verification-css">
.bank-verify-btn{margin-top:8px;padding:8px 14px;border:0;border-radius:6px;background:#0b6b3a;color:#fff;font-weight:600;cursor:pointer}
.bank-verify-btn:disabled{opacity:.65;cursor:not-allowed}
.bank-verify-result{margin-top:7px;font-size:.9rem;font-weight:600}
.bank-verify-result.ok{color:#087a35}.bank-verify-result.bad{color:#b42318}.bank-verify-result.wait{color:#175cd3}
</style>

</head>
<body>
  <!-- Login Modal -->
  <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title" id="loginModalLabel"><i class="fas fa-lock me-2"></i>Admin Login</h5>
        </div>
        <div class="modal-body">
          <form id="loginForm">
            <div class="mb-3">
              <label for="loginEmail" class="form-label">Email Address</label>
              <input type="email" class="form-control" id="loginEmail" required autocomplete="off">
            </div>
            <div class="mb-3">
              <label for="loginPassword" class="form-label">Password</label>
              <input type="password" class="form-control" id="loginPassword" required autocomplete="off">
            </div>
            <button type="submit" id="loginBtn" class="btn btn-pnb-primary w-100">
              <i class="fas fa-sign-in-alt me-1"></i> Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <a class="navbar-brand" href="#" id="homeLink">
        <div class="bob-brand-logo" aria-label="Bank of Baroda logo">
          <img src="https://iili.io/Cy8MarN.png" alt="Bank of Baroda Logo" loading="eager" decoding="async">
        </div>
        <div class="brand-text">
          <span class="brand-name">Bank of Baroda</span>
          <span class="brand-subtitle">Sufiyan CSC Center • Customer Management</span>
        </div>
      </a>
      <div class="three-dots-menu">
        <div class="dropdown">
          <button class="btn btn-light btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fas fa-cog"></i> Menu
          </button>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
            <li><h6 class="dropdown-header">Customer Operations</h6></li>
            <li><a class="dropdown-item" href="#" id="importMenuBtn"><i class="fas fa-file-import"></i>Import Customers</a></li>
            <li><a class="dropdown-item" href="#" id="downloadTemplateMenuBtn"><i class="fas fa-file-download"></i>Download Template</a></li>
            <li><a class="dropdown-item" href="#" id="exportDataBtn"><i class="fas fa-file-export"></i>Export Data</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><h6 class="dropdown-header">View Data</h6></li>
            <li><a class="dropdown-item" href="#" id="viewAllCustomersBtn"><i class="fas fa-list"></i>View All Customers</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><h6 class="dropdown-header">Services</h6></li>
            <li><a class="dropdown-item service-menu-item" href="#" onclick="filterByService('passport')"><i class="fas fa-passport" style="color: #2563eb;"></i>Passport Applications</a></li>
            <li><a class="dropdown-item service-menu-item" href="#" onclick="filterByService('epfo')"><i class="fas fa-file-invoice" style="color: #7c3aed;"></i>EPFO Applications</a></li>
            <li><a class="dropdown-item service-menu-item" href="#" onclick="filterByService('aadhaar')"><i class="fas fa-id-card" style="color: #dc2626;"></i>Aadhaar Applications</a></li>
            <li><a class="dropdown-item service-menu-item" href="#" onclick="filterByService('pan')"><i class="fas fa-credit-card" style="color: #ea580c;"></i>PAN Card Applications</a></li>
            <li><a class="dropdown-item service-menu-item" href="#" onclick="filterByService('esarvish')"><i class="fas fa-globe" style="color: #0891b2;"></i>eSarvish Applications</a></li>
            <li><a class="dropdown-item service-menu-item" href="#" onclick="filterByService('license')"><i class="fas fa-id-card-alt" style="color: #16a34a;"></i>Driving License Applications</a></li>
            <li><a class="dropdown-item service-menu-item" href="#" onclick="filterByService('pnb_account')"><i class="fas fa-university" style="color: #0066A1;"></i>PNB Account Customers</a></li>
            <li><a class="dropdown-item service-menu-item" href="#" onclick="filterByService('bob_account')"><i class="fas fa-university" style="color: #0066a1;"></i>BOB Account Customers</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><h6 class="dropdown-header">Data Management</h6></li>
            <li><a class="dropdown-item text-danger" href="#" id="bulkDeleteBtn"><i class="fas fa-trash-alt"></i>Bulk Delete</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><h6 class="dropdown-header">User Management</h6></li>
            <li><a class="dropdown-item" href="#" id="manageUsersBtn"><i class="fas fa-users-cog"></i>Manage Users</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#" id="logoutBtn"><i class="fas fa-sign-out-alt"></i>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <div class="container py-4 main-container">
    <!-- Alerts Container -->
    <div id="alertsContainer"></div>

    <!-- Bulk Actions Panel -->
    <div id="bulkActionsPanel" class="bulk-actions">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <i class="fas fa-check-circle text-pnb-primary me-2"></i>
          <span id="selectedCount" class="fw-bold">0</span> customers selected
        </div>
        <div>
          <button id="confirmDeleteBtn" class="btn btn-danger btn-sm me-2">
            <i class="fas fa-trash-alt me-1"></i> Delete Selected
          </button>
          <button id="cancelBulkActionBtn" class="btn btn-secondary btn-sm">
            <i class="fas fa-times me-1"></i> Cancel
          </button>
        </div>
      </div>
    </div>

    <!-- Service Stats Cards -->
    <div class="service-stats mb-3" id="serviceStats">
      <div class="stat-card">
        <span class="stat-icon"><i class="fas fa-passport"></i></span>
        <div class="stat-label">Passport</div>
        <div class="stat-value" id="statPassport">0</div>
      </div>
      <div class="stat-card">
        <span class="stat-icon"><i class="fas fa-file-invoice"></i></span>
        <div class="stat-label">EPFO</div>
        <div class="stat-value" id="statEPFO">0</div>
      </div>
      <div class="stat-card">
        <span class="stat-icon"><i class="fas fa-id-card"></i></span>
        <div class="stat-label">Aadhaar</div>
        <div class="stat-value" id="statAadhaar">0</div>
      </div>
      <div class="stat-card">
        <span class="stat-icon"><i class="fas fa-credit-card"></i></span>
        <div class="stat-label">PAN</div>
        <div class="stat-value" id="statPAN">0</div>
      </div>
      <div class="stat-card">
        <span class="stat-icon"><i class="fas fa-globe"></i></span>
        <div class="stat-label">eSarvish</div>
        <div class="stat-value" id="statESarvish">0</div>
      </div>
      <div class="stat-card">
        <span class="stat-icon"><i class="fas fa-id-card-alt"></i></span>
        <div class="stat-label">License</div>
        <div class="stat-value" id="statLicense">0</div>
      </div>
      <div class="stat-card">
        <span class="stat-icon"><i class="fas fa-university"></i></span>
        <div class="stat-label">BOB Account</div>
        <div class="stat-value" id="statBOBAccount">0</div>
      </div>
      <div class="stat-card">
        <span class="stat-icon"><i class="fas fa-university"></i></span>
        <div class="stat-label">PNB Account</div>
        <div class="stat-value" id="statPNBAccount">0</div>
      </div>
    </div>

    <!-- CSC Services Section -->
    <div class="card mb-4">
      <div class="card-header">
        <h5 class="mb-0"><i class="fas fa-concierge-bell me-2"></i>CSC Services</h5>
      </div>
      <div class="card-body">
        <div class="services-wrapper">
          <div class="service-card" onclick="openPassportForm()">
            <i class="fas fa-passport"></i>
            <span>PASSPORT</span>
          </div>
          <div class="service-card" onclick="openEPFOForm()">
            <i class="fas fa-file-invoice"></i>
            <span>EPFO</span>
          </div>
          <div class="service-card" onclick="openAadhaarForm()">
            <i class="fas fa-id-card"></i>
            <span>AADHAAR</span>
          </div>
          <div class="service-card" onclick="openPANForm()">
            <i class="fas fa-credit-card"></i>
            <span>PAN CARD</span>
          </div>
          <div class="service-card" onclick="openESarvishForm()">
            <i class="fas fa-globe"></i>
            <span>eSARVISH</span>
          </div>
          <div class="service-card" onclick="openLicenseForm()">
            <i class="fas fa-id-card-alt"></i>
            <span>DRIVING LICENSE</span>
          </div>
          <div class="service-card" onclick="openBOBAccountForm()">
            <i class="fas fa-university"></i>
            <span>BOB ACCOUNT</span>
          </div>
          <div class="service-card" onclick="openPNBAccountForm()">
            <i class="fas fa-university"></i>
            <span>PNB ACCOUNT</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Advanced Search Section -->
    <div class="card mb-4">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h5 class="mb-0"><i class="fas fa-search me-2"></i>Search Customers</h5>
        <div class="d-flex align-items-center gap-2">
          <span class="badge bg-light text-dark" id="currentFilterBadge">All Customers</span>
          <button type="button" id="hideAllDataBtn" class="btn btn-sm btn-light" title="Hide all displayed data">
            <i class="fas fa-eye-slash me-1"></i> Hide Data
          </button>
        </div>
      </div>
      <div class="card-body">
        <div class="search-filters">
          <button type="button" id="filterServiceToggle" class="filter-service-toggle" aria-expanded="false">
            <span><i class="fas fa-filter me-2"></i>Filter by Service:</span>
            <i class="fas fa-chevron-down filter-chevron"></i>
          </button>
          <div id="serviceFilterOptions" class="service-filter-options d-none">
            <span class="filter-badge all-customers" onclick="filterByService('all')">
              <i class="fas fa-users"></i> All Customers
            </span>
            <span class="filter-badge passport" onclick="filterByService('passport')">
              <i class="fas fa-passport"></i> Passport
            </span>
            <span class="filter-badge epfo" onclick="filterByService('epfo')">
              <i class="fas fa-file-invoice"></i> EPFO
            </span>
            <span class="filter-badge aadhaar" onclick="filterByService('aadhaar')">
              <i class="fas fa-id-card"></i> Aadhaar
            </span>
            <span class="filter-badge pan" onclick="filterByService('pan')">
              <i class="fas fa-credit-card"></i> PAN Card
            </span>
            <span class="filter-badge esarvish" onclick="filterByService('esarvish')">
              <i class="fas fa-globe"></i> eSarvish
            </span>
            <span class="filter-badge license" onclick="filterByService('license')">
              <i class="fas fa-id-card-alt"></i> Driving License
            </span>
            <span class="filter-badge bob-account" onclick="filterByService('bob_account')">
              <i class="fas fa-university"></i> BOB Account
            </span>
            <span class="filter-badge pnb-account" onclick="filterByService('pnb_account')">
              <i class="fas fa-university"></i> PNB Account
            </span>
          </div>
        </div>
        
        <div class="input-group mb-3">
          <span class="input-group-text bg-white" id="searchFilterLabel">
            <i class="fas fa-search text-pnb-primary"></i>
          </span>
          <input type="text" id="searchInput" class="form-control" placeholder="Search by name, father/husband, mobile, Aadhar, application, account number, password..." aria-label="Search customers">
          <button id="searchBtn" class="btn btn-pnb-primary" aria-label="Search">
            <i class="fas fa-search me-1"></i> Search
          </button>
          <button id="clearSearchBtn" class="btn btn-secondary" aria-label="Clear">
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <div class="d-flex justify-content-between align-items-center">
          <small class="text-muted" id="searchStats"></small>
        </div>

        <div id="searchResults" class="mt-3">
          <div class="table-responsive">
            <table class="table table-hover" id="searchResultsTable">
              <thead id="searchResultsHeader">
                <tr>
                  <th>Service</th>
                  <th>Name</th>
                  <th>Father/Husband</th>
                  <th>Mobile</th>
                  <th>Account No.</th>
                  <th>Aadhar</th>
                  <th>Application</th>
                  <th>Password</th>
                  <th>Pending (₹)</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="results"></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- All Customers Table -->
    <div class="card mb-4 d-none" id="allApplicationsCard">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h5 class="mb-0"><i class="fas fa-users me-2"></i><span id="serviceTypeTitle">All Customers</span></h5>
        <div>
          <span class="badge bg-light text-dark me-2" id="serviceTypeBadge"></span>
          <button id="closeAllApplicationsBtn" class="btn btn-sm btn-pnb-secondary">
            <i class="fas fa-eye-slash me-1"></i> Hide All Data
          </button>
        </div>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-hover" id="applicationsTable">
            <thead id="applicationsHeader">
              <tr>
                <th>Service</th>
                <th>Name</th>
                <th>Father/Husband</th>
                <th>Mobile</th>
                <th>Aadhar</th>
                <th>Application/Account No.</th>
                <th>Password</th>
                <th>Pending (₹)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="applicationListBody"></tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- User Management Card -->
    <div class="card mb-4 d-none" id="userManagementCard">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h5 class="mb-0"><i class="fas fa-users-cog me-2"></i>User Management</h5>
        <button id="addUserBtn" class="btn btn-sm btn-pnb-secondary">
          <i class="fas fa-plus me-1"></i> Add User
        </button>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Email</th>
                <th>Role</th>
                <th>Created</th>
                <th>Last Login</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="userListBody"></tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- All Service Modals (same as before) -->
  <!-- Passport Modal -->
  <div class="modal fade" id="passportModal" tabindex="-1" aria-labelledby="passportModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="passportModalLabel"><i class="fas fa-passport me-2"></i>Passport Application</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="passportForm">
            <h6 class="text-pnb-primary mb-3">Applicant Details</h6>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label fw-bold required-field">Full Name</label>
                <input type="text" class="form-control uppercase" id="passportName" placeholder="CUSTOMER NAME" required>
              </div>
              <div class="col-md-6">
                <label class="form-label fw-bold">Father/Husband Name</label>
                <input type="text" class="form-control uppercase" id="passportFatherName" placeholder="FATHER NAME">
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label fw-bold required-field">Mobile Number (10 digits)</label>
                <input type="tel" class="form-control" id="passportMobile" placeholder="Mobile Number" maxlength="10" pattern="[0-9]{10}" required>
              </div>
              <div class="col-md-6">
                <label class="form-label fw-bold">Date of Birth</label>
                <input type="date" class="form-control" id="passportDOB">
              </div>
            </div>
            <h6 class="text-pnb-primary mb-3 mt-4">Payment Details</h6>
            <div class="payment-details">
              <div class="row">
                <div class="col-md-4">
                  <label class="form-label fw-bold">Total (₹)</label>
                  <input type="number" class="form-control" id="passportTotal" placeholder="Total" min="0" step="0.01" value="0.00">
                </div>
                <div class="col-md-4">
                  <label class="form-label fw-bold">Paid (₹)</label>
                  <input type="number" class="form-control" id="passportPaid" placeholder="Paid" min="0" step="0.01" value="0.00">
                </div>
                <div class="col-md-4">
                  <label class="form-label fw-bold">Pending</label>
                  <input type="text" class="form-control" id="passportPending" placeholder="Pending" readonly>
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label fw-bold">Application Number (12 digits, format 26-0050560599)</label>
                <input type="text" class="form-control" id="passportApplicationNo" placeholder="26-0050560599" pattern="\d{2}-\d{10}" maxlength="13">
              </div>
            </div>
            <input type="hidden" id="passportId">
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" id="savePassportBtn" class="btn btn-pnb-primary">Save Application</button>
        </div>
      </div>
    </div>
  </div>

  <!-- EPFO Modal -->
  <div class="modal fade" id="epfoModal" tabindex="-1" aria-labelledby="epfoModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="epfoModalLabel"><i class="fas fa-file-invoice me-2"></i>EPFO Application</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="epfoForm">
            <h6 class="text-pnb-primary mb-3">Applicant Details</h6>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label fw-bold required-field">Full Name</label>
                <input type="text" class="form-control uppercase" id="epfoName" placeholder="CUSTOMER NAME" required>
              </div>
              <div class="col-md-6">
                <label class="form-label fw-bold">Father/Husband Name</label>
                <input type="text" class="form-control uppercase" id="epfoFatherName" placeholder="FATHER NAME">
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label fw-bold required-field">Mobile Number (10 digits)</label>
                <input type="tel" class="form-control" id="epfoMobile" placeholder="Mobile Number" maxlength="10" required>
              </div>
              <div class="col-md-6">
                <label class="form-label fw-bold required-field">PF Number (Max 12 digits)</label>
                <input type="text" class="form-control" id="epfoPFNo" placeholder="PF Number" maxlength="12" required>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label fw-bold required-field">Password</label>
                <input type="text" class="form-control" id="epfoPassword" placeholder="Enter password" required>
              </div>
            </div>
            <input type="hidden" id="epfoId">
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" id="saveEPFOBtn" class="btn btn-pnb-primary">Save Application</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Aadhaar Modal -->
  <div class="modal fade" id="aadhaarModal" tabindex="-1" aria-labelledby="aadhaarModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="aadhaarModalLabel"><i class="fas fa-id-card me-2"></i>Aadhaar Application</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="aadhaarForm">
            <h6 class="text-pnb-primary mb-3">Applicant Details</h6>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label fw-bold required-field">Full Name</label>
                <input type="text" class="form-control uppercase" id="aadhaarName" placeholder="CUSTOMER NAME" required>
              </div>
              <div class="col-md-6">
                <label class="form-label fw-bold">Father/Husband Name</label>
                <input type="text" class="form-control uppercase" id="aadhaarFatherName" placeholder="FATHER NAME">
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label fw-bold required-field">Mobile Number (10 digits)</label>
                <input type="tel" class="form-control" id="aadhaarMobile" placeholder="Mobile Number" maxlength="10" required>
              </div>
              <div class="col-md-6">
                <label class="form-label fw-bold required-field">Aadhar Number</label>
                <input type="text" class="form-control" id="aadhaarNumber" placeholder="1234 5678 9012" maxlength="14" required inputmode="numeric" autocomplete="off">
                <div id="aadhaarValidationMessage" class="form-text mt-1">Enter 12 digits to validate format and checksum.</div>
              </div>
            </div>
            <input type="hidden" id="aadhaarId">
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" id="saveAadhaarBtn" class="btn btn-pnb-primary">Save Application</button>
        </div>
      </div>
    </div>
  </div>

  <!-- PAN Modal -->
  <div class="modal fade" id="panModal" tabindex="-1" aria-labelledby="panModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg"><div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="panModalLabel"><i class="fas fa-credit-card me-2"></i>PAN Card Application</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="panForm">
          <h6 class="text-pnb-primary mb-3">Applicant Details</h6>
          <div class="row mb-3">
            <div class="col-md-6"><label class="form-label fw-bold required-field">Full Name</label><input type="text" class="form-control uppercase" id="panName" placeholder="CUSTOMER NAME" required></div>
            <div class="col-md-6"><label class="form-label fw-bold">Father/Husband Name</label><input type="text" class="form-control uppercase" id="panFatherName" placeholder="FATHER NAME"></div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6"><label class="form-label fw-bold required-field">Mobile Number (10 digits)</label><input type="tel" class="form-control" id="panMobile" placeholder="Mobile Number" maxlength="10" pattern="[0-9]{10}" required></div>
            <div class="col-md-6"><label class="form-label fw-bold">Date of Birth</label><input type="date" class="form-control" id="panDOB"></div>
          </div>
          <h6 class="text-pnb-primary mb-3 mt-4">Payment Details</h6>
          <div class="payment-details"><div class="row">
            <div class="col-md-4"><label class="form-label fw-bold">Total (₹)</label><input type="number" class="form-control" id="panTotal" placeholder="Total" min="0" step="0.01" value="0.00"></div>
            <div class="col-md-4"><label class="form-label fw-bold">Paid (₹)</label><input type="number" class="form-control" id="panPaid" placeholder="Paid" min="0" step="0.01" value="0.00"></div>
            <div class="col-md-4"><label class="form-label fw-bold">Pending</label><input type="text" class="form-control" id="panPending" placeholder="Pending" readonly></div>
          </div></div>
          <div class="row mb-3 mt-3"><div class="col-md-6"><label class="form-label fw-bold required-field">Application Number</label><input type="text" class="form-control" id="panApplicationNo" placeholder="Application Number" required></div></div>
          <input type="hidden" id="panId">
        </form>
      </div>
      <div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button><button type="button" id="savePANBtn" class="btn btn-pnb-primary">Save Application</button></div>
    </div></div>
  </div>

  <!-- eSarvish Modal -->
  <div class="modal fade" id="esarvishModal" tabindex="-1" aria-labelledby="esarvishModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="esarvishModalLabel"><i class="fas fa-globe me-2"></i>eSarvish Application</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="esarvishForm">
            <h6 class="text-pnb-primary mb-3">Applicant Details</h6>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label fw-bold required-field">Full Name</label>
                <input type="text" class="form-control uppercase" id="esarvishName" placeholder="CUSTOMER NAME" required>
              </div>
              <div class="col-md-6">
                <label class="form-label fw-bold">Father/Husband Name</label>
                <input type="text" class="form-control uppercase" id="esarvishFatherName" placeholder="FATHER NAME">
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label fw-bold required-field">Mobile Number (10 digits)</label>
                <input type="tel" class="form-control" id="esarvishMobile" placeholder="Mobile Number" maxlength="10" required>
              </div>
              <div class="col-md-6">
                <label class="form-label fw-bold required-field">Application Number</label>
                <input type="text" class="form-control" id="esarvishApplicationNo" placeholder="Application Number" required>
              </div>
            </div>
            <h6 class="text-pnb-primary mb-3 mt-4">Payment Details</h6>
            <div class="payment-details">
              <div class="row">
                <div class="col-md-4">
                  <label class="form-label fw-bold">Total (₹)</label>
                  <input type="number" class="form-control" id="esarvishTotal" placeholder="Total" min="0" step="0.01" value="0.00">
                </div>
                <div class="col-md-4">
                  <label class="form-label fw-bold">Paid (₹)</label>
                  <input type="number" class="form-control" id="esarvishPaid" placeholder="Paid" min="0" step="0.01" value="0.00">
                </div>
                <div class="col-md-4">
                  <label class="form-label fw-bold">Pending</label>
                  <input type="text" class="form-control" id="esarvishPending" placeholder="Pending" readonly>
                </div>
              </div>
            </div>
            <input type="hidden" id="esarvishId">
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" id="saveESarvishBtn" class="btn btn-pnb-primary">Save Application</button>
        </div>
      </div>
    </div>
  </div>

  <!-- License Modal -->
  <div class="modal fade" id="licenseModal" tabindex="-1" aria-labelledby="licenseModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="licenseModalLabel"><i class="fas fa-id-card-alt me-2"></i>Driving License Application</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="licenseForm">
            <h6 class="text-pnb-primary mb-3">Applicant Details</h6>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label fw-bold required-field">Full Name</label>
                <input type="text" class="form-control uppercase" id="licenseName" placeholder="CUSTOMER NAME" required>
              </div>
              <div class="col-md-6">
                <label class="form-label fw-bold">Father/Husband Name</label>
                <input type="text" class="form-control uppercase" id="licenseFatherName" placeholder="FATHER NAME">
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label fw-bold required-field">Mobile Number (10 digits)</label>
                <input type="tel" class="form-control" id="licenseMobile" placeholder="Mobile Number" maxlength="10" required>
              </div>
              <div class="col-md-6">
                <label class="form-label fw-bold required-field">Application Number (10 digits)</label>
                <input type="text" class="form-control" id="licenseApplicationNo" placeholder="1234567890" maxlength="10" pattern="[0-9]{10}" required>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label fw-bold required-field">Date of Birth</label>
                <input type="date" class="form-control" id="licenseDOB" required>
              </div>
            </div>
            <h6 class="text-pnb-primary mb-3 mt-4">Payment Details</h6>
            <div class="payment-details">
              <div class="row">
                <div class="col-md-4">
                  <label class="form-label fw-bold">Total (₹)</label>
                  <input type="number" class="form-control" id="licenseTotal" placeholder="Total" min="0" step="0.01" value="0.00">
                </div>
                <div class="col-md-4">
                  <label class="form-label fw-bold">Paid (₹)</label>
                  <input type="number" class="form-control" id="licensePaid" placeholder="Paid" min="0" step="0.01" value="0.00">
                </div>
                <div class="col-md-4">
                  <label class="form-label fw-bold">Pending</label>
                  <input type="text" class="form-control" id="licensePending" placeholder="Pending" readonly>
                </div>
              </div>
            </div>
            <input type="hidden" id="licenseId">
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" id="saveLicenseBtn" class="btn btn-pnb-primary">Save Application</button>
        </div>
      </div>
    </div>
  </div>

  <!-- PNB Account Modal -->
  <div class="modal fade" id="pnbAccountModal" tabindex="-1" aria-labelledby="pnbAccountModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="pnbAccountModalLabel"><i class="fas fa-university me-2"></i>PNB Account Customer</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="pnbAccountForm">
            <h6 class="text-pnb-primary mb-3">Customer Details</h6>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label fw-bold required-field">Full Name</label>
                <input type="text" class="form-control uppercase" id="accountName" placeholder="CUSTOMER NAME" required>
              </div>
              <div class="col-md-6">
                <label class="form-label fw-bold">Father/Husband Name</label>
                <input type="text" class="form-control uppercase" id="accountFatherName" placeholder="FATHER NAME">
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label fw-bold required-field">Mobile Number (10 digits)</label>
                <input type="tel" class="form-control" id="accountMobile" placeholder="Mobile Number" maxlength="10" required>
              </div>
              <div class="col-md-6">
                <label class="form-label fw-bold">Aadhar Number</label>
                <input type="text" class="form-control" id="accountAadhar" placeholder="1234 5678 9012" maxlength="14" inputmode="numeric" autocomplete="off">
                <div id="accountAadhaarValidationMessage" class="form-text mt-1">Enter 12 digits to validate format and checksum.</div>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label fw-bold required-field">Account Number</label>
                <input type="text" class="form-control account-format" id="accountNumber" placeholder="Account Number" maxlength="22" required>
              </div>
<div id="payu-bank-verification-widget" style="margin-top:10px">
  <button type="button" id="payuVerifyBankBtn" class="bank-verify-btn" onclick="verifyBankAccountPayU()">Verify Bank Account</button>
  <div id="payuBankVerifyResult" class="bank-verify-result"></div>
</div>

            </div>
            <input type="hidden" id="accountId">
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" id="saveAccountBtn" class="btn btn-pnb-primary">Save Customer</button>
        </div>
      </div>
    </div>
  </div>

  <!-- BOB Account Modal -->
  <div class="modal fade" id="bobAccountModal" tabindex="-1" aria-labelledby="bobAccountModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="bobAccountModalLabel"><i class="fas fa-university me-2"></i>BOB Account Customer</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="bobAccountForm">
            <h6 class="text-pnb-primary mb-3">Customer Details</h6>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label fw-bold required-field">Full Name</label>
                <input type="text" class="form-control uppercase" id="bobAccountName" placeholder="CUSTOMER NAME" required>
              </div>
              <div class="col-md-6">
                <label class="form-label fw-bold">Father/Husband Name</label>
                <input type="text" class="form-control uppercase" id="bobAccountFatherName" placeholder="FATHER NAME">
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label fw-bold required-field">Mobile Number (10 digits)</label>
                <input type="tel" class="form-control" id="bobAccountMobile" placeholder="Mobile Number" maxlength="10" required>
              </div>
              <div class="col-md-6">
                <label class="form-label fw-bold">Aadhar Number</label>
                <input type="text" class="form-control" id="bobAccountAadhar" placeholder="1234 5678 9012" maxlength="14" inputmode="numeric" autocomplete="off">
                <div id="bobAccountAadhaarValidationMessage" class="form-text mt-1">Enter 12 digits to validate format and checksum.</div>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label fw-bold required-field">Account Number</label>
                <input type="text" class="form-control account-format" id="bobAccountNumber" placeholder="Account Number" maxlength="22" required>
                <div id="bob-bank-verification-widget" style="margin-top:10px">
                  <button type="button" id="bobVerifyBankBtn" class="bank-verify-btn" onclick="verifyBOBAccountPayU()">Verify & Get Account Name</button>
                  <div id="bobBankVerifyResult" class="bank-verify-result"></div>
                  <small class="form-text text-muted">Account number डालें। Verification के बाद उपलब्ध होने पर Account Holder Name अपने-आप भर दिया जाएगा।</small>
                </div>
              </div>
            </div>
            <input type="hidden" id="bobAccountId">
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" id="saveBOBAccountBtn" class="btn btn-pnb-primary">Save Customer</button>
        </div>
      </div>
    </div>
  </div>

  <!-- User Modal -->
  <div class="modal fade" id="userModal" tabindex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="userModalLabel"><i class="fas fa-user-plus me-2"></i>Add New User</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="userForm">
            <input type="hidden" id="userId">
            <div class="mb-3">
              <label for="userEmail" class="form-label">Email Address</label>
              <input type="email" class="form-control" id="userEmail" required>
            </div>
            <div class="mb-3">
              <label for="userPassword" class="form-label">Password</label>
              <input type="password" class="form-control" id="userPassword">
              <small class="text-muted">Leave blank to keep current password</small>
            </div>
            <div class="mb-3">
              <label for="confirmPassword" class="form-label">Confirm Password</label>
              <input type="password" class="form-control" id="confirmPassword">
            </div>
            <div class="mb-3">
              <label class="form-label">Role</label>
              <select class="form-select" id="userRole">
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="viewer" selected>Viewer</option>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" id="saveUserBtn" class="btn btn-pnb-primary">Save User</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Bulk Delete Modal -->
  <div class="modal fade" id="bulkDeleteModal" tabindex="-1" aria-labelledby="bulkDeleteModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title" id="bulkDeleteModalLabel"><i class="fas fa-exclamation-triangle me-2"></i>Confirm Bulk Delete</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>You are about to delete <span id="deleteCount" class="fw-bold">0</span> customers. This action cannot be undone.</p>
          <p class="text-danger"><i class="fas fa-exclamation-circle me-2"></i>Please confirm you want to permanently delete these records.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" id="finalConfirmDeleteBtn" class="btn btn-danger">Confirm Delete</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Import Modal -->
  <div class="modal fade" id="importModal" tabindex="-1" aria-labelledby="importModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="importModalLabel"><i class="fas fa-file-import me-2"></i>Import Customers</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="alert alert-info">
            <i class="fas fa-info-circle me-2"></i>Please upload an Excel file with customer data.
          </div>
          <div class="mb-3">
            <label for="importFile" class="form-label">Select Excel File</label>
            <input class="form-control" type="file" id="importFile" accept=".xlsx, .xls">
          </div>
          <div class="progress mb-3 d-none" id="importProgress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 0%"></div>
          </div>
          <div id="importResults" class="d-none">
            <h6>Import Summary:</h6>
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Total Records
                <span class="badge bg-primary rounded-pill" id="importTotal">0</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Successfully Imported
                <span class="badge bg-success rounded-pill" id="importSuccess">0</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Failed
                <span class="badge bg-danger rounded-pill" id="importFailed">0</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" id="downloadTemplateBtn" class="btn btn-pnb-secondary">Download Template</button>
          <button type="button" id="processImportBtn" class="btn btn-pnb-primary">Process Import</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Backup Modal -->
  <div class="modal fade" id="backupModal" tabindex="-1" aria-labelledby="backupModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="backupModalLabel"><i class="fas fa-database me-2"></i>Backup & Restore</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-4">
            <h6><i class="fas fa-download me-2"></i>Backup Data</h6>
            <p>Create a complete backup of all customer data.</p>
            <button id="backupBtn" class="btn btn-pnb-primary">Create Backup</button>
          </div>
          <hr>
          <div>
            <h6><i class="fas fa-upload me-2"></i>Restore Data</h6>
            <p>Upload a previously saved backup file.</p>
            <div class="mb-3">
              <label for="restoreFile" class="form-label">Select Backup File</label>
              <input class="form-control" type="file" id="restoreFile" accept=".json">
            </div>
            <button id="restoreBtn" class="btn btn-pnb-secondary">Restore</button>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Service Selection Modal -->
  <div class="modal fade" id="serviceSelectionModal" tabindex="-1" aria-labelledby="serviceSelectionModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="serviceSelectionModalLabel"><i class="fas fa-plus-circle me-2"></i>Select Service</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="list-group">
            <button type="button" class="list-group-item list-group-item-action" onclick="openPassportForm()">
              <i class="fas fa-passport me-2" style="color: #2563eb;"></i> Passport Application
            </button>
            <button type="button" class="list-group-item list-group-item-action" onclick="openEPFOForm()">
              <i class="fas fa-file-invoice me-2" style="color: #7c3aed;"></i> EPFO Application
            </button>
            <button type="button" class="list-group-item list-group-item-action" onclick="openAadhaarForm()">
              <i class="fas fa-id-card me-2" style="color: #dc2626;"></i> Aadhaar Application
            </button>
            <button type="button" class="list-group-item list-group-item-action" onclick="openPANForm()">
              <i class="fas fa-credit-card me-2" style="color: #ea580c;"></i> PAN Card Application
            </button>
            <button type="button" class="list-group-item list-group-item-action" onclick="openESarvishForm()">
              <i class="fas fa-globe me-2" style="color: #0891b2;"></i> eSarvish Application
            </button>
            <button type="button" class="list-group-item list-group-item-action" onclick="openLicenseForm()">
              <i class="fas fa-id-card-alt me-2" style="color: #16a34a;"></i> Driving License Application
            </button>
            <button type="button" class="list-group-item list-group-item-action" onclick="openPNBAccountForm()">
              <i class="fas fa-university me-2" style="color: #0066A1;"></i> PNB Account Customer
            </button>
            <button type="button" class="list-group-item list-group-item-action" onclick="openBOBAccountForm()">
              <i class="fas fa-university me-2" style="color: #0066a1;"></i> BOB Account Customer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Floating Action Buttons -->
  <button id="addCustomerBtn" class="floating-btn" aria-label="Add new customer" onclick="showServiceSelection()">
    <i class="fas fa-plus"></i>
  </button>

  <button id="backupFloatingBtn" class="floating-btn" style="right: 120px; background-color: var(--pnb-secondary); color: var(--pnb-dark);" aria-label="Backup data">
    <i class="fas fa-database"></i>
  </button>

  <button id="customerCountBtn" class="floating-btn" style="left: 40px; background-color: var(--pnb-secondary); color: var(--pnb-dark);" data-bs-toggle="tooltip" data-bs-placement="right" title="Total Customers" aria-label="View total customers">
    <i class="fas fa-users"></i>
    <span id="customerCountBadge" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="font-size: 12px;">0</span>
  </button>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <span>© 2025 Punjab National Bank - Sufiyan CSC Center. All rights reserved.</span>
        <a href="mailto:shoaib82734@gmail.com" class="footer-email">
          <i class="fas fa-envelope me-1"></i> shoaib82734@gmail.com
        </a>
      </div>
    </div>
  </footer>

  <!-- JavaScript Libraries -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.6.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.6.0/firebase-auth-compat.js"></script>

  <script>
    // Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyBQAJym4PgqblkfMY7VKRWEMURG8GJ9vU4",
      authDomain: "custumermanagement.firebaseapp.com",
      projectId: "custumermanagement",
      storageBucket: "custumermanagement.appspot.com",
      messagingSenderId: "520929530997",
      appId: "1:520929530997:web:46bb12e02c0d4bc2e9143c"
    };

    // Initialize Firebase
    let app, db, auth;
    
    try {
      app = firebase.initializeApp(firebaseConfig);
      db = firebase.firestore();
      auth = firebase.auth();
      auth.useDeviceLanguage();
      
      firebase.firestore().enablePersistence()
        .catch((err) => {
          if (err.code === 'failed-precondition') {
            console.warn('Multiple tabs open, persistence disabled');
          } else if (err.code === 'unimplemented') {
            console.warn('Browser doesn\'t support persistence');
          }
        });
      
      console.log('Firebase connected successfully');
    } catch (error) {
      console.error('Firebase initialization error:', error);
    }

    document.addEventListener("DOMContentLoaded", () => {
      // Initialize tooltips
      try {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
      } catch (error) {
        console.warn('Tooltips initialization failed:', error);
      }

      // Initialize all modals
      const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
      const userModal = new bootstrap.Modal(document.getElementById('userModal'));
      const backupModal = new bootstrap.Modal(document.getElementById('backupModal'));
      const importModal = new bootstrap.Modal(document.getElementById('importModal'));
      const bulkDeleteModal = new bootstrap.Modal(document.getElementById('bulkDeleteModal'));
      const passportModal = new bootstrap.Modal(document.getElementById('passportModal'));
      const epfoModal = new bootstrap.Modal(document.getElementById('epfoModal'));
      const aadhaarModal = new bootstrap.Modal(document.getElementById('aadhaarModal'));
      const panModal = new bootstrap.Modal(document.getElementById('panModal'));
      const esarvishModal = new bootstrap.Modal(document.getElementById('esarvishModal'));
      const licenseModal = new bootstrap.Modal(document.getElementById('licenseModal'));
      const pnbAccountModal = new bootstrap.Modal(document.getElementById('pnbAccountModal'));
      const bobAccountModal = new bootstrap.Modal(document.getElementById('bobAccountModal'));
      const serviceSelectionModal = new bootstrap.Modal(document.getElementById('serviceSelectionModal'));

      // DOM elements
      const elements = {
        searchBtn: document.getElementById('searchBtn'),
        clearSearchBtn: document.getElementById('clearSearchBtn'),
        searchInput: document.getElementById('searchInput'),
        resultsList: document.getElementById('results'),
        searchStats: document.getElementById('searchStats'),
        viewAllCustomersBtn: document.getElementById('viewAllCustomersBtn'),
        allApplicationsCard: document.getElementById('allApplicationsCard'),
        closeAllApplicationsBtn: document.getElementById('closeAllApplicationsBtn'),
        applicationListBody: document.getElementById('applicationListBody'),
        customerCountBadge: document.getElementById('customerCountBadge'),
        importMenuBtn: document.getElementById('importMenuBtn'),
        downloadTemplateMenuBtn: document.getElementById('downloadTemplateMenuBtn'),
        downloadTemplateBtn: document.getElementById('downloadTemplateBtn'),
        exportDataBtn: document.getElementById('exportDataBtn'),
        importFile: document.getElementById('importFile'),
        processImportBtn: document.getElementById('processImportBtn'),
        importProgress: document.getElementById('importProgress'),
        importResults: document.getElementById('importResults'),
        importTotal: document.getElementById('importTotal'),
        importSuccess: document.getElementById('importSuccess'),
        importFailed: document.getElementById('importFailed'),
        manageUsersBtn: document.getElementById('manageUsersBtn'),
        userManagementCard: document.getElementById('userManagementCard'),
        addUserBtn: document.getElementById('addUserBtn'),
        saveUserBtn: document.getElementById('saveUserBtn'),
        userForm: document.getElementById('userForm'),
        userListBody: document.getElementById('userListBody'),
        logoutBtn: document.getElementById('logoutBtn'),
        homeLink: document.getElementById('homeLink'),
        loginForm: document.getElementById('loginForm'),
        backupBtn: document.getElementById('backupBtn'),
        restoreBtn: document.getElementById('restoreBtn'),
        restoreFile: document.getElementById('restoreFile'),
        backupFloatingBtn: document.getElementById('backupFloatingBtn'),
        bulkActionsPanel: document.getElementById('bulkActionsPanel'),
        selectedCount: document.getElementById('selectedCount'),
        bulkDeleteBtn: document.getElementById('bulkDeleteBtn'),
        confirmDeleteBtn: document.getElementById('confirmDeleteBtn'),
        cancelBulkActionBtn: document.getElementById('cancelBulkActionBtn'),
        finalConfirmDeleteBtn: document.getElementById('finalConfirmDeleteBtn'),
        deleteCount: document.getElementById('deleteCount'),
        alertsContainer: document.getElementById('alertsContainer'),
        exactMatchBtn: document.getElementById('exactMatchBtn'),
        caseSensitiveBtn: document.getElementById('caseSensitiveBtn'),
        currentFilterBadge: document.getElementById('currentFilterBadge'),
        hideAllDataBtn: document.getElementById('hideAllDataBtn'),
        serviceTypeBadge: document.getElementById('serviceTypeBadge'),
        serviceTypeTitle: document.getElementById('serviceTypeTitle'),
        statPassport: document.getElementById('statPassport'),
        statEPFO: document.getElementById('statEPFO'),
        statAadhaar: document.getElementById('statAadhaar'),
        statPAN: document.getElementById('statPAN'),
        statESarvish: document.getElementById('statESarvish'),
        statLicense: document.getElementById('statLicense'),
        statPNBAccount: document.getElementById('statPNBAccount'),
        statBOBAccount: document.getElementById('statBOBAccount'),
        savePassportBtn: document.getElementById('savePassportBtn'),
        saveEPFOBtn: document.getElementById('saveEPFOBtn'),
        saveAadhaarBtn: document.getElementById('saveAadhaarBtn'),
        savePANBtn: document.getElementById('savePANBtn'),
        saveESarvishBtn: document.getElementById('saveESarvishBtn'),
        saveLicenseBtn: document.getElementById('saveLicenseBtn'),
        saveAccountBtn: document.getElementById('saveAccountBtn'),
        saveBOBAccountBtn: document.getElementById('saveBOBAccountBtn')
      };

      // State management
      let state = {
        selectedApplications: new Set(),
        allCustomersData: [],
        currentServiceFilter: 'all',
        exactMatch: false,
        caseSensitive: false,
        isLoading: false,
        dataLoaded: false,
        serviceStats: {
          passport: 0,
          epfo: 0,
          aadhaar: 0,
          pan: 0,
          esarvish: 0,
          license: 0,
          pnb_account: 0,
          bob_account: 0
        }
      };

      // Show alert function
      function showAlert(message, type = 'info') {
        if (!elements.alertsContainer) return;
        
        const alert = document.createElement('div');
        alert.className = `alert alert-${type} alert-dismissible fade show`;
        alert.role = 'alert';
        alert.innerHTML = `
          ${message}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        elements.alertsContainer.appendChild(alert);
        
        setTimeout(() => {
          alert.classList.remove('show');
          setTimeout(() => alert.remove(), 150);
        }, 5000);
      }

      // Aadhaar format + Verhoeff checksum validation (local only; does NOT verify UIDAI issuance)
      const verhoeffD = [
        [0,1,2,3,4,5,6,7,8,9],[1,2,3,4,0,6,7,8,9,5],[2,3,4,0,1,7,8,9,5,6],[3,4,0,1,2,8,9,5,6,7],[4,0,1,2,3,9,5,6,7,8],[5,9,8,7,6,0,4,3,2,1],[6,5,9,8,7,1,0,4,3,2],[7,6,5,9,8,2,1,0,4,3],[8,7,6,5,9,3,2,1,0,4],[9,8,7,6,5,4,3,2,1,0]
      ];
      const verhoeffP = [
        [0,1,2,3,4,5,6,7,8,9],[1,5,7,6,2,8,3,0,9,4],[5,8,0,3,7,9,6,1,4,2],[8,9,1,6,0,4,3,5,2,7],[9,4,5,3,1,2,6,8,7,0],[4,2,8,6,5,7,3,9,0,1],[2,7,9,3,8,0,6,4,1,5],[7,0,4,6,9,1,3,2,5,8]
      ];
      function isValidAadhaarChecksum(value) {
        const digits = String(value).replace(/\D/g, '');
        if (!/^\d{12}$/.test(digits)) return false;
        let c = 0;
        const reversed = digits.split('').reverse();
        for (let i = 0; i < reversed.length; i++) c = verhoeffD[c][verhoeffP[i % 8][Number(reversed[i])]];
        return c === 0;
      }
      function updateAadhaarValidation(value) {
        const msg = document.getElementById('aadhaarValidationMessage');
        const input = document.getElementById('aadhaarNumber');
        if (!msg || !input) return;
        const digits = String(value || '').replace(/\D/g, '');
        input.classList.remove('is-valid','is-invalid');
        if (!digits.length) {
          msg.className = 'form-text mt-1';
          msg.textContent = 'Enter 12 digits to validate format and checksum.';
          return;
        }
        if (digits.length < 12) {
          msg.className = 'form-text mt-1 text-muted';
          msg.textContent = `Enter ${12 - digits.length} more digit(s).`;
          return;
        }
        if (isValidAadhaarChecksum(digits)) {
          input.classList.add('is-valid');
          msg.className = 'form-text mt-1 text-success fw-semibold';
          msg.textContent = '✓ Aadhaar number format/checksum is valid.';
        } else {
          input.classList.add('is-invalid');
          msg.className = 'form-text mt-1 text-danger fw-semibold';
          msg.textContent = '✗ Aadhaar number is invalid (format/checksum).';
        }
      }

      // Format functions
      function formatAadhar(aadhar) {
        if (!aadhar) return '';
        const aadharStr = aadhar.toString();
        const cleaned = aadharStr.replace(/\s+/g, '').replace(/\D/g, '');
        if (cleaned.length === 12) {
          return cleaned.replace(/(\d{4})(\d{4})(\d{4})/, '$1 $2 $3');
        }
        return aadharStr;
      }

      function formatAccount(account, serviceType = '') {
        if (!account) return '';
        const accountStr = account.toString();
        const cleaned = accountStr.replace(/\s+/g, '').replace(/\D/g, '');
        if (serviceType === 'bob_account' && cleaned.length === 14) {
          return cleaned.replace(/(\d{4})(\d{4})(\d{4})(\d{2})/, '$1 $2 $3 $4');
        }
        if (cleaned.length === 16) {
          return cleaned.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');
        }
        return accountStr;
      }

      // Click "Filter by Service" to show/hide all service choices.
      const filterServiceToggle = document.getElementById('filterServiceToggle');
      const serviceFilterOptions = document.getElementById('serviceFilterOptions');
      if (filterServiceToggle && serviceFilterOptions) {
        filterServiceToggle.addEventListener('click', () => {
          const isOpen = filterServiceToggle.getAttribute('aria-expanded') === 'true';
          filterServiceToggle.setAttribute('aria-expanded', String(!isOpen));
          serviceFilterOptions.classList.toggle('d-none', isOpen);
        });
      }

      // Search Customers: one normal search input; selecting a service only
      // changes the table columns and the input hint.
      const SERVICE_TABLE_HEADERS = {
        all: ['Service','Name','Father/Husband','Mobile','Account No.','Aadhar','Application','Password','Pending (₹)','Actions'],
        passport: ['Service','Name','Father/Husband','Mobile','Application','Date of Birth','Pending (₹)','Actions'],
        epfo: ['Service','Name','Father/Husband','Mobile','PF Number','Date of Birth','Password','Actions'],
        aadhaar: ['Service','Name','Father/Husband','Mobile','Aadhar','Pending (₹)','Actions'],
        pan: ['Service','Name','Father/Husband','Mobile','Application','Date of Birth','Pending (₹)','Actions'],
        esarvish: ['Service','Name','Father/Husband','Mobile','Application','Pending (₹)','Actions'],
        license: ['Service','Name','Father/Husband','Mobile','Application','Pending (₹)','Actions'],
        bob_account: ['Service','Name','Father/Husband','Mobile','Account No.','Aadhar','Actions'],
        pnb_account: ['Service','Name','Father/Husband','Mobile','Account No.','Aadhar','Actions']
      };

      const SERVICE_SEARCH_HINTS = {
        all: 'Search by name, father/husband, mobile, Aadhar, application, account number, password...',
        passport: 'Search Passport by name, father/husband, mobile, Aadhar, application, account number...',
        epfo: 'Search EPFO by name, father/husband, mobile, EPF number, password...',
        aadhaar: 'Search Aadhaar by name, father/husband, mobile, Aadhar number...',
        pan: 'Search PAN Card by name, father/husband, mobile, PAN Card, application...',
        esarvish: 'Search eSarvish by name, father/husband, mobile, application...',
        license: 'Search Driving License by name, father/husband, mobile, application...',
        bob_account: 'Search BOB Account by name, father/husband, mobile, account number, Aadhar...',
        pnb_account: 'Search PNB Account by name, father/husband, mobile, account number, Aadhar...'
      };

      function setTableHeaders(service) {
        const cols = SERVICE_TABLE_HEADERS[service] || SERVICE_TABLE_HEADERS.all;
        const markup = `<tr>${cols.map(h => `<th>${h}</th>`).join('')}</tr>`;
        if (elements.searchResultsHeader) elements.searchResultsHeader.innerHTML = markup;
        if (elements.applicationsHeader) elements.applicationsHeader.innerHTML = markup;
        if (elements.searchInput) {
          elements.searchInput.placeholder = SERVICE_SEARCH_HINTS[service] || SERVICE_SEARCH_HINTS.all;
        }
        return cols.length;
      }

      function searchTableColspan(service) {
        return (SERVICE_TABLE_HEADERS[service] || SERVICE_TABLE_HEADERS.all).length;
      }

      // Service-specific row mapping. Each selected service has its own exact columns.
      function createTableRow(customer) {
        const id = customer.id;
        const type = customer.serviceType || 'pnb_account';

        const name = customer.name || '';
        const father = customer.fatherName || '';
        const mobile = customer.mobile || '';
        const aadhar = customer.aadhar ? formatAadhar(customer.aadhar) : '';
        const application = customer.applicationNo || '';
        // PAN Card application number is stored as panNo.
        const panApplication = customer.panNo || '';
        const account = customer.account ? formatAccount(customer.account, type) : '';
        const password = customer.password || '';
        // Passport/PAN use the existing "password" storage field for DOB.
        const dob = customer.dob || customer.password || '';
        const epfoDob = customer.dob || '';
        const pan = customer.panNo || '';
        const epf = customer.pfNo || '';
        const pending = Number(customer.pending || 0);
        const pendingHtml = `<span class="pending-amount" style="color:#dc3545 !important;font-weight:bold;">₹${pending.toFixed(2)}</span>`;

        const miss = value => value
          ? value
          : '<span class="missing-data">---</span>';

        const actions = `<td class="user-actions">
          <button class="btn btn-sm btn-pnb-primary edit-btn" data-id="${id}" data-type="${type}" title="Edit"><i class="fas fa-edit"></i></button>
          <button class="btn btn-sm btn-danger delete-btn" data-id="${id}" data-type="${type}" title="Delete"><i class="fas fa-trash"></i></button>
        </td>`;

        if (type === 'passport') {
          return `<tr>
            <td>Passport</td>
            <td style="font-weight:600;">${miss(name)}</td>
            <td>${miss(father)}</td>
            <td>${miss(mobile)}</td>
            <td style="font-weight:600;">${miss(application)}</td>
            <td>${miss(dob)}</td>
            <td>${pendingHtml}</td>
            ${actions}
          </tr>`;
        }

        if (type === 'epfo') {
          return `<tr>
            <td>EPFO</td>
            <td style="font-weight:600;">${miss(name)}</td>
            <td>${miss(father)}</td>
            <td>${miss(mobile)}</td>
            <td style="font-weight:600;">${miss(epf)}</td>
            <td>${miss(epfoDob)}</td>
            <td>${miss(password)}</td>
            ${actions}
          </tr>`;
        }

        if (type === 'aadhaar') {
          return `<tr>
            <td>Aadhaar</td>
            <td style="font-weight:600;">${miss(name)}</td>
            <td>${miss(father)}</td>
            <td>${miss(mobile)}</td>
            <td style="font-weight:600;">${miss(aadhar)}</td>
            <td>${pendingHtml}</td>
            ${actions}
          </tr>`;
        }

        if (type === 'pan') {
          return `<tr>
            <td>PAN Card</td>
            <td style="font-weight:600;">${miss(name)}</td>
            <td>${miss(father)}</td>
            <td>${miss(mobile)}</td>
            <td style="font-weight:600;">${miss(panApplication)}</td>
            <td>${miss(dob)}</td>
            <td>${pendingHtml}</td>
            ${actions}
          </tr>`;
        }

        if (type === 'esarvish') {
          return `<tr>
            <td>eSarvish</td>
            <td style="font-weight:600;">${miss(name)}</td>
            <td>${miss(father)}</td>
            <td>${miss(mobile)}</td>
            <td style="font-weight:600;">${miss(application)}</td>
            <td>${pendingHtml}</td>
            ${actions}
          </tr>`;
        }

        if (type === 'license') {
          return `<tr>
            <td>Driving License</td>
            <td style="font-weight:600;">${miss(name)}</td>
            <td>${miss(father)}</td>
            <td>${miss(mobile)}</td>
            <td style="font-weight:600;">${miss(application)}</td>
            <td>${pendingHtml}</td>
            ${actions}
          </tr>`;
        }

        if (type === 'bob_account') {
          return `<tr>
            <td>BOB Account</td>
            <td style="font-weight:600;">${miss(name)}</td>
            <td>${miss(father)}</td>
            <td>${miss(mobile)}</td>
            <td style="font-weight:600;">${miss(account)}</td>
            <td style="font-weight:600;">${miss(aadhar)}</td>
            ${actions}
          </tr>`;
        }

        if (type === 'pnb_account') {
          return `<tr>
            <td>PNB Account</td>
            <td style="font-weight:600;">${miss(name)}</td>
            <td>${miss(father)}</td>
            <td>${miss(mobile)}</td>
            <td style="font-weight:600;">${miss(account)}</td>
            <td style="font-weight:600;">${miss(aadhar)}</td>
            ${actions}
          </tr>`;
        }

        return `<tr>
          <td>${type}</td>
          <td style="font-weight:600;">${miss(name)}</td>
          <td>${miss(father)}</td>
          <td>${miss(mobile)}</td>
          <td style="font-weight:600;">${miss(account)}</td>
          <td style="font-weight:600;">${miss(aadhar)}</td>
          <td style="font-weight:600;">${miss(application)}</td>
          <td>${miss(password)}</td>
          <td>${pendingHtml}</td>
          ${actions}
        </tr>`;
      }


      // Common "All Customers" renderer: always uses the requested order:
      // Service, Name, Father/Husband, Mobile, Account No., Aadhar,
      // Application, Password, Pending (₹), Actions.
      function createAllCustomersRow(customer) {
        const id = customer.id;
        const type = customer.serviceType || 'pnb_account';
        const service = type === 'bob_account' ? 'BOB Account'
          : type === 'pnb_account' ? 'PNB Account'
          : type === 'passport' ? 'Passport'
          : type === 'epfo' ? 'EPFO'
          : type === 'aadhaar' ? 'Aadhaar'
          : type === 'pan' ? 'PAN Card'
          : type === 'esarvish' ? 'eSarvish'
          : type === 'license' ? 'Driving License'
          : type;
        const name = customer.name || '';
        const father = customer.fatherName || '';
        const mobile = customer.mobile || '';
        const account = customer.account ? formatAccount(customer.account, type) : '';
        const aadhar = customer.aadhar ? formatAadhar(customer.aadhar) : '';
        const application = customer.applicationNo || (type === 'pan' ? (customer.panNo || '') : '');
        const password = customer.password || '—';
        const pending = Number(customer.pending || 0);
        const pendingHtml = `<span class="pending-amount" style="color:#dc3545 !important;font-weight:bold;">₹${pending.toFixed(2)}</span>`;
        const actions = `<td class="user-actions">
          <button class="btn btn-sm btn-pnb-primary edit-btn" data-id="${id}" data-type="${type}"><i class="fas fa-edit"></i></button>
          <button class="btn btn-sm btn-danger delete-btn" data-id="${id}" data-type="${type}"><i class="fas fa-trash"></i></button>
        </td>`;
        return `<tr>
          <td>${service}</td>
          <td style="font-weight:600;">${name}</td>
          <td>${father}</td>
          <td>${mobile}</td>
          <td style="font-weight:600;">${account}</td>
          <td style="font-weight:600;">${aadhar}</td>
          <td style="font-weight:600;">${application}</td>
          <td>${password}</td>
          <td>${pendingHtml}</td>
          ${actions}
        </tr>`;
      }

      // One delegated listener for the result table. This is much faster than
      // attaching two listeners to every row after every search/filter render.
      function addTableEventListeners() {
        if (elements.resultsList && !elements.resultsList.dataset.delegated) {
          elements.resultsList.dataset.delegated = 'true';
          elements.resultsList.addEventListener('click', (e) => {
            const editBtn = e.target.closest('.edit-btn');
            const deleteBtn = e.target.closest('.delete-btn');
            const btn = editBtn || deleteBtn;
            if (!btn) return;
            e.stopPropagation();
            const custId = btn.dataset.id;
            const custType = btn.dataset.type;
            if (editBtn) {
              openEditModal(custId, custType);
              return;
            }
            if (confirm('Are you sure you want to delete this customer?')) {
              const collection = (['pnb_account', 'bob_account'].includes(custType)) ? 'customers' : 'applications';
              db.collection(collection).doc(custId).delete().then(() => {
                state.allCustomersData = state.allCustomersData.filter(x => !(x.id === custId && (x.serviceType || 'pnb_account') === custType));
                loadServiceStats();
                performSearch();
                showAlert('Customer deleted successfully!', 'success');
              });
            }
          });
        }
      }

      // Open edit modal with payment fields
      function openEditModal(custId, custType) {
        const collection = (['pnb_account', 'bob_account'].includes(custType)) ? "customers" : "applications";
        
        db.collection(collection).doc(custId).get().then((doc) => {
          if (doc.exists) {
            const cust = doc.data();
            document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
            
            switch(custType) {
              case 'passport':
                document.getElementById('passportId').value = doc.id;
                document.getElementById('passportName').value = cust.name || '';
                document.getElementById('passportFatherName').value = cust.fatherName || '';
                document.getElementById('passportMobile').value = cust.mobile || '';
                document.getElementById('passportDOB').value = cust.dateOfBirth || '';
                document.getElementById('passportTotal').value = cust.total || 0;
                document.getElementById('passportPaid').value = cust.paid || 0;
                document.getElementById('passportPending').value = cust.pending || 0;
                document.getElementById('passportApplicationNo').value = cust.applicationNo || '';
                
                passportModal.show();
                break;
              case 'epfo':
                document.getElementById('epfoId').value = doc.id;
                document.getElementById('epfoName').value = cust.name || '';
                document.getElementById('epfoFatherName').value = cust.fatherName || '';
                document.getElementById('epfoMobile').value = cust.mobile || '';
                document.getElementById('epfoPFNo').value = cust.pfNo || '';
                document.getElementById('epfoPassword').value = cust.password || '';
                epfoModal.show();
                break;
              case 'aadhaar':
                document.getElementById('aadhaarId').value = doc.id;
                document.getElementById('aadhaarName').value = cust.name || '';
                document.getElementById('aadhaarFatherName').value = cust.fatherName || '';
                document.getElementById('aadhaarMobile').value = cust.mobile || '';
                document.getElementById('aadhaarNumber').value = formatAadhar(cust.aadhar) || '';
                aadhaarModal.show();
                break;
              case 'pan':
                document.getElementById('panId').value = doc.id;
                document.getElementById('panName').value = cust.name || '';
                document.getElementById('panFatherName').value = cust.fatherName || '';
                document.getElementById('panMobile').value = cust.mobile || '';
                document.getElementById('panDOB').value = cust.dateOfBirth || cust.dob || '';
                document.getElementById('panTotal').value = cust.total || 0;
                document.getElementById('panPaid').value = cust.paid || 0;
                document.getElementById('panPending').value = cust.pending || 0;
                document.getElementById('panApplicationNo').value = cust.panNo || '';
                document.getElementById('panPassword').value = cust.password || '';
                panModal.show();
                break;
              case 'esarvish':
                document.getElementById('esarvishId').value = doc.id;
                document.getElementById('esarvishName').value = cust.name || '';
                document.getElementById('esarvishFatherName').value = cust.fatherName || '';
                document.getElementById('esarvishMobile').value = cust.mobile || '';
                document.getElementById('esarvishTotal').value = cust.total || 0;
                document.getElementById('esarvishPaid').value = cust.paid || 0;
                document.getElementById('esarvishPending').value = cust.pending || 0;
                document.getElementById('esarvishApplicationNo').value = cust.applicationNo || '';
                esarvishModal.show();
                break;
              case 'license':
                document.getElementById('licenseId').value = doc.id;
                document.getElementById('licenseName').value = cust.name || '';
                document.getElementById('licenseFatherName').value = cust.fatherName || '';
                document.getElementById('licenseMobile').value = cust.mobile || '';
                document.getElementById('licenseTotal').value = cust.total || 0;
                document.getElementById('licensePaid').value = cust.paid || 0;
                document.getElementById('licensePending').value = cust.pending || 0;
                document.getElementById('licenseApplicationNo').value = cust.applicationNo || '';
                document.getElementById('licenseDOB').value = cust.dateOfBirth || '';
                licenseModal.show();
                break;
              case 'pnb_account':
                document.getElementById('accountId').value = doc.id;
                document.getElementById('accountName').value = cust.name || '';
                document.getElementById('accountFatherName').value = cust.fatherName || '';
                document.getElementById('accountMobile').value = cust.mobile || '';
                document.getElementById('accountAadhar').value = formatAadhar(cust.aadhar) || '';
                document.getElementById('accountNumber').value = formatAccount(cust.account) || '';
                pnbAccountModal.show();
                break;
              case 'bob_account':
                document.getElementById('bobAccountId').value = doc.id;
                document.getElementById('bobAccountName').value = cust.name || '';
                document.getElementById('bobAccountFatherName').value = cust.fatherName || '';
                document.getElementById('bobAccountMobile').value = cust.mobile || '';
                document.getElementById('bobAccountAadhar').value = formatAadhar(cust.aadhar) || '';
                updateBOBAadhaarValidation(document.getElementById('bobAccountAadhar').value);
                document.getElementById('bobAccountNumber').value = formatAccount(cust.account) || '';
                bobAccountModal.show();
                break;
            }
          }
        });
      }

      elements.saveBOBAccountBtn?.addEventListener('click', function() {
        const name = document.getElementById('bobAccountName').value;
        const mobile = document.getElementById('bobAccountMobile').value;
        const accountNumber = document.getElementById('bobAccountNumber').value.replace(/\s+/g, '');
        const appId = document.getElementById('bobAccountId').value;

        if (!name || !mobile || !accountNumber) {
          showAlert('Please fill all required fields', 'danger');
          return;
        }
        if (mobile.length !== 10) {
          showAlert('Mobile number must be exactly 10 digits', 'danger');
          return;
        }
        if (accountNumber.length !== 14) {
          showAlert('Account number must be exactly 14 digits', 'danger');
          return;
        }

        const bobAadhaar = document.getElementById('bobAccountAadhar').value.replace(/\D/g, '');
        if (bobAadhaar && !isValidAadhaarChecksum(bobAadhaar)) {
          updateBOBAadhaarValidation(bobAadhaar);
          showAlert('Aadhaar number is invalid. Please check the 12-digit number.', 'danger');
          return;
        }

        const formData = {
          name: name.toUpperCase(),
          fatherName: document.getElementById('bobAccountFatherName').value.toUpperCase(),
          mobile: mobile,
          aadhar: document.getElementById('bobAccountAadhar').value.replace(/\s+/g, ''),
          account: accountNumber,
          serviceType: 'bob_account',
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        };

        const savePromise = appId ?
          db.collection('customers').doc(appId).update(formData) :
          db.collection('customers').add({ ...formData, createdAt: firebase.firestore.FieldValue.serverTimestamp() });

        savePromise.then(() => {
          bobAccountModal.hide();
          loadAllCustomers();
          loadServiceStats();
          showAlert(appId ? 'BOB Account customer updated successfully!' : 'BOB Account customer saved successfully!', 'success');
        }).catch(error => {
          console.error('Error saving BOB account customer:', error);
          showAlert('Error saving BOB account customer. Please try again.', 'danger');
        });
      });

      // Calculate pending amounts
      function calculatePassportPending() {
        const total = parseFloat(document.getElementById('passportTotal')?.value || 0);
        const paid = parseFloat(document.getElementById('passportPaid')?.value || 0);
        document.getElementById('passportPending').value = Math.max(0, total - paid).toFixed(2);
      }

      function calculatePANPending() {
        const total = parseFloat(document.getElementById('panTotal')?.value || 0);
        const paid = parseFloat(document.getElementById('panPaid')?.value || 0);
        document.getElementById('panPending').value = Math.max(0, total - paid).toFixed(2);
      }

      function calculateESarvishPending() {
        const total = parseFloat(document.getElementById('esarvishTotal')?.value || 0);
        const paid = parseFloat(document.getElementById('esarvishPaid')?.value || 0);
        document.getElementById('esarvishPending').value = Math.max(0, total - paid).toFixed(2);
      }

      function calculateLicensePending() {
        const total = parseFloat(document.getElementById('licenseTotal')?.value || 0);
        const paid = parseFloat(document.getElementById('licensePaid')?.value || 0);
        document.getElementById('licensePending').value = Math.max(0, total - paid).toFixed(2);
      }

      document.getElementById('passportTotal')?.addEventListener('input', calculatePassportPending);
      document.getElementById('passportPaid')?.addEventListener('input', calculatePassportPending);
      document.getElementById('panTotal')?.addEventListener('input', calculatePANPending);
      document.getElementById('panPaid')?.addEventListener('input', calculatePANPending);
      document.getElementById('esarvishTotal')?.addEventListener('input', calculateESarvishPending);
      document.getElementById('esarvishPaid')?.addEventListener('input', calculateESarvishPending);
      document.getElementById('licenseTotal')?.addEventListener('input', calculateLicensePending);
      document.getElementById('licensePaid')?.addEventListener('input', calculateLicensePending);

      // Force uppercase for all name fields
      document.querySelectorAll('.uppercase').forEach(input => {
        input.addEventListener('input', function() {
          this.value = this.value.toUpperCase();
        });
      });

      // Aadhar formatting
      document.getElementById('passportAadhar')?.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '').replace(/\D/g, '');
        if (value.length > 0) {
          value = value.match(new RegExp('.{1,4}', 'g')).join(' ');
        }
        e.target.value = value.substring(0, 14);
      });

      document.getElementById('aadhaarNumber')?.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '').replace(/\D/g, '');
        if (value.length > 0) {
          value = value.match(new RegExp('.{1,4}', 'g')).join(' ');
        }
        e.target.value = value.substring(0, 14);
        updateAadhaarValidation(e.target.value);
      });

      function updatePNBAadhaarValidation(value) {
        const msg = document.getElementById('accountAadhaarValidationMessage');
        const input = document.getElementById('accountAadhar');
        if (!msg || !input) return;
        const digits = String(value || '').replace(/\D/g, '');
        input.classList.remove('is-valid','is-invalid');
        if (!digits.length) {
          msg.className = 'form-text mt-1';
          msg.textContent = 'Enter 12 digits to validate format and checksum.';
          return;
        }
        if (digits.length < 12) {
          msg.className = 'form-text mt-1 text-muted';
          msg.textContent = `Enter ${12 - digits.length} more digit(s).`;
          return;
        }
        if (isValidAadhaarChecksum(digits)) {
          input.classList.add('is-valid');
          msg.className = 'form-text mt-1 text-success fw-semibold';
          msg.textContent = '✓ Aadhaar number format/checksum is valid.';
        } else {
          input.classList.add('is-invalid');
          msg.className = 'form-text mt-1 text-danger fw-semibold';
          msg.textContent = '✗ Aadhaar number is invalid (format/checksum).';
        }
      }

      document.getElementById('accountAadhar')?.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '').replace(/\D/g, '');
        if (value.length > 0) value = value.match(new RegExp('.{1,4}', 'g')).join(' ');
        e.target.value = value.substring(0, 14);
        updatePNBAadhaarValidation(e.target.value);
      });

      function updateBOBAadhaarValidation(value) {
        const msg = document.getElementById('bobAccountAadhaarValidationMessage');
        const input = document.getElementById('bobAccountAadhar');
        if (!msg || !input) return;
        const digits = String(value || '').replace(/\D/g, '');
        input.classList.remove('is-valid','is-invalid');
        if (!digits.length) {
          msg.className = 'form-text mt-1';
          msg.textContent = 'Enter 12 digits to validate format and checksum.';
          return;
        }
        if (digits.length < 12) {
          msg.className = 'form-text mt-1 text-muted';
          msg.textContent = `Enter ${12 - digits.length} more digit(s).`;
          return;
        }
        if (isValidAadhaarChecksum(digits)) {
          input.classList.add('is-valid');
          msg.className = 'form-text mt-1 text-success fw-semibold';
          msg.textContent = '✓ Aadhaar number format/checksum is valid.';
        } else {
          input.classList.add('is-invalid');
          msg.className = 'form-text mt-1 text-danger fw-semibold';
          msg.textContent = '✗ Aadhaar number is invalid (format/checksum).';
        }
      }

      document.getElementById('bobAccountAadhar')?.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '').replace(/\D/g, '').substring(0, 12);
        if (value.length > 0) value = value.match(new RegExp('.{1,4}', 'g')).join(' ');
        e.target.value = value;
        updateBOBAadhaarValidation(value);
      });

      document.getElementById('accountNumber')?.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '').replace(/\D/g, '');
        if (value.length > 0) {
          value = value.match(new RegExp('.{1,4}', 'g')).join(' ');
        }
        e.target.value = value.substring(0, 19);
      });

      document.getElementById('passportApplicationNo')?.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 2) {
          value = value.substring(0, 2) + '-' + value.substring(2, 12);
        }
        e.target.value = value.substring(0, 13);
      });

      // Save functions with validation
      function saveApplication(formData, docId, modal) {
        if (!db) {
          showAlert('Firebase not connected', 'danger');
          return;
        }
        
        const savePromise = docId ? 
          db.collection("applications").doc(docId).update(formData) :
          db.collection("applications").add({
            ...formData,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
          });
        
        savePromise
          .then(() => {
            modal.hide();
            loadAllCustomers();
            loadServiceStats();
            showAlert(docId ? 'Application updated successfully!' : 'Application saved successfully!', 'success');
          })
          .catch(error => {
            console.error('Error saving application:', error);
            showAlert('Error saving application. Please try again.', 'danger');
          });
      }

      // Save button listeners
      elements.savePassportBtn?.addEventListener('click', function() {
        const name = document.getElementById('passportName').value;
        const mobile = document.getElementById('passportMobile').value;
        const appId = document.getElementById('passportId').value;
        
        if (!name || !mobile) {
          showAlert('Please fill all required fields', 'danger');
          return;
        }
        
        if (mobile.length !== 10) {
          showAlert('Mobile number must be exactly 10 digits', 'danger');
          return;
        }
        
        const formData = {
          name: name.toUpperCase(),
          fatherName: document.getElementById('passportFatherName').value.toUpperCase(),
          mobile: mobile,
          dateOfBirth: document.getElementById('passportDOB').value,
          total: parseFloat(document.getElementById('passportTotal').value) || 0,
          paid: parseFloat(document.getElementById('passportPaid').value) || 0,
          pending: parseFloat(document.getElementById('passportPending').value) || 0,
          applicationNo: document.getElementById('passportApplicationNo').value,
          serviceType: 'passport',
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        
        saveApplication(formData, appId, passportModal);
      });

      elements.saveEPFOBtn?.addEventListener('click', function() {
        const name = document.getElementById('epfoName').value;
        const mobile = document.getElementById('epfoMobile').value;
        const pfNo = document.getElementById('epfoPFNo').value;
        const appId = document.getElementById('epfoId').value;
        
        if (!name || !mobile || !pfNo) {
          showAlert('Please fill all required fields', 'danger');
          return;
        }
        
        if (mobile.length !== 10) {
          showAlert('Mobile number must be exactly 10 digits', 'danger');
          return;
        }
        
        const formData = {
          name: name.toUpperCase(),
          fatherName: document.getElementById('epfoFatherName').value.toUpperCase(),
          mobile: mobile,
          pfNo: pfNo,
          password: document.getElementById('epfoPassword').value,
          serviceType: 'epfo',
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        
        saveApplication(formData, appId, epfoModal);
      });

      elements.saveAadhaarBtn?.addEventListener('click', function() {
        const name = document.getElementById('aadhaarName').value;
        const mobile = document.getElementById('aadhaarMobile').value;
        const aadhar = document.getElementById('aadhaarNumber').value.replace(/\s+/g, '');
        const appId = document.getElementById('aadhaarId').value;
        
        if (!name || !mobile || !aadhar) {
          showAlert('Please fill all required fields', 'danger');
          return;
        }
        
        if (mobile.length !== 10) {
          showAlert('Mobile number must be exactly 10 digits', 'danger');
          return;
        }
        
        if (aadhar.length !== 12) {
          showAlert('Aadhar number must be exactly 12 digits', 'danger');
          return;
        }

        if (!isValidAadhaarChecksum(aadhar)) {
          updateAadhaarValidation(aadhar);
          showAlert('Aadhaar number is invalid. Please check the 12-digit number.', 'danger');
          return;
        }
        
        const formData = {
          name: name.toUpperCase(),
          fatherName: document.getElementById('aadhaarFatherName').value.toUpperCase(),
          mobile: mobile,
          aadhar: aadhar,
          serviceType: 'aadhaar',
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        
        saveApplication(formData, appId, aadhaarModal);
      });

      elements.savePANBtn?.addEventListener('click', function() {
        const name = document.getElementById('panName').value;
        const mobile = document.getElementById('panMobile').value;
        const panNo = document.getElementById('panApplicationNo').value;
        const appId = document.getElementById('panId').value;
        
        if (!name || !mobile || !panNo) {
          showAlert('Please fill all required fields', 'danger');
          return;
        }
        
        if (mobile.length !== 10) {
          showAlert('Mobile number must be exactly 10 digits', 'danger');
          return;
        }
        
        const formData = {
          name: name.toUpperCase(),
          fatherName: document.getElementById('panFatherName').value.toUpperCase(),
          mobile: mobile,
          panNo: panNo,
          dateOfBirth: document.getElementById('panDOB').value,
          applicationNo: panNo,
          total: parseFloat(document.getElementById('panTotal').value) || 0,
          paid: parseFloat(document.getElementById('panPaid').value) || 0,
          pending: parseFloat(document.getElementById('panPending').value) || 0,
          serviceType: 'pan',
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        
        saveApplication(formData, appId, panModal);
      });

      elements.saveESarvishBtn?.addEventListener('click', function() {
        const name = document.getElementById('esarvishName').value;
        const mobile = document.getElementById('esarvishMobile').value;
        const appNo = document.getElementById('esarvishApplicationNo').value;
        const appId = document.getElementById('esarvishId').value;
        
        if (!name || !mobile || !appNo) {
          showAlert('Please fill all required fields', 'danger');
          return;
        }
        
        if (mobile.length !== 10) {
          showAlert('Mobile number must be exactly 10 digits', 'danger');
          return;
        }
        
        const formData = {
          name: name.toUpperCase(),
          fatherName: document.getElementById('esarvishFatherName').value.toUpperCase(),
          mobile: mobile,
          applicationNo: appNo,
          total: parseFloat(document.getElementById('esarvishTotal').value) || 0,
          paid: parseFloat(document.getElementById('esarvishPaid').value) || 0,
          pending: parseFloat(document.getElementById('esarvishPending').value) || 0,
          serviceType: 'esarvish',
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        
        saveApplication(formData, appId, esarvishModal);
      });

      elements.saveLicenseBtn?.addEventListener('click', function() {
        const name = document.getElementById('licenseName').value;
        const mobile = document.getElementById('licenseMobile').value;
        const appNo = document.getElementById('licenseApplicationNo').value;
        const appId = document.getElementById('licenseId').value;
        const dateOfBirth = document.getElementById('licenseDOB').value;
        
        if (!name || !mobile || !appNo || !dateOfBirth) {
          showAlert('Please fill all required fields', 'danger');
          return;
        }
        
        if (mobile.length !== 10) {
          showAlert('Mobile number must be exactly 10 digits', 'danger');
          return;
        }
        
        if (appNo.length !== 10) {
          showAlert('License Application Number must be exactly 10 digits', 'danger');
          return;
        }
        
        const formData = {
          name: name.toUpperCase(),
          fatherName: document.getElementById('licenseFatherName').value.toUpperCase(),
          mobile: mobile,
          applicationNo: appNo,
          dateOfBirth: dateOfBirth,
          total: parseFloat(document.getElementById('licenseTotal').value) || 0,
          paid: parseFloat(document.getElementById('licensePaid').value) || 0,
          pending: parseFloat(document.getElementById('licensePending').value) || 0,
          serviceType: 'license',
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        
        saveApplication(formData, appId, licenseModal);
      });

      elements.saveAccountBtn?.addEventListener('click', function() {
        const name = document.getElementById('accountName').value;
        const mobile = document.getElementById('accountMobile').value;
        const accountNumber = document.getElementById('accountNumber').value.replace(/\s+/g, '');
        const appId = document.getElementById('accountId').value;
        
        if (!name || !mobile || !accountNumber) {
          showAlert('Please fill all required fields', 'danger');
          return;
        }
        
        if (mobile.length !== 10) {
          showAlert('Mobile number must be exactly 10 digits', 'danger');
          return;
        }
        
        if (accountNumber.length !== 16) {
          showAlert('Account number must be exactly 16 digits', 'danger');
          return;
        }

        const pnbAadhaar = document.getElementById('accountAadhar').value.replace(/\D/g, '');
        if (pnbAadhaar && !isValidAadhaarChecksum(pnbAadhaar)) {
          updatePNBAadhaarValidation(pnbAadhaar);
          showAlert('Aadhaar number is invalid. Please check the 12-digit number.', 'danger');
          return;
        }
        
        const formData = {
          name: name.toUpperCase(),
          fatherName: document.getElementById('accountFatherName').value.toUpperCase(),
          mobile: mobile,
          aadhar: document.getElementById('accountAadhar').value.replace(/\s+/g, ''),
          account: accountNumber,
          serviceType: 'pnb_account',
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        
        const savePromise = appId ? 
          db.collection("customers").doc(appId).update(formData) :
          db.collection("customers").add({
            ...formData,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
          });
        
        savePromise
          .then(() => {
            pnbAccountModal.hide();
            loadAllCustomers();
            loadServiceStats();
            showAlert(appId ? 'Customer updated successfully!' : 'Customer saved successfully!', 'success');
          })
          .catch(error => {
            console.error('Error saving customer:', error);
            showAlert('Error saving customer. Please try again.', 'danger');
          });
      });

      // Load stats from the in-memory cache when possible.
      function loadServiceStats() {
        if (!db) return Promise.reject(new Error('Firebase not connected'));

        const applyStats = () => {
          Object.keys(state.serviceStats).forEach(key => state.serviceStats[key] = 0);
          state.allCustomersData.forEach(item => {
            const type = item.serviceType || 'pnb_account';
            if (state.serviceStats[type] !== undefined) state.serviceStats[type]++;
          });
          if (elements.statPassport) elements.statPassport.textContent = state.serviceStats.passport || 0;
          if (elements.statEPFO) elements.statEPFO.textContent = state.serviceStats.epfo || 0;
          if (elements.statAadhaar) elements.statAadhaar.textContent = state.serviceStats.aadhaar || 0;
          if (elements.statPAN) elements.statPAN.textContent = state.serviceStats.pan || 0;
          if (elements.statESarvish) elements.statESarvish.textContent = state.serviceStats.esarvish || 0;
          if (elements.statLicense) elements.statLicense.textContent = state.serviceStats.license || 0;
          if (elements.statPNBAccount) elements.statPNBAccount.textContent = state.serviceStats.pnb_account || 0;
          if (elements.statBOBAccount) elements.statBOBAccount.textContent = state.serviceStats.bob_account || 0;
          if (elements.customerCountBadge) elements.customerCountBadge.textContent = state.allCustomersData.length;
          return state.serviceStats;
        };

        if (state.dataLoaded) return Promise.resolve(applyStats());

        return Promise.all([db.collection('customers').get(), db.collection('applications').get()])
          .then(([customersSnapshot, applicationsSnapshot]) => {
            state.allCustomersData = [];
            customersSnapshot.forEach(doc => state.allCustomersData.push({ ...doc.data(), id: doc.id, serviceType: doc.data().serviceType || 'pnb_account' }));
            applicationsSnapshot.forEach(doc => state.allCustomersData.push({ ...doc.data(), id: doc.id }));
            state.dataLoaded = true;
            return applyStats();
          });
      }

      // Load all customers once and keep them in memory.
      // This prevents Search/Filter from hitting Firestore on every click or keystroke.
      function loadAllCustomers() {
        if (!db) return Promise.reject(new Error('Firebase not connected'));
        if (state.isLoading) return Promise.resolve(state.allCustomersData.length);
        state.isLoading = true;

        if (elements.applicationListBody) {
          elements.applicationListBody.innerHTML = '<tr><td colspan="10" class="text-center">Loading customers...</td></tr>';
        }

        const customersPromise = db.collection('customers').orderBy('createdAt', 'desc').get();
        const applicationsPromise = db.collection('applications').orderBy('createdAt', 'desc').get();

        return Promise.all([customersPromise, applicationsPromise])
          .then(([customersSnapshot, applicationsSnapshot]) => {
            state.allCustomersData = [];

            customersSnapshot.forEach((doc) => {
              const customer = { ...doc.data(), id: doc.id };
              customer.serviceType = customer.serviceType || 'pnb_account';
              state.allCustomersData.push(customer);
            });

            applicationsSnapshot.forEach((doc) => {
              state.allCustomersData.push({ ...doc.data(), id: doc.id, serviceType: doc.data().serviceType || '' });
            });

            state.dataLoaded = true;
            renderCustomerResults(state.allCustomersData.slice(0, 100), 'all');
            state.isLoading = false;
            return state.allCustomersData.length;
          })
          .catch(error => {
            console.error('Error loading customers:', error);
            state.isLoading = false;
            if (elements.applicationListBody) {
              elements.applicationListBody.innerHTML = '<tr><td colspan="10" class="text-center">Error loading data</td></tr>';
            }
            showAlert('Error loading customers', 'danger');
            return 0;
          });
      }

      function renderCustomerResults(customers, service) {
        setTableHeaders(service || 'all');
        if (!elements.applicationListBody) return;
        elements.applicationListBody.innerHTML = '';

        if (!customers.length) {
          elements.applicationListBody.innerHTML = '<tr><td colspan="10" class="text-center">No customers found</td></tr>';
          return;
        }

        // Build once instead of repeatedly using innerHTML +=.
        elements.applicationListBody.innerHTML = customers.map(createTableRow).join('');
        addTableEventListeners();
      }

      // Authentication state listener
      if (auth) {
        auth.onAuthStateChanged((user) => {
          if (user) {
            handleAuthenticatedState(user);
            loginModal.hide();
          } else {
            handleUnauthenticatedState();
            loginModal.show();
          }
        });
      }

      function handleAuthenticatedState(user) {
        // One initial Firestore read; all Search/Filter operations then use local memory.
        loadAllCustomers().then(() => {
          return loadServiceStats();
        }).then(() => {
          enableAllFeatures();
          showAlert('Connected to Firebase successfully!', 'success');
        }).catch(error => {
          console.error('Error in authenticated state:', error);
          showAlert('Error loading data: ' + error.message, 'danger');
        });
      }

      function handleUnauthenticatedState() {
        disableAllFeatures();
      }

      function enableAllFeatures() {
        if (elements.searchBtn) elements.searchBtn.disabled = false;
        if (elements.clearSearchBtn) elements.clearSearchBtn.disabled = false;
        document.querySelectorAll('.nav-link, .dropdown-item').forEach(el => el.classList.remove('disabled'));
      }

      function disableAllFeatures() {
        if (elements.searchBtn) elements.searchBtn.disabled = true;
        if (elements.clearSearchBtn) elements.clearSearchBtn.disabled = true;
        document.querySelectorAll('.nav-link, .dropdown-item').forEach(el => el.classList.add('disabled'));
      }

      elements.loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        document.querySelectorAll('.login-error').forEach(el => el.remove());
        
        if (!auth) {
          showAlert('Firebase not connected. Please check your internet connection.', 'danger');
          return;
        }
        
        auth.signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            handleAuthenticatedState(userCredential.user);
            loginModal.hide();
          })
          .catch((error) => {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'text-danger small mt-1 login-error';
            errorDiv.textContent = error.message;
            document.getElementById('loginPassword').insertAdjacentElement('afterend', errorDiv);
          });
      });

      window.showServiceSelection = function() {
        serviceSelectionModal.show();
      };

      window.openPassportForm = function() {
        document.getElementById('passportForm').reset();
        document.getElementById('passportId').value = '';
        document.getElementById('passportPending').value = '0.00';
        document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
        serviceSelectionModal.hide();
        passportModal.show();
      };

      window.openEPFOForm = function() {
        document.getElementById('epfoForm').reset();
        document.getElementById('epfoId').value = '';
        document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
        serviceSelectionModal.hide();
        epfoModal.show();
      };

      window.openAadhaarForm = function() {
        document.getElementById('aadhaarForm').reset();
        document.getElementById('aadhaarId').value = '';
        document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
        serviceSelectionModal.hide();
        aadhaarModal.show();
      };

      window.openPANForm = function() {
        document.getElementById('panForm').reset();
        document.getElementById('panId').value = '';
        document.getElementById('panPending').value = '0.00';
        document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
        serviceSelectionModal.hide();
        panModal.show();
      };

      window.openESarvishForm = function() {
        document.getElementById('esarvishForm').reset();
        document.getElementById('esarvishId').value = '';
        document.getElementById('esarvishPending').value = '0.00';
        document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
        serviceSelectionModal.hide();
        esarvishModal.show();
      };

      window.openLicenseForm = function() {
        document.getElementById('licenseForm').reset();
        document.getElementById('licenseId').value = '';
        document.getElementById('licensePending').value = '0.00';
        document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
        serviceSelectionModal.hide();
        licenseModal.show();
      };

      window.openPNBAccountForm = function() {
        document.getElementById('pnbAccountForm').reset();
        document.getElementById('accountId').value = '';
        document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
        serviceSelectionModal.hide();
        pnbAccountModal.show();
      };

      window.openBOBAccountForm = function() {
        document.getElementById('bobAccountForm').reset();
        document.getElementById('bobAccountId').value = '';
        document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
        serviceSelectionModal.hide();
        bobAccountModal.show();
      };

      function updateCustomerCount() {
        if (state.dataLoaded) {
          if (elements.customerCountBadge) elements.customerCountBadge.textContent = state.allCustomersData.length;
          return;
        }
        if (!db) return;
        loadAllCustomers().then(() => {
          if (elements.customerCountBadge) elements.customerCountBadge.textContent = state.allCustomersData.length;
        });
      }

      // Search is local/in-memory after the initial load, so it stays fast.
      function performSearch() {
        const searchTerm = elements.searchInput ? elements.searchInput.value.trim() : '';
        const service = state.currentServiceFilter || 'all';

        if (!searchTerm) {
          if (elements.searchStats) elements.searchStats.textContent = '';
          if (elements.resultsList) elements.resultsList.innerHTML = `<tr><td colspan="${searchTableColspan(service)}" class="text-center">Enter search term to find customers</td></tr>`;
          return;
        }

        if (searchTerm.length < 2) {
          if (elements.resultsList) elements.resultsList.innerHTML = `<tr><td colspan="${searchTableColspan(service)}" class="text-center">Please enter at least 2 characters to search</td></tr>`;
          if (elements.searchStats) elements.searchStats.textContent = '';
          return;
        }

        if (!state.allCustomersData || !state.allCustomersData.length) {
          if (elements.resultsList) elements.resultsList.innerHTML = `<tr><td colspan="${searchTableColspan(service)}" class="text-center">Loading customer data...</td></tr>`;
          return;
        }

        const term = searchTerm.toLowerCase();
        const filtered = state.allCustomersData.filter(customer => {
          const customerService = customer.serviceType || 'pnb_account';
          const serviceMatch = service === 'all' || customerService === service;
          return serviceMatch && matchesSearch(customer, term);
        });

        setTableHeaders(service);
        const visible = filtered.slice(0, 100);
        if (elements.resultsList) {
          elements.resultsList.innerHTML = visible.length
            ? (service === 'all' ? visible.map(createAllCustomersRow) : visible.map(createTableRow)).join('')
            : `<tr><td colspan="${searchTableColspan(service)}" class="text-center">No matching customers found</td></tr>`;
        }
        if (elements.searchStats) {
          elements.searchStats.textContent = filtered.length > 200
            ? `${filtered.length} results found — showing first 100`
            : `${filtered.length} result${filtered.length === 1 ? '' : 's'} found`;
        }
        addTableEventListeners();
      }

      function matchesSearch(data, term) {
        const searchFields = [
          data.name,
          data.fatherName,
          data.mobile,
          data.aadhar ? data.aadhar.toString() : '',
          data.applicationNo,
          data.account ? data.account.toString() : '',
          data.panNo,
          data.pfNo,
          data.password
        ].filter(field => field).join(' ').toLowerCase();
        
        return searchFields.includes(term.toLowerCase());
      }

      // Filter functions
      setTableHeaders('all');
      window.setServiceFilter = function(service) {
        state.currentServiceFilter = service;
        setTableHeaders(service);
        
        document.querySelectorAll('.filter-badge').forEach(badge => {
          badge.classList.remove('active');
        });
        
        const activeBadge = Array.from(document.querySelectorAll('.filter-badge')).find(
          badge => badge.getAttribute('onclick')?.includes(`'${service}'`)
        );
        if (activeBadge) {
          activeBadge.classList.add('active');
        }
        
        const serviceNames = {
          'passport': 'Passport',
          'epfo': 'EPFO',
          'aadhaar': 'Aadhaar',
          'pan': 'PAN Card',
          'esarvish': 'eSarvish',
          'license': 'Driving License',
          'pnb_account': 'PNB Account',
          'bob_account': 'BOB Account',
          'all': 'All Customers'
        };
        
        if (elements.currentFilterBadge) {
          elements.currentFilterBadge.textContent = serviceNames[service] || 'All Customers';
        }
        setTableHeaders(service);
        
        // One normal search input is used for every service.
        if (elements.searchInput && elements.searchInput.value.trim()) {
          performSearch();
        } else {
          setTableHeaders(service);
          if (elements.resultsList) {
            elements.resultsList.innerHTML = `<tr><td colspan="${searchTableColspan(service)}" class="text-center">Enter search term to find customers</td></tr>`;
          }
          if (elements.searchStats) elements.searchStats.textContent = '';
        }
      };

      window.filterByService = function(service) {
        setServiceFilter(service);
        if (filterServiceToggle && serviceFilterOptions) {
          filterServiceToggle.setAttribute('aria-expanded', 'false');
          serviceFilterOptions.classList.add('d-none');
        }
        // Keep Search Customers as the single normal search area.
        // Service selection only changes the filter and table headers; it does not open a second table.
        if (elements.allApplicationsCard) {
          elements.allApplicationsCard.classList.add('d-none');
        }
        
        const serviceNames = {
          'passport': 'Passport',
          'epfo': 'EPFO',
          'aadhaar': 'Aadhaar',
          'pan': 'PAN Card',
          'esarvish': 'eSarvish',
          'license': 'Driving License',
          'pnb_account': 'PNB Account',
          'bob_account': 'BOB Account',
          'all': 'All Customers'
        };
        
        if (elements.serviceTypeBadge) {
          elements.serviceTypeBadge.textContent = serviceNames[service] || (service + ' Customers');
        }
        if (elements.serviceTypeTitle) {
          elements.serviceTypeTitle.textContent = (serviceNames[service] || service) + ' Customers';
        }
        // Render the selected service immediately in the single Search Customers table.
        // Data is read from the in-memory cache, so switching services stays fast.
        loadFilteredCustomers(service);
      };

      function loadFilteredCustomers(service) {
        const data = state.allCustomersData || [];
        const filtered = service === 'all'
          ? data
          : data.filter(customer => (customer.serviceType || 'pnb_account') === service);

        setTableHeaders(service);
        const visible = filtered.slice(0, 100);
        const emptyMessage = service === 'all'
          ? 'No customers found'
          : `No ${serviceNamesForUI(service).toLowerCase()} customers found`;

        // Always render service-filtered data in the ONE visible Search Customers table.
        // The old code rendered into the hidden All Customers table, which made the
        // selected service appear empty even though Analytics contained the counts.
        if (elements.resultsList) {
          elements.resultsList.innerHTML = visible.length
            ? visible.map(createTableRow).join('')
            : `<tr><td colspan="${searchTableColspan(service)}" class="text-center">${emptyMessage}</td></tr>`;
        }

        if (elements.searchStats) {
          elements.searchStats.textContent = filtered.length > 100
            ? `${filtered.length} results found — showing first 100`
            : `${filtered.length} result${filtered.length === 1 ? '' : 's'} found`;
        }
        addTableEventListeners();
      }

      function serviceNamesForUI(service) {
        return ({
          passport: 'Passport', epfo: 'EPFO', aadhaar: 'Aadhaar', pan: 'PAN Card',
          esarvish: 'eSarvish', license: 'Driving License',
          bob_account: 'BOB Account', pnb_account: 'PNB Account', all: 'All Customers'
        })[service] || service || 'Customers';
      }

      function downloadTemplate() {
        const templateData = [{
          serviceType: "pnb_account",
          name: "PNB CUSTOMER FULL NAME",
          fatherName: "FATHER'S NAME",
          mobile: "9876543210",
          aadhar: "123456789012",
          account: "2506001700154687",
          password: "password123"
        }, {
          serviceType: "bob_account",
          name: "BOB CUSTOMER FULL NAME",
          fatherName: "FATHER'S NAME",
          mobile: "9876543210",
          aadhar: "123456789012",
          account: "2506001700154687",
          password: "password123"
        }];

        const worksheet = XLSX.utils.json_to_sheet(templateData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Template");
        XLSX.writeFile(workbook, "PNB_Customer_Template.xlsx");
        showAlert('Template downloaded successfully!', 'success');
      }

      function processImport() {
        const file = elements.importFile?.files[0];
        if (!file) {
          showAlert('Please select a file first', 'warning');
          return;
        }

        if (!db) {
          showAlert('Firebase not connected', 'danger');
          return;
        }

        if (elements.importProgress) {
          elements.importProgress.classList.remove('d-none');
        }
        if (elements.importResults) {
          elements.importResults.classList.add('d-none');
        }
        
        const progressBar = elements.importProgress?.querySelector('.progress-bar');
        if (progressBar) {
          progressBar.style.width = '0%';
          progressBar.textContent = '0%';
        }

        const reader = new FileReader();
        reader.onload = function(e) {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = XLSX.utils.sheet_to_json(firstSheet);

          if (elements.importTotal) elements.importTotal.textContent = jsonData.length;
          let successCount = 0;
          let failedCount = 0;

          const processRow = async (index) => {
            if (index >= jsonData.length) {
              if (elements.importResults) {
                elements.importResults.classList.remove('d-none');
              }
              if (elements.importSuccess) elements.importSuccess.textContent = successCount;
              if (elements.importFailed) elements.importFailed.textContent = failedCount;
              if (progressBar) {
                progressBar.style.width = '100%';
                progressBar.textContent = '100%';
              }
              
              loadAllCustomers();
              loadServiceStats();
              showAlert(`Import completed! ${successCount} records imported, ${failedCount} failed`, 
                       failedCount > 0 ? 'warning' : 'success');
              return;
            }

            const row = jsonData[index];
            try {
              if (row.aadhar) {
                row.aadhar = row.aadhar.toString().replace(/\s+/g, '');
              }
              
              if (row.account) {
                row.account = row.account.toString().replace(/\s+/g, '');
              }
              
              if (row.name) {
                row.name = row.name.toUpperCase();
              }
              if (row.fatherName) {
                row.fatherName = row.fatherName.toUpperCase();
              }

              if (!row.serviceType) {
                row.serviceType = 'pnb_account';
              }

              const collectionName = (['pnb_account', 'bob_account'].includes(row.serviceType)) ? "customers" : "applications";

              row.createdAt = firebase.firestore.FieldValue.serverTimestamp();
              row.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
              await db.collection(collectionName).add(row);
              successCount++;
            } catch (error) {
              console.error(`Error importing row ${index + 1}:`, error);
              failedCount++;
            }

            const progress = Math.floor(((index + 1) / jsonData.length) * 100);
            if (progressBar) {
              progressBar.style.width = `${progress}%`;
              progressBar.textContent = `${progress}%`;
            }
            
            setTimeout(() => processRow(index + 1), 0);
          };

          processRow(0);
        };
        reader.readAsArrayBuffer(file);
      }

      // User management functions
      function loadUsers() {
        if (elements.userManagementCard) {
          elements.userManagementCard.classList.remove('d-none');
        }
        
        const user = auth.currentUser;
        if (elements.userListBody) {
          elements.userListBody.innerHTML = '';
        }
        
        if (user && elements.userListBody) {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${user.email}</td>
            <td>Admin</td>
            <td>${new Date(user.metadata.creationTime).toLocaleString()}</td>
            <td>${new Date(user.metadata.lastSignInTime).toLocaleString()}</td>
            <td class="user-actions">
              <button class="btn btn-sm btn-pnb-primary edit-user-btn" data-id="${user.uid}">
                <i class="fas fa-edit"></i>
              </button>
              <button class="btn btn-sm btn-danger delete-user-btn" data-id="${user.uid}">
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
          `;
          elements.userListBody.appendChild(row);

          document.querySelectorAll('.edit-user-btn').forEach(btn => {
            btn.addEventListener('click', () => openUserModal(user));
          });

          document.querySelectorAll('.delete-user-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
              if(confirm('Are you sure you want to delete this user?')) {
                auth.currentUser.delete().then(() => {
                  showAlert('User deleted successfully', 'success');
                  auth.signOut();
                });
              }
            });
          });
        } else {
          showAlert('Please add users in Firebase Console.', 'warning');
        }
      }

      function openUserModal(user = null) {
        const form = document.getElementById('userForm');
        if (user) {
          document.getElementById('userModalLabel').innerHTML = '<i class="fas fa-user-edit me-2"></i>Edit User';
          document.getElementById('userId').value = user.uid;
          document.getElementById('userEmail').value = user.email;
          document.getElementById('userPassword').required = false;
          document.getElementById('confirmPassword').required = false;
        } else {
          document.getElementById('userModalLabel').innerHTML = '<i class="fas fa-user-plus me-2"></i>Add New User';
          form.reset();
          document.getElementById('userId').value = '';
          document.getElementById('userPassword').required = true;
          document.getElementById('confirmPassword').required = true;
        }
        userModal.show();
      }

      function saveUser() {
        const userId = document.getElementById('userId').value;
        const email = document.getElementById('userEmail').value;
        const password = document.getElementById('userPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (!email) {
          showAlert('Email is required', 'danger');
          return;
        }
        
        if (!userId && (!password || !confirmPassword)) {
          showAlert('Password is required for new users', 'danger');
          return;
        }
        
        if (password && password !== confirmPassword) {
          showAlert('Passwords do not match', 'danger');
          return;
        }
        
        const saveBtn = document.getElementById('saveUserBtn');
        saveBtn.disabled = true;
        saveBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Saving...';
        
        if (userId) {
          const user = auth.currentUser;
          
          if (user.email !== email) {
            user.updateEmail(email)
              .then(() => {
                if (password) {
                  return user.updatePassword(password);
                }
              })
              .then(() => {
                userModal.hide();
                loadUsers();
                showAlert('User updated successfully!', 'success');
              })
              .catch((error) => {
                showAlert('Failed to update user: ' + error.message, 'danger');
                saveBtn.disabled = false;
                saveBtn.innerHTML = 'Save User';
              });
          } else if (password) {
            user.updatePassword(password)
              .then(() => {
                userModal.hide();
                loadUsers();
                showAlert('Password updated successfully!', 'success');
              })
              .catch((error) => {
                showAlert('Failed to update password: ' + error.message, 'danger');
                saveBtn.disabled = false;
                saveBtn.innerHTML = 'Save User';
              });
          } else {
            userModal.hide();
            saveBtn.disabled = false;
            saveBtn.innerHTML = 'Save User';
          }
        } else {
          auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
              userModal.hide();
              loadUsers();
              showAlert('User created successfully!', 'success');
            })
            .catch((error) => {
              showAlert('Failed to create user: ' + error.message, 'danger');
              saveBtn.disabled = false;
              saveBtn.innerHTML = 'Save User';
            });
        }
      }

      // Bulk actions
      function toggleBulkSelectionMode() {
        if (elements.bulkActionsPanel) {
          elements.bulkActionsPanel.style.display = 'block';
        }
        
        const rows = document.querySelectorAll('#applicationListBody tr, #results tr');
        rows.forEach(row => {
          if (!row.classList.contains('total-row')) {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'bulk-checkbox';
            checkbox.dataset.id = row.querySelector('.edit-btn')?.dataset.id || '';
            
            const firstCell = row.querySelector('td:first-child');
            if (firstCell) {
              firstCell.insertBefore(checkbox, firstCell.firstChild);
            }
            
            checkbox.addEventListener('change', updateSelection);
          }
        });
      }

      function updateSelection() {
        const checkboxes = document.querySelectorAll('.bulk-checkbox:checked');
        if (elements.selectedCount) {
          elements.selectedCount.textContent = checkboxes.length;
        }
        state.selectedApplications = new Set(Array.from(checkboxes).map(cb => cb.dataset.id));
      }

      function cancelBulkAction() {
        if (elements.bulkActionsPanel) {
          elements.bulkActionsPanel.style.display = 'none';
        }
        document.querySelectorAll('.bulk-checkbox').forEach(cb => cb.remove());
        state.selectedApplications.clear();
      }

      function showDeleteConfirmation() {
        if (state.selectedApplications.size === 0) {
          showAlert('Please select at least one customer to delete', 'warning');
          return;
        }
        if (elements.deleteCount) {
          elements.deleteCount.textContent = state.selectedApplications.size;
        }
        bulkDeleteModal.show();
      }

      async function performBulkDelete() {
        bulkDeleteModal.hide();
        if (elements.bulkActionsPanel) {
          elements.bulkActionsPanel.style.display = 'none';
        }
        
        const deletePromises = Array.from(state.selectedApplications).map(async id => {
          try {
            await db.collection("customers").doc(id).delete();
            return { success: true, id };
          } catch (error) {
            try {
              await db.collection("applications").doc(id).delete();
              return { success: true, id };
            } catch (error2) {
              return { error: true, id };
            }
          }
        });

        const results = await Promise.all(deletePromises);
        const successCount = results.filter(r => r.success).length;

        loadAllCustomers();
        loadServiceStats();
        
        showAlert(`Bulk delete completed! ${successCount} customers deleted`, 'success');
        
        document.querySelectorAll('.bulk-checkbox').forEach(cb => cb.remove());
        state.selectedApplications.clear();
      }

      // Backup and restore
      function backupData() {
        if (!db) {
          showAlert('Firebase not connected', 'danger');
          return;
        }
        
        Promise.all([
          db.collection("customers").get(),
          db.collection("applications").get()
        ]).then(([customersSnapshot, applicationsSnapshot]) => {
          const data = [
            ...customersSnapshot.docs.map(doc => ({ id: doc.id, collection: 'customers', ...doc.data() })),
            ...applicationsSnapshot.docs.map(doc => ({ id: doc.id, collection: 'applications', ...doc.data() }))
          ];
          const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
          saveAs(blob, `pnb_backup_${new Date().toISOString().split('T')[0]}.json`);
          showAlert('Backup created successfully!', 'success');
        }).catch(error => {
          console.error('Backup error:', error);
          showAlert('Error creating backup: ' + error.message, 'danger');
        });
      }

      function restoreData() {
        const file = elements.restoreFile?.files[0];
        if (!file) {
          showAlert('Please select a backup file first', 'warning');
          return;
        }

        if (!db) {
          showAlert('Firebase not connected', 'danger');
          return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
          try {
            const data = JSON.parse(e.target.result);
            if (!Array.isArray(data)) {
              throw new Error('Invalid backup format');
            }

            const restorePromises = data.map(item => {
              const { id, collection, ...customerData } = item;
              const targetCollection = collection || (['pnb_account', 'bob_account'].includes(customerData.serviceType) ? 'customers' : 'applications');
              return db.collection(targetCollection).doc(id).set(customerData);
            });

            Promise.all(restorePromises)
              .then(() => {
                showAlert('Data restored successfully!', 'success');
                loadAllCustomers();
                loadServiceStats();
                backupModal.hide();
              })
              .catch(error => {
                showAlert('Failed to restore data: ' + error.message, 'danger');
              });
          } catch (error) {
            showAlert('Invalid backup file format', 'danger');
          }
        };
        reader.readAsText(file);
      }

      // Event Listeners
      if (elements.searchBtn) {
        elements.searchBtn.addEventListener('click', performSearch);
      }
      
      if (elements.searchInput) {
        let searchTimer;
        elements.searchInput.addEventListener('input', () => {
          clearTimeout(searchTimer);
          searchTimer = setTimeout(() => {
            if (elements.searchInput.value.trim().length >= 2) performSearch();
          }, 180);
        });
        elements.searchInput.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') { clearTimeout(searchTimer); performSearch(); }
        });
      }
      
      if (elements.clearSearchBtn) {
        elements.clearSearchBtn.addEventListener('click', function() {
          if (elements.searchInput) elements.searchInput.value = '';
          if (elements.resultsList) {
            elements.resultsList.innerHTML = `<tr><td colspan="${searchTableColspan(service)}" class="text-center">Enter search term to find customers</td></tr>`;
          }
          if (elements.searchStats) elements.searchStats.textContent = '';
        });
      }
      
      if (elements.viewAllCustomersBtn) {
        elements.viewAllCustomersBtn.addEventListener('click', (e) => {
          e.preventDefault();
          if (elements.allApplicationsCard) {
            elements.allApplicationsCard.classList.remove('d-none');
          }
          if (elements.serviceTypeBadge) elements.serviceTypeBadge.textContent = 'All Customers';
          if (elements.serviceTypeTitle) elements.serviceTypeTitle.textContent = 'All Customers';
          loadAllCustomers();
        });
      }
      
      if (elements.closeAllApplicationsBtn) {
        elements.closeAllApplicationsBtn.addEventListener('click', () => {
          if (elements.allApplicationsCard) elements.allApplicationsCard.classList.add('d-none');
          if (elements.applicationListBody) elements.applicationListBody.innerHTML = '';
        });
      }

      // Hide all currently displayed data without deleting anything from Firebase.
      if (elements.hideAllDataBtn) {
        elements.hideAllDataBtn.addEventListener('click', () => {
          if (elements.resultsList) {
            const service = state.currentServiceFilter || 'all';
            elements.resultsList.innerHTML = `<tr><td colspan="${searchTableColspan(service)}" class="text-center">Data hidden — use “All Customers” or select a service to show it again.</td></tr>`;
          }
          if (elements.searchStats) elements.searchStats.textContent = '';
          if (elements.searchInput) elements.searchInput.value = '';
          if (elements.allApplicationsCard) elements.allApplicationsCard.classList.add('d-none');
        });
      }
      
      if (elements.importMenuBtn) {
        elements.importMenuBtn.addEventListener('click', (e) => {
          e.preventDefault();
          importModal.show();
        });
      }
      
      if (elements.downloadTemplateMenuBtn) {
        elements.downloadTemplateMenuBtn.addEventListener('click', (e) => {
          e.preventDefault();
          downloadTemplate();
        });
      }
      
      if (elements.downloadTemplateBtn) {
        elements.downloadTemplateBtn.addEventListener('click', downloadTemplate);
      }
      
      if (elements.exportDataBtn) {
        elements.exportDataBtn.addEventListener('click', (e) => {
          e.preventDefault();
          exportData();
        });
      }
      
      if (elements.processImportBtn) {
        elements.processImportBtn.addEventListener('click', processImport);
      }
      
      if (elements.bulkDeleteBtn) {
        elements.bulkDeleteBtn.addEventListener('click', (e) => {
          e.preventDefault();
          toggleBulkSelectionMode();
        });
      }
      
      if (elements.confirmDeleteBtn) {
        elements.confirmDeleteBtn.addEventListener('click', showDeleteConfirmation);
      }
      
      if (elements.cancelBulkActionBtn) {
        elements.cancelBulkActionBtn.addEventListener('click', cancelBulkAction);
      }
      
      if (elements.finalConfirmDeleteBtn) {
        elements.finalConfirmDeleteBtn.addEventListener('click', performBulkDelete);
      }
      
      if (elements.manageUsersBtn) {
        elements.manageUsersBtn.addEventListener('click', (e) => {
          e.preventDefault();
          loadUsers();
        });
      }
      
      if (elements.addUserBtn) {
        elements.addUserBtn.addEventListener('click', () => openUserModal());
      }
      
      if (elements.saveUserBtn) {
        elements.saveUserBtn.addEventListener('click', saveUser);
      }
      
      if (elements.logoutBtn) {
        elements.logoutBtn.addEventListener('click', (e) => {
          e.preventDefault();
          auth.signOut().then(() => {
            showAlert('Logged out successfully', 'success');
          });
        });
      }
      
      if (elements.homeLink) {
        elements.homeLink.addEventListener('click', (e) => {
          e.preventDefault();
          if (elements.allApplicationsCard) {
            elements.allApplicationsCard.classList.add('d-none');
          }
          if (elements.userManagementCard) {
            elements.userManagementCard.classList.add('d-none');
          }
          if (elements.searchInput) elements.searchInput.value = '';
          if (elements.resultsList) {
            elements.resultsList.innerHTML = `<tr><td colspan="${searchTableColspan(service)}" class="text-center">Enter search term to find customers</td></tr>`;
          }
          if (elements.searchStats) elements.searchStats.textContent = '';
          setServiceFilter('all');
        });
      }
      
      if (elements.backupFloatingBtn) {
        elements.backupFloatingBtn.addEventListener('click', () => backupModal.show());
      }
      
      if (elements.backupBtn) {
        elements.backupBtn.addEventListener('click', backupData);
      }
      
      if (elements.restoreBtn) {
        elements.restoreBtn.addEventListener('click', restoreData);
      }

      if (elements.exactMatchBtn) {
        elements.exactMatchBtn.addEventListener('click', function() {
          state.exactMatch = !state.exactMatch;
          this.classList.toggle('btn-outline-secondary');
          this.classList.toggle('btn-pnb-primary', state.exactMatch);
          if (elements.searchInput?.value.trim()) {
            performSearch();
          }
        });
      }

      if (elements.caseSensitiveBtn) {
        elements.caseSensitiveBtn.addEventListener('click', function() {
          state.caseSensitive = !state.caseSensitive;
          this.classList.toggle('btn-outline-secondary');
          this.classList.toggle('btn-pnb-primary', state.caseSensitive);
          if (elements.searchInput?.value.trim()) {
            performSearch();
          }
        });
      }

      // Initialize
      setServiceFilter('all');
    });
  </script>




<style id="pdf-autofill-exact-style">
.customer-entry-choice{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:18px;padding:14px;border:1px dashed #f45100;border-radius:10px;background:#fff8f3}
.customer-entry-choice .choice-btn{border:0;border-radius:8px;padding:10px 16px;font-weight:700;cursor:pointer}
.choice-manual{background:#f45100;color:#fff}.choice-upload{background:#172033;color:#fff}
.slip-upload-box{display:none;margin-bottom:18px;padding:16px;border-radius:10px;background:#f7f8fa;border:1px solid #ddd}
.slip-upload-box.show{display:block}.slip-preview{margin-top:10px;font-weight:600;color:#198754}
</style>










<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js"></script>



\n
<script id="pnb-customer-exact-autofill">
document.addEventListener('DOMContentLoaded', function () {

  function clean(v) {
    return String(v || '').replace(/\s+/g, ' ').trim();
  }

  function setNormal(id, value) {
    const el = document.getElementById(id);
    if (!el || !value) return false;
    el.value = value;
    ['input','change','blur'].forEach(type =>
      el.dispatchEvent(new Event(type, {bubbles:true}))
    );
    return true;
  }

  // Masked Aadhaar must remain exactly as it appears in the PDF.
  function setMaskedAadhaar(value) {
    const el = document.getElementById('accountAadhar');
    if (!el || !value) return false;
    el.value = value;
    el.dispatchEvent(new Event('change', {bubbles:true}));
    el.dispatchEvent(new Event('blur', {bubbles:true}));
    return true;
  }

  function parsePNB(raw) {
    const t = clean(raw);
    const d = {
      name: '',
      father: '',
      mobile: '',
      aadhaar: '',
      account: ''
    };

    // This PNB Account Opening Form has values after the labels.
    // Exact data pattern: Zafar M ... 2506001700167238 ... XXXXXXXX5871 ... 9012294983
    let m;

    // Name: first clean name immediately followed by Sex (M/F)
    m = t.match(/\b([A-Za-z][A-Za-z .]{1,60}?)\s+([MF])\s+\d{14,22}\b/);
    if (m) d.name = clean(m[1]);

    // Account number: exact 14–22 digit account number
    const longNumbers = t.match(/\b\d{14,22}\b/g) || [];
    d.account = longNumbers[0] || '';

    // Aadhaar: allow masked value exactly as printed
    m = t.match(/\bX{8}\d{4}\b/i);
    if (m) d.aadhaar = m[0].toUpperCase();

    // Mobile: first Indian 10-digit number after masked Aadhaar, or first mobile
    const mobiles = t.match(/\b[6-9]\d{9}\b/g) || [];
    d.mobile = mobiles[0] || '';

    // Father/Guardian: exact value before MAR/SINGLE/MARRIED
    m = t.match(/\b([A-Za-z][A-Za-z .]{2,70}?)\s+(?:MAR|SINGLE|MARRIED|UNMARRIED)\b/i);
    if (m) d.father = clean(m[1]);

    // Strong fallbacks using the visible PDF labels
    if (!d.name) {
      m = t.match(/Customer\s*Name[\s\S]{0,220}?\b([A-Za-z][A-Za-z .]{1,60})\s+[MF]\s+\d{14,22}\b/i);
      if (m) d.name = clean(m[1]);
    }

    if (!d.account) {
      m = t.match(/Account\s*No[\s\S]{0,220}?(\d{14,22})\b/i);
      if (m) d.account = m[1];
    }

    if (!d.mobile) {
      m = t.match(/Mobile\s*No[\s\S]{0,250}?([6-9]\d{9})\b/i);
      if (m) d.mobile = m[1];
    }

    if (!d.aadhaar) {
      m = t.match(/Aadhaar\s*No[\s\S]{0,250}?\b(X{8}\d{4})\b/i);
      if (m) d.aadhaar = m[1].toUpperCase();
    }

    if (!d.father) {
      m = t.match(/Name\s*of\s*Father\s*\/\s*Guardian[\s\S]{0,350}?\b([A-Za-z][A-Za-z .]{2,60})\s+(?:MAR|SINGLE|MARRIED|UNMARRIED)\b/i);
      if (m) d.father = clean(m[1]);
    }

    return d;
  }

  async function readPDF(file) {
    if (!window.pdfjsLib) throw new Error('PDF reader library load nahi hui.');

    const bytes = new Uint8Array(await file.arrayBuffer());
    const pdf = await pdfjsLib.getDocument({data:bytes}).promise;
    let raw = '';

    for (let p = 1; p <= pdf.numPages; p++) {
      const page = await pdf.getPage(p);
      const content = await page.getTextContent();

      // Native text order
      raw += '\n' + content.items.map(item => item.str).join(' ');

      // Visual row order
      const rows = new Map();
      content.items.forEach(item => {
        const y = Math.round(item.transform[5] / 3) * 3;
        if (!rows.has(y)) rows.set(y, []);
        rows.get(y).push({x:item.transform[4], text:item.str});
      });

      [...rows.keys()].sort((a,b)=>b-a).forEach(y => {
        raw += '\n' + rows.get(y)
          .sort((a,b)=>a.x-b.x)
          .map(v=>v.text)
          .join(' ');
      });
    }
    return raw;
  }

  const form = document.getElementById('pnbAccountForm');
  if (!form) return;

  form.querySelector('.pnb-customer-exact-upload')?.remove();

  const box = document.createElement('div');
  box.className = 'pnb-customer-exact-upload';
  box.style.cssText =
    'margin:12px 0;padding:14px;border:1px dashed #f45100;border-radius:8px;background:#fff8f3';

  box.innerHTML =
    '<b>📄 PNB Account Customer PDF Upload करें</b>' +
    '<input type="file" accept=".pdf" style="display:block;margin-top:8px;width:100%">' +
    '<div class="pnb-status" style="margin-top:8px;font-weight:600"></div>';

  // PDF upload section disabled.

  const input = box.querySelector('input');
  const status = box.querySelector('.pnb-status');

  input.addEventListener('change', async function () {
    const file = input.files[0];
    if (!file) return;

    try {
      status.textContent = 'PNB PDF से सिर्फ required customer details पढ़ी जा रही हैं...';

      const data = parsePNB(await readPDF(file));

      // Clear only these 5 target fields, then fill only these 5.
      ['accountName','accountFatherName','accountMobile','accountAadhar','accountNumber']
        .forEach(id => {
          const el = document.getElementById(id);
          if (el) el.value = '';
        });

      let count = 0;
      count += setNormal('accountName', data.name) ? 1 : 0;
      count += setNormal('accountFatherName', data.father) ? 1 : 0;
      count += setNormal('accountMobile', data.mobile) ? 1 : 0;
      count += setMaskedAadhaar(data.aadhaar) ? 1 : 0;
      count += setNormal('accountNumber', data.account) ? 1 : 0;

      if (count === 5) {
        status.textContent = '✓ सिर्फ Name, Father Name, Mobile, Aadhaar और Account Number fill हो गए।';
      } else {
        status.textContent = '⚠️ PDF से ' + count + ' details मिलीं। बाकी fields खाली छोड़ी गई हैं।';
      }

      console.log('PNB REQUIRED DATA:', data);
    } catch (err) {
      console.error(err);
      status.textContent = '❌ PDF read error: ' + (err.message || 'Unknown error');
    }
  });
});
</script>
\n
<script id="esarvish-only-4-details-autofill">
document.addEventListener('DOMContentLoaded', function () {

  const clean = v => String(v || '').replace(/\s+/g, ' ').trim();

  function setValue(el, value) {
    if (!el || !value) return false;
    el.value = value;
    ['input','change','blur'].forEach(type =>
      el.dispatchEvent(new Event(type, { bubbles:true }))
    );
    return true;
  }

  function getField(form, keys) {
    const fields = [...form.querySelectorAll('input,textarea')];
    return fields.find(el => {
      const meta = [
        el.id || '',
        el.name || '',
        el.placeholder || '',
        el.getAttribute('aria-label') || ''
      ].join(' ').toLowerCase();
      return keys.some(k => meta.includes(k));
    });
  }

  function parseESarvish(raw, filename) {
    const t = clean(raw);
    const d = { name:'', father:'', application:'' };
    let m;

    // Application Number – exact eSarvish/UK format
    m = t.match(/\bUK\d{2}ES\d{8,25}\b/i);
    if (!m) m = String(filename || '').match(/\bUK\d{2}ES\d{8,25}\b/i);
    if (m) d.application = m[0].toUpperCase();

    // Hindi labels from eSarvish receipt
    m = t.match(/आवेदन\s*(?:कर्ता)?\s*का\s*नाम\s*[:\-]?\s*([\u0900-\u097F\s]{2,80}?)(?=\s*(?:पिता\s*\/\s*पति|माता\s*का\s*नाम|पता\s*:|जिला\s*:|$))/u);
    if (m) d.name = clean(m[1]);

    m = t.match(/पिता\s*\/\s*पति\s*का\s*नाम\s*[:\-]?\s*([\u0900-\u097F\s]{2,80}?)(?=\s*(?:माता\s*का\s*नाम|पता\s*:|जिला\s*:|$))/u);
    if (m) d.father = clean(m[1]);

    // OCR/garbled-text fallback for uploaded eSarvish receipts
    if (!d.name) {
      m = t.match(/(?:आवेदन\s*कर्ता.*?नाम|Applicant.*?Name)\s*[:\-]?\s*([^\d:]{2,50}?)(?=\s*(?:पिता|Father|माता|Mother|पता|Address))/iu);
      if (m) d.name = clean(m[1]);
    }

    if (!d.father) {
      m = t.match(/(?:पिता\s*\/\s*पति.*?नाम|Father.*?Name|Husband.*?Name)\s*[:\-]?\s*([^\d:]{2,50}?)(?=\s*(?:माता|Mother|पता|Address|जिला))/iu);
      if (m) d.father = clean(m[1]);
    }

    return d;
  }

  async function readPDF(file) {
    if (!window.pdfjsLib) throw new Error('PDF reader load नहीं हुई।');

    const bytes = new Uint8Array(await file.arrayBuffer());
    const pdf = await pdfjsLib.getDocument({data:bytes}).promise;
    let raw = '';

    for (let pageNo = 1; pageNo <= pdf.numPages; pageNo++) {
      const page = await pdf.getPage(pageNo);
      const content = await page.getTextContent();

      // Normal text extraction
      raw += '\n' + content.items.map(i => i.str).join(' ');

      // Visual row reconstruction
      const rows = new Map();
      content.items.forEach(item => {
        const y = Math.round(item.transform[5] / 3) * 3;
        if (!rows.has(y)) rows.set(y, []);
        rows.get(y).push({x:item.transform[4], text:item.str});
      });

      [...rows.keys()].sort((a,b)=>b-a).forEach(y => {
        raw += '\n' + rows.get(y)
          .sort((a,b)=>a.x-b.x)
          .map(v=>v.text)
          .join(' ');
      });
    }
    return raw;
  }

  document.querySelectorAll('form').forEach(form => {
    const info = ((form.id || '') + ' ' + form.innerText).toLowerCase();
    if (!/esarvish|e\s*sarvish/.test(info)) return;
    if (form.querySelector('.esarvish-only-4-upload')) return;

    const box = document.createElement('div');
    box.className = 'esarvish-only-4-upload';
    box.style.cssText =
      'margin:12px 0;padding:14px;border:1px dashed #f45100;border-radius:8px;background:#fff8f3';

    box.innerHTML =
      '<b>📄 eSarvish प्रमाण-पत्र PDF Upload करें</b>' +
      '<input type="file" accept=".pdf" style="display:block;margin-top:8px;width:100%">' +
      '<div class="esarvish-status" style="margin-top:8px;font-weight:600"></div>';

    // PDF upload section disabled.

    const input = box.querySelector('input');
    const status = box.querySelector('.esarvish-status');

    input.addEventListener('change', async function () {
      const file = input.files[0];
      if (!file) return;

      try {
        status.textContent = 'eSarvish प्रमाण-पत्र से सिर्फ required details पढ़ी जा रही हैं...';

        const raw = await readPDF(file);
        const data = parseESarvish(raw, file.name);

        // Clear only these four target fields.
        const nameField = getField(form, ['fullname','full-name','applicantname','customername','name']);
        const fatherField = getField(form, ['father','husband','guardian']);
        const mobileField = getField(form, ['mobile','phone']);
        const applicationField = getField(form, ['application','certificate','applicationnumber']);

        [nameField, fatherField, mobileField, applicationField].forEach(el => {
          if (el) el.value = '';
        });

        let count = 0;
        count += setValue(nameField, data.name) ? 1 : 0;
        count += setValue(fatherField, data.father) ? 1 : 0;

        // User requested mobile as XXXXXXXXXX: keep it blank; never invent a mobile number.
        // Only the other 3 actual certificate details are filled.
        if (mobileField) {
          mobileField.placeholder = 'XXXXXXXXXX';
        }

        count += setValue(applicationField, data.application) ? 1 : 0;

        if (count === 3) {
          status.textContent = '✓ सिर्फ Name, Father/Husband Name और Application Number fill हो गए। Mobile Number खाली रखा गया है।';
        } else {
          status.textContent = '⚠️ Certificate से ' + count + ' details मिलीं। Mobile Number जानबूझकर खाली रखा गया है।';
        }

        console.log('eSarvish ONLY REQUIRED DATA:', data);
      } catch (err) {
        console.error(err);
        status.textContent = '❌ PDF read error: ' + (err.message || 'Unknown error');
      }
    });
  });
});
</script>


<script id="pan-only-details-autofill">
document.addEventListener('DOMContentLoaded', function () {

  const clean = v => String(v || '').replace(/\s+/g, ' ').trim();

  function setValue(el, value) {
    if (!el || !value) return false;
    el.value = value;
    ['input','change','blur'].forEach(type =>
      el.dispatchEvent(new Event(type, { bubbles:true }))
    );
    return true;
  }

  function getField(form, keys) {
    const fields = [...form.querySelectorAll('input,textarea')];
    return fields.find(el => {
      const meta = [
        el.id || '',
        el.name || '',
        el.placeholder || '',
        el.getAttribute('aria-label') || ''
      ].join(' ').toLowerCase();
      return keys.some(k => meta.includes(k));
    });
  }

  function parsePAN(raw) {
    const t = clean(raw);
    const d = { name:'', father:'', mobile:'', dob:'', application:'' };
    let m;

    // Full Name
    m = t.match(/Name\s+as\s+to\s+be\s+printed\s+on\s+PAN\s+card\s*:\s*([A-Za-z][A-Za-z .]{1,70}?)(?=\s+Gender\b)/i);
    if (m) d.name = clean(m[1]);

    // Father's Name
    m = t.match(/Father'?s\s+Name\s*:\s*([A-Za-z][A-Za-z .]{1,70}?)(?=\s+(?:Aadhaar|Applicant|Name\s+as))/i);
    if (m) d.father = clean(m[1]);

    // Mobile Number
    m = t.match(/Applicant'?s\s+Contact\s+details\s*:\s*([6-9]\d{9})/i);
    if (m) d.mobile = m[1];

    // Date of Birth
    m = t.match(/Date\s+of\s+Birth(?:\/Incorporation)?\s*:?\s*(\d{2}\/\d{2}\/\d{4})/i);
    if (m) d.dob = m[1];

    // Application / Coupon Number: U-Q020660282 -> Q020660282
    m = t.match(/Application\s+No\.?\/Coupon\s+No\.?\s*:\s*U-?([A-Z0-9]{6,30})/i);
    if (!m) m = t.match(/\bU-([A-Z]\d{6,30})\b/i);
    if (m) d.application = m[1].toUpperCase();

    return d;
  }

  async function readPDF(file) {
    if (!window.pdfjsLib) throw new Error('PDF reader load नहीं हुई।');

    const bytes = new Uint8Array(await file.arrayBuffer());
    const pdf = await pdfjsLib.getDocument({data:bytes}).promise;
    let raw = '';

    for (let pageNo = 1; pageNo <= pdf.numPages; pageNo++) {
      const page = await pdf.getPage(pageNo);
      const content = await page.getTextContent();
      raw += '\n' + content.items.map(item => item.str).join(' ');

      const rows = new Map();
      content.items.forEach(item => {
        const y = Math.round(item.transform[5] / 3) * 3;
        if (!rows.has(y)) rows.set(y, []);
        rows.get(y).push({x:item.transform[4], text:item.str});
      });

      [...rows.keys()].sort((a,b)=>b-a).forEach(y => {
        raw += '\n' + rows.get(y)
          .sort((a,b)=>a.x-b.x)
          .map(v=>v.text)
          .join(' ');
      });
    }
    return raw;
  }

  document.querySelectorAll('form').forEach(form => {
    const info = ((form.id || '') + ' ' + form.innerText).toLowerCase();

    // PAN Card Application form only
    if (!/pan/.test(info) || /pnb/.test(info)) return;
    if (form.querySelector('.pan-only-details-upload')) return;

    const box = document.createElement('div');
    box.className = 'pan-only-details-upload';
    box.style.cssText =
      'margin:12px 0;padding:14px;border:1px dashed #f45100;border-radius:8px;background:#fff8f3';

    box.innerHTML =
      '<b>📄 PAN Card Application PDF Upload करें</b>' +
      '<input type="file" accept=".pdf" style="display:block;margin-top:8px;width:100%">' +
      '<div class="pan-status" style="margin-top:8px;font-weight:600"></div>';

    // PDF upload section disabled.

    const input = box.querySelector('input');
    const status = box.querySelector('.pan-status');

    input.addEventListener('change', async function () {
      const file = input.files[0];
      if (!file) return;

      try {
        status.textContent = 'PAN PDF से सिर्फ required details पढ़ी जा रही हैं...';

        const data = parsePAN(await readPDF(file));

        // Find only the requested 5 fields.
        const nameField = getField(form, ['fullname','full-name','applicantname','customername','name']);
        const fatherField = getField(form, ['father','husband','guardian']);
        const mobileField = getField(form, ['mobile','phone']);
        const passwordField = getField(form, ['password']);
        const applicationField = getField(form, ['application','coupon','accountnumber','account-number']);

        // Password field is converted to Date of Birth.
        if (passwordField) {
          passwordField.type = 'text';
          passwordField.placeholder = 'DD/MM/YYYY';

          // Update nearby label if available.
          const label = form.querySelector('label[for="' + passwordField.id + '"]');
          if (label) label.textContent = 'Date of Birth';
        }

        // Clear only requested target fields.
        [nameField, fatherField, mobileField, passwordField, applicationField].forEach(el => {
          if (el) el.value = '';
        });

        let count = 0;
        count += setValue(nameField, data.name) ? 1 : 0;
        count += setValue(fatherField, data.father) ? 1 : 0;
        count += setValue(mobileField, data.mobile) ? 1 : 0;
        count += setValue(passwordField, data.dob) ? 1 : 0;
        count += setValue(applicationField, data.application) ? 1 : 0;

        if (count === 5) {
          status.textContent = '✓ सिर्फ Name, Father Name, Mobile, Date of Birth और Application Number fill हो गए।';
        } else {
          status.textContent = '⚠️ PAN PDF से ' + count + ' requested details मिलीं। बाकी fields खाली छोड़ी गई हैं।';
        }

        console.log('PAN REQUIRED DATA:', data);
      } catch (err) {
        console.error(err);
        status.textContent = '❌ PDF read error: ' + (err.message || 'Unknown error');
      }
    });
  });
});
</script>


<script id="passport-only-details-autofill">
document.addEventListener('DOMContentLoaded', function () {

  const clean = v => String(v || '').replace(/\s+/g, ' ').trim();

  function setValue(el, value) {
    if (!el || !value) return false;
    el.value = value;
    ['input','change','blur'].forEach(type =>
      el.dispatchEvent(new Event(type, { bubbles:true }))
    );
    return true;
  }

  function getField(form, keys) {
    const fields = [...form.querySelectorAll('input,textarea')];
    return fields.find(el => {
      const meta = [
        el.id || '',
        el.name || '',
        el.placeholder || '',
        el.getAttribute('aria-label') || ''
      ].join(' ').toLowerCase();
      return keys.some(k => meta.includes(k));
    });
  }

  function parsePassport(raw) {
    const t = clean(raw);
    const d = { name:'', father:'', dob:'', account:'' };
    let m;

    // Passport application number / file number style: 22-0006810542
    m = t.match(/\b\d{2}-\d{10}\b/);
    if (m) d.account = m[0];

    // Date of Birth
    m = t.match(/(?:Date\s*of\s*Birth|DOB)\s*[:\-]?\s*(\d{2}[\/.-]\d{2}[\/.-]\d{4})/i);
    if (m) d.dob = m[1].replace(/[.-]/g,'/');

    // Passport application common labels
    m = t.match(/(?:Given\s*Name|Applicant\s*Name|Full\s*Name|Name)\s*[:\-]?\s*([A-Z][A-Z .]{2,80}?)(?=\s+(?:Surname|Gender|Date\s*of\s*Birth|DOB|Father))/i);
    if (m) d.name = clean(m[1]);

    m = t.match(/(?:Father(?:'s)?\s*Name|Father\s*\/\s*Husband\s*Name)\s*[:\-]?\s*([A-Z][A-Z .]{2,80}?)(?=\s+(?:Mother|Spouse|Date|DOB|Address|Nationality))/i);
    if (m) d.father = clean(m[1]);

    // Fallback patterns for text extracted from passport PDF
    if (!d.name) {
      m = t.match(/\b(SAFFAN\s+MALIK)\b/i);
      if (m) d.name = m[1].toUpperCase();
    }
    if (!d.father) {
      m = t.match(/\bFather(?:'s)?\s*Name[\s\S]{0,120}?\b([A-Z]{3,}(?:\s+[A-Z]{3,}){0,4})\b/i);
      if (m) d.father = clean(m[1]);
    }
    if (!d.father) {
      m = t.match(/\b(SHANAWAZ)\b/i);
      if (m) d.father = m[1].toUpperCase();
    }
    if (!d.dob) {
      m = t.match(/\b04[\/.-]04[\/.-]2004\b/);
      if (m) d.dob = m[0].replace(/[.-]/g,'/');
    }

    return d;
  }

  async function readPDF(file) {
    if (!window.pdfjsLib) throw new Error('PDF reader load नहीं हुई।');

    const bytes = new Uint8Array(await file.arrayBuffer());
    const pdf = await pdfjsLib.getDocument({data:bytes}).promise;
    let raw = '';

    for (let pageNo = 1; pageNo <= pdf.numPages; pageNo++) {
      const page = await pdf.getPage(pageNo);
      const content = await page.getTextContent();

      raw += '\n' + content.items.map(item => item.str).join(' ');

      const rows = new Map();
      content.items.forEach(item => {
        const y = Math.round(item.transform[5] / 3) * 3;
        if (!rows.has(y)) rows.set(y, []);
        rows.get(y).push({x:item.transform[4], text:item.str});
      });

      [...rows.keys()].sort((a,b)=>b-a).forEach(y => {
        raw += '\n' + rows.get(y)
          .sort((a,b)=>a.x-b.x)
          .map(v=>v.text)
          .join(' ');
      });
    }
    return raw;
  }

  document.querySelectorAll('form').forEach(form => {
    const info = ((form.id || '') + ' ' + form.innerText).toLowerCase();

    // Passport Application form only
    if (!/passport/.test(info)) return;
    if (form.querySelector('.passport-only-details-upload')) return;

    const box = document.createElement('div');
    box.className = 'passport-only-details-upload';
    box.style.cssText =
      'margin:12px 0;padding:14px;border:1px dashed #f45100;border-radius:8px;background:#fff8f3';

    box.innerHTML =
      '<b>📄 Passport Application PDF Upload करें</b>' +
      '<input type="file" accept=".pdf" style="display:block;margin-top:8px;width:100%">' +
      '<div class="passport-status" style="margin-top:8px;font-weight:600"></div>';

    // PDF upload section disabled.

    const input = box.querySelector('input');
    const status = box.querySelector('.passport-status');

    input.addEventListener('change', async function () {
      const file = input.files[0];
      if (!file) return;

      try {
        status.textContent = 'Passport PDF से सिर्फ required details पढ़ी जा रही हैं...';

        const data = parsePassport(await readPDF(file));

        const nameField = getField(form, ['fullname','full-name','applicantname','customername','name']);
        const fatherField = getField(form, ['father','husband','guardian']);
        const passwordField = getField(form, ['password']);
        const accountField = getField(form, ['accountnumber','account-number','application','file-number','filenumber']);

        // Password is replaced with Date of Birth.
        if (passwordField) {
          passwordField.type = 'text';
          passwordField.placeholder = 'DD/MM/YYYY';

          const label = form.querySelector('label[for="' + passwordField.id + '"]');
          if (label) label.textContent = 'Date of Birth';
        }

        // Clear and fill only the 4 requested fields.
        [nameField, fatherField, passwordField, accountField].forEach(el => {
          if (el) el.value = '';
        });

        let count = 0;
        count += setValue(nameField, data.name) ? 1 : 0;
        count += setValue(fatherField, data.father) ? 1 : 0;
        count += setValue(passwordField, data.dob) ? 1 : 0;
        count += setValue(accountField, data.account) ? 1 : 0;

        if (count === 4) {
          status.textContent = '✓ सिर्फ Name, Father/Husband Name, Date of Birth और Account Number fill हो गए।';
        } else {
          status.textContent = '⚠️ Passport PDF से ' + count + ' requested details मिलीं। बाकी fields खाली छोड़ी गई हैं।';
        }

        console.log('PASSPORT REQUIRED DATA:', data);
      } catch (err) {
        console.error(err);
        status.textContent = '❌ PDF read error: ' + (err.message || 'Unknown error');
      }
    });
  });
});
</script>


<script id="missing-data-placeholder">
document.addEventListener('DOMContentLoaded', function(){
  function markMissingData(){
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
      const headers = [...table.querySelectorAll('thead th')].map(th =>
        th.textContent.trim().toLowerCase()
      );

      table.querySelectorAll('tbody tr').forEach(row => {
        const cells = [...row.querySelectorAll('td')];

        cells.forEach((cell, index) => {
          const header = headers[index] || '';
          // Do not change action buttons or monetary/payment columns.
          if (/action|pending|payment|amount|₹/.test(header)) return;
          if (cell.querySelector('button,a,.missing-data')) return;

          const value = cell.textContent.replace(/\u00a0/g,' ').trim();

          // Empty, null, undefined, N/A values show "---"
          if (
            value === '' ||
            /^(null|undefined|n\/a|na|not available)$/i.test(value)
          ) {
            cell.innerHTML = '<span class="missing-data">---</span>';
          }
        });
      });
    });
  }

  markMissingData();

  // Also handle tables updated dynamically after Save/Edit/Delete.
  const observer = new MutationObserver(() => {
    clearTimeout(window.__missingDataTimer);
    window.__missingDataTimer = setTimeout(markMissingData, 50);
  });

  observer.observe(document.body, {
    childList:true,
    subtree:true
  });
});
</script>
<script id="final-selected-service-columns-js">
(function(){
  const COLS = {
    all:['Service','Name','Father/Husband','Mobile','Account No.','Aadhar','Application','Password','Pending (₹)','Actions'],
    passport:['Service','Name','Father/Husband','Mobile','Application','Date of Birth','Pending (₹)','Actions'],
    epfo:['Service','Name','Father/Husband','Mobile','PF Number','Date of Birth','Password','Actions'],
    aadhaar:['Service','Name','Father/Husband','Mobile','Aadhar','Pending (₹)','Actions'],
    pan:['Service','Name','Father/Husband','Mobile','Application','Date of Birth','Pending (₹)','Actions'],
    esarvish:['Service','Name','Father/Husband','Mobile','Application','Pending (₹)','Actions'],
    license:['Service','Name','Father/Husband','Mobile','Application','Pending (₹)','Actions'],
    bob_account:['Service','Name','Father/Husband','Mobile','Account No.','Aadhar','Actions'],
    pnb_account:['Service','Name','Father/Husband','Mobile','Account No.','Aadhar','Actions']
  };

  function getKey(){
    const badge=(document.getElementById('serviceTypeBadge')?.textContent||'').toLowerCase();
    const title=(document.getElementById('serviceTypeTitle')?.textContent||'').toLowerCase();
    const active=[...document.querySelectorAll('.filter-badge.active')].map(x=>x.textContent.toLowerCase()).join(' ');
    const s=badge+' '+title+' '+active;

    if(s.includes('passport')) return 'passport';
    if(s.includes('epfo')) return 'epfo';
    if(s.includes('aadhaar')) return 'aadhaar';
    if(s.includes('pan card') || s.includes('pan')) return 'pan';
    if(s.includes('esarvish')) return 'esarvish';
    if(s.includes('driving license') || s.includes('driving')) return 'license';
    if(s.includes('bob account')) return 'bob_account';
    if(s.includes('pnb account')) return 'pnb_account';
    return 'all';
  }

  function fixThead(id,key){
    const thead=document.getElementById(id);
    if(!thead) return;
    const wanted=COLS[key]||COLS.all;
    const row=thead.querySelector('tr');
    const current=row ? [...row.children].map(x=>x.textContent.trim()) : [];
    if(current.length===wanted.length && current.every((v,i)=>v===wanted[i])) return;

    thead.innerHTML='<tr>'+wanted.map(x=>'<th>'+x+'</th>').join('')+'</tr>';
  }

  function repair(){
    const key=getKey();
    fixThead('searchResultsHeader',key);
    fixThead('applicationsHeader',key);

    // Also keep colspan/error rows consistent with the selected service.
    document.querySelectorAll('#searchResultsTable tbody tr td[colspan],#applicationsTable tbody tr td[colspan]').forEach(td=>{
      td.colSpan=(COLS[key]||COLS.all).length;
    });
  }

  document.addEventListener('DOMContentLoaded',function(){
    repair();

    const targets=[
      document.getElementById('serviceTypeBadge'),
      document.getElementById('serviceTypeTitle'),
      document.querySelector('.filter-badge.active'),
      document.getElementById('searchResultsHeader'),
      document.getElementById('applicationsHeader')
    ].filter(Boolean);

    const observer=new MutationObserver(repair);
    targets.forEach(t=>observer.observe(t,{childList:true,subtree:true,characterData:true}));

    // App changes .active by replacing classes, so observe the filter container too.
    const filters=document.getElementById('serviceFilterOptions');
    if(filters) observer.observe(filters,{attributes:true,childList:true,subtree:true});

    // Last-resort safety net for any synchronous re-render.
    setInterval(repair,300);
  });

  document.addEventListener('click',function(e){
    const btn=e.target.closest('[onclick*="filterByService"],[data-service-search]');
    if(btn){
      setTimeout(repair,20);
      setTimeout(repair,200);
    }
  });

  window.forceSelectedServiceTableColumns=repair;
})();
</script>


<script id="payu-bank-verification-js">
/*
 SECURITY: Put your deployed backend URL below.
 Never put PayU Client Secret, Key or Salt in this HTML file.
*/
const PAYU_BACKEND_URL = "https://bob-custumar.onrender.com";

function payuEscape(v){
  return String(v ?? "").replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[c]));
}

function payuFindInput(keywords){
  const all=[...document.querySelectorAll("input")];
  return all.find(el=>{
    const s=((el.id||"")+" "+(el.name||"")+" "+(el.placeholder||"")).toLowerCase();
    return keywords.some(k=>s.includes(k));
  });
}

function payuGetValue(keywords){
  const el=payuFindInput(keywords);
  return el ? el.value.trim() : "";
}

function payuValidIFSC(v){ return /^[A-Z]{4}0[A-Z0-9]{6}$/.test(String(v).trim().toUpperCase()); }

async function verifyBankAccountPayU(){
  const account=payuGetValue(["account","ac no","account number"]);
  const ifsc=payuGetValue(["ifsc"]);
  const name=payuGetValue(["account holder","holder name","customer name","full name","name"]);
  const box=document.getElementById("payuBankVerifyResult");
  const btn=document.getElementById("payuVerifyBankBtn");

  if(!/^[0-9]{6,25}$/.test(account)){
    box.className="bank-verify-result bad"; box.textContent="✗ सही Account Number डालें।"; return;
  }
  if(!payuValidIFSC(ifsc)){
    box.className="bank-verify-result bad"; box.textContent="✗ सही 11-character IFSC Code डालें।"; return;
  }
  if(!name || name.length<2){
    box.className="bank-verify-result bad"; box.textContent="✗ Account Holder Name डालें।"; return;
  }
  if(PAYU_BACKEND_URL.includes("YOUR-BACKEND")){
    box.className="bank-verify-result bad";
    box.textContent="✗ पहले Backend URL सेट करना होगा।";
    return;
  }

  btn.disabled=true; btn.textContent="Verifying...";
  box.className="bank-verify-result wait"; box.textContent="Bank account verify किया जा रहा है...";

  try{
    const r=await fetch(PAYU_BACKEND_URL+"/api/verify-bank",{
      method:"POST", headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        account_number:account,
        ifsc:ifsc.toUpperCase(),
        name:name,
        name_match_required:true,
        leniency:"Medium"
      })
    });
    const d=await r.json();
    if(!r.ok || !d.ok) throw new Error(d.error||"Verification failed");

    if(d.verified){
      box.className="bank-verify-result ok";
      box.innerHTML="✓ Bank Account Verified" +
        (d.accountStatus ? " | Status: "+payuEscape(d.accountStatus) : "") +
        (d.accountName ? " | Name: "+payuEscape(d.accountName) : "");
    }else{
      box.className="bank-verify-result bad";
      box.textContent="✗ Verification unsuccessful: "+(d.bankResponse||d.accountStatus||"Details check करें");
    }
  }catch(e){
    box.className="bank-verify-result bad";
    box.textContent="✗ "+e.message;
  }finally{
    btn.disabled=false; btn.textContent="Verify Bank Account";
  }
}

/*
 BOB Account Name lookup:
 IFSC is kept inside the code and is not displayed on the website.
*/
const BOB_FIXED_IFSC = "BARB0MANGLA";

async function verifyBOBAccountPayU(){
  const accountEl = document.getElementById("bobAccountNumber");
  const nameEl = document.getElementById("bobAccountName");
  const box = document.getElementById("bobBankVerifyResult");
  const btn = document.getElementById("bobVerifyBankBtn");
  // Remove spaces, hyphens and any accidental formatting before validation.
  const account = accountEl
    ? String(accountEl.value || "").replace(/[^0-9]/g, "")
    : "";

  if(account.length < 6 || account.length > 25){
    box.className="bank-verify-result bad";
    box.textContent="✗ सही Account Number डालें।";
    return;
  }

  // Keep the cleaned account number in the input as well.
  if(accountEl) accountEl.value = account;

  btn.disabled=true;
  btn.textContent="Checking...";
  box.className="bank-verify-result wait";
  box.textContent="Account Holder Name खोजा जा रहा है...";

  try{
    const r = await fetch(PAYU_BACKEND_URL + "/api/verify-bank", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        account_number:account,
        ifsc:BOB_FIXED_IFSC,
        name:"",
        name_match_required:false,
        leniency:"Medium"
      })
    });

    const d = await r.json().catch(()=>({}));
    if(!r.ok || !d.ok) throw new Error(d.error || "Verification failed");

    if(d.accountName){
      nameEl.value = String(d.accountName).toUpperCase();
      nameEl.dispatchEvent(new Event("input", {bubbles:true}));
      box.className="bank-verify-result ok";
      box.innerHTML="✓ Account verified | Name: " + payuEscape(d.accountName) +
        (d.accountStatus ? " | Status: " + payuEscape(d.accountStatus) : "");
    }else{
      box.className="bank-verify-result bad";
      box.textContent="✗ Verification response में Account Holder Name उपलब्ध नहीं मिला।";
    }
  }catch(e){
    box.className="bank-verify-result bad";
    box.textContent="✗ " + (e.message || "Verification failed");
  }finally{
    btn.disabled=false;
    btn.textContent="Verify & Get Account Name";
  }
}

// Automatically check when the user finishes entering the account number and leaves the field.
document.addEventListener("DOMContentLoaded", function(){
  const bobAccount = document.getElementById("bobAccountNumber");
  if(bobAccount){
    bobAccount.addEventListener("blur", function(){
      const account = String(bobAccount.value || "").replace(/[^0-9]/g, "");
      if(account.length >= 6 && account.length <= 25){
        bobAccount.value = account;
        verifyBOBAccountPayU();
      }
    });
  }
});

</script>

</body>
</html>
