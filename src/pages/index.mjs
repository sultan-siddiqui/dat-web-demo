import { mark, icon, btn, head, ctaBand, eyebrow, markPaths } from '../lib.mjs';

/* Murabaha explainer stage (SVG). Mirrored for Arabic so the story reads right-to-left. */
function stage(t, L) {
  const xs = L === 'ar' ? [470, 280, 90] : [90, 280, 470];
  const [xS, xD, xY] = xs;
  const nodes = [
    { x: xS, label: t('The seller', 'البائع'), sub: t('Current owner', 'المالك الحالي'), ic: '<path d="M-12 -2L0 -12l12 10M-9 -4v13h18V-4M-3 9V3h6v6"/>' },
    { x: xD, label: t('Dar Al Tamleek', 'دار التمليك'), sub: t('Buys, then sells', 'تشتري ثم تبيع'), ic: 'mark' },
    { x: xY, label: t('You', 'أنت'), sub: t('The owner', 'المالك'), ic: '<circle cx="0" cy="-5" r="5"/><path d="M-10 11c1.6-5 5-7.5 10-7.5s8.4 2.5 10 7.5"/>' },
  ];
  const mp = markPaths().map((d) => `<path d="${d}"/>`).join('');
  const node = (n) => `<g class="stage__node">
      <circle class="halo" cx="${n.x}" cy="150" r="34"/>
      <circle class="ring" cx="${n.x}" cy="150" r="34"/>
      ${n.ic === 'mark' ? `<g class="ico-mark" transform="translate(${n.x - 19} ${150 - 14.5}) scale(.5)" fill="var(--red)">${mp}</g>` : `<g class="ico" transform="translate(${n.x} 150)">${n.ic}</g>`}
      <text x="${n.x}" y="214">${n.label}</text>
      <text class="sub" x="${n.x}" y="233">${n.sub}</text>
    </g>`;
  const tag = (cls, x, y, text, w = 196) => {
    const cx = Math.min(Math.max(x, w / 2 + 12), 560 - w / 2 - 12);
    return `<g class="stage__tag ${cls}"><rect x="${cx - w / 2}" y="${y - 18}" width="${w}" height="36" rx="18"/><text x="${cx}" y="${y + 5}">${text}</text></g>`;
  };
  const bars = Array.from({ length: 12 }, (_, i) => `<rect x="${86 + i * 33}" y="468" width="22" height="44" rx="4" style="transition-delay:${i * 0.04}s"/>`).join('');
  return `<div class="stage" data-stage data-step="1" style="--h1:${xS}px;--h2:${xD}px;--h3:${xY}px">
    <style>.stage__house{transform:translate(var(--h1),318px)}.stage[data-step="2"] .stage__house{transform:translate(var(--h2),318px)}.stage[data-step="3"] .stage__house,.stage[data-step="4"] .stage__house{transform:translate(var(--h3),318px)}.stage[data-step="4"] .stage__house{transform:translate(var(--h3),300px) scale(.82)}.stage__node .ico-mark{transition:fill .5s}.stage__node.is-on .ico-mark{fill:#fff}</style>
    <p class="stage__cap"><b>1</b><span>${t('of 4 · How Murabaha works', 'من 4 · كيف تعمل المرابحة')}</span></p>
    <svg viewBox="0 0 560 560" role="img" aria-label="${t('Diagram: the seller sells the home to Dar Al Tamleek, which sells it to you at a fixed price paid in equal monthly instalments.', 'رسم توضيحي: يبيع البائع المنزل لدار التمليك، ثم تبيعه لك بسعر ثابت يُسدد بأقساط شهرية متساوية.')}">
      <defs><pattern id="sdots" width="22" height="22" patternUnits="userSpaceOnUse"><circle class="stage__dots" cx="2" cy="2" r="1.4"/></pattern></defs>
      <rect width="560" height="560" fill="url(#sdots)"/>
      <path class="stage__link" d="M${xS} 150H${xD}M${xD} 150H${xY}"/>
      <path class="stage__flow" pathLength="1" d="M${xS} 150H${xD}"/>
      <path class="stage__flow" pathLength="1" d="M${xD} 150H${xY}"/>
      ${nodes.map(node).join('')}
      <g class="stage__house">
        <ellipse cx="0" cy="58" rx="62" ry="8" fill="rgba(23,21,26,.08)"/>
        <path class="roof" d="M-60 -10L0 -58l60 48z"/>
        <rect class="body" x="-48" y="-12" width="96" height="66" rx="5"/>
        <rect class="win" x="-34" y="2" width="20" height="18" rx="3"/><rect class="win" x="14" y="2" width="20" height="18" rx="3"/>
        <path d="M-9 54V34a9 9 0 0 1 18 0v20z" fill="var(--red)"/>
      </g>
      <g transform="translate(${xY === 470 ? 232 : 168} 262)"><g class="stage__deed">
        <rect class="paper" x="0" y="0" width="160" height="104" rx="10" stroke-width="1.5"/>
        <text x="${L === 'ar' ? 144 : 16}" y="26" text-anchor="${L === 'ar' ? 'end' : 'start'}">${t('Title deed', 'صك الملكية')}</text>
        <path class="ln2" d="M16 46h128M16 62h96M16 78h70"/>
        <circle class="seal" cx="128" cy="80" r="13"/>
        <path d="M122 80l4 4 8-8" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      </g></g>
      ${tag('t1', xS, 420, t('You choose the home', 'أنت تختار المنزل'))}
      ${tag('t2', xD, 420, t('We buy it in cash', 'نشتريه نقدًا'))}
      ${tag('t3', xY, 420, t('Sold to you · fixed price', 'يُباع لك بسعر ثابت'), 210)}
      <g class="stage__bars">${bars}<text x="280" y="540">${t('Same instalment, every month, up to 30 years', 'القسط نفسه كل شهر، حتى 30 سنة')}</text></g>
    </svg>
  </div>`;
}

export default function (t, L) {
  const personas = [
    {
      ic: 'gov', tab: t('Government sector', 'القطاع الحكومي'), sub: t('Civil & military employees', 'الموظفون المدنيون والعسكريون'), img: 'thobe-street',
      title: t('Built around a government salary.', 'مصمم لموظفي القطاع الحكومي.'),
      facts: [[t('SAR 4,000', '4,000 ريال'), t('Minimum monthly income', 'الحد الأدنى للراتب')], [t('30 yrs', '30 سنة'), t('Maximum finance term', 'أقصى مدة للتمويل')], ['10%', t('Minimum down payment', 'الحد الأدنى للدفعة الأولى')]],
      list: [t('No salary transfer needed: keep banking where you bank', 'بدون اشتراط تحويل الراتب'), t('Husband and wife can apply together as co-applicants', 'إمكانية تضامن الزوج والزوجة'), t('Eligible for REDF and MOH housing support', 'يشمل مستفيدي صندوق التنمية العقارية ووزارة الإسكان')],
      href: 'financing.html',
    },
    {
      ic: 'briefcase', tab: t('Private sector', 'القطاع الخاص'), sub: t('Employees of private companies', 'موظفو الشركات الخاصة'), img: 'keys-door',
      title: t('Your career, your keys.', 'مسيرتك المهنية… ومفاتيح منزلك.'),
      facts: [[t('SAR 7,000', '7,000 ريال'), t('Minimum monthly income', 'الحد الأدنى للراتب')], [t('Age 75', '75 سنة'), t('Finance up to this age', 'تمويل حتى هذا العمر')], ['10%', t('Minimum down payment', 'الحد الأدنى للدفعة الأولى')]],
      list: [t('A fixed instalment for the entire term', 'قسط ثابت طوال مدة التمويل'), t('No salary transfer required', 'بدون اشتراط تحويل الراتب'), t('The title deed is registered in your name', 'الصك باسم العميل')],
      href: 'financing.html',
    },
    {
      ic: 'retire', tab: t('Retirees', 'المتقاعدون'), sub: t('Public and private pensioners', 'متقاعدو القطاعين العام والخاص'), img: 'najdi-house',
      title: t('Retirement is a fine time to own.', 'التقاعد وقت مثالي للتملّك.'),
      facts: [[t('All', 'جميع'), t('Retirees are eligible', 'المتقاعدين مشمولون')], [t('Age 75', '75 سنة'), t('Finance up to this age', 'تمويل حتى هذا العمر')], [t('6 mo', '6 أشهر'), t('Optional grace period', 'فترة سماح اختيارية')]],
      list: [t('Public Pension Agency and GOSI pensioners welcome', 'يشمل متقاعدي المؤسسة العامة للتأمينات الاجتماعية'), t('Your spouse can join as a co-applicant', 'إمكانية تضامن الزوج والزوجة'), t('Fixed profit rate: no surprises later', 'هامش ربح ثابت دون مفاجآت')],
      href: 'financing.html',
    },
    {
      ic: 'passport', tab: t('Residents', 'المقيمون'), sub: t('Non-Saudi residents', 'المقيمون من غير السعوديين'), img: 'apartment-view',
      title: t('Own a home in the Kingdom you call home.', 'تملّك منزلك في المملكة التي تعيش فيها.'),
      facts: [[t('Fixed', 'ثابت'), t('Rate and payment', 'هامش الربح والقسط')], [t('30 yrs', '30 سنة'), t('Maximum finance term', 'أقصى مدة للتمويل')], [t('Your name', 'باسمك'), t('On the title deed', 'على صك الملكية')]],
      list: [t('Murabaha home finance open to residents in the Kingdom', 'برنامج المرابحة متاح للمقيمين في المملكة'), t('Certified Shariah-compliant by our Shariah Board', 'مجاز من الهيئة الشرعية'), t('Villas, apartments and refinancing', 'فلل وشقق وإعادة تمويل')],
      href: 'financing.html',
    },
    {
      ic: 'family', tab: t('REDF & Sakani beneficiaries', 'مستفيدو الصندوق وسكني'), sub: t('Housing support recipients', 'مستحقو الدعم السكني'), img: 'family',
      title: t('Your housing support, built in.', 'دعمك السكني… مُضمَّن في تمويلك.'),
      facts: [['5%', t('Down payment, first home', 'دفعة أولى للمسكن الأول')], ['35–100%', t('Of profit covered monthly', 'من الأرباح يغطيها الدعم')], [t('SAR 800k', '800 ألف'), t('Max. property value for 5%', 'أقصى قيمة للعقار لدفعة 5%')]],
      list: [t('Support is transferred to your account every month', 'يُحوَّل الدعم إلى حسابك شهريًا'), t('Check your eligibility on the Sakani platform', 'تحقق من استحقاقك عبر منصة سكني'), t('For purchasing a ready housing unit', 'لشراء وحدة سكنية جاهزة')],
      href: 'housing-support.html',
    },
  ];

  const steps = [
    { h: t('You choose the home.', 'أنت تختار المنزل.'), p: t('Find the villa, apartment or building you want, from any seller or developer. Get pre-qualified first so you know your budget.', 'اختر الفيلا أو الشقة أو المبنى الذي يناسبك من أي بائع أو مطور. واحصل على التأهيل المبدئي أولًا لتعرف ميزانيتك.'), li: [t('Pre-qualification in seconds', 'تأهيل مبدئي خلال ثوانٍ'), t('Independent property appraisal', 'تقييم مستقل للعقار')] },
    { h: t('Dar Al Tamleek buys it.', 'دار التمليك تشتريه.'), p: t('We purchase the property from the seller. For a moment, we own it, which is what makes the contract a genuine sale and not a loan.', 'نشتري العقار من البائع ونمتلكه، وهذا ما يجعل العقد بيعًا حقيقيًا لا قرضًا.'), li: [t('A real asset changes hands', 'انتقال حقيقي لملكية الأصل'), t('No riba (interest) involved', 'خالٍ من الربا')] },
    { h: t('We sell it to you at a fixed price.', 'نبيعه لك بسعر ثابت.'), p: t('You know the purchase cost and our profit up front. Together they make one fixed price, and the title deed goes straight into your name.', 'تعرف تكلفة الشراء وهامش ربحنا مسبقًا، ويشكلان معًا سعرًا واحدًا ثابتًا، ويُسجَّل الصك باسمك مباشرة.'), li: [t('Full disclosure of cost and profit', 'إفصاح كامل عن التكلفة والربح'), t('Deed in your name from day one', 'الصك باسمك من اليوم الأول')] },
    { h: t('You pay the same amount every month.', 'تدفع المبلغ نفسه كل شهر.'), p: t('Spread the price over up to 30 years in equal instalments. Market rates can move; your instalment never does.', 'قسّط السعر على مدة تصل إلى 30 سنة بأقساط متساوية. قد تتغير أسعار السوق، لكن قسطك لا يتغير.'), li: [t('Fixed instalment for the whole term', 'قسط ثابت طوال المدة'), t('Optional grace period of up to 6 months', 'فترة سماح اختيارية حتى 6 أشهر')] },
  ];

  const awards = [
    { n: t('The Best Mortgage Company', 'أفضل شركة تمويل عقاري'), by: 'RESTATEX', y: '2010 – 2019' },
    { n: t('Best Mortgage Company', 'أفضل شركة تمويل عقاري'), by: t('Sakani', 'سكني'), y: 'Q1 & Q2 2021' },
    { n: t('The Best Mortgage Company', 'أفضل شركة تمويل عقاري'), by: t('Sakani', 'سكني'), y: '2019' },
    { n: t('The Best in Islamic Home Financing', 'الأفضل في التمويل السكني الإسلامي'), by: 'SABI', y: '2012' },
    { n: t('The Leader in Finance', 'الرائد في التمويل'), by: 'AIS', y: '2011 – 2013' },
    { n: t('The Best Home Mortgage Provider', 'أفضل مزود للتمويل السكني'), by: 'CFI', y: '2013' },
    { n: t('Best Home Financing Program', 'أفضل برنامج تمويل سكني'), by: 'JREX', y: '2013' },
  ];

  const trust = [
    ['shield', t('Regulated by SAMA', 'تحت إشراف البنك المركزي السعودي')],
    ['scale', t('Certified by our Shariah Board', 'مجاز من الهيئة الشرعية')],
    ['gov', t("Administrator of GOSI's Masakin program", 'مدير برنامج مساكن للتأمينات الاجتماعية')],
    ['family', t('REDF & Sakani partner', 'شريك صندوق التنمية العقارية وسكني')],
    ['target', t('Aligned with Saudi Vision 2030', 'متوافق مع رؤية السعودية 2030')],
    ['heart', t('95% customer satisfaction', 'رضا العملاء 95%')],
    ['award', t('Best Mortgage Company, RESTATEX 2010–2019', 'أفضل شركة تمويل عقاري، ريستاتكس 2010–2019')],
  ];
  const trustSet = `<div class="trust__set">${trust.map(([i, l]) => `<span class="trust__item">${icon(i)}${l}</span>${mark({ cls: 'trust__sep' })}`).join('')}</div>`;

  const body = `
<section class="hero" data-hero>
  <div class="hero__bg" aria-hidden="true"></div>
  <div class="wrap hero__grid">
    <div class="hero__copy">
      <p class="hero__badge" data-reveal><i>${mark()}</i><span>${t('Serving since 2008', 'نخدمكم منذ عام 2008')}</span><span>· ${t('Shariah-compliant home finance', 'تمويل عقاري متوافق مع الشريعة')}</span></p>
      <h1 class="hero__title" data-split>${t('Own your home <em class="hl">with confidence.</em>', 'تملّك منزلك <em class="hl">بكل ثقة.</em>')}</h1>
      <p class="hero__lead" data-reveal>${t('Murabaha home finance with a fixed profit rate, fixed instalments and the title deed in your name. For public and private sector employees, retirees and residents across the Kingdom.', 'تمويل عقاري بصيغة المرابحة بهامش ربح ثابت وأقساط ثابتة والصك باسمك، لموظفي القطاعين الحكومي والخاص والمتقاعدين والمقيمين في جميع أنحاء المملكة.')}</p>
      <div class="hero__actions" data-reveal>
        ${btn('apply.html', t('Register your interest', 'سجّل اهتمامك'))}
        ${btn('calculator.html', t('Estimate my instalment', 'احسب قسطي الشهري'), { variant: 'line', ic: 'calc' })}
      </div>
      <ul class="hero__proof" data-reveal>
        <li><b>20,000+</b><small>${t('Families benefited', 'عائلة منتفعة')}</small></li>
        <li><b>${t('SAR 15B+', '+15 مليار')}</b><small>${t('Financed', 'ريال قمنا بتمويلها')}</small></li>
        <li><b>25+</b><small>${t('Awards received', 'جائزة تقدير')}</small></li>
      </ul>
    </div>
    <div class="hero__media">
      ${mark({ cls: 'hero__star', draw: true })}
      <div class="arch"><img src="../assets/img/photo/villa-dusk.webp" alt="${t('A white Saudi villa at dusk with warm lights', 'فيلا سعودية بيضاء عند الغروب بإضاءة دافئة')}" fetchpriority="high"></div>
      <div class="float float--a"><span class="float__ic">${icon('lock')}</span><span>${t('Fixed rate', 'هامش ربح ثابت')}<small>${t('Fixed payment · Murabaha', 'قسط ثابت · مرابحة')}</small></span>
        <svg class="float__line" viewBox="0 0 92 34" aria-hidden="true"><path class="grid" d="M0 8h92M0 26h92"/><path d="M4 17h84"/></svg></div>
      <div class="float float--b"><span class="float__ic">${icon('deed')}</span><span>${t('Deed in your name', 'الصك باسم العميل')}<small>${t('From day one', 'من اليوم الأول')}</small></span></div>
      <div class="float float--c"><span class="float__ic">${icon('calendar')}</span><span>${t('Up to 30 years', 'حتى 30 سنة')}<small>${t('Finance up to age 75', 'تمويل حتى سن 75')}</small></span></div>
    </div>
  </div>
  <div class="hero__scroll" aria-hidden="true"><span>${t('Scroll', 'مرّر')}</span><i></i></div>
</section>

<div class="trust" aria-label="${t('Why customers trust us', 'لماذا يثق بنا العملاء')}"><div class="trust__track">${trustSet}${trustSet.replace('trust__set', 'trust__set" aria-hidden="true')}</div></div>

<section class="door" data-door aria-label="${t('Our track record', 'إنجازاتنا')}">
  <p class="door__intro">${t('Every home begins with <span class="hl">a door.</span>', 'كل منزل يبدأ <span class="hl">بباب.</span>')}</p>
  <div class="door__frame"><img src="../assets/img/photo/villa-palms.webp" alt="" loading="lazy"></div>
  <div class="door__over wrap">
    <p class="d2">${t('Since 2008, we have opened it for more than 20,000 families.', 'منذ عام 2008، فتحناه لأكثر من 20,000 عائلة.')}</p>
    <ul class="stats">
      <li class="stat"><span class="stat__n"><b data-count="20,000">20,000</b>+</span><span class="stat__l">${t('Families benefited', 'عائلة منتفعة')}</span></li>
      <li class="stat"><span class="stat__n"><b data-count="15">15</b>${t('B+<small>SAR</small>', '+<small>مليار ريال</small>')}</span><span class="stat__l">${t('Financed', 'قمنا بتمويلها')}</span></li>
      <li class="stat"><span class="stat__n"><b data-count="10">10</b>+</span><span class="stat__l">${t('Branch offices', 'مكتب وفرع')}</span></li>
      <li class="stat"><span class="stat__n"><b data-count="25">25</b>+</span><span class="stat__l">${t('Awards received', 'جائزة تقدير')}</span></li>
    </ul>
  </div>
</section>

<section class="sec" id="murabaha">
  <div class="wrap">
    ${head({ kicker: t('Murabaha, made simple', 'المرابحة ببساطة'), title: t('Four steps. No interest. <em class="hl">No surprises.</em>', 'أربع خطوات. بلا فوائد. <em class="hl">بلا مفاجآت.</em>'), lead: t('Murabaha is a sale, not a loan. Here is exactly what happens between choosing your home and holding its keys.', 'المرابحة عقد بيع لا قرض. إليك ما يحدث بالضبط منذ اختيارك للمنزل وحتى استلام مفاتيحه.') })}
    <div class="story__grid">
      <div class="story__stage">${stage(t, L)}</div>
      <div class="story__steps">
        ${steps.map((s, i) => `<article class="step"><p class="step__n">0${i + 1}</p><h3>${s.h}</h3><p>${s.p}</p><ul>${s.li.map((x) => `<li>${icon('check')}${x}</li>`).join('')}</ul></article>`).join('')}
        <div class="story__note" data-reveal>${icon('scale')}<p>${t('<b>Murabaha or Ijarah?</b> With Murabaha the property is registered in your name immediately and your profit rate is fixed. With Ijarah you rent until the end of the term. <a class="link" href="shariah.html">Compare both</a>', '<b>مرابحة أم إجارة؟</b> في المرابحة يُسجَّل العقار باسمك فورًا ويكون هامش الربح ثابتًا، أما في الإجارة فتستأجر العقار حتى نهاية المدة. <a class="link" href="shariah.html">قارن بينهما</a>')}</p></div>
      </div>
    </div>
  </div>
</section>

<section class="sec sec--sand pattern-bg" id="paths">
  <div class="wrap">
    ${head({ kicker: t('Find your path', 'اختر ما يناسبك'), title: t('One program, shaped around <em class="hl">who you are.</em>', 'برنامج واحد، مصمم <em class="hl">حسب احتياجك.</em>'), lead: t('Select what represents you to see your requirements and benefits at a glance.', 'حدد ما يمثلك لترى المتطلبات والمزايا بنظرة سريعة.'), cls: 'shead--split' })}
    <div class="paths" data-paths>
      <div class="paths__tabs" role="tablist" aria-label="${t('Customer type', 'نوع العميل')}">
        ${personas.map((p, i) => `<button class="paths__tab" role="tab" id="pt-${i}" aria-controls="pp-${i}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${icon(p.ic)}<span>${p.tab}<small>${p.sub}</small></span></button>`).join('')}
      </div>
      <div class="paths__panels">
        ${personas.map((p, i) => `<div class="paths__panel ${i === 0 ? 'is-on' : ''}" role="tabpanel" id="pp-${i}" aria-labelledby="pt-${i}" aria-hidden="${i !== 0}">
          <div class="paths__img"><img src="../assets/img/photo/${p.img}.webp" alt="" loading="lazy"></div>
          <div class="paths__body">
            <h3>${p.title}</h3>
            <ul class="paths__facts">${p.facts.map(([b, s]) => `<li><b>${b}</b><small>${s}</small></li>`).join('')}</ul>
            <ul class="paths__list">${p.list.map((x) => `<li>${icon('check')}${x}</li>`).join('')}</ul>
            ${btn(p.href, t('See the full details', 'اطّلع على التفاصيل'), { variant: 'ink', cls: 'btn--sm' })}
          </div>
        </div>`).join('')}
      </div>
    </div>
  </div>
</section>

<section class="sec" id="benefits">
  <div class="wrap">
    ${head({ kicker: t('Home Finance Murabaha', 'برنامج التمويل العقاري مرابحة'), title: t('Everything a homeowner wants. <em class="hl">Nothing they don\'t.</em>', 'كل ما يريده المالك. <em class="hl">ولا شيء غير ذلك.</em>'), lead: t('A Shariah-compliant program designed to raise home ownership among citizens and residents, in line with Saudi Vision 2030.', 'برنامج متوافق مع أحكام الشريعة الإسلامية صُمم لدعم زيادة نسبة التملّك بين المواطنين والمقيمين، تماشيًا مع مستهدفات رؤية السعودية 2030.') })}
    <div class="bento">
      <article class="tile tile--big" data-reveal>
        <span class="tile__ic">${icon('lock')}</span>
        <svg class="tile__chart" viewBox="0 0 400 140" preserveAspectRatio="none" aria-hidden="true"><path class="wave" d="M0 90C40 60 70 110 110 80S180 30 220 62 300 110 340 70 390 40 400 52"/><path class="flat" d="M0 72H400"/><text x="${L === 'ar' ? 396 : 4}" y="62" class="r" text-anchor="${L === 'ar' ? 'end' : 'start'}">${t('Your instalment', 'قسطك')}</text><text x="${L === 'ar' ? 396 : 4}" y="128" text-anchor="${L === 'ar' ? 'end' : 'start'}">${t('Variable rates', 'الأسعار المتغيرة')}</text></svg>
        <h3>${t('Fixed rate. Fixed payment.', 'هامش ربح ثابت. قسط ثابت.')}</h3>
        <p>${t('Murabaha locks your profit rate for the life of the contract, so your instalment on day one is your instalment in year thirty.', 'تثبّت المرابحة هامش الربح طوال مدة العقد، فقسطك في اليوم الأول هو قسطك في السنة الثلاثين.')}</p>
      </article>
      <article class="tile" data-reveal><span class="tile__ic">${icon('refresh')}</span><h3>${t('No salary transfer', 'بدون تحويل الراتب')}</h3><p>${t('Keep your salary at any bank you like.', 'احتفظ براتبك في أي بنك تختاره.')}</p></article>
      <article class="tile tile--red" data-reveal><span class="tile__big">30M<small>${t('SAR', 'ريال')}</small></span><h3>${t('Financing amount up to SAR 30M', 'مبلغ تمويل يصل إلى 30 مليون ريال')}</h3></article>
      <article class="tile" data-reveal><span class="tile__ic">${icon('deed')}</span><h3>${t('Deed in your name', 'الصك باسم العميل')}</h3><p>${t('Ownership is registered to you, not to us.', 'تُسجَّل الملكية باسمك أنت.')}</p></article>
      <article class="tile" data-reveal><span class="tile__ic">${icon('family')}</span><h3>${t('MOH & REDF beneficiaries', 'مستفيدو الوزارة والصندوق')}</h3><p>${t('Add your housing support to your finance.', 'أضف دعمك السكني إلى تمويلك.')}</p></article>
      <article class="tile tile--wide tile--img" data-reveal><img src="../assets/img/photo/living-room.webp" alt="" loading="lazy"><span class="tile__ic">${icon('calendar')}</span><h3>${t('Up to 30 years, up to age 75', 'حتى 30 سنة وحتى سن 75')}</h3><p>${t('Long terms keep instalments comfortable for every stage of life.', 'مدد طويلة تجعل الأقساط مريحة في كل مراحل الحياة.')}</p></article>
      <article class="tile" data-reveal><span class="tile__ic">${icon('scale')}</span><h3>${t('Shariah compliant', 'متوافق مع أحكام الشريعة')}</h3><p>${t('Certified and overseen by our Shariah Board.', 'مجاز ومراقَب من الهيئة الشرعية.')}</p></article>
      <article class="tile" data-reveal><span class="tile__ic">${icon('grace')}</span><h3>${t('Up to 6 months grace', 'فترة سماح حتى 6 أشهر')}</h3><p>${t('Start paying once you have moved in.', 'ابدأ السداد بعد انتقالك إلى منزلك.')}</p></article>
      <article class="tile tile--wide" data-reveal><span class="tile__ic">${icon('users')}</span><h3>${t('Government and private sectors, all retirees, and expats', 'القطاعان الحكومي والخاص وجميع المتقاعدين والمقيمين')}</h3><p>${t('One program that is open to almost everyone who calls the Kingdom home.', 'برنامج واحد مفتوح لكل من يعيش في المملكة تقريبًا.')}</p></article>
      <a class="tile tile--wide tile--big" style="grid-row:auto;justify-content:center" href="financing.html" data-reveal><h3 style="font-size:clamp(26px,2.4vw,36px)">${t('See the full program', 'اطّلع على البرنامج كاملًا')}</h3><p>${t('Particulars, required documents, disclosure tables and FAQs.', 'الشروط والمستندات المطلوبة وجداول الإفصاح والأسئلة الشائعة.')}</p><span class="link" style="color:#fff">${t('Home Finance Murabaha', 'التمويل العقاري مرابحة')} ${icon('arrow', 'arr')}</span></a>
    </div>
  </div>
</section>

<section class="sec sec--ink support" id="support">
  <div class="wrap support__grid">
    <div>
      ${head({ kicker: t('Housing Support Program', 'برنامج الدعم السكني'), title: t('REDF and MOH support, <em class="hl">covered in your finance.</em>', 'دعم الصندوق والوزارة <em class="hl">مُضمَّن في تمويلك.</em>'), lead: t('Benefit from the support of the Real Estate Development Fund and the Ministry of Housing through our Murabaha program, with the support applied for eligible customers.', 'الآن يمكنك الاستفادة من دعم صندوق التنمية العقارية ووزارة الإسكان من خلال برنامج التمويل العقاري بصيغة المرابحة، حيث يُضاف الدعم للعملاء المؤهلين ضمن البرنامج.') })}
      <div class="support__facts">
        <div class="support__fact" data-reveal><b><em>5</em>%</b><span>${t('Down payment for first-time buyers, instead of the standard 10%', 'دفعة أولى للمسكن الأول بدلًا من 10%')}</span></div>
        <div class="support__fact" data-reveal><b>35<em>–</em>100%</b><span>${t('Of your monthly profit covered by the subsidy', 'من الأرباح الشهرية يغطيها الدعم')}</span></div>
      </div>
      <div class="hero__actions" data-reveal>
        ${btn('housing-support.html', t('How the support works', 'كيف يعمل الدعم'), { variant: 'white' })}
        ${btn('https://sakani.sa/', t('Check eligibility on Sakani', 'تحقق من الاستحقاق عبر سكني'), { variant: 'glass', ext: true })}
      </div>
    </div>
    <div class="support__media" data-reveal>
      <div class="arch"><img src="../assets/img/photo/family.webp" alt="${t('A Saudi father and son smiling together', 'أب سعودي وابنه يبتسمان معًا')}" loading="lazy" data-parallax=".1"></div>
      <div class="support__ring" data-ring=".65"><svg viewBox="0 0 100 100" aria-hidden="true"><circle class="bg" cx="50" cy="50" r="44" pathLength="1"/><circle class="fg" cx="50" cy="50" r="44" pathLength="1"/></svg><div><b>${t('up to 100%', 'حتى 100%')}</b><small>${t('of profit paid by the subsidy', 'من الأرباح يغطيها الدعم')}</small></div></div>
    </div>
  </div>
</section>

<section class="sec" id="calculator">
  <div class="wrap">
    ${head({ kicker: t('Finance calculator', 'حاسبة التمويل'), title: t('See your instalment <em class="hl">before you shop.</em>', 'اعرف قسطك <em class="hl">قبل أن تبحث.</em>'), lead: t('Move the sliders for an instant, indicative estimate. Your specialist confirms the exact figures.', 'حرّك المؤشرات للحصول على تقدير فوري. وسيؤكد لك الأخصائي الأرقام الدقيقة.'), cls: 'shead--split' })}
    <form class="calc" data-calc data-reveal onsubmit="return false">
      <div class="calc__in">
        <div class="field-r"><div class="field-r__top"><label for="c-price">${t('Property price', 'قيمة العقار')}</label><span class="val"><span data-o="price">1,000,000</span><small>${t('SAR', 'ريال')}</small></span></div><input class="range" id="c-price" type="range" name="price" min="300000" max="5000000" step="10000" value="1000000"><div class="range__scale"><span>300K</span><span>5M</span></div></div>
        <div class="field-r"><div class="field-r__top"><label for="c-down">${t('Down payment', 'الدفعة الأولى')}</label><span class="val"><span data-o="down">10%</span><small dir="ltr"><span data-o="downamt">100,000</span></small></span></div><input class="range" id="c-down" type="range" name="down" min="10" max="50" step="1" value="10"><div class="range__scale"><span>10%</span><span>50%</span></div></div>
        <div class="field-r"><div class="field-r__top"><label for="c-years">${t('Finance term', 'مدة التمويل')}</label><span class="val"><span data-o="years">25</span><small>${t('years', 'سنة')}</small></span></div><input class="range" id="c-years" type="range" name="years" min="5" max="30" step="1" value="25"><div class="range__scale"><span>5</span><span>30</span></div></div>
      </div>
      <div class="calc__out">
        ${mark()}
        <p class="calc__label">${t('Estimated monthly instalment', 'القسط الشهري التقديري')}</p>
        <p class="calc__pay"><span data-o="pay">0</span><small>${t('SAR / month', 'ريال / شهريًا')}</small></p>
        <div class="calc__rows">
          <div><span>${t('Finance amount', 'مبلغ التمويل')}</span><b dir="ltr" data-o="loan">0</b></div>
          <div><span>${t('Total payable', 'إجمالي المبلغ المستحق')}</span><b dir="ltr" data-o="total">0</b></div>
          <div><span>${t('Illustrative APR', 'معدل النسبة السنوي (مثال)')}</span><b dir="ltr" data-o="apr">6.43%</b></div>
        </div>
        ${btn('calculator.html', t('Open the full calculator', 'افتح الحاسبة الكاملة'), { variant: 'white', cls: 'btn--sm' })}
        <p class="calc__note">${t('Indicative only. Uses the 6.43% APR from the SAMA disclosure example (Masakin, 25 years). Pricing depends on your credit profile and may change.', 'للاسترشاد فقط. يعتمد على معدل 6.43% الوارد في مثال جدول الإفصاح (مساكن، 25 سنة). قد تتغير الأسعار حسب السجل الائتماني.')}</p>
      </div>
    </form>
  </div>
</section>

<section class="sec sec--paper" id="journey">
  <div class="wrap">
    ${head({ kicker: t('From application to keys', 'من الطلب إلى المفاتيح'), title: t('Five steps between you and <em class="hl">your front door.</em>', 'خمس خطوات تفصلك عن <em class="hl">باب منزلك.</em>'), align: 'center' })}
    <div class="journey" data-journey>
      <svg class="journey__line" viewBox="0 0 1000 60" preserveAspectRatio="none" aria-hidden="true"><path class="base" d="M0 30C100 0 150 60 250 30S400 0 500 30 650 60 750 30 900 0 1000 30"/><path class="prog" pathLength="1" d="M0 30C100 0 150 60 250 30S400 0 500 30 650 60 750 30 900 0 1000 30"/></svg>
      ${[
        ['user', t('Register your interest', 'سجّل اهتمامك'), t('Two minutes online, or call us toll-free on 800 124 0166.', 'دقيقتان عبر الإنترنت، أو اتصل بنا على الرقم المجاني 800 124 0166.'), t('2 minutes', 'دقيقتان')],
        ['bolt', t('Get pre-qualified', 'احصل على التأهيل المبدئي'), t('Our proprietary system pre-qualifies you in seconds, so you shop with a clear budget.', 'يمنحك نظامنا التأهيل المبدئي خلال ثوانٍ لتبحث بميزانية واضحة.'), t('Seconds', 'ثوانٍ')],
        ['search', t('Choose & appraise', 'اختر وقيّم'), t('Pick your property. An independent, authorized appraiser confirms its value.', 'اختر عقارك، وتؤكد جهة تقييم مستقلة ومعتمدة قيمته.'), t('Independent', 'جهة مستقلة')],
        ['deed', t('Sign your Murabaha', 'وقّع عقد المرابحة'), t('We buy the property and sell it to you at a fixed price. The deed goes in your name.', 'نشتري العقار ونبيعه لك بسعر ثابت، ويُسجَّل الصك باسمك.'), t('Fixed price', 'سعر ثابت')],
        ['key', t('Move in', 'انتقل إلى منزلك'), t('Collect your keys. Payments can start after an optional grace period.', 'استلم مفاتيحك، ويمكن أن يبدأ السداد بعد فترة سماح اختيارية.'), t('Up to 6 months grace', 'سماح حتى 6 أشهر')],
      ].map(([ic, h, p, tm], i) => `<div class="jstep" data-reveal><span class="jstep__dot">${icon(ic)}</span><span class="jstep__n">0${i + 1}</span><h3>${h}</h3><p>${p}</p><span class="jstep__time">${icon('clock')}${tm}</span></div>`).join('')}
    </div>
  </div>
</section>

<section class="sec" id="business">
  <div class="wrap">
    ${head({ kicker: t('For business', 'حلول الأعمال'), title: t('The home-finance engine <em class="hl">behind your business.</em>', 'محرّك التمويل السكني <em class="hl">خلف أعمالك.</em>'), lead: t('Beyond customers, we power realtors, developers, employers and institutions with Shariah-compliant products and proprietary technology.', 'إلى جانب العملاء، نقدم للوسطاء والمطورين وأصحاب العمل والمؤسسات منتجات متوافقة مع الشريعة وتقنيات خاصة بنا.'), cls: 'shead--split' })}
    <div class="biz" data-biz data-reveal>
      ${[
        ['riyadh-night', t('SAR 11B+', '+11 مليار'), t('assets managed', 'ريال أصول مُدارة'), t('Management services', 'الخدمات الإدارية'), t('Outsource all or any part of origination, processing, underwriting and closing, on a platform built for the Saudi market.', 'استعن بنا لإدارة كل أو بعض عمليات إنشاء العقود ومعالجتها والاكتتاب والإغلاق عبر منصة صُممت للسوق السعودي.'), 'management'],
        ['realtor', '500+', t('realtor partners', 'مكتب عقاري شريك'), t('Realtors', 'مكاتب العقار'), t('Pre-qualify buyers in seconds, at your office or online, with a dedicated account manager.', 'امنح عملاءك التأهيل المبدئي خلال ثوانٍ في مكتبك أو عبر الإنترنت مع مدير حساب مخصص.'), 'realtors'],
        ['tower', t('Instant', 'فوري'), t('buyer pre-qualification', 'تأهيل مبدئي للمشترين'), t('Real estate developers', 'مطورو العقارات'), t('Remove the hardest part of selling a home: securing your buyer\'s financing.', 'تخلّص من أصعب جزء في بيع المنزل: تأمين التمويل لعملائك.'), 'developers'],
        ['meeting', t('Payroll', 'خصم'), t('repayments via employer', 'من الراتب عبر جهة العمل'), t('Employer program', 'برنامج الشركات'), t('Give your people a structured home-ownership benefit that fits with their compensation.', 'قدّم لموظفيك ميزة تملّك مسكن منظمة تتكامل مع حزمة التعويضات.'), 'employers'],
      ].map(([img, k, ks, h, p, id], i) => `<a class="biz__p ${i === 0 ? 'is-on' : ''}" href="business.html#${id}"><img src="../assets/img/photo/${img}.webp" alt="" loading="lazy"><span class="biz__num">0${i + 1}</span><div class="biz__in"><span class="biz__k">${k}<small>${ks}</small></span><h3>${h}</h3><div class="biz__more"><p>${p}</p><span class="link">${t('Explore', 'اكتشف المزيد')} ${icon('arrow', 'arr')}</span></div></div></a>`).join('')}
    </div>
  </div>
</section>

<section class="sec sec--sand" id="awards">
  <div class="wrap awards__grid">
    <div class="awards__hero">
      ${eyebrow(t('Recognition', 'التقدير'))}
      <p class="awards__ten" data-reveal>10<small>${t('consecutive years as The Best Mortgage Company at RESTATEX', 'سنوات متتالية أفضل شركة تمويل عقاري في معرض ريستاتكس')}</small></p>
      <div class="years" data-reveal>${Array.from({ length: 10 }, (_, i) => `<span>${2010 + i}</span>`).join('')}</div>
      <p class="muted" data-reveal style="margin-top:16px;max-width:440px">${t('Led by dedicated home-finance experts, we maintain a 95% customer satisfaction rate, recognised by reputable organisations across the Kingdom.', 'تتميز دار التمليك بخدمات ممتازة يقودها خبراء متخصصون مع نسبة 95% من رضا العملاء، وقد حصلت على جوائز مرموقة من منظمات معروفة في المملكة.')}</p>
    </div>
    <ul class="awards__list">
      ${awards.map((a) => `<li class="award" data-reveal><span class="award__ic">${icon('award')}</span><span><b>${a.n}</b><small>${a.by}</small></span><span class="award__y" dir="ltr">${a.y}</span></li>`).join('')}
    </ul>
  </div>
</section>

<section class="band" id="shariah">
  <div class="band__img"><img src="../assets/img/photo/arches.webp" alt="" loading="lazy"></div>
  <div class="wrap">
    <div class="band__in">
      ${eyebrow(t('Shariah compliance', 'التوافق مع أحكام الشريعة'))}
      <h2 class="d2" data-split>${t('Every product, reviewed by scholars. Every year.', 'كل منتج يراجعه العلماء. كل عام.')}</h2>
      <p data-reveal>${t('Our products were developed with the Shariah Supervisory Board and are formally certified as Shariah compliant. The board actively oversees them to ensure strict adherence, so you can be assured that we never offer riba-based loans.', 'طُوّرت منتجاتنا بالتنسيق مع الهيئة الشرعية وهي مجازة رسميًا، وتشرف الهيئة عليها باستمرار لضمان الالتزام التام. ويمكنك الاطمئنان إلى أننا لا نقدم أي تمويل قائم على الربا.')}</p>
      <ul class="band__facts" data-reveal>
        <li><b>3</b><span>${t('Shariah Board scholars', 'أعضاء الهيئة الشرعية')}</span></li>
        <li><b>4×</b><span>${t('Reviews every year', 'مراجعات سنويًا')}</span></li>
        <li><b>0</b><span>${t('Riba (interest)', 'ربا')}</span></li>
      </ul>
      <div data-reveal>${btn('shariah.html', t('Meet our Shariah Board', 'تعرّف على الهيئة الشرعية'), { variant: 'white' })}</div>
    </div>
  </div>
</section>

<section class="sec" id="partners">
  <div class="wrap">
    ${head({ kicker: t('Trusted by the Kingdom\'s institutions', 'شريك المؤسسات الوطنية'), title: t('Partners in raising <em class="hl">home ownership.</em>', 'شركاء في رفع <em class="hl">نسبة التملّك.</em>') })}
    <div class="partners">
      ${[
        ['GOSI', t('General Organization for Social Insurance', 'المؤسسة العامة للتأمينات الاجتماعية'), t('Dar Al Tamleek administers GOSI\'s Masakin home finance program for government and private employees and all retirees.', 'تم توكيل دار التمليك لإدارة برنامج مساكن التابع للمؤسسة العامة للتأمينات الاجتماعية لموظفي القطاعين الحكومي والخاص وجميع المتقاعدين.')],
        ['REDF', t('Real Estate Development Fund', 'صندوق التنمية العقارية'), t('The REDF subsidised lending program works with Masakin to deliver government housing support to approved beneficiaries.', 'برنامج التمويل السكني المدعوم بالتعاون مع برنامج مساكن لتقديم الدعم الحكومي للمستفيدين المعتمدين.')],
        ['SAKANI', t('Sakani', 'سكني'), t('A Ministry of Housing and REDF program allocating residential products to beneficiaries across the Kingdom.', 'برنامج مقدم من وزارة الإسكان وصندوق التنمية العقارية لتخصيص المنتجات السكنية للمستفيدين في جميع أنحاء المملكة.')],
        ['TAWUNIYA', t('Tawuniya', 'التعاونية'), t('A turn-key home finance benefit helping Tawuniya employees buy their dream home or refinance existing contracts.', 'برنامج تمويل سكني جاهز لموظفي التعاونية لامتلاك منزل أحلامهم أو إعادة تمويل عقودهم الحالية.')],
      ].map(([a, n, p]) => `<article class="partner" data-reveal><span class="partner__abbr">${a}</span><b>${n}</b><p>${p}</p></article>`).join('')}
    </div>
  </div>
</section>

${ctaBand(t)}
`;
  return {
    key: 'home',
    title: t('Home', 'الرئيسية'),
    desc: t('Dar Al Tamleek: Shariah-compliant Murabaha home finance in Saudi Arabia since 2008. Fixed profit rate, fixed instalments, deed in your name, up to 30 years. REDF and Sakani support included.', 'دار التمليك: تمويل عقاري بصيغة المرابحة متوافق مع أحكام الشريعة في المملكة منذ 2008. هامش ربح ثابت وأقساط ثابتة والصك باسمك وحتى 30 سنة، مع دعم الصندوق وسكني.'),
    body,
  };
}
