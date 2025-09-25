import 'es-module-lexer';
import './chunks/astro-designed-error-pages_B8k1CVYU.mjs';
import 'kleur/colors';
import './chunks/astro/server_BaLT3vhi.mjs';
import 'clsx';
import 'cookie';
import { s as sequence } from './chunks/index_D2JBDum_.mjs';

const onRequest$1 = async ({ request }, next) => {
  const res = await next();
  if (res.status === 404) {
    try {
      const url = new URL(request.url);
      const ref = request.headers.get("referer") || "-";
      const ua = request.headers.get("user-agent") || "-";
      console.warn("[404]", url.pathname, "| ref:", ref, "| ua:", ua);
    } catch {
    }
  }
  return res;
};

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
