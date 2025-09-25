import { test, expect } from "@playwright/test";

test("OG endpoint returns an image", async ({ request }) => {
  const res = await request.get("http://localhost:4321/api/og?title=Test&subtitle=Hello&lang=en");
  expect(res.status()).toBe(200);
  const ct = res.headers()["content-type"] || "";
  expect(ct.includes("image/")).toBeTruthy();
});

test("Base.astro uses dynamic OG url", async ({ page }) => {
  await page.goto("http://localhost:4321/");
  const og = await page.getAttribute('meta[property="og:image"]', "content");
  expect(og).toMatch(/\/api\/og\?/);
});
