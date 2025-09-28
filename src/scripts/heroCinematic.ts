// src/scripts/heroCinematic.ts
const root = document.querySelector("[data-hero-root]") as HTMLElement | null;
if (root) {
  import("../components/heroCinematicMotion.ts").then(m => m.initHeroCinematic(root));
}
