import 'es-module-lexer';
import './chunks/astro-designed-error-pages_DG0u9I6G.mjs';
import 'kleur/colors';
import './chunks/astro/server_DAhPDGWu.mjs';
import 'clsx';
import 'cookie';
import { s as sequence } from './chunks/index_CWstV55Y.mjs';

const onRequest$1 = async ({ request }, next) => {
  try {
    const res = await next();
    if (res.status === 404) {
      try {
        const url = new URL(request.url);
        const ref = request.headers.get("referer") || "-";
        const ua = request.headers.get("user-agent") || "-";
        console.warn("[404]", url.pathname, "| ref:", ref, "| ua:", ua);
      } catch (logError) {
      }
    }
    return res;
  } catch (error) {
    console.error("Middleware error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
