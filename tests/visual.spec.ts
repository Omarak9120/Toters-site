import { test, expect } from "@playwright/test";

test.use({ viewport: { width: 1280, height: 900 } });

const pages = [
  { path: "/",           name: "home-en" },
  { path: "/ar/",        name: "home-ar" },
  { path: "/careers",    name: "careers-en" },
  { path: "/ar/careers", name: "careers-ar" },
  { path: "/faq",        name: "faq-en" },
  { path: "/ar/faq",     name: "faq-ar" },
];

for (const p of pages) {
  test(`visual: ${p.name}`, async ({ page }) => {
    await page.goto(`http://localhost:4321${p.path}?snap=1`, { waitUntil: "networkidle" });
    await expect(page).toHaveScreenshot(`${p.name}.png`, { fullPage: true, animations: "disabled" });
  });
}
