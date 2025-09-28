// scripts/which-pages-are-static.mjs
import fs from "node:fs";
import path from "node:path";

const distClient = "dist/client";

function checkStaticPage(pagePath) {
  const fullPath = path.join(distClient, pagePath);
  const exists = fs.existsSync(fullPath);
  console.log(`${exists ? "✅" : "❌"} ${pagePath}`);
  return exists;
}

console.log("=== Static Pages Check ===");

const staticPages = [
  "index.html",
  "ar/index.html", 
  "about/index.html",
  "customers/index.html",
  "partners/index.html",
  "couriers/index.html",
  "faq/index.html",
  "ar/faq/index.html",
  "careers/index.html",
  "ar/careers/index.html",
  "careers/junior-frontend-engineer/index.html",
  "careers/senior-backend-engineer/index.html", 
  "careers/product-manager/index.html",
  "ar/careers/junior-frontend-engineer/index.html",
  "ar/careers/senior-backend-engineer/index.html",
  "ar/careers/product-manager/index.html"
];

const results = staticPages.map(checkStaticPage);
const allExist = results.every(Boolean);

console.log(`\nSummary: ${allExist ? "✅ All static pages exist" : "❌ Some pages missing"}`);

if (!allExist) {
  console.log("\nMissing pages:");
  staticPages.forEach((page, i) => {
    if (!results[i]) console.log(`  - ${page}`);
  });
  process.exit(1);
}

console.log("\n✅ All pages are properly prerendered!");
process.exit(0);
