/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BaLT3vhi.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_NMe2ODK5.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_oE9ghj0h.mjs';
import { $ as $$HeroCinematic, a as $$ValueProps, b as $$Stats, c as $$AppBadges, d as $$FeaturesGrid, e as $$WhyChoose, f as $$HowItWorks } from '../chunks/HowItWorks_D1oiNXxC.mjs';
import { a as ar } from '../chunks/ar_BZZJx_bU.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const locale = "ar";
  const currentPath = "/ar/";
  const { hero, valueProps, features, whyChoose } = ar;
  const appStoreUrl = "https://apps.apple.com/";
  const playStoreUrl = "https://play.google.com/store/apps/details";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `توترز — ${hero.title}`, "description": hero.subtitle, "lang": "ar", "dir": "rtl", "ogImage": "/social/og-home-ar.jpg", "appStoreUrl": appStoreUrl, "playStoreUrl": playStoreUrl }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "locale": locale, "currentPath": currentPath })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "HeroCinematic", $$HeroCinematic, { "title": hero.title, "subtitle": hero.subtitle, "ctaAppStore": hero.ctaAppStore, "ctaPlay": hero.ctaPlay, "locale": locale })} ${renderComponent($$result2, "ValueProps", $$ValueProps, { "items": valueProps, "locale": locale })} ${renderComponent($$result2, "Stats", $$Stats, { "locale": locale })} ${renderComponent($$result2, "AppBadges", $$AppBadges, { "locale": locale, "variant": "light", "appStoreUrl": appStoreUrl, "playStoreUrl": playStoreUrl })} ${renderComponent($$result2, "FeaturesGrid", $$FeaturesGrid, { "section": features, "locale": locale })} ${renderComponent($$result2, "WhyChoose", $$WhyChoose, { "section": whyChoose, "locale": locale })} ${renderComponent($$result2, "HowItWorks", $$HowItWorks, { "locale": locale, "variant": "light" })} </main> ${renderComponent($$result2, "Footer", $$Footer, { "locale": locale })} ` })}`;
}, "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/pages/ar/index.astro", void 0);
const $$file = "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/pages/ar/index.astro";
const $$url = "/ar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
