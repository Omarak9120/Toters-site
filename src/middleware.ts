import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = async (ctx, next) => {
  try {
    return await next();
  } catch (err) {
    console.error('[middleware]', err);
    // never crash the request — continue to the next handler
    return next();
  }
};
