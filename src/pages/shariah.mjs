import { SITE, icon, btn, head, pageHero, ctaBand } from '../lib.mjs';

export default function (t) {
  const types = [
    [t('Murabaha', 'المرابحة'), t('The financier buys the property and immediately sells it to you at a disclosed profit. You pay fixed monthly instalments with no interest.', 'يشتري الممول العقار ثم يبيعه لك فورًا بربح معلوم، وتسدد أقساطًا شهرية ثابتة دون فوائد.'), true],
    [t('Ijara', 'الإجارة'), t('The financier buys the property and leases it to you, transferring ownership when the term ends.', 'يشتري الممول العقار ويؤجره لك، وتنتقل الملكية إليك بنهاية المدة.')],
    [t('Musharaka', 'المشاركة'), t('You and the financier buy together, and you gradually buy out its share.', 'تشتري العقار مع الممول ثم تشتري حصته تدريجيًا.')],
    [t('Mudarabah', 'المضاربة'), t('A partnership: one partner provides capital, the other manages the investment.', 'شراكة يقدم فيها أحد الطرفين رأس المال ويدير الآخر الاستثمار.')],
    [t('Wakala', 'الوكالة'), t('The financier acts as your agent, investing your money in Shariah-compliant trade for a target profit.', 'يعمل الممول وكيلًا عنك لاستثمار أموالك في تجارة متوافقة مع الشريعة لتحقيق ربح مستهدف.')],
  ];
  const scholars = [
    [t('Sheikh Dr. Abdullah bin Mohammed Al-Mutlaq', 'الشيخ د. عبدالله بن محمد المطلق'), t('Holds a PhD from Imam Mohammed bin Saud University and is a member of the Council of Senior Scholars and the Ifta Committee. He has sat on the Shariah boards of several Saudi banks, including Saudi American Bank, Riyad Bank and Bank AlJazira, has compiled a number of fatwas and has written books on Islamic contract law.', 'حاصل على الدكتوراه من جامعة الإمام محمد بن سعود الإسلامية، وعضو هيئة كبار العلماء واللجنة الدائمة للإفتاء. شارك في الهيئات الشرعية لعدد من البنوك السعودية منها سامبا وبنك الرياض وبنك الجزيرة، وله عدد من الفتاوى والمؤلفات في فقه العقود.'), t('AM', 'عم')],
    [t('Sheikh Dr. Bilgassem bin Thaker Al-Zubaidi', 'الشيخ د. بلقاسم بن ذاكر الزبيدي'), t('Holds a PhD in Shariah (Usul al-Fiqh) from Umm Al-Qura University with excellent grade and honours, with a recommendation to print and circulate his thesis among universities. He also earned his master\'s in Usul al-Fiqh and a bachelor\'s in Judicial Affairs from Umm Al-Qura, both with excellent grades and honours.', 'حاصل على الدكتوراه في الشريعة (أصول الفقه) من جامعة أم القرى بتقدير ممتاز مع مرتبة الشرف والتوصية بطباعة الرسالة وتداولها بين الجامعات، وعلى الماجستير في أصول الفقه والبكالوريوس في الأنظمة القضائية من الجامعة نفسها بتقدير ممتاز مع مرتبة الشرف.'), t('BZ', 'بز')],
    [t('Dr. Mohammed Ali Elgari', 'د. محمد علي القري'), t('Associate Professor of Islamic Economics at King Abdulaziz University and former director of its Islamic Economics Research Center. An expert at the International Islamic Fiqh Academy, member of the AAOIFI Shariah Board and of several journal editorial boards. He serves on Shariah boards across Saudi Arabia, the Gulf, Europe and the US, has received the Islamic Development Bank Award (2004), and holds a PhD from the University of California.', 'أستاذ مشارك في الاقتصاد الإسلامي بجامعة الملك عبدالعزيز والمدير السابق لمركز أبحاث الاقتصاد الإسلامي، وخبير في مجمع الفقه الإسلامي الدولي وعضو المجلس الشرعي لهيئة المحاسبة والمراجعة (أيوفي). يشارك في الهيئات الشرعية لمؤسسات في المملكة والخليج وأوروبا والولايات المتحدة، وحاصل على جائزة البنك الإسلامي للتنمية (2004)، والدكتوراه من جامعة كاليفورنيا.'), t('ME', 'مق')],
  ];

  const body = `
${pageHero(t, {
  crumbs: [{ label: t('About', 'عن دار التمليك'), href: 'about.html' }, { label: t('Shariah compliance', 'التوافق مع الشريعة') }],
  kicker: t('Shariah compliance', 'التوافق مع أحكام الشريعة'),
  title: t('Halal by design, <em class="hl">reviewed by scholars.</em>', 'حلال في التصميم، <em class="hl">ومُراجع من العلماء.</em>'),
  lead: t('Our Shariah Board is the authoritative body for determining Shariah compliance. Every program and every enhancement is reviewed with the same stringent guidelines, for consistency and consumer confidence.', 'الهيئة الشرعية في دار التمليك هي المرجعية المعتمدة لتحديد التوافق مع أحكام الشريعة، وتُراجع كل برنامج وكل تحسين وفق الضوابط الصارمة نفسها لضمان الاتساق وثقة العملاء.'),
  chips: [t('3 scholars', '3 علماء'), t('Meets 4 times a year', 'تجتمع 4 مرات سنويًا'), t('No riba', 'بلا ربا')],
  img: 'arches', alt: t('White arches against a golden geometric screen', 'أقواس بيضاء أمام نقوش هندسية ذهبية'),
})}

<section class="sec sec--paper">
  <div class="wrap">
    ${head({ kicker: t('Our process', 'منهجيتنا'), title: t('Compliance that is <em class="hl">never a one-off.</em>', 'التزام <em class="hl">مستمر لا يتوقف.</em>') })}
    <div class="grid3">
      ${[
        ['calendar', t('Periodical', 'دوري'), t('The committee meets four times a year to review all policies, procedures, contracts and products.', 'تجتمع الهيئة أربع مرات سنويًا لمراجعة جميع السياسات والإجراءات والعقود والمنتجات.')],
        ['refresh', t('Up to date', 'محدَّث'), t('Each program or enhancement is reviewed with the same stringent guidelines.', 'يُراجع كل برنامج أو تحسين وفق الضوابط الصارمة نفسها.')],
        ['users', t('Three members', 'ثلاثة أعضاء'), t('Reputable scholars with extensive experience in Islamic finance ensure laws and policies stay current.', 'علماء معروفون بخبرة واسعة في التمويل الإسلامي يضمنون تحديث الأنظمة والسياسات.')],
      ].map(([i, h, p], k) => `<article class="card" data-reveal><span class="card__n">0${k + 1}</span><span class="card__ic">${icon(i)}</span><h3>${h}</h3><p>${p}</p></article>`).join('')}
    </div>
  </div>
</section>

<section class="sec" id="murabaha-vs-ijarah">
  <div class="wrap">
    ${head({ kicker: t('Islamic finance, how it works', 'التمويل الإسلامي، كيف يعمل'), title: t('Murabaha vs. Ijarah, <em class="hl">side by side.</em>', 'المرابحة والإجارة <em class="hl">جنبًا إلى جنب.</em>'), lead: t('The main difference: with Murabaha the property is registered in your name immediately. With Ijarah you rent it from the financier until the purchase price is repaid in full.', 'الفرق الرئيسي: في المرابحة يُسجَّل العقار باسمك فورًا، أما في الإجارة فتستأجره من الممول حتى سداد ثمنه كاملًا.') })}
    <div class="vs">
      <article class="vs__card vs__card--on" data-reveal>
        <span class="vs__tag">${icon('check')}${t('Our program', 'برنامجنا')}</span>
        <h3>${t('Murabaha', 'المرابحة')}</h3>
        <p>${t('A purchase contract with a fixed profit rate that will not change over the life of the contract.', 'عقد شراء بهامش ربح ثابت لا يتغير طوال مدة العقد.')}</p>
        <ul>${[t('Deed in your name from day one', 'الصك باسمك من اليوم الأول'), t('Fixed profit rate and instalment', 'هامش ربح وقسط ثابتان'), t('Both parties know the original purchase price', 'يعلم الطرفان سعر الشراء الأصلي'), t('Profit is known and agreed upon', 'الربح معلوم ومتفق عليه')].map((x) => `<li>${icon('check')}${x}</li>`).join('')}</ul>
      </article>
      <article class="vs__card" data-reveal>
        <span class="vs__tag" style="background:var(--sand);color:var(--ink)">${t('Alternative', 'البديل')}</span>
        <h3>${t('Ijarah', 'الإجارة')}</h3>
        <p>${t('A lease contract with a profit rate that can change. Ownership transfers at the end of the term.', 'عقد تأجير بهامش ربح قد يتغير، وتنتقل الملكية في نهاية المدة.')}</p>
        <ul>${[t('You rent the property during the term', 'تستأجر العقار خلال المدة'), t('Rate can be variable', 'هامش الربح قد يكون متغيرًا'), t('Ownership transfers once fully repaid', 'تنتقل الملكية بعد السداد الكامل'), t('Two contracts: lease with promise of ownership', 'عقدان: إجارة مع الوعد بالتمليك')].map((x) => `<li>${icon('check')}${x}</li>`).join('')}</ul>
      </article>
    </div>
    <div class="tbl-wrap" data-reveal style="margin-top:16px">
      <table class="tbl tbl--compare">
        <caption class="vh">${t('Shariah-compliant contract', 'العقد المتوافق مع الشريعة')}</caption>
        <thead><tr><th>${t('Shariah-compliant contract', 'العقد المتوافق مع الشريعة')}</th><th>${t('Details', 'التفاصيل')}</th></tr></thead>
        <tbody>
          <tr><td>${t('Parties in contract', 'أطراف العقد')}</td><td>${t('Three parties: Dar Al Tamleek, the seller of the property, and the owner', 'ثلاثة أطراف: دار التمليك وبائع العقار والمالك')}</td></tr>
          <tr><td>${t('Property type', 'نوع العقار')}</td><td>${t('Apartment, land or house', 'شقة أو أرض أو منزل')}</td></tr>
          <tr><td>${t('Considerations', 'الاعتبارات')}</td><td>${t('Both parties are aware of the original purchase price, and the profit is known and agreed upon', 'يعلم الطرفان سعر الشراء الأصلي، والربح معلوم ومتفق عليه')}</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="sec sec--sand pattern-bg">
  <div class="wrap">
    ${head({ kicker: t('Types of Islamic home finance', 'أنواع التمويل السكني الإسلامي'), title: t('Five structures. <em class="hl">One principle.</em>', 'خمس صيغ. <em class="hl">ومبدأ واحد.</em>'), lead: t('All avoid interest by tying finance to a real asset or a real partnership.', 'جميعها تتجنب الفائدة بربط التمويل بأصل حقيقي أو شراكة حقيقية.') })}
    <div class="types">${types.map(([h, p, on]) => `<article class="type ${on ? 'type--on' : ''}" data-reveal>${on ? `<span class="type__badge">${t('What we offer', 'ما نقدمه')}</span>` : ''}<b>${h}</b><p>${p}</p></article>`).join('')}</div>
    <div class="riba" data-reveal style="margin-top:16px">
      <span class="riba__x">${icon('close')}</span>
      <div><h3 class="d3" style="margin-bottom:10px">${t('Forbidden home loans', 'التمويل السكني المحرم')}</h3><p>${t('Loans that involve interest (riba) are not permissible except in cases of urgent necessity, and buying a house does not reach that level because the need can be met by renting. You can rest assured that Dar Al Tamleek does not offer any riba-based loans.', 'القروض التي تتضمن فائدة (ربا) غير جائزة إلا في حالات الضرورة القصوى، وشراء المنزل لا يبلغ هذه الدرجة لإمكانية الاستئجار. ويمكنك الاطمئنان إلى أن دار التمليك لا تقدم أي تمويل قائم على الربا.')}</p></div>
    </div>
  </div>
</section>

<section class="sec sec--paper" id="board">
  <div class="wrap">
    ${head({ kicker: t('Shariah Board members', 'أعضاء الهيئة الشرعية'), title: t('Represented by <em class="hl">reputable scholars.</em>', 'يمثلها <em class="hl">علماء معروفون.</em>'), lead: t('Our Shariah Board members bring extensive experience in Islamic finance.', 'يتمتع أعضاء الهيئة الشرعية بخبرة واسعة في التمويل الإسلامي.') })}
    <div style="display:grid;gap:16px">${scholars.map(([n, b, mono]) => `<article class="scholar" data-reveal><span class="person__mono" aria-hidden="true" >${mono}</span><div><h3>${n}</h3><p>${b}</p></div></article>`).join('')}</div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    ${head({ kicker: t('Fatwas', 'الفتاوى'), title: t('Read the rulings <em class="hl">yourself.</em>', 'اطّلع على الفتاوى <em class="hl">بنفسك.</em>') })}
    <div class="grid3">
      ${[
        [t('Masakin Murabaha', 'مرابحة مساكن'), t('Approval of the Murabaha home finance product', 'إجازة منتج التمويل العقاري بصيغة المرابحة'), `${SITE.legacy}/Library/Assets//Gallery/ShariahCompliance/إجازة منتج التمويل العقاري بصيغة المرابحة - دار التلميك.pdf`],
        [t('Ijarah', 'الإجارة'), t('Ijarah fatwa', 'فتوى الإجارة'), `${SITE.legacy}/Library/Assets//Gallery/ShariahCompliance/ijarah_fatwa.pdf`],
        [t('Forward Ijarah', 'الإجارة الموصوفة في الذمة'), t('Forward Ijarah fatwa', 'فتوى الإجارة الموصوفة في الذمة'), `${SITE.legacy}/Library/Assets//Gallery/ShariahCompliance/23154.jpg`],
      ].map(([h, p, u]) => `<a class="report" href="${encodeURI(u)}" target="_blank" rel="noopener" data-reveal><span class="report__top">${icon('doc')}<span class="report__dl">${icon('download')}</span></span><span><b style="font-size:22px">${h}</b><small>${p}</small></span></a>`).join('')}
    </div>
  </div>
</section>

${ctaBand(t, { title: t('Finance your home with peace of mind.', 'موّل منزلك وأنت مطمئن.') })}`;
  return {
    key: 'about',
    title: t('Shariah Compliance', 'التوافق مع أحكام الشريعة'),
    desc: t('How Dar Al Tamleek keeps home finance Shariah compliant: our Shariah Board, Murabaha vs Ijarah, types of Islamic home finance and our fatwas.', 'كيف تضمن دار التمليك توافق التمويل مع أحكام الشريعة: الهيئة الشرعية والمرابحة والإجارة وأنواع التمويل الإسلامي والفتاوى.'),
    body,
  };
}
