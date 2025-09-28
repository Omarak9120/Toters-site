import { test, expect } from "@playwright/test";

test("careers list renders and links work (EN)", async ({ page }) => {
  await page.goto("/careers/");
  await page.waitForLoadState('networkidle');
  
  // Debug: Check page content
  const content = await page.content();
  console.log("Page contains jobs-list:", content.includes('data-testid="jobs-list"'));
  console.log("Page contains job-card:", content.includes('data-testid="job-card"'));
  
  // Check if elements exist in DOM
  const jobsList = page.locator('[data-testid="jobs-list"]');
  await expect(jobsList).toHaveCount(1);
  await expect(jobsList).toBeVisible();

  const first = page.locator('[data-testid="job-card"]').first();
  await expect(first).toBeVisible();

  const slug = await first.getAttribute("data-slug");
  expect(slug).toBeTruthy();

  await first.click();
  await expect(page).toHaveURL(new RegExp(`/careers/${slug}$`));
  await expect(page.locator('[data-testid="job-detail"]')).toBeVisible();
  await expect(page.locator('[data-testid="apply-link"]')).toBeVisible();
});

test("careers list renders and links work (AR)", async ({ page }) => {
  await page.goto("/ar/careers/?snap=1");
  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[data-testid="jobs-list"]');
  await expect(page.locator('[data-testid="jobs-list"]')).toBeVisible();

  const first = page.locator('[data-testid="job-card"]').first();
  await first.click();

  await expect(page).toHaveURL(/\/ar\/careers\//);
  const dir = await page.evaluate(() => document.documentElement.getAttribute("dir"));
  expect(dir).toBe("rtl");
  await expect(page.locator('[data-testid="job-detail"]')).toBeVisible();
});

test("job detail includes JobPosting JSON-LD", async ({ page }) => {
  await page.goto("/careers/junior-frontend-engineer?snap=1");
  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[data-testid="job-detail"]');
  await expect(page.locator('[data-testid="job-detail"]')).toBeVisible();
  const ld = await page.$$eval('script[type="application/ld+json"]', els => 
    els.map(e => e.textContent || "").join("\n")
  );
  expect(ld).toMatch(/"@type":"JobPosting"/);
});

test("job detail has proper structure and content", async ({ page }) => {
  await page.goto("/careers/junior-frontend-engineer?snap=1");
  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[data-testid="job-detail"]');
  
  // Check job detail container
  await expect(page.locator('[data-testid="job-detail"]')).toBeVisible();
  
  // Check main heading
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  
  // Check sections exist
  await expect(page.getByRole("heading", { name: /Description/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Responsibilities/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Requirements/i })).toBeVisible();
  
  // Check apply button
  const applyBtn = page.locator('[data-testid="apply-link"]');
  await expect(applyBtn).toBeVisible();
  
  // Check mailto link
  const href = await applyBtn.getAttribute("href");
  expect(href).toMatch(/^mailto:/);
});

test("Arabic job detail renders correctly", async ({ page }) => {
  await page.goto("/ar/careers/junior-frontend-engineer?snap=1");
  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[data-testid="job-detail"]');
  
  // Check job detail container
  await expect(page.locator('[data-testid="job-detail"]')).toBeVisible();
  
  // Check RTL direction
  const dir = await page.evaluate(() => document.documentElement.getAttribute("dir"));
  expect(dir).toBe("rtl");
  
  // Check Arabic headings
  await expect(page.getByRole("heading", { name: /الوصف/ })).toBeVisible();
  await expect(page.getByRole("heading", { name: /المسؤوليات/ })).toBeVisible();
  await expect(page.getByRole("heading", { name: /المتطلبات/ })).toBeVisible();
  
  // Check Arabic apply button
  await expect(page.locator('[data-testid="apply-link"]')).toBeVisible();
});

test("back link works from job detail", async ({ page }) => {
  await page.goto("/careers/junior-frontend-engineer?snap=1");
  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[data-testid="job-detail"]');
  
  // Check job detail container
  await expect(page.locator('[data-testid="job-detail"]')).toBeVisible();
  
  const backLink = page.getByRole("link", { name: /Back/i });
  await expect(backLink).toBeVisible();
  
  await backLink.click();
  await expect(page).toHaveURL("/careers/");
});
