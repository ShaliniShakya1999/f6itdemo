(() => {
  const categoryContent = {
    "Fintech & Banking": {
      features: [
        ["Unified operational visibility", "Bring balances, transactions, workflow activity, and process status into one easier-to-manage environment.", "🏦"],
        ["Faster transaction execution", "Support high-volume banking and payment workflows with cleaner digital processes.", "⚡"],
        ["Role-based control", "Protect operational activity with permissions, approval logic, and clearer governance.", "🔐"],
        ["Reporting and reconciliation", "Improve traceability with dashboards, status tracking, and structured reconciliation support.", "📊"],
      ],
      benefits: [
        ["Reduce fragmented operations", "Replace manual coordination and disconnected systems with one more structured digital workflow."],
        ["Improve daily visibility", "Give finance and operations teams a clearer view of activity, cash movement, and service state."],
        ["Scale with confidence", "Handle more users, more transactions, and more complexity through a stronger operational foundation."],
      ],
      impact: [
        ["Real-time", "Operational visibility for faster action and better control"],
        ["Secure", "Structured access, approvals, and workflow governance"],
        ["Scalable", "Designed for higher transaction volume and digital growth"],
      ],
      steps: [
        ["Map your process setup", "Define the accounts, transaction flows, and workflow stages needed for your business."],
        ["Configure controls and reporting", "Set access rules, review flows, dashboards, and operational logic."],
        ["Launch and optimize", "Run day-to-day banking workflows with stronger visibility and cleaner execution."],
      ],
    },
    "APIs & Verification": {
      features: [
        ["API-ready integration", "Connect digital services into onboarding, compliance, and operational workflows with less friction.", "🔌"],
        ["Faster request handling", "Support high-usage verification and communication flows with a cleaner implementation model.", "⚡"],
        ["Workflow visibility", "Track requests, outcomes, and operational performance through one structured setup.", "📈"],
        ["Compliance support", "Build services that help teams maintain stronger process consistency and verification discipline.", "🛡️"],
      ],
      benefits: [
        ["Accelerate onboarding and checks", "Reduce delays in identity, document, and communication workflows."],
        ["Simplify implementation", "Use API-first components that integrate cleanly into existing systems."],
        ["Improve process consistency", "Give teams clearer visibility and structure around verification activity."],
      ],
      impact: [
        ["API-first", "Designed to fit digital products and internal operations"],
        ["Faster", "Support quicker verification and communication journeys"],
        ["Visible", "Track request flow, status, and outcomes more clearly"],
      ],
      steps: [
        ["Choose the right service flow", "Select the verification or API-led process that fits your business need."],
        ["Connect into your systems", "Integrate workflows into onboarding, support, or internal platforms."],
        ["Operate at scale", "Handle increasing request volume with more visibility and control."],
      ],
    },
    "Financial Services": {
      features: [
        ["Digital lifecycle support", "Manage service, customer, and operational workflows through a more connected platform.", "📘"],
        ["User and team visibility", "Keep customer-facing and internal activity easier to track and manage.", "👥"],
        ["Operational reporting", "Review progress, performance, and service state with cleaner dashboards and records.", "📊"],
        ["Growth-ready delivery", "Support expansion with a stronger digital foundation for financial products and services.", "🚀"],
      ],
      benefits: [
        ["Modernize financial workflows", "Bring service-heavy and customer-led journeys into a cleaner digital environment."],
        ["Improve user experience", "Create smoother product and service journeys with less friction."],
        ["Support scalable operations", "Handle more customers and more activity through one better-structured platform."],
      ],
      impact: [
        ["Connected", "Bring service delivery and operations into one system"],
        ["Visible", "Track lifecycle progress and internal performance better"],
        ["Scalable", "Support growth without increasing operational complexity"],
      ],
      steps: [
        ["Define product and service journeys", "Map the lifecycle stages and experiences that matter to your business."],
        ["Configure controls and reporting", "Set visibility rules, workflow triggers, and review dashboards."],
        ["Launch digital operations", "Run service delivery and product workflows with stronger structure and insight."],
      ],
    },
    "Software & Platforms": {
      features: [
        ["Modern digital experience", "Deliver cleaner interfaces and workflows for customers, teams, and partners.", "💻"],
        ["Operational centralization", "Bring tasks, data, and process execution into a more connected system.", "🧠"],
        ["Scalable architecture", "Build on systems that support future growth, integrations, and feature expansion.", "🏗️"],
        ["Actionable reporting", "Use better visibility to improve execution, decision-making, and process control.", "📊"],
      ],
      benefits: [
        ["Improve productivity", "Help teams work faster with better digital tools and structured workflows."],
        ["Reduce system fragmentation", "Replace disconnected tools with a cleaner digital operating layer."],
        ["Create future-ready platforms", "Support business growth through scalable product and process foundations."],
      ],
      impact: [
        ["Modern", "Upgrade the quality and usability of digital systems"],
        ["Unified", "Bring workflows and reporting into one environment"],
        ["Scalable", "Support long-term product and operational growth"],
      ],
      steps: [
        ["Define your workflow model", "Identify roles, tasks, user journeys, and operating requirements."],
        ["Configure the platform", "Set dashboards, approvals, modules, and process rules."],
        ["Deploy with confidence", "Launch a cleaner digital system designed for daily use and long-term scale."],
      ],
    },
  };

  const offerings = {
    "Connected Banking": { category: "Fintech & Banking", headline: "Bring all your bank accounts into one connected workspace.", summary: "Connected Banking unifies balances, transactions, approvals, and workflow visibility across multiple bank relationships in one secure operating layer.", heroImage: "image/connected-banking-dashboard.png", overviewImage: "image/Connected.png", statA: ["Accounts synced", "25+ Banks"], statB: ["Visibility", "Real-time cash view"] },
    "Utility Payments": { category: "Fintech & Banking", headline: "Automate high-volume utility bill payment operations.", summary: "Utility Payments helps businesses manage bulk bill processing, payment status tracking, and reconciliation with far less manual effort.", heroImage: "image/utility-bill-payments.png", overviewImage: "image/Utility_Payments.png", statA: ["Operations", "Bulk bill processing"], statB: ["Control", "Reconciliation-ready"] },
    "Instant Payouts": { category: "Fintech & Banking", headline: "Move money instantly with payout workflows built for scale.", summary: "Instant Payouts supports real-time disbursals, end-to-end payout tracking, and stronger control across transaction-heavy environments.", heroImage: "image/instant-payouts-transfer.png", overviewImage: "image/Instant.png", statA: ["Speed", "Real-time disbursal"], statB: ["Tracking", "End-to-end status"] },
    "Travel Booking": { category: "Fintech & Banking", headline: "Offer integrated travel booking with built-in payment support.", summary: "Travel Booking combines travel search, booking journeys, payment support, and reservation visibility in one smoother digital experience.", heroImage: "image/travel-booking-flights.png", overviewImage: "image/Travel_Booking.png", statA: ["Bookings", "Flights, buses, hotels"], statB: ["Experience", "Instant confirmation flow"] },
    "UPI Collection": { category: "Fintech & Banking", headline: "Collect payments through UPI links, QR journeys, and smart workflows.", summary: "UPI Collection helps teams accept digital payments through low-friction collection flows while keeping transaction visibility and reporting clear.", heroImage: "image/upi-qr-collection.png", overviewImage: "image/Payment_Collection.png", statA: ["Collection mode", "Link + QR + intent"], statB: ["Operations", "Track every payment"] },
    "Micro ATM": { category: "Fintech & Banking", headline: "Extend banking access through Micro ATM operations.", summary: "Micro ATM supports assisted banking, field transactions, and distributed service access through a more structured digital platform.", heroImage: "image/micro-atm-retail.png", overviewImage: "image/ATM.png", statA: ["Reach", "Agent-led access"], statB: ["Support", "Assisted transactions"] },
    "Aadhaar Banking": { category: "Fintech & Banking", headline: "Enable biometric banking experiences with Aadhaar-based workflows.", summary: "Aadhaar Banking supports identity-led assisted banking and operational visibility for biometric financial service journeys.", heroImage: "image/aadhaar-banking-aeps.png", overviewImage: "image/Aadhaar.png", statA: ["Identity mode", "Biometric-enabled"], statB: ["Usage", "Assisted banking access"] },
    "Core Banking": { category: "Fintech & Banking", headline: "Run core banking operations on a scalable digital foundation.", summary: "Core Banking supports account lifecycle, transaction processing, and operational control through one modern banking backbone.", heroImage: "image/DASHBOARDIMAGE.png", overviewImage: "image/Connected.png", statA: ["Platform role", "Banking backbone"], statB: ["Coverage", "Accounts to operations"] },
    "Verification APIs": { category: "APIs & Verification", headline: "Accelerate onboarding with secure verification API workflows.", summary: "Verification APIs streamline identity checks, document validation, and onboarding workflows through cleaner integrations and better process visibility.", heroImage: "image/verification-api-security.png", overviewImage: "image/Verification.png", statA: ["Use case", "Faster onboarding"], statB: ["Integration", "API-first workflow"] },
    "PAN Card": { category: "APIs & Verification", headline: "Validate PAN details through faster digital verification flows.", summary: "PAN Card services help businesses run tax identity checks more efficiently while improving onboarding quality and document validation speed.", heroImage: "image/pan-card-services.png", overviewImage: "image/PAN card.png", statA: ["Identity check", "PAN validation"], statB: ["Workflow", "Faster onboarding support"] },
    "WhatsApp Solution": { category: "APIs & Verification", headline: "Automate customer communication with WhatsApp-based workflows.", summary: "WhatsApp Solution enables alerts, reminders, support updates, and customer messaging through a faster, more connected communication layer.", heroImage: "image/MOBILE_APP_SCREEN.png", overviewImage: "image/API Gateway.png", statA: ["Channel", "WhatsApp messaging"], statB: ["Usage", "Alerts + support + reminders"] },
    "eAudit": { category: "APIs & Verification", headline: "Digitize audit preparation, evidence tracking, and review workflows.", summary: "eAudit organizes audit activity, supporting records, and issue management into a cleaner digital review environment.", heroImage: "image/Compliance  Audit.png", overviewImage: "image/Compliance  Audit.png", statA: ["Focus", "Audit readiness"], statB: ["Support", "Evidence and review flow"] },
    "Insurance": { category: "Financial Services", headline: "Digitize policy journeys, service operations, and customer engagement.", summary: "Insurance solutions help businesses manage policy workflows, servicing, and operational visibility across the customer lifecycle.", heroImage: "image/insurance-products.png", overviewImage: "image/SECURITY_SECTION_ILLUSTRATION.png", statA: ["Coverage", "Policy lifecycle support"], statB: ["Operations", "Customer + service workflows"] },
    "Investment": { category: "Financial Services", headline: "Create clearer digital investment journeys and reporting visibility.", summary: "Investment solutions support portfolio views, advisory workflows, and customer financial insights in a more connected digital experience.", heroImage: "image/investment-mutual-funds.png", overviewImage: "image/Analytics Dashboard.png", statA: ["Focus", "Portfolio visibility"], statB: ["Experience", "Insight-driven journeys"] },
    "Recharge": { category: "Financial Services", headline: "Run high-volume recharge services with live status visibility.", summary: "Recharge helps businesses deliver mobile and utility recharge journeys through faster transaction handling and clearer operational reporting.", heroImage: "image/recharge-mobile-dth.png", overviewImage: "image/Utility.png", statA: ["Volume", "High-frequency transactions"], statB: ["Tracking", "Live status visibility"] },
    "Lending": { category: "Financial Services", headline: "Build cleaner lending journeys from origination to repayment.", summary: "Lending supports onboarding, evaluation, servicing, and repayment workflows through a structured and scalable digital platform.", heroImage: "image/lending-loans.png", overviewImage: "image/Money_Transfer.png", statA: ["Coverage", "Origination to collection"], statB: ["Operations", "Structured loan workflow"] },
    "Core Insurance": { category: "Financial Services", headline: "Create a stronger operating backbone for insurance businesses.", summary: "Core Insurance provides foundational workflows for insurance operations, customer servicing, and process control in one modern system.", heroImage: "image/insurance-products.png", overviewImage: "image/SECURITY_SECTION_ILLUSTRATION.png", statA: ["Platform role", "Insurance backbone"], statB: ["Support", "Operations + servicing"] },
    "Website Development": { category: "Software & Platforms", headline: "Build high-performance websites designed for growth and conversion.", summary: "Website Development helps businesses launch modern, responsive, and conversion-focused websites that support trust and digital acquisition.", heroImage: "image/Website.png", overviewImage: "image/Website.png", statA: ["Focus", "Performance + conversion"], statB: ["Output", "Responsive web experience"] },
    "Software Development": { category: "Software & Platforms", headline: "Create custom software products tailored to your business workflows.", summary: "Software Development supports the design and delivery of secure digital products, internal systems, and scalable workflow platforms.", heroImage: "image/Software.png", overviewImage: "image/API Gateway.png", statA: ["Approach", "Custom-built systems"], statB: ["Fit", "Workflow-specific design"] },
    "ERP": { category: "Software & Platforms", headline: "Unify business operations through a connected ERP platform.", summary: "ERP centralizes finance, operations, procurement, and internal workflows into one digital system built for visibility and coordination.", heroImage: "image/ERP.png", overviewImage: "image/ERP.png", statA: ["Coverage", "Cross-functional operations"], statB: ["Value", "One operating system"] },
    "CRM": { category: "Software & Platforms", headline: "Manage customer relationships with cleaner pipeline visibility.", summary: "CRM helps businesses organize leads, sales activity, and customer lifecycle tracking through one connected relationship platform.", heroImage: "image/DASHBOARDIMAGE.png", overviewImage: "image/DASHBOARDIMAGE.png", statA: ["Focus", "Lead to relationship"], statB: ["Control", "Pipeline visibility"] },
    "DMS": { category: "Software & Platforms", headline: "Manage documents securely with stronger lifecycle control.", summary: "DMS helps organizations organize, approve, protect, and access critical documents through a more structured digital repository.", heroImage: "image/Document Vault  DMS.png", overviewImage: "image/Document Vault  DMS.png", statA: ["Focus", "Document lifecycle"], statB: ["Control", "Access + approvals"] },
    "PMS": { category: "Software & Platforms", headline: "Coordinate projects and processes with better workflow visibility.", summary: "PMS helps organizations plan work, track progress, and manage execution through a centralized process and project platform.", heroImage: "image/Analytics Dashboard.png", overviewImage: "image/Analytics Dashboard.png", statA: ["Focus", "Project and process flow"], statB: ["Team value", "Execution visibility"] },
    "HPMS": { category: "Software & Platforms", headline: "Manage hospitality and property workflows through one platform.", summary: "HPMS helps businesses run hospitality or property operations with structured bookings, service management, and operational visibility.", heroImage: "image/DASHBOARDIMAGE.png", overviewImage: "image/Storefront UI  Template.png", statA: ["Coverage", "Property operations"], statB: ["Visibility", "Bookings and services"] },
    "E-Auction": { category: "Software & Platforms", headline: "Digitize auction workflows with better visibility and control.", summary: "E-Auction supports digital bidding, participant handling, and auction lifecycle workflows through a structured online platform.", heroImage: "image/E-commerce Catalog  Store.png", overviewImage: "image/E-commerce Catalog  Store.png", statA: ["Mode", "Digital bidding"], statB: ["Control", "Auction lifecycle visibility"] },
    "B2B & Sales App": { category: "Software & Platforms", headline: "Empower sales teams and distributors with a connected field app.", summary: "B2B & Sales App helps businesses manage distributor activity, field sales operations, and orders through a mobile-ready workflow platform.", heroImage: "image/Storefront UI  Template.png", overviewImage: "image/Storefront UI  Template.png", statA: ["Use case", "Field sales operations"], statB: ["Mode", "Distributor + team workflow"] },
    "E-Governance": { category: "Software & Platforms", headline: "Deliver citizen-facing services through cleaner digital governance workflows.", summary: "E-Governance helps institutions digitize service delivery, approvals, and internal public-service workflows in a more structured environment.", heroImage: "image/Analytics Dashboard.png", overviewImage: "image/Analytics Dashboard.png", statA: ["Focus", "Citizen service delivery"], statB: ["Value", "Digital workflow control"] },
  };

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function renderOfferingPage(name) {
    const data = offerings[name];
    const category = categoryContent[data.category];
    const root = document.getElementById("offering-page-root");
    if (!root || !data || !category) return;

    document.title = `${data.title || name} | F6IT`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", data.summary);

    root.innerHTML = `
      <section class="op-hero relative overflow-hidden" data-bg="custom">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div class="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div class="lg:col-span-6" data-reveal>
              <div class="inline-flex items-center rounded-full border border-[#6B30DD]/15 bg-white/80 px-4 py-1.5 text-xs font-semibold text-[#6B30DD] shadow-sm">${escapeHtml(data.category)}</div>
              <h1 class="mt-5 text-4xl font-semibold tracking-tight text-[#0f172a] sm:text-5xl lg:text-6xl">${escapeHtml(name)}</h1>
              <p class="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">${escapeHtml(data.headline)}</p>
              <p class="mt-4 text-sm text-slate-600"><a href="index.html" class="hover:text-[#6B30DD]">Home</a><span class="mx-2 text-slate-400">/</span><a href="index.html#products" class="hover:text-[#6B30DD]">Offerings</a><span class="mx-2 text-slate-400">/</span><span class="font-medium text-[#0f172a]">${escapeHtml(name)}</span></p>
              <div class="mt-8 flex flex-wrap gap-3">
                <a href="getintouche.html" class="rounded-xl bg-[#6B30DD] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6B30DD]/20 transition hover:-translate-y-0.5 hover:bg-[#5926bc]">Request a Demo</a>
                <a href="contact.html" class="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-[#0f172a] transition hover:border-[#6B30DD]/30 hover:text-[#6B30DD]">Talk to an Expert</a>
              </div>
            </div>
            <div class="lg:col-span-6" data-reveal data-reveal-delay="120">
              <div class="op-image-shell">
                <div class="op-panel relative rounded-[32px] p-4 sm:p-6">
                  <img src="${escapeHtml(data.heroImage)}" alt="${escapeHtml(name)} visual" class="relative z-[1] w-full rounded-[24px] object-cover" loading="lazy" onerror="this.src='image/DASHBOARDIMAGE.png'" />
                  <div class="op-stat-card absolute -left-3 top-8 z-[2] rounded-2xl px-4 py-3 sm:-left-6"><div class="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">${escapeHtml(data.statA[0])}</div><div class="mt-1 text-lg font-semibold text-[#0f172a]">${escapeHtml(data.statA[1])}</div></div>
                  <div class="op-stat-card absolute -right-3 bottom-8 z-[2] rounded-2xl px-4 py-3 sm:-right-6"><div class="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">${escapeHtml(data.statB[0])}</div><div class="mt-1 text-lg font-semibold text-[#0f172a]">${escapeHtml(data.statB[1])}</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-white py-16 lg:py-20">
        <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8 lg:items-center">
          <div class="lg:col-span-5" data-reveal>
            <img src="${escapeHtml(data.overviewImage)}" alt="${escapeHtml(name)} overview" class="w-full rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_20px_70px_rgba(15,23,42,0.08)]" loading="lazy" onerror="this.src='image/DASHBOARDIMAGE.png'" />
          </div>
          <div class="lg:col-span-7" data-reveal data-reveal-delay="100">
            <div class="text-sm font-semibold text-[#6B30DD]">Product Overview</div>
            <h2 class="mt-3 text-3xl font-semibold tracking-tight text-[#0f172a] sm:text-4xl">Built to deliver stronger digital workflows</h2>
            <p class="mt-5 text-base leading-8 text-slate-600">${escapeHtml(data.summary)}</p>
            <p class="mt-4 text-base leading-8 text-slate-600">This offering is designed for organizations that want a more polished digital experience, cleaner execution, and stronger visibility across daily operations.</p>
            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <div class="rounded-2xl border border-slate-200 bg-[#faf8ff] p-5"><div class="text-sm font-semibold text-[#0f172a]">Business Value</div><p class="mt-2 text-sm leading-7 text-slate-600">${escapeHtml(data.headline)}</p></div>
              <div class="rounded-2xl border border-slate-200 bg-[#faf8ff] p-5"><div class="text-sm font-semibold text-[#0f172a]">Best Fit</div><p class="mt-2 text-sm leading-7 text-slate-600">Ideal for teams looking to modernize workflows with stronger control, visibility, and user experience.</p></div>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-[#f8fafc] py-16 lg:py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl" data-reveal>
            <div class="text-sm font-semibold text-[#6B30DD]">Key Capabilities</div>
            <h2 class="mt-3 text-3xl font-semibold tracking-tight text-[#0f172a] sm:text-4xl">A cleaner product experience with stronger operational value</h2>
            <p class="mt-4 text-base leading-8 text-slate-600">Designed to help teams move faster, improve clarity, and deliver more reliable outcomes across daily workflows.</p>
          </div>
          <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            ${category.features.map(([title, desc, icon], idx) => `<article class="op-feature rounded-3xl border border-slate-200 bg-white p-6" data-reveal data-reveal-delay="${idx * 80}"><div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5f3ff] text-xl text-[#6B30DD]">${escapeHtml(icon)}</div><h3 class="mt-5 text-lg font-semibold text-[#0f172a]">${escapeHtml(title)}</h3><p class="mt-3 text-sm leading-7 text-slate-600">${escapeHtml(desc)}</p></article>`).join("")}
          </div>
        </div>
      </section>
      <section class="bg-white py-16 lg:py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div class="lg:col-span-7" data-reveal>
              <div class="text-sm font-semibold text-[#6B30DD]">Why Teams Choose It</div>
              <h2 class="mt-3 text-3xl font-semibold tracking-tight text-[#0f172a] sm:text-4xl">A smarter foundation for digital delivery and growth</h2>
              <div class="mt-8 space-y-5">
                ${category.benefits.map(([title, desc]) => `<div class="flex gap-4 rounded-2xl border border-slate-200 p-5"><span class="op-check">✓</span><div><div class="text-base font-semibold text-[#0f172a]">${escapeHtml(title)}</div><p class="mt-2 text-sm leading-7 text-slate-600">${escapeHtml(desc)}</p></div></div>`).join("")}
              </div>
            </div>
            <div class="lg:col-span-5" data-reveal data-reveal-delay="100">
              <div class="rounded-[28px] border border-slate-200 bg-[#0f172a] p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
                <div class="text-sm font-semibold text-[#c4b5fd]">Business Impact</div>
                <h3 class="mt-4 text-2xl font-semibold leading-tight">A clearer, faster, and more controlled operating layer</h3>
                <div class="mt-8 grid gap-4 sm:grid-cols-2">
                  ${category.impact.map(([value, text], idx) => `<div class="rounded-2xl border border-white/10 bg-white/5 p-5 ${idx === 2 ? "sm:col-span-2" : ""}"><div class="text-2xl font-semibold">${escapeHtml(value)}</div><p class="mt-2 text-sm leading-6 text-slate-300">${escapeHtml(text)}</p></div>`).join("")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-[#f8fafc] py-16 lg:py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl" data-reveal>
            <div class="text-sm font-semibold text-[#6B30DD]">How It Works</div>
            <h2 class="mt-3 text-3xl font-semibold tracking-tight text-[#0f172a] sm:text-4xl">Simple rollout with a clear path to value</h2>
          </div>
          <div class="mt-10 grid gap-6 md:grid-cols-3">
            ${category.steps.map(([title, desc], idx) => `<div class="rounded-3xl border border-slate-200 bg-white p-6" data-reveal data-reveal-delay="${idx * 90}"><div class="text-sm font-semibold text-[#6B30DD]">${String(idx + 1).padStart(2, "0")}</div><h3 class="mt-4 text-lg font-semibold text-[#0f172a]">${escapeHtml(title)}</h3><p class="mt-3 text-sm leading-7 text-slate-600">${escapeHtml(desc)}</p></div>`).join("")}
          </div>
        </div>
      </section>
      <section class="bg-white py-16 lg:py-20">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" data-reveal>
          <div class="rounded-[32px] border border-slate-200 bg-gradient-to-r from-[#0f172a] to-[#161f3b] px-8 py-10 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div class="max-w-2xl">
              <div class="text-sm font-semibold text-[#c4b5fd]">Ready to explore?</div>
              <h2 class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Launch ${escapeHtml(name)} with a polished digital experience</h2>
              <p class="mt-4 text-sm leading-7 text-slate-300 sm:text-base">Talk to our team about implementation, customization, and the right setup for your business model.</p>
            </div>
            <div class="mt-8 flex flex-wrap gap-3 lg:mt-0 lg:justify-end">
              <a href="getintouche.html" class="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0f172a] transition hover:bg-slate-100">Get Started</a>
              <a href="contact.html" class="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function initOfferingPage() {
    const root = document.getElementById("offering-page-root");
    if (!root) return;
    const name = document.body.dataset.offeringKey;
    if (!name || !offerings[name]) {
      root.innerHTML = `<section class="bg-white py-24"><div class="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"><div class="text-sm font-semibold text-[#6B30DD]">Page unavailable</div><h1 class="mt-4 text-3xl font-semibold text-[#0f172a]">This offering page could not be loaded.</h1><p class="mt-4 text-slate-600">Please return to the homepage and select a valid offering.</p><a href="index.html#products" class="mt-8 inline-flex rounded-xl bg-[#6B30DD] px-5 py-3 text-sm font-semibold text-white">Back to Offerings</a></div></section>`;
      return;
    }
    renderOfferingPage(name);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initOfferingPage);
  else initOfferingPage();
})();
