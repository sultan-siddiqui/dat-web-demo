import { icon, btn, sbtn, head, faq, pageHero, ctaBand, mark, eyebrow } from '../lib.mjs';

export function inquiryForm(t, { id = 'inquiry', title, lead, purpose = true } = {}) {
  return `<div class="formcard formcard--white" id="${id}">
    <form class="form" data-demo novalidate>
      <div style="display:grid;gap:10px;margin-bottom:6px">
        <h3 class="d3">${title}</h3>
        <p class="muted">${lead}</p>
      </div>
      <div class="form__row">
        <div class="field"><label for="${id}-name">${t('Full name', 'الاسم')} <i>*</i></label><input id="${id}-name" name="name" required autocomplete="name"><span class="field__err">${t('Please enter your name', 'يرجى إدخال الاسم')}</span></div>
        <div class="field"><label for="${id}-mob">${t('Mobile number', 'رقم الجوال')} <i>*</i></label><div class="field__pre"><span dir="ltr">+966</span><input id="${id}-mob" name="mobile" required inputmode="numeric" pattern="5[0-9]{8}" placeholder="5XXXXXXXX" dir="ltr" autocomplete="tel-national"></div><span class="field__err">${t('Use 9 digits starting with 5', 'أدخل 9 أرقام تبدأ بـ 5')}</span></div>
      </div>
      <div class="form__row">
        <div class="field"><label for="${id}-email">${t('Email', 'البريد الإلكتروني')} <i>*</i></label><input id="${id}-email" name="email" type="email" required dir="ltr" autocomplete="email"><span class="field__err">${t('Please enter a valid email', 'يرجى إدخال بريد صحيح')}</span></div>
        <div class="field"><label for="${id}-co">${purpose ? t('Company', 'اسم الشركة') : t('Subject', 'الموضوع')}</label><input id="${id}-co" name="company" autocomplete="organization"></div>
      </div>
      <div class="form__row">
        <div class="field"><label for="${id}-loc">${t('Location', 'الموقع')} <i>*</i></label><select id="${id}-loc" name="location" required><option value="">${t('Select', 'اختر')}</option><option>${t('Riyadh', 'الرياض')}</option><option>${t('Jeddah', 'جدة')}</option><option>${t('Dammam', 'الدمام')}</option><option>${t('Other', 'أخرى')}</option></select><span class="field__err">${t('Please choose a location', 'يرجى اختيار الموقع')}</span></div>
        <div class="field"><label for="${id}-src">${t('Where did you hear about us?', 'أين سمعت عنا؟')}</label><select id="${id}-src" name="source"><option value="">${t('Select', 'اختر')}</option><option>${t('Social media', 'وسائل التواصل الاجتماعي')}</option><option>${t('Search', 'محركات البحث')}</option><option>${t('Friend or developer', 'صديق أو مطور')}</option><option>${t('Shows & exhibitions', 'المعارض')}</option></select></div>
      </div>
      <div class="field"><label for="${id}-msg">${t('Message', 'الرسالة')}</label><textarea id="${id}-msg" name="message"></textarea></div>
      <label class="check"><input type="checkbox" required name="consent"><span>${t('I agree to the <a href="https://www.daraltamleek.com/en/privacy-policy" target="_blank" rel="noopener">privacy policy</a> and to being contacted.', 'أوافق على <a href="https://www.daraltamleek.com/ar/privacy-policy" target="_blank" rel="noopener">سياسة الخصوصية</a> وعلى التواصل معي.')}</span></label>
      <div>${sbtn(t('Send', 'إرسال'))}</div>
      <p class="demo-note">${icon('lock')}<span>${t('Prototype form: nothing is sent yet. Connect it to the existing CRM endpoint at launch.', 'نموذج تجريبي: لا يتم إرسال أي بيانات حاليًا، ويُربط بنظام إدارة العملاء عند الإطلاق.')}</span></p>
      <div class="form__ok" role="status">${mark({ draw: true })}<h3>${t('Thank you.', 'شكرًا لك.')}</h3><p class="muted">${t('Your request has been received. We will contact you as soon as possible.', 'تم استلام طلبك بنجاح، وسيتم التواصل معك في أقرب وقت ممكن.')}</p></div>
    </form>
  </div>`;
}

export default function (t) {
  const sharedFaq = [
    { q: t('How quickly do you approve customers for financing?', 'ما الوقت الذي تستغرقونه للموافقة على العملاء؟'), a: `<p>${t('With our proprietary online processing system, customers can be pre-qualified in a matter of seconds.', 'من خلال نظامنا الخاص للمعالجة عبر الإنترنت يمكن لعملائنا الحصول على تأهيل مبدئي خلال ثوانٍ.')}</p>` },
    { q: t('Do you have competitive rates and terms?', 'هل تقدمون أسعارًا وشروطًا تنافسية؟'), a: `<p>${t('Yes. Our products are priced to be well received by our business partners and their clients.', 'نعم، تُسعَّر منتجاتنا بحيث تلقى قبول شركائنا وعملائهم.')}</p>` },
    { q: t('Do you accept a co-signer to help an applicant qualify?', 'هل تقبل الشركة التضامن لمساعدة مقدم الطلب؟'), a: `<p>${t('Yes. Applications with a wife, father, son, brother or sister are considered.', 'نعم، يؤخذ بعين الاعتبار كل طلب تضامني مع الوالدين أو الأبناء أو الأزواج أو الإخوة.')}</p>` },
    { q: t('What is the largest individual home finance value considered?', 'ما أكبر قيمة تمويل ممكنة للفرد؟'), a: `<p>${t('The maximum home finance amount is SAR 5 million.', 'أقصى قيمة تمويل 5 ملايين ريال.')}</p>` },
  ];

  const section = ({ id, n, kicker, title, lead, img, badge, body, side }) => `
  <section class="solution" id="${id}">
    <div class="wrap">
      <div class="solution__head"><span class="solution__num" aria-hidden="true">${n}</span><div>${eyebrow(kicker)}<h2 class="shead__title" data-split style="margin-top:14px">${title}</h2></div></div>
      <div class="grid2 grid2--top">
        <div class="prose">${lead ? `<p class="lead-xl" data-reveal>${lead}</p>` : ''}${body}</div>
        <div style="display:grid;gap:24px">
          <div class="solution__media" data-reveal><div class="arch"><img src="../assets/img/photo/${img}.webp" alt="" loading="lazy" data-parallax=".1"></div><div class="solution__badge"><b dir="ltr">${badge[0]}</b><small>${badge[1]}</small></div></div>
          ${side || ''}
        </div>
      </div>
    </div>
  </section>`;

  const benefitList = (items) => `<ul class="checks checks--2" data-reveal>${items.map((b) => `<li>${icon('check')}${b}</li>`).join('')}</ul>`;

  const body = `
${pageHero(t, {
  crumbs: [{ label: t('Business solutions', 'حلول الأعمال') }],
  kicker: t('Business solutions', 'حلول الأعمال'),
  title: t('Home finance, <em class="hl">as a service.</em>', 'التمويل السكني <em class="hl">كخدمة.</em>'),
  lead: t('Besides home finance for customers, Dar Al Tamleek offers valuable business services to its partners: programme management for institutions, financing tools for realtors and developers, and a home-ownership benefit for employers.', 'تنفرد دار التمليك بتنوع خدماتها؛ فإلى جانب حلول تمويل السكن للعملاء، توفر لشركائها خدمات أعمال قيّمة: إدارة البرامج للمؤسسات، وأدوات التمويل لمكاتب العقار والمطورين، وميزة تملّك المسكن لأصحاب العمل.'),
  chips: [t('SAR 11B+ managed', 'أكثر من 11 مليار ريال مُدارة'), t('500+ realtors', 'أكثر من 500 مكتب عقاري'), t('Pre-qualify in seconds', 'تأهيل خلال ثوانٍ')],
  actions: btn('#inquiry', t('Talk to business development', 'تواصل مع تطوير الأعمال')),
  img: 'meeting', alt: t('Two businessmen shaking hands across a table', 'رجلا أعمال يتصافحان'),
})}

<nav class="subnav" aria-label="${t('Business solutions', 'حلول الأعمال')}"><div class="wrap subnav__in">
  <a href="#management">${icon('layers')}${t('Management services', 'الخدمات الإدارية')}</a>
  <a href="#realtors">${icon('handshake')}${t('Realtors', 'مكاتب العقار')}</a>
  <a href="#developers">${icon('building')}${t('Developers', 'مطورو العقارات')}</a>
  <a href="#employers">${icon('briefcase')}${t('Employer program', 'برنامج الشركات')}</a>
  <a href="#institutions">${icon('gov')}${t('Institutions', 'المؤسسات')}</a>
  <a href="#inquiry">${icon('mail')}${t('Contact', 'تواصل')}</a>
</div></nav>

${section({
  id: 'management', n: '01', kicker: t('Management services', 'الخدمات الإدارية'),
  title: t('Over SAR 11 billion in assets, <em class="hl">managed.</em>', 'أكثر من 11 مليار ريال <em class="hl">أصول مُدارة.</em>'),
  lead: t('We manage your mortgage business\'s operational needs, lower capital investment, eliminate operational risk and keep you compliant in an evolving industry.', 'ندير الاحتياجات التشغيلية لأعمال التمويل لديك، ونخفض الاستثمار الرأسمالي، ونزيل المخاطر التشغيلية، ونضمن الالتزام في قطاع متطور.'),
  img: 'riyadh-night', badge: ['11B+', t('SAR in assets managed', 'ريال أصول مُدارة')],
  body: `<p data-reveal>${t('Outsource all or any part of mortgage origination, processing, underwriting and closing for residential transactions, fully Shariah-compliant, directly or through third parties.', 'يمكنك الاستعانة بنا لإدارة كل أو بعض عمليات إنشاء عقود التمويل السكني ومعالجتها والاكتتاب والإغلاق، بما يتوافق مع أحكام الشريعة، مباشرة أو عبر أطراف ثالثة.')}</p>
  <p data-reveal>${t('Our secure platform includes a proprietary, web-based Contract Origination System (COS) with full document imaging and integration with partners\' applications: a paperless, workflow-driven and fully transparent environment, with real-time views into program performance.', 'تضم منصتنا الآمنة نظام إنشاء العقود (COS) القائم على الويب مع أرشفة إلكترونية كاملة وإمكانية الدمج مع تطبيقات الشركاء، لبيئة عمل رقمية بالكامل وشفافة مع رؤية لحظية لأداء البرنامج.')}</p>
  <div class="grid2" style="gap:14px;margin-top:8px">
    ${[
      ['cpu', t('Built for the Saudi market', 'مصمم للسوق السعودي'), t('Systems originally created in Arabic', 'أنظمة بُنيت أصلًا باللغة العربية')],
      ['bolt', t('Real-time pre-qualification', 'تأهيل مبدئي لحظي'), t('Instant responses for applicants', 'استجابة فورية لمقدمي الطلبات')],
      ['layers', t('Flexible underwriting engine', 'محرك اكتتاب مرن'), t('Tailored to any standard', 'يمكن تكييفه لأي معيار')],
      ['globe', t('Accessible 24/7', 'متاح على مدار الساعة'), t('From virtually any location', 'من أي موقع تقريبًا')],
    ].map(([i, h, p]) => `<div class="card" data-reveal style="padding:22px"><span class="card__ic">${icon(i)}</span><h3>${h}</h3><p>${p}</p></div>`).join('')}
  </div>
  ${faq([
    { q: t('What end-to-end program management can you offer?', 'ما الحل المتكامل لإدارة البرامج الذي تقدمونه؟'), a: `<ul>${[t('Improved service standards and policies', 'تحسين مستويات الخدمة والسياسات'), t('Application of best practices', 'تطبيق أفضل الممارسات'), t('Standardised approach to market', 'مدخل موحد للسوق'), t('A single point of contact', 'نقطة اتصال واحدة'), t('Reduced internal expense', 'تخفيض المصروفات الداخلية'), t('Leverage of our technology platform', 'الاستفادة من منصتنا التقنية'), t('Marketing and brand awareness campaign design', 'تصميم الحملات التسويقية والتوعية بالعلامة')].map((x) => `<li>${x}</li>`).join('')}</ul>` },
    { q: t('What are your core competencies?', 'ما الكفاءات المحورية لدار التمليك؟'), a: `<ul>${[t('Managing third-party mortgage programs', 'إدارة برامج التمويل للأطراف الثالثة'), t('Home finance contract origination and servicing', 'إنشاء عقود التمويل السكني وخدمتها'), t('Flexible, open system architecture', 'تقنيات حديثة بهندسة مرنة ومفتوحة'), t('Modelling, analytics, segmentation and predictive tools', 'أدوات النمذجة والتحليل والتجزئة والتنبؤ'), t('A scalable servicing platform', 'منصة خدمات قابلة للتوسع'), t('Auditing, process design and compliance', 'المراجعة وتصميم العمليات والالتزام'), t('Credit cycle and credit risk management', 'إدارة دورة الائتمان ومخاطره')].map((x) => `<li>${x}</li>`).join('')}</ul>` },
    { q: t('What are the benefits of outsourcing?', 'ما فوائد الاستعانة بمصادر خارجية؟'), a: `<p>${t('We remove the need to build and maintain in-house technology, infrastructure, trained staff and home-finance compliance expertise, with a proven record of tailoring solutions to each client\'s business, systems and processes. A dedicated client management team designs solutions for your needs.', 'نغنيك عن بناء وصيانة التقنيات والبنية التحتية والكوادر المدربة وخبرات الالتزام داخليًا، مع سجل حافل في تصميم حلول تناسب أعمال كل عميل وأنظمته وعملياته، ويتولى فريق مخصص لإدارة العملاء تصميم الحلول وفق احتياجاتك.')}</p>` },
  ], { name: 'ms' })}`,
})}

${section({
  id: 'realtors', n: '02', kicker: t('Realtors', 'مكاتب العقار'),
  title: t('Over 500 realtors <em class="hl">close faster</em> with us.', 'أكثر من 500 مكتب عقاري <em class="hl">يُتمّ صفقاته أسرع</em> معنا.'),
  lead: t('Shariah-compliant financing, products and technology that help our realtor partners lead real estate transactions throughout the Kingdom.', 'حلول تمويل ومنتجات وتقنيات متوافقة مع الشريعة تساعد شركاءنا من مكاتب العقار على الريادة في الصفقات العقارية في جميع أنحاء المملكة.'),
  img: 'realtor', badge: ['500+', t('realtor partners', 'مكتب عقاري شريك')],
  body: `<p data-reveal>${t('Our Home Financing Specialists educate and guide both your sales team and your clients on the most efficient way to obtain home finance. Our proprietary origination system pre-qualifies prospects immediately, at your office or online, so your team knows which homes to propose.', 'يقدم أخصائيو التمويل لدينا التوجيه لفريق المبيعات لديك ولعملائك لإتمام التمويل بأكثر الطرق فعالية، ويمنح نظامنا الخاص العملاء تأهيلًا مبدئيًا فوريًا في مكتبك أو عبر الإنترنت، ليعرف فريقك العقارات المناسبة لاقتراحها.')}</p>
  ${benefitList([t('Dedicated account manager', 'مدير حساب مخصص'), t('Faster approval cycle', 'عملية موافقة أسرع'), t('Competitive rates', 'أسعار تنافسية'), t('Closing contracts quickly', 'إنهاء العقود بفترة قياسية'), t('Promote properties on partner website', 'ترويج العقارات لدى الشركاء')])}
  ${faq(sharedFaq, { name: 'rt' })}`,
})}

${section({
  id: 'developers', n: '03', kicker: t('Real estate developers', 'مطورو العقارات'),
  title: t('Immediate pre-qualification <em class="hl">for your buyers.</em>', 'تأهيل مبدئي فوري <em class="hl">لعملائك.</em>'),
  lead: t('The hardest part of completing a home sale is the customer\'s financing. We take it off your plate.', 'تأمين التمويل هو أصعب جزء في إتمام بيع المنزل، ونحن نتولاه عنك.'),
  img: 'tower', badge: [t('Seconds', 'ثوانٍ'), t('to pre-qualify a buyer', 'لتأهيل المشتري')],
  body: `<p data-reveal>${t('Dar Al Tamleek offers Shariah-compliant solutions to developer partners, giving their customers financing alternatives designed for broad appeal, whether they are building an estate or purchasing a completed property.', 'تقدم دار التمليك لشركائها من المطورين حلول تمويل متوافقة مع الشريعة توفر لعملائهم بدائل تمويل مصممة لتناسب شرائح واسعة، سواء لبناء مسكن أو شراء عقار مكتمل.')}</p>
  ${benefitList([t('Dedicated account manager', 'مدير حساب مخصص'), t('Faster approval cycle', 'عملية موافقة أسرع'), t('Competitive rates', 'أسعار تنافسية'), t('Closing contracts quickly', 'إنهاء العقود بفترة قياسية'), t('Marketing support', 'دعم التسويق')])}
  ${faq(sharedFaq, { name: 'dv' })}`,
})}

${section({
  id: 'employers', n: '04', kicker: t('Employer program (corporate)', 'برنامج الشركات'),
  title: t('A structured home-ownership <em class="hl">benefit.</em>', 'ميزة تملّك مسكن <em class="hl">منظمة لموظفيك.</em>'),
  lead: t('Keep your community motivated by offering employees the best home-finance benefit, integrated with other forms of compensation.', 'حافظ على تحفيز موظفيك بتقديم أفضل ميزة تمويل سكني تتكامل مع حزمة التعويضات الأخرى.'),
  img: 'team-hall', badge: [t('Payroll', 'خصم'), t('deduction repayments', 'من الراتب للسداد')],
  body: `<p data-reveal>${t('Broad coverage, assorted products and flexible terms make the program valued by employees who want to buy a home or refinance an existing contract.', 'تغطية واسعة ومنتجات متنوعة وشروط مرنة تجعل البرنامج محل تقدير الموظفين الراغبين في شراء منزل أو إعادة تمويل عقد قائم.')}</p>
  ${benefitList([t('Dedicated account manager', 'مدير حساب مخصص'), t('Customised program', 'برنامج مخصص'), t('Flexible terms', 'شروط مرنة'), t('Online application', 'تقديم إلكتروني'), t('Marketing support', 'دعم التسويق')])}
  ${faq([
    { q: t('What do employees need to apply?', 'ما المستندات المطلوبة من الموظفين؟'), a: `<ul>${[t('Income proof: an employment letter', 'إثبات الدخل: خطاب من جهة العمل'), t('Bank statements', 'كشوف الحساب البنكي'), t('Copy of the deed', 'نسخة من الصك'), t('Copy of National ID', 'نسخة من الهوية الوطنية'), t('Address proof, residence and work', 'إثبات العنوان للسكن والعمل')].map((x) => `<li>${x}</li>`).join('')}</ul><p>${t('Other documents may be required once a specialist reviews the application.', 'قد تُطلب مستندات أخرى بعد مراجعة الأخصائي للطلب.')}</p>` },
    { q: t('What does "fully Shariah compliant" mean?', 'ماذا يعني أن المنتجات متوافقة تمامًا مع الشريعة؟'), a: `<p>${t('Our products were developed in close coordination with the Shariah Supervisory Board and are formally certified. The board actively oversees them to ensure strict adherence to Shariah principles.', 'طُوّرت منتجاتنا بالتنسيق الوثيق مع الهيئة الشرعية وهي مجازة رسميًا، وتشرف الهيئة عليها باستمرار لضمان الالتزام التام بأحكام الشريعة.')}</p>` },
    { q: t('What is the minimum length of employment?', 'ما الحد الأدنى لمدة الخدمة؟'), a: `<p>${t('It depends on the agreement established with the employer.', 'يعتمد ذلك على الاتفاقية المبرمة مع جهة العمل.')}</p>` },
    { q: t('How are payments made?', 'كيف يتم السداد؟'), a: `<p>${t('The employer deducts the home finance payment from the employee\'s pay.', 'تخصم جهة العمل قسط التمويل من راتب الموظف.')}</p>` },
  ], { name: 'em' })}`,
})}

<section class="sec sec--sand pattern-bg" id="institutions">
  <div class="wrap">
    ${head({ kicker: t('Institutional programs', 'البرامج المؤسسية'), title: t('Trusted to run programs for <em class="hl">national institutions.</em>', 'شريك موثوق لإدارة برامج <em class="hl">المؤسسات الوطنية.</em>') })}
    <div class="partners">
      ${[
        ['GOSI', t('General Organization for Social Insurance', 'المؤسسة العامة للتأمينات الاجتماعية'), t('Administrator of GOSI\'s Masakin home financing program for government and private employees and all retirees.', 'تم توكيل دار التمليك لإدارة برنامج مساكن لجميع موظفي القطاعين الحكومي والخاص وجميع المتقاعدين.')],
        ['TAWUNIYA', t('Tawuniya', 'التعاونية'), t('A turn-key home financing benefit for Tawuniya employees to own their dream home or refinance existing contracts.', 'برنامج تمويل منزلي جاهز لموظفي التعاونية لامتلاك منزل أحلامهم أو إعادة تمويل عقودهم.')],
        ['REDF', t('Real Estate Development Fund', 'صندوق التنمية العقارية'), t('The REDF Subsidised Lending Program collaborates with Masakin to deliver government support to approved beneficiaries.', 'برنامج التمويل السكني المدعوم بالتعاون مع برنامج مساكن لتقديم الدعم الحكومي للمستفيدين.')],
        ['SAKANI', t('Sakani', 'سكني'), t('Ministry of Housing and REDF program allocating residential products to beneficiaries across Saudi Arabia.', 'برنامج من وزارة الإسكان وصندوق التنمية العقارية لتخصيص المنتجات السكنية للمستفيدين في جميع أنحاء المملكة.')],
      ].map(([a, n, p]) => `<article class="partner" data-reveal><span class="partner__abbr">${a}</span><b>${n}</b><p>${p}</p></article>`).join('')}
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap grid2 grid2--top">
    <div>
      ${head({ kicker: t('Business development', 'تطوير الأعمال'), title: t('Let\'s build your program <em class="hl">together.</em>', 'لنصمم برنامجك <em class="hl">معًا.</em>'), lead: t('Fill in the form and our expert team will get back to you to complete your registration in the program.', 'يرجى ملء النموذج، وسيقوم فريق الخبراء لدينا بالرد عليك لإنهاء تسجيلك في البرنامج.') })}
      <div class="split-img" data-reveal><div class="arch arch--soft" style="aspect-ratio:4/3.4"><img src="../assets/img/photo/apartments.webp" alt="" loading="lazy"></div></div>
    </div>
    ${inquiryForm(t, { title: t('Contact our business development team', 'تواصل مع فريق تطوير الأعمال'), lead: t('Realtors, developers, employers and institutions.', 'لمكاتب العقار والمطورين والشركات والمؤسسات.') })}
  </div>
</section>

${ctaBand(t, { title: t('Partner with the home-finance specialists.', 'كن شريكًا لأخصائيي التمويل السكني.'), lead: t('Our business development team responds quickly and designs a program around your customers or employees.', 'يستجيب فريق تطوير الأعمال بسرعة ويصمم برنامجًا يناسب عملاءك أو موظفيك.'), primary: btn('#inquiry', t('Start a conversation', 'ابدأ الحوار'), { variant: 'white' }) })}`;
  return {
    key: 'business',
    title: t('Business Solutions', 'حلول الأعمال'),
    desc: t('Dar Al Tamleek business solutions: mortgage program management (SAR 11B+ managed), realtor and developer financing, and employer home-ownership programs.', 'حلول الأعمال من دار التمليك: إدارة برامج التمويل (أكثر من 11 مليار ريال)، وحلول مكاتب العقار والمطورين، وبرامج تملّك المساكن للشركات.'),
    body,
  };
}
