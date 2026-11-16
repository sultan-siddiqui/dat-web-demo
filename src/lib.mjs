/* Shared helpers, brand mark, icons and small components used by every page. */

export const SITE = {
  phone: '800 124 0166',
  phoneHref: 'tel:8001240166',
  login: 'https://digital.daraltamleek.com/Accounts/Login',
  legacy: 'https://www.daraltamleek.com',
  sama: 'https://www.sama.gov.sa/ar-sa/LawsRegulations/ConsumerProtectionRules/Consumer_Protection.pdf',
  simah: 'https://www.simah.com/',
  vision: 'https://www.vision2030.gov.sa/',
  sakani: 'https://sakani.sa/',
  sibor: { value: '5.9516', date: '16/11/2026' },
};

/* ---------- brand mark ----------
   Vector rebuild of the Dar Al Tamleek star: four tapered strokes with a dot at
   each tip, traced from the logo (viewBox 0 0 76 58). */
const P = { T: [48.3, 1.2], UL: [13.4, 11.4], R: [73.6, 16.6], LL: [2.2, 40.2], B: [55.8, 56.4] };
const STROKES = [
  { a: 'LL', b: 'T', h: 1.3, p: 0.74, bend: 2.6 },
  { a: 'T', b: 'B', h: 1.2, p: 0.3, bend: 8 },
  { a: 'UL', b: 'R', h: 1.1, p: 0.6, bend: 0.9 },
  { a: 'LL', b: 'R', h: 0.95, p: 0.68, bend: 0.8 },
];
const f = (n) => +n.toFixed(2);
function lens(s) {
  const [ax, ay] = P[s.a], [bx, by] = P[s.b];
  const dx = bx - ax, dy = by - ay, len = Math.hypot(dx, dy);
  const nx = -dy / len, ny = dx / len;
  const cx = ax + dx * s.p + nx * s.bend, cy = ay + dy * s.p + ny * s.bend;
  const w = s.h * 2;
  return `M${f(ax)} ${f(ay)}Q${f(cx + nx * w)} ${f(cy + ny * w)} ${f(bx)} ${f(by)}Q${f(cx - nx * w)} ${f(cy - ny * w)} ${f(ax)} ${f(ay)}Z`;
}
function spine(s) {
  const [ax, ay] = P[s.a], [bx, by] = P[s.b];
  const dx = bx - ax, dy = by - ay, len = Math.hypot(dx, dy);
  const nx = -dy / len, ny = dx / len;
  const cx = ax + dx * s.p + nx * s.bend, cy = ay + dy * s.p + ny * s.bend;
  return `M${f(ax)} ${f(ay)}Q${f(cx)} ${f(cy)} ${f(bx)} ${f(by)}`;
}
let markN = 0;
/** Inline SVG star. `draw` adds masks so main.js can draw the strokes in. */
export function mark({ cls = '', draw = false, label = '' } = {}) {
  const id = 'mk' + (++markN);
  const a11y = label ? `role="img" aria-label="${label}"` : 'aria-hidden="true"';
  const dots = Object.values(P).map(([x, y], i) => `<circle class="mark__dot" style="--i:${i}" cx="${x}" cy="${y}" r="1.05"/>`).join('');
  if (!draw) {
    return `<svg class="mark ${cls}" viewBox="-1 -1 78 60" ${a11y}><g fill="currentColor">${STROKES.map((s) => `<path d="${lens(s)}"/>`).join('')}${dots}</g></svg>`;
  }
  const masks = STROKES.map((s, i) => `<mask id="${id}m${i}" maskUnits="userSpaceOnUse" x="-2" y="-2" width="80" height="62"><path class="mark__spine" d="${spine(s)}" pathLength="1" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round"/></mask>`).join('');
  const paths = STROKES.map((s, i) => `<path class="mark__stroke" mask="url(#${id}m${i})" d="${lens(s)}"/>`).join('');
  return `<svg class="mark mark--draw ${cls}" viewBox="-1 -1 78 60" ${a11y}><defs>${masks}</defs><g fill="currentColor">${paths}${dots}</g></svg>`;
}
export const markPaths = () => STROKES.map(lens);

/** Header / footer lockup. The wordmark is typeset; swap for the official vector when supplied. */
export function logo(t, { cls = '' } = {}) {
  return `<span class="logo ${cls}">${mark({ cls: 'logo__mark' })}<span class="logo__type"><b class="logo__ar" lang="ar">دار التمليك</b><b class="logo__en" lang="en">Dar Al Tamleek</b></span></span>`;
}

/* ---------- icons (24px, 1.6 stroke) ---------- */
const I = {
  arrow: '<path d="M4 12h15M14 6l6 6-6 6"/>',
  'arrow-up': '<path d="M12 20V5M6 10l6-6 6 6"/>',
  check: '<path d="M4.5 12.5l4.5 4.5L19.5 6.5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  phone: '<path d="M5 4h3.5l1.7 4.3-2.2 1.4a11 11 0 0 0 6.3 6.3l1.4-2.2L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5C10.6 20 4 13.4 3.5 5.6A1.5 1.5 0 0 1 5 4z"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1.2-4 4.3-6 8-6s6.8 2 8 6"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.9-3.4 3.4-5.2 6.5-5.2s5.6 1.8 6.5 5.2"/><path d="M15.5 4.8a3.4 3.4 0 0 1 0 6.4M17.5 14.9c2 .6 3.4 2.3 4 5.1"/>',
  home: '<path d="M3.5 11L12 4l8.5 7"/><path d="M5.5 9.5V20h13V9.5"/><path d="M10 20v-5.5h4V20"/>',
  key: '<circle cx="8" cy="15" r="4.5"/><path d="M11.2 11.8L20 3M16.5 6.5l2.5 2.5M14 9l2 2"/>',
  doc: '<path d="M6 3h8l5 5v13H6z"/><path d="M14 3v5h5M9 13h7M9 17h5"/>',
  deed: '<path d="M5 3h10l4 4v14H5z"/><path d="M8.5 9h6M8.5 12.5h7"/><circle cx="14.5" cy="17" r="2"/><path d="M13.5 18.8L13 21l1.5-.8 1.5.8-.5-2.2"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  percent: '<path d="M19 5L5 19"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/>',
  shield: '<path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  building: '<path d="M4 21V5l8-2v18M12 8l8 2.5V21M2.5 21h19"/><path d="M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2M3 12.5h18"/>',
  handshake: '<path d="M2.5 12l3.5-4 4 1.2 2-1.7 3.2.5 3.8 4"/><path d="M5.8 13.5l3.6 3.6a1.4 1.4 0 0 0 2-2M10.2 15.7l1.6 1.6a1.4 1.4 0 0 0 2-2l-1.2-1.2M13.4 16.5a1.4 1.4 0 0 0 2-2l-3-3"/><path d="M21.5 12l-3.5 3"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  pin: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6l8.5 7 8.5-7"/>',
  download: '<path d="M12 4v11M7 10.5l5 5 5-5M4.5 20h15"/>',
  external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5H10"/>',
  refresh: '<path d="M20 11a8 8 0 0 0-14.3-4.5L4 8.5M4 4v4.5h4.5M4 13a8 8 0 0 0 14.3 4.5l1.7-2M20 20v-4.5h-4.5"/>',
  land: '<path d="M3 18l5-8 4 5 3-3.5 6 6.5z"/><circle cx="16.5" cy="6.5" r="2"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
  award: '<circle cx="12" cy="9" r="5.5"/><path d="M8.5 13.5L7 21l5-2.5 5 2.5-1.5-7.5"/>',
  scale: '<path d="M12 4v16M6 20h12M4 8h16M7 8l-3 6.5a3 3 0 0 0 6 0zM17 8l-3 6.5a3 3 0 0 0 6 0z"/>',
  lock: '<rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
  coins: '<ellipse cx="9" cy="7" rx="5.5" ry="2.5"/><path d="M3.5 7v4c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5V7"/><path d="M9.5 15.4c.6 1.2 2.9 2.1 5.5 2.1 3 0 5.5-1.1 5.5-2.5v-4c0-1.2-1.8-2.2-4.3-2.4"/><path d="M20.5 15v4c0 1.4-2.5 2.5-5.5 2.5S9.5 20.4 9.5 19v-3.6"/>',
  cpu: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9.5 9.5h5v5h-5zM9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5"/>',
  heart: '<path d="M12 20s-7.5-4.6-7.5-10A4.4 4.4 0 0 1 12 7.2 4.4 4.4 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z"/>',
  bolt: '<path d="M13 2.5L5 13.5h6l-1 8 8-11h-6z"/>',
  target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r=".8"/>',
  sparkle: '<path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6z"/><path d="M19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/>',
  globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.5 3.5 5.3 3.5 8.5s-1.1 6-3.5 8.5c-2.4-2.5-3.5-5.3-3.5-8.5S9.6 6 12 3.5z"/>',
  grace: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12h4.5"/><path d="M12 3.5v-1M20.5 12h1"/>',
  apartment: '<path d="M5 21V3.5h14V21M2.5 21h19"/><path d="M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10.5 21v-3h3v3"/>',
  family: '<circle cx="8" cy="6.5" r="2.5"/><circle cx="16" cy="6.5" r="2.5"/><circle cx="12" cy="13" r="2"/><path d="M3.5 20v-4.5c0-2 1.8-3.5 4.5-3.5M20.5 20v-4.5c0-2-1.8-3.5-4.5-3.5M8.5 20v-1.5c0-1.6 1.6-2.8 3.5-2.8s3.5 1.2 3.5 2.8V20"/>',
  retire: '<circle cx="12" cy="5.5" r="2.5"/><path d="M12 8v6l-3 7M12 14l3 7M8 11h8"/><path d="M18.5 12v9"/>',
  passport: '<rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="10.5" r="3"/><path d="M9 17h6"/>',
  gov: '<path d="M3 9.5L12 4l9 5.5M4.5 9.5V19M9 9.5V19M15 9.5V19M19.5 9.5V19M2.5 20h19"/>',
  calc: '<rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M8 6.5h8v3H8zM8.5 13h.01M12 13h.01M15.5 13h.01M8.5 16.5h.01M12 16.5h.01M15.5 16.5h.01"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',
  quote: '<path d="M10 7H6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3v1a3 3 0 0 1-3 3M19 7h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3v1a3 3 0 0 1-3 3"/>',
  menu: '<path d="M4 8h16M4 16h16"/>',
  login: '<path d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4M14 16l4-4-4-4M18 12H9"/>',
  play: '<path d="M8 5.5v13l10.5-6.5z"/>',
  x: '<path d="M4 4l16 16M20 4L4 20"/>',
  linkedin: '<rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><path d="M8 10.5V16M8 7.8v.01M11.5 16v-5.5M11.5 13c0-1.7 1-2.6 2.4-2.6 1.4 0 2.1.9 2.1 2.6v3"/>',
  instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17 7h.01"/>',
  youtube: '<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.2v5.6l4.8-2.8z"/>',
};
export function icon(name, cls = '') {
  return `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true">${I[name] || ''}</svg>`;
}
export const arrow = (cls = '') => icon('arrow', 'arr ' + cls);

/* ---------- small components ---------- */
export function btn(href, label, { variant = 'red', cls = '', ext = false, ic = 'arrow', attrs = '' } = {}) {
  const target = ext ? ' target="_blank" rel="noopener"' : '';
  return `<a class="btn btn--${variant} ${cls}" href="${href}"${target} ${attrs} data-magnetic><span class="btn__label">${label}</span><span class="btn__ic">${icon(ext ? 'external' : ic, ic === 'arrow' && !ext ? 'arr' : '')}</span></a>`;
}

export function sbtn(label, { variant = 'red', ic = 'arrow', type = 'submit', attrs = '', cls = '' } = {}) {
  return `<button class="btn btn--${variant} ${cls}" type="${type}" ${attrs}><span class="btn__label">${label}</span><span class="btn__ic">${icon(ic, ic === 'arrow' ? 'arr' : '')}</span></button>`;
}

export function eyebrow(text, cls = '') {
  return `<p class="eyebrow ${cls}">${mark({ cls: 'eyebrow__mark' })}<span>${text}</span></p>`;
}

/** Section heading: eyebrow + split-line title + optional lead. */
export function head({ kicker, title, lead = '', cls = '', align = '' }) {
  return `<header class="shead ${align ? 'shead--' + align : ''} ${cls}">
    ${kicker ? eyebrow(kicker) : ''}
    <h2 class="shead__title" data-split>${title}</h2>
    ${lead ? `<p class="shead__lead" data-reveal>${lead}</p>` : ''}
  </header>`;
}

/** Accordion list. items: [{q, a}] */
export function faq(items, { cls = '', name = 'faq' } = {}) {
  return `<div class="acc ${cls}" data-acc>${items.map((it, i) => `
    <div class="acc__item" data-reveal>
      <h3 class="acc__h"><button class="acc__btn" type="button" aria-expanded="false" aria-controls="${name}-${i}" id="${name}-b${i}"><span class="acc__n">${String(i + 1).padStart(2, '0')}</span><span class="acc__q">${it.q}</span><span class="acc__pm" aria-hidden="true"><i></i><i></i></span></button></h3>
      <div class="acc__panel" id="${name}-${i}" role="region" aria-labelledby="${name}-b${i}"><div class="acc__in">${it.a}</div></div>
    </div>`).join('')}
  </div>`;
}

/** Inner-page hero with arch image. */
export function pageHero(t, { crumbs = [], kicker, title, lead, img, alt = '', chips = [], actions = '' }) {
  const bc = crumbs.length ? `<nav class="crumbs" aria-label="${t('Breadcrumb', 'مسار التنقل')}"><a href="index.html">${t('Home', 'الرئيسية')}</a>${crumbs.map((c) => (c.href ? `<span>/</span><a href="${c.href}">${c.label}</a>` : `<span>/</span><span aria-current="page">${c.label}</span>`)).join('')}</nav>` : '';
  return `<section class="phero" data-phero>
    <div class="phero__pattern" aria-hidden="true"></div>
    <div class="wrap phero__grid">
      <div class="phero__copy">
        ${bc}
        ${kicker ? eyebrow(kicker, 'phero__kicker') : ''}
        <h1 class="phero__title" data-split>${title}</h1>
        ${lead ? `<p class="phero__lead" data-reveal>${lead}</p>` : ''}
        ${chips.length ? `<ul class="chips" data-reveal>${chips.map((c) => `<li>${icon('check')}${c}</li>`).join('')}</ul>` : ''}
        ${actions ? `<div class="phero__actions" data-reveal>${actions}</div>` : ''}
      </div>
      <div class="phero__media">
        <div class="arch arch--hero" data-arch>
          <img src="../assets/img/photo/${img}.webp" alt="${alt}" data-parallax="0.12">
        </div>
        ${mark({ cls: 'phero__star', draw: true })}
      </div>
    </div>
  </section>`;
}

/** Big numbers row. items: [{n, suffix, prefix, label}] */
export function stats(items, cls = '') {
  return `<ul class="stats ${cls}">${items.map((s) => `<li class="stat" data-reveal><span class="stat__n">${s.prefix || ''}<b data-count="${s.n}">${s.n}</b>${s.suffix || ''}</span><span class="stat__l">${s.label}</span></li>`).join('')}</ul>`;
}

/** CTA band reused at the bottom of pages. */
export function ctaBand(t, { title, lead, primary, secondary } = {}) {
  return `<section class="cta" data-cta>
    <div class="cta__glow" aria-hidden="true"></div>
    ${mark({ cls: 'cta__star', draw: true })}
    <div class="wrap cta__in">
      <h2 class="cta__title" data-split>${title || t('Your new address is closer than you think.', 'عنوانك الجديد أقرب مما تتوقع.')}</h2>
      <p class="cta__lead" data-reveal>${lead || t('Register your interest in two minutes. A home finance specialist calls you back, explains your options and pre-qualifies you, at no cost.', 'سجّل اهتمامك خلال دقيقتين، وسيتواصل معك أخصائي تمويل عقاري ليشرح لك الخيارات المتاحة ويمنحك التأهيل المبدئي دون أي تكلفة.')}</p>
      <div class="cta__actions" data-reveal>
        ${primary || btn('apply.html', t('Register your interest', 'سجّل اهتمامك'), { variant: 'white' })}
        ${secondary || `<a class="cta__phone" href="${SITE.phoneHref}">${icon('phone')}<span><small>${t('Toll-free', 'الرقم المجاني')}</small><b dir="ltr">${SITE.phone}</b></span></a>`}
      </div>
    </div>
  </section>`;
}

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
