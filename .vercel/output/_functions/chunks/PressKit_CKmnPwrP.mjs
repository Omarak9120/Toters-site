import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_BaLT3vhi.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$PressKit = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PressKit;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="container mx-auto px-4 py-16" data-stagger> <h1 class="h1 text-center" data-anim="reveal-up">${data.title}</h1> <p class="text-slate-600 text-center mt-2 max-w-2xl mx-auto" data-anim="reveal-up">${data.subtitle}</p> <div class="mt-10 grid md:grid-cols-2 gap-6"> <div class="card p-6" data-anim="reveal"> <h2 class="font-semibold">${data.downloadLogos}</h2> <ul class="mt-3 space-y-2"> ${data.assets.map((a) => renderTemplate`<li> <a class="underline"${addAttribute(a.href, "href")} download data-track="download_asset"${addAttribute(a.label, "data-label")}>${a.label}</a> </li>`)} </ul> </div> <div class="card p-6" data-anim="reveal"> <h2 class="font-semibold">${data.brandColors}</h2> <div class="mt-4 grid grid-cols-3 gap-3"> ${[data.primary, data.accent, data.dark].map((hex) => renderTemplate`<div class="rounded-xl p-4 border text-center"${addAttribute(`background: ${hex}20`, "style")}> <div class="h-10 w-full rounded-md"${addAttribute(`background:${hex}`, "style")}></div> <div class="mt-2 text-sm">${hex}</div> </div>`)} </div> </div> </div> <p class="mt-10 text-center text-slate-600" data-anim="reveal-up">${data.contact}</p> </section>`;
}, "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/components/PressKit.astro", void 0);

export { $$PressKit as $ };
