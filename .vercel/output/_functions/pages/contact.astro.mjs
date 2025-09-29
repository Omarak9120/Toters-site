/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DAhPDGWu.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_CMBrA3MR.mjs';
import { $ as $$ContactForm } from '../chunks/ContactForm_CugMSGlN.mjs';
import { e as en } from '../chunks/en_eYmrkcqP.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const t = en.contact;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `Toters \u2014 ${t.title}`, "description": t.subtitle, "lang": "en", "dir": "ltr", "ogImage": "/social/og-home-en.jpg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container mx-auto px-4 py-16" data-stagger> <h1 class="h1 text-center" data-anim="reveal-up">${t.title}</h1> <p class="text-slate-600 text-center mt-2 max-w-2xl mx-auto" data-anim="reveal-up">${t.subtitle}</p> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "t": t, "lang": "en" })} </section> ` })}`;
}, "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/pages/contact.astro", void 0);

const $$file = "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
