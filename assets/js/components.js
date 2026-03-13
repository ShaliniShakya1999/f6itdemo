(() => {
  const industries = [
    { label: "Banking & Finance", href: "services.html#banking" },
    { label: "Insurance", href: "products.html#catalog" },
    { label: "Education", href: "services.html#it" },
    { label: "Healthcare", href: "services.html#it" },
    { label: "E‑Commerce", href: "products.html#catalog" },
    { label: "E‑Governance", href: "products.html#smart-products" },
    { label: "Retail", href: "products.html#catalog" },
    { label: "Agriculture", href: "products.html#catalog" },
    { label: "Real Estate", href: "products.html#catalog" },
    { label: "Manufacturing", href: "services.html#cloud" },
    { label: "Oil & Gas", href: "services.html#cloud" },
    { label: "Mining", href: "services.html#cloud" },
  ];

  const products = [
    { label: "Core Banking", href: "products.html#smart-products" },
    { label: "Core Insurance", href: "products.html#smart-products" },
    { label: "ERP", href: "products.html#smart-products" },
    { label: "DMS", href: "products.html#smart-products" },
    { label: "HPMS", href: "products.html#smart-products" },
    { label: "E‑Auction", href: "products.html#smart-products" },
    { label: "CRM", href: "products.html#smart-products" },
    { label: "eAudit", href: "products.html#smart-products" },
    { label: "PMS", href: "products.html#smart-products" },
    { label: "B2B & Sales App", href: "products.html#smart-products" },
    { label: "E‑Governance", href: "products.html#smart-products" },
    { label: "WhatsApp Solution", href: "products.html#smart-products" },
  ];

  const services = [
    { label: "Digital Transformation", href: "services.html#digital" },
    { label: "IT Solutions", href: "services.html#it" },
    { label: "Banking Software", href: "services.html#banking" },
    { label: "Cloud Solutions", href: "services.html#cloud" },
    { label: "UI/UX & Dashboards", href: "services.html#it" },
    { label: "DevOps & CI/CD", href: "services.html#it" },
    { label: "Security Hardening", href: "services.html#it" },
    { label: "Observability / SRE", href: "services.html#it" },
  ];

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
      (active ? "bg-white/10 text-white" : "text-white/80 hover:text-white hover:bg-white/5")
    );
  }

  function renderMegaList(items) {
    return items
      .map(
        (x) => `
          <a href="${x.href}" class="group flex items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-white/5">
            <span class="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/5">
              <span class="h-2 w-2 rounded-full bg-cyan-300/90 shadow-[0_0_18px_rgba(34,211,238,.35)]"></span>
            </span>
            <span class="text-sm text-white/80 group-hover:text-white">${x.label}</span>
          </a>
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

    return `
      <header class="sticky top-0 z-50 border-b border-white/10 bg-[#08122b]/55 backdrop-blur">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <a href="index.html" class="flex items-center gap-3">
              <span class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/20">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z" stroke="rgba(255,255,255,.92)" stroke-width="1.6"/>
                  <path d="M8 9.2 12 7l4 2.2v5.6L12 17l-4-2.2V9.2Z" stroke="rgba(255,255,255,.92)" stroke-width="1.6"/>
                </svg>
              </span>
              <div class="leading-tight">
                <div class="text-sm font-semibold tracking-wide text-white">F6IT</div>
                <div class="text-xs text-white/70">Fintech & IT Solutions</div>
              </div>
            </a>

            <nav class="hidden lg:flex items-center gap-1" aria-label="Primary">
              <a href="index.html" class="${linkClass(homeActive)}">Home</a>

              <div class="relative" data-mega>
                <button type="button" class="${linkClass(false)} inline-flex items-center gap-1" data-mega-trigger="industries" aria-expanded="false">
                  Industries
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>

              <div class="relative" data-mega>
                <button type="button" class="${linkClass(false)} inline-flex items-center gap-1" data-mega-trigger="products" aria-expanded="false">
                  Products
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>

              <div class="relative" data-mega>
                <button type="button" class="${linkClass(active === "services.html")} inline-flex items-center gap-1" data-mega-trigger="services" aria-expanded="false">
                  Services
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>

              <a href="about.html" class="${linkClass(aboutActive)}">About Us</a>
              <a href="careers.html" class="${linkClass(careersActive)}">Careers</a>
              <a href="contact.html" class="${linkClass(contactActive)}">Contact</a>
            </nav>

            <div class="hidden lg:flex items-center gap-3">
              <a href="contact.html"
                 class="btn-secondary rounded-xl px-4 py-2 text-sm font-semibold text-white/90 transition focus-ring">
                Let’s talk
              </a>
              <a href="services.html"
                 class="btn-primary rounded-xl px-4 py-2 text-sm font-semibold text-[#070B18] transition focus-ring">
                Explore services
              </a>
            </div>

            <button id="mobileMenuBtn" class="lg:hidden inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-white/90 focus-ring"
              aria-label="Open menu" aria-expanded="false">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Desktop mega menus -->
        <div class="hidden lg:block">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="relative">
              <div id="mega-industries" data-mega-panel="industries" class="pointer-events-none absolute left-0 right-0 top-0 hidden pt-4">
                <div class="pointer-events-auto glass rounded-3xl p-6 max-h-[70vh] overflow-auto">
                  <div class="flex items-center justify-between">
                    <div>
                      <div class="text-sm font-semibold text-white">Industries</div>
                      <div class="mt-1 text-xs text-white/60">Pick an industry area (placeholder)</div>
                    </div>
                    <a href="contact.html" class="text-xs font-semibold text-cyan-200 hover:text-cyan-100">Talk to an expert →</a>
                  </div>
                  <div class="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                    ${renderMegaList(industries)}
                  </div>
                </div>
              </div>

              <div id="mega-products" data-mega-panel="products" class="pointer-events-none absolute left-0 right-0 top-0 hidden pt-4">
                <div class="pointer-events-auto glass rounded-3xl p-6 max-h-[70vh] overflow-auto">
                  <div class="flex items-center justify-between">
                    <div>
                      <div class="text-sm font-semibold text-white">Products</div>
                      <div class="mt-1 text-xs text-white/60">Safe & smart products (placeholder)</div>
                    </div>
                    <a href="products.html" class="text-xs font-semibold text-cyan-200 hover:text-cyan-100">View catalog →</a>
                  </div>
                  <div class="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                    ${renderMegaList(products)}
                  </div>
                </div>
              </div>

              <div id="mega-services" data-mega-panel="services" class="pointer-events-none absolute left-0 right-0 top-0 hidden pt-4">
                <div class="pointer-events-auto glass rounded-3xl p-6 max-h-[70vh] overflow-auto">
                  <div class="flex items-center justify-between">
                    <div>
                      <div class="text-sm font-semibold text-white">Services</div>
                      <div class="mt-1 text-xs text-white/60">Core services and capabilities</div>
                    </div>
                    <a href="services.html" class="text-xs font-semibold text-cyan-200 hover:text-cyan-100">See all services →</a>
                  </div>
                  <div class="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                    ${renderMegaList(services)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="mobileMenu" class="lg:hidden hidden border-t border-white/10 bg-[#08122b]/92 backdrop-blur">
          <div class="mx-auto max-w-7xl px-4 py-3">
            <div class="grid gap-1">
              <a href="index.html" class="block px-3 py-2 rounded-lg text-sm font-medium transition ${homeActive ? "bg-white/10 text-white" : "text-white/80 hover:text-white hover:bg-white/5"}">Home</a>

              <button type="button" class="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition" data-accordion-trigger="m-industries" aria-expanded="false">
                <span>Industries</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div class="hidden pl-2" data-accordion-panel="m-industries">
                <div class="grid gap-1 py-2">
                  ${industries
                    .map(
                      (x) =>
                        `<a href="${x.href}" class="block px-3 py-2 rounded-lg text-sm text-white/75 hover:text-white hover:bg-white/5 transition">${x.label}</a>`
                    )
                    .join("")}
                </div>
              </div>

              <button type="button" class="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition" data-accordion-trigger="m-products" aria-expanded="false">
                <span>Products</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div class="hidden pl-2" data-accordion-panel="m-products">
                <div class="grid gap-1 py-2">
                  ${products
                    .map(
                      (x) =>
                        `<a href="${x.href}" class="block px-3 py-2 rounded-lg text-sm text-white/75 hover:text-white hover:bg-white/5 transition">${x.label}</a>`
                    )
                    .join("")}
                </div>
              </div>

              <button type="button" class="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition" data-accordion-trigger="m-services" aria-expanded="false">
                <span>Services</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div class="hidden pl-2" data-accordion-panel="m-services">
                <div class="grid gap-1 py-2">
                  ${services
                    .map(
                      (x) =>
                        `<a href="${x.href}" class="block px-3 py-2 rounded-lg text-sm text-white/75 hover:text-white hover:bg-white/5 transition">${x.label}</a>`
                    )
                    .join("")}
                </div>
              </div>

              <a href="about.html" class="block px-3 py-2 rounded-lg text-sm font-medium transition ${aboutActive ? "bg-white/10 text-white" : "text-white/80 hover:text-white hover:bg-white/5"}">About Us</a>
              <a href="careers.html" class="block px-3 py-2 rounded-lg text-sm font-medium transition ${careersActive ? "bg-white/10 text-white" : "text-white/80 hover:text-white hover:bg-white/5"}">Careers</a>
              <a href="contact.html" class="block px-3 py-2 rounded-lg text-sm font-medium transition ${contactActive ? "bg-white/10 text-white" : "text-white/80 hover:text-white hover:bg-white/5"}">Contact</a>
            </div>
            <div class="mt-3 grid grid-cols-2 gap-3">
              <a href="contact.html" class="btn-secondary rounded-xl px-4 py-2 text-center text-sm font-semibold text-white/90 transition focus-ring">Let’s talk</a>
              <a href="services.html" class="btn-primary rounded-xl px-4 py-2 text-center text-sm font-semibold text-[#070B18] transition focus-ring">Explore</a>
            </div>
          </div>
        </div>
      </header>
    `;
  }

  function renderFooter() {
    const year = new Date().getFullYear();
    return `
      <footer class="border-t border-white/10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div class="grid gap-10 lg:grid-cols-12">
            <div class="lg:col-span-5">
              <div class="flex items-center gap-3">
                <span class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/20">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z" stroke="rgba(255,255,255,.92)" stroke-width="1.6"/>
                    <path d="M8 9.2 12 7l4 2.2v5.6L12 17l-4-2.2V9.2Z" stroke="rgba(255,255,255,.92)" stroke-width="1.6"/>
                  </svg>
                </span>
                <div class="leading-tight">
                  <div class="text-sm font-semibold tracking-wide text-white">F6IT</div>
                  <div class="text-xs text-white/70">Corporate IT • Fintech • Cloud</div>
                </div>
              </div>
              <p class="mt-5 text-sm text-white/70 max-w-md">
                We help organizations modernize operations with secure cloud platforms, digital transformation,
                and enterprise-grade software for regulated industries.
              </p>
              <div class="mt-6 flex flex-wrap gap-3">
                <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">ISO-ready delivery</span>
                <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Security by design</span>
                <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Fintech expertise</span>
              </div>
            </div>

            <div class="lg:col-span-7 grid gap-8 sm:grid-cols-3">
              <div>
                <div class="text-sm font-semibold text-white">Company</div>
                <div class="mt-3 grid gap-2 text-sm">
                  <a class="text-white/70 hover:text-white" href="about.html">About Us</a>
                  <a class="text-white/70 hover:text-white" href="services.html">Services</a>
                  <a class="text-white/70 hover:text-white" href="careers.html">Careers</a>
                </div>
              </div>
              <div>
                <div class="text-sm font-semibold text-white">Solutions</div>
                <div class="mt-3 grid gap-2 text-sm">
                  <a class="text-white/70 hover:text-white" href="products.html">Products</a>
                  <a class="text-white/70 hover:text-white" href="services.html#banking">Banking Software</a>
                  <a class="text-white/70 hover:text-white" href="services.html#cloud">Cloud Solutions</a>
                </div>
              </div>
              <div>
                <div class="text-sm font-semibold text-white">Contact</div>
                <div class="mt-3 grid gap-2 text-sm text-white/70">
                  <div>hello@f6it.example</div>
                  <div>+1 (000) 000‑0000</div>
                  <div>Mon–Fri • 9:00–18:00</div>
                  <a class="text-white/70 hover:text-white" href="contact.html">Send a message</a>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div class="text-xs text-white/60">© ${year} F6IT. All rights reserved.</div>
            <div class="flex gap-4 text-xs">
              <a class="text-white/60 hover:text-white" href="contact.html">Privacy</a>
              <a class="text-white/60 hover:text-white" href="contact.html">Terms</a>
              <a class="text-white/60 hover:text-white" href="contact.html">Security</a>
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

