(() => {
  const industries = [
    { label: "Banking & Finance", href: "services.html#banking", icon: "bank" },
    { label: "Insurance", href: "products.html#catalog", icon: "shield" },
    { label: "Education", href: "services.html#it", icon: "graduation" },
    { label: "Healthcare", href: "services.html#it", icon: "heart" },
    { label: "E-Commerce", href: "products.html#catalog", icon: "cart" },
    { label: "E-Governance", href: "products.html#smart-products", icon: "building" },
    { label: "Retail", href: "products.html#catalog", icon: "store" },
    { label: "Agriculture", href: "products.html#catalog", icon: "leaf" },
    { label: "Real Estate", href: "products.html#catalog", icon: "building" },
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
  function productHref(slug) {
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
                  <a href="${productHref(label)}" class="block rounded-lg px-2 py-1.5 text-xs text-slate-600 hover:bg-[#f8fafc] hover:text-[#2563EB] transition">${label}</a>
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
    const productsActive = active === "products.html";

    return `
      <header class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between gap-4">
            <a href="index.html" class="flex items-center gap-3 shrink-0">
              <span class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563EB] text-white shadow-sm">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z" stroke="currentColor" stroke-width="1.6"/>
                  <path d="M8 9.2 12 7l4 2.2v5.6L12 17l-4-2.2V9.2Z" stroke="currentColor" stroke-width="1.6"/>
                </svg>
              </span>
              <div class="leading-tight">
                <div class="text-sm font-semibold tracking-wide text-[#0f172a]">F6IT</div>
                <div class="text-xs text-slate-500">Fintech & IT Solutions</div>
              </div>
            </a>

            <nav class="hidden lg:flex items-center gap-1" aria-label="Primary">
              <a href="index.html" class="${linkClass(homeActive)}">Home</a>
              <a href="about.html" class="${linkClass(aboutActive)}">About</a>

              <div class="relative" data-mega>
                <button type="button" class="${linkClass(false)} inline-flex items-center gap-1" data-mega-trigger="industries" aria-expanded="false">
                  Industries
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>

              <div class="relative" data-mega>
                <button type="button" class="${linkClass(productsActive)} inline-flex items-center gap-1" data-mega-trigger="products" aria-expanded="false">
                  Products
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>

              <div class="relative" data-mega>
                <button type="button" class="${linkClass(servicesActive)} inline-flex items-center gap-1" data-mega-trigger="services" aria-expanded="false">
                  Services
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>

              <div class="relative" data-mega>
                <button type="button" class="${linkClass(false)} inline-flex items-center gap-1" data-mega-trigger="erp" aria-expanded="false">
                  ERP System
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
              <div class="relative" data-mega>
                <button type="button" class="${linkClass(false)} inline-flex items-center gap-1" data-mega-trigger="more" aria-expanded="false">
                  More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </nav>

            <div class="hidden lg:flex items-center gap-2 shrink-0">
              <button type="button" class="p-2 rounded-lg text-slate-600 hover:bg-[#f1f5f9] hover:text-[#0f172a] transition" aria-label="Search">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
              </button>
              <a href="contact.html" class="btn-primary rounded-xl px-4 py-2 text-sm font-semibold text-white transition focus-ring">
                Talk to expert
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

              <div id="mega-products" data-mega-panel="products" class="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-[1200px] hidden pt-2">
                <div class="pointer-events-auto megamenu p-6 max-h-[70vh] overflow-auto">
                  <div class="text-base font-semibold text-[#0f172a] mb-5">Products & Solutions</div>
                  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                    ${renderProductsMegaMenu()}
                  </div>
                  <div class="mt-5 pt-4 border-t border-slate-100 flex justify-end">
                    <a href="products.html" class="text-sm font-semibold text-[#2563EB] hover:text-[#1d4ed8]">View catalog →</a>
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
                    ${moreMenuItems.map((x) => `<li><a href="${x.href}" class="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-[#f8fafc] hover:text-[#2563EB] transition">${x.label}</a></li>`).join("")}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="mobileMenu" class="lg:hidden hidden border-t border-slate-200 bg-white">
          <div class="mx-auto max-w-7xl px-4 py-4 space-y-1">
            <a href="index.html" class="block px-3 py-2.5 rounded-lg text-sm font-medium ${homeActive ? "bg-[#eff6ff] text-[#2563EB]" : "text-[#0f172a] hover:bg-[#f8fafc]"}">Home</a>
            <a href="about.html" class="block px-3 py-2.5 rounded-lg text-sm font-medium ${aboutActive ? "bg-[#eff6ff] text-[#2563EB]" : "text-[#0f172a] hover:bg-[#f8fafc]"}">About</a>

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
              <a href="contact.html" class="btn-primary flex-1 rounded-xl px-4 py-2.5 text-center text-sm font-semibold text-white">Talk to expert</a>
            </div>
          </div>
        </div>
      </header>
    `;
  }

  function renderFooter() {
    const year = new Date().getFullYear();
    return `
      <footer class="border-t border-slate-200 bg-[#f8fafc]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div class="grid gap-10 lg:grid-cols-12">
            <div class="lg:col-span-4">
              <div class="flex items-center gap-3">
                <span class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563EB] text-white">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z" stroke="currentColor" stroke-width="1.6"/><path d="M8 9.2 12 7l4 2.2v5.6L12 17l-4-2.2V9.2Z" stroke="currentColor" stroke-width="1.6"/></svg>
                </span>
                <div class="leading-tight">
                  <div class="text-sm font-semibold text-[#0f172a]">F6IT</div>
                  <div class="text-xs text-slate-500">Fintech & IT Solutions</div>
                </div>
              </div>
              <p class="mt-5 text-sm text-slate-600 max-w-md leading-relaxed">
                We help organizations modernize with secure cloud platforms, digital transformation, and enterprise-grade software for regulated industries.
              </p>
              <div class="mt-6 flex gap-3">
                <a href="#" class="p-2 rounded-lg text-slate-500 hover:bg-white hover:text-[#2563EB] transition" aria-label="LinkedIn"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.28 2.37 4.28 5.45v6.29zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.07 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.07-2.06 2.07zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.78C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg></a>
                <a href="#" class="p-2 rounded-lg text-slate-500 hover:bg-white hover:text-[#2563EB] transition" aria-label="Twitter"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
              </div>
            </div>

            <div class="lg:col-span-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <div class="text-sm font-semibold text-[#0f172a]">Company</div>
                <div class="mt-3 grid gap-2 text-sm">
                  <a class="text-slate-600 hover:text-[#2563EB]" href="about.html">About</a>
                  <a class="text-slate-600 hover:text-[#2563EB]" href="careers.html">Careers</a>
                  <a class="text-slate-600 hover:text-[#2563EB]" href="contact.html">Contact</a>
                </div>
              </div>
              <div>
                <div class="text-sm font-semibold text-[#0f172a]">Products</div>
                <div class="mt-3 grid gap-2 text-sm">
                  <a class="text-slate-600 hover:text-[#2563EB]" href="products.html">All products</a>
                  <a class="text-slate-600 hover:text-[#2563EB]" href="products.html#smart-products">Digital Banking</a>
                  <a class="text-slate-600 hover:text-[#2563EB]" href="products.html#smart-products">ERP Systems</a>
                </div>
              </div>
              <div>
                <div class="text-sm font-semibold text-[#0f172a]">Industries</div>
                <div class="mt-3 grid gap-2 text-sm">
                  <a class="text-slate-600 hover:text-[#2563EB]" href="services.html#banking">Banking</a>
                  <a class="text-slate-600 hover:text-[#2563EB]" href="products.html#catalog">Insurance</a>
                  <a class="text-slate-600 hover:text-[#2563EB]" href="services.html#cloud">Manufacturing</a>
                </div>
              </div>
              <div>
                <div class="text-sm font-semibold text-[#0f172a]">Resources</div>
                <div class="mt-3 grid gap-2 text-sm">
                  <a class="text-slate-600 hover:text-[#2563EB]" href="about.html#story">Insights</a>
                  <a class="text-slate-600 hover:text-[#2563EB]" href="contact.html">Support</a>
                  <a class="text-slate-600 hover:text-[#2563EB]" href="contact.html">Privacy</a>
                  <a class="text-slate-600 hover:text-[#2563EB]" href="contact.html">Terms</a>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div class="text-xs text-slate-500">© ${year} F6IT. All rights reserved.</div>
            <div class="flex gap-6 text-xs">
              <a class="text-slate-500 hover:text-[#2563EB]" href="contact.html">Privacy</a>
              <a class="text-slate-500 hover:text-[#2563EB]" href="contact.html">Terms</a>
              <a class="text-slate-500 hover:text-[#2563EB]" href="contact.html">Security</a>
            </div>
          </div>
        </div>
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
