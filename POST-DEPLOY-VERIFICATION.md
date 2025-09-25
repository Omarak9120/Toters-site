# 🚀 Post-Deployment Verification Checklist

## Environment Variables Setup (Vercel)

Before deploying, set these environment variables in Vercel:

```bash
# Required for app store links
APP_STORE_URL=https://apps.apple.com/app/toters/YOUR_APP_ID
PLAY_STORE_URL=https://play.google.com/store/apps/details?id=com.toters.app

# Optional for analytics
GA_ID=G-XXXXXXXXXX
PLAUSIBLE_DOMAIN=totersapp.com
SENTRY_DSN=https://xxx@sentry.io/xxx
```

## Post-Deploy Verification Steps

### 1. Basic Functionality Tests

**Visit Production URLs:**

- [ ] `/` (English homepage) loads correctly
- [ ] `/ar/` (Arabic homepage) loads correctly
- [ ] Language switcher works (EN ↔ AR)
- [ ] All navigation links work
- [ ] Footer links work

### 2. Visual & Content Tests

**OG Images:**

- [ ] `/social/og-home-en.jpg` loads (1200x630px)
- [ ] `/social/og-home-ar.jpg` loads (1200x630px)
- [ ] Test OG previews with: https://opengraph.dev/ or https://www.opengraph.xyz/

**Assets:**

- [ ] `/logo-white.svg` displays correctly
- [ ] `/qr-code.svg` displays correctly
- [ ] All images load without 404 errors

### 3. Counter & Animation Tests

**Counters:**

- [ ] Counters show final values immediately (SSR)
- [ ] Counters animate when scrolled into view
- [ ] Animation respects `prefers-reduced-motion`
- [ ] No NaN or stuck values

**Animations:**

- [ ] Scroll reveals work on all sections
- [ ] Hero cinematic animation plays
- [ ] Hover effects work on cards and buttons

### 4. Console Tests

**Run in Browser Console:**

```javascript
// Smoke test
window.__smoke;
// Should return: {sitemap: true, robots: true, og_en: true, og_ar: true}

// Analytics status
window.__analyticsReady;
// Should return: true (if consent given)

// FX probe
window.__fx?.probe?.();
// Should return: {hasGSAP: true, counters: 8, reveals: 12}
```

**Check for Errors:**

- [ ] No CSP violations ("Blocked by CSP")
- [ ] No JavaScript errors
- [ ] No 404 errors in Network tab
- [ ] No console warnings

### 5. Analytics & Consent Tests

**Cookie Consent:**

- [ ] Banner appears on first visit
- [ ] "Accept" button works
- [ ] Banner disappears after acceptance
- [ ] Consent persists on page reload

**Analytics Events:**

- [ ] `page_view` fires on page load
- [ ] `click_appstore` fires when clicking App Store badge
- [ ] `click_playstore` fires when clicking Google Play badge
- [ ] `toggle_language` fires when switching languages
- [ ] `click_cta` fires when clicking header download button
- [ ] `view_404` fires when visiting non-existent page

### 6. App Store Links Tests

**External Links:**

- [ ] App Store badge links to real iOS app
- [ ] Google Play badge links to real Android app
- [ ] Links open in new tab (`target="_blank"`)
- [ ] Links have proper `rel="noopener noreferrer"`

### 7. Cross-Browser Tests

**Desktop:**

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

**Mobile:**

- [ ] iOS Safari
- [ ] Android Chrome
- [ ] Responsive design works on various screen sizes

### 8. Accessibility Tests

**Keyboard Navigation:**

- [ ] Tab through header navigation
- [ ] Tab through hero CTAs
- [ ] Tab through language switcher
- [ ] Focus styles visible and clear
- [ ] All interactive elements reachable

**Screen Reader:**

- [ ] All images have alt text
- [ ] Headings are properly structured
- [ ] Links have descriptive text
- [ ] Form elements have labels

### 9. Performance Tests

**Core Web Vitals:**

- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1

**Lighthouse Scores:**

- [ ] Performance ≥ 90
- [ ] Accessibility ≥ 95
- [ ] SEO ≥ 95
- [ ] Best Practices ≥ 95

## Quick Verification Script

Copy and paste this into the browser console:

```javascript
console.log("🚀 Toters Production Verification");
console.log("================================");

// 1. Smoke Test
console.log("\n📊 Smoke Test:");
if (window.__smoke) {
  console.table(window.__smoke);
  const allPassed = Object.values(window.__smoke).every((r) => r === true);
  console.log(
    allPassed ? "✅ All smoke tests passed!" : "❌ Some smoke tests failed"
  );
} else {
  console.log("❌ Smoke test not available");
}

// 2. Counters
console.log("\n🔢 Counters:");
const counters = document.querySelectorAll("[data-count], .counter, .js-count");
console.log(`Found ${counters.length} counter elements`);
counters.forEach((c, i) => {
  console.log(`Counter ${i + 1}: "${c.textContent}"`);
});

// 3. Analytics
console.log("\n📈 Analytics:");
const hasConsent = localStorage.getItem("analytics_consent") === "granted";
const hasGA = typeof window.gtag === "function";
const hasPlausible = typeof window.plausible === "function";
console.log(`Consent: ${hasConsent ? "✅" : "❌"}`);
console.log(`GA4: ${hasGA ? "✅" : "❌"}`);
console.log(`Plausible: ${hasPlausible ? "✅" : "❌"}`);

// 4. App Links
console.log("\n📱 App Store Links:");
const appLinks = document.querySelectorAll('a[data-track*="store"]');
appLinks.forEach((link) => {
  console.log(`${link.getAttribute("data-track")}: ${link.href}`);
});

console.log("\n🎉 Verification complete!");
```

## Success Criteria

✅ **Ready to Ship When:**

- All smoke tests pass (`window.__smoke` all true)
- Counters show SSR values and animate
- No CSP violations in console
- App store links work correctly
- Analytics events fire after consent
- Cross-browser compatibility confirmed
- Accessibility keyboard navigation works
- Performance scores meet targets

🎉 **Ship it!** The Toters marketing site is production-ready!
