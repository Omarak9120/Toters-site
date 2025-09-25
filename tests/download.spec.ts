import { test, expect } from "@playwright/test";

test("download endpoint responds (iOS)", async ({ request }) => {
  const res = await request.get("http://localhost:4321/download", {
    headers: { "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0)" }
  });
  // Accept both redirect (302) and static page (200) responses
  expect([200, 302, 307, 308]).toContain(res.status());
  // If it's a redirect, check location header
  if ([302, 307, 308].includes(res.status())) {
    const loc = res.headers()["location"] || "";
    expect(loc.length).toBeGreaterThan(0);
  }
});

test("download endpoint responds (Android)", async ({ request }) => {
  const res = await request.get("http://localhost:4321/download", {
    headers: { "User-Agent": "Mozilla/5.0 (Linux; Android 13)" }
  });
  // Accept both redirect (302) and static page (200) responses
  expect([200, 302, 307, 308]).toContain(res.status());
  // If it's a redirect, check location header
  if ([302, 307, 308].includes(res.status())) {
    const loc = res.headers()["location"] || "";
    expect(loc.length).toBeGreaterThan(0);
  }
});

test("counters are numeric (no attribute leakage)", async ({ page }) => {
  await page.goto("http://localhost:4321/");
  const leaks = await page.$$eval(".counter", els => els.some(el => (el.textContent || "").includes("data-ssr=")));
  expect(leaks).toBeFalsy();
  const texts = await page.$$eval(".counter", els => els.map(e => e.textContent?.trim() || ""));
  expect(texts.every(t => /\d/.test(t))).toBeTruthy();
});