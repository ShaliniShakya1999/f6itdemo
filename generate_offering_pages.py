from __future__ import annotations

from html import escape
from pathlib import Path


ROOT = Path(__file__).resolve().parent


CATEGORY_CONTENT = {
    "Fintech & Banking": {
        "features": [
            ("Unified operational visibility", "Bring balances, transactions, workflow activity, and process status into one easier-to-manage environment.", "🏦"),
            ("Faster transaction execution", "Support high-volume banking and payment workflows with cleaner digital processes.", "⚡"),
            ("Role-based control", "Protect operational activity with permissions, approval logic, and clearer governance.", "🔐"),
            ("Reporting and reconciliation", "Improve traceability with dashboards, status tracking, and structured reconciliation support.", "📊"),
        ],
        "benefits": [
            ("Reduce fragmented operations", "Replace manual coordination and disconnected systems with one more structured digital workflow."),
            ("Improve daily visibility", "Give finance and operations teams a clearer view of activity, cash movement, and service state."),
            ("Scale with confidence", "Handle more users, more transactions, and more complexity through a stronger operational foundation."),
        ],
        "impact": [
            ("Real-time", "Operational visibility for faster action and better control"),
            ("Secure", "Structured access, approvals, and workflow governance"),
            ("Scalable", "Designed for higher transaction volume and digital growth"),
        ],
        "steps": [
            ("Map your process setup", "Define the accounts, transaction flows, and workflow stages needed for your business."),
            ("Configure controls and reporting", "Set access rules, review flows, dashboards, and operational logic."),
            ("Launch and optimize", "Run day-to-day banking workflows with stronger visibility and cleaner execution."),
        ],
    },
    "APIs & Verification": {
        "features": [
            ("API-ready integration", "Connect digital services into onboarding, compliance, and operational workflows with less friction.", "🔌"),
            ("Faster request handling", "Support high-usage verification and communication flows with a cleaner implementation model.", "⚡"),
            ("Workflow visibility", "Track requests, outcomes, and operational performance through one structured setup.", "📈"),
            ("Compliance support", "Build services that help teams maintain stronger process consistency and verification discipline.", "🛡️"),
        ],
        "benefits": [
            ("Accelerate onboarding and checks", "Reduce delays in identity, document, and communication workflows."),
            ("Simplify implementation", "Use API-first components that integrate cleanly into existing systems."),
            ("Improve process consistency", "Give teams clearer visibility and structure around verification activity."),
        ],
        "impact": [
            ("API-first", "Designed to fit digital products and internal operations"),
            ("Faster", "Support quicker verification and communication journeys"),
            ("Visible", "Track request flow, status, and outcomes more clearly"),
        ],
        "steps": [
            ("Choose the right service flow", "Select the verification or API-led process that fits your business need."),
            ("Connect into your systems", "Integrate workflows into onboarding, support, or internal platforms."),
            ("Operate at scale", "Handle increasing request volume with more visibility and control."),
        ],
    },
    "Financial Services": {
        "features": [
            ("Digital lifecycle support", "Manage service, customer, and operational workflows through a more connected platform.", "📘"),
            ("User and team visibility", "Keep customer-facing and internal activity easier to track and manage.", "👥"),
            ("Operational reporting", "Review progress, performance, and service state with cleaner dashboards and records.", "📊"),
            ("Growth-ready delivery", "Support expansion with a stronger digital foundation for financial products and services.", "🚀"),
        ],
        "benefits": [
            ("Modernize financial workflows", "Bring service-heavy and customer-led journeys into a cleaner digital environment."),
            ("Improve user experience", "Create smoother product and service journeys with less friction."),
            ("Support scalable operations", "Handle more customers and more activity through one better-structured platform."),
        ],
        "impact": [
            ("Connected", "Bring service delivery and operations into one system"),
            ("Visible", "Track lifecycle progress and internal performance better"),
            ("Scalable", "Support growth without increasing operational complexity"),
        ],
        "steps": [
            ("Define product and service journeys", "Map the lifecycle stages and experiences that matter to your business."),
            ("Configure controls and reporting", "Set visibility rules, workflow triggers, and review dashboards."),
            ("Launch digital operations", "Run service delivery and product workflows with stronger structure and insight."),
        ],
    },
    "Software & Platforms": {
        "features": [
            ("Modern digital experience", "Deliver cleaner interfaces and workflows for customers, teams, and partners.", "💻"),
            ("Operational centralization", "Bring tasks, data, and process execution into a more connected system.", "🧠"),
            ("Scalable architecture", "Build on systems that support future growth, integrations, and feature expansion.", "🏗️"),
            ("Actionable reporting", "Use better visibility to improve execution, decision-making, and process control.", "📊"),
        ],
        "benefits": [
            ("Improve productivity", "Help teams work faster with better digital tools and structured workflows."),
            ("Reduce system fragmentation", "Replace disconnected tools with a cleaner digital operating layer."),
            ("Create future-ready platforms", "Support business growth through scalable product and process foundations."),
        ],
        "impact": [
            ("Modern", "Upgrade the quality and usability of digital systems"),
            ("Unified", "Bring workflows and reporting into one environment"),
            ("Scalable", "Support long-term product and operational growth"),
        ],
        "steps": [
            ("Define your workflow model", "Identify roles, tasks, user journeys, and operating requirements."),
            ("Configure the platform", "Set dashboards, approvals, modules, and process rules."),
            ("Deploy with confidence", "Launch a cleaner digital system designed for daily use and long-term scale."),
        ],
    },
}


OFFERINGS = [
    {
        "name": "Connected Banking",
        "file": "connected-banking.html",
        "category": "Fintech & Banking",
        "headline": "Bring all your bank accounts into one connected workspace.",
        "summary": "Connected Banking unifies balances, transactions, approvals, and workflow visibility across multiple bank relationships in one secure operating layer.",
        "overview_title": "One platform for connected financial operations",
        "overview_p1": "Connected Banking helps businesses and financial teams manage multiple bank accounts, monitor balances, automate payment operations, and streamline reconciliation from a single, secure workspace.",
        "overview_p2": "Whether you are running a fintech platform, enterprise treasury function, or a payment-heavy business, the product gives you a clearer picture of cash movement and faster operational execution.",
        "business_value": "Manage accounts, payments, approvals, and reports without switching between bank portals.",
        "best_fit": "Ideal for treasury teams, fintech operators, and enterprises that need centralized control over distributed banking relationships.",
        "hero_image": "image/connected-banking-dashboard.png",
        "overview_image": "image/Connected.png",
        "stat_a": ("Accounts synced", "25+ Banks"),
        "stat_b": ("Visibility", "Real-time cash view"),
        "cta_title": "Launch connected banking operations with a cleaner user experience",
        "cta_body": "We can help you design the right setup for centralized account visibility, payment orchestration, and secure financial operations.",
    },
    {
        "name": "Utility Payments",
        "file": "utility-payments.html",
        "category": "Fintech & Banking",
        "headline": "Automate high-volume utility bill payment operations.",
        "summary": "Utility Payments helps businesses manage bulk bill processing, payment status tracking, and reconciliation with far less manual effort.",
        "overview_title": "A smoother operating layer for recurring bill payment workflows",
        "overview_p1": "Utility Payments is built for organizations that process electricity, gas, water, telecom, and other recurring bill categories at scale.",
        "overview_p2": "The platform improves payment visibility, reduces operational friction, and keeps every bill payment easier to track from request to settlement.",
        "business_value": "Handle bulk utility bill flows with stronger status tracking, reconciliation, and operational accuracy.",
        "best_fit": "Best for fintech teams, payment operators, and platforms handling repetitive, high-frequency bill payment journeys.",
        "hero_image": "image/utility-bill-payments.png",
        "overview_image": "image/Utility_Payments.png",
        "stat_a": ("Operations", "Bulk bill processing"),
        "stat_b": ("Control", "Reconciliation-ready"),
        "cta_title": "Scale utility payment operations without adding complexity",
        "cta_body": "Use one cleaner workflow for bill collection, reconciliation, and transaction tracking across multiple utility categories.",
    },
    {
        "name": "Instant Payouts",
        "file": "instant-payouts.html",
        "category": "Fintech & Banking",
        "headline": "Move money instantly with payout workflows built for scale.",
        "summary": "Instant Payouts supports real-time disbursals, end-to-end payout tracking, and stronger control across transaction-heavy environments.",
        "overview_title": "A payout layer built for speed and operational confidence",
        "overview_p1": "Instant Payouts helps teams disburse funds faster for vendor payments, settlements, withdrawals, and internal transfers using a structured real-time workflow.",
        "overview_p2": "The product keeps payout status visible, reduces delay-related support overhead, and makes high-volume money movement easier to manage.",
        "business_value": "Run faster disbursal operations while maintaining payout visibility, process control, and cleaner exception handling.",
        "best_fit": "Great for fintech platforms, merchant settlements, marketplaces, and payment teams handling frequent money movement.",
        "hero_image": "image/instant-payouts-transfer.png",
        "overview_image": "image/Instant.png",
        "stat_a": ("Speed", "Real-time disbursal"),
        "stat_b": ("Tracking", "End-to-end status"),
        "cta_title": "Go live with faster payout operations",
        "cta_body": "We can help you design a payout workflow that improves speed, reliability, and visibility across every transaction stage.",
    },
    {
        "name": "Travel Booking",
        "file": "travel-booking.html",
        "category": "Fintech & Banking",
        "headline": "Offer integrated travel booking with built-in payment support.",
        "summary": "Travel Booking combines travel search, booking journeys, payment support, and reservation visibility in one smoother digital experience.",
        "overview_title": "Digital travel journeys designed for booking speed and conversion",
        "overview_p1": "Travel Booking helps businesses offer flights, buses, hotels, and travel reservations through a modern user experience with connected transaction support.",
        "overview_p2": "It is designed for platforms that need a polished booking interface, seamless confirmation flow, and better visibility across reservation operations.",
        "business_value": "Combine booking, payment, and reservation visibility into one cleaner digital travel journey.",
        "best_fit": "Best for travel platforms, B2B booking operators, and digital service providers looking to modernize travel commerce.",
        "hero_image": "image/travel-booking-flights.png",
        "overview_image": "image/Travel_Booking.png",
        "stat_a": ("Bookings", "Flights, buses, hotels"),
        "stat_b": ("Experience", "Instant confirmation flow"),
        "cta_title": "Launch travel booking experiences that look premium and convert better",
        "cta_body": "Create a booking flow that feels smooth for users while keeping inventory, payments, and reservations easier to manage.",
    },
    {
        "name": "UPI Collection",
        "file": "upi-collection.html",
        "category": "Fintech & Banking",
        "headline": "Collect payments through UPI links, QR journeys, and smart workflows.",
        "summary": "UPI Collection helps teams accept digital payments through low-friction collection flows while keeping transaction visibility and reporting clear.",
        "overview_title": "A flexible collection layer for high-volume UPI payments",
        "overview_p1": "UPI Collection enables businesses to accept money through payment links, QR codes, and app-based collection experiences that feel familiar to users.",
        "overview_p2": "The platform simplifies collection visibility, makes reconciliation easier, and gives operations teams a cleaner way to manage digital payment acceptance.",
        "business_value": "Accept UPI payments through clean, high-conversion collection journeys while keeping internal tracking simple.",
        "best_fit": "Ideal for fintech operators, merchant platforms, and businesses that depend on fast, scalable digital collections.",
        "hero_image": "image/upi-qr-collection.png",
        "overview_image": "image/Payment_Collection.png",
        "stat_a": ("Collection mode", "Link + QR + intent"),
        "stat_b": ("Operations", "Track every payment"),
        "cta_title": "Build UPI collection journeys that are faster and easier to manage",
        "cta_body": "Launch a UPI-first collection experience with better payment visibility, smoother customer flow, and cleaner reporting.",
    },
    {
        "name": "Micro ATM",
        "file": "micro-atm.html",
        "category": "Fintech & Banking",
        "headline": "Extend banking access through Micro ATM operations.",
        "summary": "Micro ATM supports assisted banking, field transactions, and distributed service access through a more structured digital platform.",
        "overview_title": "Field-ready banking access with stronger operational visibility",
        "overview_p1": "Micro ATM helps operators deliver assisted banking services such as withdrawals, balance inquiries, and branchless access through retail or field points.",
        "overview_p2": "The system is designed to support distributed operations while giving central teams better monitoring and service-level visibility.",
        "business_value": "Expand service access through field-ready banking workflows while keeping operator activity easier to manage.",
        "best_fit": "Useful for assisted banking networks, rural financial access programs, and operators running distributed transaction points.",
        "hero_image": "image/micro-atm-retail.png",
        "overview_image": "image/ATM.png",
        "stat_a": ("Reach", "Agent-led access"),
        "stat_b": ("Support", "Assisted transactions"),
        "cta_title": "Run branchless banking experiences with stronger field control",
        "cta_body": "Use a structured digital platform to support operator-led transactions, wider service access, and better monitoring.",
    },
    {
        "name": "Aadhaar Banking",
        "file": "aadhaar-banking.html",
        "category": "Fintech & Banking",
        "headline": "Enable biometric banking experiences with Aadhaar-based workflows.",
        "summary": "Aadhaar Banking supports identity-led assisted banking and operational visibility for biometric financial service journeys.",
        "overview_title": "Biometric banking flows designed for service access and process discipline",
        "overview_p1": "Aadhaar Banking helps businesses and operators support biometric-based financial services in assisted service environments.",
        "overview_p2": "It combines operational visibility, structured transaction flow, and identity-led service support in one easier-to-manage platform.",
        "business_value": "Support biometric transaction journeys with stronger service access, monitoring, and process consistency.",
        "best_fit": "Ideal for assisted banking networks, agent-led service models, and identity-dependent financial workflows.",
        "hero_image": "image/aadhaar-banking-aeps.png",
        "overview_image": "image/Aadhaar.png",
        "stat_a": ("Identity mode", "Biometric-enabled"),
        "stat_b": ("Usage", "Assisted banking access"),
        "cta_title": "Deliver biometric banking services with a cleaner operational model",
        "cta_body": "Use Aadhaar-led workflows to improve assisted service delivery while keeping field visibility and transaction control stronger.",
    },
    {
        "name": "Core Banking",
        "file": "core-banking.html",
        "category": "Fintech & Banking",
        "headline": "Run core banking operations on a scalable digital foundation.",
        "summary": "Core Banking supports account lifecycle, transaction processing, and operational control through one modern banking backbone.",
        "overview_title": "A digital core built for daily banking operations",
        "overview_p1": "Core Banking provides the structure needed to manage account activity, transaction flows, product operations, and internal banking workflows.",
        "overview_p2": "The platform gives financial institutions a stronger digital foundation for service expansion, process control, and long-term modernization.",
        "business_value": "Manage the banking lifecycle through one connected operating foundation built for reliability, control, and future scale.",
        "best_fit": "Best for banks, NBFCs, cooperatives, and institutions modernizing their digital banking backbone.",
        "hero_image": "image/DASHBOARDIMAGE.png",
        "overview_image": "image/Connected.png",
        "stat_a": ("Platform role", "Banking backbone"),
        "stat_b": ("Coverage", "Accounts to operations"),
        "cta_title": "Strengthen your banking backbone with a modern digital core",
        "cta_body": "Launch or modernize core banking workflows with better operational structure, visibility, and long-term product readiness.",
    },
    {
        "name": "Verification APIs",
        "file": "verification-apis.html",
        "category": "APIs & Verification",
        "headline": "Accelerate onboarding with secure verification API workflows.",
        "summary": "Verification APIs streamline identity checks, document validation, and onboarding workflows through cleaner integrations and better process visibility.",
        "overview_title": "Verification infrastructure built for fast digital onboarding",
        "overview_p1": "Verification APIs help products and operations teams connect identity checks, user validation, and onboarding steps into digital workflows that are easier to scale.",
        "overview_p2": "The result is a cleaner onboarding experience, more structured verification handling, and stronger visibility into request outcomes.",
        "business_value": "Reduce onboarding friction while giving teams a cleaner API-first workflow for identity and document checks.",
        "best_fit": "A strong fit for fintechs, SaaS platforms, and businesses that need developer-friendly verification flows.",
        "hero_image": "image/verification-api-security.png",
        "overview_image": "image/Verification.png",
        "stat_a": ("Use case", "Faster onboarding"),
        "stat_b": ("Integration", "API-first workflow"),
        "cta_title": "Integrate verification services into your onboarding stack",
        "cta_body": "Speed up verification journeys with an API-ready solution designed for digital products, operations teams, and compliance workflows.",
    },
    {
        "name": "PAN Card",
        "file": "pan-card.html",
        "category": "APIs & Verification",
        "headline": "Validate PAN details through faster digital verification flows.",
        "summary": "PAN Card services help businesses run tax identity checks more efficiently while improving onboarding quality and document validation speed.",
        "overview_title": "PAN verification workflows built for cleaner onboarding operations",
        "overview_p1": "PAN Card validation supports identity workflows that need faster document checks, cleaner onboarding logic, and less manual review effort.",
        "overview_p2": "It gives businesses a more structured way to handle tax identity verification as part of digital account opening and internal review processes.",
        "business_value": "Improve document verification quality while reducing friction in customer and merchant onboarding.",
        "best_fit": "Ideal for fintechs, onboarding teams, merchant verification workflows, and compliance-led products.",
        "hero_image": "image/pan-card-services.png",
        "overview_image": "image/PAN card.png",
        "stat_a": ("Identity check", "PAN validation"),
        "stat_b": ("Workflow", "Faster onboarding support"),
        "cta_title": "Digitize PAN verification with a cleaner customer flow",
        "cta_body": "Use a faster validation workflow to improve onboarding confidence, reduce manual checks, and scale verification more efficiently.",
    },
    {
        "name": "WhatsApp Solution",
        "file": "whatsapp-solution.html",
        "category": "APIs & Verification",
        "headline": "Automate customer communication with WhatsApp-based workflows.",
        "summary": "WhatsApp Solution enables alerts, reminders, support updates, and customer messaging through a faster, more connected communication layer.",
        "overview_title": "Customer messaging workflows that feel more responsive",
        "overview_p1": "WhatsApp Solution lets businesses automate reminders, support updates, service alerts, and engagement communication through a high-response messaging channel.",
        "overview_p2": "It helps reduce communication delays, keeps operations more connected, and improves message consistency across customer journeys.",
        "business_value": "Use automated communication flows to improve response speed, service clarity, and customer engagement.",
        "best_fit": "Perfect for support-heavy businesses, fintech platforms, transaction alerts, and lifecycle communication flows.",
        "hero_image": "image/MOBILE_APP_SCREEN.png",
        "overview_image": "image/API Gateway.png",
        "stat_a": ("Channel", "WhatsApp messaging"),
        "stat_b": ("Usage", "Alerts + support + reminders"),
        "cta_title": "Create customer communication journeys that are timely and scalable",
        "cta_body": "Automate support, notifications, and lifecycle messaging through WhatsApp workflows that are easier to control and monitor.",
    },
    {
        "name": "eAudit",
        "file": "eaudit.html",
        "category": "APIs & Verification",
        "headline": "Digitize audit preparation, evidence tracking, and review workflows.",
        "summary": "eAudit organizes audit activity, supporting records, and issue management into a cleaner digital review environment.",
        "overview_title": "A digital audit workspace built for compliance readiness",
        "overview_p1": "eAudit helps teams centralize evidence, track review progress, and manage audit activities through one more structured operating environment.",
        "overview_p2": "It reduces document sprawl, improves audit readiness, and gives stakeholders a clearer view of open issues and review status.",
        "business_value": "Turn scattered audit preparation into a controlled workflow with stronger evidence visibility and task tracking.",
        "best_fit": "Useful for regulated teams, internal audit functions, compliance-heavy organizations, and review-led workflows.",
        "hero_image": "image/Compliance  Audit.png",
        "overview_image": "image/Compliance  Audit.png",
        "stat_a": ("Focus", "Audit readiness"),
        "stat_b": ("Support", "Evidence and review flow"),
        "cta_title": "Move your audit process into a cleaner digital workspace",
        "cta_body": "Simplify readiness, evidence collection, and review progress with a platform designed for audit visibility and control.",
    },
    {
        "name": "Insurance",
        "file": "insurance.html",
        "category": "Financial Services",
        "headline": "Digitize policy journeys, service operations, and customer engagement.",
        "summary": "Insurance solutions help businesses manage policy workflows, servicing, and operational visibility across the customer lifecycle.",
        "overview_title": "Insurance workflows built for service quality and process control",
        "overview_p1": "Insurance helps organizations digitize customer journeys, streamline service handling, and improve internal process coordination across policy operations.",
        "overview_p2": "The platform supports a cleaner experience for teams and customers while making insurance workflows more visible and easier to manage.",
        "business_value": "Support policy servicing, customer workflows, and operational visibility through one more modern insurance platform.",
        "best_fit": "Best for insurers, intermediaries, and financial service teams modernizing policy and service operations.",
        "hero_image": "image/insurance-products.png",
        "overview_image": "image/SECURITY_SECTION_ILLUSTRATION.png",
        "stat_a": ("Coverage", "Policy lifecycle support"),
        "stat_b": ("Operations", "Customer + service workflows"),
        "cta_title": "Modernize insurance delivery with a smoother digital operating model",
        "cta_body": "Create better customer service, stronger visibility, and cleaner insurance workflows across your product lifecycle.",
    },
    {
        "name": "Investment",
        "file": "investment.html",
        "category": "Financial Services",
        "headline": "Create clearer digital investment journeys and reporting visibility.",
        "summary": "Investment solutions support portfolio views, advisory workflows, and customer financial insights in a more connected digital experience.",
        "overview_title": "Investment journeys designed for trust, insight, and engagement",
        "overview_p1": "Investment helps platforms and financial businesses present portfolio views, product insights, and advisory workflows through a premium digital interface.",
        "overview_p2": "It is built to make investment experiences more understandable for users while giving teams better visibility into engagement and reporting.",
        "business_value": "Deliver cleaner portfolio visibility and advisory journeys that support customer confidence and digital engagement.",
        "best_fit": "Ideal for wealth platforms, advisory-led products, and digital investment experiences that depend on clarity and trust.",
        "hero_image": "image/investment-mutual-funds.png",
        "overview_image": "image/Analytics Dashboard.png",
        "stat_a": ("Focus", "Portfolio visibility"),
        "stat_b": ("Experience", "Insight-driven journeys"),
        "cta_title": "Create investment experiences that feel clearer and more premium",
        "cta_body": "Support digital investing with stronger portfolio visibility, better reporting, and a smoother experience for both users and teams.",
    },
    {
        "name": "Recharge",
        "file": "recharge.html",
        "category": "Financial Services",
        "headline": "Run high-volume recharge services with live status visibility.",
        "summary": "Recharge helps businesses deliver mobile and utility recharge journeys through faster transaction handling and clearer operational reporting.",
        "overview_title": "Recharge workflows built for speed, repeat usage, and status clarity",
        "overview_p1": "Recharge is designed for businesses handling mobile, DTH, and similar repeat-use digital top-up journeys at scale.",
        "overview_p2": "The product gives teams better visibility into transaction state, supports faster processing, and keeps recharge operations cleaner to manage.",
        "business_value": "Run recharge operations through a faster digital workflow with stronger transaction visibility and reporting clarity.",
        "best_fit": "Best for consumer service providers, recharge operators, and digital platforms with frequent transaction activity.",
        "hero_image": "image/recharge-mobile-dth.png",
        "overview_image": "image/Utility.png",
        "stat_a": ("Volume", "High-frequency transactions"),
        "stat_b": ("Tracking", "Live status visibility"),
        "cta_title": "Scale recharge operations with stronger speed and process visibility",
        "cta_body": "Support repeat-use digital recharge journeys through a platform designed for faster execution and easier status tracking.",
    },
    {
        "name": "Lending",
        "file": "lending.html",
        "category": "Financial Services",
        "headline": "Build cleaner lending journeys from origination to repayment.",
        "summary": "Lending supports onboarding, evaluation, servicing, and repayment workflows through a structured and scalable digital platform.",
        "overview_title": "A connected lending workflow for better visibility and service control",
        "overview_p1": "Lending helps businesses structure borrower journeys from intake and evaluation through servicing, repayment, and ongoing account support.",
        "overview_p2": "The platform improves workflow clarity, supports scale, and gives teams a stronger operating model for managing loan lifecycle activity.",
        "business_value": "Make lending workflows more visible, more structured, and easier to scale across origination and servicing stages.",
        "best_fit": "Ideal for digital lenders, NBFCs, credit platforms, and businesses that need cleaner borrower lifecycle workflows.",
        "hero_image": "image/lending-loans.png",
        "overview_image": "image/Money_Transfer.png",
        "stat_a": ("Coverage", "Origination to collection"),
        "stat_b": ("Operations", "Structured loan workflow"),
        "cta_title": "Launch a lending experience that balances speed with operational control",
        "cta_body": "Create borrower workflows that are easier to manage from onboarding to repayment through one cleaner digital system.",
    },
    {
        "name": "Core Insurance",
        "file": "core-insurance.html",
        "category": "Financial Services",
        "headline": "Create a stronger operating backbone for insurance businesses.",
        "summary": "Core Insurance provides foundational workflows for insurance operations, customer servicing, and process control in one modern system.",
        "overview_title": "A central operating system for insurance process delivery",
        "overview_p1": "Core Insurance helps businesses structure service, policy, and internal insurance workflows through a stronger digital foundation.",
        "overview_p2": "The system supports modernization, improves coordination across teams, and gives organizations better visibility into day-to-day insurance operations.",
        "business_value": "Run core insurance operations through a connected digital platform built for service quality, consistency, and future scale.",
        "best_fit": "Great for insurers and service-led organizations looking to modernize internal insurance operations and improve coordination.",
        "hero_image": "image/insurance-products.png",
        "overview_image": "image/SECURITY_SECTION_ILLUSTRATION.png",
        "stat_a": ("Platform role", "Insurance backbone"),
        "stat_b": ("Support", "Operations + servicing"),
        "cta_title": "Create a stronger core for modern insurance operations",
        "cta_body": "Build on a digital operating layer that improves service workflows, internal structure, and long-term insurance product readiness.",
    },
    {
        "name": "Website Development",
        "file": "website-development.html",
        "category": "Software & Platforms",
        "headline": "Build high-performance websites designed for growth and conversion.",
        "summary": "Website Development helps businesses launch modern, responsive, and conversion-focused websites that support trust and digital acquisition.",
        "overview_title": "Web experiences that look premium and perform with clarity",
        "overview_p1": "Website Development is focused on creating modern digital experiences that are visually polished, responsive, and aligned with real business goals.",
        "overview_p2": "It helps brands launch web platforms that improve trust, strengthen messaging, and turn more visitors into qualified action.",
        "business_value": "Launch websites that balance premium design, usability, responsiveness, and conversion-oriented structure.",
        "best_fit": "Ideal for fintech, SaaS, and enterprise brands that need a stronger digital presence and more premium web experience.",
        "hero_image": "image/Website.png",
        "overview_image": "image/Website.png",
        "stat_a": ("Focus", "Performance + conversion"),
        "stat_b": ("Output", "Responsive web experience"),
        "cta_title": "Build a website that looks modern and performs like a product",
        "cta_body": "Create a conversion-focused digital presence with cleaner structure, better responsiveness, and a premium user experience.",
    },
    {
        "name": "Software Development",
        "file": "software-development.html",
        "category": "Software & Platforms",
        "headline": "Create custom software products tailored to your business workflows.",
        "summary": "Software Development supports the design and delivery of secure digital products, internal systems, and scalable workflow platforms.",
        "overview_title": "Custom product engineering built around your actual workflow needs",
        "overview_p1": "Software Development helps teams build products and systems that match their use cases instead of forcing operations into rigid generic tools.",
        "overview_p2": "The result is a more flexible, scalable, and practical digital platform aligned with how your team and customers actually work.",
        "business_value": "Turn your workflow requirements into custom software that supports scale, usability, and better digital operations.",
        "best_fit": "Best for companies building new products, replacing manual processes, or creating tailored internal platforms.",
        "hero_image": "image/Software.png",
        "overview_image": "image/API Gateway.png",
        "stat_a": ("Approach", "Custom-built systems"),
        "stat_b": ("Fit", "Workflow-specific design"),
        "cta_title": "Build custom software that fits your business instead of forcing compromise",
        "cta_body": "Design and launch scalable digital products, internal tools, and workflow systems with stronger UX and better operational alignment.",
    },
    {
        "name": "ERP",
        "file": "erp.html",
        "category": "Software & Platforms",
        "headline": "Unify business operations through a connected ERP platform.",
        "summary": "ERP centralizes finance, operations, procurement, and internal workflows into one digital system built for visibility and coordination.",
        "overview_title": "One ERP layer for cross-functional business execution",
        "overview_p1": "ERP helps organizations reduce fragmentation by bringing process-heavy operations into one connected digital environment.",
        "overview_p2": "It improves visibility across departments, supports standardization, and gives leaders a stronger base for operational decision-making.",
        "business_value": "Run finance, operations, workflows, and reporting through one structured system instead of scattered tools.",
        "best_fit": "Best for growing businesses, enterprise operations, and organizations looking to unify internal execution.",
        "hero_image": "image/ERP.png",
        "overview_image": "image/ERP.png",
        "stat_a": ("Coverage", "Cross-functional operations"),
        "stat_b": ("Value", "One operating system"),
        "cta_title": "Unify business execution through a more structured ERP foundation",
        "cta_body": "Connect departments, simplify workflows, and improve decision-making with a digital ERP system built for clarity and scale.",
    },
    {
        "name": "CRM",
        "file": "crm.html",
        "category": "Software & Platforms",
        "headline": "Manage customer relationships with cleaner pipeline visibility.",
        "summary": "CRM helps businesses organize leads, sales activity, and customer lifecycle tracking through one connected relationship platform.",
        "overview_title": "A cleaner operating layer for customer and sales teams",
        "overview_p1": "CRM gives teams one place to manage leads, opportunities, communication history, and customer movement across the lifecycle.",
        "overview_p2": "It improves visibility into pipeline activity, helps structure follow-up processes, and supports stronger customer coordination across teams.",
        "business_value": "Track sales and customer relationships through one clearer system built for ownership, visibility, and growth.",
        "best_fit": "Ideal for sales-driven teams, service-led businesses, and organizations looking to improve customer pipeline control.",
        "hero_image": "image/DASHBOARDIMAGE.png",
        "overview_image": "image/DASHBOARDIMAGE.png",
        "stat_a": ("Focus", "Lead to relationship"),
        "stat_b": ("Control", "Pipeline visibility"),
        "cta_title": "Give your growth teams a clearer customer operating system",
        "cta_body": "Organize opportunities, interactions, and customer workflows through a CRM experience built for visibility and execution.",
    },
    {
        "name": "DMS",
        "file": "dms.html",
        "category": "Software & Platforms",
        "headline": "Manage documents securely with stronger lifecycle control.",
        "summary": "DMS helps organizations organize, approve, protect, and access critical documents through a more structured digital repository.",
        "overview_title": "Document workflows built for access control and compliance readiness",
        "overview_p1": "DMS centralizes business-critical files and supports document approval, access management, and lifecycle governance through a structured platform.",
        "overview_p2": "It gives teams better collaboration without sacrificing control, helping reduce file sprawl and improve compliance readiness.",
        "business_value": "Create a more secure, visible, and controlled workflow for managing important documents across the organization.",
        "best_fit": "Great for regulated teams, compliance-heavy businesses, and process-driven operations handling critical documents.",
        "hero_image": "image/Document Vault  DMS.png",
        "overview_image": "image/Document Vault  DMS.png",
        "stat_a": ("Focus", "Document lifecycle"),
        "stat_b": ("Control", "Access + approvals"),
        "cta_title": "Turn document chaos into a secure digital workflow",
        "cta_body": "Manage approvals, access, and document lifecycle stages through one platform designed for security, clarity, and operational discipline.",
    },
    {
        "name": "PMS",
        "file": "pms.html",
        "category": "Software & Platforms",
        "headline": "Coordinate projects and processes with better workflow visibility.",
        "summary": "PMS helps organizations plan work, track progress, and manage execution through a centralized process and project platform.",
        "overview_title": "Project execution workflows that are easier to track and scale",
        "overview_p1": "PMS helps teams manage tasks, stages, ownership, and progress from one coordinated environment instead of scattered tools and spreadsheets.",
        "overview_p2": "It improves team clarity, supports delivery discipline, and gives organizations a cleaner view of work progress across multiple initiatives.",
        "business_value": "Bring project execution into one system that supports coordination, accountability, and stronger workflow visibility.",
        "best_fit": "Useful for execution-heavy teams, internal operations, and businesses managing multiple workstreams or project layers.",
        "hero_image": "image/Analytics Dashboard.png",
        "overview_image": "image/Analytics Dashboard.png",
        "stat_a": ("Focus", "Project and process flow"),
        "stat_b": ("Team value", "Execution visibility"),
        "cta_title": "Manage delivery with a cleaner process and project workflow",
        "cta_body": "Improve accountability, visibility, and execution speed through a PMS setup built for modern teams and scalable work management.",
    },
    {
        "name": "HPMS",
        "file": "hpms.html",
        "category": "Software & Platforms",
        "headline": "Manage hospitality and property workflows through one platform.",
        "summary": "HPMS helps businesses run hospitality or property operations with structured bookings, service management, and operational visibility.",
        "overview_title": "A connected operating layer for hospitality and property teams",
        "overview_p1": "HPMS supports booking workflows, service operations, occupancy-related tasks, and back-office coordination in one more structured platform.",
        "overview_p2": "It is designed to make daily hospitality or property management work more visible, more controlled, and easier to scale.",
        "business_value": "Coordinate bookings, service requests, and internal workflows through a cleaner hospitality management experience.",
        "best_fit": "Best for hospitality teams, property operators, and businesses that need a more modern operational control layer.",
        "hero_image": "image/DASHBOARDIMAGE.png",
        "overview_image": "image/Storefront UI  Template.png",
        "stat_a": ("Coverage", "Property operations"),
        "stat_b": ("Visibility", "Bookings and services"),
        "cta_title": "Modernize hospitality and property workflows with a stronger digital system",
        "cta_body": "Support bookings, services, and operational reporting through one coordinated platform built for clearer daily execution.",
    },
    {
        "name": "E-Auction",
        "file": "e-auction.html",
        "category": "Software & Platforms",
        "headline": "Digitize auction workflows with better visibility and control.",
        "summary": "E-Auction supports digital bidding, participant handling, and auction lifecycle workflows through a structured online platform.",
        "overview_title": "Online auction experiences built for structure and transparency",
        "overview_p1": "E-Auction helps organizations digitize bidding processes, participant access, lot handling, and outcome tracking through a modern web interface.",
        "overview_p2": "It improves event visibility, supports more repeatable auction execution, and gives users a cleaner online auction experience.",
        "business_value": "Run auctions digitally through a platform that improves control, transparency, and repeatability across events.",
        "best_fit": "Ideal for institutions, marketplaces, and businesses that need a modern online bidding and auction workflow.",
        "hero_image": "image/E-commerce Catalog  Store.png",
        "overview_image": "image/E-commerce Catalog  Store.png",
        "stat_a": ("Mode", "Digital bidding"),
        "stat_b": ("Control", "Auction lifecycle visibility"),
        "cta_title": "Launch auction experiences that are digital, transparent, and easier to manage",
        "cta_body": "Move bidding workflows online through a structured platform that supports better event control and stakeholder confidence.",
    },
    {
        "name": "B2B & Sales App",
        "file": "b2b-sales-app.html",
        "category": "Software & Platforms",
        "headline": "Empower sales teams and distributors with a connected field app.",
        "summary": "B2B & Sales App helps businesses manage distributor activity, field sales operations, and orders through a mobile-ready workflow platform.",
        "overview_title": "A field-ready sales workflow platform for distributed teams",
        "overview_p1": "B2B & Sales App helps sales reps, distributors, and field teams manage orders, updates, customer interactions, and operational reporting from one connected interface.",
        "overview_p2": "It improves visibility into execution on the ground while making sales operations cleaner and easier to scale across channels.",
        "business_value": "Support field teams with a mobile-first workflow that improves sales visibility, order handling, and team coordination.",
        "best_fit": "Best for distributor-led businesses, field sales teams, and brands managing sales execution beyond the office.",
        "hero_image": "image/Storefront UI  Template.png",
        "overview_image": "image/Storefront UI  Template.png",
        "stat_a": ("Use case", "Field sales operations"),
        "stat_b": ("Mode", "Distributor + team workflow"),
        "cta_title": "Give field teams a smarter digital sales workflow",
        "cta_body": "Connect distributors, field teams, and order processes through a sales app built for visibility, mobility, and execution speed.",
    },
    {
        "name": "E-Governance",
        "file": "e-governance.html",
        "category": "Software & Platforms",
        "headline": "Deliver citizen-facing services through cleaner digital governance workflows.",
        "summary": "E-Governance helps institutions digitize service delivery, approvals, and internal public-service workflows in a more structured environment.",
        "overview_title": "Digital governance workflows built for accessibility and process clarity",
        "overview_p1": "E-Governance helps organizations modernize application handling, approval processes, and citizen-facing service delivery through a cleaner digital platform.",
        "overview_p2": "It improves public service accessibility, reduces process delays, and gives teams stronger internal visibility across governance workflows.",
        "business_value": "Digitize service delivery and internal approvals through one platform built for transparency, accessibility, and workflow control.",
        "best_fit": "Ideal for institutions and public-service teams modernizing citizen-facing operations and process-heavy governance workflows.",
        "hero_image": "image/Analytics Dashboard.png",
        "overview_image": "image/Analytics Dashboard.png",
        "stat_a": ("Focus", "Citizen service delivery"),
        "stat_b": ("Value", "Digital workflow control"),
        "cta_title": "Modernize governance workflows with a cleaner digital experience",
        "cta_body": "Create more accessible public service journeys and better process visibility through an e-governance platform designed for clarity and scale.",
    },
]


def render_features(items):
    blocks = []
    for index, (title, desc, icon) in enumerate(items):
        blocks.append(
            f"""
            <article class="op-feature rounded-3xl border border-slate-200 bg-white p-6" data-reveal data-reveal-delay="{index * 80}">
              <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5f3ff] text-xl text-[#6B30DD]">{escape(icon)}</div>
              <h3 class="mt-5 text-lg font-semibold text-[#0f172a]">{escape(title)}</h3>
              <p class="mt-3 text-sm leading-7 text-slate-600">{escape(desc)}</p>
            </article>"""
        )
    return "\n".join(blocks)


def render_benefits(items):
    blocks = []
    for title, desc in items:
        blocks.append(
            f"""
                <div class="flex gap-4 rounded-2xl border border-slate-200 p-5">
                  <span class="op-check">✓</span>
                  <div>
                    <div class="text-base font-semibold text-[#0f172a]">{escape(title)}</div>
                    <p class="mt-2 text-sm leading-7 text-slate-600">{escape(desc)}</p>
                  </div>
                </div>"""
        )
    return "\n".join(blocks)


def render_impact(items):
    blocks = []
    for index, (value, text) in enumerate(items):
        span = " sm:col-span-2" if index == 2 else ""
        blocks.append(
            f"""
                  <div class="rounded-2xl border border-white/10 bg-white/5 p-5{span}">
                    <div class="text-2xl font-semibold">{escape(value)}</div>
                    <p class="mt-2 text-sm leading-6 text-slate-300">{escape(text)}</p>
                  </div>"""
        )
    return "\n".join(blocks)


def render_steps(items):
    blocks = []
    for index, (title, desc) in enumerate(items, start=1):
        blocks.append(
            f"""
            <div class="rounded-3xl border border-slate-200 bg-white p-6" data-reveal data-reveal-delay="{(index - 1) * 90}">
              <div class="text-sm font-semibold text-[#6B30DD]">{index:02d}</div>
              <h3 class="mt-4 text-lg font-semibold text-[#0f172a]">{escape(title)}</h3>
              <p class="mt-3 text-sm leading-7 text-slate-600">{escape(desc)}</p>
            </div>"""
        )
    return "\n".join(blocks)


def build_page(item: dict) -> str:
    category = CATEGORY_CONTENT[item["category"]]
    return f"""<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{escape(item["name"])} | F6IT</title>
    <meta name="description" content="{escape(item["summary"])}" />

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
              <div class="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 shadow-sm backdrop-blur-sm">
                {escape(item["category"])}
              </div>
              <h1 class="op-hero-banner-title mt-5">{escape(item["name"])}</h1>
              <p class="op-hero-banner-subtitle">{escape(item["headline"])}</p>
              <p class="op-hero-banner-breadcrumb">
                <a href="index.html">Home</a>
                <span class="mx-2 text-white/60">/</span>
                <a href="index.html#products">Offerings</a>
                <span class="mx-2 text-white/60">/</span>
                <span class="font-medium text-white">{escape(item["name"])}</span>
              </p>
              <div class="op-hero-banner-actions">
                <a href="getintouche.html" class="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#6B30DD] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-white/95">
                  Request a Demo
                </a>
                <a href="contact.html" class="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/16">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white py-16 lg:py-20">
        <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8 lg:items-center">
          <div class="lg:col-span-5" data-reveal>
            <img
              src="{escape(item["overview_image"])}"
              alt="{escape(item["name"])} overview"
              class="w-full rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_20px_70px_rgba(15,23,42,0.08)]"
              loading="lazy"
              onerror="this.src='image/DASHBOARDIMAGE.png'"
            />
          </div>
          <div class="lg:col-span-7" data-reveal data-reveal-delay="100">
            <div class="text-sm font-semibold text-[#6B30DD]">Product Overview</div>
            <h2 class="mt-3 text-3xl font-semibold tracking-tight text-[#0f172a] sm:text-4xl">
              {escape(item["overview_title"])}
            </h2>
            <p class="mt-5 text-base leading-8 text-slate-600">
              {escape(item["overview_p1"])}
            </p>
            <p class="mt-4 text-base leading-8 text-slate-600">
              {escape(item["overview_p2"])}
            </p>

            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <div class="rounded-2xl border border-slate-200 bg-[#faf8ff] p-5">
                <div class="text-sm font-semibold text-[#0f172a]">Business Value</div>
                <p class="mt-2 text-sm leading-7 text-slate-600">{escape(item["business_value"])}</p>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-[#faf8ff] p-5">
                <div class="text-sm font-semibold text-[#0f172a]">Best Fit</div>
                <p class="mt-2 text-sm leading-7 text-slate-600">{escape(item["best_fit"])}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-[#f8fafc] py-16 lg:py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl" data-reveal>
            <div class="text-sm font-semibold text-[#6B30DD]">Key Capabilities</div>
            <h2 class="mt-3 text-3xl font-semibold tracking-tight text-[#0f172a] sm:text-4xl">
              A cleaner product experience with stronger operational value
            </h2>
            <p class="mt-4 text-base leading-8 text-slate-600">
              Designed to help teams move faster, improve clarity, and deliver more reliable outcomes across daily workflows.
            </p>
          </div>

          <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
{render_features(category["features"])}
          </div>
        </div>
      </section>

      <section class="bg-white py-16 lg:py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div class="lg:col-span-7" data-reveal>
              <div class="text-sm font-semibold text-[#6B30DD]">Why Teams Choose It</div>
              <h2 class="mt-3 text-3xl font-semibold tracking-tight text-[#0f172a] sm:text-4xl">
                A smarter foundation for digital delivery and growth
              </h2>
              <div class="mt-8 space-y-5">
{render_benefits(category["benefits"])}
              </div>
            </div>

            <div class="lg:col-span-5" data-reveal data-reveal-delay="100">
              <div class="rounded-[28px] border border-slate-200 bg-[#0f172a] p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
                <div class="text-sm font-semibold text-[#c4b5fd]">Business Impact</div>
                <h3 class="mt-4 text-2xl font-semibold leading-tight">A clearer, faster, and more controlled operating layer</h3>
                <div class="mt-8 grid gap-4 sm:grid-cols-2">
{render_impact(category["impact"])}
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
            <h2 class="mt-3 text-3xl font-semibold tracking-tight text-[#0f172a] sm:text-4xl">
              Simple rollout with a clear path to value
            </h2>
          </div>
          <div class="mt-10 grid gap-6 md:grid-cols-3">
{render_steps(category["steps"])}
          </div>
        </div>
      </section>

      <section class="bg-white py-16 lg:py-20">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" data-reveal>
          <div class="rounded-[32px] border border-slate-200 bg-gradient-to-r from-[#0f172a] to-[#161f3b] px-8 py-10 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div class="max-w-2xl">
              <div class="text-sm font-semibold text-[#c4b5fd]">Ready to explore?</div>
              <h2 class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {escape(item["cta_title"])}
              </h2>
              <p class="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                {escape(item["cta_body"])}
              </p>
            </div>
            <div class="mt-8 flex flex-wrap gap-3 lg:mt-0 lg:justify-end">
              <a href="getintouche.html" class="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0f172a] transition hover:bg-slate-100">
                Get Started
              </a>
              <a href="contact.html" class="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Contact Sales
              </a>
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
    for item in OFFERINGS:
        (ROOT / item["file"]).write_text(build_page(item), encoding="utf-8")
    print(f"Wrote full static HTML to {len(OFFERINGS)} offering pages.")


if __name__ == "__main__":
    main()
