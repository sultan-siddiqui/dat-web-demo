import { SITE, icon, btn, head, pageHero } from '../lib.mjs';
import { inquiryForm } from './business.mjs';

export default function (t, L) {
  const city = { jeddah: t('Jeddah', 'جدة'), riyadh: t('Riyadh', 'الرياض'), dammam: t('Dammam', 'الدمام'), makkah: t('Makkah', 'مكة المكرمة'), madinah: t('Madinah', 'المدينة المنورة') };
  const std = t('Sunday to Thursday, 8:00 AM to 4:00 PM', 'من الأحد إلى الخميس، 8:00 ص إلى 4:00 م');
  const locs = [
    ['jeddah', t('DAT Service Center', 'مركز خدمة دار التمليك'), t('Al Mukmal Tower, 3rd floor, Office 34, Al Khalidiyyah, Jeddah 23422', 'برج المكمل، الدور الثالث، مكتب 34، حي الخالدية، جدة 23422'), '800 124 0166', std, 'Al Mukmal Tower Al Khalidiyyah Jeddah'],
    ['jeddah', t('DAT Corporate Office', 'المكتب الرئيسي لدار التمليك'), t('Al Mukmal Tower, Al Khalidiyyah, Jeddah 23422', 'برج المكمل، حي الخالدية، جدة 23422'), '012 606 5607', t('Sunday to Thursday, 10:00 AM to 4:00 PM', 'من الأحد إلى الخميس، 10:00 ص إلى 4:00 م'), 'Al Mukmal Tower Al Khalidiyyah Jeddah'],
    ['jeddah', t('Sakani Center, Jeddah', 'مركز سكني، جدة'), t('3736 Sinan Bin Abi Sinan, Al Mohammadiyyah, Jeddah 23617', '3736 سنان بن أبي سنان، حي المحمدية، جدة 23617'), '800 124 0166', t('Sunday to Thursday, 11:00 AM to 8:00 PM', 'من الأحد إلى الخميس، 11:00 ص إلى 8:00 م'), 'Sinan Bin Abi Sinan Al Mohammadiyyah Jeddah'],
    ['riyadh', t('Al-Suwaidi District Branch', 'فرع حي السويدي'), t('Western Ring Road, Exit 26, opposite Al Salam Mall, next to Emirates Bank, Riyadh', 'الطريق الدائري الغربي، مخرج 26، مقابل الرياض سلام مول، بجوار بنك الإمارات، الرياض'), '800 124 0166', std, 'Al Salam Mall Riyadh'],
    ['riyadh', t('Qurtuba District Branch', 'فرع حي قرطبة'), t('Dammam Highway, Exit 8, opposite Al Jazeera Agencies, next to Emirates Bank, Riyadh', 'طريق الدمام، مخرج 8، مقابل وكالات الجزيرة، بجوار بنك الإمارات، الرياض'), '800 124 0166', std, 'Qurtubah Dammam Road Exit 8 Riyadh'],
    ['dammam', t('DAT Dammam Branch', 'فرع الدمام'), t('Western Beach, Dammam', 'الشاطئ الغربي، الدمام'), '013 830 6837', std, 'Western Beach Dammam'],
    ['makkah', t('Makkah DAT Office', 'مكتب مكة المكرمة'), t('Al-Qasim Building, 1st floor, 60th Street, Al-Nuzha, Makkah', 'عمارة القاسم، الدور الأول، شارع الستين، حي النزهة، مكة المكرمة'), '800 124 0166', std, 'Al Nuzha 60th Street Makkah'],
    ['madinah', t('Madinah DAT Branch', 'فرع المدينة المنورة'), t('Enjaz Tabah Commercial Center, Office 307, Prince Mohammed bin Abdulaziz Rd at Prince Muqrin Rd, Madinah', 'مركز إنجاز طابة التجاري، مكتب 307، طريق الأمير محمد بن عبدالعزيز مع طريق الأمير مقرن، المدينة المنورة'), '800 124 0166', std, 'Enjaz Tabah Commercial Center Madinah'],
  ];
  const body = `
${pageHero(t, {
  crumbs: [{ label: t('Contact', 'تواصل معنا') }],
  kicker: t('Contact us', 'تواصل معنا'),
  title: t('We are a call, a click <em class="hl">or a visit away.</em>', 'نحن على بُعد مكالمة أو نقرة <em class="hl">أو زيارة.</em>'),
  lead: t('Speak to a home finance specialist toll-free, visit one of our branches in five cities, or send us a message.', 'تحدّث إلى أخصائي تمويل عبر الرقم المجاني، أو زر أحد فروعنا في خمس مدن، أو أرسل لنا رسالة.'),
  img: 'jeddah-balad', alt: t('Historic mashrabiya balconies in Al Balad, Jeddah', 'رواشين تاريخية في جدة البلد'),
  actions: btn(SITE.phoneHref, `<span dir="ltr">${SITE.phone}</span>`, { ic: 'phone' }) + btn('#branches', t('Find a branch', 'ابحث عن فرع'), { variant: 'line', ic: 'pin' }),
})}

<section class="sec sec--paper sec--tight">
  <div class="wrap grid4">
    ${[
      ['phone', t('Call toll-free', 'اتصل مجانًا'), `<span dir="ltr">${SITE.phone}</span>`, SITE.phoneHref, false],
      ['mail', t('General inquiry', 'استفسار عام'), t('Send us a message', 'أرسل لنا رسالة'), '#inquiry', false],
      ['handshake', t('Business inquiry', 'استفسار الأعمال'), t('Partner with us', 'كن شريكًا لنا'), 'business.html#inquiry', false],
      ['shield', t('Complaints', 'الشكاوى'), t('We listen and act', 'نستمع ونتصرف'), `${SITE.legacy}/${L}/contact-us/complaints`, true],
    ].map(([i, h, p, u, ext]) => `<a class="card" href="${u}" ${ext ? 'target="_blank" rel="noopener"' : ''} data-reveal><span class="card__ic">${icon(i)}</span><h3>${h}</h3><p>${p}</p></a>`).join('')}
  </div>
</section>

<section class="sec" id="branches">
  <div class="wrap">
    ${head({ kicker: t('Branches & locations', 'الفروع والمواقع'), title: t('Find us <em class="hl">near you.</em>', 'تجدنا <em class="hl">بالقرب منك.</em>'), cls: 'shead--split', lead: t('Choose a city to filter. Each card opens the location in your maps app.', 'اختر المدينة للتصفية، وتفتح كل بطاقة الموقع في تطبيق الخرائط.') })}
    <div data-filter=".loc[data-k]">
      <div class="loc-filter" role="group" aria-label="${t('Filter by city', 'تصفية حسب المدينة')}">
        <button type="button" data-f="all" aria-pressed="true">${t('All cities', 'كل المدن')}</button>
        ${Object.entries(city).map(([k, v]) => `<button type="button" data-f="${k}" aria-pressed="false">${v}</button>`).join('')}
      </div>
    </div>
    <div class="locs">
      ${locs.map(([c, n, a, ph, h, q]) => `<article class="loc" data-k="${c}" data-reveal>
        <span class="loc__city">${city[c]}</span>
        <h3>${n}</h3>
        <a class="loc__map" href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(q)}" target="_blank" rel="noopener" aria-label="${t('Open in maps', 'افتح في الخرائط')}: ${n}">${icon('pin')}</a>
        <div class="loc__meta">
          <span>${icon('pin')}${a}</span>
          <span>${icon('phone')}<a href="tel:${ph.replace(/\s/g, '')}" dir="ltr">${ph}</a></span>
          <span>${icon('clock')}${h}</span>
        </div>
      </article>`).join('')}
    </div>
  </div>
</section>

<section class="sec sec--sand">
  <div class="wrap grid2 grid2--top">
    <div>
      ${head({ kicker: t('General inquiry', 'استفسار عام'), title: t('Write to us. <em class="hl">We reply fast.</em>', 'راسلنا. <em class="hl">نرد بسرعة.</em>'), lead: t('For home finance applications, registering your interest is the fastest route to a specialist.', 'لطلبات التمويل، يُعد تسجيل اهتمامك الطريق الأسرع للتواصل مع أخصائي.') })}
      <div class="hero__actions" data-reveal>${btn('apply.html', t('Register your interest', 'سجّل اهتمامك'))}${btn(SITE.login, t('Customer login', 'دخول العملاء'), { variant: 'line', ext: true })}</div>
      <div class="note" data-reveal style="margin-top:28px">${icon('shield')}<span>${t('We follow SAMA\'s consumer protection principles. ', 'نلتزم بمبادئ حماية العملاء الصادرة عن البنك المركزي السعودي. ')}<a class="link" href="${SITE.sama}" target="_blank" rel="noopener">${t('Read them', 'اطّلع عليها')}</a></span></div>
    </div>
    ${inquiryForm(t, { id: 'inquiry', title: t('Send a message', 'أرسل رسالة'), lead: t('We will get back to you as soon as possible.', 'سنعود إليك في أقرب وقت ممكن.'), purpose: false })}
  </div>
</section>`;
  return { key: 'contact', title: t('Contact Us', 'تواصل معنا'), desc: t('Contact Dar Al Tamleek: toll-free 800 124 0166, branches in Jeddah, Riyadh, Dammam, Makkah and Madinah, and online inquiry.', 'تواصل مع دار التمليك: الرقم المجاني 800 124 0166 وفروعنا في جدة والرياض والدمام ومكة المكرمة والمدينة المنورة.'), body };
}
