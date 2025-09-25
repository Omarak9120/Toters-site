/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BaLT3vhi.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_sbqGD8NY.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_oE9ghj0h.mjs';
export { renderers } from '../renderers.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  const locale = "en";
  const currentPath = "/privacy";
  const lastUpdated = "2024-01-15";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Privacy Policy - Toters", "description": "Learn how Toters collects, uses, and protects your personal information.", "lang": "en", "dir": "ltr" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "locale": locale, "currentPath": currentPath })} ${maybeRenderHead()}<main class="min-h-screen bg-white"> <div class="max-w-4xl mx-auto px-4 py-16"> <h1 class="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1> <div class="text-sm text-gray-600 mb-8">
Last updated: ${lastUpdated} </div> <div class="prose prose-lg max-w-none"> <section class="mb-8"> <h2 class="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2> <p class="text-gray-700 mb-4">
We collect information you provide directly to us, such as when you create an account, 
            place an order, or contact us for support.
</p> <p class="text-gray-700 mb-4"> <!-- TODO: Legal team to review and update with specific data collection practices -->
This includes your name, email address, phone number, delivery address, and payment information.
</p> </section> <section class="mb-8"> <h2 class="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2> <p class="text-gray-700 mb-4">
We use the information we collect to provide, maintain, and improve our services.
</p> <ul class="list-disc list-inside text-gray-700 mb-4"> <li>Process and fulfill your orders</li> <li>Communicate with you about your orders and our services</li> <li>Improve our platform and develop new features</li> <li>Ensure the security and integrity of our services</li> </ul> <!-- TODO: Legal team to add specific use cases and legal basis --> </section> <section class="mb-8"> <h2 class="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2> <p class="text-gray-700 mb-4">
We do not sell, trade, or otherwise transfer your personal information to third parties 
            without your consent, except as described in this policy.
</p> <!-- TODO: Legal team to specify sharing practices with partners, couriers, etc. --> </section> <section class="mb-8"> <h2 class="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2> <p class="text-gray-700 mb-4">
We implement appropriate security measures to protect your personal information against 
            unauthorized access, alteration, disclosure, or destruction.
</p> <!-- TODO: Legal team to detail specific security measures --> </section> <section class="mb-8"> <h2 class="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2> <p class="text-gray-700 mb-4">
You have the right to access, update, or delete your personal information. 
            You may also opt out of certain communications from us.
</p> <!-- TODO: Legal team to specify GDPR/CCPA rights and contact methods --> </section> <section class="mb-8"> <h2 class="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2> <p class="text-gray-700 mb-4">
If you have any questions about this Privacy Policy, please contact us at:
</p> <p class="text-gray-700">
Email: privacy@totersapp.com<br> <!-- TODO: Add physical address and other contact details --> </p> </section> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "locale": locale })} ` })}`;
}, "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/pages/privacy.astro", void 0);

const $$file = "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
