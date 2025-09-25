export { renderers } from '../renderers.mjs';

const prerender = false;
const GET = async ({ request, site }) => {
  const web = `${site?.toString().replace(/\/$/, "") || "https://www.totersapp.com"}/`;
  request.headers.get("user-agent") || "";
  const url = new URL(request.url);
  url.search ? url.search : "";
  let dest = web;
  return new Response(null, {
    status: 302,
    headers: { Location: dest }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
