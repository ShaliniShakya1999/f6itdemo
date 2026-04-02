(() => {
  const mountOfferings = () => {
    const root = document.getElementById("idx-stack");
    if (!root) return;

    const hrefMap = {
      "Connected Banking": "connected-banking.html",
      "Utility Payments": "utility-payments.html",
      "Instant Payouts": "instant-payouts.html",
      "Travel Booking": "travel-booking.html",
      "UPI Collection": "upi-collection.html",
      "Micro ATM": "micro-atm.html",
      "Aadhaar Banking": "aadhaar-banking.html",
      "Core Banking": "core-banking.html",
      "Verification APIs": "verification-apis.html",
      "PAN Card": "pan-card.html",
      "WhatsApp Solution": "whatsapp-solution.html",
      "eAudit": "eaudit.html",
      "Insurance": "insurance.html",
      "Investment": "investment.html",
      "Recharge": "recharge.html",
      "Lending": "lending.html",
      "Core Insurance": "core-insurance.html",
      "Website Development": "website-development.html",
      "Software Development": "software-development.html",
      "ERP": "erp.html",
      "CRM": "crm.html",
      "DMS": "dms.html",
      "PMS": "pms.html",
      "HPMS": "hpms.html",
      "E-Auction": "e-auction.html",
      "B2B & Sales App": "b2b-sales-app.html",
      "E-Governance": "e-governance.html",
    };

    const hrefFor = (name) => hrefMap[name] || "catalog.html";

    const imageMap = {
      "Connected Banking": "image/Connected.png",
      "Utility Payments": "image/Utility_Payments.png",
      "Instant Payouts": "image/Instant.png",
      "Travel Booking": "image/MOBILE_APP_SCREEN.png",
      "UPI Collection": "image/Payment_Collection.png",
      "Micro ATM": "image/ATM.png",
      "Aadhaar Banking": "image/Aadhaar.png",
      "Verification APIs": "image/Verification.png",
      "PAN Card": "image/pan-card-services.png",
      "Insurance": "image/SECURITY_SECTION_ILLUSTRATION.png",
      "Investment": "image/Analytics Dashboard.png",
      "Recharge": "image/Utility.png",
      "Lending": "image/Money_Transfer.png",
      "Website Development": "image/MOBILE_APP_SCREEN.png",
      "Software Development": "image/API Gateway.png",
      "Core Banking": "image/Connected.png",
      "HPMS": "image/API Gateway.png",
      "PMS": "image/Analytics Dashboard.png",
      "Core Insurance": "image/SECURITY_SECTION_ILLUSTRATION.png",
      "E-Auction": "image/E-commerce Catalog  Store.png",
      "B2B & Sales App": "image/Storefront UI  Template.png",
      "ERP": "image/ERP.png",
      "CRM": "image/DASHBOARDIMAGE.png",
      "E-Governance": "image/Analytics Dashboard.png",
      "DMS": "image/Document Vault  DMS.png",
      "eAudit": "image/Compliance  Audit.png",
      "WhatsApp Solution": "image/Storefront UI  Template.png",
    };

    const sections = [
      {
        title: "Fintech & Banking",
        items: [
          ["Connected Banking", "Unified multi-account view with secure controls.", "🏦"],
          ["Utility Payments", "Bulk utility bill operations with reconciliation.", "💡"],
          ["Instant Payouts", "Realtime disbursals with transaction tracking.", "⚡"],
          ["Travel Booking", "Integrated travel booking with payment support.", "✈️"],
          ["UPI Collection", "Collect payments through UPI links and QR flows.", "📲"],
          ["Micro ATM", "AEPS-enabled field withdrawals and banking access.", "🏧"],
          ["Aadhaar Banking", "Biometric banking transactions with compliance.", "🆔"],
          ["Core Banking", "Core ledger and account lifecycle platform.", "🧾"],
        ],
      },
      {
        title: "APIs & Verification",
        items: [
          ["Verification APIs", "KYC and verification APIs for faster onboarding.", "🔐"],
          ["PAN Card", "Fast PAN validation and verification workflows.", "🪪"],
          ["WhatsApp Solution", "Automated customer communication APIs.", "💬"],
          ["eAudit", "Audit trails and evidence-ready reporting.", "✅"],
        ],
      },
      {
        title: "Financial Services",
        items: [
          ["Insurance", "Digital policy lifecycle and claims support.", "🛡️"],
          ["Investment", "Portfolio insights and advisory workflows.", "📈"],
          ["Recharge", "High-volume recharge with live status.", "📡"],
          ["Lending", "Origination, underwriting, and collections stack.", "💳"],
          ["Core Insurance", "Insurance operations backbone platform.", "📋"],
        ],
      },
      {
        title: "Software & Platforms",
        items: [
          ["Website Development", "High-performance websites for conversion.", "🌐"],
          ["Software Development", "Custom product engineering services.", "💻"],
          ["ERP", "Enterprise planning and workflow platform.", "🧠"],
          ["CRM", "Customer lifecycle and sales pipeline tools.", "👥"],
          ["DMS", "Document lifecycle and compliance controls.", "📁"],
          ["PMS", "Process and project workflow platform.", "🗂️"],
          ["HPMS", "Hospitality/property management system.", "🏨"],
          ["E-Auction", "Digital bidding and auction lifecycle tools.", "⚖️"],
          ["B2B & Sales App", "Distributor and sales-force automation.", "🛍️"],
          ["E-Governance", "Citizen-facing digital service modules.", "🏛️"],
        ],
      },
    ];

    root.innerHTML = sections.map((sec) => `
      <section class="idx-cat" data-reveal>
        <div class="idx-cat-title">${sec.title}</div>
        <div class="idx-grid">
          ${sec.items.map(([name, desc, icon]) => `
            <a href="${hrefFor(name)}" class="idx-card block h-full">
              <div class="idx-media">
                <img src="${imageMap[name] || "image/DASHBOARDIMAGE.png"}" alt="${name}" loading="lazy" onerror="this.src='image/DASHBOARDIMAGE.png'"/>
                <span class="idx-hover">Explore →</span>
              </div>
              <div class="idx-icon">${icon}</div>
              <h3 class="idx-name">${name}</h3>
              <p class="idx-desc">${desc}</p>
            </a>
          `).join("")}
        </div>
      </section>
    `).join("");
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountOfferings);
  } else {
    mountOfferings();
  }
})();
