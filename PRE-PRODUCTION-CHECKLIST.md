# 🚀 Pre-Production Checklist - Toters Marketing Site

## ⚠️ CRITICAL: Must-Fix Before Production

### 1. Replace Placeholder Assets

- [ ] **OG Images**: Replace `/social/og-home-en.jpg` and `/social/og-home-ar.jpg` with real branded images

  - Current: Placeholder files
  - Needed: 1200x630px images with Toters branding, app screenshots, or hero visuals
  - Should include: Logo, tagline, app mockup, or key visual elements

- [ ] **Logo Assets**: Replace placeholder logos with real Toters branding

  - `/logo.jpg` - Main logo (currently placeholder)
  - `/logo-white.svg` - White version for dark backgrounds
  - Ensure proper sizing and quality

- [ ] **QR Code**: Replace `/qr-code.svg` with real QR code
  - Should link to app download page or direct app store links
  - Ensure it's scannable and properly sized

### 2. Real App Store Links

- [ ] **App Store URL**: Update `appStoreUrl` in pages to real Toters iOS app link

  - Current: `"https://apps.apple.com/"`
  - Needed: Actual Toters app URL (e.g., `"https://apps.apple.com/app/toters/id123456789"`)

- [ ] **Google Play URL**: Update `playStoreUrl` in pages to real Toters Android app link
  - Current: `"https://play.google.com/store/apps/details"`
  - Needed: Actual Toters app URL (e.g., `"https://play.google.com/store/apps/details?id=com.toters.app"`)

### 3. Environment Variables Setup

- [ ] **Analytics IDs**: Add to Vercel environment variables
  - `GA_ID` - Google Analytics 4 measurement ID
  - `PLAUSIBLE_DOMAIN` - Plausible analytics domain
  - `SENTRY_DSN` - Sentry error monitoring DSN (optional)

## 🧪 Production Testing Checklist

### 4. Core Functionality Tests

- [ ] **Homepage (EN)**: Visit `/`

  - Counters show final values immediately (SSR)
  - Counters animate when scrolled into view
  - Language switcher works (EN ↔ AR)
  - All sections render properly

- [ ] **Homepage (AR)**: Visit `/ar/`

  - RTL layout displays correctly
  - Arabic text renders properly
  - Counters work in Arabic
  - Language switcher works

- [ ] **Console Smoke Test**: Run `window.__smoke` in browser console
  - `sitemap: true`
  - `robots: true`
  - `og_en: true`
  - `og_ar: true`

### 5. Analytics & Consent Testing

- [ ] **Cookie Banner**: Accept cookies

  - Banner disappears
  - Analytics events fire (check GA4/Plausible)
  - Sentry initializes (if DSN provided)

- [ ] **Analytics Events**: Verify these events fire
  - `page_view` (with path and lang)
  - `click_appstore` (when clicking App Store badge)
  - `click_playstore` (when clicking Google Play badge)
  - `toggle_language` (when switching languages)
  - `click_cta` (when clicking header download button)
  - `view_404` (when visiting non-existent page)

### 6. Security & Performance

- [ ] **CSP Headers**: Check browser console for CSP violations

  - No "Blocked by CSP" messages
  - OG images load properly
  - Analytics scripts load
  - GSAP animations work

- [ ] **Security Headers**: Verify in browser dev tools
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: SAMEORIGIN`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy` present

### 7. Cross-Browser Testing

- [ ] **Desktop Browsers**

  - Chrome (latest)
  - Firefox (latest)
  - Safari (latest)
  - Edge (latest)

- [ ] **Mobile Browsers**
  - iOS Safari
  - Android Chrome
  - Test responsive design on various screen sizes

### 8. Accessibility Testing

- [ ] **Keyboard Navigation**: Tab through the site

  - Header navigation links
  - Hero CTAs (App Store/Play Store buttons)
  - Language switcher
  - Footer links
  - Focus styles visible and clear

- [ ] **Screen Reader**: Test with browser screen reader
  - All images have alt text
  - Headings are properly structured
  - Links have descriptive text

## 🎯 Post-Launch Nice-to-Haves

### 9. Analytics & Monitoring

- [ ] **Legacy Redirects**: Add to `vercel.json` based on 404 analytics

  - Monitor analytics for 404 errors
  - Add redirects for common misspellings or old URLs

- [ ] **Uptime Monitoring**: Set up alerts
  - Vercel uptime checks
  - Sentry error alert rules
  - Performance monitoring

### 10. Content & Pages

- [ ] **Careers Page**: Add `/careers` and `/ar/careers`

  - Job listings
  - Company culture
  - Application process

- [ ] **Press Kit Page**: Add `/press` and `/ar/press`
  - Logo pack downloads
  - Brand colors and guidelines
  - Media contact information
  - High-res images

### 11. Contact Form Integration

- [ ] **Contact Form**: Connect to service
  - Formspree, Netlify Forms, or similar
  - Test form submissions
  - Set up email notifications

## 🚨 Deployment Commands

```bash
# 1. Build and test locally
npm run build
npm run preview

# 2. Deploy to production
npx vercel --prod

# 3. Post-deploy verification
# Visit production URL and run all tests above
```

## ✅ Final Go/No-Go Decision

**GO Criteria (All Must Pass):**

- [ ] Real assets replaced (OG images, logos, QR codes)
- [ ] Real app store links working
- [ ] Counters show SSR values and animate
- [ ] `window.__smoke` returns all true
- [ ] Cookie consent works and gates analytics
- [ ] No CSP violations in console
- [ ] Cross-browser compatibility confirmed
- [ ] Keyboard navigation works
- [ ] All pages load without errors

**If ANY item fails → Fix before production launch**

---

## 🎉 Ready to Ship!

Once all critical items are checked off, the Toters marketing site is ready for production launch!

**Next Steps After Launch:**

1. Monitor analytics for user behavior
2. Set up error monitoring alerts
3. Plan content updates (careers, press kit)
4. Consider A/B testing different hero messages
5. Monitor Core Web Vitals and performance metrics
