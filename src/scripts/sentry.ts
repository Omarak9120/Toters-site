export function bootSentry() {
  if (!import.meta.env.PROD) return;
  if (!localStorage || localStorage.getItem("analytics_consent") !== "granted") return;
  const DSN = import.meta.env.SENTRY_DSN;
  if (!DSN) return;
  import("@sentry/browser").then(Sentry => {
    Sentry.init({ dsn: DSN, tracesSampleRate: 0.1, ignoreErrors: [/ResizeObserver/i] });
  }).catch(()=>{});
}
