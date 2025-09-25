import type { APIRoute } from "astro";

export const prerender = false;

const IOS = /iPad|iPhone|iPod/i;
const ANDROID = /Android/i;

export const GET: APIRoute = async ({ request, site }) => {
  const ios = import.meta.env.APP_STORE_URL || "";
  const android = import.meta.env.PLAY_STORE_URL || "";
  const web = `${site?.toString().replace(/\/$/, "") || "https://www.totersapp.com"}/`;

  const ua = request.headers.get("user-agent") || "";
  const url = new URL(request.url);

  // keep any UTM/query params
  const qs = url.search ? url.search : "";

  let dest = web;
  if (IOS.test(ua) && ios) dest = ios + qs;
  else if (ANDROID.test(ua) && android) dest = android + qs;

  return new Response(null, {
    status: 302,
    headers: { Location: dest }
  });
};


