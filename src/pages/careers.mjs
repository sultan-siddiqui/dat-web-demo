import { SITE, icon, btn, head, pageHero, ctaBand } from '../lib.mjs';

export default function (t, L) {
  const perks = [
    ['coins', t('Competitive salaries & remuneration', 'رواتب ومكافآت تنافسية'), t('A well-designed salary structure that rewards performance and skills development, with generous allowances and benefits.', 'هيكل رواتب جيد التصميم يكافئ الأداء وتطوير المهارات، مع بدلات ومزايا سخية.')],
    ['sparkle', t('Advanced training & job security', 'تدريب متقدم وأمان وظيفي'), t('Advanced staff training to build knowledge, skills and competencies for a lasting career.', 'تدريب متقدم للموظفين لاكتساب المعرفة والمهارة والكفاءة لمسيرة مهنية مستقرة.')],
    ['heart', t('Health insurance', 'التأمين الطبي'), t('Bupa medical insurance covering medicine, doctor visits, emergencies, hospital stays and other medical expenses.', 'تأمين طبي من بوبا يغطي الأدوية وزيارات الطبيب والطوارئ والتنويم والمصروفات الطبية الأخرى.')],
    ['award', t('Incentives & bonus', 'الحوافز والمكافآت'), t('Additional pay above the base salary, awarded to encourage future achievements.', 'مبالغ إضافية تزيد على الراتب الأساسي تُمنح لتشجيع الإنجازات المستقبلية.')],
    ['shield', t('Social insurance', 'التأمينات الاجتماعية'), t('Full adherence to the social insurance program mandated by the Government of Saudi Arabia.', 'الالتزام ببرنامج التأمينات الاجتماعية الذي قررته حكومة المملكة.')],
  ];
  const jobs = [
    [t('Home Finance Specialist', 'أخصائي تمويل عقاري'), t('Sales · Customer advisory', 'المبيعات · الاستشارات'), 'home-finance-specialist'],
    [t('Marketing Officer', 'مسؤول التسويق'), t('Marketing · Brand', 'التسويق · العلامة التجارية'), 'marketing-officer'],
    [t('Cybersecurity Threat Intelligence Analyst', 'محلل استخبارات التهديدات السيبرانية'), t('Technology · Saudi nationals only', 'التقنية · للسعوديين فقط'), 'cybersecurity-threat-intelligence-analyst'],
    [t('Other opportunities', 'فرص التوظيف الأخرى'), t('Send us your profile', 'أرسل لنا ملفك'), 'other-positions-opportunities'],
  ];
  const body = `
${pageHero(t, {
  crumbs: [{ label: t('About', 'عن دار التمليك'), href: 'about.html' }, { label: t('Careers', 'الوظائف') }],
  kicker: t('Careers', 'الوظائف'),
  title: t('Help a nation <em class="hl">come home.</em>', 'ساهم في أن يجد الجميع <em class="hl">منزلهم.</em>'),
  lead: t('Join the team that has helped more than 20,000 families own their homes. We invest in our people with training, rewards and the chance to do meaningful work.', 'انضم إلى الفريق الذي ساعد أكثر من 20,000 عائلة على تملّك منازلها. نستثمر في موظفينا بالتدريب والمكافآت وفرصة القيام بعمل ذي معنى.'),
  img: 'team', alt: t('Colleagues talking in a bright office', 'زملاء يتحدثون في مكتب مشرق'),
  actions: btn('#openings', t('See open roles', 'الوظائف المتاحة'), { ic: 'briefcase' }),
})}

<section class="sec sec--paper">
  <div class="wrap">
    ${head({ kicker: t('Why Dar Al Tamleek', 'لماذا دار التمليك'), title: t('Five benefits of <em class="hl">working with us.</em>', 'خمس مزايا <em class="hl">للعمل معنا.</em>') })}
    <div class="princ">${perks.map(([i, h, p]) => `<article class="princ__item" data-reveal><span class="card__ic">${icon(i)}</span><h3>${h}</h3><p>${p}</p></article>`).join('')}</div>
  </div>
</section>

<section class="sec" id="openings">
  <div class="wrap">
    ${head({ kicker: t('Explore opportunities', 'اكتشف فرص العمل'), title: t('Open <em class="hl">roles.</em>', 'الوظائف <em class="hl">المتاحة.</em>'), lead: t('Applications open on our careers portal.', 'يتم التقديم عبر بوابة التوظيف.'), cls: 'shead--split' })}
    <div class="jobs">${jobs.map(([h, s, slug]) => `<a class="job" href="${SITE.legacy}/${L}/about/careers/${slug}" target="_blank" rel="noopener" data-reveal><span><h3>${h}</h3><small>${s}</small></span><span class="job__tag">${t('Full time', 'دوام كامل')}</span><span class="job__go">${icon('arrow', 'arr')}</span></a>`).join('')}</div>
  </div>
</section>

<section class="sec sec--sand">
  <div class="wrap grid2">
    <div class="split-img" data-reveal><div class="arch" style="aspect-ratio:4/4.6"><img src="../assets/img/photo/thobe-street.webp" alt="" loading="lazy" data-parallax=".1"></div></div>
    <div>
      ${head({ kicker: t('Our culture', 'ثقافتنا'), title: t('Responsible. Committed. <em class="hl">Trusted.</em>', 'المسؤولية. الالتزام. <em class="hl">الثقة.</em>'), lead: t('Our five guiding principles shape how we treat customers and each other: responsible, committed, trusted, flexible and specialized.', 'تحدد مبادئنا الخمسة طريقة تعاملنا مع العملاء ومع بعضنا: المسؤولية والالتزام والثقة والمرونة والتخصص.') })}
      <div data-reveal>${btn('about.html', t('About Dar Al Tamleek', 'عن دار التمليك'), { variant: 'ink' })}</div>
    </div>
  </div>
</section>

${ctaBand(t, { title: t('Not seeing your role?', 'لم تجد الوظيفة المناسبة؟'), lead: t('We are always glad to meet talented people who care about home ownership in the Kingdom.', 'يسعدنا دائمًا التعرف على أصحاب المواهب المهتمين بتملّك المساكن في المملكة.'), primary: btn(`${SITE.legacy}/${L}/about/careers/other-positions-opportunities`, t('Share your profile', 'شاركنا ملفك'), { variant: 'white', ext: true }) })}`;
  return { key: 'about', title: t('Careers', 'الوظائف'), desc: t('Careers at Dar Al Tamleek: benefits, culture and open roles in home finance.', 'الوظائف في دار التمليك: المزايا والثقافة والوظائف المتاحة في التمويل السكني.'), body };
}
