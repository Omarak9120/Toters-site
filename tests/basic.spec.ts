import { test, expect } from "@playwright/test";

test("home EN loads, counters SSR are non-zero, lang switch works", async ({ page }) => {
  await page.goto("http://localhost:4321/");
  
  // SSR text should not be "0"
  const texts = await page.$$eval("[data-count], .counter, .js-count", els => els.map(e => e.textContent?.trim() || ""));
  expect(texts.some(t => t && t !== "0")).toBeTruthy();

  // Switch to AR
  await page.getByRole("link", { name: /العربية/i }).click();
  await expect(page).toHaveURL(/\/ar\/?$/);

  // Arabic locale numerals should appear somewhere
  const arText = await page.textContent("body");
  expect(arText || "").toMatch(/[٠-٩]/); // at least one Arabic-Indic digit
});

test("contact form client validation", async ({ page }) => {
  await page.goto("http://localhost:4321/contact");
  await page.getByRole("button", { name: /send/i }).click();
  
  // expect an error message to appear
  const err = await page.locator("#contact-error").textContent();
  expect(err?.length).toBeGreaterThan(0);
});

test("Arabic contact page loads with RTL layout", async ({ page }) => {
  await page.goto("http://localhost:4321/ar/contact");
  
  // Check RTL direction
  const htmlDir = await page.getAttribute("html", "dir");
  expect(htmlDir).toBe("rtl");
  
  // Check Arabic text content
  const title = await page.textContent("h1");
  expect(title).toContain("تواصل معنا");
});

test("counters animate on scroll", async ({ page }) => {
  await page.goto("http://localhost:4321/");
  
  // Scroll to stats section
  await page.locator("[data-stagger]").first().scrollIntoViewIfNeeded();
  
  // Wait for animation to complete
  await page.waitForTimeout(2000);
  
  // Check that counters have animated (not showing 0)
  const counterTexts = await page.$$eval("[data-count]", els => els.map(e => e.textContent?.trim() || ""));
  expect(counterTexts.some(t => t && t !== "0" && !t.includes("0"))).toBeTruthy();
});
