(() => {
  const industries = [
    { label: "Banking & Finance", href: "services.html#banking", icon: "bank" },
    { label: "Insurance", href: "catalog.html", icon: "shield" },
    { label: "Education", href: "services.html#it", icon: "graduation" },
    { label: "Healthcare", href: "services.html#it", icon: "heart" },
    { label: "E-Commerce", href: "catalog.html", icon: "cart" },
    { label: "E-Governance", href: "products.html#smart-products", icon: "building" },
    { label: "Retail", href: "catalog.html", icon: "store" },
    { label: "Agriculture", href: "catalog.html", icon: "leaf" },
    { label: "Real Estate", href: "catalog.html", icon: "building" },
    { label: "Manufacturing", href: "services.html#cloud", icon: "factory" },
    { label: "Oil & Gas", href: "services.html#cloud", icon: "factory" },
    { label: "Mining", href: "services.html#cloud", icon: "factory" },
  ];

  const productCategories = [
    {
      title: "Digital Banking",
      icon: "bank",
      items: [
        "Core Banking Software", "Microfinance Solutions", "Forex Treasury Banking", "Wallet Solution",
        "Virtual Banking", "Switching Solution", "Agent Banking", "ATM Solutions", "USSD Banking",
      ],
    },
    {
      title: "MIS",
      icon: "bar-chart",
      items: [
        "Business Intelligence", "Fund Management", "DSS", "Ratio Analysis / Budgeting",
        "Performance Management", "Day End MIS",
      ],
    },
    {
      title: "Core Insurance Solutions",
      icon: "shield",
      items: [
        "Motor", "Medical", "Fire", "Health", "Marine Cargo", "Travel",
        "Engineering All Risk", "Property All Risk", "Liability",
      ],
    },
    {
      title: "Regulatory Channels",
      icon: "clipboard",
      items: [
        "Asset Liability Management", "Loan Origination System", "Recovery Management",
        "Anti-Money Laundering", "Legal Recovery Management", "Risk Based Internal Management",
      ],
    },
    {
      title: "Operational Channels",
      icon: "layout",
      items: [
        "Loan Origination System", "Loan Management System", "Legal Recovery System",
        "Fixed Asset Management", "Credit & Recovery Monitoring System", "NPA / Overdue Management",
        "Debt Collection Management",
      ],
    },
    {
      title: "Stand-Alone Products",
      icon: "server",
      items: [
        "eAuction", "E-Serve", "E-Commerce", "eAudit", "Document Management System",
        "Project Management System", "Property Management System", "WhatsApp Solutions",
        "Construction ERP", "Campus Software", "Enterprise ERP", "E-Learning", "E-Governance",
        "E-Procurement", "ERDMS", "Hospital Management System", "Clinique Management System",
        "Pharmaceuticals Management System", "Taxi Management System", "MyOffice", "CRM",
        "HPMS", "EBPAS", "Performance Management System", "Telecom Revenue Management",
      ],
    },
  ];

  const productsBaseHref = "products.html";
  const offeringPages = {
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
  function productHref(slug) {
    if (slug && offeringPages[slug]) return offeringPages[slug];
    return slug ? `${productsBaseHref}#${slug.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-")}` : productsBaseHref;
  }

  const serviceCategories = [
    {
      title: "Technology Service",
      icon: "server",
      items: [
        "Blockchain", "Artificial Intelligence", "Internet of Things", "Metaverse",
        "Augmented Reality", "Virtual Reality", "Machine Learning", "Robotic Process Automation",
        "Business Intelligence", "Website Development", "iOS/Mobile App Development",
        "Cloud System (AWS & Azure)", "IT Auditing & ISO Auditing", "IT Infrastructure",
        "Enterprise Security", "Open Source Solutions", "Cyber Insurance & Cyber Security",
        "Natural Language Processing", "Robotics",
      ],
    },
    {
      title: "Business Service",
      icon: "activity",
      items: [
        "Business Process Management", "Business Leadership Acceleration Program",
        "Business Consulting & Project Management", "Digital Marketing", "MS Dynamic",
        "Big Data & Analytics",
      ],
    },
    {
      title: "Consulting Service",
      icon: "trending",
      items: [
        "Digital Transformation", "Strategy & Architecture", "Business Transformation",
        "Enterprise Process & Application",
      ],
    },
  ];

  const servicesBaseHref = "services.html";
  function serviceHref(label) {
    return label ? `${servicesBaseHref}#${label.toLowerCase().replace(/\s+/g, "-").replace(/[&/]/g, "-").replace(/[()]/g, "")}` : servicesBaseHref;
  }

  const erpSystems = [
    { label: "ERP System", href: "products.html#erp-system" },
    { label: "Safety Vault", href: "products.html#safety-vault" },
    { label: "ERP Nxt", href: "products.html#erp-nxt" },
  ];

  const moreMenuItems = [
    { label: "Careers", href: "careers.html" },
    { label: "Insights", href: "about.html#story" },
    { label: "Awards & Recognition", href: "about.html#awards" },
    { label: "Webinars", href: "about.html#webinars" },
    { label: "Videos", href: "about.html#videos" },
    { label: "Testimonials", href: "index.html#testimonials" },
    { label: "Blog", href: "about.html#blog" },
    { label: "Contact Us", href: "contact.html" },
  ];

  const iconSvg = {
    bank: '<path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
    heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    cart: '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
    store: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    factory: '<path d="M2 20V8l4 2v10M16 20v-6l4 2v4M4 10V8L12 4l8 4v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 20h12M12 20v-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
    building: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12h4M6 16h4M6 8h4M14 12h4M14 16h4M14 8h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    graduation: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    layout: '<path d="M18 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/><path d="M3 9h18M9 21V9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    gavel: '<path d="m15 6-6 6 4 4"/><path d="m9 12 6-6 4 4"/><path d="M4 20 2 18l3-3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/><path d="M9 12h6M9 16h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    "bar-chart": '<path d="M12 20V10M18 20V4M6 20v-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    "shopping-bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
    message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    trending: '<path d="m22 7-8.5 8.5-4-4L2 17"/><path d="M16 7h6v6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    server: '<path d="M2 6h20M2 12h20M2 18h20"/><path d="M6 6v.01M6 12v.01M6 18v.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    "git-branch": '<path d="M6 3v12"/><path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M15 6a9 9 0 0 0-9 9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  };

  function currentPath() {
    const p = (window.location.pathname || "").split("/").pop();
    return p || "index.html";
  }

  function isActive(href, active) {
    return href === active || (active === "index.html" && href === "index.html");
  }

  function linkClass(active) {
    return (
      "px-3 py-2 rounded-lg text-sm font-medium transition " +
      (active ? "bg-[#eff6ff] text-[#2563EB]" : "text-[#0f172a] hover:bg-[#f1f5f9] hover:text-[#0f172a]")
    );
  }

  function getIcon(name) {
    const svg = iconSvg[name] || iconSvg.building;
    return `<span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#eff6ff] text-[#2563EB]"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">${svg}</svg></span>`;
  }

  function renderMegaList(items) {
    return items
      .map(
        (x) => `
          <a href="${x.href}" class="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-[#f8fafc]">
            ${getIcon(x.icon || "building")}
            <span class="text-sm text-[#0f172a] group-hover:text-[#2563EB]">${x.label}</span>
          </a>
        `
      )
      .join("");
  }

  function renderIndustriesGrid() {
    return industries
      .map(
        (x) => `
          <a href="${x.href}" class="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-[#f8fafc]">
            ${getIcon(x.icon)}
            <span class="text-sm font-medium text-[#0f172a] group-hover:text-[#2563EB]">${x.label}</span>
          </a>
        `
      )
      .join("");
  }

  function renderProductsMegaMenu() {
    return productCategories
      .map(
        (col) => `
          <div class="mega-col space-y-2.5 border-r border-slate-100 last:border-r-0 pr-4 last:pr-0">
            <div class="flex items-center gap-2 pb-2 border-b border-slate-100">
              ${getIcon(col.icon)}
              <span class="text-sm font-bold text-slate-900">${col.title}</span>
            </div>
            <ul class="space-y-0.5 pt-0.5">
              ${col.items
                .map(
                  (label) => `
                <li>
                  <a href="${productHref(label)}" class="mega-item block rounded-md px-2.5 py-2 text-xs text-slate-600 hover:bg-[#eff6ff] hover:text-[#2563EB] transition-colors duration-150">${label}</a>
                </li>
              `
                )
                .join("")}
            </ul>
          </div>
        `
      )
      .join("");
  }

  function renderServicesMegaMenu() {
    return serviceCategories
      .map(
        (col) => `
          <div class="space-y-3">
            <div class="flex items-center gap-2 pb-1 border-b border-slate-200">
              ${getIcon(col.icon)}
              <span class="text-sm font-semibold text-[#0f172a]">${col.title}</span>
            </div>
            <ul class="space-y-1">
              ${col.items
                .map(
                  (label) => `
                <li>
                  <a href="${serviceHref(label)}" class="block rounded-lg px-2 py-1.5 text-xs text-slate-600 hover:bg-[#f8fafc] hover:text-[#2563EB] transition">${label}</a>
                </li>
              `
                )
                .join("")}
            </ul>
          </div>
        `
      )
      .join("");
  }

  function renderHeader() {
    const active = currentPath();
    const homeActive = isActive("index.html", active);
    const aboutActive = isActive("about.html", active);
    const careersActive = isActive("careers.html", active);
    const contactActive = isActive("contact.html", active);
    const servicesActive = active === "services.html";
    const productsActive = active === "products.html" || active === "catalog.html";

    return `
      <header class="nav-header sticky top-0 z-50 bg-white border-b border-slate-200/60 shadow-sm shadow-slate-200/30">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-14 lg:h-16 items-center justify-between gap-4">
            <a href="index.html" class="flex items-center gap-2.5 shrink-0 transition opacity-90 hover:opacity-100">
              <span class="inline-flex h-9 w-9 lg:h-10 lg:w-10 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <img src="image/F6.png" alt="F6 logo" class="h-full w-full object-contain p-1" loading="lazy" />
              </span>
              <div class="leading-tight">
                <div class="text-sm font-semibold tracking-tight text-slate-900">F6IT</div>
                <div class="text-xs text-slate-500 hidden sm:block">Fintech & IT Solutions</div>
              </div>
            </a>

            <nav class="hidden lg:flex items-center gap-0.5" aria-label="Primary">
              <a href="index.html" class="${linkClass(homeActive)}">Home</a>
              <div class="relative" data-mega>
                <button type="button" class="${linkClass(false)} nav-link inline-flex items-center gap-1" data-mega-trigger="industries" aria-expanded="false">
                  Industries
                  <svg class="nav-chevron transition-transform" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
              <div class="relative mega-hover-zone" data-mega data-mega-hover="products">
                <button type="button" class="${linkClass(productsActive)} nav-link inline-flex items-center gap-1" data-mega-trigger="products" aria-expanded="false">
                  Products
                  <svg class="nav-chevron transition-transform duration-200" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
              <div class="relative" data-mega>
                <button type="button" class="${linkClass(servicesActive)} nav-link inline-flex items-center gap-1" data-mega-trigger="services" aria-expanded="false">
                  Services
                  <svg class="nav-chevron transition-transform" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
              <div class="relative" data-mega>
                <button type="button" class="${linkClass(false)} nav-link inline-flex items-center gap-1" data-mega-trigger="erp" aria-expanded="false">
                  ERP System
                  <svg class="nav-chevron transition-transform" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
              <div class="relative" data-mega>
                <button type="button" class="${linkClass(false)} nav-link inline-flex items-center gap-1" data-mega-trigger="more" aria-expanded="false">
                  More
                  <svg class="nav-chevron transition-transform" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </nav>

            <div class="hidden lg:flex items-center gap-1 shrink-0">
              <button type="button" class="p-2.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors duration-200" aria-label="Search">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
              </button>
              <a href="contact.html" class="rounded-lg bg-gradient-to-r from-[#2563EB] to-[#22D3EE] px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-cyan-200/40 transition-all duration-200 focus-ring hover:from-[#1D4ED8] hover:to-[#06B6D4] hover:shadow-md">
                Talk to Expert
              </a>
            </div>

            <button id="mobileMenuBtn" class="lg:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2.5 text-slate-700 focus-ring hover:bg-[#f8fafc]"
              aria-label="Open menu" aria-expanded="false">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Desktop mega menus — centered card 1200px -->
        <div class="hidden lg:block absolute left-0 right-0 top-full pt-0">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-center">
            <div class="w-full max-w-[1200px] relative">
              <div id="mega-industries" data-mega-panel="industries" class="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-[1200px] hidden pt-2">
                <div class="pointer-events-auto megamenu p-6 max-h-[70vh] overflow-auto">
                  <div class="text-sm font-semibold text-[#0f172a] mb-4">Industries</div>
                  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    ${renderIndustriesGrid()}
                  </div>
                  <div class="mt-5 pt-4 border-t border-slate-100 flex justify-end">
                    <a href="contact.html" class="text-sm font-semibold text-[#2563EB] hover:text-[#1d4ed8]">Talk to an expert →</a>
                  </div>
                </div>
              </div>

              <div id="mega-products" data-mega-panel="products" class="mega-hover-panel pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-[1200px] hidden pt-3">
                <div class="pointer-events-auto megamenu megamenu-products p-6 max-h-[70vh] overflow-auto">
                  <div class="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Products & Solutions</div>
                  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-0">
                    ${renderProductsMegaMenu()}
                  </div>
                  <div class="mt-5 pt-4 border-t border-slate-100 flex justify-end">
                    <a href="catalog.html" class="text-sm font-semibold text-[#2563EB] hover:text-[#1d4ed8] transition-colors">View catalog →</a>
                  </div>
                </div>
              </div>

              <div id="mega-services" data-mega-panel="services" class="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-[1200px] hidden pt-2">
                <div class="pointer-events-auto megamenu p-6 max-h-[70vh] overflow-auto">
                  <div class="text-base font-semibold text-[#0f172a] mb-5">Services</div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${renderServicesMegaMenu()}
                  </div>
                  <div class="mt-5 pt-4 border-t border-slate-100 flex justify-end">
                    <a href="services.html" class="text-sm font-semibold text-[#2563EB] hover:text-[#1d4ed8]">See all services →</a>
                  </div>
                </div>
              </div>

              <div id="mega-erp" data-mega-panel="erp" class="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-[1200px] hidden pt-2">
                <div class="pointer-events-auto megamenu p-5 w-56">
                  <div class="text-sm font-semibold text-[#0f172a] mb-3">ERP System</div>
                  <ul class="space-y-1">
                    ${erpSystems.map((x) => `<li><a href="${x.href}" class="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-[#f8fafc] hover:text-[#2563EB] transition">${x.label}</a></li>`).join("")}
                  </ul>
                </div>
              </div>

              <div id="mega-more" data-mega-panel="more" class="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-[1200px] hidden pt-2">
                <div class="pointer-events-auto megamenu p-5 w-56">
                  <div class="text-sm font-semibold text-[#0f172a] mb-3">More</div>
                  <ul class="space-y-1">
                    ${moreMenuItems.map((x) => `<li><a href="${x.href}" class="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-[#eff6ff] hover:text-[#2563EB] transition-colors duration-150">${x.label}</a></li>`).join("")}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="mobileMenu" class="lg:hidden hidden border-t border-slate-200 bg-white">
          <div class="mx-auto max-w-7xl px-4 py-4 space-y-1">
            <a href="index.html" class="block px-3 py-2.5 rounded-lg text-sm font-medium ${homeActive ? "bg-[#eff6ff] text-[#2563EB]" : "text-[#0f172a] hover:bg-[#f8fafc]"}">Home</a>
            <button type="button" class="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-[#0f172a] hover:bg-[#f8fafc] transition" data-accordion-trigger="m-industries" aria-expanded="false">
              <span>Industries</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div class="hidden pl-2" data-accordion-panel="m-industries">
              <div class="grid gap-1 py-2">
                ${industries.map((x) => `<a href="${x.href}" class="block px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-[#2563EB] hover:bg-[#f8fafc]">${x.label}</a>`).join("")}
              </div>
            </div>

            <button type="button" class="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-[#0f172a] hover:bg-[#f8fafc] transition" data-accordion-trigger="m-products" aria-expanded="false">
              <span>Products</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div class="hidden pl-2" data-accordion-panel="m-products">
              <div class="py-2 space-y-4 max-h-[60vh] overflow-y-auto">
                ${productCategories
                  .map(
                    (col) => `
                  <div>
                    <div class="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-[#2563EB]">${col.title}</div>
                    <div class="space-y-0.5">
                      ${col.items.map((label) => `<a href="${productHref(label)}" class="block px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-[#2563EB] hover:bg-[#f8fafc]">${label}</a>`).join("")}
                    </div>
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>

            <button type="button" class="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-[#0f172a] hover:bg-[#f8fafc] transition" data-accordion-trigger="m-services" aria-expanded="false">
              <span>Services</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div class="hidden pl-2" data-accordion-panel="m-services">
              <div class="py-2 space-y-4 max-h-[60vh] overflow-y-auto">
                ${serviceCategories
                  .map(
                    (col) => `
                  <div>
                    <div class="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-[#2563EB]">${col.title}</div>
                    <div class="space-y-0.5">
                      ${col.items.map((label) => `<a href="${serviceHref(label)}" class="block px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-[#2563EB] hover:bg-[#f8fafc]">${label}</a>`).join("")}
                    </div>
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>

            <div class="px-3 py-1.5 text-xs font-semibold text-[#2563EB]">ERP System</div>
            ${erpSystems.map((x) => `<a href="${x.href}" class="block px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-[#2563EB] hover:bg-[#f8fafc]">${x.label}</a>`).join("")}

            <button type="button" class="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-[#0f172a] hover:bg-[#f8fafc] transition" data-accordion-trigger="m-more" aria-expanded="false">
              <span>More</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div class="hidden pl-2" data-accordion-panel="m-more">
              <div class="space-y-0.5 py-2">
                ${moreMenuItems.map((x) => `<a href="${x.href}" class="block px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-[#2563EB] hover:bg-[#f8fafc]">${x.label}</a>`).join("")}
              </div>
            </div>

            <div class="mt-4 pt-4 border-t border-slate-200 flex gap-3">
              <a href="contact.html" class="flex-1 rounded-lg bg-gradient-to-r from-[#2563EB] to-[#22D3EE] px-4 py-2.5 text-center text-sm font-semibold text-white">Talk to Expert</a>
            </div>
          </div>
        </div>
      </header>
    `;
  }

  function renderFooter() {
    const year = new Date().getFullYear();
    const footHeading =
      "mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-white pb-2 border-b-2 border-[#6B30DD]";
    const footLink = "text-sm text-slate-400 transition hover:text-white hover:translate-x-0.5 inline-block";
    const iconCircle =
      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-800/90 text-slate-200 ring-1 ring-white/10";

    return `
      <footer class="relative border-t border-white/10 bg-[#050a14] text-slate-300">
        <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(107,48,221,0.12),transparent)]" aria-hidden="true"></div>
        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div class="grid gap-12 lg:gap-10 lg:grid-cols-12">
            <!-- Brand + contact -->
            <div class="lg:col-span-4 space-y-6">
              <div class="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white px-3 py-2.5 shadow-lg shadow-black/20">
                <span class="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg">
                  <img src="image/F6.png" alt="F6IT logo" class="h-full w-full object-contain" loading="lazy" />
                </span>
                <div class="leading-tight">
                  <div class="text-sm font-bold tracking-tight text-[#0f172a]">F6IT</div>
                  <div class="text-[11px] font-medium text-slate-500">Fintech &amp; IT Solutions</div>
                </div>
              </div>
              <p class="text-sm leading-relaxed text-slate-400 max-w-sm">
                A technology-first platform for secure APIs, payments, banking automation, and enterprise software—built for teams that need speed without compromising compliance.
              </p>

              <div>
                <div class="${footHeading}">Contact us</div>
                <ul class="space-y-3.5">
                  <li class="flex gap-3">
                    <span class="${iconCircle}" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </span>
                    <a href="tel:+10000000000" class="text-sm text-slate-300 hover:text-white transition pt-1">+1 (000) 000‑0000</a>
                  </li>
                  <li class="flex gap-3">
                    <span class="${iconCircle}" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>
                    </span>
                    <a href="mailto:hello@f6it.example" class="text-sm text-slate-300 hover:text-white transition pt-1 break-all">hello@f6it.example</a>
                  </li>
                  <li class="flex gap-3">
                    <span class="${iconCircle}" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </span>
                    <span class="text-sm text-slate-300 pt-0.5 leading-snug">Global delivery · Remote-first team</span>
                  </li>
                </ul>
              </div>

              <div class="flex flex-wrap gap-2">
                <a href="#" class="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-800/90 text-slate-300 ring-1 ring-white/10 transition hover:bg-[#6B30DD] hover:text-white hover:ring-[#6B30DD]/50" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href="#" class="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-800/90 text-slate-300 ring-1 ring-white/10 transition hover:bg-[#6B30DD] hover:text-white hover:ring-[#6B30DD]/50" aria-label="X (Twitter)"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
                <a href="#" class="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-800/90 text-slate-300 ring-1 ring-white/10 transition hover:bg-[#6B30DD] hover:text-white hover:ring-[#6B30DD]/50" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.28 2.37 4.28 5.45v6.29zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.07 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.07-2.06 2.07zM7.12 20.45H3.56V9h3.56v11.45z"/></svg></a>
                <a href="#" class="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-800/90 text-slate-300 ring-1 ring-white/10 transition hover:bg-[#6B30DD] hover:text-white hover:ring-[#6B30DD]/50" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
                <a href="#" class="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-800/90 text-slate-300 ring-1 ring-white/10 transition hover:bg-[#6B30DD] hover:text-white hover:ring-[#6B30DD]/50" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
              </div>
            </div>

            <!-- Company -->
            <div class="lg:col-span-2">
              <div class="${footHeading}">Company</div>
              <nav class="grid gap-2.5" aria-label="Company">
                <a class="${footLink}" href="about.html">About us</a>
                <a class="${footLink}" href="careers.html">Careers</a>
                <a class="${footLink}" href="contact.html">FAQ</a>
                <a class="${footLink}" href="contact.html">Privacy policy</a>
                <a class="${footLink}" href="contact.html">Terms &amp; conditions</a>
                <a class="${footLink}" href="contact.html">Refund policy</a>
                <a class="${footLink}" href="contact.html">Grievance redressal</a>
                <a class="${footLink}" href="contact.html">Compliance</a>
              </nav>
            </div>

            <!-- Products -->
            <div class="lg:col-span-4">
              <div class="${footHeading}">Products</div>
              <nav class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2" aria-label="Products">
                <a class="${footLink}" href="${productHref("Connected Banking")}">Connected Banking</a>
                <a class="${footLink}" href="${productHref("Utility Payments")}">Utility Payments</a>
                <a class="${footLink}" href="${productHref("UPI Collection")}">UPI Collection</a>
                <a class="${footLink}" href="${productHref("Micro ATM")}">Micro ATM</a>
                <a class="${footLink}" href="${productHref("Instant Payouts")}">Instant Payouts</a>
                <a class="${footLink}" href="${productHref("Travel Booking")}">Travel Booking</a>
                <a class="${footLink}" href="${productHref("Aadhaar Banking")}">Aadhaar Banking</a>
                <a class="${footLink}" href="${productHref("Verification APIs")}">Verification APIs</a>
                <a class="${footLink}" href="${productHref("PAN Card")}">PAN Card</a>
                <a class="${footLink}" href="${productHref("Insurance")}">Insurance</a>
                <a class="${footLink}" href="${productHref("Investment")}">Investment</a>
                <a class="${footLink}" href="${productHref("Recharge")}">Recharge</a>
              </nav>
            </div>

            <!-- Useful links -->
            <div class="lg:col-span-2">
              <div class="${footHeading}">Useful links</div>
              <nav class="grid gap-2.5" aria-label="Useful">
                <a class="${footLink}" href="index.html">Home</a>
                <a class="${footLink}" href="catalog.html">Solutions</a>
                <a class="${footLink}" href="contact.html">Pricing &amp; quotes</a>
                <a class="${footLink}" href="contact.html">Support</a>
                <a class="${footLink}" href="contact.html">Contact</a>
                <a class="${footLink}" href="products.html">All products</a>
              </nav>
            </div>
          </div>

          <div class="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p class="text-xs text-slate-500">© ${year} F6IT. All rights reserved.</p>
            <div class="flex flex-wrap gap-6 text-xs text-slate-500">
              <a class="hover:text-[#6B30DD] transition" href="contact.html">Privacy</a>
              <a class="hover:text-[#6B30DD] transition" href="contact.html">Terms</a>
              <a class="hover:text-[#6B30DD] transition" href="contact.html">Security</a>
              <a class="hover:text-[#6B30DD] transition" href="index.html#products">Sitemap</a>
            </div>
          </div>
        </div>

        <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer"
          class="fixed bottom-6 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 ring-2 ring-white/20 transition hover:scale-105 hover:shadow-xl focus-ring"
          aria-label="Chat on WhatsApp">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
      </footer>
    `;
  }

  window.F6ITComponents = {
    mount() {
      const header = document.getElementById("site-header");
      const footer = document.getElementById("site-footer");
      if (header) header.innerHTML = renderHeader();
      if (footer) footer.innerHTML = renderFooter();
    },
  };
})();
