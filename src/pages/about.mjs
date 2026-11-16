import { SITE, icon, btn, head, pageHero, ctaBand, stats } from '../lib.mjs';

export const BOARD = (t) => [
  [t('Hasan Shakib AlJabri', 'حسن شكيب مراد الجابري'), t('Chairman of the Board · Non-independent, non-executive', 'رئيس مجلس الإدارة - غير مستقل/غير تنفيذي'), true],
  [t('Husam Al-Huqail', 'حسام الحقيل'), t('Vice Chairman · Non-independent, non-executive', 'نائب رئيس مجلس الإدارة - غير مستقل/غير تنفيذي')],
  [t('Anees Ahmed Moumina', 'أنيس أحمد محمد موءمنه'), t('Board Member · Independent, non-executive', 'عضو مجلس الإدارة - مستقل/غير تنفيذي')],
  [t('Abdulrahman AlBawardi', 'عبدالرحمن بن محمد البواردي'), t('Board Member · Non-independent, non-executive', 'عضو مجلس الإدارة - غير مستقل/غير تنفيذي')],
  [t('Wessam Hassoba', 'وسام بن نزيه حسوبه'), t('Board Member · Non-independent, non-executive', 'عضو مجلس الإدارة - غير مستقل/غير تنفيذي')],
  [t('Sami Al-Khashan', 'سامي بن سليمان الخشان'), t('Board Member · Independent, non-executive', 'عضو مجلس الإدارة - مستقل/غير تنفيذي')],
  [t('Fahad Bin Muammar', 'فهد بن معمر'), t('Board Member · Independent, non-executive', 'عضو مجلس الإدارة - مستقل/غير تنفيذي')],
  [t('Fahad Al-Aslami', 'فهد بن عايد الأسلمي'), t('Board Member · Non-independent, non-executive', 'عضو مجلس الإدارة - غير مستقل/غير تنفيذي')],
  [t('Saad Al-Omran', 'سعد بن عمران العمران'), t('Board Member · Non-independent, non-executive', 'عضو مجلس الإدارة - غير مستقل/غير تنفيذي')],
];
const initials = (n) => n.replace(/^(Sheikh|Dr\.|Al-|Al)\s*/g, '').split(/\s+/).filter((w) => !/^(bin|bin|Al|Al-|بن)$/i.test(w)).slice(0, 2).map((w) => w.replace(/^(Al-?|ال)/, '').charAt(0)).join('');

export default function (t, L) {
  const principles = [
    [t('Responsible', 'المسؤولية'), t('Treating every customer professionally and disclosing all information about the home financing process.', 'معاملة كل عميل باحترافية تامة وتزويده بالمعلومات اللازمة لإتمام عملية التمويل السكني.')],
    [t('Committed', 'الالتزام'), t('True dedication to our customers, with a clear and regular line of communication.', 'الوضوح في كافة تعاملاتنا وعقودنا والإفصاح الكامل لعملائنا عن التزاماتهم وحقوقهم.')],
    [t('Trusted', 'الثقة'), t('Open, honest and transparent in practice, and truly compliant with Islamic law.', 'التقيد التام بأحكام الشريعة الإسلامية والشفافية في التعامل.')],
    [t('Flexible', 'المرونة'), t('Reviewing every customer for all possible terms to arrange the most suitable solution.', 'تصميم حلول تمويل سكني مرنة تتناسب تمامًا مع متطلبات كل عميل.')],
    [t('Specialized', 'التخصص'), t('Focused solely on home financing to deliver superior service and solutions.', 'تكريس كل طاقاتنا للتمويل السكني لتقديم حلول متميزة بأسلوب رفيع.')],
  ];
  const timeline = [
    ['2008', t('Dar Al Tamleek founded', 'تأسيس دار التمليك'), t('Established to help people find and acquire their dream home.', 'تأسست لمساعدة الناس على امتلاك منازل أحلامهم.')],
    ['2010 – 2019', t('The Best Mortgage Company, RESTATEX', 'أفضل شركة تمويل عقاري، ريستاتكس'), t('Ten consecutive years.', 'عشر سنوات متتالية.')],
    ['2011 – 2013', t('The Leader in Finance, AIS', 'الرائد في التمويل، AIS'), ''],
    ['2012', t('The Best in Islamic Home Financing, SABI', 'الأفضل في التمويل السكني الإسلامي، SABI'), ''],
    ['2013', t('Best Home Mortgage Provider (CFI) · Best Home Financing Program (JREX)', 'أفضل مزود للتمويل السكني (CFI) · أفضل برنامج تمويل سكني (JREX)'), ''],
    ['2019', t('The Best Mortgage Company, Sakani', 'أفضل شركة تمويل عقاري، سكني'), ''],
    ['2021', t('Best Mortgage Company, Sakani · Q1 and Q2', 'أفضل شركة تمويل عقاري، سكني · الربعان الأول والثاني'), ''],
  ];

  const body = `
${pageHero(t, {
  crumbs: [{ label: t('About', 'عن دار التمليك') }],
  kicker: t('Who we are', 'من نحن'),
  title: t('Specialists in home financing, <em class="hl">since 2008.</em>', 'الأخصائيون في حلول التمويل السكني <em class="hl">منذ 2008.</em>'),
  lead: t('Dar Al Tamleek is one of the largest home finance companies in Saudi Arabia. We simplify buying property for individuals and businesses alike, with experienced teams and strict adherence to the principles of Shariah.', 'دار التمليك من أكبر الشركات المتخصصة في التمويل السكني في المملكة العربية السعودية، وتهدف إلى تبسيط تملّك العقارات للأفراد والشركات بمساعدة فريق متخصص وذي خبرة، مع الالتزام التام بأحكام الشريعة الإسلامية.'),
  img: 'riyadh-kc', alt: t('Kingdom Centre tower in Riyadh at sunset', 'برج المملكة في الرياض عند الغروب'),
  actions: btn('#board', t('Board of directors', 'مجلس الإدارة'), { variant: 'line', ic: 'users' }) + btn('shariah.html', t('Shariah compliance', 'التوافق مع الشريعة'), { variant: 'line', ic: 'scale' }),
})}

<section class="sec sec--paper">
  <div class="wrap">
    <div class="grid2 grid2--top">
      <p class="lead-xl" data-reveal>${t('Since 2008, Dar Al Tamleek has helped more than 20,000 families own their homes, making it the Kingdom\'s leading expert in home financing solutions.', 'منذ تأسيسها عام 2008 ساعدت دار التمليك أكثر من 20,000 عائلة على تملّك منازلها، لتصبح الخبير الرائد في حلول التمويل السكني في المملكة.')}</p>
      <div class="prose">
        <p data-reveal>${t('We offer a variety of programs, each tailored to a specific segment of people in the Kingdom to match their needs and budgets, so that everyone can own their dream home. We operate in Riyadh, Jeddah and Dammam along with more than 15 locations to serve the vast majority of the population.', 'نقدم مجموعة متنوعة من البرامج المصممة لتناسب شرائح مختلفة من المجتمع بحسب احتياجاتهم وميزانياتهم، ونعمل في الرياض وجدة والدمام إلى جانب أكثر من 15 موقعًا لخدمة الغالبية العظمى من السكان.')}</p>
        <p data-reveal>${t('We take you by the hand through the whole process, from application to approval to moving in, with complete transparency, full disclosure and sound advice. Buy directly through us, or get pre-approved and choose your home from one of our realtor partners.', 'نرافقك في كل مراحل التمويل منذ تقديم الطلب وحتى الموافقة والانتقال إلى منزلك الجديد، بكل صدق وشفافية. ويمكنك تمويل منزلك لدينا مباشرة، أو الحصول على موافقتنا المبدئية ثم اختيار المنزل من أحد شركائنا العقاريين.')}</p>
        <p class="note" data-reveal>${icon('shield')}<span>${t('We care about consumer protection and abide by SAMA regulations for finance companies. ', 'نهتم بمبادئ حماية العملاء ونلتزم بلوائح البنك المركزي السعودي لشركات التمويل. ')}<a class="link" href="${SITE.sama}" target="_blank" rel="noopener">${t('Read the regulations', 'اطّلع على اللوائح')}</a></span></p>
      </div>
    </div>
    <div style="margin-top:clamp(56px,7vw,96px)">${stats([
      { n: '20,000', suffix: '+', label: t('Families benefited', 'عائلة منتفعة') },
      { n: '15', suffix: t('B+ <small>SAR</small>', '+ <small>مليار ريال</small>'), label: t('Financed', 'قمنا بتمويلها') },
      { n: '10', suffix: '+', label: t('Branch offices', 'مكتب وفرع') },
      { n: '95', suffix: '%', label: t('Customer satisfaction', 'رضا العملاء') },
    ])}</div>
  </div>
</section>

<section class="sec">
  <div class="wrap vm">
    <article class="vm__card vm__card--v" data-reveal><h3>${t('Vision', 'الرؤية')}</h3><p>${t('To become the most trusted choice of home financing within the Kingdom of Saudi Arabia, by helping people realise their goal of purchasing a home.', 'أن تحتل دار التمليك المركز الأول كشركة متخصصة في قطاع التمويل السكني بالمملكة، تتميز بالموثوقية وتساهم في زيادة نسبة تملك المواطنين للمساكن.')}</p></article>
    <article class="vm__card vm__card--m" data-reveal><h3>${t('Mission', 'الرسالة')}</h3><p>${t('Providing progressive products and innovative solutions through home financing transactions that are swiftly executed and meet market demand.', 'توفير منتجات متطورة وحلول تمويل سكني مبتكرة تلبي حاجة السوق السعودي وتقدم الشفافية والصدق في التعامل حرصًا على مصلحة كافة الأطراف.')}</p></article>
  </div>
</section>

<section class="sec sec--sand pattern-bg">
  <div class="wrap">
    ${head({ kicker: t('Guiding principles', 'المبادئ التوجيهية'), title: t('Five principles that set us <em class="hl">apart.</em>', 'خمسة مبادئ <em class="hl">تميّزنا.</em>'), lead: t('They shape a corporate culture that is unique among our competitors.', 'تشكّل ثقافة مؤسسية فريدة بين منافسينا.') })}
    <div class="princ">${principles.map(([h, p], i) => `<article class="princ__item" data-reveal><span class="princ__l" aria-hidden="true">${L === 'ar' ? '٠' + '١٢٣٤٥'[i] : '0' + (i + 1)}</span><h3>${h}</h3><p>${p}</p></article>`).join('')}</div>
  </div>
</section>

<section class="sec">
  <div class="wrap grid2 grid2--top">
    <div>
      ${head({ kicker: t('Excellence in service', 'التميز في الخدمة'), title: t('Recognised, <em class="hl">year after year.</em>', 'تقدير <em class="hl">عامًا بعد عام.</em>'), lead: t('Dedicated home-loan experts and a 95% customer satisfaction rate have earned us prestigious awards from reputable organisations in the Kingdom.', 'خبراء متخصصون ونسبة رضا عملاء 95% أهّلتنا لجوائز مرموقة من منظمات معروفة في المملكة.') })}
      <div class="split-img" data-reveal><div class="arch arch--soft" style="aspect-ratio:4/3.6"><img src="../assets/img/photo/najdi-wall.webp" alt="" loading="lazy" data-parallax=".1"></div></div>
    </div>
    <div class="tl">${timeline.map(([y, h, p]) => `<div class="tl__row" data-reveal><span class="tl__y" dir="ltr">${y}</span><span class="tl__dot"><i></i></span><div class="tl__c"><b>${h}</b>${p ? `<small>${p}</small>` : ''}</div></div>`).join('')}</div>
  </div>
</section>

<section class="sec sec--paper" id="board">
  <div class="wrap">
    ${head({ kicker: t('Board of directors', 'مجلس الإدارة'), title: t('Governed by <em class="hl">experience.</em>', 'حوكمة <em class="hl">بخبرة.</em>'), lead: t('Leaders with diverse experience in finance, investment, insurance and corporate governance set our strategic direction, oversee performance and uphold the highest standards of transparency, accountable to shareholders and all stakeholders.', 'يضم المجلس نخبة من القادة ذوي الخبرة المتنوعة في المالية والاستثمار والتأمين والحوكمة، ويتولى رسم التوجهات الاستراتيجية ومراقبة الأداء وضمان أعلى معايير الشفافية، مع الالتزام بمسؤولياته تجاه المساهمين وأصحاب المصلحة.'), cls: 'shead--split' })}
    <div class="people">${BOARD(t).map(([n, r, chair]) => `<article class="person ${chair ? 'person--chair' : ''}" data-reveal><span class="person__mono" aria-hidden="true">${initials(n)}</span><span><b>${n}</b><small>${r}</small></span></article>`).join('')}</div>
    <p data-reveal style="margin-top:28px"><a class="link" href="${SITE.legacy}/${L}/bod-elections" target="_blank" rel="noopener">${t('Board of directors elections', 'انتخابات مجلس الإدارة')} ${icon('external')}</a></p>
  </div>
</section>

<section class="sec">
  <div class="wrap grid2">
    <div>
      ${head({ kicker: t('Shareholders', 'المساهمون'), title: t('Backed by <em class="hl">prominent institutions.</em>', 'بدعم من <em class="hl">مؤسسات رائدة.</em>'), lead: t('A diversified group of shareholders ensures our sustainability and growth, led by the General Organization for Social Insurance.', 'مجموعة متنوعة من المساهمين تضمن الاستدامة والنمو، في مقدمتهم المؤسسة العامة للتأمينات الاجتماعية.') })}
      <div class="hero__actions" data-reveal>${btn('investors.html', t('Investor relations', 'علاقات المستثمرين'), { variant: 'ink' })}</div>
    </div>
    <div class="split-img" data-reveal><div class="arch" style="aspect-ratio:4/4.4"><img src="../assets/img/photo/riyadh-sunset.webp" alt="" loading="lazy" data-parallax=".12"></div><div class="split-img__tag">${icon('chart')}<span>${t('12 institutional shareholders', '12 مساهمًا مؤسسيًا')}</span></div></div>
  </div>
</section>

${ctaBand(t)}`;
  return {
    key: 'about',
    title: t('Who We Are', 'من نحن'),
    desc: t('Dar Al Tamleek, specialists in home financing solutions since 2008: vision, mission, guiding principles, awards and board of directors.', 'دار التمليك، الأخصائيون في حلول التمويل السكني منذ 2008: الرؤية والرسالة والمبادئ والجوائز ومجلس الإدارة.'),
    body,
  };
}
