/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_BaLT3vhi.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_B2Bgpkf5.mjs';
import { $ as $$PressKit } from '../chunks/PressKit_CKmnPwrP.mjs';
import { e as en } from '../chunks/en_eYmrkcqP.mjs';
export { renderers } from '../renderers.mjs';

const $$Press = createComponent(($$result, $$props, $$slots) => {
  const data = en.press;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `Toters \u2014 ${data.title}`, "description": data.subtitle, "lang": "en", "dir": "ltr", "ogImage": "/social/og-home-en.jpg" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PressKit", $$PressKit, { "data": data })} ` })}`;
}, "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/pages/press.astro", void 0);

const $$file = "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/pages/press.astro";
const $$url = "/press";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Press,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
