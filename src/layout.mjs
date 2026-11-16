import { SITE, mark, logo, icon, btn } from './lib.mjs';

export function nav(t) {
  return [
    {
      key: 'financing', label: t('Home finance', 'التمويل العقاري'), href: 'financing.html',
      img: 'villa-palms', blurb: t('Fixed-rate Murabaha finance for citizens, residents and retirees.', 'تمويل عقاري بصيغة المرابحة بهامش ربح ثابت للمواطنين والمقيمين والمتقاعدين.'),
      items: [
        { href: 'financing.html', label: t('Home Finance Murabaha', 'برنامج التمويل العقاري مرابحة'), sub: t('Villas, apartments, buildings, land, refinance', 'فلل وشقق ومبانٍ وأراضٍ وإعادة تمويل'), ic: 'home' },
        { href: 'housing-support.html', label: t('Housing Support (REDF & MOH)', 'الدعم السكني (الصندوق والوزارة)'), sub: t('Subsidy built into your finance, 5% down payment', 'دعم يُضاف إلى تمويلك ودفعة أولى 5%'), ic: 'family' },
        { href: 'calculator.html', label: t('Finance calculator', 'حاسبة التمويل'), sub: t('Estimate your monthly instalment', 'احسب قسطك الشهري التقديري'), ic: 'calc' },
        { href: 'apply.html', label: t('Register your interest', 'سجّل اهتمامك'), sub: t('A specialist calls you back', 'يتواصل معك أخصائي تمويل'), ic: 'user' },
      ],
    },
    {
      key: 'business', label: t('For business', 'حلول الأعمال'), href: 'business.html',
      img: 'meeting', blurb: t('Programme management, partner finance and employee home-ownership benefits.', 'إدارة البرامج وحلول الشركاء ومزايا تملّك المساكن للموظفين.'),
      items: [
        { href: 'business.html#management', label: t('Management services', 'الخدمات الإدارية'), sub: t('SAR 11B+ in assets managed', 'أكثر من 11 مليار ريال من الأصول المُدارة'), ic: 'layers' },
        { href: 'business.html#realtors', label: t('Realtors', 'مكاتب العقار'), sub: t('500+ realtor partners', 'أكثر من 500 مكتب عقاري شريك'), ic: 'handshake' },
        { href: 'business.html#developers', label: t('Real estate developers', 'مطورو العقارات'), sub: t('Instant buyer pre-qualification', 'تأهيل مبدئي فوري للمشترين'), ic: 'building' },
        { href: 'business.html#employers', label: t('Employer program', 'برنامج الشركات'), sub: t('A home-ownership benefit for your team', 'ميزة تملّك المسكن لموظفيك'), ic: 'briefcase' },
      ],
    },
    {
      key: 'about', label: t('About', 'عن دار التمليك'), href: 'about.html',
      img: 'riyadh-kc', blurb: t('Saudi Arabia\'s home-finance specialist since 2008.', 'الأخصائيون في حلول التمويل السكني منذ 2008.'),
      items: [
        { href: 'about.html', label: t('Who we are', 'من نحن'), sub: t('Vision, principles and awards', 'الرؤية والمبادئ والجوائز'), ic: 'sparkle' },
        { href: 'shariah.html', label: t('Shariah compliance', 'التوافق مع أحكام الشريعة'), sub: t('Our Shariah Board and fatwas', 'الهيئة الشرعية والفتاوى'), ic: 'scale' },
        { href: 'investors.html', label: t('Investor relations', 'علاقات المستثمرين'), sub: t('Shareholders and financial reports', 'المساهمون والقوائم المالية'), ic: 'chart' },
        { href: 'about.html#board', label: t('Board of directors', 'مجلس الإدارة'), sub: t('Governance and leadership', 'الحوكمة والقيادة'), ic: 'users' },
        { href: 'careers.html', label: t('Careers', 'الوظائف'), sub: t('Build a career in home finance', 'ابنِ مسيرتك في التمويل السكني'), ic: 'briefcase' },
        { href: 'media.html', label: t('Media coverage', 'التغطية الإعلامية'), sub: t('News, awards and partnerships', 'الأخبار والجوائز والشراكات'), ic: 'award' },
      ],
    },
    { key: 'contact', label: t('Contact', 'تواصل معنا'), href: 'contact.html' },
  ];
}

const FONTS = {
  en: 'https://fonts.googleapis.com/css2?family=Alexandria:wght@500;600&family=Fraunces:opsz,wght@9..144,300..600&family=Manrope:wght@400..800&display=swap',
  ar: 'https://fonts.googleapis.com/css2?family=Alexandria:wght@300..700&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Manrope:wght@500..800&display=swap',
};

export function page({ L, t, slug, key, title, desc, body, bodyCls = '' }) {
  const other = L === 'en' ? 'ar' : 'en';
  const items = nav(t);
  const fullTitle = slug === 'index' ? t('Dar Al Tamleek | Shariah-compliant home finance in Saudi Arabia', 'دار التمليك | تمويل عقاري متوافق مع أحكام الشريعة في المملكة') : `${title} | ${t('Dar Al Tamleek', 'دار التمليك')}`;

  const mega = items.map((g) => g.items ? `
    <div class="nav__item" data-dd>
      <a class="nav__link ${key === g.key ? 'is-current' : ''}" href="${g.href}" aria-haspopup="true" aria-expanded="false">${g.label}<svg class="nav__chev" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4"/></svg></a>
      <div class="dd" role="region" aria-label="${g.label}">
        <div class="dd__in">
          <div class="dd__links">${g.items.map((it) => `<a class="dd__link" href="${it.href}"><span class="dd__ic">${icon(it.ic)}</span><span><b>${it.label}</b><small>${it.sub}</small></span></a>`).join('')}</div>
          <a class="dd__card" href="${g.href}"><img src="../assets/img/photo/${g.img}.webp" alt="" loading="lazy"><span class="dd__cap"><b>${g.label}</b><small>${g.blurb}</small><i>${icon('arrow', 'arr')}</i></span></a>
        </div>
      </div>
    </div>` : `<div class="nav__item"><a class="nav__link ${key === g.key ? 'is-current' : ''}" href="${g.href}">${g.label}</a></div>`).join('');

  const mobile = items.map((g, i) => g.items ? `
    <div class="mm__group">
      <button class="mm__toggle" type="button" aria-expanded="false" aria-controls="mm-${i}"><span>${g.label}</span><i aria-hidden="true"></i></button>
      <div class="mm__sub" id="mm-${i}">${g.items.map((it) => `<a href="${it.href}">${icon(it.ic)}<span>${it.label}</span></a>`).join('')}</div>
    </div>` : `<div class="mm__group"><a class="mm__toggle" href="${g.href}"><span>${g.label}</span></a></div>`).join('');

  return `<!doctype html>
<html lang="${L}" dir="${L === 'ar' ? 'rtl' : 'ltr'}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${fullTitle}</title>
<meta name="description" content="${desc}">
<meta name="theme-color" content="#faf6f0">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${t('Dar Al Tamleek', 'دار التمليك')}">
<meta property="og:title" content="${fullTitle}">
<meta property="og:description" content="${desc}">
<meta property="og:image" content="../assets/img/photo/villa-dusk.webp">
<meta property="og:locale" content="${L === 'ar' ? 'ar_SA' : 'en_US'}">
<link rel="alternate" hreflang="${L}" href="${slug}.html">
<link rel="alternate" hreflang="${other}" href="../${other}/${slug}.html">
<link rel="icon" href="../assets/img/brand/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${FONTS[L]}">
<link rel="stylesheet" href="../assets/css/main.css">
<script>
(function(d){d.classList.add('js');try{localStorage.setItem('dat-lang','${L}');if(sessionStorage.getItem('dat-nav'))d.classList.add('is-arriving');if(!sessionStorage.getItem('dat-seen')&&!matchMedia('(prefers-reduced-motion: reduce)').matches)d.classList.add('is-intro');}catch(e){}})(document.documentElement);
</script>
<script type="application/ld+json">{"@context":"https://schema.org","@type":"FinancialService","name":"Dar Al Tamleek","alternateName":"دار التمليك","foundingDate":"2008","telephone":"+966-800-124-0166","areaServed":"SA","url":"https://www.daraltamleek.com","address":{"@type":"PostalAddress","streetAddress":"Al Mukmal Tower, Al Khalidiyyah","addressLocality":"Jeddah","postalCode":"23422","addressCountry":"SA"}}</script>
</head>
<body class="pg-${slug} ${bodyCls}" data-page="${slug}">
<a class="skip" href="#main">${t('Skip to content', 'انتقل إلى المحتوى')}</a>

<div class="curtain" aria-hidden="true">
  <div class="curtain__panel"></div>
  <div class="curtain__mark">${mark({ draw: true })}</div>
</div>

<header class="hdr" data-hdr>
  <div class="wrap hdr__in">
    <a class="hdr__logo" href="index.html" aria-label="${t('Dar Al Tamleek, home', 'دار التمليك، الصفحة الرئيسية')}">${logo(t)}</a>
    <nav class="nav" aria-label="${t('Primary', 'القائمة الرئيسية')}">${mega}</nav>
    <div class="hdr__act">
      <a class="hdr__phone" href="${SITE.phoneHref}" aria-label="${t('Call us', 'اتصل بنا')} ${SITE.phone}">${icon('phone')}<span dir="ltr">${SITE.phone}</span></a>
      <a class="hdr__lang" href="../${other}/${slug}.html" data-lang-switch lang="${other}" hreflang="${other}">${L === 'en' ? 'عربي' : 'EN'}</a>
      <a class="hdr__login" href="${SITE.login}" target="_blank" rel="noopener">${icon('login')}<span>${t('Login', 'تسجيل الدخول')}</span></a>
      ${btn('apply.html', t('Register interest', 'سجّل اهتمامك'), { variant: 'red', cls: 'btn--sm hdr__cta' })}
      <button class="burger" type="button" aria-expanded="false" aria-controls="mm" aria-label="${t('Open menu', 'فتح القائمة')}"><i></i><i></i></button>
    </div>
  </div>
</header>

<div class="mm" id="mm" aria-hidden="true">
  <div class="mm__bg"></div>
  <div class="mm__in" data-lenis-prevent>
    <nav class="mm__nav" aria-label="${t('Menu', 'القائمة')}">${mobile}</nav>
    <div class="mm__foot">
      ${btn('apply.html', t('Register your interest', 'سجّل اهتمامك'), { variant: 'red' })}
      <div class="mm__row">
        <a href="${SITE.login}" target="_blank" rel="noopener">${icon('login')}${t('Customer login', 'دخول العملاء')}</a>
        <a href="../${other}/${slug}.html" data-lang-switch lang="${other}">${icon('globe')}${L === 'en' ? 'العربية' : 'English'}</a>
      </div>
      <a class="mm__phone" href="${SITE.phoneHref}"><small>${t('Toll-free', 'الرقم المجاني')}</small><b dir="ltr">${SITE.phone}</b></a>
    </div>
  </div>
  ${mark({ cls: 'mm__star' })}
</div>

<main id="main">
${body}
</main>

<footer class="ftr">
  <div class="ftr__pattern" aria-hidden="true"></div>
  <div class="wrap">
    <div class="ftr__top">
      <div class="ftr__brand">
        <a href="index.html" class="ftr__logo" aria-label="${t('Dar Al Tamleek', 'دار التمليك')}">${logo(t, { cls: 'logo--light' })}</a>
        <p>${t('Specialists in home financing solutions. Shariah-compliant Murabaha home finance for citizens, residents and retirees across the Kingdom since 2008.', 'الأخصائيون في حلول التمويل السكني. تمويل عقاري بصيغة المرابحة متوافق مع أحكام الشريعة الإسلامية للمواطنين والمقيمين والمتقاعدين في جميع أنحاء المملكة منذ 2008.')}</p>
        <a class="ftr__call" href="${SITE.phoneHref}">${icon('phone')}<span><small>${t('Toll-free, Sunday to Thursday', 'الرقم المجاني، من الأحد إلى الخميس')}</small><b dir="ltr">${SITE.phone}</b></span></a>
      </div>
      <div class="ftr__cols">
        ${items.filter((g) => g.items).map((g) => `<div class="ftr__col"><h3>${g.label}</h3><ul>${g.items.map((it) => `<li><a href="${it.href}">${it.label}</a></li>`).join('')}</ul></div>`).join('')}
        <div class="ftr__col"><h3>${t('Help', 'المساعدة')}</h3><ul>
          <li><a href="contact.html">${t('Branches & locations', 'الفروع والمواقع')}</a></li>
          <li><a href="contact.html#inquiry">${t('General inquiry', 'استفسار عام')}</a></li>
          <li><a href="${SITE.legacy}/en/contact-us/complaints" target="_blank" rel="noopener">${t('Complaints', 'الشكاوى')}</a></li>
          <li><a href="${SITE.login}" target="_blank" rel="noopener">${t('Customer login', 'دخول العملاء')}</a></li>
          <li><a href="${SITE.legacy}/${L}/survey" target="_blank" rel="noopener">${t('Customer survey', 'استبيان العملاء')}</a></li>
        </ul></div>
      </div>
    </div>
    <div class="ftr__mid">
      <div class="ftr__sibor"><span>SIBOR</span><b dir="ltr">${SITE.sibor.value}</b><small dir="ltr">${SITE.sibor.date}</small></div>
      <ul class="ftr__badges">
        <li><a href="${SITE.sama}" target="_blank" rel="noopener">${icon('shield')}<span>${t('SAMA consumer protection principles', 'مبادئ حماية العملاء - البنك المركزي')}</span></a></li>
        <li><a href="${SITE.simah}" target="_blank" rel="noopener">${icon('chart')}<span>${t('SIMAH credit bureau', 'الشركة السعودية للمعلومات الائتمانية (سمة)')}</span></a></li>
        <li><a href="${SITE.vision}" target="_blank" rel="noopener">${icon('target')}<span>${t('Saudi Vision 2030', 'رؤية السعودية 2030')}</span></a></li>
      </ul>
    </div>
    <div class="ftr__bot">
      <p>© 2026 ${t('Dar Al Tamleek. All rights reserved.', 'دار التمليك. جميع الحقوق محفوظة.')}</p>
      <nav aria-label="${t('Legal', 'روابط قانونية')}">
        <a href="${SITE.legacy}/${L}/terms-and-conditions" target="_blank" rel="noopener">${t('Terms & Conditions', 'الشروط والأحكام')}</a>
        <a href="${SITE.legacy}/${L}/privacy-policy" target="_blank" rel="noopener">${t('Privacy Policy', 'سياسة الخصوصية')}</a>
        <a href="../${other}/${slug}.html" data-lang-switch lang="${other}">${L === 'en' ? 'العربية' : 'English'}</a>
      </nav>
    </div>
  </div>
  <div class="ftr__word" aria-hidden="true">${t('Dar Al Tamleek', 'دار التمليك')}</div>
</footer>

<div class="mbar" aria-label="${t('Quick actions', 'إجراءات سريعة')}">
  <a href="${SITE.phoneHref}" class="mbar__call">${icon('phone')}<span>${t('Call', 'اتصل')}</span></a>
  <a href="calculator.html" class="mbar__calc">${icon('calc')}<span>${t('Calculate', 'احسب')}</span></a>
  <a href="apply.html" class="mbar__apply"><span>${t('Register interest', 'سجّل اهتمامك')}</span>${icon('arrow', 'arr')}</a>
</div>

<button class="totop" type="button" aria-label="${t('Back to top', 'العودة إلى الأعلى')}"><svg class="totop__ring" viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="22" pathLength="1"/></svg>${icon('arrow-up')}</button>

<div class="cookie" role="dialog" aria-live="polite" aria-label="${t('Cookies', 'ملفات تعريف الارتباط')}" hidden>
  <p>${t('We use cookies to improve navigation and understand how the site is used.', 'نستخدم ملفات تعريف الارتباط لتحسين التصفح وفهم طريقة استخدام الموقع.')} <a href="${SITE.legacy}/${L}/privacy-policy" target="_blank" rel="noopener">${t('Cookie policy', 'سياسة الملفات')}</a></p>
  <div><button type="button" class="cookie__no" data-cookie="0">${t('Decline', 'رفض')}</button><button type="button" class="cookie__ok" data-cookie="1">${t('Accept', 'موافق')}</button></div>
</div>

<script src="../assets/vendor/gsap.min.js" defer></script>
<script src="../assets/vendor/ScrollTrigger.min.js" defer></script>
<script src="../assets/vendor/lenis.min.js" defer></script>
<script src="../assets/js/main.js" defer></script>
</body>
</html>`;
}
