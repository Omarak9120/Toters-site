import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Biv9hUZm.mjs';
import { manifest } from './manifest_Brf_PGbJ.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/og.astro.mjs');
const _page4 = () => import('./pages/ar/careers/_slug_.astro.mjs');
const _page5 = () => import('./pages/ar/careers.astro.mjs');
const _page6 = () => import('./pages/ar/contact.astro.mjs');
const _page7 = () => import('./pages/ar/faq.astro.mjs');
const _page8 = () => import('./pages/ar/press.astro.mjs');
const _page9 = () => import('./pages/ar/privacy.astro.mjs');
const _page10 = () => import('./pages/ar/terms.astro.mjs');
const _page11 = () => import('./pages/ar.astro.mjs');
const _page12 = () => import('./pages/careers/_slug_.astro.mjs');
const _page13 = () => import('./pages/careers.astro.mjs');
const _page14 = () => import('./pages/contact.astro.mjs');
const _page15 = () => import('./pages/couriers.astro.mjs');
const _page16 = () => import('./pages/customers.astro.mjs');
const _page17 = () => import('./pages/debug/routes.astro.mjs');
const _page18 = () => import('./pages/download.astro.mjs');
const _page19 = () => import('./pages/faq.astro.mjs');
const _page20 = () => import('./pages/partners.astro.mjs');
const _page21 = () => import('./pages/press.astro.mjs');
const _page22 = () => import('./pages/privacy.astro.mjs');
const _page23 = () => import('./pages/terms.astro.mjs');
const _page24 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/og.ts", _page3],
    ["src/pages/ar/careers/[slug].astro", _page4],
    ["src/pages/ar/careers/index.astro", _page5],
    ["src/pages/ar/contact.astro", _page6],
    ["src/pages/ar/faq.astro", _page7],
    ["src/pages/ar/press.astro", _page8],
    ["src/pages/ar/privacy.astro", _page9],
    ["src/pages/ar/terms.astro", _page10],
    ["src/pages/ar/index.astro", _page11],
    ["src/pages/careers/[slug].astro", _page12],
    ["src/pages/careers/index.astro", _page13],
    ["src/pages/contact.astro", _page14],
    ["src/pages/couriers.astro", _page15],
    ["src/pages/customers.astro", _page16],
    ["src/pages/debug/routes.astro", _page17],
    ["src/pages/download.ts", _page18],
    ["src/pages/faq.astro", _page19],
    ["src/pages/partners.astro", _page20],
    ["src/pages/press.astro", _page21],
    ["src/pages/privacy.astro", _page22],
    ["src/pages/terms.astro", _page23],
    ["src/pages/index.astro", _page24]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "d826c027-a7ce-4cd5-8d62-27de0409b083",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
