/* empty css                                    */
import { e as createComponent, k as renderComponent, r as renderTemplate } from '../../chunks/astro/server_DAhPDGWu.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_jNEBnjtC.mjs';
import { $ as $$FAQ } from '../../chunks/FAQ_C9XNGwWP.mjs';
import { a as ar } from '../../chunks/ar_BdymesVy.mjs';
export { renderers } from '../../renderers.mjs';

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const data = ar.faq;
  const title = data.title;
  const description = data.subtitle;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `\u062A\u0648\u062A\u0631\u0632 \u2014 ${title}`, "description": description, "lang": "ar", "dir": "rtl" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FAQ", $$FAQ, { "data": data, "lang": "ar" })} ` })}`;
}, "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/pages/ar/faq.astro", void 0);

const $$file = "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/pages/ar/faq.astro";
const $$url = "/ar/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
