import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

if (typeof window !== "undefined") {
  try { 
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin); 
  } catch (e) {
    console.warn("GSAP plugin registration failed:", e);
  }
}

export function initHeroCinematic(root: HTMLElement) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;

  const tl = gsap.timeline({ defaults: { duration: 0.9, ease: "power3.out" } });

  const title = root.querySelector('[data-hero="title"]');
  const sub = root.querySelector('[data-hero="sub"]');
  const ctas = root.querySelectorAll('[data-hero="cta"]');
  const svg = root.querySelector<SVGSVGElement>("#route-svg");
  const path = root.querySelector<SVGPathElement>("#route-path");
  const courier = root.querySelector<SVGElement>("#courier");

  tl.from(title, { y: 30, opacity: 0 })
    .from(sub, { y: 20, opacity: 0 }, "-=0.5")
    .from(ctas, { y: 16, opacity: 0, stagger: 0.08 }, "-=0.5")
    .from(svg, { opacity: 0, scale: 0.96 }, "-=0.4");

  if (path && courier) {
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    tl.to(path, { strokeDashoffset: 0, duration: 1.4, ease: "power2.inOut" }, "-=0.2")
      .to(courier, {
        duration: 1.6,
        ease: "none",
        motionPath: {
          path,
          align: path,
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
          start: 0.02,
          end: 1
        }
      }, "-=1.2");
  }

  // soft idle float on mini-cards
  gsap.to(root.querySelectorAll("[data-float]"), {
    y: (i) => (i % 2 ? -8 : 8),
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  // tiny parallax on the visual block
  const visual = root.querySelector<HTMLElement>("[data-visual]");
  if (visual) {
    const qx = gsap.quickTo(visual, "x", { duration: 0.4, ease: "power2.out" });
    const qy = gsap.quickTo(visual, "y", { duration: 0.4, ease: "power2.out" });
    root.addEventListener("pointermove", (e) => {
      const r = (root as HTMLElement).getBoundingClientRect();
      const rx = (e.clientX - r.left) / r.width - 0.5;
      const ry = (e.clientY - r.top) / r.height - 0.5;
      qx(rx * 8);
      qy(ry * 8);
    });
  }
}
