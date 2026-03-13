(() => {
  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }

  function initHeroSlider() {
    const root = document.querySelector("[data-hero-slider]");
    if (!root) return;

    const track = root.querySelector("[data-slider-track]");
    const slides = Array.from(root.querySelectorAll("[data-slide]"));
    const dots = Array.from(root.querySelectorAll("[data-dot]"));
    const prevBtn = root.querySelector("[data-prev]");
    const nextBtn = root.querySelector("[data-next]");
    const live = root.querySelector("[data-live]");

    if (!track || slides.length === 0) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const intervalMs = Number(root.getAttribute("data-interval") || "6500");
    let index = 0;
    let timer = null;
    let isPaused = false;

    const setActive = (i, reason = "") => {
      index = (i + slides.length) % slides.length;
      track.style.transform = `translateX(${-index * 100}%)`;

      slides.forEach((s, idx) => s.setAttribute("aria-hidden", String(idx !== index)));
      dots.forEach((d, idx) => {
        const active = idx === index;
        d.setAttribute("aria-current", active ? "true" : "false");
        d.classList.toggle("bg-white/80", active);
        d.classList.toggle("bg-white/30", !active);
      });

      if (live) {
        const title = slides[index].getAttribute("data-title") || `Slide ${index + 1}`;
        live.textContent = `${title}${reason ? ` — ${reason}` : ""}`;
      }
    };

    const play = () => {
      if (reduce) return;
      if (timer) window.clearInterval(timer);
      timer = window.setInterval(() => {
        if (!isPaused) setActive(index + 1);
      }, intervalMs);
    };

    const pause = () => {
      isPaused = true;
    };

    const resume = () => {
      isPaused = false;
    };

    // Buttons
    prevBtn?.addEventListener("click", () => setActive(index - 1, "previous"));
    nextBtn?.addEventListener("click", () => setActive(index + 1, "next"));

    // Dots
    dots.forEach((d) => {
      d.addEventListener("click", () => {
        const i = Number(d.getAttribute("data-dot"));
        if (!Number.isNaN(i)) setActive(clamp(i, 0, slides.length - 1), "selected");
      });
    });

    // Keyboard
    root.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") setActive(index - 1, "previous");
      if (e.key === "ArrowRight") setActive(index + 1, "next");
    });

    // Pause on hover / focus
    root.addEventListener("pointerenter", pause);
    root.addEventListener("pointerleave", resume);
    root.addEventListener("focusin", pause);
    root.addEventListener("focusout", resume);

    // Touch swipe
    let startX = 0;
    let deltaX = 0;
    let dragging = false;

    const onDown = (e) => {
      dragging = true;
      startX = e.clientX ?? (e.touches?.[0]?.clientX || 0);
      deltaX = 0;
      pause();
    };
    const onMove = (e) => {
      if (!dragging) return;
      const x = e.clientX ?? (e.touches?.[0]?.clientX || 0);
      deltaX = x - startX;
    };
    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      const threshold = 55;
      if (deltaX > threshold) setActive(index - 1, "swipe");
      else if (deltaX < -threshold) setActive(index + 1, "swipe");
      resume();
    };

    root.addEventListener("pointerdown", onDown);
    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerup", onUp);
    root.addEventListener("pointercancel", onUp);
    root.addEventListener("touchstart", onDown, { passive: true });
    root.addEventListener("touchmove", onMove, { passive: true });
    root.addEventListener("touchend", onUp);

    // Init
    setActive(0, "loaded");
    play();
  }

  document.addEventListener("DOMContentLoaded", initHeroSlider);
})();

(() => {
  const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

  function initHeroSlider() {
    const root = document.querySelector("[data-hero-slider]");
    if (!root) return;

    const slides = Array.from(root.querySelectorAll("[data-slide]"));
    const dots = Array.from(root.querySelectorAll("[data-dot]"));
    const btnPrev = root.querySelector("[data-prev]");
    const btnNext = root.querySelector("[data-next]");
    const progress = root.querySelector("[data-progress]");

    if (!slides.length) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const intervalMs = Number(root.getAttribute("data-interval") || "6500");
    let index = 0;
    let timer = null;
    let touchStartX = null;
    let touchStartY = null;

    const setActive = (i, { user = false } = {}) => {
      index = (i + slides.length) % slides.length;
      slides.forEach((s, idx) => {
        const active = idx === index;
        s.classList.toggle("is-active", active);
        s.setAttribute("aria-hidden", active ? "false" : "true");
      });
      dots.forEach((d, idx) => d.classList.toggle("is-active", idx === index));

      if (progress) {
        progress.style.transition = "none";
        progress.style.width = "0%";
        // Force reflow
        void progress.offsetWidth;
        if (!reduce) {
          progress.style.transition = `width ${intervalMs}ms linear`;
          progress.style.width = "100%";
        }
      }

      if (user) restart();
    };

    const next = (user = false) => setActive(index + 1, { user });
    const prev = (user = false) => setActive(index - 1, { user });

    const stop = () => {
      if (timer) window.clearInterval(timer);
      timer = null;
    };

    const start = () => {
      if (reduce) return;
      stop();
      timer = window.setInterval(() => next(false), intervalMs);
    };

    const restart = () => {
      start();
    };

    // Events
    btnPrev?.addEventListener("click", () => prev(true));
    btnNext?.addEventListener("click", () => next(true));

    dots.forEach((d) => {
      d.addEventListener("click", () => {
        const i = clamp(Number(d.getAttribute("data-dot") || "0"), 0, slides.length - 1);
        setActive(i, { user: true });
      });
    });

    // Pause on hover/focus
    root.addEventListener("pointerenter", stop);
    root.addEventListener("pointerleave", start);
    root.addEventListener("focusin", stop);
    root.addEventListener("focusout", start);

    // Swipe (mobile)
    root.addEventListener(
      "touchstart",
      (e) => {
        const t = e.touches?.[0];
        if (!t) return;
        touchStartX = t.clientX;
        touchStartY = t.clientY;
      },
      { passive: true }
    );
    root.addEventListener(
      "touchend",
      (e) => {
        const t = e.changedTouches?.[0];
        if (!t || touchStartX == null || touchStartY == null) return;
        const dx = t.clientX - touchStartX;
        const dy = t.clientY - touchStartY;
        touchStartX = null;
        touchStartY = null;

        if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
        if (dx < 0) next(true);
        else prev(true);
      },
      { passive: true }
    );

    // Keyboard support
    root.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") prev(true);
      if (e.key === "ArrowRight") next(true);
    });

    // Init
    setActive(0);
    start();
  }

  document.addEventListener("DOMContentLoaded", initHeroSlider);
})();

