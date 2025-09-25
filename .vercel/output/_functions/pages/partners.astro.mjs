/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BaLT3vhi.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_NMe2ODK5.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_oE9ghj0h.mjs';
export { renderers } from '../renderers.mjs';

const $$Partners = createComponent(($$result, $$props, $$slots) => {
  const locale = "en";
  const currentPath = "/partners";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "For Partners - Toters", "description": "Partner with Toters to grow your business and reach more customers through our delivery platform.", "locale": locale }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "locale": locale, "currentPath": currentPath })} ${maybeRenderHead()}<main> <!-- Hero Section --> <section class="bg-gradient-to-br from-primary-50 to-primary-100 py-20"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center"> <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
Partner with Toters
</h1> <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
Grow your business and reach more customers through our delivery platform. Join thousands of successful partners who trust Toters.
</p> <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200">
Become a Partner
</a> </div> </div> </section> <!-- Benefits Section --> <section class="py-20 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Partner with Us?</h2> <p class="text-xl text-gray-600">We help you grow your business with our comprehensive partner program.</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"> <div class="w-16 h-16 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6"> <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path> </svg> </div> <h3 class="text-xl font-semibold text-gray-900 mb-3">Increased Revenue</h3> <p class="text-gray-600">Boost your sales by reaching customers who prefer delivery services.</p> </div> <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"> <div class="w-16 h-16 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6"> <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path> </svg> </div> <h3 class="text-xl font-semibold text-gray-900 mb-3">Marketing Support</h3> <p class="text-gray-600">Get featured in our app and benefit from our marketing campaigns.</p> </div> <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"> <div class="w-16 h-16 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6"> <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h3 class="text-xl font-semibold text-gray-900 mb-3">Easy Management</h3> <p class="text-gray-600">Manage your orders and menu through our intuitive partner dashboard.</p> </div> </div> </div> </section> <!-- CTA Section --> <section class="py-20 bg-gray-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 class="text-3xl font-bold text-gray-900 mb-4">Ready to Partner?</h2> <p class="text-xl text-gray-600 mb-8">Join our partner program and start growing your business today.</p> <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200">
Contact Us
</a> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "locale": locale })} ` })}`;
}, "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/pages/partners.astro", void 0);

const $$file = "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/pages/partners.astro";
const $$url = "/partners";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Partners,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
