/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DAhPDGWu.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_C5LJedQs.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Page not found — Toters", "description": "We couldn't find that page." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container mx-auto px-4 py-24 text-center"> <h1 class="text-5xl font-extrabold text-gray-900 dark:text-white">404</h1> <p class="mt-3 text-slate-600 dark:text-slate-300">We couldn't find that page.</p> <a href="/" class="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 mt-6">
Go Home
</a> </section>  ${renderTemplate(_a || (_a = __template(['<script type="module">\n      import { track } from "../scripts/analytics.ts"; \n      track("view_404", { path: location.pathname });\n    </script>'])))}` })}`;
}, "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/pages/404.astro", void 0);
const $$file = "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
