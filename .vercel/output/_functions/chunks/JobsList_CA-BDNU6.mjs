import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_BaLT3vhi.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$JobsList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$JobsList;
  const { jobs = [], lang = "en" } = Astro2.props;
  const rtl = lang.startsWith("ar");
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`container mx-auto px-4 py-16 ${rtl ? "text-right" : ""}`, "class")} data-stagger> <h2 class="h1" data-anim="reveal-up">${rtl ? "\u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u0645\u062A\u0627\u062D\u0629" : "Open Roles"}</h2> <div class="mt-6 grid gap-4"> ${jobs.length === 0 && renderTemplate`<p class="text-slate-600">${rtl ? "\u0644\u0627 \u062A\u0648\u062C\u062F \u0648\u0638\u0627\u0626\u0641 \u062D\u0627\u0644\u064A\u0627\u064B." : "No openings right now."}</p>`} ${jobs.map((j) => renderTemplate`<a class="card p-5 hover:shadow-lg transition"${addAttribute(`${rtl ? "/ar" : ""}/careers/${j.slug}`, "href")} data-anim="reveal" data-track="job_open"${addAttribute(j.slug, "data-label")}> <div class="flex flex-wrap items-center gap-3"> <h3 class="font-semibold text-lg">${j.title}</h3> <span class="ms-auto text-sm rounded-full px-3 py-1 bg-slate-100">${j.team}</span> </div> <p class="mt-1 text-slate-600">${j.location} · ${j.type}</p> </a>`)} </div> </section>`;
}, "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/components/jobs/JobsList.astro", void 0);

export { $$JobsList as $ };
