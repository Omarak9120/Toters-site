import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_BaLT3vhi.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Counter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Counter;
  const {
    value,
    // "1000000" | "1,000,000" | "12k" | "1.2m"
    format = "plain",
    // "plain" | "kplus"
    dur = 1.2,
    className = "",
    id = "",
    lang = "en"
  } = Astro2.props;
  function toLatin(s) {
    return String(s).replace(/[٠-٩۰-۹]/g, (d) => "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9".indexOf(d) % 10 + "");
  }
  function parseTarget(raw) {
    if (!raw) return 0;
    let s = toLatin(String(raw).trim()).toLowerCase().replace(/[\s,]/g, "");
    const m = s.match(/^([0-9]*\.?[0-9]+)([kmb])?$/i);
    if (m) {
      const val = parseFloat(m[1]);
      const suf = m[2] || "";
      return Math.round(val * (suf === "k" ? 1e3 : suf === "m" ? 1e6 : suf === "b" ? 1e9 : 1));
    }
    const n = Number(s.replace(/[^0-9.]/g, ""));
    return Number.isFinite(n) ? Math.round(n) : 0;
  }
  function fmt(locale2, n, kind) {
    if (kind === "kplus") {
      if (n >= 1e6) return new Intl.NumberFormat(locale2).format(Math.round(n / 1e6)) + "M+";
      if (n >= 1e3) return new Intl.NumberFormat(locale2).format(Math.round(n / 1e3)) + "K+";
    }
    return new Intl.NumberFormat(locale2).format(n);
  }
  const end = parseTarget(value);
  const locale = lang.startsWith("ar") ? "ar-LB" : "en-US";
  const ssrText = fmt(locale, end, format);
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(id, "id")}${addAttribute(`counter ${className}`, "class")}${addAttribute(String(value), "data-count")}${addAttribute(String(dur), "data-count-dur")}${addAttribute(format, "data-count-format")}${addAttribute(locale, "data-locale")} data-ssr="1">${ssrText}</span>`;
}, "C:/Users/Omar Abdelkader/Desktop/omar abdelkader/my_work/Toters_website/toters-site/src/components/ui/Counter.astro", void 0);

export { $$Counter as $ };
