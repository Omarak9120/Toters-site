import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = async ({ request }, next) => {
  const res = await next();
  if (res.status === 404) {
    try {
      const url = new URL(request.url);
      const ref = request.headers.get("referer") || "-";
      const ua = request.headers.get("user-agent") || "-";
      console.warn("[404]", url.pathname, "| ref:", ref, "| ua:", ua);
    } catch {}
  }
  return res;
};
