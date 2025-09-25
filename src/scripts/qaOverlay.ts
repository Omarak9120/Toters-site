(function () {
  try {
    const q = new URLSearchParams(location.search);
    if (q.get("qa") !== "1") return;

    const css = `
      .qa-grid { position: fixed; inset: 0; pointer-events: none; z-index: 99999; }
      .qa-grid::before {
        content: ""; display: block; width: 100%; height: 100%;
        background-image: linear-gradient(to right, rgba(0,0,0,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,.06) 1px, transparent 1px);
        background-size: 64px 100%, 100% 64px;
      }
      .qa-pill {
        position: fixed; right: 12px; bottom: 12px; z-index: 100000;
        background: #111; color: #fff; font: 12px system-ui, sans-serif; padding: 8px 10px; border-radius: 10px; opacity: .9;
      }
    `;
    const style = document.createElement("style"); style.textContent = css; document.head.appendChild(style);
    const grid = document.createElement("div"); grid.className = "qa-grid"; document.body.appendChild(grid);
    const pill = document.createElement("div"); pill.className = "qa-pill";
    pill.textContent = `QA overlay on · ${document.documentElement.lang || "en"}`;
    document.body.appendChild(pill);
  } catch {}
})();


