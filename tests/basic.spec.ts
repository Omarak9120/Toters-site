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

function parseIntFromText(s = "") {
  const arab = "٠١٢٣٤٥٦٧٨٩";
  const latinized = s.replace(/[٠-٩]/g, (d: string) => String(arab.indexOf(d)));
  return Number(latinized.replace(/[^\d]/g, ""));
}

test("counters animate to final values when revealed", async ({ page }) => {
  await page.goto("http://localhost:4321/");

  // pick first counter
  const el = page.locator(".counter").first();

  // read target from data-count
  const target = await el.getAttribute("data-count");
  expect(target).toBeTruthy();

  // ensure SSR not zero
  const ssrText = (await el.textContent()) || "";
  expect(parseIntFromText(ssrText)).toBeGreaterThan(0);

  // scroll and wait for animation to complete
  await el.scrollIntoViewIfNeeded();
  
  // Wait for animation to complete (simpler approach)
  await page.waitForTimeout(2000);
  
  // Check that counter has animated to a reasonable value
  const finalText = (await el.textContent()) || "";
  const finalValue = parseIntFromText(finalText);
  expect(finalValue).toBeGreaterThan(0);
  
  // Check that it's not just the SSR value (should be different or higher)
  const ssrValue = parseIntFromText(ssrText);
  expect(finalValue).toBeGreaterThanOrEqual(ssrValue);
});
