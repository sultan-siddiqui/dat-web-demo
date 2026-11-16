import { SITE, icon, btn, head, faq, pageHero, ctaBand } from '../lib.mjs';

export default function (t) {
  const benefits = [
    t('Fixed rate, fixed payment (Murabaha)', 'هامش ربح ثابت بنظام المرابحة وأقساط ثابتة لا تتغير'),
    t('No salary transfer: work with any bank', 'بدون اشتراط تحويل الراتب'),
    t('The deed is in the customer\'s name', 'الصك باسم العميل'),
    t('Financing up to 30 years', 'تمويل يصل إلى 30 سنة'),
    t('Financing up to age 75', 'تمويل حتى سن الـ 75'),
    t('15% down payment for second-home buyers', 'دفعة أولى 15% للمسكن الثاني'),
    t('REDF & MOH beneficiaries included', 'يشمل مستفيدي صندوق التنمية العقارية ووزارة الإسكان'),
    t('Shariah compliant', 'متوافق مع أحكام الشريعة الإسلامية'),
    t('All government and private sectors', 'يشمل موظفي القطاعين الحكومي والخاص'),
    t('Up to 6 months grace period, optional', 'فترة سماح اختيارية حتى 6 أشهر'),
  ];

  const parts = {
    villas: [
      ['5,000,000', t('SAR', 'ريال'), t('Financing limit', 'الحد الأقصى للتمويل'), true],
      ['4,000', t('SAR', 'ريال'), t('Minimum monthly income, government sector', 'الحد الأدنى للدخل الشهري - القطاع الحكومي')],
      ['7,000', t('SAR', 'ريال'), t('Minimum monthly income, private sector', 'الحد الأدنى للدخل الشهري - القطاع الخاص')],
      ['10%', '', t('Minimum down payment', 'الحد الأدنى للدفعة الأولى')],
      ['20–75', t('yrs', 'سنة'), t('Age criteria', 'الفئة العمرية')],
    ],
    lands: [
      ['2,000,000', t('SAR', 'ريال'), t('Financing limit', 'الحد الأقصى للتمويل'), true],
      ['4,000', t('SAR', 'ريال'), t('Minimum monthly income, government sector', 'الحد الأدنى للدخل الشهري - القطاع الحكومي')],
      ['7,000', t('SAR', 'ريال'), t('Minimum monthly income, private sector', 'الحد الأدنى للدخل الشهري - القطاع الخاص')],
      ['30%', '', t('Minimum down payment', 'الحد الأدنى للدفعة الأولى')],
      ['20–75', t('yrs', 'سنة'), t('Age criteria', 'الفئة العمرية')],
    ],
    refi: [
      ['5,000,000', t('SAR', 'ريال'), t('Financing limit', 'الحد الأقصى للتمويل'), true],
      ['4,000', t('SAR', 'ريال'), t('Minimum monthly income', 'الحد الأدنى للدخل الشهري')],
      ['80%', '', t('Of property value financed', 'من قيمة العقار يمكن تمويلها')],
      ['20–75', t('yrs', 'سنة'), t('Age criteria', 'الفئة العمرية')],
      [t('Fixed', 'ثابت'), '', t('Profit rate for the full term', 'هامش الربح طوال المدة')],
    ],
  };
  const partGrid = (k) => `<div class="parts">${parts[k].map(([b, s, l, red]) => `<div class="part ${red ? 'part--red' : ''}" data-reveal><b dir="ltr">${b}${s ? `<small>${s}</small>` : ''}</b><span>${l}</span></div>`).join('')}</div>`;

  const docs = [
    { q: t('Required documents', 'المستندات المطلوبة'), a: `<ul><li>${t('Completed application form, signed', 'نموذج الطلب مكتمل وموقّع')}</li><li>${t('Saudi National ID and family ID to verify dependents, signed', 'الهوية الوطنية وسجل الأسرة للتحقق من التابعين، موقّعة')}</li></ul>` },
    { q: t('Income documents', 'مستندات الدخل'), a: `<ul><li>${t('Salary letter on employer letterhead with authorised signature, showing hire date, current position and status, monthly or annual salary and any bonus income (may be addressed to the Public Pension Agency), dated within 60 days of the contract date', 'تعريف بالراتب على ورق جهة العمل بتوقيع معتمد يوضح تاريخ التعيين والوظيفة الحالية والراتب الشهري أو السنوي وأي مكافآت (ويمكن توجيهه إلى المؤسسة العامة للتقاعد)، بتاريخ لا يتجاوز 60 يومًا من تاريخ العقد')}</li><li>${t('Bank statements for the last 6 months showing consistent income transfers', 'كشف حساب بنكي لآخر 6 أشهر يوضح انتظام تحويل الدخل')}</li><li>${t('Direct debit form with signature verified by the bank', 'نموذج الخصم المباشر مع توثيق التوقيع من البنك')}</li><li>${t('Masakin program application fee of SAR 200', 'رسوم طلب برنامج مساكن 200 ريال')}</li></ul>` },
    { q: t('Additional income documents', 'مستندات الدخل الإضافي'), a: `<ul><li>${t('Documentation of the nature of the income', 'مستندات توضح طبيعة الدخل')}</li><li>${t('Any documents clarifying the additional income, such as lease contracts', 'أي مستندات توضح الدخل الإضافي مثل عقود الإيجار')}</li><li>${t('Bank statements for the last 2 years showing the additional income', 'كشف حساب لآخر سنتين يوضح الدخل الإضافي')}</li></ul>` },
    { q: t('Property documents', 'مستندات العقار'), a: `<ul><li>${t('The seller\'s offer and agreement to sell, signed by the seller (with mobile number) and by the customer to verify price and property', 'عرض البائع واتفاقية البيع موقعة من البائع مع رقم جواله ومن العميل للتحقق من السعر والعقار')}</li><li>${t('Copy of the building licence. Its date sets the property age unless a later completion certificate or first electricity receipt is provided', 'نسخة من رخصة البناء، ويُحتسب عمر العقار من تاريخها ما لم تُقدَّم شهادة إتمام بناء أو أول فاتورة كهرباء بتاريخ أحدث')}</li><li>${t('Copy of the property deed signed by the seller', 'نسخة من صك العقار موقعة من البائع')}</li><li>${t('Property location map', 'كروكي موقع العقار')}</li><li>${t('Copy of the property deed signed by the customer', 'نسخة من صك العقار موقعة من العميل')}</li><li>${t('Property inspection report', 'تقرير فحص العقار')}</li></ul>` },
  ];

  const faqs = [
    { q: t('What\'s the difference between Ijarah and Murabaha?', 'ما الفرق بين الإجارة والمرابحة؟'), a: `<p>${t('Ijarah is a lease contract with a profit rate that can change. Murabaha is a purchase contract with a fixed profit rate that won\'t change over the life of the contract.', 'الإجارة عقد تأجير بهامش ربح قد يتغير، أما المرابحة فعقد شراء بهامش ربح ثابت لا يتغير طوال مدة العقد.')}</p>` },
    { q: t('How do I qualify?', 'كيف أتأهل للبرنامج؟'), a: `<p>${t('Saudi nationals must be at least 20 years of age and no more than 68 at the time of application, have good credit, and earn a minimum of SAR 4,000 per month in a government sector position held for at least one year. Private sector applicants need a minimum income of SAR 7,000.', 'يجب ألا يقل عمر المتقدم عن 20 سنة ولا يزيد على 68 سنة عند التقديم، وأن يتمتع بسجل ائتماني جيد، وألا يقل راتبه عن 4,000 ريال في القطاع الحكومي مع خدمة لا تقل عن سنة، و7,000 ريال في القطاع الخاص.')}</p>` },
    { q: t('Can my spouse participate?', 'هل يمكن لزوجي أو زوجتي المشاركة؟'), a: `<p>${t('Yes. Husband and wife can apply together as co-applicants when employed in the government or private sector, or as retirees.', 'نعم، يمكن تضامن الزوج والزوجة إذا كانا موظفَين في القطاع الحكومي أو الخاص أو من المتقاعدين.')}</p>` },
    { q: t('What is the structure of the product?', 'ما هيكل المنتج؟'), a: `<p>${t('A fixed profit rate Murabaha for financing homes for up to 30 years, with an optional grace period of up to six months and one of the most competitive profit rates in the Kingdom.', 'مرابحة بهامش ربح ثابت لتمويل المساكن لمدة تصل إلى 30 سنة، مع فترة سماح اختيارية تصل إلى ستة أشهر، ومن أكثر هوامش الربح تنافسية في المملكة.')}</p>` },
    { q: t('Is the grace period optional?', 'هل فترة السماح اختيارية؟'), a: `<p>${t('Yes. The grace period is optional.', 'نعم، فترة السماح اختيارية.')}</p>` },
    { q: t('What are the profit rates?', 'ما هوامش الربح؟'), a: `<p>${t('Profit rates vary with the number of years of financing and your credit profile. See the disclosure table above for a SAMA-format example.', 'تختلف هوامش الربح باختلاف مدة التمويل والسجل الائتماني. اطّلع على جدول الإفصاح أعلاه للاطلاع على مثال وفق نموذج البنك المركزي.')}</p>` },
    { q: t('What if I pay off early?', 'ماذا لو سددت مبكرًا؟'), a: `<p>${t('The profit for any graced period and the remaining contract balance must be paid in full. The early payment charge is the profit of the next three instalments.', 'يجب سداد أرباح فترة السماح والرصيد المتبقي من العقد كاملًا، وتكون رسوم السداد المبكر بمقدار أرباح الأقساط الثلاثة التالية.')}</p>` },
    { q: t('In which cities is the program available?', 'في أي المدن يتوفر البرنامج؟'), a: `<p>${t('Throughout the Kingdom, through Dar Al Tamleek branches. Call 800 124 0166 for the closest branch to you.', 'في جميع أنحاء المملكة عبر فروع دار التمليك. اتصل على 800 124 0166 لمعرفة أقرب فرع إليك.')}</p>` },
    { q: t('How does the company determine the value of the property?', 'كيف تحدد الشركة قيمة العقار؟'), a: `<p>${t('Through an appraisal by an authorised, independent professional, arranged by Dar Al Tamleek. The appraiser sends the valuation to us for evaluation.', 'من خلال تقييم يجريه مقيّم مستقل ومعتمد تتولى دار التمليك ترتيبه، ويرسل المقيّم التقييم إلينا لدراسته.')}</p>` },
    { q: t('What kind of property is eligible?', 'ما العقارات المؤهلة للتمويل؟'), a: `<p>${t('Completed villas, duplexes, townhomes and apartments, no more than 20 years old when financed. Eligibility requirements are subject to change.', 'الفلل والدبلكسات والتاون هاوس والشقق المكتملة، على ألا يزيد عمر العقار على 20 سنة عند التمويل. وقد تتغير شروط الأهلية.')}</p>` },
    { q: t('Can I buy an apartment building?', 'هل يمكنني شراء عمارة سكنية؟'), a: `<p>${t('Yes, if it has no more than 10 apartments and you live in one of them.', 'نعم، بشرط ألا تزيد على 10 شقق وأن تسكن في إحداها.')}</p>` },
    { q: t('Can I buy a second home?', 'هل يمكنني شراء مسكن ثانٍ؟'), a: `<p>${t('Yes. Second homes qualify, with a 15% minimum down payment.', 'نعم، المسكن الثاني مؤهل بدفعة أولى لا تقل عن 15%.')}</p>` },
  ];

  const body = `
${pageHero(t, {
  crumbs: [{ label: t('Home Finance Murabaha', 'التمويل العقاري مرابحة') }],
  kicker: t('Home Finance Murabaha', 'برنامج التمويل العقاري مرابحة'),
  title: t('Fixed from the first instalment <em class="hl">to the last.</em>', 'ثابت من القسط الأول <em class="hl">حتى الأخير.</em>'),
  lead: t('A Shariah-compliant home finance program based on the Murabaha structure, for employees, retirees and residents. It supports home ownership in line with Saudi Vision 2030 through flexible, reliable and easy financing.', 'نقدم برنامج تمويل عقاري متوافق مع أحكام الشريعة الإسلامية بصيغة المرابحة للموظفين والمتقاعدين والمقيمين، يدعم التملّك تماشيًا مع رؤية السعودية 2030 من خلال حلول تمويل مرنة وموثوقة وسهلة.'),
  chips: [t('Shariah compliant', 'متوافق مع الشريعة'), t('Fixed profit rate', 'هامش ربح ثابت'), t('Deed in your name', 'الصك باسمك')],
  actions: btn('apply.html', t('Register your interest', 'سجّل اهتمامك')) + btn('calculator.html', t('Calculate', 'احسب قسطك'), { variant: 'line', ic: 'calc' }),
  img: 'villa-pool', alt: t('A modern white villa with a swimming pool', 'فيلا بيضاء حديثة مع مسبح'),
})}

<section class="sec sec--paper">
  <div class="wrap grid2">
    <div class="prose">
      <p class="lead-xl" data-reveal>${t('One contract, one price, one instalment. You always know exactly what you owe and exactly when it ends.', 'عقد واحد وسعر واحد وقسط واحد. تعرف دائمًا ما عليك بالضبط ومتى ينتهي.')}</p>
      <p data-reveal>${t('This program is designed to increase home ownership among citizens and residents, in line with Saudi Vision 2030\'s goals for the housing sector. We combine flexibility, transparency and an easy process so you can achieve home ownership with confidence.', 'صُمم هذا البرنامج خصيصًا لدعم زيادة نسبة التملّك بين المواطنين والمقيمين تماشيًا مع مستهدفات رؤية السعودية 2030 في قطاع الإسكان، ونلتزم بحلول تجمع بين المرونة والشفافية وسهولة الإجراءات لتحقيق حلم التملّك بكل ثقة.')}</p>
      <ul class="checks checks--2" data-reveal style="margin-top:12px">${benefits.map((b) => `<li>${icon('check')}${b}</li>`).join('')}</ul>
    </div>
    <div class="split-img" data-reveal>
      <div class="arch"><img src="../assets/img/photo/keys-door.webp" alt="${t('A hand holding house keys at a front door', 'يد تحمل مفاتيح المنزل عند الباب')}" loading="lazy" data-parallax=".1"></div>
      <div class="split-img__tag">${icon('users')}<span>${t('Co-applicant: husband and wife can apply together', 'إمكانية تضامن الزوج والزوجة')}</span></div>
    </div>
  </div>
</section>

<section class="sec" id="particulars">
  <div class="wrap">
    ${head({ kicker: t('Program particulars', 'تفاصيل البرنامج'), title: t('The numbers, <em class="hl">up front.</em>', 'الأرقام <em class="hl">بوضوح.</em>'), lead: t('Choose a property type to see its financing limit, income requirement and down payment.', 'اختر نوع العقار لمعرفة حد التمويل والدخل المطلوب والدفعة الأولى.') })}
    <div data-tabs>
      <div class="tabs__list" role="tablist" aria-label="${t('Property type', 'نوع العقار')}">
        <button class="tabs__btn" role="tab" id="tb-v" aria-controls="tp-v" aria-selected="true">${icon('home')}${t('Villas, apartments & buildings', 'فلل وشقق ومبانٍ')}</button>
        <button class="tabs__btn" role="tab" id="tb-l" aria-controls="tp-l" aria-selected="false" tabindex="-1">${icon('land')}${t('Lands', 'أراضٍ')}</button>
        <button class="tabs__btn" role="tab" id="tb-r" aria-controls="tp-r" aria-selected="false" tabindex="-1">${icon('refresh')}${t('Refinance', 'إعادة التمويل')}</button>
      </div>
      <div class="tabs__panel" role="tabpanel" id="tp-v" aria-labelledby="tb-v">${partGrid('villas')}</div>
      <div class="tabs__panel" role="tabpanel" id="tp-l" aria-labelledby="tb-l" hidden>${partGrid('lands')}</div>
      <div class="tabs__panel" role="tabpanel" id="tp-r" aria-labelledby="tb-r" hidden>${partGrid('refi')}</div>
    </div>
    <p class="note" data-reveal style="margin-top:20px">${icon('sparkle')}<span>${t('Financing amounts of up to SAR 30M are available on the Murabaha program. Speak to a specialist about larger amounts.', 'يتاح في برنامج المرابحة مبلغ تمويل يصل إلى 30 مليون ريال. تحدّث إلى أحد الأخصائيين بشأن المبالغ الأكبر.')}</span></p>
  </div>
</section>

<section class="sec sec--sand" id="disclosure">
  <div class="wrap">
    ${head({ kicker: t('Disclosure table', 'جدول الإفصاح'), title: t('A worked example, <em class="hl">in SAMA format.</em>', 'مثال تطبيقي <em class="hl">وفق نموذج البنك المركزي.</em>'), lead: t('Disclosure of profit rates on financing products, as instructed by the Saudi Central Bank.', 'الإفصاح عن معدلات الربح على منتجات التمويل وفق تعليمات البنك المركزي السعودي.') })}
    <div class="tbl-wrap" data-reveal>
      <table class="tbl">
        <caption class="vh">${t('Residential mortgage (Masakin) example', 'مثال التمويل السكني (مساكن)')}</caption>
        <thead><tr><th>${t('Property market value', 'القيمة السوقية للعقار')}</th><th>${t('Loan to value (2)', 'نسبة التمويل إلى القيمة (2)')}</th><th>${t('Fixed or variable (3)', 'ثابت أو متغير (3)')}</th><th>APR</th><th>${t('Maturity', 'المدة')}</th><th>${t('Payment type', 'نوع السداد')}</th><th>${t('Monthly repayment', 'القسط الشهري')}</th><th>${t('Early payment charge', 'رسوم السداد المبكر')}</th></tr></thead>
        <tbody><tr><td dir="ltr">500,000</td><td>90%</td><td>${t('Fixed rate', 'ثابت')}</td><td class="hl-cell">6.43%</td><td>${t('25 years', '25 سنة')}</td><td>${t('Principal and profit', 'أصل وربح')}</td><td class="hl-cell" dir="ltr">3,031</td><td>${t('Profit of future 3 instalments', 'أرباح 3 أقساط مستقبلية')}</td></tr></tbody>
      </table>
    </div>
    <div class="fn" data-reveal>
      <span>(1) ${t('Depending on the consumer\'s risk profile, pricing can change for some customers compared with this example.', 'قد تختلف الأسعار لبعض العملاء مقارنة بهذا المثال حسب ملف المخاطر.')}</span>
      <span>(2) ${t('First-time homebuyer.', 'مشترٍ لمسكنه الأول.')}</span>
      <span>(3) ${t('Rate fixed for the entire term.', 'هامش ربح ثابت طوال المدة.')}</span>
      <span>(4) ${t('Up to 6 months grace period: payments start 6 months after you get your home.', 'فترة سماح حتى 6 أشهر: يبدأ السداد بعد 6 أشهر من استلامك المنزل.')}</span>
    </div>
  </div>
</section>

<section class="sec" id="documents">
  <div class="wrap grid2 grid2--top">
    <div>
      ${head({ kicker: t('Required documents', 'المستندات المطلوبة'), title: t('Everything to bring, <em class="hl">in one list.</em>', 'كل ما تحتاجه <em class="hl">في قائمة واحدة.</em>'), lead: t('Your Home Finance Specialist may ask for more once they review your application.', 'قد يطلب أخصائي التمويل مستندات إضافية بعد مراجعة طلبك.') })}
      <div class="note" data-reveal>${icon('doc')}<span>${t('<b>Masakin\'s fatwa.</b> The program is authorised by the Dar Al Tamleek Shariah Board. ', '<b>فتوى برنامج المرابحة.</b> البرنامج مجاز من الهيئة الشرعية لدار التمليك. ')}<a class="link" href="${SITE.legacy}/Library/Assets//Gallery/ShariahCompliance/إجازة منتج التمويل العقاري بصيغة المرابحة - دار التلميك.pdf" target="_blank" rel="noopener">${t('Read the fatwa (PDF, Arabic)', 'اقرأ الفتوى (PDF)')}</a></span></div>
    </div>
    ${faq(docs, { cls: 'acc--docs', name: 'docs' })}
  </div>
</section>

<section class="sec sec--paper" id="faq">
  <div class="wrap grid2 grid2--top">
    ${head({ kicker: t('FAQ', 'الأسئلة الشائعة'), title: t('Questions, <em class="hl">answered.</em>', 'أسئلتك <em class="hl">وإجاباتها.</em>') })}
    ${faq(faqs, { name: 'fq' })}
  </div>
</section>

${ctaBand(t)}`;
  return {
    key: 'financing',
    title: t('Home Finance Murabaha', 'التمويل العقاري مرابحة'),
    desc: t('Shariah-compliant Murabaha home finance: fixed profit rate, fixed instalments, deed in your name, up to 30 years and age 75. Particulars, documents, disclosure and FAQs.', 'تمويل عقاري بصيغة المرابحة: هامش ربح ثابت وأقساط ثابتة والصك باسمك حتى 30 سنة وسن 75. التفاصيل والمستندات والإفصاح والأسئلة الشائعة.'),
    body,
  };
}
