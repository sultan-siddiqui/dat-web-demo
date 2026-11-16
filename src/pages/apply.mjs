import { SITE, icon, btn, sbtn, eyebrow, mark } from '../lib.mjs';

export default function (t, L) {
  const f = (id, label, input, err = '', cls = '') => `<div class="field ${cls}"><label for="ap-${id}">${label}</label>${input}${err ? `<span class="field__err">${err}</span>` : ''}</div>`;
  const req = ' <i>*</i>';
  const opts = (arr) => arr.map(([v, l]) => `<option value="${v}">${l}</option>`).join('');
  const pills = (name, arr, r) => `<div class="pills" role="radiogroup">${arr.map(([v, l], i) => `<label><input type="radio" name="${name}" value="${v}" ${i === 0 ? 'required' : ''} data-r="${r}"><span>${l}</span></label>`).join('')}</div>`;

  const steps = [t('About you', 'بياناتك'), t('Work & income', 'العمل والدخل'), t('The home', 'العقار'), t('Review', 'المراجعة')];

  const body = `
<section class="phero" style="padding-bottom:clamp(40px,5vw,72px)">
  <div class="phero__pattern" aria-hidden="true"></div>
  <div class="wrap" style="display:grid;gap:22px">
    <nav class="crumbs" aria-label="${t('Breadcrumb', 'مسار التنقل')}"><a href="index.html">${t('Home', 'الرئيسية')}</a><span>/</span><span aria-current="page">${t('Register your interest', 'سجّل اهتمامك')}</span></nav>
    ${eyebrow(t('Register your interest', 'سجّل اهتمامك'))}
    <h1 class="phero__title" data-split style="max-width:980px">${t('Two minutes now. <em class="hl">Your keys, sooner.</em>', 'دقيقتان الآن. <em class="hl">ومفاتيحك أقرب.</em>')}</h1>
    <p class="phero__lead" data-reveal>${t('Dar Al Tamleek offers tailored real estate financing through the Murabaha Mortgage Program, designed to help citizens and residents achieve their dream of home ownership. Tell us about yourself and a specialist will contact you.', 'تقدم دار التمليك حلول تمويل عقاري مصممة عبر برنامج المرابحة لمساعدة المواطنين والمقيمين على تحقيق حلم التملّك. أخبرنا عنك وسيتواصل معك أحد الأخصائيين.')}</p>
  </div>
</section>

<section class="sec" style="padding-top:0">
  <div class="wrap wiz" data-wizard>
    <aside class="wiz__side">
      <ol class="wiz__steps">${steps.map((s, i) => `<li class="${i === 0 ? 'is-on' : ''}"><i>${i + 1}</i><span>${s}</span></li>`).join('')}</ol>
      <div class="wiz__bar"><i></i></div>
      <div class="card card--ink" style="padding:24px">
        <span class="card__ic">${icon('phone')}</span>
        <h3>${t('Prefer to talk?', 'تفضّل الاتصال؟')}</h3>
        <p>${t('Call us toll-free, Sunday to Thursday.', 'اتصل بنا مجانًا من الأحد إلى الخميس.')}</p>
        <a class="link" href="${SITE.phoneHref}" style="color:#fff" dir="ltr">${SITE.phone}</a>
      </div>
      <p class="demo-note">${icon('lock')}<span>${t('Already a customer? ', 'عميل حالي؟ ')}<a class="link" href="${SITE.login}" target="_blank" rel="noopener">${t('Log in to your account', 'سجّل الدخول إلى حسابك')}</a></span></p>
    </aside>

    <form class="formcard formcard--white form" data-demo novalidate>
      <div class="wiz__pane is-on">
        <h2>${t('Tell us about you', 'أخبرنا عنك')}</h2>
        <div class="form__row">
          ${f('fn', t('First name', 'الاسم الأول') + req, `<input id="ap-fn" name="first" required autocomplete="given-name" placeholder="${t('e.g. Mohammed', 'مثال: محمد')}" data-r="${t('First name', 'الاسم الأول')}">`, t('Please enter your first name', 'يرجى إدخال الاسم الأول'))}
          ${f('ln', t('Last name', 'اسم العائلة') + req, `<input id="ap-ln" name="last" required autocomplete="family-name" placeholder="${t('e.g. Ibrahim', 'مثال: إبراهيم')}" data-r="${t('Last name', 'اسم العائلة')}">`, t('Please enter your last name', 'يرجى إدخال اسم العائلة'))}
        </div>
        <div class="form__row">
          ${f('nat', t('Nationality', 'الجنسية') + req, `<select id="ap-nat" name="nationality" required data-r="${t('Nationality', 'الجنسية')}"><option value="">${t('Select', 'اختر')}</option>${opts([['sa', t('Saudi Arabia', 'المملكة العربية السعودية')], ['res', t('Resident (non-Saudi)', 'مقيم (غير سعودي)')]])}</select>`, t('Please choose', 'يرجى الاختيار'))}
          ${f('age', t('Age', 'العمر') + req, `<input id="ap-age" name="age" type="number" inputmode="numeric" min="21" max="65" required placeholder="21–65" dir="ltr" data-r="${t('Age', 'العمر')}">`, t('Age should be between 21 and 65', 'يجب أن يكون العمر بين 21 و65'))}
        </div>
        <div class="form__row">
          ${f('mob', t('Mobile number', 'رقم الجوال') + req, `<div class="field__pre"><span dir="ltr">+966</span><input id="ap-mob" name="mobile" required inputmode="numeric" pattern="5[0-9]{8}" placeholder="5XXXXXXXX" dir="ltr" autocomplete="tel-national" data-r="${t('Mobile', 'الجوال')}"></div>`, t('Use 9 digits starting with 5', 'أدخل 9 أرقام تبدأ بـ 5'))}
          ${f('em', t('Email', 'البريد الإلكتروني') + req, `<input id="ap-em" name="email" type="email" required dir="ltr" autocomplete="email" placeholder="name@example.com" data-r="${t('Email', 'البريد الإلكتروني')}">`, t('Please enter a valid email', 'يرجى إدخال بريد صحيح'))}
        </div>
        <div class="wiz__nav"><span></span>${sbtn(t('Continue', 'متابعة'), { type: 'button', attrs: 'data-next' })}</div>
      </div>

      <div class="wiz__pane">
        <h2>${t('Your work and income', 'عملك ودخلك')}</h2>
        ${f('sec', t('Sector', 'القطاع') + req, `<select id="ap-sec" name="sector" required data-r="${t('Sector', 'القطاع')}"><option value="">${t('Select', 'اختر')}</option>${opts([['gov', t('Government sector', 'القطاع الحكومي')], ['semi', t('Semi-government sector', 'القطاع شبه الحكومي')], ['mil', t('Military sector', 'القطاع العسكري')], ['pri', t('Private sector', 'القطاع الخاص')], ['ret', t('Retired', 'متقاعد')], ['self', t('Self-employed', 'عمل حر')]])}</select>`, t('Please choose your sector', 'يرجى اختيار القطاع'))}
        ${f('sal', t('Monthly salary (SAR)', 'الراتب الشهري (ريال)') + req, `<input id="ap-sal" name="salary" type="number" inputmode="numeric" min="4000" required placeholder="${t('Minimum 4,000', 'الحد الأدنى 4,000')}" dir="ltr" data-r="${t('Monthly salary', 'الراتب الشهري')}">`, t('Minimum 4,000 SAR', 'الحد الأدنى 4,000 ريال'))}
        <div class="field"><span class="lbl">${t('Are you a REDF or Sakani beneficiary?', 'هل أنت مستفيد من الصندوق العقاري أو سكني؟')}${req}</span>${pills('redf', [['yes', t('Yes', 'نعم')], ['no', t('No', 'لا')]], t('REDF / Sakani', 'الصندوق / سكني'))}<span class="field__err">${t('Please choose', 'يرجى الاختيار')}</span></div>
        <div class="wiz__nav">${sbtn(t('Back', 'رجوع'), { type: 'button', variant: 'line', attrs: 'data-prev', ic: 'arrow', cls: 'btn--back' })}${sbtn(t('Continue', 'متابعة'), { type: 'button', attrs: 'data-next' })}</div>
      </div>

      <div class="wiz__pane">
        <h2>${t('The home you have in mind', 'العقار الذي تفكر فيه')}</h2>
        ${f('pr', t('Which product are you interested in?', 'ما المنتج الذي يهمك؟') + req, `<select id="ap-pr" name="product" required data-r="${t('Product', 'المنتج')}"><option value="">${t('Select', 'اختر')}</option>${opts([['ready', t('Residential ready units', 'وحدات سكنية جاهزة')], ['building', t('Building (residential / commercial)', 'مبنى (سكني / تجاري)')], ['land', t('Land', 'أرض')], ['equity', t('Equity release for cash', 'تسييل العقار للحصول على نقد')]])}</select>`, t('Please choose a product', 'يرجى اختيار المنتج'))}
        <div class="form__row">
          ${f('rg', t('Region', 'المنطقة') + req, `<select id="ap-rg" name="region" required data-r="${t('Region', 'المنطقة')}"><option value="">${t('Select', 'اختر')}</option>${opts([['riyadh', t('Riyadh', 'الرياض')], ['makkah', t('Makkah', 'مكة المكرمة')], ['madinah', t('Madinah', 'المدينة المنورة')], ['qassim', t('Qassim', 'القصيم')], ['eastern', t('Eastern Province', 'المنطقة الشرقية')], ['tabuk', t('Tabuk', 'تبوك')], ['aseer', t('Aseer', 'عسير')], ['hail', t('Hail', 'حائل')], ['baha', t('Al Baha', 'الباحة')]])}</select>`, t('Please choose a region', 'يرجى اختيار المنطقة'))}
          ${f('ct', t('City', 'المدينة') + req, `<select id="ap-ct" name="city" required data-r="${t('City', 'المدينة')}"><option value="">${t('Select region first', 'اختر المنطقة أولًا')}</option></select>`, t('Please choose a city', 'يرجى اختيار المدينة'))}
        </div>
        <div class="field"><span class="lbl">${t('Where did you hear about us?', 'أين سمعت عنا؟')}${req}</span>${pills('source', [['social', t('Social media', 'وسائل التواصل')], ['search', t('Search', 'محركات البحث')], ['friend', t('Friend or developer', 'صديق أو مطور')], ['shows', t('Shows', 'المعارض')]], t('Heard via', 'مصدر المعرفة'))}<span class="field__err">${t('Please choose', 'يرجى الاختيار')}</span></div>
        <div class="wiz__nav">${sbtn(t('Back', 'رجوع'), { type: 'button', variant: 'line', attrs: 'data-prev', cls: 'btn--back' })}${sbtn(t('Review', 'مراجعة'), { type: 'button', attrs: 'data-next' })}</div>
      </div>

      <div class="wiz__pane">
        <h2>${t('Check and submit', 'راجع وأرسل')}</h2>
        <div class="review"></div>
        <label class="check"><input type="checkbox" name="consent" required><span>${t('I agree to the <a href="https://www.daraltamleek.com/en/terms-and-conditions" target="_blank" rel="noopener">terms and conditions</a> and the <a href="https://www.daraltamleek.com/en/privacy-policy" target="_blank" rel="noopener">personal data privacy policy</a>.', 'أوافق على <a href="https://www.daraltamleek.com/ar/terms-and-conditions" target="_blank" rel="noopener">الشروط والأحكام</a> و<a href="https://www.daraltamleek.com/ar/privacy-policy" target="_blank" rel="noopener">سياسة خصوصية البيانات الشخصية</a>.')}</span></label>
        <div class="wiz__nav">${sbtn(t('Back', 'رجوع'), { type: 'button', variant: 'line', attrs: 'data-prev', cls: 'btn--back' })}${sbtn(t('Submit to be contacted', 'أرسل ليتم التواصل معك'))}</div>
        <p class="demo-note">${icon('lock')}<span>${t('Prototype form: nothing is sent. At launch it posts to the existing registration endpoint.', 'نموذج تجريبي: لا يتم إرسال أي بيانات، ويُربط بنظام التسجيل الحالي عند الإطلاق.')}</span></p>
      </div>

      <div class="form__ok" role="status">
        ${mark({ draw: true })}
        <h3>${t('Thank you for registering.', 'شكرًا لتسجيلك.')}</h3>
        <p class="muted">${t('Your request has been received. A home finance specialist will contact you as soon as possible.', 'تم استلام طلبك بنجاح، وسيتواصل معك أخصائي تمويل عقاري في أقرب وقت ممكن.')}</p>
        <div class="hero__actions" style="justify-content:center">${btn('calculator.html', t('Try the calculator', 'جرّب الحاسبة'), { variant: 'line', ic: 'calc' })}${btn('index.html', t('Back to home', 'العودة للرئيسية'), { variant: 'ink' })}</div>
      </div>
    </form>
  </div>
</section>`;
  return { key: 'financing', title: t('Register Your Interest', 'سجّل اهتمامك'), desc: t('Register your interest in Shariah-compliant Murabaha home finance with Dar Al Tamleek. A specialist will contact you.', 'سجّل اهتمامك ببرنامج التمويل العقاري بصيغة المرابحة مع دار التمليك وسيتواصل معك أحد الأخصائيين.'), body, bodyCls: 'no-cta' };
}
