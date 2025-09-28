/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_BaLT3vhi.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_B2Bgpkf5.mjs';
import { $ as $$FAQ } from '../chunks/FAQ_CEkmqO-r.mjs';
import { e as en } from '../chunks/en_eYmrkcqP.mjs';
export { renderers } from '../renderers.mjs';

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const data = en.faq;
  const title = data.title;
  const description = data.subtitle;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `Toters \u2014 ${title}`, "description": description, "lang": "en", "dir": "ltr" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FAQ", $$FAQ, { "data": data, "lang": "en" })} ` })}`;
}, "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/pages/faq.astro", void 0);

const $$file = "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/pages/faq.astro";
const $$url = "/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
