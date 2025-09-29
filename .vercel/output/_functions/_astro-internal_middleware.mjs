import 'es-module-lexer';
import './chunks/astro-designed-error-pages_DG0u9I6G.mjs';
import 'kleur/colors';
import './chunks/astro/server_DAhPDGWu.mjs';
import 'clsx';
import 'cookie';
import { s as sequence } from './chunks/index_CWstV55Y.mjs';

const onRequest$1 = async (ctx, next) => {
  try {
    return await next();
  } catch (err) {
    console.error("[middleware]", err);
    return next();
  }
};

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
