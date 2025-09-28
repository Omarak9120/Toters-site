import { test, expect } from "@playwright/test";

test("no data-ssr leakage and counters have numeric text", async ({ page }) => {
  await page.goto("http://localhost:4321/");
  const leaks = await page.$$eval(".counter", els => els.some(el => (el.textContent || "").includes("data-ssr=")));
  expect(leaks).toBeFalsy();

  const texts = await page.$$eval(".counter", els => els.map(el => el.textContent?.trim() || ""));
  expect(texts.length).toBeGreaterThan(0);
  expect(texts.every(t => /\d/.test(t))).toBeTruthy();
});

test("Arabic counters show Arabic-Indic digits", async ({ page }) => {
  await page.goto("http://localhost:4321/ar/");
  
  // Check that Arabic-Indic digits appear in counter text
  const texts = await page.$$eval(".counter", els => els.map(el => el.textContent?.trim() || ""));
  const hasArabicDigits = texts.some(t => /[٠-٩]/.test(t));
  expect(hasArabicDigits).toBeTruthy();
});

test("careers page renders cleanly", async ({ page }) => {
  await page.goto("http://localhost:4321/careers");
  
  // Check that the page loads without errors
  await expect(page.getByRole("heading", { name: /Open Roles/i })).toBeVisible();
  
  // Check that no data-ssr leakage exists anywhere on the page
  const leaks = await page.$$eval("*", els => els.some(el => (el.textContent || "").includes("data-ssr=")));
  expect(leaks).toBeFalsy();
});
