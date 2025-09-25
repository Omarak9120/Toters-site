import { e as createComponent, f as createAstro, r as renderTemplate, u as unescapeHTML, h as addAttribute, m as maybeRenderHead } from './astro/server_BaLT3vhi.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FAQ;
  const { data, lang = "en" } = Astro2.props;
  const rtl = lang.startsWith("ar");
  Astro2.url?.pathname || "/";
  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (data.items || []).map((it) => ({
      "@type": "Question",
      "name": it.q,
      "acceptedAnswer": { "@type": "Answer", "text": it.a }
    }))
  };
  return renderTemplate(_a || (_a = __template(["", "<section", ' data-stagger> <h1 class="h1 text-center" data-anim="reveal-up">', '</h1> <p class="text-slate-600 text-center mt-2 max-w-2xl mx-auto" data-anim="reveal-up">', '</p> <div class="mt-8 space-y-3"> ', ' </div> <script type="application/ld+json">', "<\/script> </section>"])), maybeRenderHead(), addAttribute(`container mx-auto px-4 py-16 ${rtl ? "text-right" : ""}`, "class"), data.title, data.subtitle, (data.items || []).map((it, i) => renderTemplate`<details class="group rounded-2xl border bg-white/80 p-4 open:shadow-sm" data-anim="reveal"> <summary class="flex cursor-pointer list-none items-center justify-between gap-3"> <span class="font-semibold">${it.q}</span> <span class="ms-auto shrink-0 transition-transform group-open:rotate-45">＋</span> </summary> <div class="mt-2 text-slate-700">${it.a}</div> </details>`), unescapeHTML(JSON.stringify(faqJson)));
}, "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/components/FAQ.astro", void 0);

export { $$FAQ as $ };
