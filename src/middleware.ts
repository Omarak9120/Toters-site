import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = async ({ request }, next) => {
  try {
    const res = await next();
    if (res.status === 404) {
      try {
        const url = new URL(request.url);
        const ref = request.headers.get("referer") || "-";
        const ua = request.headers.get("user-agent") || "-";
        console.warn("[404]", url.pathname, "| ref:", ref, "| ua:", ua);
      } catch (logError) {
        // Silently ignore logging errors
      }
    }
    return res;
  } catch (error) {
    // If anything goes wrong, return a basic response
    console.error("Middleware error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
