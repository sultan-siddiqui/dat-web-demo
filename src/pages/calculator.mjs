import { icon, btn, head, eyebrow, mark, ctaBand } from '../lib.mjs';

export default function (t) {
  const seg = (name, opts, label) => `<div class="field-r"><span class="lbl" style="font-weight:700;font-size:15px">${label}</span><div class="seg" role="radiogroup" aria-label="${label}">${opts.map(([v, l], i) => `<label><input type="radio" name="${name}" value="${v}" ${i === 0 ? 'checked' : ''}><span>${l}</span></label>`).join('')}</div></div>`;
  const range = (id, name, label, min, max, step, val, unit, scale, out) => `<div class="field-r"><div class="field-r__top"><label for="${id}">${label}</label><span class="val"><span data-o="${out || name}">${val}</span>${unit ? `<small>${unit}</small>` : ''}</span></div><input class="range" id="${id}" type="range" name="${name}" min="${min}" max="${max}" step="${step}" value="${val}"><div class="range__scale"><span>${scale[0]}</span><span>${scale[1]}</span></div></div>`;

  const body = `
<section class="phero" style="padding-bottom:40px">
  <div class="phero__pattern" aria-hidden="true"></div>
  <div class="wrap" style="display:grid;gap:22px;max-width:calc(var(--wrap) + var(--gut)*2)">
    <nav class="crumbs" aria-label="${t('Breadcrumb', 'مسار التنقل')}"><a href="index.html">${t('Home', 'الرئيسية')}</a><span>/</span><a href="financing.html">${t('Home finance', 'التمويل العقاري')}</a><span>/</span><span aria-current="page">${t('Calculator', 'الحاسبة')}</span></nav>
    ${eyebrow(t('Finance calculator', 'حاسبة التمويل'))}
    <h1 class="phero__title" data-split style="max-width:960px">${t('Know your instalment <em class="hl">to the riyal.</em>', 'اعرف قسطك <em class="hl">بالريال.</em>')}</h1>
    <p class="phero__lead" data-reveal>${t('Tell us a little about yourself and the home you have in mind. We apply the program rules for down payment and term automatically.', 'أخبرنا قليلًا عنك وعن المنزل الذي تفكر فيه، وسنطبّق شروط البرنامج للدفعة الأولى والمدة تلقائيًا.')}</p>
  </div>
</section>

<section class="sec" style="padding-top:0">
  <div class="wrap">
    <form class="calc" data-calc onsubmit="return false" aria-label="${t('Home finance calculator', 'حاسبة التمويل العقاري')}">
      <div class="calc__in">
        ${seg('sector', [['gov', t('Government', 'حكومي')], ['private', t('Private', 'خاص')], ['retired', t('Retired', 'متقاعد')]], t('Your sector', 'القطاع'))}
        <div class="form__row" style="gap:18px">
          ${seg('home', [['first', t('First home', 'المسكن الأول')], ['second', t('Second home', 'المسكن الثاني')]], t('Home type', 'نوع المسكن'))}
          ${seg('redf', [['no', t('No', 'لا')], ['yes', t('Yes', 'نعم')]], t('REDF / Sakani beneficiary?', 'مستفيد من الصندوق أو سكني؟'))}
        </div>
        ${range('k-age', 'age', t('Your age', 'عمرك'), 20, 68, 1, 35, t('years', 'سنة'), ['20', '68'])}
        ${range('k-price', 'price', t('Property price', 'قيمة العقار'), 150000, 5000000, 10000, 1000000, t('SAR', 'ريال'), ['150K', '5M'], 'price')}
        <div class="field-r"><div class="field-r__top"><label for="k-down">${t('Down payment', 'الدفعة الأولى')} <small class="muted" style="font-weight:600">· ${t('minimum', 'الحد الأدنى')} <span data-o="mindown">10%</span></small></label><span class="val"><span data-o="down">10%</span><small dir="ltr"><span data-o="downamt">100,000</span></small></span></div><input class="range" id="k-down" type="range" name="down" min="10" max="50" step="1" value="10"><div class="range__scale"><span>${t('min', 'أدنى')}</span><span>50%</span></div></div>
        <div class="field-r"><div class="field-r__top"><label for="k-years">${t('Finance term', 'مدة التمويل')} <small class="muted" style="font-weight:600">· ${t('max for your age', 'الحد الأقصى لعمرك')} <span data-o="maxyears">30</span></small></label><span class="val"><span data-o="years">25</span><small>${t('years', 'سنة')}</small></span></div><input class="range" id="k-years" type="range" name="years" min="5" max="30" step="1" value="25"><div class="range__scale"><span>5</span><span>30</span></div></div>
        <p class="demo-note">${icon('sparkle')}<span>${t('Minimum monthly income: SAR 4,000 for the government sector and SAR 7,000 for the private sector. Finance must end by age 75.', 'الحد الأدنى للدخل الشهري: 4,000 ريال للقطاع الحكومي و7,000 ريال للقطاع الخاص، وينتهي التمويل قبل سن 75.')}</span></p>
      </div>
      <div class="calc__out">
        ${mark()}
        <p class="calc__label">${t('Estimated monthly instalment', 'القسط الشهري التقديري')}</p>
        <p class="calc__pay"><span data-o="pay">0</span><small>${t('SAR / month, fixed', 'ريال شهريًا، ثابت')}</small></p>
        <div class="calc__legend">
          <svg class="donut" viewBox="0 0 100 100" aria-hidden="true"><circle class="p1" cx="50" cy="50" r="40" pathLength="1"/><circle class="p2" cx="50" cy="50" r="40" pathLength="1"/></svg>
          <ul><li><i></i><span><b data-o="pp">0%</b>${t('Price of the home', 'قيمة التمويل')}</span></li><li><i></i><span><b data-o="pr">0%</b>${t('Profit', 'الربح')}</span></li></ul>
        </div>
        <div class="calc__rows">
          <div><span>${t('Finance amount', 'مبلغ التمويل')}</span><b dir="ltr" data-o="loan">0</b></div>
          <div><span>${t('Total profit', 'إجمالي الربح')}</span><b dir="ltr" data-o="profit">0</b></div>
          <div><span>${t('Total payable', 'إجمالي المبلغ المستحق')}</span><b dir="ltr" data-o="total">0</b></div>
          <div><span>${t('Loan to value', 'نسبة التمويل إلى القيمة')}</span><b dir="ltr" data-o="ltv">90%</b></div>
          <div><span>${t('Illustrative APR', 'معدل النسبة السنوي (مثال)')}</span><b dir="ltr" data-o="apr">6.43%</b></div>
        </div>
        <div>
          <p class="calc__label" style="margin-bottom:6px">${t('Each year: same instalment, shifting from profit to principal', 'كل سنة: القسط نفسه، ويتحول تدريجيًا من الربح إلى الأصل')}</p>
          <div class="amort" aria-hidden="true"></div>
          <div class="amort__legend"><span><i></i>${t('Principal', 'الأصل')}</span><span><i></i>${t('Profit', 'الربح')}</span></div>
        </div>
        <div class="hero__actions">${btn('apply.html', t('Register your interest', 'سجّل اهتمامك'), { variant: 'white', cls: 'btn--sm' })}</div>
        <p class="calc__note">${t('For illustration only, not an offer. Uses the 6.43% APR from the SAMA disclosure example (Masakin, first home, 25 years, 90% LTV). Pricing and APR can change with factors such as your credit record.', 'للاسترشاد فقط ولا يُعد عرضًا. يعتمد على معدل 6.43% من مثال جدول الإفصاح (مساكن، المسكن الأول، 25 سنة، تمويل 90%). قد تتغير الأسعار ومعدل النسبة السنوي حسب عوامل منها السجل الائتماني.')}</p>
      </div>
    </form>
  </div>
</section>

<section class="sec sec--paper">
  <div class="wrap">
    ${head({ kicker: t('Understand your numbers', 'افهم أرقامك'), title: t('Four terms worth <em class="hl">knowing.</em>', 'أربعة مصطلحات <em class="hl">تستحق المعرفة.</em>') })}
    <div class="grid4">
      ${[
        ['percent', 'APR', t('The annual percentage rate shows the yearly cost of finance, including profit, so you can compare offers fairly.', 'معدل النسبة السنوي يوضح التكلفة السنوية للتمويل بما فيها الربح لتقارن العروض بعدالة.')],
        ['home', t('Loan to value', 'نسبة التمويل إلى القيمة'), t('How much of the property price we finance. 90% means a 10% down payment.', 'نسبة ما نموّله من قيمة العقار؛ 90% تعني دفعة أولى 10%.')],
        ['grace', t('Grace period', 'فترة السماح'), t('Optional, up to 6 months: your first payment starts after you get your home.', 'اختيارية حتى 6 أشهر: يبدأ أول قسط بعد استلامك المنزل.')],
        ['clock', t('Early payment charge', 'رسوم السداد المبكر'), t('If you settle early, the charge is the profit on your next three instalments.', 'عند السداد المبكر تكون الرسوم بمقدار أرباح الأقساط الثلاثة التالية.')],
      ].map(([i, h, p]) => `<article class="card" data-reveal><span class="card__ic">${icon(i)}</span><h3>${h}</h3><p>${p}</p></article>`).join('')}
    </div>
    <p data-reveal style="margin-top:28px"><a class="link" href="financing.html#disclosure">${t('See the full SAMA disclosure table', 'اطّلع على جدول الإفصاح كاملًا')} ${icon('arrow', 'arr')}</a></p>
  </div>
</section>

${ctaBand(t, { title: t('Like the number? Let\'s make it real.', 'أعجبك الرقم؟ لنجعله حقيقة.') })}`;
  return {
    key: 'financing',
    title: t('Home Finance Calculator', 'حاسبة التمويل العقاري'),
    desc: t('Estimate your fixed monthly Murabaha instalment with Dar Al Tamleek. Program rules for down payment, age and term applied automatically.', 'احسب قسطك الشهري الثابت لتمويل المرابحة مع دار التمليك مع تطبيق شروط الدفعة الأولى والعمر والمدة تلقائيًا.'),
    body,
  };
}
