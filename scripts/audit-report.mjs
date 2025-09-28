// scripts/audit-report.mjs
import http from "node:http";
import https from "node:https";

const BASE = process.env.BASE_URL || "http://localhost:4321";
const get = (url, opts={}) => new Promise((resolve) => {
  const mod = url.startsWith("https") ? https : http;
  const req = mod.request(url, { method: "GET", headers: opts.headers || {} }, (res) => {
    let body = "";
    res.on("data", (c) => (body += c));
    res.on("end", () => resolve({ status: res.statusCode, headers: res.headers, body }));
  });
  req.on("error", (e) => resolve({ status: 0, headers: {}, body: String(e) }));
  req.end();
});

const isDev = BASE.includes('localhost');
const checks = [
  { name: "Home EN 200", url: `${BASE}/`, expect: r => r.status === 200 },
  { name: "Home AR 200", url: `${BASE}/ar/`, expect: r => r.status === 200 || r.status === 308 },
  { name: "Careers EN 200", url: `${BASE}/careers/`, expect: r => r.status === 200 || r.status === 308 },
  { name: "Careers AR 200", url: `${BASE}/ar/careers/`, expect: r => r.status === 200 || r.status === 308 },
  { name: "OG endpoint 200", url: `${BASE}/api/og?title=Toters&subtitle=Get%20anything.&lang=en`, expect: r => r.status === 200 && (r.headers["content-type"]||"").includes("image/") },
  ...(isDev ? [
    { name: "Sitemap (dev mode)", url: `${BASE}/sitemap-index.xml`, expect: r => r.status === 404 || (r.status === 200 && /<sitemapindex/i.test(r.body)) }
  ] : [
    { name: "Sitemap 200", url: `${BASE}/sitemap-index.xml`, expect: r => r.status === 200 && /<sitemapindex/i.test(r.body) },
    { name: "Sitemap XML 200", url: `${BASE}/sitemap.xml`, expect: r => r.status === 200 || [301,302,308].includes(r.status) }
  ]),
  { name: "Robots 200", url: `${BASE}/robots.txt`, expect: r => r.status === 200 && /Sitemap:/i.test(r.body) },
  { name: "Meta canonical present (EN)", url: `${BASE}/`, expect: r => /<link[^>]+rel=["']canonical["']/i.test(r.body) },
  { name: "Hreflang en/ar present", url: `${BASE}/`, expect: r => /hreflang=["']en["']/i.test(r.body) && /hreflang=["']ar["']/i.test(r.body) },
  { name: "MobileApplication JSON-LD", url: `${BASE}/`, expect: r => /"@type":"MobileApplication"/.test(r.body) },
  { name: "FAQPage JSON-LD", url: `${BASE}/faq`, expect: r => r.status===200 && /"@type":"FAQPage"/.test(r.body) },
  { name: "JobPosting JSON-LD", url: `${BASE}/careers/junior-frontend-engineer`, expect: r => r.status===200 && /"@type":"JobPosting"/.test(r.body) },
];

const redirectChecks = [
  {
    name: "Download → App Store (iOS UA)",
    url: `${BASE}/download`,
    headers: { "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1" },
    expect: r => [301,302,307,308].includes(r.status) || (r.status===200 && /app|store/i.test(r.body))
  },
  {
    name: "Download → Play (Android UA)",
    url: `${BASE}/download`,
    headers: { "User-Agent": "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Mobile Safari/537.36" },
    expect: r => [301,302,307,308].includes(r.status) || (r.status===200 && /play\.google/i.test(r.body))
  }
];

function pad(s, n) { return (s + " ".repeat(n)).slice(0, n); }

(async () => {
  const all = [...checks, ...redirectChecks];
  const results = [];
  for (const c of all) {
    const res = await get(c.url, { headers: c.headers });
    const ok = !!c.expect(res);
    results.push({ name: c.name, ok, status: res.status, location: res.headers?.location });
  }

  const width = 52;
  console.log("\n=== Final Audit Report ===");
  results.forEach(r => {
    const mark = r.ok ? "✅" : "❌";
    const extra = r.location ? ` → ${r.location}` : "";
    console.log(`${mark} ${pad(r.name, width)} [${r.status}]${extra}`);
  });

  const failed = results.filter(r => !r.ok);
  console.log("\nSummary:", failed.length ? `❌ ${failed.length} failing checks` : "✅ All checks passed");
  process.exit(failed.length ? 1 : 0);
})();
