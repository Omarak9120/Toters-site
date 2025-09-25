/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_BaLT3vhi.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_CSXNzCkS.mjs';
import { $ as $$JobsList } from '../chunks/JobsList_CA-BDNU6.mjs';
import { e as enJobs } from '../chunks/en_D2do14Rh.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Careers at Toters";
  const desc = "Join us in making it easy to get anything you need.";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `Toters \u2014 ${title}`, "description": desc, "lang": "en", "dir": "ltr" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "JobsList", $$JobsList, { "jobs": enJobs, "lang": "en" })} ` })}`;
}, "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/pages/careers/index.astro", void 0);

const $$file = "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/pages/careers/index.astro";
const $$url = "/careers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
