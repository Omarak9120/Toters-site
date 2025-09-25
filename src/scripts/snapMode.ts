(function () {
  try {
    const qp = new URLSearchParams(location.search);
    if (qp.get("snap") !== "1") return;

    document.documentElement.dataset.snap = "1";

    const css = `
      *,:before,:after { animation: none !important; transition: none !important; }
      html { scroll-behavior: auto !important; }
      [data-anim],[data-stagger] { opacity: 1 !important; transform: none !important; }
    `;
    const s = document.createElement("style"); s.textContent = css; document.head.appendChild(s);

    // mark snapshot mode
    // @ts-ignore
    window.__SNAP__ = true;
  } catch {}
})();


