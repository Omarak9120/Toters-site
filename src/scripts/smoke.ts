async function ping(url: string) {
  try { const r = await fetch(url, { method: "GET", cache: "no-store" }); return r.ok; } catch { return false; }
}

async function run() {
  const checks = {
    sitemap: await ping("/sitemap.xml"),
    robots: await ping("/robots.txt"),
    og_en: await ping("/social/og-home-en.jpg"),
    og_ar: await ping("/social/og-home-ar.jpg")
  };
  // surface minimally without polluting console
  (window as any).__smoke = checks;
}
if (import.meta.env.PROD) {
  if (document.readyState !== "loading") run();
  else document.addEventListener("DOMContentLoaded", run);
}
