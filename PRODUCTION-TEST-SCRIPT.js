// 🧪 Production Testing Script
// Run this in the browser console after deploying to production

console.log('🚀 Toters Production Test Script');
console.log('================================');

// 1. Smoke Test
console.log('\n📊 Smoke Test Results:');
if (window.__smoke) {
  console.table(window.__smoke);
  const allPassed = Object.values(window.__smoke).every(result => result === true);
  console.log(allPassed ? '✅ All smoke tests passed!' : '❌ Some smoke tests failed');
} else {
  console.log('❌ Smoke test not available (not production?)');
}

// 2. Analytics Check
console.log('\n📈 Analytics Status:');
const hasGA = typeof window.gtag === 'function';
const hasPlausible = typeof window.plausible === 'function';
const hasConsent = localStorage.getItem('analytics_consent') === 'granted';
console.log(`Google Analytics: ${hasGA ? '✅' : '❌'}`);
console.log(`Plausible: ${hasPlausible ? '✅' : '❌'}`);
console.log(`Consent Granted: ${hasConsent ? '✅' : '❌'}`);

// 3. Counter Elements Check
console.log('\n🔢 Counter Elements:');
const counters = document.querySelectorAll('[data-count], .counter, .js-count');
console.log(`Found ${counters.length} counter elements`);
counters.forEach((counter, index) => {
  const value = counter.textContent;
  const hasDataCount = counter.hasAttribute('data-count');
  console.log(`Counter ${index + 1}: "${value}" (data-count: ${hasDataCount})`);
});

// 4. Animation Elements Check
console.log('\n🎬 Animation Elements:');
const reveals = document.querySelectorAll('[data-anim]');
const staggers = document.querySelectorAll('[data-stagger]');
console.log(`Reveal animations: ${reveals.length}`);
console.log(`Stagger animations: ${staggers.length}`);

// 5. Language Switcher Check
console.log('\n🌐 Language Switcher:');
const langSwitch = document.querySelector('a[data-track="toggle_language"]');
if (langSwitch) {
  console.log(`✅ Language switcher found: "${langSwitch.textContent}"`);
  console.log(`Link: ${langSwitch.href}`);
} else {
  console.log('❌ Language switcher not found');
}

// 6. App Store Links Check
console.log('\n📱 App Store Links:');
const appStoreLinks = document.querySelectorAll('a[data-track="click_appstore"], a[data-track="click_playstore"]');
appStoreLinks.forEach(link => {
  const type = link.getAttribute('data-track').includes('appstore') ? 'App Store' : 'Google Play';
  console.log(`${type}: ${link.href}`);
});

// 7. CSP Violations Check
console.log('\n🛡️ Security Check:');
console.log('Check browser console for any "Blocked by CSP" messages');
console.log('If you see CSP violations, they need to be fixed in vercel.json');

// 8. Performance Check
console.log('\n⚡ Performance Check:');
if ('performance' in window) {
  const perfData = performance.getEntriesByType('navigation')[0];
  if (perfData) {
    console.log(`Page Load Time: ${Math.round(perfData.loadEventEnd - perfData.loadEventStart)}ms`);
    console.log(`DOM Content Loaded: ${Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart)}ms`);
  }
}

// 9. Accessibility Check
console.log('\n♿ Accessibility Check:');
const images = document.querySelectorAll('img');
const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
console.log(`Images without alt text: ${imagesWithoutAlt.length}`);
if (imagesWithoutAlt.length > 0) {
  console.log('❌ Some images missing alt text');
} else {
  console.log('✅ All images have alt text');
}

console.log('\n🎉 Production test complete!');
console.log('Review the results above and ensure all critical items pass.');
