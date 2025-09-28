// src/scripts/appMetaDev.ts
interface Window {
  __appMeta?: { apple: string | null; play: string | null };
}

const apple = (document.querySelector('meta[name="apple-itunes-app"]') as HTMLMetaElement | null)?.content || null;
const play  = (document.querySelector('meta[name="google-play-app"]') as HTMLMetaElement | null)?.content || null;
(window as any).__appMeta = { apple, play };
