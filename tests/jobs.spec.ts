import { test, expect } from "@playwright/test";

test("careers list renders and links work (EN)", async ({ page }) => {
  await page.goto("/careers/?snap=1");
  await expect(page.getByRole("heading", { name: /Open Roles/i })).toBeVisible();
  
  const first = page.locator(".card").first();
  const href = await first.getAttribute("href");
  expect(href).toMatch(/^\/careers\//);
  
  await first.click();
  await expect(page).toHaveURL(/\/careers\//);
  await expect(page.getByRole("heading")).toBeVisible();
  await expect(page.getByRole("button", { name: /apply/i })).toBeVisible();
});

test("careers list renders and links work (AR)", async ({ page }) => {
  await page.goto("/ar/careers/?snap=1");
  await expect(page.getByRole("heading", { name: /الوظائف/ })).toBeVisible();
  
  const first = page.locator(".card").first();
  await first.click();
  await expect(page).toHaveURL(/\/ar\/careers\//);
  
  const dir = await page.evaluate(() => document.documentElement.getAttribute("dir"));
  expect(dir).toBe("rtl");
});

test("job detail includes JobPosting JSON-LD", async ({ page }) => {
  await page.goto("/careers/junior-frontend-engineer?snap=1");
  
  const ld = await page.$$eval('script[type="application/ld+json"]', els => 
    els.map(e => e.textContent || "").join("\n")
  );
  expect(ld).toMatch(/"@type":"JobPosting"/);
});

test("job detail has proper structure and content", async ({ page }) => {
  await page.goto("/careers/junior-frontend-engineer?snap=1");
  
  // Check main heading
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  
  // Check sections exist
  await expect(page.getByRole("heading", { name: /Description/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Responsibilities/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Requirements/i })).toBeVisible();
  
  // Check apply button
  const applyBtn = page.getByRole("button", { name: /Apply via Email/i });
  await expect(applyBtn).toBeVisible();
  
  // Check mailto link
  const href = await applyBtn.getAttribute("href");
  expect(href).toMatch(/^mailto:/);
});

test("Arabic job detail renders correctly", async ({ page }) => {
  await page.goto("/ar/careers/junior-frontend-engineer?snap=1");
  
  // Check RTL direction
  const dir = await page.evaluate(() => document.documentElement.getAttribute("dir"));
  expect(dir).toBe("rtl");
  
  // Check Arabic headings
  await expect(page.getByRole("heading", { name: /الوصف/ })).toBeVisible();
  await expect(page.getByRole("heading", { name: /المسؤوليات/ })).toBeVisible();
  await expect(page.getByRole("heading", { name: /المتطلبات/ })).toBeVisible();
  
  // Check Arabic apply button
  await expect(page.getByRole("button", { name: /التقديم عبر البريد/ })).toBeVisible();
});

test("back link works from job detail", async ({ page }) => {
  await page.goto("/careers/junior-frontend-engineer?snap=1");
  
  const backLink = page.getByRole("link", { name: /Back/i });
  await expect(backLink).toBeVisible();
  
  await backLink.click();
  await expect(page).toHaveURL("/careers/");
});
