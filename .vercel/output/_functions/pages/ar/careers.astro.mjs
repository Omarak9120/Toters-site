/* empty css                                    */
import { e as createComponent, k as renderComponent, r as renderTemplate } from '../../chunks/astro/server_BaLT3vhi.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_CSXNzCkS.mjs';
import { $ as $$JobsList } from '../../chunks/JobsList_CA-BDNU6.mjs';
import { a as arJobs } from '../../chunks/ar_Cduy8FUn.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "\u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0641\u064A \u062A\u0648\u062A\u0631\u0632";
  const desc = "\u0627\u0646\u0636\u0645 \u0625\u0644\u064A\u0646\u0627 \u0644\u0646\u0633\u0647\u0651\u0644 \u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0643\u0644 \u0645\u0627 \u062A\u062D\u062A\u0627\u062C\u0647.";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `\u062A\u0648\u062A\u0631\u0632 \u2014 ${title}`, "description": desc, "lang": "ar", "dir": "rtl" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "JobsList", $$JobsList, { "jobs": arJobs, "lang": "ar" })} ` })}`;
}, "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/pages/ar/careers/index.astro", void 0);

const $$file = "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/pages/ar/careers/index.astro";
const $$url = "/ar/careers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
