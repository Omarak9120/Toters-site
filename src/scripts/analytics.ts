type Props = Record<string, string | number | boolean | null | undefined>;

export function consentGranted() {
  try { return localStorage.getItem("analytics_consent") === "granted"; } catch { return false; }
}

export function track(evt: string, props: Props = {}) {
  if (!import.meta.env.PROD || !consentGranted()) return;
  
  // GA4
  try {
    // @ts-ignore
    if (window.gtag) window.gtag("event", evt, props);
  } catch {}
  // Plausible
  try {
    // @ts-ignore
    if (window.plausible) window.plausible(evt, { props });
  } catch {}
}

export function wireClicks(root: Document | HTMLElement = document) {
  root.querySelectorAll<HTMLElement>("[data-track]").forEach((el) => {
    const evt = el.getAttribute("data-track")!;
    el.addEventListener("click", () => {
      const label = el.getAttribute("data-label") || el.textContent?.trim() || "";
      track(evt, { label });
    });
  });
}

export function bootAnalytics() {
  if (!import.meta.env.PROD || !consentGranted()) return;
  // wireClicks/track already exist; keep them.
  try { (window as any).__analyticsReady = true; } catch {}
}

export function initAnalyticsOnConsent() {
  window.addEventListener("consent:granted", () => { bootAnalytics(); });
}
