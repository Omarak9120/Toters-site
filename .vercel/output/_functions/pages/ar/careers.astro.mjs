/* empty css                                    */
import { e as createComponent, k as renderComponent, r as renderTemplate } from '../../chunks/astro/server_BaLT3vhi.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_NMe2ODK5.mjs';
import { $ as $$Careers$1 } from '../../chunks/Careers_D9TSyadM.mjs';
import { a as ar } from '../../chunks/ar_BZZJx_bU.mjs';
export { renderers } from '../../renderers.mjs';

const $$Careers = createComponent(($$result, $$props, $$slots) => {
  const data = ar.careers;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `\u062A\u0648\u062A\u0631\u0632 \u2014 ${data.title}`, "description": data.subtitle, "lang": "ar", "dir": "rtl", "ogImage": "/social/og-home-ar.jpg" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Careers", $$Careers$1, { "data": data, "locale": "ar" })} ` })}`;
}, "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/pages/ar/careers.astro", void 0);

const $$file = "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/pages/ar/careers.astro";
const $$url = "/ar/careers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Careers,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
