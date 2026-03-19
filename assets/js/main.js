(() => {
  function initAccordions() {
    const triggers = Array.from(document.querySelectorAll("[data-accordion-trigger]"));
    if (!triggers.length) return;

    const setOpen = (id, open) => {
      const trigger = document.querySelector(`[data-accordion-trigger="${id}"]`);
      const panel = document.querySelector(`[data-accordion-panel="${id}"]`);
      if (!trigger || !panel) return;
      trigger.setAttribute("aria-expanded", String(open));
      panel.classList.toggle("hidden", !open);
    };

    triggers.forEach((t) => {
      const id = t.getAttribute("data-accordion-trigger");
      t.addEventListener("click", () => {
        const isOpen = t.getAttribute("aria-expanded") === "true";
        setOpen(id, !isOpen);
      });
    });

    // Default: keep all closed
    triggers.forEach((t) => t.setAttribute("aria-expanded", "false"));
  }

  function initMobileMenu() {
    const btn = document.getElementById("mobileMenuBtn");
    const menu = document.getElementById("mobileMenu");
    if (!btn || !menu) return;

    const setOpen = (open) => {
      btn.setAttribute("aria-expanded", String(open));
      menu.classList.toggle("hidden", !open);
    };

    btn.addEventListener("click", () => {
      const isOpen = btn.getAttribute("aria-expanded") === "true";
      setOpen(!isOpen);
    });

    // Close when navigating
    menu.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (a) setOpen(false);
    });

    // Close on escape
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });
  }

  function initMegaMenu() {
    const triggers = Array.from(document.querySelectorAll("[data-mega-trigger]"));
    const panels = Array.from(document.querySelectorAll("[data-mega-panel]"));
    if (!triggers.length || !panels.length) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const openClass = reduce ? "" : "animate-[f6itMegaIn_.14s_ease-out]";
    const backdropId = "megaBackdrop";

    const ensureBackdrop = () => {
      let el = document.getElementById(backdropId);
      if (el) return el;
      el = document.createElement("div");
      el.id = backdropId;
      el.className = "mega-backdrop hidden";
      document.body.appendChild(el);
      return el;
    };
    const backdrop = ensureBackdrop();

    const setBackdrop = (open) => {
      backdrop.classList.toggle("hidden", !open);
      document.body.classList.toggle("overflow-hidden", open);
    };

    const closeAll = () => {
      triggers.forEach((t) => t.setAttribute("aria-expanded", "false"));
      panels.forEach((p) => {
        p.classList.add("hidden");
        p.style.left = "";
        p.style.transform = "";
      });
      setBackdrop(false);
    };

    const positionPanelUnderTrigger = (trigger, panel) => {
      const container = panel.parentElement;
      if (!container) return;
      const triggerRect = trigger.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const panelRect = panel.getBoundingClientRect();
      let left = triggerRect.left - containerRect.left;
      const maxLeft = containerRect.width - panelRect.width;
      left = Math.max(0, Math.min(left, maxLeft));
      panel.style.left = left + "px";
      panel.style.transform = "translateY(0)";
    };

    const open = (key) => {
      closeAll();
      const t = document.querySelector(`[data-mega-trigger="${key}"]`);
      const p = document.querySelector(`[data-mega-panel="${key}"]`);
      if (!t || !p) return;
      t.setAttribute("aria-expanded", "true");
      p.classList.remove("hidden");
      if (openClass) p.classList.add(openClass);
      window.setTimeout(() => p.classList.remove(openClass), 200);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => positionPanelUnderTrigger(t, p));
      });
      setBackdrop(true);
    };

    const isOpen = (key) => document.querySelector(`[data-mega-trigger="${key}"]`)?.getAttribute("aria-expanded") === "true";

    const HOVER_CLOSE_DELAY = 120;
    const productsTrigger = document.querySelector('[data-mega-trigger="products"]');
    const productsPanel = document.querySelector('[data-mega-panel="products"]');
    if (productsTrigger && productsPanel) {
      let hoverCloseTimer = null;
      const cancelHoverClose = () => {
        if (hoverCloseTimer) clearTimeout(hoverCloseTimer);
        hoverCloseTimer = null;
      };
      const scheduleHoverClose = () => {
        cancelHoverClose();
        hoverCloseTimer = setTimeout(() => {
          if (isOpen("products")) closeAll();
          hoverCloseTimer = null;
        }, HOVER_CLOSE_DELAY);
      };
      productsTrigger.addEventListener("mouseenter", () => {
        cancelHoverClose();
        if (!isOpen("products")) open("products");
      });
      productsTrigger.addEventListener("mouseleave", scheduleHoverClose);
      const panelCard = productsPanel.querySelector(".megamenu-products");
      if (panelCard) {
        panelCard.addEventListener("mouseenter", cancelHoverClose);
        panelCard.addEventListener("mouseleave", scheduleHoverClose);
      }
      productsTrigger.addEventListener("click", (e) => {
        e.preventDefault();
        if (isOpen("products")) closeAll();
      });
    }

    triggers.forEach((t) => {
      const key = t.getAttribute("data-mega-trigger");
      if (key === "products") return;
      t.addEventListener("click", (e) => {
        e.preventDefault();
        if (isOpen(key)) closeAll();
        else open(key);
      });
    });

    backdrop.addEventListener("click", closeAll);

    // Close on outside click / escape
    document.addEventListener("click", (e) => {
      const inside = e.target.closest("[data-mega-trigger], [data-mega-panel]");
      if (!inside) closeAll();
    });
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeAll();
    });
  }

  function initReveal() {
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!els.length) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = Number(el.getAttribute("data-reveal-delay") || "0");
            if (delay) el.style.transitionDelay = `${delay}ms`;
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => io.observe(el));
  }

  function initSmoothAnchorOffset() {
    // For sticky header offset when using in-page anchors
    const header = document.querySelector("header.sticky");
    if (!header) return;
    const h = header.getBoundingClientRect().height || 64;
    document.documentElement.style.scrollPaddingTop = `${h + 12}px`;
  }

  function initCountUp() {
    const nodes = Array.from(document.querySelectorAll("[data-countup]"));
    if (!nodes.length) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const format = (n) => {
      try {
        return new Intl.NumberFormat(undefined).format(n);
      } catch {
        return String(n);
      }
    };

    const animate = (el) => {
      const to = Number(el.getAttribute("data-to") || "0");
      const suffix = el.getAttribute("data-suffix") || "";
      const duration = Math.min(1400, Math.max(700, to > 1000 ? 1200 : 900));

      if (reduce) {
        el.textContent = format(to) + suffix;
        return;
      }

      const start = performance.now();
      const from = 0;

      const step = (t) => {
        const p = Math.min(1, (t - start) / duration);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Math.round(from + (to - from) * eased);
        el.textContent = format(val) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    const seen = new WeakSet();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target;
          if (seen.has(el)) continue;
          seen.add(el);
          animate(el);
          io.unobserve(el);
        }
      },
      { threshold: 0.35 }
    );

    nodes.forEach((n) => io.observe(n));
  }

  function initStatsCardHover() {
    const cards = Array.from(document.querySelectorAll(".stats-card"));
    if (!cards.length) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) return;

    cards.forEach((card) => {
      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        const rx = (0.5 - py) * 4; // -2..2
        const ry = (px - 0.5) * 5; // -2.5..2.5
        card.style.transform = `translateY(-6px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      };

      const onLeave = () => {
        card.style.transform = "";
      };

      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    window.F6ITComponents?.mount?.();
    initMobileMenu();
    initAccordions();
    initMegaMenu();
    initReveal();
    initCountUp();
    initStatsCardHover();
    initSmoothAnchorOffset();
  });
})();

