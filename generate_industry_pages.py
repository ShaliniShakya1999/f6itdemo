from __future__ import annotations

from pathlib import Path
from html import escape


ROOT = Path(__file__).resolve().parent


INDUSTRIES = [
    {
        "slug": "banking-finance",
        "label": "Banking & Finance",
        "eyebrow": "Industry Solutions",
        "meta": "Banking and finance technology solutions for banks, NBFCs, fintechs, and digital-first institutions.",
        "hero_image": "image/connected-banking-dashboard.png",
        "overview_image": "image/connected-banking-dashboard.png",
        "headline": "Digital infrastructure for faster, safer financial services.",
        "summary": "We help banks, NBFCs, and fintech teams modernize lending, digital onboarding, payments, and customer servicing with secure, scalable platforms.",
        "overview_title": "Built for modern financial operations",
        "overview_p1": "Banking and finance teams need systems that can handle transaction scale, compliance pressure, partner integrations, and changing customer expectations at the same time.",
        "overview_p2": "F6IT supports this shift with modular digital banking, lending, wallet, analytics, and operational platforms that improve speed, visibility, and service quality across the institution.",
        "stats": [("Focus", "Digital banking + lending"), ("Value", "Secure, compliant growth")],
        "solutions": [
            ("Core banking modernization", "Launch account, transaction, and branch workflows on a cleaner digital operating layer."),
            ("Lending and collections", "Digitize origination, underwriting, disbursement, servicing, and recovery journeys."),
            ("Payments and wallet infrastructure", "Enable seamless payment acceptance, switching, settlement, and wallet experiences."),
            ("Analytics and risk visibility", "Track portfolio health, fraud signals, operational trends, and compliance reporting."),
        ],
        "serve": ["Commercial banks", "NBFCs", "Microfinance institutions", "Fintech platforms", "Payment service providers", "Cooperative banks"],
        "benefits": [
            "Shorten turnaround time for onboarding, approvals, and service requests.",
            "Improve compliance readiness with better audit trails and workflow visibility.",
            "Create connected customer journeys across branch, web, mobile, and partner channels.",
            "Scale products faster with modular APIs and data-driven decision support.",
        ],
        "links": [("Connected Banking", "connected-banking.html"), ("Core Banking", "core-banking.html"), ("Lending", "lending.html"), ("Utility Payments", "utility-payments.html")],
    },
    {
        "slug": "insurance-industry",
        "label": "Insurance",
        "eyebrow": "Industry Solutions",
        "meta": "Insurance technology solutions for policy administration, claims operations, underwriting, and customer servicing.",
        "hero_image": "image/insurance-products.png",
        "overview_image": "image/SECURITY_SECTION_ILLUSTRATION.png",
        "headline": "Policy, claims, and servicing workflows that stay in control.",
        "summary": "From policy lifecycle management to claims coordination and partner servicing, our insurance solutions help teams work faster with better process visibility.",
        "overview_title": "Insurance operations made more connected",
        "overview_p1": "Insurance businesses often operate across fragmented systems for underwriting, policy issuance, endorsements, claims, and customer support.",
        "overview_p2": "We unify these workflows into a more structured digital operating environment so insurers can deliver faster service, stronger compliance, and better partner coordination.",
        "stats": [("Focus", "Policy + claims lifecycle"), ("Value", "Operational control")],
        "solutions": [
            ("Policy administration", "Streamline proposal intake, policy issuance, endorsements, renewals, and servicing in one flow."),
            ("Claims processing", "Coordinate FNOL, document collection, assessment, approvals, and settlement tracking."),
            ("Broker and channel support", "Create consistent workflows for agents, brokers, bancassurance partners, and internal teams."),
            ("Reporting and governance", "Improve operational visibility across service SLAs, claims status, and portfolio performance."),
        ],
        "serve": ["General insurers", "Health insurers", "TPAs", "Insurance brokers", "Bancassurance teams", "Claims administrators"],
        "benefits": [
            "Reduce policy servicing delays and repetitive manual follow-up.",
            "Improve claims transparency for customers, agents, and internal reviewers.",
            "Strengthen compliance and documentation across every policy interaction.",
            "Support product expansion with flexible digital workflows and integrations.",
        ],
        "links": [("Insurance", "insurance.html"), ("Core Insurance", "core-insurance.html"), ("CRM", "crm.html"), ("DMS", "dms.html")],
    },
    {
        "slug": "education-industry",
        "label": "Education",
        "eyebrow": "Industry Solutions",
        "meta": "Education technology solutions for campuses, institutions, admissions, learning workflows, and administration.",
        "hero_image": "image/MOBILE_APP_SCREEN.png",
        "overview_image": "image/MOBILE_APP_SCREEN.png",
        "headline": "Digital experiences for institutions, campuses, and learning operations.",
        "summary": "We help education providers digitize admissions, communication, fee workflows, campus operations, and academic administration with student-friendly interfaces.",
        "overview_title": "Technology for better campus coordination",
        "overview_p1": "Education organizations manage a wide mix of admissions, scheduling, fee collection, parent communication, records, and faculty coordination.",
        "overview_p2": "Our platforms bring these workflows together so institutions can reduce manual work, deliver smoother student journeys, and improve visibility for administrators and leadership teams.",
        "stats": [("Focus", "Campus + student journeys"), ("Value", "Better service experience")],
        "solutions": [
            ("Admissions and enrollment", "Digitize applications, document review, approvals, and onboarding for new students."),
            ("Campus administration", "Manage fees, notices, schedules, records, and routine academic operations from one place."),
            ("Communication workflows", "Create timely updates for students, parents, faculty, and support teams."),
            ("Reporting and insights", "Track admissions funnel, fee collections, performance indicators, and operational bottlenecks."),
        ],
        "serve": ["Schools", "Colleges", "Universities", "Training institutes", "EdTech platforms", "Multi-campus groups"],
        "benefits": [
            "Improve response time for admissions, support, and internal approvals.",
            "Reduce dependency on scattered spreadsheets and manual communication.",
            "Create a more polished digital experience for students and parents.",
            "Give management a clearer view of academic and operational performance.",
        ],
        "links": [("Website Development", "website-development.html"), ("Software Development", "software-development.html"), ("ERP", "erp.html"), ("CRM", "crm.html")],
    },
    {
        "slug": "healthcare-industry",
        "label": "Healthcare",
        "eyebrow": "Industry Solutions",
        "meta": "Healthcare software solutions for patient engagement, records, operations, and digital service coordination.",
        "hero_image": "image/SECURITY_SECTION_ILLUSTRATION.png",
        "overview_image": "image/DASHBOARDIMAGE.png",
        "headline": "Digital systems that support patients, teams, and healthcare operations.",
        "summary": "Healthcare organizations can improve patient communication, workflow coordination, documentation, and reporting through secure digital platforms.",
        "overview_title": "Healthcare delivery needs dependable workflows",
        "overview_p1": "Healthcare teams work across appointments, records, billing, approvals, service coordination, and follow-up communication, often under strict accuracy and timing requirements.",
        "overview_p2": "We design digital systems that simplify these day-to-day processes, improve internal collaboration, and help organizations deliver more responsive care experiences.",
        "stats": [("Focus", "Patient + provider workflows"), ("Value", "Structured service delivery")],
        "solutions": [
            ("Patient engagement workflows", "Support digital requests, communication, intake, and follow-up journeys."),
            ("Operational coordination", "Improve task handoffs across front desk, diagnostics, billing, and administrative teams."),
            ("Records and documentation", "Organize documents and internal workflow checkpoints with stronger visibility."),
            ("Analytics and service monitoring", "Measure turnaround times, service trends, operational load, and recurring issues."),
        ],
        "serve": ["Hospitals", "Clinics", "Diagnostic centers", "Health networks", "Telehealth providers", "Healthcare administrators"],
        "benefits": [
            "Improve service consistency across patient-facing and internal support teams.",
            "Reduce workflow gaps caused by disconnected systems and manual status tracking.",
            "Create better visibility across documentation, requests, and operational bottlenecks.",
            "Support compliance-friendly processes with clearer digital records and task trails.",
        ],
        "links": [("DMS", "dms.html"), ("ERP", "erp.html"), ("CRM", "crm.html"), ("Website Development", "website-development.html")],
    },
    {
        "slug": "ecommerce-industry",
        "label": "E-Commerce",
        "eyebrow": "Industry Solutions",
        "meta": "E-commerce technology solutions for storefronts, payments, catalog operations, customer journeys, and fulfillment visibility.",
        "hero_image": "image/E-commerce Catalog Store.png",
        "overview_image": "image/E-commerce Catalog Store.png",
        "headline": "Commerce journeys built for conversion, fulfillment, and retention.",
        "summary": "We help e-commerce businesses strengthen storefront experiences, payment flows, backend operations, and customer lifecycle visibility.",
        "overview_title": "Commerce platforms that connect the full journey",
        "overview_p1": "Modern e-commerce requires more than a storefront. Teams need order visibility, reliable payment handling, promotions, product information, and responsive customer support workflows.",
        "overview_p2": "F6IT helps create connected commerce ecosystems where frontend experience and backend operations work together with fewer manual gaps.",
        "stats": [("Focus", "Storefront + backend flow"), ("Value", "Better conversion control")],
        "solutions": [
            ("Storefront and catalog experience", "Build cleaner product discovery, category, search, and merchandising experiences."),
            ("Checkout and payments", "Reduce friction across checkout, gateway integration, payment updates, and confirmation flows."),
            ("Order and fulfillment visibility", "Track order progression, status communication, and internal operational coordination."),
            ("Customer lifecycle analytics", "Understand demand patterns, repeat behavior, returns, and campaign performance."),
        ],
        "serve": ["Online retailers", "Marketplaces", "D2C brands", "Omnichannel commerce teams", "Digital wholesalers", "Consumer brands"],
        "benefits": [
            "Improve conversion with smoother browsing, cart, and checkout experiences.",
            "Reduce support load through clearer status communication and backend visibility.",
            "Make promotions, merchandising, and campaign execution easier to manage.",
            "Support business growth with systems that scale across products and channels.",
        ],
        "links": [("Website Development", "website-development.html"), ("CRM", "crm.html"), ("Utility Payments", "utility-payments.html"), ("UPI Collection", "upi-collection.html")],
    },
    {
        "slug": "e-governance-industry",
        "label": "E-Governance",
        "eyebrow": "Industry Solutions",
        "meta": "E-governance solutions for citizen services, digital approvals, public service workflows, and internal administration.",
        "hero_image": "image/Analytics Dashboard.png",
        "overview_image": "image/Analytics Dashboard.png",
        "headline": "Digital governance platforms for citizen-facing services and internal control.",
        "summary": "Public-sector and governance teams can simplify application handling, approval workflows, service delivery, and monitoring with structured digital platforms.",
        "overview_title": "Citizen services need speed and transparency",
        "overview_p1": "Governance programs often involve high request volumes, multi-step approvals, document-heavy submissions, and the need for transparent status tracking.",
        "overview_p2": "Our e-governance solutions help institutions create service journeys that are easier for citizens to access and easier for departments to monitor and manage.",
        "stats": [("Focus", "Citizen service delivery"), ("Value", "Transparency + speed")],
        "solutions": [
            ("Application and approval workflows", "Digitize public requests, verifications, escalations, and final decision paths."),
            ("Department coordination", "Create structured handoffs across teams, officers, service desks, and review units."),
            ("Digital record management", "Keep documents, application history, and status logs organized and searchable."),
            ("Dashboards and oversight", "Measure throughput, SLA adherence, backlog, and service performance across programs."),
        ],
        "serve": ["Government departments", "Public agencies", "Civic programs", "Urban governance teams", "Citizen service centers", "Regulatory bodies"],
        "benefits": [
            "Improve service accessibility with simpler digital request journeys.",
            "Increase transparency for applicants through better status visibility.",
            "Reduce administrative delay with more structured internal workflow control.",
            "Give leadership a clearer view of performance, backlog, and service quality.",
        ],
        "links": [("E-Governance", "e-governance.html"), ("DMS", "dms.html"), ("ERP", "erp.html"), ("CRM", "crm.html")],
    },
    {
        "slug": "retail-industry",
        "label": "Retail",
        "eyebrow": "Industry Solutions",
        "meta": "Retail technology solutions for stores, POS operations, promotions, inventory visibility, and customer engagement.",
        "hero_image": "image/DASHBOARDIMAGE.png",
        "overview_image": "image/E-commerce Catalog Store.png",
        "headline": "Retail systems that connect store operations and customer experience.",
        "summary": "We support retail businesses with digital tools for commerce operations, customer engagement, transaction workflows, and performance visibility across locations.",
        "overview_title": "Retail needs speed at every touchpoint",
        "overview_p1": "Retail organizations balance merchandising, promotions, stock movement, checkout speed, staff coordination, and customer service across multiple channels.",
        "overview_p2": "Our approach helps unify the retail operating model with better visibility, smoother transactional workflows, and more responsive customer engagement tools.",
        "stats": [("Focus", "Store + omnichannel operations"), ("Value", "Faster frontline execution")],
        "solutions": [
            ("Retail transaction workflows", "Support payments, billing, reconciliation, and connected customer service touchpoints."),
            ("Catalog and promotion management", "Run product launches, offers, bundles, and seasonal campaigns with better coordination."),
            ("Store operations visibility", "Track performance across counters, locations, orders, and service workflows."),
            ("Customer engagement analytics", "Understand purchase patterns, repeat behavior, and campaign response more clearly."),
        ],
        "serve": ["Retail chains", "Specialty stores", "Consumer brands", "Franchise networks", "Omnichannel retailers", "New-age commerce brands"],
        "benefits": [
            "Improve the speed and consistency of customer-facing retail operations.",
            "Make store and channel performance easier to compare and optimize.",
            "Support merchandising and campaign execution with better workflow control.",
            "Create a stronger omnichannel experience across physical and digital touchpoints.",
        ],
        "links": [("CRM", "crm.html"), ("Website Development", "website-development.html"), ("Utility Payments", "utility-payments.html"), ("UPI Collection", "upi-collection.html")],
    },
    {
        "slug": "real-estate-industry",
        "label": "Real Estate",
        "eyebrow": "Industry Solutions",
        "meta": "Real estate software solutions for project visibility, customer journeys, documentation, and operational coordination.",
        "hero_image": "image/DASHBOARDIMAGE.png",
        "overview_image": "image/Analytics Dashboard.png",
        "headline": "Digital tools for property journeys, documentation, and operational visibility.",
        "summary": "Real estate businesses can streamline sales coordination, customer communication, approvals, project tracking, and document-heavy workflows through structured digital platforms.",
        "overview_title": "Real estate operations depend on coordination",
        "overview_p1": "Developers, brokers, and property operations teams manage high-value journeys involving inquiries, site visits, approvals, documents, payment milestones, and after-sales communication.",
        "overview_p2": "We design systems that simplify these moving parts, giving teams better control over execution while creating a more professional customer experience.",
        "stats": [("Focus", "Sales + project workflows"), ("Value", "Visibility across lifecycle")],
        "solutions": [
            ("Lead and sales coordination", "Track inquiries, follow-ups, site visits, bookings, and sales-stage movement more clearly."),
            ("Document and approval workflows", "Organize contracts, KYC, payment plans, project documents, and approval checkpoints."),
            ("Customer communication", "Create smoother updates for prospects, buyers, channel partners, and support teams."),
            ("Portfolio and performance reporting", "Monitor inventory, project status, sales velocity, and service workloads."),
        ],
        "serve": ["Developers", "Property consultants", "Broker networks", "Commercial real estate teams", "Residential sales teams", "Property operations groups"],
        "benefits": [
            "Reduce coordination gaps across sales, documentation, and customer servicing.",
            "Create better visibility for management across pipeline and project progress.",
            "Improve customer trust with more structured and timely communication.",
            "Support multi-project growth with repeatable digital workflows and reporting.",
        ],
        "links": [("CRM", "crm.html"), ("DMS", "dms.html"), ("ERP", "erp.html"), ("Website Development", "website-development.html")],
    },
]


def build_page(item: dict[str, object]) -> str:
    icons = ["🏦", "⚡", "🔐", "📊"]
    solutions = "\n".join(
        f"""
            <article class="op-feature rounded-3xl border border-slate-200 bg-white p-6" data-reveal data-reveal-delay="{idx * 80}">
              <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5f3ff] text-xl text-[#6B30DD]">{icons[idx % len(icons)]}</div>
              <h3 class="mt-5 text-lg font-semibold text-[#0f172a]">{escape(title)}</h3>
              <p class="mt-3 text-sm leading-7 text-slate-600">{escape(body)}</p>
            </article>
        """
        for idx, (title, body) in enumerate(item["solutions"])
    )
    benefits = "\n".join(
        f"""
                <div class="flex gap-4 rounded-2xl border border-slate-200 p-5">
                  <span class="op-check">✓</span>
                  <div>
                    <div class="text-base font-semibold text-[#0f172a]">Benefit {idx}</div>
                    <p class="mt-2 text-sm leading-7 text-slate-600">{escape(text)}</p>
                  </div>
                </div>
        """
        for idx, text in enumerate(item["benefits"], start=1)
    )
    links = "\n".join(
        f"""
              <a href="{escape(href)}" class="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div class="text-base font-semibold">{escape(title)}</div>
                <p class="mt-2 text-sm leading-6 text-slate-300">Open related solution page</p>
              </a>
        """
        for title, href in item["links"][:3]
    )
    stat_a, stat_b = item["stats"]

    return f"""<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{escape(item["label"])} Industry Solutions | F6IT</title>
    <meta name="description" content="{escape(item["meta"])}" />
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="assets/css/styles.css" />
    <link rel="stylesheet" href="assets/css/offering-pages.css" />
  </head>
  <body class="min-h-screen bg-white antialiased">
    <div id="site-header"></div>

    <main>
      <section class="op-hero-banner" style="background-image:url('{escape(item["hero_image"])}');" data-bg="custom">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="op-hero-banner-content" data-reveal>
            <div>
              <div class="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 shadow-sm backdrop-blur-sm">{escape(item["eyebrow"])}</div>
              <h1 class="op-hero-banner-title mt-5">{escape(item["label"])}</h1>
              <p class="op-hero-banner-subtitle">{escape(item["headline"])}</p>
              <p class="op-hero-banner-breadcrumb">
                <a href="index.html">Home</a>
                <span class="mx-2 text-white/60">/</span>
                <a href="services.html">Services</a>
                <span class="mx-2 text-white/60">/</span>
                <span class="font-medium text-white">{escape(item["label"])}</span>
              </p>
              <div class="op-hero-banner-actions">
                <a href="getintouche.html" class="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#6B30DD] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-white/95">Request a Demo</a>
                <a href="contact.html" class="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/16">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white py-16 lg:py-20">
        <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8 lg:items-center">
          <div class="lg:col-span-5" data-reveal>
            <img src="{escape(item["overview_image"])}" alt="{escape(item["label"])} overview" class="w-full rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_20px_70px_rgba(15,23,42,0.08)]" loading="lazy" onerror="this.src='image/DASHBOARDIMAGE.png'" />
          </div>
          <div class="lg:col-span-7" data-reveal data-reveal-delay="100">
            <div class="text-sm font-semibold text-[#6B30DD]">Industry Overview</div>
            <h2 class="mt-3 text-3xl font-semibold tracking-tight text-[#0f172a] sm:text-4xl">{escape(item["overview_title"])}</h2>
            <p class="mt-5 text-base leading-8 text-slate-600">{escape(item["overview_p1"])}</p>
            <p class="mt-4 text-base leading-8 text-slate-600">{escape(item["overview_p2"])}</p>
            <p class="mt-4 text-base leading-8 text-slate-600">{escape(item["summary"])}</p>
            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <div class="rounded-2xl border border-slate-200 bg-[#faf8ff] p-5">
                <div class="text-sm font-semibold text-[#0f172a]">{escape(stat_a[0])}</div>
                <p class="mt-2 text-sm leading-7 text-slate-600">{escape(stat_a[1])}</p>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-[#faf8ff] p-5">
                <div class="text-sm font-semibold text-[#0f172a]">{escape(stat_b[0])}</div>
                <p class="mt-2 text-sm leading-7 text-slate-600">{escape(stat_b[1])}</p>
              </div>
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
{solutions}
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
{benefits}
              </div>
            </div>
            <div class="lg:col-span-5" data-reveal data-reveal-delay="100">
              <div class="rounded-[28px] border border-slate-200 bg-[#0f172a] p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
                <div class="text-sm font-semibold text-[#c4b5fd]">Who We Support</div>
                <h3 class="mt-4 text-2xl font-semibold leading-tight">Industry-ready delivery for specialized teams</h3>
                <div class="mt-8 grid gap-4 sm:grid-cols-2">
                  <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div class="text-2xl font-semibold">{escape(stat_a[1])}</div>
                    <p class="mt-2 text-sm leading-6 text-slate-300">{escape(stat_a[0])}</p>
                  </div>
                  <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div class="text-2xl font-semibold">{escape(stat_b[1])}</div>
                    <p class="mt-2 text-sm leading-6 text-slate-300">{escape(stat_b[0])}</p>
                  </div>
                  <div class="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
                    <div class="text-sm font-semibold text-slate-200">Serves teams like</div>
                    <p class="mt-2 text-sm leading-6 text-slate-300">{escape(", ".join(item["serve"][:4]))}</p>
                  </div>
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
            <div class="rounded-3xl border border-slate-200 bg-white p-6" data-reveal data-reveal-delay="0">
              <div class="text-sm font-semibold text-[#6B30DD]">01</div>
              <h3 class="mt-4 text-lg font-semibold text-[#0f172a]">Map current workflows</h3>
              <p class="mt-3 text-sm leading-7 text-slate-600">Define teams, process stages, and service touchpoints specific to {escape(item["label"])} operations.</p>
            </div>
            <div class="rounded-3xl border border-slate-200 bg-white p-6" data-reveal data-reveal-delay="90">
              <div class="text-sm font-semibold text-[#6B30DD]">02</div>
              <h3 class="mt-4 text-lg font-semibold text-[#0f172a]">Configure controls</h3>
              <p class="mt-3 text-sm leading-7 text-slate-600">Set permissions, dashboards, automation rules, and service-level tracking for production readiness.</p>
            </div>
            <div class="rounded-3xl border border-slate-200 bg-white p-6" data-reveal data-reveal-delay="180">
              <div class="text-sm font-semibold text-[#6B30DD]">03</div>
              <h3 class="mt-4 text-lg font-semibold text-[#0f172a]">Launch and optimize</h3>
              <p class="mt-3 text-sm leading-7 text-slate-600">Go live with real users and continuously improve performance using workflow insights and analytics.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white py-16 lg:py-20">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" data-reveal>
          <div class="rounded-[32px] border border-slate-200 bg-gradient-to-r from-[#0f172a] to-[#161f3b] px-8 py-10 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div class="max-w-2xl">
              <div class="text-sm font-semibold text-[#c4b5fd]">Ready to explore?</div>
              <h2 class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Planning your {escape(item["label"])} transformation?</h2>
              <p class="mt-4 text-sm leading-7 text-slate-300 sm:text-base">We can help you map the right platform mix, workflow priorities, and digital experience for your business model.</p>
              <div class="mt-6 grid gap-3 sm:grid-cols-3">
{links}
              </div>
            </div>
            <div class="mt-8 flex flex-wrap gap-3 lg:mt-0 lg:justify-end">
              <a href="getintouche.html" class="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0f172a] transition hover:bg-slate-100">Get Started</a>
              <a href="contact.html" class="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <div id="site-footer"></div>
    <script src="assets/js/components.js"></script>
    <script src="assets/js/main.js"></script>
  </body>
</html>
"""


def main() -> None:
    for item in INDUSTRIES:
        output_path = ROOT / f"{item['slug']}.html"
        output_path.write_text(build_page(item), encoding="utf-8")
        print(f"Generated {output_path.name}")


if __name__ == "__main__":
    main()
