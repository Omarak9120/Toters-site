import { e as createComponent, f as createAstro, r as renderTemplate, h as addAttribute, m as maybeRenderHead, k as renderComponent, l as Fragment, u as unescapeHTML } from './astro/server_BaLT3vhi.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Counter } from './Counter_D4iMPVMM.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$6 = createAstro();
const $$HeroCinematic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$HeroCinematic;
  const {
    title = "Get anything. Fast.",
    subtitle = "From restaurants to groceries and daily essentials\u2014delivered when you need them.",
    ctaAppStore = "App Store",
    ctaPlay = "Google Play",
    locale = "en"
  } = Astro2.props;
  const isRTL = locale === "ar";
  return renderTemplate(_a || (_a = __template(["", '<section class="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center" data-hero-root> <!-- Left: Copy --> <div', '> <div class="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm bg-emerald-600/10 text-emerald-700 ring-1 ring-emerald-600/20 mb-4"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> ', ' </div> <h1 class="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white" data-hero="title">', '</h1> <p class="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl" data-hero="sub">', '</p> <div class="mt-6 flex flex-wrap gap-3"> <a data-hero="cta" data-cta="primary" class="btn fx-radial inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2" href="https://apps.apple.com/" rel="noopener" target="_blank"> <svg class="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> ', ' </a> <a data-hero="cta" class="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border border-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2" href="https://play.google.com/store/apps/details" rel="noopener" target="_blank"> <svg class="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> ', " </a> </div> </div> <!-- Right: Cinematic Visual --> <div", ' aria-hidden="true"> <!-- blurred blobs --> <div class="absolute -top-6 -left-6 w-36 h-36 rounded-full bg-emerald-400/20 blur-2xl"></div> <div class="absolute -bottom-8 -right-4 w-40 h-40 rounded-full bg-sky-400/20 blur-2xl"></div> <div class="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-gradient-to-br from-sky-50 to-emerald-50 dark:from-slate-800 dark:to-slate-900" data-visual> <!-- inline SVG route --> <svg id="route-svg" viewBox="0 0 640 480" class="absolute inset-0 w-full h-full"> <!-- background grid/map vibe --> <defs> <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"> <stop offset="0%" stop-color="#e6f6ff"></stop> <stop offset="100%" stop-color="#f2fff7"></stop> </linearGradient> </defs> <rect x="0" y="0" width="640" height="480" fill="url(#g1)"></rect> <!-- path --> <path id="route-path" d="M 60 420 C 180 360, 220 340, 300 280 S 480 180, 560 80" fill="none" stroke="#06b6d4" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path> <!-- pins --> <circle cx="60" cy="420" r="8" fill="#10b981"></circle> <circle cx="560" cy="80" r="8" fill="#0ea5e9"></circle> <!-- courier icon (tiny card) --> <g id="courier" transform="translate(60,420)"> <circle r="12" fill="white" stroke="#06b6d4" stroke-width="2"></circle> <text x="-6" y="5" font-size="14">\u{1F3CD}\uFE0F</text> </g> </svg> <!-- floating glass cards --> <div class="absolute top-6 start-6 rounded-xl px-3 py-2 text-sm backdrop-blur-xl bg-white/60 border border-white/40 shadow z-10" data-float> ', ' </div> <div class="absolute bottom-6 end-6 rounded-xl px-3 py-2 text-sm backdrop-blur-xl bg-white/60 border border-white/40 shadow z-10" data-float> ', ' </div> </div> </div> </section> <script type="module">\n  const root = document.querySelector("[data-hero-root]") as HTMLElement | null;\n  if (root) {\n    import("./heroCinematicMotion.ts").then(m => m.initHeroCinematic(root));\n  }\n<\/script>'])), maybeRenderHead(), addAttribute(isRTL ? "md:order-2" : "", "class"), locale === "ar" ? "\u062E\u062F\u0645\u0629 \u0645\u0648\u062B\u0648\u0642\u0629" : "Trusted Service", title, subtitle, ctaAppStore, ctaPlay, addAttribute(`relative ${isRTL ? "md:order-1" : ""}`, "class"), locale === "ar" ? "\u062A\u0645 \u0627\u0644\u0637\u0644\u0628" : "Order placed", locale === "ar" ? "\u0627\u0644\u0648\u0635\u0648\u0644 \u062E\u0644\u0627\u0644 7 \u062F\u0642\u0627\u0626\u0642" : "Arriving in 7 min");
}, "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/components/HeroCinematic.astro", void 0);

const $$Astro$5 = createAstro();
const $$ValueProps = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ValueProps;
  const { items, locale = "en" } = Astro2.props;
  const valuePropsContent = {
    en: {
      title: "Why Choose Toters?",
      subtitle: "We're committed to providing the best delivery experience for everyone",
      props: [
        {
          icon: "speed",
          title: "Lightning Fast",
          description: "Get your orders delivered in 30 minutes or less with our optimized delivery network.",
          features: ["30-min delivery", "Real-time tracking", "Smart routing"]
        },
        {
          icon: "reliability",
          title: "Always Reliable",
          description: "Count on us for consistent, dependable service every time you order.",
          features: ["99.9% uptime", "Quality guarantee", "24/7 support"]
        },
        {
          icon: "variety",
          title: "Wide Selection",
          description: "Choose from thousands of restaurants and stores in your area.",
          features: ["10K+ partners", "Fresh options", "Local favorites"]
        },
        {
          icon: "security",
          title: "Secure & Safe",
          description: "Your data and payments are protected with enterprise-grade security.",
          features: ["SSL encryption", "PCI compliance", "Privacy protection"]
        },
        {
          icon: "support",
          title: "24/7 Support",
          description: "Our dedicated support team is always here to help you.",
          features: ["Live chat", "Phone support", "Help center"]
        },
        {
          icon: "sustainability",
          title: "Eco-Friendly",
          description: "We're committed to reducing our environmental impact.",
          features: ["Carbon neutral", "Eco packaging", "Green delivery"]
        }
      ]
    },
    ar: {
      title: "\u0644\u0645\u0627\u0630\u0627 \u062A\u062E\u062A\u0627\u0631 \u062A\u0648\u062A\u064A\u0631\u0632\u061F",
      subtitle: "\u0646\u062D\u0646 \u0645\u0644\u062A\u0632\u0645\u0648\u0646 \u0628\u062A\u0642\u062F\u064A\u0645 \u0623\u0641\u0636\u0644 \u062A\u062C\u0631\u0628\u0629 \u062A\u0648\u0635\u064A\u0644 \u0644\u0644\u062C\u0645\u064A\u0639",
      props: [
        {
          icon: "speed",
          title: "\u0633\u0631\u064A\u0639 \u0643\u0627\u0644\u0628\u0631\u0642",
          description: "\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0637\u0644\u0628\u0627\u062A\u0643 \u0641\u064A 30 \u062F\u0642\u064A\u0642\u0629 \u0623\u0648 \u0623\u0642\u0644 \u0645\u0639 \u0634\u0628\u0643\u0629 \u0627\u0644\u062A\u0648\u0635\u064A\u0644 \u0627\u0644\u0645\u062D\u0633\u0646\u0629 \u0644\u062F\u064A\u0646\u0627.",
          features: ["\u062A\u0648\u0635\u064A\u0644 \u0641\u064A 30 \u062F\u0642\u064A\u0642\u0629", "\u062A\u062A\u0628\u0639 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0641\u0639\u0644\u064A", "\u062A\u0648\u062C\u064A\u0647 \u0630\u0643\u064A"]
        },
        {
          icon: "reliability",
          title: "\u0645\u0648\u062B\u0648\u0642 \u062F\u0627\u0626\u0645\u0627\u064B",
          description: "\u0627\u0639\u062A\u0645\u062F \u0639\u0644\u064A\u0646\u0627 \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u062E\u062F\u0645\u0629 \u0645\u062A\u0633\u0642\u0629 \u0648\u0645\u0648\u062B\u0648\u0642\u0629 \u0641\u064A \u0643\u0644 \u0645\u0631\u0629 \u062A\u0637\u0644\u0628 \u0641\u064A\u0647\u0627.",
          features: ["99.9% \u0648\u0642\u062A \u062A\u0634\u063A\u064A\u0644", "\u0636\u0645\u0627\u0646 \u0627\u0644\u062C\u0648\u062F\u0629", "\u062F\u0639\u0645 24/7"]
        },
        {
          icon: "variety",
          title: "\u0627\u062E\u062A\u064A\u0627\u0631 \u0648\u0627\u0633\u0639",
          description: "\u0627\u062E\u062A\u0631 \u0645\u0646 \u0622\u0644\u0627\u0641 \u0627\u0644\u0645\u0637\u0627\u0639\u0645 \u0648\u0627\u0644\u0645\u062A\u0627\u062C\u0631 \u0641\u064A \u0645\u0646\u0637\u0642\u062A\u0643.",
          features: ["10K+ \u0634\u0631\u064A\u0643", "\u062E\u064A\u0627\u0631\u0627\u062A \u0637\u0627\u0632\u062C\u0629", "\u0627\u0644\u0645\u0641\u0636\u0644\u0629 \u0627\u0644\u0645\u062D\u0644\u064A\u0629"]
        },
        {
          icon: "security",
          title: "\u0622\u0645\u0646 \u0648\u0645\u0636\u0645\u0648\u0646",
          description: "\u0628\u064A\u0627\u0646\u0627\u062A\u0643 \u0648\u0645\u062F\u0641\u0648\u0639\u0627\u062A\u0643 \u0645\u062D\u0645\u064A\u0629 \u0628\u0623\u0645\u0627\u0646 \u0639\u0644\u0649 \u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062A.",
          features: ["\u062A\u0634\u0641\u064A\u0631 SSL", "\u0627\u0645\u062A\u062B\u0627\u0644 PCI", "\u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629"]
        },
        {
          icon: "support",
          title: "\u062F\u0639\u0645 24/7",
          description: "\u0641\u0631\u064A\u0642 \u0627\u0644\u062F\u0639\u0645 \u0627\u0644\u0645\u062E\u0635\u0635 \u0644\u062F\u064A\u0646\u0627 \u0645\u0648\u062C\u0648\u062F \u062F\u0627\u0626\u0645\u0627\u064B \u0644\u0645\u0633\u0627\u0639\u062F\u062A\u0643.",
          features: ["\u062F\u0631\u062F\u0634\u0629 \u0645\u0628\u0627\u0634\u0631\u0629", "\u062F\u0639\u0645 \u0647\u0627\u062A\u0641\u064A", "\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629"]
        },
        {
          icon: "sustainability",
          title: "\u0635\u062F\u064A\u0642 \u0644\u0644\u0628\u064A\u0626\u0629",
          description: "\u0646\u062D\u0646 \u0645\u0644\u062A\u0632\u0645\u0648\u0646 \u0628\u062A\u0642\u0644\u064A\u0644 \u062A\u0623\u062B\u064A\u0631\u0646\u0627 \u0627\u0644\u0628\u064A\u0626\u064A.",
          features: ["\u0645\u062D\u0627\u064A\u062F \u0627\u0644\u0643\u0631\u0628\u0648\u0646", "\u062A\u063A\u0644\u064A\u0641 \u0635\u062F\u064A\u0642 \u0644\u0644\u0628\u064A\u0626\u0629", "\u062A\u0648\u0635\u064A\u0644 \u0623\u062E\u0636\u0631"]
        }
      ]
    }
  };
  const content = valuePropsContent[locale] || valuePropsContent.en;
  const getIcon = (iconType) => {
    const icons = {
      speed: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />\n      </svg>',
      reliability: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />\n      </svg>',
      variety: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />\n      </svg>',
      security: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />\n      </svg>',
      support: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />\n      </svg>',
      sustainability: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />\n      </svg>'
    };
    return icons[iconType] ?? icons.speed;
  };
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-white cv-auto" aria-labelledby="value-props-title"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Section Header --> <div class="text-center mb-16" data-anim="reveal"> <h2 id="value-props-title" class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"> ${content.title} </h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto"> ${content.subtitle} </p> </div> <!-- Value Propositions Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-stagger> ${(items || content.props).map((prop, index) => renderTemplate`<div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200" data-anim="reveal"> <!-- Icon --> <div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-xl mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(getIcon(prop.icon || "speed"))}` })} </div> <!-- Content --> <h3 class="text-xl font-semibold text-gray-900 mb-3"> ${prop.title} </h3> <p class="text-gray-600 mb-6 leading-relaxed"> ${prop.desc || prop.description} </p> <!-- Features List (only show if features exist) --> ${prop.features && renderTemplate`<ul class="space-y-2"> ${prop.features.map((feature) => renderTemplate`<li class="flex items-center text-sm text-gray-700"> <svg class="w-4 h-4 text-primary-600 mr-2 rtl:mr-0 rtl:ml-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> ${feature} </li>`)} </ul>`} <!-- Hover Effect --> <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div> </div>`)} </div> <!-- Bottom CTA --> <div class="text-center mt-16"> <div class="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12"> <h3 class="text-2xl font-bold text-gray-900 mb-4"> ${locale === "ar" ? "\u062C\u0627\u0647\u0632 \u0644\u0644\u0628\u062F\u0621\u061F" : "Ready to get started?"} </h3> <p class="text-gray-600 mb-8 max-w-2xl mx-auto"> ${locale === "ar" ? "\u0627\u0646\u0636\u0645 \u0625\u0644\u0649 \u0645\u0644\u0627\u064A\u064A\u0646 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0630\u064A\u0646 \u064A\u062B\u0642\u0648\u0646 \u0641\u064A \u062A\u0648\u062A\u064A\u0631\u0632 \u0644\u062A\u0648\u0635\u064A\u0644 \u0637\u0644\u0628\u0627\u062A\u0647\u0645." : "Join millions of customers who trust Toters for their delivery needs."} </p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a${addAttribute("/download", "href")} class="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"> <svg class="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> ${locale === "ar" ? "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642" : "Download App"} </a> <a${addAttribute(locale === "ar" ? "/ar/contact" : "/contact", "href")} class="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border border-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"> ${locale === "ar" ? "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627" : "Contact Us"} <svg class="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </div> </div> </div> </div> </section>`;
}, "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/components/ValueProps.astro", void 0);

const $$Astro$4 = createAstro();
const $$Stats = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Stats;
  const { locale = "en" } = Astro2.props;
  const statsContent = {
    en: {
      title: "Trusted by millions",
      subtitle: "Join the growing community of satisfied customers",
      stats: [
        { value: 1e6, label: "Happy Customers", format: "kplus" },
        { value: 1e4, label: "Partner Stores", format: "kplus" },
        { value: 50, label: "Cities Covered", format: "plain" },
        { value: 24, label: "Support (hrs)", format: "plain" }
      ]
    },
    ar: {
      title: "\u0645\u0648\u062B\u0648\u0642 \u0645\u0646 \u0642\u0628\u0644 \u0627\u0644\u0645\u0644\u0627\u064A\u064A\u0646",
      subtitle: "\u0627\u0646\u0636\u0645 \u0625\u0644\u0649 \u0627\u0644\u0645\u062C\u062A\u0645\u0639 \u0627\u0644\u0645\u062A\u0646\u0627\u0645\u064A \u0645\u0646 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0631\u0627\u0636\u064A\u0646",
      stats: [
        { value: 1e6, label: "\u0639\u0645\u064A\u0644 \u0633\u0639\u064A\u062F", format: "kplus" },
        { value: 1e4, label: "\u0645\u062A\u062C\u0631 \u0634\u0631\u064A\u0643", format: "kplus" },
        { value: 50, label: "\u0645\u062F\u064A\u0646\u0629 \u0645\u063A\u0637\u0627\u0629", format: "plain" },
        { value: 24, label: "\u062F\u0639\u0645 (\u0633\u0627\u0639\u0627\u062A)", format: "plain" }
      ]
    }
  };
  const content = statsContent[locale] || statsContent.en;
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-gray-50 dark:bg-gray-800" aria-labelledby="stats-title"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Section Header --> <div class="text-center mb-16" data-anim="reveal"> <h2 id="stats-title" class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"> ${content.title} </h2> <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"> ${content.subtitle} </p> </div> <!-- Stats Grid --> <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" data-stagger> ${content.stats.map((stat, index) => renderTemplate`<div class="group" data-anim="reveal"> ${renderComponent($$result, "Counter", $$Counter, { "className": "text-3xl sm:text-4xl font-extrabold text-primary-600 mb-2 gpu", "value": stat.value, "format": stat.format, "dur": "1.2", "lang": locale })} <div class="text-sm text-gray-600 dark:text-gray-300"> ${stat.label} </div> </div>`)} </div> </div> </section>`;
}, "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/components/Stats.astro", void 0);

const $$Astro$3 = createAstro();
const $$AppBadges = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$AppBadges;
  const { locale = "en", variant = "light", appStoreUrl = "https://apps.apple.com/", playStoreUrl = "https://play.google.com/store/apps/details" } = Astro2.props;
  const isRTL = locale === "ar";
  const appBadgesContent = {
    en: {
      title: "Download Toters App",
      subtitle: "Get the app and enjoy faster, more convenient delivery",
      badges: {
        appStore: {
          label: "Download on the App Store",
          href: appStoreUrl,
          image: "/app-store-badge.png",
          alt: "Download on the App Store"
        },
        googlePlay: {
          label: "Get it on Google Play",
          href: playStoreUrl,
          image: "/google-play-badge.jpg",
          alt: "Get it on Google Play"
        }
      },
      features: [
        "Real-time order tracking",
        "Easy payment options",
        "Exclusive app-only deals",
        "Quick reordering"
      ],
      qrCode: {
        label: "Scan QR code to download",
        image: "/qr-code.svg",
        alt: "QR Code to download Toters app"
      }
    },
    ar: {
      title: "\u062A\u062D\u0645\u064A\u0644 \u062A\u0637\u0628\u064A\u0642 \u062A\u0648\u062A\u064A\u0631\u0632",
      subtitle: "\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0648\u0627\u0633\u062A\u0645\u062A\u0639 \u0628\u062A\u0648\u0635\u064A\u0644 \u0623\u0633\u0631\u0639 \u0648\u0623\u0643\u062B\u0631 \u0631\u0627\u062D\u0629",
      badges: {
        appStore: {
          label: "\u062A\u062D\u0645\u064A\u0644 \u0645\u0646 \u0645\u062A\u062C\u0631 \u0627\u0644\u062A\u0637\u0628\u064A\u0642\u0627\u062A",
          href: appStoreUrl,
          image: "/app-store-badge.png",
          alt: "\u062A\u062D\u0645\u064A\u0644 \u0645\u0646 \u0645\u062A\u062C\u0631 \u0627\u0644\u062A\u0637\u0628\u064A\u0642\u0627\u062A"
        },
        googlePlay: {
          label: "\u0627\u062D\u0635\u0644 \u0639\u0644\u064A\u0647 \u0645\u0646 \u062C\u0648\u062C\u0644 \u0628\u0644\u0627\u064A",
          href: playStoreUrl,
          image: "/google-play-badge.jpg",
          alt: "\u0627\u062D\u0635\u0644 \u0639\u0644\u064A\u0647 \u0645\u0646 \u062C\u0648\u062C\u0644 \u0628\u0644\u0627\u064A"
        }
      },
      features: [
        "\u062A\u062A\u0628\u0639 \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0641\u0639\u0644\u064A",
        "\u062E\u064A\u0627\u0631\u0627\u062A \u062F\u0641\u0639 \u0633\u0647\u0644\u0629",
        "\u0639\u0631\u0648\u0636 \u062D\u0635\u0631\u064A\u0629 \u0644\u0644\u062A\u0637\u0628\u064A\u0642 \u0641\u0642\u0637",
        "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0637\u0644\u0628 \u0627\u0644\u0633\u0631\u064A\u0639\u0629"
      ],
      qrCode: {
        label: "\u0627\u0645\u0633\u062D \u0631\u0645\u0632 QR \u0644\u0644\u062A\u062D\u0645\u064A\u0644",
        image: "/qr-code.svg",
        alt: "\u0631\u0645\u0632 QR \u0644\u062A\u062D\u0645\u064A\u0644 \u062A\u0637\u0628\u064A\u0642 \u062A\u0648\u062A\u064A\u0631\u0632"
      }
    }
  };
  const content = appBadgesContent[locale] || appBadgesContent.en;
  const themeClasses = {
    light: {
      container: "bg-white",
      title: "text-gray-900",
      subtitle: "text-gray-600",
      features: "text-gray-700"
    },
    dark: {
      container: "bg-gray-900",
      title: "text-white",
      subtitle: "text-gray-300",
      features: "text-gray-300"
    }
  };
  const theme = themeClasses[variant];
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`py-16 ${theme.container}`, "class")} aria-labelledby="app-badges-title"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <!-- Content --> <div${addAttribute(`${isRTL ? "lg:order-2" : ""}`, "class")}> <div class="max-w-2xl"> <!-- Title --> <h2 id="app-badges-title"${addAttribute(`text-3xl sm:text-4xl font-bold ${theme.title} mb-4`, "class")}> ${content.title} </h2> <!-- Subtitle --> <p${addAttribute(`text-xl ${theme.subtitle} mb-8`, "class")}> ${content.subtitle} </p> <!-- Features List --> <ul class="space-y-3 mb-8"> ${content.features.map((feature) => renderTemplate`<li${addAttribute(`flex items-center ${theme.features}`, "class")}> <svg class="w-5 h-5 text-primary-600 mr-3 rtl:mr-0 rtl:ml-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> ${feature} </li>`)} </ul> <!-- Download Badges --> <div class="flex flex-col sm:flex-row gap-4 mb-8"> <a${addAttribute(content.badges.appStore.href, "href")} class="inline-block transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg"${addAttribute(content.badges.appStore.label, "aria-label")} target="_blank" rel="noopener noreferrer" data-track="click_appstore" data-label="hero_appstore"> <img${addAttribute(content.badges.appStore.image, "src")}${addAttribute(content.badges.appStore.alt, "alt")} class="h-14 w-auto gpu" width="120" height="56" loading="lazy" decoding="async"> </a> <a${addAttribute(content.badges.googlePlay.href, "href")} class="inline-block transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg"${addAttribute(content.badges.googlePlay.label, "aria-label")} target="_blank" rel="noopener noreferrer" data-track="click_playstore" data-label="hero_play"> <img${addAttribute(content.badges.googlePlay.image, "src")}${addAttribute(content.badges.googlePlay.alt, "alt")} class="h-14 w-auto gpu" width="120" height="56" loading="lazy" decoding="async"> </a> </div> <!-- QR Code --> <div class="flex items-center space-x-4 rtl:space-x-reverse"> <div class="bg-white p-3 rounded-lg shadow-lg"> <img${addAttribute(content.qrCode.image, "src")}${addAttribute(content.qrCode.alt, "alt")} class="w-20 h-20 gpu" width="80" height="80" loading="lazy" decoding="async"> </div> <div> <p${addAttribute(`text-sm font-medium ${theme.title}`, "class")}> ${content.qrCode.label} </p> <p${addAttribute(`text-xs ${theme.subtitle}`, "class")}> ${locale === "ar" ? "\u0627\u0633\u062A\u062E\u062F\u0645 \u0643\u0627\u0645\u064A\u0631\u0627 \u0647\u0627\u062A\u0641\u0643" : "Use your phone camera"} </p> </div> </div> </div> </div> <!-- Phone Mockup --> <div${addAttribute(`${isRTL ? "lg:order-1" : ""}`, "class")}> <div class="relative"> <!-- Phone Frame --> <div class="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl"> <!-- Screen --> <div class="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative"> <!-- Status Bar --> <div class="absolute top-0 left-0 right-0 h-8 bg-gray-100 flex items-center justify-between px-6 text-xs font-medium text-gray-600"> <span>9:41</span> <div class="flex items-center space-x-1"> <div class="w-4 h-2 bg-gray-600 rounded-sm"></div> <div class="w-6 h-3 border border-gray-600 rounded-sm"> <div class="w-4 h-2 bg-gray-600 rounded-sm m-0.5"></div> </div> </div> </div> <!-- App Content --> <div class="pt-8 px-6"> <!-- Header --> <div class="flex items-center justify-between mb-6"> <div class="flex items-center space-x-2 rtl:space-x-reverse"> <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center"> <span class="text-white font-bold text-sm">T</span> </div> <span class="font-bold text-gray-900">Toters</span> </div> <div class="w-8 h-8 bg-gray-200 rounded-full"></div> </div> <!-- Search Bar --> <div class="bg-gray-100 rounded-xl p-3 mb-6"> <div class="flex items-center space-x-3 rtl:space-x-reverse"> <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> <span class="text-gray-500 text-sm"> ${locale === "ar" ? "\u0627\u0628\u062D\u062B \u0639\u0646 \u0627\u0644\u0637\u0639\u0627\u0645..." : "Search for food..."} </span> </div> </div> <!-- Categories --> <div class="flex space-x-4 rtl:space-x-reverse mb-6 overflow-x-auto"> ${[1, 2, 3, 4].map((i) => renderTemplate`<div class="flex-shrink-0 w-16 text-center"> <div class="w-12 h-12 bg-gray-200 rounded-xl mx-auto mb-2"></div> <span class="text-xs text-gray-600"> ${locale === "ar" ? `\u0641\u0626\u0629 ${i}` : `Category ${i}`} </span> </div>`)} </div> <!-- Restaurants --> <div class="space-y-4"> ${[1, 2, 3].map((i) => renderTemplate`<div class="flex space-x-3 rtl:space-x-reverse"> <div class="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0"></div> <div class="flex-1"> <div class="h-4 bg-gray-200 rounded mb-2"></div> <div class="h-3 bg-gray-200 rounded w-3/4 mb-1"></div> <div class="h-3 bg-gray-200 rounded w-1/2"></div> </div> </div>`)} </div> </div> <!-- Bottom Navigation --> <div class="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex items-center justify-around"> ${["home", "search", "orders", "profile"].map((item) => renderTemplate`<div class="flex flex-col items-center space-y-1"> <div${addAttribute(`w-6 h-6 ${item === "home" ? "bg-primary-600" : "bg-gray-400"} rounded`, "class")}></div> <span${addAttribute(`text-xs ${item === "home" ? "text-primary-600" : "text-gray-400"}`, "class")}> ${locale === "ar" ? item === "home" ? "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629" : item === "search" ? "\u0628\u062D\u062B" : item === "orders" ? "\u0627\u0644\u0637\u0644\u0628\u0627\u062A" : "\u0627\u0644\u0645\u0644\u0641" : item.charAt(0).toUpperCase() + item.slice(1)} </span> </div>`)} </div> </div> </div> <!-- Floating Elements --> <div class="absolute -top-4 -right-4 w-8 h-8 bg-primary-200 rounded-full animate-pulse"></div> <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary-200 rounded-full animate-pulse delay-1000"></div> </div> </div> </div> </div> </section>`;
}, "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/components/AppBadges.astro", void 0);

const $$Astro$2 = createAstro();
const $$FeaturesGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FeaturesGrid;
  const { section = {}, locale = "en" } = Astro2.props;
  const list = Array.isArray(section.items) && section.items.length ? section.items : [
    { title: "Ordering", desc: "Browse restaurants & stores in one app." },
    { title: "Tracking", desc: "Follow your order to your doorstep." },
    { title: "Payments", desc: "Cards, wallets, or cash." },
    { title: "Support", desc: "We're here any time." }
  ];
  const getIcon = (title) => {
    const iconMap = {
      "Ordering made easy": "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      "Real-time tracking": "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      "Secure payments": "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
      "24/7 support": "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z",
      "Ordering": "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      "Tracking": "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      "Payments": "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
      "Support": "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
    };
    return iconMap[title] || iconMap["Ordering"];
  };
  return renderTemplate`${maybeRenderHead()}<section class="container mx-auto px-4 py-16 bg-gray-50" data-stagger> <h2 class="text-3xl md:text-4xl font-extrabold text-center" data-anim="reveal-up">${section.heading || "Everything you need for delivery"}</h2> <p class="mt-2 text-slate-600 text-center max-w-2xl mx-auto" data-anim="reveal-up">${section.sub || "From ordering to tracking, we've got you covered."}</p> <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"> ${list.map((it) => renderTemplate`<div class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary-200" data-anim="reveal"> <!-- Icon --> <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300"> <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(getIcon(it.title), "d")}></path> </svg> </div> <!-- Content --> <h3 class="text-lg font-semibold text-gray-900 mb-2">${it.title}</h3> <p class="text-slate-600 text-sm leading-relaxed">${it.desc}</p> </div>`)} </div> </section>`;
}, "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/components/FeaturesGrid.astro", void 0);

const $$Astro$1 = createAstro();
const $$WhyChoose = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WhyChoose;
  const { section = {}, locale = "en" } = Astro2.props;
  const list = Array.isArray(section.items) && section.items.length ? section.items : [
    { title: "Huge selection", desc: "Thousands of restaurants, groceries, and shops." },
    { title: "Fast & reliable", desc: "Optimized routes and trusted couriers." },
    { title: "Clear pricing", desc: "No surprises\u2014upfront fees and promos." },
    { title: "Dedicated support", desc: "Real people ready to help." }
  ];
  const getIcon = (title) => {
    const iconMap = {
      "Huge selection": "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
      "Fast & reliable": "M13 10V3L4 14h7v7l9-11h-7z",
      "Clear pricing": "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      "Dedicated support": "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
    };
    return iconMap[title] || iconMap["Huge selection"];
  };
  return renderTemplate`${maybeRenderHead()}<section class="container mx-auto px-4 py-16 bg-white" data-stagger> <h2 class="text-3xl md:text-4xl font-extrabold text-center" data-anim="reveal-up">${section.heading || "Why Choose Toters?"}</h2> <p class="mt-2 text-slate-600 text-center max-w-2xl mx-auto" data-anim="reveal-up">${section.sub || "We're committed to the best delivery experience for everyone."}</p> <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"> ${list.map((it) => renderTemplate`<div class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary-200" data-anim="reveal"> <!-- Icon --> <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300"> <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(getIcon(it.title), "d")}></path> </svg> </div> <!-- Content --> <h3 class="text-lg font-semibold text-gray-900 mb-2">${it.title}</h3> <p class="text-slate-600 text-sm leading-relaxed">${it.desc}</p> </div>`)} </div> </section>`;
}, "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/components/WhyChoose.astro", void 0);

const $$Astro = createAstro();
const $$HowItWorks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HowItWorks;
  const { locale = "en", variant = "light" } = Astro2.props;
  const isRTL = locale === "ar";
  const howItWorksContent = {
    en: {
      title: "How Toters Works",
      subtitle: "Get your favorite food delivered in just 3 simple steps",
      steps: [
        {
          number: "01",
          title: "Browse & Order",
          description: "Browse through thousands of restaurants and stores. Add items to your cart and place your order.",
          icon: "browse",
          details: [
            "Search by cuisine, location, or restaurant name",
            "View detailed menus with prices and descriptions",
            "Customize your order with special instructions",
            "Apply promo codes and discounts"
          ]
        },
        {
          number: "02",
          title: "Track Your Order",
          description: "Watch your order being prepared and track the delivery in real-time from restaurant to your door.",
          icon: "track",
          details: [
            "Real-time order status updates",
            "Live GPS tracking of your delivery",
            "Estimated delivery time",
            "Direct communication with your courier"
          ]
        },
        {
          number: "03",
          title: "Enjoy Your Meal",
          description: "Receive your order and enjoy your delicious meal. Rate your experience to help others.",
          icon: "enjoy",
          details: [
            "Contactless delivery options",
            "Secure payment processing",
            "Order history and favorites",
            "Rate and review your experience"
          ]
        }
      ],
      cta: {
        title: "Ready to get started?",
        subtitle: "Join millions of satisfied customers",
        button: "Download App"
      }
    },
    ar: {
      title: "\u0643\u064A\u0641 \u064A\u0639\u0645\u0644 \u062A\u0648\u062A\u064A\u0631\u0632",
      subtitle: "\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0637\u0639\u0627\u0645\u0643 \u0627\u0644\u0645\u0641\u0636\u0644 \u0641\u064A 3 \u062E\u0637\u0648\u0627\u062A \u0628\u0633\u064A\u0637\u0629 \u0641\u0642\u0637",
      steps: [
        {
          number: "01",
          title: "\u062A\u0635\u0641\u062D \u0648\u0627\u0637\u0644\u0628",
          description: "\u062A\u0635\u0641\u062D \u0622\u0644\u0627\u0641 \u0627\u0644\u0645\u0637\u0627\u0639\u0645 \u0648\u0627\u0644\u0645\u062A\u0627\u062C\u0631. \u0623\u0636\u0641 \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0625\u0644\u0649 \u0639\u0631\u0628\u0629 \u0627\u0644\u062A\u0633\u0648\u0642 \u0648\u0627\u0637\u0644\u0628 \u0637\u0644\u0628\u0643.",
          icon: "browse",
          details: [
            "\u0627\u0628\u062D\u062B \u062D\u0633\u0628 \u0646\u0648\u0639 \u0627\u0644\u0645\u0637\u0628\u062E \u0623\u0648 \u0627\u0644\u0645\u0648\u0642\u0639 \u0623\u0648 \u0627\u0633\u0645 \u0627\u0644\u0645\u0637\u0639\u0645",
            "\u0639\u0631\u0636 \u0642\u0648\u0627\u0626\u0645 \u0645\u0641\u0635\u0644\u0629 \u0645\u0639 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0648\u0627\u0644\u0623\u0648\u0635\u0627\u0641",
            "\u062E\u0635\u0635 \u0637\u0644\u0628\u0643 \u0628\u062A\u0639\u0644\u064A\u0645\u0627\u062A \u062E\u0627\u0635\u0629",
            "\u0637\u0628\u0642 \u0623\u0643\u0648\u0627\u062F \u0627\u0644\u062E\u0635\u0645 \u0648\u0627\u0644\u0639\u0631\u0648\u0636"
          ]
        },
        {
          number: "02",
          title: "\u062A\u062A\u0628\u0639 \u0637\u0644\u0628\u0643",
          description: "\u0631\u0627\u0642\u0628 \u0637\u0644\u0628\u0643 \u0648\u0647\u0648 \u064A\u064F\u062D\u0636\u0631 \u0648\u062A\u062A\u0628\u0639 \u0627\u0644\u062A\u0648\u0635\u064A\u0644 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0641\u0639\u0644\u064A \u0645\u0646 \u0627\u0644\u0645\u0637\u0639\u0645 \u0625\u0644\u0649 \u0628\u0627\u0628 \u0645\u0646\u0632\u0644\u0643.",
          icon: "track",
          details: [
            "\u062A\u062D\u062F\u064A\u062B\u0627\u062A \u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0641\u0639\u0644\u064A",
            "\u062A\u062A\u0628\u0639 GPS \u0645\u0628\u0627\u0634\u0631 \u0644\u062A\u0648\u0635\u064A\u0644\u0643",
            "\u0648\u0642\u062A \u0627\u0644\u062A\u0648\u0635\u064A\u0644 \u0627\u0644\u0645\u0642\u062F\u0631",
            "\u062A\u0648\u0627\u0635\u0644 \u0645\u0628\u0627\u0634\u0631 \u0645\u0639 \u0645\u0646\u062F\u0648\u0628\u0643"
          ]
        },
        {
          number: "03",
          title: "\u0627\u0633\u062A\u0645\u062A\u0639 \u0628\u0648\u062C\u0628\u062A\u0643",
          description: "\u0627\u0633\u062A\u0644\u0645 \u0637\u0644\u0628\u0643 \u0648\u0627\u0633\u062A\u0645\u062A\u0639 \u0628\u0648\u062C\u0628\u062A\u0643 \u0627\u0644\u0644\u0630\u064A\u0630\u0629. \u0642\u064A\u0645 \u062A\u062C\u0631\u0628\u062A\u0643 \u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0622\u062E\u0631\u064A\u0646.",
          icon: "enjoy",
          details: [
            "\u062E\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u0648\u0635\u064A\u0644 \u0628\u062F\u0648\u0646 \u062A\u0644\u0627\u0645\u0633",
            "\u0645\u0639\u0627\u0644\u062C\u0629 \u062F\u0641\u0639 \u0622\u0645\u0646\u0629",
            "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0648\u0627\u0644\u0645\u0641\u0636\u0644\u0629",
            "\u0642\u064A\u0645 \u0648\u0631\u0627\u062C\u0639 \u062A\u062C\u0631\u0628\u062A\u0643"
          ]
        }
      ],
      cta: {
        title: "\u062C\u0627\u0647\u0632 \u0644\u0644\u0628\u062F\u0621\u061F",
        subtitle: "\u0627\u0646\u0636\u0645 \u0625\u0644\u0649 \u0645\u0644\u0627\u064A\u064A\u0646 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0631\u0627\u0636\u064A\u0646",
        button: "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642"
      }
    }
  };
  const content = howItWorksContent[locale] || howItWorksContent.en;
  const themeClasses = {
    light: {
      container: "bg-white",
      title: "text-gray-900",
      subtitle: "text-gray-600",
      stepTitle: "text-gray-900",
      stepDescription: "text-gray-700",
      stepDetails: "text-gray-600",
      ctaContainer: "bg-gray-50",
      ctaTitle: "text-gray-900",
      ctaSubtitle: "text-gray-600"
    },
    dark: {
      container: "bg-gray-900",
      title: "text-white",
      subtitle: "text-gray-300",
      stepTitle: "text-white",
      stepDescription: "text-gray-300",
      stepDetails: "text-gray-400",
      ctaContainer: "bg-gray-800",
      ctaTitle: "text-white",
      ctaSubtitle: "text-gray-300"
    }
  };
  const theme = themeClasses[variant];
  const getIcon = (iconType) => {
    const icons = {
      browse: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />\n      </svg>',
      track: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />\n      </svg>',
      enjoy: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />\n      </svg>'
    };
    return icons[iconType] ?? icons.browse;
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`py-20 ${theme.container} cv-auto`, "class")} aria-labelledby="how-it-works-title"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Section Header --> <div class="text-center mb-16" data-anim="reveal"> <h2 id="how-it-works-title"${addAttribute(`text-3xl sm:text-4xl font-bold ${theme.title} mb-4`, "class")}> ${content.title} </h2> <p${addAttribute(`text-xl ${theme.subtitle} max-w-3xl mx-auto`, "class")}> ${content.subtitle} </p> </div> <!-- Steps --> <div class="space-y-16" data-stagger> ${content.steps.map((step, index) => renderTemplate`<div${addAttribute(`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 && !isRTL ? "lg:grid-flow-col-dense" : ""} ${index % 2 === 1 && isRTL ? "lg:grid-flow-col-dense" : ""}`, "class")} data-anim="reveal"> <!-- Content --> <div${addAttribute(`${index % 2 === 1 && !isRTL ? "lg:col-start-2" : ""} ${index % 2 === 1 && isRTL ? "lg:col-start-1" : ""}`, "class")}> <div class="max-w-2xl"> <!-- Step Number --> <div class="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full text-xl font-bold mb-6"> ${step.number} </div> <!-- Step Title --> <h3${addAttribute(`text-2xl sm:text-3xl font-bold ${theme.stepTitle} mb-4`, "class")}> ${step.title} </h3> <!-- Step Description --> <p${addAttribute(`text-lg ${theme.stepDescription} mb-6`, "class")}> ${step.description} </p> <!-- Step Details --> <ul class="space-y-3"> ${step.details.map((detail) => renderTemplate`<li${addAttribute(`flex items-start ${theme.stepDetails}`, "class")}> <svg class="w-5 h-5 text-primary-600 mr-3 rtl:mr-0 rtl:ml-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> ${detail} </li>`)} </ul> </div> </div> <!-- Visual --> <div${addAttribute(`${index % 2 === 1 && !isRTL ? "lg:col-start-1" : ""} ${index % 2 === 1 && isRTL ? "lg:col-start-2" : ""}`, "class")}> <div class="relative"> <!-- Main Visual --> <div class="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 md:p-12 text-center"> <!-- Icon --> <div class="inline-flex items-center justify-center w-20 h-20 bg-white text-primary-600 rounded-2xl mb-6 shadow-lg"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(getIcon(step.icon))}` })} </div> <!-- Visual Content --> <div class="space-y-4"> ${step.icon === "browse" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="bg-white rounded-lg p-4 shadow-sm"> <div class="flex items-center space-x-3 rtl:space-x-reverse mb-3"> <div class="w-8 h-8 bg-gray-200 rounded"></div> <div class="flex-1"> <div class="h-3 bg-gray-200 rounded mb-1"></div> <div class="h-2 bg-gray-200 rounded w-2/3"></div> </div> </div> <div class="h-2 bg-gray-200 rounded mb-1"></div> <div class="h-2 bg-gray-200 rounded w-3/4"></div> </div> <p class="text-sm text-gray-600"> ${locale === "ar" ? "\u062A\u0635\u0641\u062D \u0627\u0644\u0645\u0637\u0627\u0639\u0645 \u0648\u0627\u0644\u0645\u062A\u0627\u062C\u0631" : "Browse restaurants & stores"} </p> ` })}`} ${step.icon === "track" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="bg-white rounded-lg p-4 shadow-sm"> <div class="flex items-center justify-between mb-3"> <div class="w-8 h-8 bg-primary-600 rounded-full"></div> <div class="w-8 h-8 bg-gray-200 rounded-full"></div> </div> <div class="h-2 bg-primary-200 rounded mb-1"></div> <div class="h-2 bg-primary-200 rounded w-2/3"></div> </div> <p class="text-sm text-gray-600"> ${locale === "ar" ? "\u062A\u062A\u0628\u0639 \u0637\u0644\u0628\u0643 \u0645\u0628\u0627\u0634\u0631\u0629" : "Track your order live"} </p> ` })}`} ${step.icon === "enjoy" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="bg-white rounded-lg p-4 shadow-sm"> <div class="flex items-center space-x-2 rtl:space-x-reverse mb-3"> <div class="w-6 h-6 bg-yellow-400 rounded"></div> <div class="w-6 h-6 bg-yellow-400 rounded"></div> <div class="w-6 h-6 bg-yellow-400 rounded"></div> <div class="w-6 h-6 bg-yellow-400 rounded"></div> <div class="w-6 h-6 bg-gray-200 rounded"></div> </div> <div class="h-2 bg-gray-200 rounded mb-1"></div> <div class="h-2 bg-gray-200 rounded w-1/2"></div> </div> <p class="text-sm text-gray-600"> ${locale === "ar" ? "\u0642\u064A\u0645 \u062A\u062C\u0631\u0628\u062A\u0643" : "Rate your experience"} </p> ` })}`} </div> </div> <!-- Floating Elements --> <div class="absolute -top-4 -right-4 w-8 h-8 bg-primary-200 rounded-full animate-pulse"></div> <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary-200 rounded-full animate-pulse delay-1000"></div> </div> </div> </div>`)} </div> <!-- CTA Section --> <div${addAttribute(`mt-20 ${theme.ctaContainer} rounded-2xl p-8 md:p-12 text-center`, "class")}> <h3${addAttribute(`text-2xl sm:text-3xl font-bold ${theme.ctaTitle} mb-4`, "class")}> ${content.cta.title} </h3> <p${addAttribute(`text-lg ${theme.ctaSubtitle} mb-8 max-w-2xl mx-auto`, "class")}> ${content.cta.subtitle} </p> <a${addAttribute("/download", "href")} class="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"> <svg class="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> ${content.cta.button} </a> </div> </div> </section>`;
}, "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/components/HowItWorks.astro", void 0);

export { $$HeroCinematic as $, $$ValueProps as a, $$Stats as b, $$AppBadges as c, $$FeaturesGrid as d, $$WhyChoose as e, $$HowItWorks as f };
