import { ImageResponse } from '@vercel/og';
export { renderers } from '../../renderers.mjs';

const config = { runtime: "edge" };
const BG = "#0B1220";
const FG = "#FFFFFF";
const ACCENT = "#10B981";
const GET = async ({ request }) => {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Toters";
  const subtitle = searchParams.get("subtitle") || "Get anything. Fast.";
  const lang = (searchParams.get("lang") || "en").toLowerCase();
  const html = `
    <div style="
      width: 1200px;
      height: 630px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 64px;
      background: ${BG};
      color: ${FG};
      font-family: system-ui, sans-serif;
      direction: ${lang.startsWith("ar") ? "rtl" : "ltr"};
    ">
      <div style="font-size: 64px; font-weight: 800; line-height: 1.1;">${title}</div>
      <div style="margin-top: 16px; font-size: 28px; opacity: 0.9;">${subtitle}</div>
      <div style="position: absolute; left: 64px; bottom: 48px; font-size: 24px; color: ${ACCENT};">
        totersapp.com
      </div>
    </div>
  `;
  const img = new ImageResponse(html, { width: 1200, height: 630 });
  img.headers.set("cache-control", "public, max-age=86400, s-maxage=86400, immutable");
  return img;
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  config
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
