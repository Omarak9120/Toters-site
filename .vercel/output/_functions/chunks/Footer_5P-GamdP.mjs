import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent, n as renderScript } from './astro/server_BaLT3vhi.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$2 = createAstro();
const $$LanguageSwitch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LanguageSwitch;
  const { lang = "en" } = Astro2.props;
  const path = Astro2.url.pathname;
  const toEN = path.replace(/^\/ar(\/|$)/, "/");
  const toAR = path.startsWith("/ar") ? path : `/ar${path.startsWith("/") ? path : `/${path}`}`;
  return renderTemplate`${maybeRenderHead()}<nav class="text-sm"> ${lang === "ar" ? renderTemplate`<a${addAttribute(toEN, "href")} class="underline underline-offset-4" data-track="toggle_language" data-label="to_en">English</a>` : renderTemplate`<a${addAttribute(toAR, "href")} class="underline underline-offset-4" data-track="toggle_language" data-label="to_ar">العربية</a>`} </nav>`;
}, "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/components/LanguageSwitch.astro", void 0);

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { locale = "en", currentPath = "/" } = Astro2.props;
  const navItems = {
    en: [
      { label: "Home", href: "/" },
      { label: "For Customers", href: "/customers" },
      { label: "For Partners", href: "/partners" },
      { label: "For Couriers", href: "/couriers" },
      { label: "FAQ", href: "/faq" },
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press Kit", href: "/press" },
      { label: "Contact", href: "/contact" }
    ],
    ar: [
      { label: "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629", href: "/ar/" },
      { label: "\u0644\u0644\u0639\u0645\u0644\u0627\u0621", href: "/ar/customers" },
      { label: "\u0644\u0644\u0634\u0631\u0643\u0627\u0621", href: "/ar/partners" },
      { label: "\u0644\u0644\u0645\u0646\u062F\u0648\u0628\u064A\u0646", href: "/ar/couriers" },
      { label: "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629", href: "/ar/faq" },
      { label: "\u0645\u0646 \u0646\u062D\u0646", href: "/ar/about" },
      { label: "\u0627\u0644\u0648\u0638\u0627\u0626\u0641", href: "/ar/careers" },
      { label: "\u0645\u0631\u0643\u0632 \u0627\u0644\u0635\u062D\u0627\u0641\u0629", href: "/ar/press" },
      { label: "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627", href: "/ar/contact" }
    ]
  };
  const currentNavItems = navItems[locale] || navItems.en;
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200" role="banner"> <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation"> <div class="flex justify-between items-center h-16"> <!-- Logo --> <div class="flex-shrink-0"> <a${addAttribute(locale === "ar" ? "/ar/" : "/", "href")} class="flex items-center space-x-2 rtl:space-x-reverse"> <img src="/logo.jpg" alt="Toters Logo" class="h-8 w-auto" width="32" height="32" loading="eager" decoding="sync"> <span class="text-xl font-bold text-primary-600">Toters</span> </a> </div> <!-- Desktop Navigation --> <div class="hidden md:block"> <div class="ml-10 flex items-baseline space-x-8 rtl:space-x-reverse"> ${currentNavItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${currentPath === item.href || locale === "ar" && currentPath === item.href.replace("/ar", "") || locale === "en" && currentPath === item.href ? "text-primary-600 bg-primary-50" : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"}`, "class")}${addAttribute(currentPath === item.href ? "page" : void 0, "aria-current")} data-track="nav_click"${addAttribute(item.label.toLowerCase().replace(/\s+/g, "_"), "data-label")}> ${item.label} </a>`)} </div> </div> <!-- Language Switch & CTA --> <div class="flex items-center space-x-4 rtl:space-x-reverse"> <!-- Language Switch --> ${renderComponent($$result, "LanguageSwitch", $$LanguageSwitch, { "lang": locale })} <!-- Download Button --> <a${addAttribute("/download", "href")} class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2" data-track="click_cta" data-label="header_download"> ${locale === "ar" ? "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642" : "Download App"} </a> <!-- Mobile menu button --> <button class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500" aria-expanded="false" aria-label="Toggle main menu"> <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> <!-- Mobile Navigation --> <div class="md:hidden hidden" id="mobile-menu"> <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200"> ${currentNavItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${currentPath === item.href ? "text-primary-600 bg-primary-50" : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"}`, "class")}${addAttribute(currentPath === item.href ? "page" : void 0, "aria-current")} data-track="nav_click"${addAttribute(item.label.toLowerCase().replace(/\s+/g, "_"), "data-label")}> ${item.label} </a>`)} <div class="border-t border-gray-200 pt-3 mt-3"> ${renderComponent($$result, "LanguageSwitch", $$LanguageSwitch, { "lang": locale })} </div> </div> </div> </nav> </header> ${renderScript($$result, "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const { locale = "en" } = Astro2.props;
  const footerContent = {
    en: {
      description: "Your trusted delivery partner, connecting customers with local restaurants and stores.",
      sections: {
        company: {
          title: "Company",
          links: [
            { label: "About Us", href: "/about" },
            { label: "Careers", href: "/careers" },
            { label: "Press", href: "/press" },
            { label: "Blog", href: "/blog" }
          ]
        },
        customers: {
          title: "For Customers",
          links: [
            { label: "How it Works", href: "/customers" },
            { label: "Download App", href: "/download" },
            { label: "Support", href: "/support" },
            { label: "FAQ", href: "/faq" }
          ]
        },
        partners: {
          title: "For Partners",
          links: [
            { label: "Partner with Us", href: "/partners" },
            { label: "Restaurant Partners", href: "/partners/restaurants" },
            { label: "Store Partners", href: "/partners/stores" },
            { label: "Partner Portal", href: "/partners/portal" }
          ]
        },
        couriers: {
          title: "For Couriers",
          links: [
            { label: "Become a Courier", href: "/couriers" },
            { label: "Courier App", href: "/couriers/app" },
            { label: "Earnings", href: "/couriers/earnings" },
            { label: "Support", href: "/couriers/support" }
          ]
        },
        legal: {
          title: "Legal",
          links: [
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
            { label: "Cookie Policy", href: "/cookies" },
            { label: "Accessibility", href: "/accessibility" }
          ]
        }
      },
      social: {
        title: "Follow Us",
        links: [
          { label: "Facebook", href: "https://facebook.com/toters", icon: "facebook" },
          { label: "Twitter", href: "https://twitter.com/toters", icon: "twitter" },
          { label: "Instagram", href: "https://instagram.com/toters", icon: "instagram" },
          { label: "LinkedIn", href: "https://linkedin.com/company/toters", icon: "linkedin" }
        ]
      },
      bottom: {
        copyright: "\xA9 2024 Toters. All rights reserved.",
        links: [
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
          { label: "Cookie Settings", href: "/cookies" }
        ]
      }
    },
    ar: {
      description: "\u0634\u0631\u064A\u0643 \u0627\u0644\u062A\u0648\u0635\u064A\u0644 \u0627\u0644\u0645\u0648\u062B\u0648\u0642\u060C \u064A\u0631\u0628\u0637 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0628\u0627\u0644\u0645\u0637\u0627\u0639\u0645 \u0648\u0627\u0644\u0645\u062A\u0627\u062C\u0631 \u0627\u0644\u0645\u062D\u0644\u064A\u0629.",
      sections: {
        company: {
          title: "\u0627\u0644\u0634\u0631\u0643\u0629",
          links: [
            { label: "\u0645\u0646 \u0646\u062D\u0646", href: "/ar/about" },
            { label: "\u0627\u0644\u0648\u0638\u0627\u0626\u0641", href: "/ar/careers" },
            { label: "\u0627\u0644\u0623\u062E\u0628\u0627\u0631", href: "/ar/press" },
            { label: "\u0627\u0644\u0645\u062F\u0648\u0646\u0629", href: "/ar/blog" }
          ]
        },
        customers: {
          title: "\u0644\u0644\u0639\u0645\u0644\u0627\u0621",
          links: [
            { label: "\u0643\u064A\u0641 \u064A\u0639\u0645\u0644", href: "/ar/customers" },
            { label: "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642", href: "/ar/download" },
            { label: "\u0627\u0644\u062F\u0639\u0645", href: "/ar/support" },
            { label: "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629", href: "/ar/faq" }
          ]
        },
        partners: {
          title: "\u0644\u0644\u0634\u0631\u0643\u0627\u0621",
          links: [
            { label: "\u0643\u0646 \u0634\u0631\u064A\u0643\u0627\u064B", href: "/ar/partners" },
            { label: "\u0634\u0631\u0643\u0627\u0621 \u0627\u0644\u0645\u0637\u0627\u0639\u0645", href: "/ar/partners/restaurants" },
            { label: "\u0634\u0631\u0643\u0627\u0621 \u0627\u0644\u0645\u062A\u0627\u062C\u0631", href: "/ar/partners/stores" },
            { label: "\u0628\u0648\u0627\u0628\u0629 \u0627\u0644\u0634\u0631\u0643\u0627\u0621", href: "/ar/partners/portal" }
          ]
        },
        couriers: {
          title: "\u0644\u0644\u0645\u0646\u062F\u0648\u0628\u064A\u0646",
          links: [
            { label: "\u0643\u0646 \u0645\u0646\u062F\u0648\u0628\u0627\u064B", href: "/ar/couriers" },
            { label: "\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0645\u0646\u062F\u0648\u0628", href: "/ar/couriers/app" },
            { label: "\u0627\u0644\u0623\u0631\u0628\u0627\u062D", href: "/ar/couriers/earnings" },
            { label: "\u0627\u0644\u062F\u0639\u0645", href: "/ar/couriers/support" }
          ]
        },
        legal: {
          title: "\u0642\u0627\u0646\u0648\u0646\u064A",
          links: [
            { label: "\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629", href: "/ar/privacy" },
            { label: "\u0634\u0631\u0648\u0637 \u0627\u0644\u062E\u062F\u0645\u0629", href: "/ar/terms" },
            { label: "\u0633\u064A\u0627\u0633\u0629 \u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637", href: "/ar/cookies" },
            { label: "\u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0648\u0635\u0648\u0644", href: "/ar/accessibility" }
          ]
        }
      },
      social: {
        title: "\u062A\u0627\u0628\u0639\u0646\u0627",
        links: [
          { label: "\u0641\u064A\u0633\u0628\u0648\u0643", href: "https://facebook.com/toters", icon: "facebook" },
          { label: "\u062A\u0648\u064A\u062A\u0631", href: "https://twitter.com/toters", icon: "twitter" },
          { label: "\u0625\u0646\u0633\u062A\u063A\u0631\u0627\u0645", href: "https://instagram.com/toters", icon: "instagram" },
          { label: "\u0644\u064A\u0646\u0643\u062F \u0625\u0646", href: "https://linkedin.com/company/toters", icon: "linkedin" }
        ]
      },
      bottom: {
        copyright: "\xA9 2024 \u062A\u0648\u062A\u064A\u0631\u0632. \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629.",
        links: [
          { label: "\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629", href: "/ar/privacy" },
          { label: "\u0634\u0631\u0648\u0637 \u0627\u0644\u062E\u062F\u0645\u0629", href: "/ar/terms" },
          { label: "\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637", href: "/ar/cookies" }
        ]
      }
    }
  };
  const content = footerContent[locale] || footerContent.en;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-white" role="contentinfo"> <!-- Main Footer Content --> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"> <!-- Brand Section --> <div class="lg:col-span-2"> <div class="flex items-center space-x-2 rtl:space-x-reverse mb-4"> <img src="/logo-white.svg" alt="Toters Logo" class="h-8 w-auto" width="32" height="32" loading="lazy" decoding="async"> <span class="text-xl font-bold text-white">Toters</span> </div> <p class="text-gray-300 mb-6 max-w-md"> ${content.description} </p> <!-- Social Links --> <div> <h3 class="text-sm font-semibold text-white mb-4">${content.social.title}</h3> <div class="flex space-x-4 rtl:space-x-reverse"> ${content.social.links.map((social) => renderTemplate`<a${addAttribute(social.href, "href")} class="text-gray-400 hover:text-white transition-colors duration-200"${addAttribute(social.label, "aria-label")} target="_blank" rel="noopener noreferrer"> <span class="sr-only">${social.label}</span> ${social.icon === "facebook" && renderTemplate`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path> </svg>`} ${social.icon === "twitter" && renderTemplate`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path> </svg>`} ${social.icon === "instagram" && renderTemplate`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243s.122-.928.49-1.243c.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243s-.122.928-.49 1.243c-.369.315-.807.49-1.297.49z"></path> </svg>`} ${social.icon === "linkedin" && renderTemplate`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg>`} </a>`)} </div> </div> </div> <!-- Navigation Sections --> <div class="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8"> <!-- Company --> <div> <h3 class="text-sm font-semibold text-white mb-4">${content.sections.company.title}</h3> <ul class="space-y-3"> ${content.sections.company.links.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-gray-300 hover:text-white transition-colors duration-200 text-sm" data-track="footer_click"${addAttribute(link.label.toLowerCase().replace(/\s+/g, "_"), "data-label")}> ${link.label} </a> </li>`)} </ul> </div> <!-- Customers --> <div> <h3 class="text-sm font-semibold text-white mb-4">${content.sections.customers.title}</h3> <ul class="space-y-3"> ${content.sections.customers.links.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-gray-300 hover:text-white transition-colors duration-200 text-sm" data-track="footer_click"${addAttribute(link.label.toLowerCase().replace(/\s+/g, "_"), "data-label")}> ${link.label} </a> </li>`)} </ul> </div> <!-- Partners --> <div> <h3 class="text-sm font-semibold text-white mb-4">${content.sections.partners.title}</h3> <ul class="space-y-3"> ${content.sections.partners.links.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-gray-300 hover:text-white transition-colors duration-200 text-sm" data-track="footer_click"${addAttribute(link.label.toLowerCase().replace(/\s+/g, "_"), "data-label")}> ${link.label} </a> </li>`)} </ul> </div> <!-- Couriers --> <div> <h3 class="text-sm font-semibold text-white mb-4">${content.sections.couriers.title}</h3> <ul class="space-y-3"> ${content.sections.couriers.links.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-gray-300 hover:text-white transition-colors duration-200 text-sm" data-track="footer_click"${addAttribute(link.label.toLowerCase().replace(/\s+/g, "_"), "data-label")}> ${link.label} </a> </li>`)} </ul> </div> </div> </div> </div> <!-- Bottom Footer --> <div class="border-t border-gray-800"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"> <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"> <p class="text-gray-400 text-sm"> ${content.bottom.copyright} </p> <div class="flex space-x-6 rtl:space-x-reverse"> ${content.bottom.links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-gray-400 hover:text-white transition-colors duration-200 text-sm"> ${link.label} </a>`)} </div> </div> </div> </div> </footer>`;
}, "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/components/Footer.astro", void 0);

export { $$Header as $, $$Footer as a };
