// src/lib/microFX.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  try { gsap.registerPlugin(ScrollTrigger); } catch {}
}

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function normalizeArabicDigits(s: string): string {
  // Arabic-Indic ٠١٢٣٤٥٦٧٨٩ and Eastern Arabic-Indic ۰۱۲۳۴۵۶۷۸۹ → 0-9
  const map: Record<string, string> = {
    "٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9",
    "۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9",
  };
  return s.replace(/[٠-٩۰-۹]/g, (d) => map[d] ?? d);
}

function parseCountAttr(raw: string | null): number {
  if (!raw) return 0;
  let s = normalizeArabicDigits(raw.trim()).toLowerCase();
  // allow commas and spaces
  s = s.replace(/[\s,]/g, "");
  // support k/m/b suffix
  const m = s.match(/^([0-9]*\.?[0-9]+)([kmb])?$/i);
  if (m) {
    const val = parseFloat(m[1]);
    const suf = (m[2] || "").toLowerCase();
    if (suf === "k") return Math.round(val * 1_000);
    if (suf === "m") return Math.round(val * 1_000_000);
    if (suf === "b") return Math.round(val * 1_000_000_000);
    return Math.round(val);
  }
  // fallback: strip any non-digits and parse
  const digits = s.replace(/[^0-9.]/g, "");
  const n = Number(digits);
  return Number.isFinite(n) ? Math.round(n) : 0;
}

export function initScrollReveals(scope: Document | HTMLElement = document) {
  if (reduced()) return;
  const nodes = scope.querySelectorAll<HTMLElement>("[data-anim]");
  nodes.forEach((el) => {
    const type = el.getAttribute("data-anim") || "reveal";
    const base = { opacity: 0, duration: 0.6, ease: "power2.out" } as gsap.TweenVars;
    const from: Record<string, number> = {
      reveal: 18, "reveal-up": 18, "reveal-left": -24, "reveal-right": 24
    };
    const tv: gsap.TweenVars =
      type === "reveal-scale" ? { scale: 0.96, ...base }
      : type === "reveal-left" ? { x: from["reveal-left"], ...base }
      : type === "reveal-right" ? { x: from["reveal-right"], ...base }
      : { y: from["reveal"], ...base };
    gsap.from(el, {
      ...tv,
      scrollTrigger: { trigger: el, start: "top 85%", once: true }
    });
  });

  scope.querySelectorAll<HTMLElement>("[data-stagger]").forEach((parent) => {
    const children = parent.querySelectorAll<HTMLElement>("[data-anim]");
    gsap.from(children, {
      y: 16, opacity: 0, duration: 0.55, ease: "power2.out", stagger: 0.06,
      scrollTrigger: { trigger: parent, start: "top 85%", once: true },
    });
  });
}

export function initCtaFX(scope: Document | HTMLElement = document) {
  if (reduced()) return;
  scope.querySelectorAll<HTMLElement>('[data-cta="primary"]').forEach((btn) => {
    btn.addEventListener("pointermove", (e) => {
      const r = btn.getBoundingClientRect();
      btn.style.setProperty("--x", `${e.clientX - r.left}px`);
      btn.style.setProperty("--y", `${e.clientY - r.top}px`);
    });
  });
}

export function initCounters(scope: Document | HTMLElement = document) {
  const els = Array.from(scope.querySelectorAll<HTMLElement>("[data-count], .counter, .js-count"));
  if (!els.length) return;

  const toLatin = (s: string) =>
    s.replace(/[٠-٩۰-۹]/g, (d) => "٠١٢٣٤٥٦٧٨٩۰۱۲۳۴۵۶۷۸۹".indexOf(d) % 10 + "");

  const parseTarget = (raw: string | null): number => {
    if (!raw) return 0;
    let s = toLatin(raw.trim()).toLowerCase().replace(/[\s,]/g, "");
    const m = s.match(/^([0-9]*\.?[0-9]+)([kmb])?$/i);
    if (m) {
      const val = parseFloat(m[1]); const suf = (m[2] || "");
      return Math.round(val * (suf==="k"?1e3:suf==="m"?1e6:suf==="b"?1e9:1));
    }
    const n = Number(s.replace(/[^0-9.]/g, ""));
    return Number.isFinite(n) ? Math.round(n) : 0;
  };

  const isInViewport = (el: HTMLElement) => {
    const r = el.getBoundingClientRect();
    return r.top < innerHeight && r.bottom > 0;
  };

  els.forEach((el) => {
    // Idempotent: skip if already processed
    if (el.dataset.countDone === "1") return;

    const raw   = el.getAttribute("data-count") || el.getAttribute("data-target") || el.textContent || "0";
    const end   = parseTarget(raw);
    const dur   = Number(el.getAttribute("data-count-dur")) || 1.2;
    const fmt   = el.getAttribute("data-count-format") || "plain";
    const hasGS = !!(gsap && gsap.to);

    // The element already shows final SSR text; only override if we're going to animate.
    const setText = (n: number) => {
      el.textContent = (fmt === "kplus")
        ? (n >= 1e6 ? `${Math.round(n/1e6)}M+` : n >= 1e3 ? `${Math.round(n/1e3)}K+` : `${n}`)
        : n.toLocaleString();
    };

    const animate = () => {
      if (!hasGS) { 
        el.dataset.countDone = "1"; 
        return; // keep SSR final
      }
      const obj = { v: 0 };
      // Swap SSR → 0 just before anim to avoid visual jump
      setText(0);
      gsap.to(obj, {
        v: end,
        duration: dur,
        ease: "power1.out",
        onUpdate: () => setText(Math.floor(obj.v)),
        onComplete: () => { el.dataset.countDone = "1"; }
      });
    };

    // Do not early-return on prefers-reduced-motion for counters
    if (isInViewport(el)) { 
      animate(); 
      return; 
    }

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((ent) => {
          if (ent.isIntersecting && el.dataset.countDone !== "1") { 
            animate(); 
            io.unobserve(el); 
          }
        });
      }, { rootMargin: "0px 0px -20% 0px", threshold: 0.05 });
      io.observe(el);
    } else {
      // final safety: do nothing; keep SSR final
      el.dataset.countDone = "1";
    }
  });

  // safety refresh (for late layout changes)
  setTimeout(() => { try { ScrollTrigger?.refresh?.(); } catch {} }, 300);
}

let __fxBooted = false;
export function initFX(scope: Document | HTMLElement = document) {
  if (__fxBooted) return; __fxBooted = true;
  initScrollReveals(scope); 
  initCtaFX(scope); 
  initCounters(scope);
  // keep ScrollTrigger in sync with dynamic layout/visibility
  if (typeof window !== "undefined") {
    const refresh = () => { try { ScrollTrigger.refresh(); } catch {} };
    window.addEventListener("load", refresh, { once: true });
    window.addEventListener("resize", () => gsap.delayedCall(0.1, refresh));
    window.addEventListener("astro:page-load", refresh as any);
    window.addEventListener("astro:after-swap", refresh as any);
  }
}

// DEV probe (safe to keep)
if (typeof window !== "undefined" && (import.meta as any).env.DEV) {
  // @ts-ignore
  (window as any).__fx = {
    probe() {
      return {
        hasGSAP: !!(window as any).gsap,
        counters: document.querySelectorAll("[data-count]").length,
        reveals: document.querySelectorAll("[data-anim]").length,
      };
    },
  };
}