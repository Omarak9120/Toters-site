import { test, expect } from "@playwright/test";

test("native app meta present when envs set", async ({ page }) => {
  await page.goto("http://localhost:4321/");
  const apple = await page.getAttribute('meta[name="apple-itunes-app"]', 'content');
  const play  = await page.getAttribute('meta[name="google-play-app"]', 'content');
  expect(apple || "").toMatch(/app-id=\d+/); // iOS
  expect(play  || "").toMatch(/app-id=[a-z0-9_.-]+/i); // Android
});

test("MobileApplication JSON-LD exists", async ({ page }) => {
  await page.goto("http://localhost:4321/");
  const jsonLd = await page.$$eval('script[type="application/ld+json"]', els =>
    els.map(e => e.textContent || "").join("\n")
  );
  expect(jsonLd).toMatch(/"@type":"MobileApplication"/);
});
