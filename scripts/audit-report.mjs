// scripts/audit-report.mjs
import http from "node:http";
import https from "node:https";

const BASE = process.env.BASE_URL || "http://localhost:4321";
const TIMEOUT = Number(process.env.REQUEST_TIMEOUT_MS ?? 3000);

function head(url, headers = {}) {
  return new Promise((resolve) => {
    const mod = url.startsWith("https") ? https : http;
    const req = mod.request(url, { method: "HEAD", headers, timeout: TIMEOUT }, (res) => {
      res.resume(); // drain
      resolve({ status: res.statusCode, headers: res.headers });
    });
    req.on("timeout", () => { req.destroy(); resolve({ status: 0, headers: {}, timeout: true }); });
    req.on("error", () => resolve({ status: 0, headers: {} }));
    req.end();
  });
}

function get(url, headers = {}) {
  return new Promise((resolve) => {
    const mod = url.startsWith("https") ? https : http;
    const req = mod.request(url, { method: "GET", headers, timeout: TIMEOUT }, (res) => {
      let body = "";
      res.on("data", (c) => (body += c));
      res.on("end", () => resolve({ status: res.statusCode, headers: res.headers, body }));
    });
    req.on("timeout", () => { req.destroy(); resolve({ status: 0, headers: {}, timeout: true, body: "" }); });
    req.on("error", () => resolve({ status: 0, headers: {}, body: "" }));
    req.end();
  });
}

const checks = [
  { name: "Home EN 200", fn: () => head(`${BASE}/`), ok: r => r.status === 200 },
  { name: "Home AR 200", fn: () => head(`${BASE}/ar/`), ok: r => r.status === 200 || r.status === 308 },
  { name: "Careers EN 200", fn: () => head(`${BASE}/careers/`), ok: r => r.status === 200 || r.status === 308 },
  { name: "Careers AR 200", fn: () => head(`${BASE}/ar/careers/`), ok: r => r.status === 200 || r.status === 308 },
  { name: "Sitemap index 200", fn: () => head(`${BASE}/sitemap-index.xml`), ok: r => r.status === 200 },
  { name: "Robots 200", fn: () => get(`${BASE}/robots.txt`), ok: r => r.status === 200 && /Sitemap:/i.test(r.body) },
  { name: "OG endpoint 200", fn: () => head(`${BASE}/api/og?title=Toters&subtitle=Get%20anything.&lang=en`), ok: r => r.status === 200 && (r.headers["content-type"]||"").includes("image/") },
  { name: "JobPosting JSON-LD", fn: () => get(`${BASE}/careers/junior-frontend-engineer`), ok: r => r.status === 200 && /"@type":"JobPosting"/.test(r.body) },
  { name: "FAQPage JSON-LD", fn: () => get(`${BASE}/faq`), ok: r => r.status === 200 && /"@type":"FAQPage"/.test(r.body) },
  {
    name: "Download → App Store (iOS UA)",
    fn: () => head(`${BASE}/download`, { "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1" }),
    ok: r => [200,301,302,307,308].includes(r.status)
  },
  {
    name: "Download → Play (Android UA)",
    fn: () => head(`${BASE}/download`, { "User-Agent": "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Mobile Safari/537.36" }),
    ok: r => [200,301,302,307,308].includes(r.status)
  },
];

const start = Date.now();
const results = await Promise.allSettled(checks.map(async c => {
  const r = await c.fn();
  return { name: c.name, ok: Boolean(c.ok(r)), status: r.status, timeout: r.timeout };
}));

let fail = 0;
console.log("\n=== Fast Audit Report ===");
results.forEach((res, i) => {
  if (res.status === "fulfilled") {
    const { name, ok, status, timeout } = res.value;
    if (!ok) fail++;
    console.log(`${ok ? "✅" : "❌"} ${name} [${timeout ? "timeout" : status}]`);
  } else {
    fail++;
    console.log(`❌ ${checks[i].name} [error]`);
  }
});
console.log(`\nDone in ${(Date.now() - start)}ms • ${fail ? `❌ ${fail} failing` : "✅ All checks passed"}`);
process.exit(fail ? 1 : 0);