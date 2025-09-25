# 🚀 Toters Marketing Site - Deployment Guide

## Pre-Deployment Checklist

### 1. Replace Placeholder Assets

```bash
# Replace these files with real Toters assets:
public/social/og-home-en.jpg     # 1200x630px English OG image
public/social/og-home-ar.jpg     # 1200x630px Arabic OG image
public/logo.jpg                  # Main Toters logo
public/logo-white.svg           # White version for dark backgrounds
public/qr-code.svg              # QR code linking to app download
```

### 2. Update App Store Links

```javascript
// In src/pages/index.astro and src/pages/ar/index.astro
const appStoreUrl = "https://apps.apple.com/app/toters/YOUR_APP_ID";
const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.toters.app";
```

### 3. Set Environment Variables in Vercel

```bash
# Required for analytics (optional but recommended)
GA_ID=G-XXXXXXXXXX                    # Google Analytics 4 ID
PLAUSIBLE_DOMAIN=totersapp.com         # Plausible domain
SENTRY_DSN=https://xxx@sentry.io/xxx   # Sentry error monitoring (optional)
```

## Deployment Commands

### 1. Build and Test Locally

```bash
# Build the project
npm run build

# Test the preview
npm run preview

# Visit http://localhost:4321 to test
```

### 2. Deploy to Production

```bash
# Deploy to Vercel production
npx vercel --prod

# Or if already configured:
vercel --prod
```

### 3. Post-Deployment Testing

#### Quick Tests:

1. **Visit Production URL**: Check `/` and `/ar/`
2. **Run Smoke Test**: Open browser console, run `window.__smoke`
3. **Test Counters**: Verify they show final values immediately, then animate
4. **Test Cookie Consent**: Accept cookies, verify analytics fire
5. **Test Language Switcher**: Switch between EN/AR
6. **Check Console**: No CSP violations or errors

#### Comprehensive Testing:

```javascript
// Copy and paste this into browser console:
// (See PRODUCTION-TEST-SCRIPT.js for full script)
```

## Post-Launch Monitoring

### 1. Analytics Setup

- Verify GA4/Plausible events are firing
- Set up conversion tracking for app downloads
- Monitor bounce rate and user engagement

### 2. Error Monitoring

- Check Sentry for JavaScript errors
- Monitor Vercel function logs
- Set up uptime monitoring

### 3. Performance Monitoring

- Run Lighthouse audits regularly
- Monitor Core Web Vitals
- Check mobile performance

## Troubleshooting

### Common Issues:

**Counters not animating:**

- Check if GSAP is loading
- Verify `data-count` attributes are present
- Test with `window.__fx.probe()` in console

**Analytics not firing:**

- Verify environment variables are set
- Check if cookie consent was given
- Test with `window.__analyticsReady` in console

**CSP violations:**

- Check browser console for "Blocked by CSP" messages
- Update `vercel.json` CSP headers if needed
- Test all third-party scripts load properly

**RTL layout issues:**

- Verify `dir="rtl"` is set on Arabic pages
- Check CSS `rtl:` classes are working
- Test language switcher functionality

## Success Criteria

✅ **Ready to Ship When:**

- All placeholder assets replaced with real Toters branding
- Real app store links working
- Counters show SSR values and animate on scroll
- `window.__smoke` returns all true
- Cookie consent gates analytics properly
- No CSP violations in console
- Cross-browser compatibility confirmed
- Keyboard navigation works
- All pages load without errors

🎉 **Ship it!** The Toters marketing site is production-ready!
