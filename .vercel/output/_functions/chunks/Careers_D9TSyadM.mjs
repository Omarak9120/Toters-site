import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, k as renderComponent, r as renderTemplate } from './astro/server_BaLT3vhi.mjs';
import 'kleur/colors';
import { $ as $$Counter } from './Counter_D4iMPVMM.mjs';

const $$Astro = createAstro();
const $$Careers = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Careers;
  const { data, locale = "en" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="container mx-auto px-4 py-16" data-stagger> <h1 class="h1 text-center" data-anim="reveal-up">${data.title}</h1> <p class="text-slate-600 text-center mt-2 max-w-2xl mx-auto" data-anim="reveal-up">${data.subtitle}</p> <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"> ${data.benefits?.map((b) => renderTemplate`<div class="card p-6" data-anim="reveal"> <h3 class="font-semibold">${b.title}</h3> <p class="text-slate-600 mt-1">${b.desc}</p> </div>`)} </div> <div class="mt-12 text-center"> <a class="btn btn-primary"${addAttribute(`mailto:${data.email}`, "href")} data-track="click_cta" data-label="careers_email">${data.applyCta}</a> </div> <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"> <div> <div class="text-3xl font-extrabold text-sky-600"> ${renderComponent($$result, "Counter", $$Counter, { "value": "12k", "format": "kplus", "lang": locale })} </div> <div class="text-slate-600 mt-1">Applicants</div> </div> <div> <div class="text-3xl font-extrabold text-sky-600"> ${renderComponent($$result, "Counter", $$Counter, { "value": "50", "lang": locale })} </div> <div class="text-slate-600 mt-1">Open roles (capacity)</div> </div> <div> <div class="text-3xl font-extrabold text-sky-600"> ${renderComponent($$result, "Counter", $$Counter, { "value": "3", "lang": locale })} </div> <div class="text-slate-600 mt-1">Offices</div> </div> <div> <div class="text-3xl font-extrabold text-sky-600"> ${renderComponent($$result, "Counter", $$Counter, { "value": "24", "lang": locale })} </div> <div class="text-slate-600 mt-1">Support hrs</div> </div> </div> </section>`;
}, "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/components/Careers.astro", void 0);

export { $$Careers as $ };
