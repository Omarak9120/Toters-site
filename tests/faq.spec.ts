import { test, expect } from "@playwright/test";

test("FAQ page renders and has JSON-LD", async ({ page }) => {
  await page.goto("http://localhost:4321/faq");
  await expect(page.getByRole("heading", { name: /Help & FAQ/i })).toBeVisible();
  const ld = await page.$$eval('script[type="application/ld+json"]', els => els.map(e => e.textContent || "").join("\n"));
  expect(ld).toMatch(/"@type":"FAQPage"/);
  // open first item
  await page.locator("details").first().click();
  await expect(page.locator("details").first()).toHaveAttribute("open", "");
});

test("Arabic FAQ renders RTL", async ({ page }) => {
  await page.goto("http://localhost:4321/ar/faq");
  await expect(page.getByRole("heading", { name: /الدعم/ })).toBeVisible();
  const dir = await page.evaluate(() => document.documentElement.getAttribute("dir"));
  expect(dir).toBe("rtl");
});
