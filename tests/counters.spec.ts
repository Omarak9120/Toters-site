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

test("careers page renders cleanly with counters", async ({ page }) => {
  await page.goto("http://localhost:4321/careers");
  
  // Check that counters exist and have numeric content
  const counters = await page.$$eval(".counter", els => els.map(el => el.textContent?.trim() || ""));
  expect(counters.length).toBeGreaterThan(0);
  expect(counters.every(t => /\d/.test(t))).toBeTruthy();
  
  // Check that no data-ssr leakage exists
  const leaks = await page.$$eval(".counter", els => els.some(el => (el.textContent || "").includes("data-ssr=")));
  expect(leaks).toBeFalsy();
});
