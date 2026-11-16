/* Static build: renders every page in src/pages to clean, extension-free URLs.
   /en/            -> en/index.html
   /en/about/      -> en/about/index.html
   Works on GitHub Pages and any static host without rewrites.
   Run: node src/build.mjs */
import { readdirSync, writeFileSync, mkdirSync, existsSync, unlinkSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { page } from './layout.mjs';
import { markPaths } from './lib.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pagesDir = join(root, 'src', 'pages');
const files = readdirSync(pagesDir).filter((f) => f.endsWith('.mjs'));
const slugs = files.map((f) => f.replace('.mjs', ''));

/* Source pages link to each other as "about.html", "index.html#x" or
   "../ar/about.html", with assets at "../assets/". Rewrite those for the
   folder each page is written to. */
function rewrite(html, slug) {
  const up = slug === 'index' ? '../' : '../../'; // to the site root
  const same = slug === 'index' ? './' : '../';    // to this language's root
  const dir = (s) => (s === 'index' ? '' : s + '/');
  return html
    .replace(/(href|src|content)="\.\.\/assets\//g, `$1="${up}assets/`)
    .replace(/href="\.\.\/(en|ar)\/([a-z-]+)\.html(#[^"]*)?"/g, (m, L, s, h) => (slugs.includes(s) ? `href="${up}${L}/${dir(s)}${h || ''}"` : m))
    .replace(/href="([a-z-]+)\.html(#[^"]*)?"/g, (m, s, h) => (slugs.includes(s) ? `href="${same}${dir(s)}${h || ''}"` : m));
}

for (const L of ['en', 'ar']) {
  const t = (en, ar) => (L === 'ar' ? ar : en);
  const out = join(root, L);
  mkdirSync(out, { recursive: true });
  for (const f of files) {
    const slug = f.replace('.mjs', '');
    // remove the flat file from the previous URL scheme (e.g. en/about.html)
    if (slug !== 'index' && existsSync(join(out, slug + '.html'))) unlinkSync(join(out, slug + '.html'));
    const mod = await import(pathToFileURL(join(pagesDir, f)).href);
    const html = rewrite(page({ L, t, slug, ...mod.default(t, L) }), slug);
    const dest = slug === 'index' ? out : join(out, slug);
    mkdirSync(dest, { recursive: true });
    writeFileSync(join(dest, 'index.html'), html);
    console.log(`/${L}/${slug === 'index' ? '' : slug + '/'}  ${(html.length / 1024).toFixed(1)} KB`);
  }
}

/* language-aware entry point */
writeFileSync(join(root, 'index.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Dar Al Tamleek | دار التمليك</title>
<link rel="alternate" hreflang="en" href="en/"><link rel="alternate" hreflang="ar" href="ar/">
<script>(function(){var l='en';try{var q=new URLSearchParams(location.search).get('lang');l=q||localStorage.getItem('dat-lang')||((navigator.language||'').slice(0,2)==='ar'?'ar':'en');}catch(e){}location.replace((l==='ar'?'ar':'en')+'/');})();</script>
<style>body{margin:0;background:#faf6f0}</style></head><body><noscript><a href="en/">English</a> · <a href="ar/">العربية</a></noscript></body></html>`);

/* GitHub Pages: serve files as-is (no Jekyll processing) */
writeFileSync(join(root, '.nojekyll'), '');

/* favicon from the vector mark */
mkdirSync(join(root, 'assets', 'img', 'brand'), { recursive: true });
writeFileSync(join(root, 'assets', 'img', 'brand', 'favicon.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -6 84 70"><rect x="-4" y="-6" width="84" height="70" rx="16" fill="#fff"/><g fill="#e4312b">${markPaths().map((d) => `<path d="${d}"/>`).join('')}</g></svg>`);
writeFileSync(join(root, 'assets', 'img', 'brand', 'mark.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 78 60"><g fill="#e4312b">${markPaths().map((d) => `<path d="${d}"/>`).join('')}<circle cx="48.3" cy="1.2" r="1.05"/><circle cx="13.4" cy="11.4" r="1.05"/><circle cx="73.6" cy="16.6" r="1.05"/><circle cx="2.2" cy="40.2" r="1.05"/><circle cx="55.8" cy="56.4" r="1.05"/></g></svg>`);
console.log('done');
