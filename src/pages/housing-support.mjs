import { SITE, icon, btn, head, faq, pageHero, ctaBand, mark } from '../lib.mjs';

export default function (t) {
  const faqs = [
    { q: t('What is the REDF Home Lending program?', 'ما هو برنامج الإقراض السكني من صندوق التنمية العقارية؟'), a: `<p>${t('It was designed to encourage home ownership among Saudi citizens. Beneficiaries receive a monthly payment to cover the profit on up to SAR 500,000 of the financed amount.', 'صُمم البرنامج لتشجيع تملّك المساكن بين المواطنين، ويحصل المستفيد على دفعة شهرية تغطي الأرباح على مبلغ تمويل يصل إلى 500,000 ريال.')}</p>` },
    { q: t('What is the REDF Down Payment Guarantee Program?', 'ما هو برنامج ضمان الدفعة المقدمة من الصندوق؟'), a: `<p>${t('Beneficiaries provide a 5% down payment instead of the 10% SAMA requires for standard real estate financing. REDF guarantees the other 5% of the property value. The maximum property value is SAR 800,000.', 'يدفع المستفيد دفعة مقدمة بنسبة 5% بدلًا من 10% التي يشترطها البنك المركزي للتمويل العقاري، ويضمن الصندوق 5% من قيمة العقار، بحد أقصى لقيمة العقار 800,000 ريال.')}</p>` },
    { q: t('What is the REDF & MOH beneficiary program for Masakin?', 'ما هو برنامج مستفيدي الصندوق والوزارة ضمن مساكن؟'), a: `<p>${t('REDF\'s Home Lending Program works with GOSI\'s Masakin program, administered by Dar Al Tamleek, to offer government-supported home finance to approved beneficiaries in the government and private sectors and all retirees.', 'تعاون برنامج الإقراض السكني من الصندوق مع برنامج مساكن التابع للمؤسسة العامة للتأمينات الاجتماعية الذي تديره دار التمليك، لتقديم تمويل سكني مدعوم للمستفيدين المعتمدين من موظفي القطاعين الحكومي والخاص وجميع المتقاعدين.')}</p>` },
    { q: t('How much can I finance on the program?', 'كم يمكنني أن أموّل في البرنامج؟'), a: `<p>${t('A minimum of SAR 150,000 and a maximum of SAR 5,000,000.', 'من 150,000 ريال حتى 5,000,000 ريال.')}</p>` },
    { q: t('How is the property value determined?', 'كيف تُحدد قيمة العقار؟'), a: `<p>${t('An independent appraisal company determines the value of the property.', 'تحدد شركة تقييم مستقلة قيمة العقار.')}</p>` },
    { q: t('What kind of property is eligible?', 'ما العقارات المؤهلة؟'), a: `<p>${t('Completed villas, duplexes, townhomes and apartments up to 20 years old. Apartment buildings of up to 10 units qualify if you live in one of them. Second homes qualify too.', 'الفلل والدبلكسات والتاون هاوس والشقق المكتملة بعمر لا يتجاوز 20 سنة، والعمائر حتى 10 شقق بشرط السكن في إحداها، كما يُقبل المسكن الثاني.')}</p>` },
  ];

  const body = `
${pageHero(t, {
  crumbs: [{ label: t('Home finance', 'التمويل العقاري'), href: 'financing.html' }, { label: t('Housing support', 'الدعم السكني') }],
  kicker: t('REDF & MOH beneficiaries', 'مستفيدو الصندوق والوزارة'),
  title: t('Your housing support, <em class="hl">built in.</em>', 'دعمك السكني <em class="hl">مُضمَّن.</em>'),
  lead: t('The REDF and MOH Sponsorship Housing Support Program covers your home finance with Dar Al Tamleek. Add your support to your Murabaha finance and lower both your down payment and your monthly cost.', 'برنامج الدعم السكني من صندوق التنمية العقارية ووزارة الإسكان يشمل تمويلك العقاري مع دار التمليك. أضف دعمك إلى تمويل المرابحة لتخفض الدفعة الأولى والتكلفة الشهرية.'),
  chips: [t('5% down payment', 'دفعة أولى 5%'), t('35–100% of profit covered', 'تغطية 35–100% من الأرباح'), t('Paid monthly to you', 'يُحوَّل لك شهريًا')],
  actions: btn('apply.html', t('Register your interest', 'سجّل اهتمامك')) + btn(SITE.sakani, t('Check eligibility on Sakani', 'تحقق من استحقاقك عبر سكني'), { variant: 'line', ext: true }),
  img: 'family-2', alt: t('A Saudi father holding his young son', 'أب سعودي يحتضن ابنه'),
})}

<section class="sec sec--paper">
  <div class="wrap grid2">
    <div class="prose">
      <p class="lead-xl" data-reveal>${t('An updated housing subsidy that pays part of your financing cost every month, so owning costs less from day one.', 'دعم سكني محدَّث يدفع جزءًا من تكلفة تمويلك كل شهر، فيصبح التملّك أقل تكلفة من اليوم الأول.')}</p>
      <p data-reveal>${t('The Masakin (Murabaha) home finance program is provided by the General Organization for Social Insurance in cooperation with Dar Al Tamleek, which services the program. All beneficiaries can add their housing support to the finance.', 'يُقدَّم برنامج مساكن (مرابحة) من المؤسسة العامة للتأمينات الاجتماعية بالتعاون مع دار التمليك التي تتولى خدمة البرنامج، ويمكن لجميع المستفيدين إضافة دعمهم السكني إلى التمويل.')}</p>
      <p data-reveal>${t('It is open to all eligible beneficiaries of the Real Estate Development Fund or the Ministry of Housing, employed in the government or private sector, and all retirees.', 'البرنامج متاح لجميع المستفيدين المؤهلين من صندوق التنمية العقارية أو وزارة الإسكان من موظفي القطاعين الحكومي والخاص وجميع المتقاعدين.')}</p>
    </div>
    <div class="grid2" style="gap:14px">
      ${[
        ['gov', t('Government employees', 'موظفو القطاع الحكومي')],
        ['briefcase', t('Private sector employees', 'موظفو القطاع الخاص')],
        ['retire', t('All retirees', 'جميع المتقاعدين')],
        ['home', t('Ready housing units', 'الوحدات السكنية الجاهزة')],
      ].map(([i, l]) => `<div class="card" data-reveal><span class="card__ic">${icon(i)}</span><h3>${l}</h3></div>`).join('')}
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    ${head({ kicker: t('How the support works', 'كيف يعمل الدعم'), title: t('Three steps, <em class="hl">every month.</em>', 'ثلاث خطوات <em class="hl">كل شهر.</em>'), align: 'center' })}
    <div class="grid3">
      ${[
        ['deed', t('You get home finance from Dar Al Tamleek', 'تحصل على تمويلك العقاري من دار التمليك'), t('Program support begins once your home finance is in place.', 'يبدأ دعم البرنامج بعد حصولك على التمويل العقاري.')],
        ['percent', t('The Fund covers 35% to 100% of the profit', 'يغطي الصندوق من 35% إلى 100% من الأرباح'), t('The exact share follows the approved support matrix for your profile.', 'تُحدد النسبة حسب مصفوفة الدعم المعتمدة لملفك.')],
        ['coins', t('Support lands in your account', 'يصل الدعم إلى حسابك'), t('It is transferred directly to you after each monthly instalment is paid.', 'يُحوَّل إليك مباشرة بعد سداد القسط الشهري.')],
      ].map(([i, h, p], k) => `<article class="card" data-reveal><span class="card__n">0${k + 1}</span><span class="card__ic">${icon(i)}</span><h3>${h}</h3><p>${p}</p></article>`).join('')}
    </div>
  </div>
</section>

<section class="sec sec--ink">
  <div class="wrap grid2">
    <div>
      ${head({ kicker: t('Support matrix', 'مصفوفة الدعم'), title: t('Between 35% and <em class="hl">all</em> of your profit.', 'من 35% حتى <em class="hl">كامل</em> الأرباح.'), lead: t('The Real Estate Development Fund and the Ministry of Housing pay a monthly amount that covers your financing profit according to the approved product matrix.', 'يقدم صندوق التنمية العقارية ووزارة الإسكان مبلغ دعم شهري يغطي أرباح التمويل وفق مصفوفة المنتجات المعتمدة.') })}
      <div class="gauge" data-reveal>
        <div class="gauge__bar"><div class="gauge__fill"></div></div>
        <div class="gauge__scale"><span>0%</span><span><b>35%</b> ${t('minimum', 'حد أدنى')}</span><span><b>100%</b> ${t('maximum', 'حد أقصى')}</span></div>
      </div>
    </div>
    <div class="grid2" style="gap:14px">
      <div class="support__fact" data-reveal><b><em>5</em>%</b><span>${t('Down payment instead of the 10% set by SAMA for a first home', 'دفعة أولى بدلًا من 10% التي حددها البنك المركزي للمسكن الأول')}</span></div>
      <div class="support__fact" data-reveal><b>800<em>K</em></b><span>${t('Maximum property value (SAR) for the down payment reduction', 'أقصى قيمة للعقار (ريال) لتخفيض الدفعة الأولى')}</span></div>
      <div class="support__fact" data-reveal style="grid-column:1/-1"><b>500<em>K</em></b><span>${t('Financed amount (SAR) on which REDF covers the profit', 'مبلغ التمويل (ريال) الذي يغطي الصندوق أرباحه')}</span></div>
    </div>
  </div>
</section>

<section class="sec sec--sand">
  <div class="wrap grid2 grid2--top">
    <div>
      ${head({ kicker: t('Down payment reduction', 'تخفيض الدفعة الأولى'), title: t('Pay 5% down. <em class="hl">Here is how.</em>', 'ادفع 5% فقط. <em class="hl">إليك الطريقة.</em>') })}
      <ul class="checks" data-reveal>
        <li>${icon('check')}${t('The home must be your first dwelling', 'أن يكون المسكن الأول')}</li>
        <li>${icon('check')}${t('The unit price must be SAR 800,000 or less', 'ألا يتجاوز سعر الوحدة 800 ألف ريال')}</li>
        <li>${icon('check')}${t('REDF guarantees 5% of the property value on your behalf', 'يضمن الصندوق 5% من قيمة العقار نيابةً عنك')}</li>
      </ul>
    </div>
    <div class="card card--ink" data-reveal style="padding:clamp(28px,4vw,48px);gap:20px">
      ${mark({ cls: '', draw: true })}
      <h3 style="font:var(--display-wt) clamp(26px,2.6vw,36px)/1.2 var(--f-display)">${t('Program options', 'خيارات البرنامج')}</h3>
      <ul class="checks">
        <li>${icon('check')}${t('Buying a ready housing unit', 'شراء وحدة سكنية جاهزة')}</li>
        <li>${icon('check')}${t('Apply for subsidised housing finance eligibility on the Sakani platform', 'التقديم على استحقاق التمويل السكني المدعوم عبر منصة سكني')}</li>
        <li>${icon('check')}${t('Use the support calculator to see your support ratio', 'استخدم حاسبة الدعم لمعرفة نسبة الدعم')}</li>
      </ul>
      <div class="extlinks">
        <a class="pill-link" href="${SITE.sakani}" target="_blank" rel="noopener">${icon('external')}${t('Sakani platform', 'منصة سكني')}</a>
        <a class="pill-link" href="https://www.redf.gov.sa/" target="_blank" rel="noopener">${icon('external')}${t('Real Estate Development Fund', 'صندوق التنمية العقارية')}</a>
      </div>
    </div>
  </div>
</section>

<section class="sec sec--paper">
  <div class="wrap grid2 grid2--top">
    <div>
      ${head({ kicker: t('FAQ', 'الأسئلة الشائعة'), title: t('Housing support, <em class="hl">explained.</em>', 'الدعم السكني <em class="hl">بوضوح.</em>') })}
      <div class="note" data-reveal>${icon('doc')}<span>${t('<b>Masakin fatwa.</b> The REDF Subsidised Lending Program works with GOSI\'s Masakin program, administered by Dar Al Tamleek. ', '<b>فتوى مساكن.</b> يتعاون برنامج التمويل المدعوم من الصندوق مع برنامج مساكن الذي تديره دار التمليك. ')}<a class="link" href="shariah.html">${t('See our fatwas', 'اطّلع على الفتاوى')}</a></span></div>
    </div>
    ${faq(faqs, { name: 'hs' })}
  </div>
</section>

${ctaBand(t)}`;
  return {
    key: 'financing',
    title: t('Housing Support (REDF & MOH)', 'الدعم السكني'),
    desc: t('Add your REDF and Ministry of Housing support to Murabaha home finance with Dar Al Tamleek: 5% down payment for first homes and 35–100% of profit covered monthly.', 'أضف دعم صندوق التنمية العقارية ووزارة الإسكان إلى تمويل المرابحة مع دار التمليك: دفعة أولى 5% للمسكن الأول وتغطية 35–100% من الأرباح شهريًا.'),
    body,
  };
}
