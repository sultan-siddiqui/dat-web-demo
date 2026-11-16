import { SITE, icon, head, pageHero, ctaBand } from '../lib.mjs';

export default function (t, L) {
  const M = `${SITE.legacy}/en/about/media-coverage/`;
  const cats = { p: t('Partnership', 'شراكة'), a: t('Award', 'جائزة'), c: t('Community', 'مجتمع'), i: t('Industry', 'القطاع'), f: t('Feature', 'تقرير') };
  const items = [
    ['12', t('Oct 2021', 'أكتوبر 2021'), 'p', t('Dar Al Tamleek signs a partnership agreement with ROSHN', 'دار التمليك توقع اتفاقية شراكة مع روشن'), 'dar-al-tamleek-signs-a-partnership-agreement-with-roshn'],
    ['05', t('Sep 2021', 'سبتمبر 2021'), 'i', t('SRC reaches SAR 2 billion refinancing agreement with GOSI and Dar Al Tamleek', 'الشركة السعودية لإعادة التمويل تبرم اتفاقية إعادة تمويل بملياري ريال مع التأمينات ودار التمليك'), 'src-reaches-sar-2-billion-refinancing-agreement-with-gosi-and-dat'],
    ['15', t('Aug 2021', 'أغسطس 2021'), 'a', t('The Best Home Finance Company in the Kingdom for Q2 2021', 'أفضل شركة تمويل عقاري في المملكة - ملتقى سكني للربع الثاني 2021'), 'the-best-home-finance-company-in-the-kingdom-for-q2-2021'],
    ['12', t('Jul 2021', 'يوليو 2021'), 'p', t('Dar Al Tamleek signs a partnership agreement with Hajjaj & Partners Co.', 'دار التمليك توقع اتفاقية شراكة مع شركة حجاج وشركاه'), 'dar-al-tamleek-signs-a-partnership-agreement-with-hajjaj-amp-partners-company'],
    ['15', t('Apr 2021', 'أبريل 2021'), 'a', t('The Best Home Finance Company in the Kingdom for Q1 2021', 'أفضل شركة تمويل عقاري في المملكة - ملتقى سكني للربع الأول 2021'), 'the-best-home-finance-company-in-the-kingdom-for-q1-2021'],
    ['09', t('Nov 2020', 'نوفمبر 2020'), 'f', t('Dar Al Tamleek: the pioneer of real estate financing solutions in the Kingdom', 'دار التمليك.. رائدة حلول التمويل العقاري في المملكة'), 'dar-al-tamleek-the-pioneer-of-real-estate-financing-solutions-in-the-kingdom'],
    ['19', t('Jul 2020', 'يوليو 2020'), 'i', t('SRC and the Public Pension Agency sign a SAR 3 billion portfolio acquisition agreement', '"التقاعد" و"إعادة التمويل" يوقعان اتفاقية لشراء محفظة عقارية بقيمة 3 مليارات ريال'), 'src-and-public-pension-agency-sign-sar-3-billion-portfolio-acquisition-agreement-to-provide-liquidity-to-real-estate-financing-market'],
    ['31', t('May 2020', 'مايو 2020'), 'c', t('Supplying food baskets during Ramadan 2020', 'مساهمة دار التمليك في جمعية إطعام خلال رمضان 2020'), 'dar-altamleek-company-contributed-to-supplying-food-baskets-during-the-month-of-ramadan-2020'],
    ['23', t('May 2020', 'مايو 2020'), 'c', t('Contribution to the Health Endowment Fund initiative to tackle COVID-19', 'المساهمة في مبادرة صندوق الوقف الصحي لمواجهة كوفيد-19'), 'dar-altamleek-company-contributed-to-the-health-endowment-fund-initiative-to-tackle-covid-19'],
    ['29', t('May 2019', 'مايو 2019'), 'c', t('Dar Al Tamleek contributes to the Jood Eskan platform', 'دار التمليك تقدم مساهمة بقيمة مليون ريال للأسر الأشد حاجة في منصة جود الإسكان'), 'dar-altamleek-contributes-in-jood-eskan-platfoarm'],
    ['05', t('May 2019', 'مايو 2019'), 'a', t('PPA congratulates partner Dar Al Tamleek on the Best Home Finance Award 2019', 'المؤسسة العامة للتقاعد تهنئ شريكها دار التمليك بجائزة أفضل ممول عقاري 2019'), 'ppa-congratulates-partner--dar-tamleeke-for-the-best-home-finance-award-for-2019'],
    ['27', t('Dec 2021', 'ديسمبر 2021'), 'a', t('Best Home Finance Program for 2018 at RESTATEX Riyadh Real Estate Exhibition', 'جائزة أفضل برنامج تمويل عقاري للأفراد لعام 2018 في معرض ريستاتكس الرياض'), 'dar-al-tamleek-was-awarded-the-best-home-finance-program-for-2018-at-restatex-riyadh-real-estate-exhibition'],
  ];
  const href = (slug) => (L === 'ar' ? `${SITE.legacy}/ar/about/media-coverage-old` : M + slug);

  const body = `
${pageHero(t, {
  crumbs: [{ label: t('About', 'عن دار التمليك'), href: 'about.html' }, { label: t('Media coverage', 'التغطية الإعلامية') }],
  kicker: t('Media coverage', 'التغطية الإعلامية'),
  title: t('News from the <em class="hl">home-finance specialists.</em>', 'أخبار <em class="hl">أخصائيي التمويل السكني.</em>'),
  lead: t('Partnerships, awards and community initiatives from Dar Al Tamleek.', 'الشراكات والجوائز والمبادرات المجتمعية من دار التمليك.'),
  img: 'jeddah-corniche', alt: t('The Jeddah corniche and floating mosque', 'كورنيش جدة والمسجد العائم'),
})}

<section class="sec sec--paper">
  <div class="wrap">
    <div data-filter=".news__card[data-k]">
      <div class="loc-filter" role="group" aria-label="${t('Filter news', 'تصفية الأخبار')}">
        <button type="button" data-f="all" aria-pressed="true">${t('All', 'الكل')}</button>
        ${Object.entries(cats).map(([k, v]) => `<button type="button" data-f="${k}" aria-pressed="false">${v}</button>`).join('')}
      </div>
    </div>
    <div class="news">
      ${items.map(([d, my, c, h, slug], i) => `<a class="news__card ${i === 0 ? 'news__card--feature' : ''}" data-k="${c}" href="${href(slug)}" target="_blank" rel="noopener" data-reveal>
        <span class="news__date"><b>${d}</b><span>${my}</span></span>
        <h3>${h}</h3>
        <span style="display:flex;justify-content:space-between;align-items:center"><span class="news__cat">${cats[c]}</span><span class="link" style="${i === 0 ? 'color:#fff' : ''}">${t('Read', 'اقرأ')} ${icon('arrow', 'arr')}</span></span>
      </a>`).join('')}
    </div>
  </div>
</section>

${ctaBand(t)}`;
  return { key: 'about', title: t('Media Coverage', 'التغطية الإعلامية'), desc: t('Dar Al Tamleek news: partnerships, awards and community initiatives.', 'أخبار دار التمليك: الشراكات والجوائز والمبادرات المجتمعية.'), body };
}
