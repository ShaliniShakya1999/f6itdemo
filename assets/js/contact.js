(() => {
  function qs(sel) {
    return document.querySelector(sel);
  }

  function toast(message, type = "success") {
    const el = document.createElement("div");
    const isOk = type === "success";
    el.className =
      "fixed left-1/2 top-5 z-[60] -translate-x-1/2 rounded-2xl border px-4 py-3 text-sm shadow-2xl backdrop-blur " +
      (isOk
        ? "border-cyan-300/25 bg-[#070B18]/70 text-white"
        : "border-red-300/25 bg-[#070B18]/70 text-white");
    el.innerHTML = `
      <div class="flex items-start gap-3">
        <div class="mt-0.5 h-2.5 w-2.5 rounded-full ${isOk ? "bg-cyan-300" : "bg-red-300"}"></div>
        <div class="max-w-[78vw]">${message}</div>
      </div>
    `;
    document.body.appendChild(el);
    setTimeout(() => el.classList.add("opacity-0"), 2800);
    setTimeout(() => el.remove(), 3400);
  }

  function validEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
  }

  document.addEventListener("DOMContentLoaded", () => {
    const form = qs("#contactForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = qs("#name")?.value?.trim();
      const email = qs("#email")?.value?.trim();
      const company = qs("#company")?.value?.trim();
      const topic = qs("#topic")?.value;
      const message = qs("#message")?.value?.trim();

      if (!name || name.length < 2) return toast("Please enter your name.", "error");
      if (!validEmail(email)) return toast("Please enter a valid email.", "error");
      if (!topic) return toast("Please choose a topic.", "error");
      if (!message || message.length < 10) return toast("Please write a message (at least 10 characters).", "error");

      // No backend in this template. This simulates success.
      form.reset();
      toast(
        `Thanks ${name}${company ? ` (${company})` : ""}! Your message was prepared successfully. Connect this form to your backend to send emails.`
      );
    });
  });
})();

