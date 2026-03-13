(() => {
  const products = [
    "Core Banking Solutions",
    "Switching Solution",
    "Core Insurance Solutions",
    "Anti-Money Laundering",
    "Loan Management System",
    "Credit & Recovery Monitoring System",
    "Document Management System",
    "E-Procurement",
    "Campus Software",
    "E-Commerce",
    "Fund Management",
    "Day End-MIS",
    "ERP",
    "LMS",
    "Microfinance Solutions",
    "Agent Solutions",
    "Asset Liability Management",
    "Legal Recovery Management",
    "Legal Recovery System",
    "NPA/Overdue Management",
    "E-Auction",
    "eAudit",
    "E-Learning",
    "Hospital Management System",
    "Performance Management",
    "DSS",
    "Audit & Inspection",
    "Online Bus Booking",
    "Queue Management",
    "Forex & Treasury Banking",
    "ATM Solutions",
    "Loan Originating System",
    "Risk Base Internal Management",
    "Debt Collection Management",
    "E-serve",
    "MyOffice",
    "HRMS",
    "CRM",
    "Telecom Revenue Management",
    "Ratio Analysis/Budgeting",
    "Payroll",
    "RMS",
    "Virtual Banking",
    "USSD Banking",
    "Recovery Management",
    "Loan Operating System",
    "Fixed Asset Management",
    "E-Governance",
    "ERDMS",
    "WhatsApp Solutions",
    "EBPAS",
    "Project Management System",
    "Business Intelligence",
    "MIS",
    "Taxi Management",
  ];

  const services = [
    "BlockChain",
    "Augmented Reality",
    "IT Auditing & ISO Auditing",
    "Open Source Solutions",
    "Artificial Intelligence",
    "Machine Learning",
    "Business Leadership Acceleration Program",
    "MS Dynamic",
    "Strategy & Architecture",
    "Internet Of Things",
    "Virtual Reality",
    "IT Infrastructure",
    "Cyber Insurance & Cyber Security",
    "Business Intelligence",
    "Robotics",
    "Business Consulting & Project Management",
    "Big Data & Analytics",
    "Business Transformation",
    "Metaverse",
    "Cloud System (AWS & Azure)",
    "Enterprise Security",
    "Natural Language Processing",
    "Web & Mobile App Development",
    "SAP",
    "Digital Transformation",
    "Enterprises Process & Application",
  ];

  function renderCheckboxes(list, namePrefix, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const idFor = (label) => namePrefix + "-" + label.replace(/\s+/g, "-").replace(/[&\/]/g, "");
    container.innerHTML = list
      .map(
        (label) => `
        <label class="flex items-center gap-2 cursor-pointer text-sm text-slate-700 hover:text-[#0f172a]">
          <input type="checkbox" name="${namePrefix}[]" value="${label.replace(/"/g, "&quot;")}" class="h-4 w-4 rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB]"/>
          <span>${label}</span>
        </label>
      `
      )
      .join("");
  }

  function initForm() {
    renderCheckboxes(products, "products", "productsList");
    renderCheckboxes(services, "services", "servicesList");

    const form = document.getElementById("getInTouchForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const payload = {
        name: data.get("name"),
        email: data.get("email"),
        mobile: data.get("mobile"),
        country: data.get("country") || "",
        products: data.getAll("products[]"),
        services: data.getAll("services[]"),
      };
      console.log("Get in touch submit:", payload);
      alert("Thank you! We will get back to you soon. (Form is not connected to a backend yet.)");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initForm);
  } else {
    initForm();
  }
})();
