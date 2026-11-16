import { SITE, icon, btn, head, pageHero, ctaBand } from '../lib.mjs';
import { BOARD } from './about.mjs';

const R = '/Library/Assets//Gallery/InvestorRelations/';
const REPORTS = [
  ['2026', 'Q3', 'FS-Sept-2026-Dar Al Tamleek.pdf'], ['2026', 'Q2', 'Signed DAT Q2 June 2026 Financial Statements.pdf'], ['2026', 'Q1', 'DAT_Q1_March_2026_FS.pdf'],
  ['2025', 'FY', '2025 Annual report.pdf'], ['2025', 'Q3', 'Signed DAT Q3 Sep 2025 FS.pdf'], ['2025', 'Q2', 'Dar Al Tamleek - FS - Q2 2025.pdf'], ['2025', 'Q1', 'Dar Al Tamleek - FS - Q1 2025.pdf'],
  ['2024', 'FY', 'DAT FS 2024.pdf'], ['2024', 'Q3', 'Dar Al Tamleek - FS - Q3 2024.pdf'], ['2024', 'Q2', 'Dar Al Tamleek - FS - Q2 2024.pdf'], ['2024', 'Q1', 'Dar Al Tamleek - FS - Q1 2024.pdf'],
  ['2023', 'FY', 'DAT - 2023 Annual BoD report and Financial Statement.pdf'], ['2023', 'Q3', 'Dar Al Tamleek - FS - Q3 2023.pdf'], ['2023', 'Q2', 'DAT - FS  -Q2 2023.pdf'], ['2023', 'Q1', 'Dar Al Tamleek - FS - Q1 2023.pdf'],
  ['2022', 'FY', 'DAT 2022.pdf'], ['2022', 'Q3', 'Dar Al Tamleek - FS - Q3 2022.pdf'], ['2022', 'Q2', 'Dar Al Tamleek  - FS  -Q2 2022.pdf'], ['2022', 'Q1', 'DAT - FS  -Q1 2022.pdf'],
  ['2021', 'FY', 'DAT 2021.pdf'], ['2021', 'Q3', 'dat-quarterly-financial-statements-q3.pdf'], ['2021', 'Q2', 'dat-quarterly-financial-statements-q2.pdf'], ['2021', 'Q1', 'q1-fs2021-daraltamleek.pdf'],
  ['2020', 'FY', '2020.pdf'], ['2020', 'Q3', 'q3-2020-dar-al-tamleek-issued.pdf'], ['2020', 'Q2', 'q2-2020-dar-al-tamleek-issued.pdf'], ['2020', 'Q1', 'q1-2020-dar-al-tamleek-issued.pdf'],
  ['2019', 'FY', '2019-دار-التمليك.pdf'], ['2019', 'Q3', 'q3-2019-dar-al-tamleek-issued.pdf'], ['2019', 'Q2', 'q2-2019-dar-al-tamleek-issued.pdf'], ['2019', 'Q1', 'q1-2019-dar-al-tamleek-issued.pdf'],
  ['2018', 'FY', '2018.pdf'], ['2017', 'FY', '2017.pdf'], ['2016', 'FY', '2016.pdf'], ['2015', 'FY', '2015.pdf'],
];

export default function (t) {
  const holders = [
    t('General Organization for Social Insurance (GOSI)', 'المؤسسة العامة للتأمينات الاجتماعية'),
    t('Omran Mohammed Omran & Partners Co. Ltd.', 'شركة عمران محمد العمران وشركاه المحدودة'),
    t('Al Nahlaah for Trading & Consulting Ltd.', 'شركة النهلة للتجارة والاستشارات المحدودة'),
    t('Contracting & Technical & Commercial Services Co. (TASRA)', 'شركة المقاولات والخدمات الفنية والتجارية (تسرا)'),
    t('Nesma Holding Co. Ltd.', 'شركة نسما القابضة المحدودة'),
    t('Al Touq Holdings Company', 'شركة الطوق القابضة'),
    t('Al-Akaria', 'الشركة العقارية السعودية (العقارية)'),
    t('Al Fadl Group Ltd.', 'مجموعة الفضل المحدودة'),
    t('Advanced Real Estate Investment Ltd.', 'شركة العقار المتقدم للاستثمار المحدودة'),
    t('Thimar Development Company Ltd.', 'شركة ثمار للتنمية المحدودة'),
    t('AlYusur Investment Company', 'شركة اليسر للاستثمار'),
    t('Mohammad Abdulaziz AlRajhi & Sons Investment Co.', 'شركة محمد عبدالعزيز الراجحي وأولاده للاستثمار'),
  ];
  const years = [...new Set(REPORTS.map((r) => r[0]))];
  const label = (p) => (p === 'FY' ? t('Annual financial statements', 'القوائم المالية السنوية') : t(`${p} interim statements`, `القوائم الأولية للربع ${{ Q1: 'الأول', Q2: 'الثاني', Q3: 'الثالث' }[p]}`));

  const body = `
${pageHero(t, {
  crumbs: [{ label: t('About', 'عن دار التمليك'), href: 'about.html' }, { label: t('Investor relations', 'علاقات المستثمرين') }],
  kicker: t('Investor relations', 'علاقات المستثمرين'),
  title: t('Built for the <em class="hl">long term.</em>', 'شركة مبنية <em class="hl">للمدى الطويل.</em>'),
  lead: t('Dar Al Tamleek has the honour of a diversified group of prominent institutions as shareholders, ensuring sustainability and growth. Our financial statements are published every quarter.', 'تحظى دار التمليك بمجموعة متنوعة من المؤسسات الرائدة كمساهمين بما يضمن الاستدامة والنمو، وننشر قوائمنا المالية كل ربع سنة.'),
  img: 'riyadh-night', alt: t('Riyadh skyline at night', 'أفق الرياض ليلًا'),
  actions: btn('#reports', t('Financial reports', 'التقارير المالية'), { ic: 'doc' }),
})}

<section class="sec sec--paper">
  <div class="wrap">
    ${head({ kicker: t('Shareholders', 'المساهمون'), title: t('Twelve institutions, <em class="hl">one long view.</em>', 'اثنا عشر مساهمًا <em class="hl">برؤية بعيدة المدى.</em>') })}
    <ul class="holders">${holders.map((h, i) => `<li class="holder" data-reveal><i>${String(i + 1).padStart(2, '0')}</i>${h}</li>`).join('')}</ul>
  </div>
</section>

<section class="sec" id="reports">
  <div class="wrap">
    ${head({ kicker: t('Financial reports', 'التقارير المالية'), title: t('Every statement, <em class="hl">since 2015.</em>', 'كل القوائم المالية <em class="hl">منذ 2015.</em>'), lead: t('Choose a year. Reports open as PDF files on the Dar Al Tamleek document library.', 'اختر السنة، وتُفتح التقارير بصيغة PDF من مكتبة مستندات دار التمليك.'), cls: 'shead--split' })}
    <div data-filter=".report[data-k]">
      <div class="reports__years" role="group" aria-label="${t('Filter by year', 'تصفية حسب السنة')}">
        <button type="button" data-f="all" aria-pressed="false">${t('All', 'الكل')}</button>
        ${years.map((y, i) => `<button type="button" data-f="${y}" aria-pressed="${i === 0}">${y}</button>`).join('')}
      </div>
    </div>
    <div class="reports">
      ${REPORTS.map(([y, p, f]) => `<a class="report ${y === years[0] ? '' : 'is-hidden'}" data-k="${y}" href="${encodeURI(SITE.legacy + R + f)}" target="_blank" rel="noopener"><span class="report__top">${icon('doc')}<span class="report__dl">${icon('download')}</span></span><span><b dir="ltr">${p === 'FY' ? y : `${p} ${y}`}</b><small>${label(p)}</small></span></a>`).join('')}
    </div>
  </div>
</section>

<section class="sec sec--sand">
  <div class="wrap grid2">
    <div>
      ${head({ kicker: t('Governance', 'الحوكمة'), title: t('A board of <em class="hl">nine.</em>', 'مجلس من <em class="hl">تسعة أعضاء.</em>'), lead: t('Our Board sets strategic direction, oversees performance and ensures adherence to the highest standards of governance and transparency.', 'يرسم المجلس التوجهات الاستراتيجية ويراقب الأداء ويضمن الالتزام بأعلى معايير الحوكمة والشفافية.') })}
      <div class="hero__actions" data-reveal>${btn('about.html#board', t('Meet the board', 'تعرّف على المجلس'), { variant: 'ink', ic: 'users' })}${btn(`${SITE.legacy}/en/bod-elections`, t('BOD elections', 'انتخابات المجلس'), { variant: 'line', ext: true })}</div>
    </div>
    <ul class="checks" data-reveal>${BOARD(t).slice(0, 3).map(([n, r]) => `<li>${icon('check')}<span><b>${n}</b><br><small class="muted">${r}</small></span></li>`).join('')}<li>${icon('plus')}<span class="muted">${t('and six further board members', 'وستة أعضاء آخرين')}</span></li></ul>
  </div>
</section>

${ctaBand(t, { title: t('Questions from investors?', 'لديك استفسار بصفتك مستثمرًا؟'), lead: t('Our team is available Sunday to Thursday. Reach us through the general inquiry form or call the corporate office in Jeddah on 012 606 5607.', 'فريقنا متاح من الأحد إلى الخميس. تواصل معنا عبر نموذج الاستفسار العام أو اتصل بالمكتب الرئيسي في جدة على 012 606 5607.'), primary: btn('contact.html#inquiry', t('General inquiry', 'استفسار عام'), { variant: 'white' }) })}`;
  return {
    key: 'about',
    title: t('Investor Relations', 'علاقات المستثمرين'),
    desc: t('Dar Al Tamleek shareholders and quarterly and annual financial statements since 2015.', 'مساهمو دار التمليك والقوائم المالية الربعية والسنوية منذ 2015.'),
    body,
  };
}
