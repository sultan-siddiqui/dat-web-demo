/* Dar Al Tamleek — interactions
   Page curtain, smooth scroll, reveals, header, menus, home storytelling,
   calculator, filters and demo forms. No build step; GSAP + Lenis are optional. */
(function () {
  'use strict';
  var W = window, D = document, H = D.documentElement;
  var $ = function (s, c) { return (c || D).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || D).querySelectorAll(s)); };
  var AR = H.lang === 'ar';
  var reduce = W.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasG = !!(W.gsap && W.ScrollTrigger);
  var fine = W.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var lenis = null;
  if (reduce) H.classList.add('reduce');
  if (hasG) gsap.registerPlugin(ScrollTrigger);
  var fmt = function (n, d) { return Number(n).toLocaleString('en-US', { maximumFractionDigits: d || 0, minimumFractionDigits: d || 0 }); };
  var SS = { get: function (k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }, set: function (k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }, del: function (k) { try { sessionStorage.removeItem(k); } catch (e) {} } };
  var LS = { get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };

  /* ---------------- split headings into lines ---------------- */
  function split(el) {
    if (!el.__src) el.__src = el.innerHTML;
    el.innerHTML = el.__src;
    var tokens = [];
    Array.prototype.slice.call(el.childNodes).forEach(function (n) {
      if (n.nodeType === 3) {
        n.textContent.split(/(\s+)/).forEach(function (w) { if (w.length) tokens.push(w.trim() ? { t: 'w', v: w } : { t: 's' }); });
      } else if (n.nodeName === 'BR') { tokens.push({ t: 'br' }); }
      else tokens.push({ t: 'e', v: n.outerHTML });
    });
    el.innerHTML = tokens.map(function (k) { return k.t === 's' ? ' ' : k.t === 'br' ? '<br>' : '<span class="w" style="display:inline-block">' + (k.t === 'w' ? k.v : k.v) + '</span>'; }).join('');
    var lines = [], top = null;
    $$('.w, br', el).forEach(function (w) {
      if (w.nodeName === 'BR') { top = null; return; }
      var t = w.offsetTop;
      if (top === null || Math.abs(t - top) > 4) { lines.push([]); top = t; }
      lines[lines.length - 1].push(w.innerHTML);
    });
    el.innerHTML = lines.map(function (l, i) { return '<span class="ln" style="--l:' + i + '"><span>' + l.join(' ') + '</span></span>'; }).join('');
    el.classList.add('is-split');
  }
  function splitAll() { $$('[data-split]').forEach(split); }

  /* ---------------- reveals ---------------- */
  function initReveal() {
    var io = new IntersectionObserver(function (es) {
      var batch = es.filter(function (e) { return e.isIntersecting; }).map(function (e) { io.unobserve(e.target); return e.target; });
      if (!batch.length) return;
      var splits = batch.filter(function (b) { return b.hasAttribute('data-split'); });
      var rest = batch.filter(function (b) { return !b.hasAttribute('data-split'); });
      splits.forEach(function (s) { s.classList.add('is-in'); });
      if (!rest.length) return;
      /* Each element gets .is-revealed (final state in CSS) before its inline
         styles are cleared, so it never falls back to the 28px start offset. */
      var done = function (el) { el.classList.add('is-revealed'); if (hasG) gsap.set(el, { clearProps: 'opacity,transform,translate,rotate,scale' }); };
      if (hasG && !reduce) rest.forEach(function (el, i) { gsap.to(el, { opacity: 1, y: 0, duration: 1.1, ease: 'expo.out', delay: (splits.length ? .12 : 0) + i * .08, onComplete: done, onCompleteParams: [el] }); });
      else rest.forEach(done);
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.01 });
    $$('[data-reveal], [data-split]').forEach(function (el) { if (!el.closest('[data-hero]')) io.observe(el); });
  }

  /* ---------------- star drawing ---------------- */
  function drawMark(svg, delay, dur) {
    var sp = $$('.mark__spine', svg), dots = $$('.mark__dot', svg);
    if (!sp.length) return;
    if (!hasG || reduce) { sp.forEach(function (s) { s.style.strokeDasharray = 'none'; }); return; }
    gsap.set(sp, { strokeDasharray: 1, strokeDashoffset: 1 });
    gsap.set(dots, { scale: 0 });
    gsap.to(sp, { strokeDashoffset: 0, duration: dur || 1.2, ease: 'power3.inOut', stagger: .14, delay: delay || 0 });
    gsap.to(dots, { scale: 1, duration: .6, ease: 'back.out(3)', stagger: .07, delay: (delay || 0) + .5 });
  }
  function initMarks() {
    var marks = $$('.mark--draw').filter(function (m) { return !m.closest('.curtain') && !m.closest('[data-hero]'); });
    if (!hasG || reduce) return;
    marks.forEach(function (m) { gsap.set($$('.mark__spine', m), { strokeDasharray: 1, strokeDashoffset: 1 }); gsap.set($$('.mark__dot', m), { scale: 0 }); });
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { io.unobserve(e.target); drawMark(e.target, .1, 1.6); } }); }, { threshold: .2 });
    marks.forEach(function (m) { io.observe(m); });
  }

  /* ---------------- page curtain ---------------- */
  var curtain = $('.curtain'), panel = curtain && $('.curtain__panel', curtain), cMark = curtain && $('.curtain__mark .mark', curtain);
  function curtainIn(done) {
    var intro = H.classList.contains('is-intro');
    var arriving = H.classList.contains('is-arriving');
    SS.del('dat-nav');
    if (!curtain || (!intro && !arriving) || !hasG || reduce) { H.classList.remove('is-intro', 'is-arriving'); done(); return; }
    var tl = gsap.timeline({ onComplete: function () { H.classList.remove('is-intro', 'is-arriving'); gsap.set([panel, cMark], { clearProps: 'all' }); SS.set('dat-seen', '1'); } });
    if (intro) {
      drawMark(cMark, .1, 1);
      tl.to({}, { duration: 1.25 })
        .to(cMark, { scale: .6, opacity: 0, duration: .5, ease: 'power3.in' })
        .to(panel, { clipPath: 'inset(0% 0% 100% 0% round 0 0 50vw 50vw)', duration: 1, ease: 'expo.inOut' }, '-=.15')
        .add(done, '-=.55');
    } else {
      gsap.set(cMark, { opacity: 0 });
      tl.to(panel, { clipPath: 'inset(0% 0% 100% 0% round 0 0 50vw 50vw)', duration: .9, ease: 'expo.inOut' }).add(done, '-=.5');
    }
  }
  function curtainOut(href) {
    if (!curtain || !hasG || reduce) { W.location.href = href; return; }
    SS.set('dat-nav', '1');
    curtain.style.visibility = 'visible';
    gsap.set(panel, { clipPath: 'inset(100% 0% 0% 0% round 50vw 50vw 0 0)', background: '' });
    gsap.set(cMark, { opacity: 1, scale: 1, color: '#fff' });
    drawMark(cMark, .15, .6);
    gsap.to(panel, { clipPath: 'inset(0% 0% 0% 0% round 0vw 0vw 0 0)', duration: .75, ease: 'expo.inOut', onComplete: function () { W.location.href = href; } });
  }
  D.addEventListener('click', function (e) {
    var a = e.target.closest('a[href]');
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button) return;
    if (a.target === '_blank' || a.hasAttribute('download')) return;
    var href = a.getAttribute('href');
    if (!href || href.charAt(0) === '#' || /^(mailto|tel|https?):/i.test(href)) return;
    var url = new URL(href, W.location.href);
    if (url.pathname === W.location.pathname && url.hash) return; // same-page anchor handled below
    if (url.origin !== W.location.origin || !/(\/|\.html)$/.test(url.pathname)) return;
    e.preventDefault();
    closeMenu();
    curtainOut(url.href);
  });
  W.addEventListener('pageshow', function (e) { if (e.persisted && curtain) { curtain.style.visibility = ''; if (hasG) gsap.set(panel, { clearProps: 'all' }); H.classList.remove('is-arriving', 'is-intro'); } });

  /* ---------------- smooth scroll ---------------- */
  function initScroll() {
    if (hasG && !reduce && W.Lenis) {
      lenis = new Lenis({ duration: 1.1, easing: function (x) { return Math.min(1, 1.001 - Math.pow(2, -10 * x)); }, smoothWheel: true });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
      gsap.ticker.lagSmoothing(0);
    }
    D.addEventListener('click', function (e) {
      var a = e.target.closest('a[href*="#"]');
      if (!a) return;
      var url = new URL(a.getAttribute('href'), W.location.href);
      if (url.pathname !== W.location.pathname || !url.hash || url.hash === '#') return;
      var tgt = D.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!tgt) return;
      e.preventDefault(); closeMenu();
      var off = -(parseInt(getComputedStyle(H).getPropertyValue('--hdr')) || 80) - (D.querySelector('.subnav') ? 60 : 16);
      if (lenis) lenis.scrollTo(tgt, { offset: off, duration: 1.4 }); else W.scrollTo({ top: tgt.getBoundingClientRect().top + W.scrollY + off, behavior: reduce ? 'auto' : 'smooth' });
      history.replaceState(null, '', url.hash);
    });
  }
  function jumpToHash() {
    if (!location.hash) return;
    var tgt = D.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (!tgt) return;
    var off = -(parseInt(getComputedStyle(H).getPropertyValue('--hdr')) || 80) - (D.querySelector('.subnav') ? 60 : 16);
    var y = tgt.getBoundingClientRect().top + W.scrollY + off;
    if (lenis) lenis.scrollTo(y, { immediate: true, force: true }); else W.scrollTo(0, y);
  }

  /* ---------------- header, dropdowns, mobile menu ---------------- */
  var hdr = $('[data-hdr]'), burger = $('.burger'), mm = $('#mm');
  function openMenu() { hdr.classList.add('is-open'); mm.classList.add('is-open'); mm.setAttribute('aria-hidden', 'false'); burger.setAttribute('aria-expanded', 'true'); burger.setAttribute('aria-label', AR ? 'إغلاق القائمة' : 'Close menu'); if (lenis) lenis.stop(); D.body.style.overflow = 'hidden'; }
  function closeMenu() { if (!mm || !mm.classList.contains('is-open')) return; hdr.classList.remove('is-open'); mm.classList.remove('is-open'); mm.setAttribute('aria-hidden', 'true'); burger.setAttribute('aria-expanded', 'false'); burger.setAttribute('aria-label', AR ? 'فتح القائمة' : 'Open menu'); if (lenis) lenis.start(); D.body.style.overflow = ''; }
  function initHeader() {
    var last = W.scrollY, down = 0, up = 0, ticking = false, totop = $('.totop'), mbar = $('.mbar'), circ = totop && $('circle', totop);
    function onScroll() {
      var y = W.scrollY, max = D.documentElement.scrollHeight - W.innerHeight, dy = y - last;
      last = y;
      hdr.classList.toggle('is-scrolled', y > 24);
      /* Direction is tracked as distance travelled, so a slowing smooth-scroll
         (tiny per-frame deltas) never flips the header back on. It returns only
         after a deliberate upward scroll, near the top, or while a menu is open. */
      if (dy > 0) { down += dy; up = 0; } else if (dy < 0) { up -= dy; down = 0; }
      if (y < 160 || hdr.classList.contains('is-open') || $('.nav__item.is-open')) { hdr.classList.remove('is-hidden'); }
      else if (down > 24) hdr.classList.add('is-hidden');
      else if (up > 80) hdr.classList.remove('is-hidden');
      if (totop) { totop.classList.toggle('is-on', y > 900); circ.style.setProperty('--p', String(1 - y / Math.max(1, max))); }
      if (mbar) mbar.classList.toggle('is-on', y > W.innerHeight * .6 && y < max - 300);
      ticking = false;
    }
    W.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
    onScroll();
    if (totop) totop.addEventListener('click', function () { if (lenis) lenis.scrollTo(0, { duration: 1.6 }); else W.scrollTo({ top: 0, behavior: 'smooth' }); });

    $$('[data-dd]').forEach(function (item) {
      var link = $('.nav__link', item), tmr;
      function open() { clearTimeout(tmr); $$('[data-dd].is-open').forEach(function (o) { if (o !== item) { o.classList.remove('is-open'); $('.nav__link', o).setAttribute('aria-expanded', 'false'); } }); item.classList.add('is-open'); link.setAttribute('aria-expanded', 'true'); }
      function close() { tmr = setTimeout(function () { item.classList.remove('is-open'); link.setAttribute('aria-expanded', 'false'); }, 160); }
      item.addEventListener('mouseenter', open);
      item.addEventListener('mouseleave', close);
      item.addEventListener('focusin', open);
      item.addEventListener('focusout', function (e) { if (!item.contains(e.relatedTarget)) close(); });
      link.addEventListener('keydown', function (e) { if (e.key === 'ArrowDown') { e.preventDefault(); open(); var f = $('.dd a', item); if (f) f.focus(); } });
    });
    D.addEventListener('keydown', function (e) { if (e.key === 'Escape') { $$('[data-dd].is-open').forEach(function (o) { o.classList.remove('is-open'); }); closeMenu(); } });

    if (burger) burger.addEventListener('click', function () { mm.classList.contains('is-open') ? closeMenu() : openMenu(); });
    $$('.mm__toggle[aria-controls]').forEach(function (b) {
      b.addEventListener('click', function () {
        var sub = D.getElementById(b.getAttribute('aria-controls')), on = b.getAttribute('aria-expanded') !== 'true';
        b.setAttribute('aria-expanded', String(on)); sub.style.maxHeight = on ? sub.scrollHeight + 'px' : '0';
      });
    });
    W.addEventListener('resize', function () { if (W.innerWidth > 1100) closeMenu(); });
  }

  /* ---------------- counters ---------------- */
  function initCounters() {
    var els = $$('[data-count]');
    if (!els.length) return;
    function run(el) {
      if (el.__done) return; el.__done = true;
      var raw = el.getAttribute('data-count'), n = parseFloat(raw.replace(/,/g, '')), dec = (raw.split('.')[1] || '').length, comma = raw.indexOf(',') > -1;
      if (!hasG || reduce || isNaN(n)) { el.textContent = raw; return; }
      var o = { v: 0 };
      gsap.to(o, { v: n, duration: 2, ease: 'power3.out', onUpdate: function () { el.textContent = comma ? fmt(o.v, dec) : o.v.toFixed(dec); } });
    }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { io.unobserve(e.target); run(e.target); } });
    }, { threshold: .4 });
    els.forEach(function (el) {
      if (el.closest('[data-door]') && hasG && !reduce) { el.textContent = '0'; el.addEventListener('door', function () { run(el); }); }
      else io.observe(el);
    });
  }

  /* ---------------- parallax & magnetic ---------------- */
  function initParallax() {
    if (!hasG || reduce) return;
    $$('[data-parallax]').forEach(function (img) {
      var amt = parseFloat(img.getAttribute('data-parallax')) || .1;
      gsap.fromTo(img, { yPercent: -amt * 50, scale: 1 + amt }, { yPercent: amt * 50, ease: 'none', scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
    });
    $$('.band__img').forEach(function (b) { gsap.fromTo(b, { yPercent: -8 }, { yPercent: 8, ease: 'none', scrollTrigger: { trigger: b.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } }); });
  }
  function initMagnetic() {
    if (!fine || reduce || !hasG) return;
    $$('[data-magnetic]').forEach(function (b) {
      var x = gsap.quickTo(b, 'x', { duration: .6, ease: 'power3' }), y = gsap.quickTo(b, 'y', { duration: .6, ease: 'power3' });
      b.addEventListener('mousemove', function (e) { var r = b.getBoundingClientRect(); x((e.clientX - r.left - r.width / 2) * .18); y((e.clientY - r.top - r.height / 2) * .3); });
      b.addEventListener('mouseleave', function () { x(0); y(0); });
    });
  }

  /* ---------------- accordion & tabs ---------------- */
  function initAcc() {
    $$('[data-acc]').forEach(function (acc) {
      $$('.acc__btn', acc).forEach(function (b) {
        b.addEventListener('click', function () {
          var item = b.closest('.acc__item'), on = !item.classList.contains('is-open');
          item.classList.toggle('is-open', on); b.setAttribute('aria-expanded', String(on));
          setTimeout(function () { if (hasG) ScrollTrigger.refresh(); }, 600);
        });
      });
    });
  }
  function initTabs() {
    $$('[data-tabs]').forEach(function (box) {
      var btns = $$('[role="tab"]', box);
      function sel(b, focus) {
        btns.forEach(function (x) { var on = x === b; x.setAttribute('aria-selected', String(on)); x.tabIndex = on ? 0 : -1; var p = D.getElementById(x.getAttribute('aria-controls')); if (p) p.hidden = !on; });
        if (focus) b.focus();
        if (hasG) ScrollTrigger.refresh();
      }
      btns.forEach(function (b, i) {
        b.addEventListener('click', function () { sel(b); });
        b.addEventListener('keydown', function (e) {
          var k = e.key, d = (k === 'ArrowRight' ? 1 : k === 'ArrowLeft' ? -1 : 0) * (AR ? -1 : 1);
          if (k === 'ArrowDown') d = 1; if (k === 'ArrowUp') d = -1;
          if (d) { e.preventDefault(); sel(btns[(i + d + btns.length) % btns.length], true); }
        });
      });
    });
  }

  /* ---------------- HOME ---------------- */
  function heroIntro() {
    var hero = $('[data-hero]');
    if (!hero) return;
    var title = $('[data-split]', hero), reveals = $$('[data-reveal]', hero), floats = $$('.float', hero), arch = $('.arch', hero), star = $('.hero__star', hero);
    if (title) title.classList.add('is-in');
    if (!hasG || reduce) { reveals.forEach(function (r) { r.style.opacity = 1; r.style.transform = 'none'; }); return; }
    gsap.from(arch, { clipPath: 'inset(100% 0% 0% 0% round 50vw 50vw 0 0)', duration: 1.6, ease: 'expo.inOut' });
    gsap.from($('img', arch), { scale: 1.35, duration: 2.2, ease: 'expo.out' });
    gsap.to(reveals, { opacity: 1, y: 0, duration: 1.1, ease: 'expo.out', stagger: .09, delay: .35 });
    gsap.from(floats, { opacity: 0, y: 30, scale: .9, duration: 1, ease: 'back.out(1.6)', stagger: .15, delay: .9 });
    if (star) drawMark(star, .3, 2);
    floats.forEach(function (f, i) { gsap.to(f, { y: i % 2 ? 10 : -10, duration: 3 + i, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2 }); });
    gsap.to(arch, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
  }
  function initDoor() {
    var door = $('[data-door]');
    if (!door) return;
    var frame = $('.door__frame', door), img = $('img', frame), intro = $('.door__intro', door), over = $('.door__over', door);
    if (!hasG || reduce) { frame.style.clipPath = 'none'; frame.style.setProperty('--dim', 1); img.style.transform = 'none'; intro.style.display = 'none'; return; }
    var mob = W.innerWidth < 1100;
    gsap.set($$('.d2, .stat', over), { opacity: 0, y: 30 });
    var tl = gsap.timeline({ scrollTrigger: { trigger: door, start: 'top top', end: '+=160%', pin: true, scrub: .8, anticipatePin: 1 } });
    tl.to(door, { '--t': '0%', '--x': '0%', '--r': '0vw', ease: 'power2.inOut', duration: 1 })
      .to(img, { scale: 1, ease: 'power2.out', duration: 1 }, 0)
      .to(intro, { opacity: 0, y: -40, duration: .35 }, 0)
      .to(frame, { '--dim': 1, duration: .4 }, .55)
      .to($$('.d2, .stat', over), { opacity: 1, y: 0, stagger: .06, duration: .4 }, .7)
      .add(function () { $$('[data-count]', over).forEach(function (c) { c.dispatchEvent(new Event('door')); }); }, .8)
      .to({}, { duration: .3 });
    if (mob) tl.duration(tl.duration());
  }
  function initStory() {
    var stage = $('[data-stage]');
    if (!stage) return;
    var steps = $$('.step');
    var nodes = { 1: [0, 2], 2: [0, 1], 3: [1, 2], 4: [2] };
    function set(n) {
      stage.setAttribute('data-step', n);
      steps.forEach(function (s, i) { s.classList.toggle('is-on', i === n - 1); });
      $$('.stage__node', stage).forEach(function (nd, i) { nd.classList.toggle('is-on', nodes[n].indexOf(i) > -1); });
      $$('.stage__flow', stage).forEach(function (f, i) { f.style.strokeDashoffset = (n >= 2 && i === 0) || (n >= 3 && i === 1) ? 0 : 1; });
      var cap = $('.stage__cap b', stage); if (cap) cap.textContent = n;
    }
    set(1);
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) set(steps.indexOf(e.target) + 1); }); }, { rootMargin: '-45% 0px -45% 0px' });
    steps.forEach(function (s) { io.observe(s); });
  }
  function initPaths() {
    var box = $('[data-paths]');
    if (!box) return;
    var tabs = $$('[role="tab"]', box), panels = $$('.paths__panel', box);
    function sel(i, focus) {
      tabs.forEach(function (t, j) { t.setAttribute('aria-selected', String(i === j)); t.tabIndex = i === j ? 0 : -1; });
      panels.forEach(function (p, j) { p.classList.toggle('is-on', i === j); p.setAttribute('aria-hidden', String(i !== j)); });
      if (focus) tabs[i].focus();
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { sel(i); });
      t.addEventListener('keydown', function (e) {
        var d = { ArrowDown: 1, ArrowUp: -1, ArrowRight: AR ? -1 : 1, ArrowLeft: AR ? 1 : -1 }[e.key];
        if (d) { e.preventDefault(); sel((i + d + tabs.length) % tabs.length, true); }
      });
    });
  }
  function initJourney() {
    var j = $('[data-journey]');
    if (!j) return;
    var steps = $$('.jstep', j), prog = $('.journey__line .prog', j);
    if (!hasG || reduce) { steps.forEach(function (s) { s.classList.add('is-on'); }); return; }
    ScrollTrigger.create({
      trigger: j, start: 'top 75%', end: 'bottom 45%', scrub: true,
      onUpdate: function (s) {
        if (prog) prog.style.strokeDashoffset = 1 - s.progress;
        steps.forEach(function (st, i) { st.classList.toggle('is-on', s.progress >= i / steps.length + .02 || (i === 0 && s.progress > 0)); });
      }
    });
  }
  function initBiz() {
    var biz = $('[data-biz]');
    if (!biz) return;
    var ps = $$('.biz__p', biz);
    function on(p) { ps.forEach(function (x) { x.classList.toggle('is-on', x === p); }); }
    ps.forEach(function (p) {
      if (fine) p.addEventListener('mouseenter', function () { on(p); });
      p.addEventListener('click', function (e) { if (!p.classList.contains('is-on')) { e.preventDefault(); on(p); } });
      p.addEventListener('focusin', function () { on(p); });
    });
  }
  function initRings() {
    $$('[data-ring]').forEach(function (r) {
      var fg = $('.fg', r), to = parseFloat(r.getAttribute('data-ring'));
      if (!hasG || reduce) { fg.style.strokeDashoffset = 1 - to; return; }
      gsap.fromTo(fg, { strokeDashoffset: 1 }, { strokeDashoffset: 1 - to, duration: 2, ease: 'power3.inOut', scrollTrigger: { trigger: r, start: 'top 85%' } });
    });
    $$('.gauge__fill').forEach(function (g) { if (hasG && !reduce) gsap.from(g, { scaleX: 0, duration: 1.6, ease: 'power3.inOut', scrollTrigger: { trigger: g, start: 'top 90%' } }); });
  }

  /* ---------------- calculator ---------------- */
  var APR = 6.43; // SAMA disclosure example (Masakin, 25 years, 90% LTV)
  function payment(L, apr, yrs) { var r = apr / 1200, n = yrs * 12; if (L <= 0) return 0; return r ? L * r / (1 - Math.pow(1 + r, -n)) : L / n; }
  function paintRange(r) { var p = (r.value - r.min) / (r.max - r.min) * 100; r.style.setProperty('--p', p + '%'); }
  function tween(el, to, money) {
    if (!el) return;
    var from = parseFloat((el.textContent || '0').replace(/,/g, '')) || 0;
    if (!hasG || reduce) { el.textContent = fmt(to); return; }
    var o = { v: from };
    gsap.to(o, { v: to, duration: .5, ease: 'power2.out', overwrite: true, onUpdate: function () { el.textContent = fmt(o.v); } });
  }
  function initCalc() {
    $$('[data-calc]').forEach(function (c) {
      var q = function (n) { return $('[name="' + n + '"]', c); };
      var price = q('price'), down = q('down'), years = q('years'), age = q('age');
      var out = function (k) { return $('[data-o="' + k + '"]', c); };
      function minDown() {
        var home = $('[name="home"]:checked', c), sub = $('[name="redf"]:checked', c);
        var first = !home || home.value === 'first';
        if (sub && sub.value === 'yes' && first && +price.value <= 800000) return 5;
        if (!first) return 15;
        return 10;
      }
      function calc() {
        if (age) {
          var maxY = Math.max(5, Math.min(30, 75 - (+age.value)));
          years.max = maxY; if (+years.value > maxY) years.value = maxY;
          var my = out('maxyears'); if (my) my.textContent = maxY;
        }
        var md = minDown(); down.min = md; if (+down.value < md) down.value = md;
        var md1 = out('mindown'); if (md1) md1.textContent = md + '%';
        [price, down, years, age].forEach(function (r) { if (r) paintRange(r); });
        var P = +price.value, dp = +down.value, Y = +years.value;
        var L = P * (1 - dp / 100), m = payment(L, APR, Y), tot = m * Y * 12, prof = tot - L;
        var setT = function (k, v) { var e = out(k); if (e) e.textContent = v; };
        setT('price', fmt(P)); setT('down', dp + '%'); setT('downamt', fmt(P * dp / 100)); setT('years', Y); setT('age', age ? age.value : '');
        tween(out('pay'), Math.round(m));
        setT('loan', fmt(L)); setT('total', fmt(tot)); setT('profit', fmt(prof)); setT('ltv', (100 - dp) + '%'); setT('apr', APR.toFixed(2) + '%');
        var donut = $('.donut .p2', c); if (donut) donut.style.strokeDasharray = (prof / tot).toFixed(4) + ' 1';
        var pP = out('pp'); if (pP) pP.textContent = Math.round(L / tot * 100) + '%';
        var pR = out('pr'); if (pR) pR.textContent = Math.round(prof / tot * 100) + '%';
        var am = $('.amort', c);
        if (am) {
          var r = APR / 1200, bal = L, bars = '';
          for (var y = 0; y < Y; y++) {
            var pi = 0, pr = 0;
            for (var k = 0; k < 12; k++) { var it = bal * r; pi += m - it; pr += it; bal -= m - it; }
            bars += '<i style="height:100%;--pf:' + (pi / (pi + pr) * 100).toFixed(1) + '%" title="' + (AR ? 'السنة ' : 'Year ') + (y + 1) + '"></i>';
          }
          am.innerHTML = bars;
        }
      }
      $$('input', c).forEach(function (i) { i.addEventListener('input', calc); i.addEventListener('change', calc); });
      calc();
    });
  }

  /* ---------------- filters ---------------- */
  function initFilters() {
    $$('[data-filter]').forEach(function (box) {
      var btns = $$('button[data-f]', box), sel = box.getAttribute('data-filter'), items = $$(sel);
      btns.forEach(function (b) {
        b.addEventListener('click', function () {
          var f = b.getAttribute('data-f');
          btns.forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
          items.forEach(function (it) { it.classList.toggle('is-hidden', f !== 'all' && it.getAttribute('data-k').split(' ').indexOf(f) < 0); });
          if (hasG && !reduce) gsap.fromTo(items.filter(function (i) { return !i.classList.contains('is-hidden'); }), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: .6, ease: 'expo.out', stagger: .03 });
          if (hasG) ScrollTrigger.refresh();
        });
      });
    });
  }

  /* ---------------- subnav (business) ---------------- */
  function initSubnav() {
    var sn = $('.subnav');
    if (!sn) return;
    var links = $$('a', sn);
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) links.forEach(function (l) { l.classList.toggle('is-on', l.getAttribute('href') === '#' + e.target.id); }); });
    }, { rootMargin: '-40% 0px -55% 0px' });
    links.forEach(function (l) { var t = D.getElementById(l.getAttribute('href').slice(1)); if (t) io.observe(t); });
  }

  /* ---------------- forms (demo) ---------------- */
  function validate(scope) {
    var ok = true, first = null;
    $$('[required]', scope).forEach(function (f) {
      var field = f.closest('.field') || f.closest('.check'), v = f.type === 'checkbox' ? f.checked : f.type === 'radio' ? !!$('[name="' + f.name + '"]:checked', scope) : f.value.trim();
      var bad = !v || (f.pattern && !(new RegExp('^(?:' + f.pattern + ')$')).test(f.value)) || (f.min && f.type === 'number' && +f.value < +f.min) || (f.max && f.type === 'number' && +f.value > +f.max) || (f.type === 'email' && !/^\S+@\S+\.\S+$/.test(f.value));
      if (field) field.classList.toggle('is-bad', !!bad);
      if (bad) { ok = false; if (!first) first = f; }
    });
    if (first) first.focus();
    return ok;
  }
  function initForms() {
    $$('form[data-demo]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var panesW = $$('.wiz__pane', form), on = $('.wiz__pane.is-on', form);
        if (panesW.length && on && panesW.indexOf(on) < panesW.length - 1) { var nx = $('[data-next]', on); if (nx) nx.click(); return; }
        if (!validate(form)) return;
        form.classList.add('is-sent');
        var ok = $('.form__ok', form), m = ok && $('.mark--draw', ok);
        if (m) drawMark(m, .1, 1.2);
        if (lenis) lenis.scrollTo(form, { offset: -140 });
      });
      $$('input, select, textarea', form).forEach(function (f) { f.addEventListener('input', function () { var fl = f.closest('.field'); if (fl) fl.classList.remove('is-bad'); }); });
    });
    var wiz = $('[data-wizard]');
    if (wiz) {
      var panes = $$('.wiz__pane', wiz), dots = $$('.wiz__steps li'), bar = $('.wiz__bar i'), cur = 0;
      var cities = { riyadh: ['Riyadh', 'Al Kharj', 'Al Majmaah'], makkah: ['Jeddah', 'Makkah', 'Taif', 'Rabigh'], madinah: ['Madinah', 'Yanbu'], qassim: ['Buraydah', 'Unaizah'], eastern: ['Dammam', 'Khobar', 'Dhahran', 'Al Ahsa', 'Jubail'], tabuk: ['Tabuk'], aseer: ['Abha', 'Khamis Mushait'], hail: ['Hail'], baha: ['Al Baha'] };
      var citiesAr = { riyadh: ['الرياض', 'الخرج', 'المجمعة'], makkah: ['جدة', 'مكة المكرمة', 'الطائف', 'رابغ'], madinah: ['المدينة المنورة', 'ينبع'], qassim: ['بريدة', 'عنيزة'], eastern: ['الدمام', 'الخبر', 'الظهران', 'الأحساء', 'الجبيل'], tabuk: ['تبوك'], aseer: ['أبها', 'خميس مشيط'], hail: ['حائل'], baha: ['الباحة'] };
      var region = $('[name="region"]', wiz), city = $('[name="city"]', wiz);
      if (region) region.addEventListener('change', function () {
        var list = (AR ? citiesAr : cities)[region.value] || [];
        city.innerHTML = '<option value="">' + (AR ? 'اختر المدينة' : 'Select city') + '</option>' + list.map(function (c) { return '<option>' + c + '</option>'; }).join('');
      });
      function go(n) {
        cur = n;
        panes.forEach(function (p, i) { p.classList.toggle('is-on', i === n); });
        dots.forEach(function (d, i) { d.classList.toggle('is-on', i === n); d.classList.toggle('is-done', i < n); });
        if (bar) bar.style.setProperty('--w', ((n + 1) / panes.length * 100) + '%');
        if (n === panes.length - 1) review();
        var top = wiz.getBoundingClientRect().top + W.scrollY - 120;
        if (lenis) lenis.scrollTo(top, { duration: .9 }); else W.scrollTo({ top: top, behavior: 'smooth' });
      }
      function review() {
        var box = $('.review', wiz); if (!box) return;
        var rows = $$('[data-r]', wiz).map(function (f) {
          var v = f.type === 'radio' ? (f.checked ? f.closest('label').textContent.trim() : null) : f.tagName === 'SELECT' ? (f.value ? f.options[f.selectedIndex].text : '') : f.value;
          return v === null ? null : '<div><span>' + f.getAttribute('data-r') + '</span><b>' + (v || '—').replace(/</g, '&lt;') + '</b></div>';
        }).filter(Boolean);
        box.innerHTML = rows.join('');
      }
      $$('[data-next]', wiz).forEach(function (b) { b.addEventListener('click', function () { if (validate(panes[cur])) go(cur + 1); }); });
      $$('[data-prev]', wiz).forEach(function (b) { b.addEventListener('click', function () { go(cur - 1); }); });
    }
  }

  /* ---------------- cookie ---------------- */
  function initCookie() {
    var c = $('.cookie'); if (!c) return;
    if (LS.get('dat-cookie')) return;
    setTimeout(function () { c.hidden = false; if (hasG && !reduce) gsap.from(c, { y: 40, opacity: 0, duration: .8, ease: 'expo.out' }); }, 2600);
    $$('[data-cookie]', c).forEach(function (b) { b.addEventListener('click', function () { LS.set('dat-cookie', b.getAttribute('data-cookie')); c.hidden = true; }); });
  }

  /* ---------------- boot ---------------- */
  function boot() {
    initScroll();
    initHeader();
    initAcc(); initTabs(); initPaths(); initBiz(); initFilters(); initSubnav(); initForms(); initCalc(); initCookie(); initMagnetic();
    var fontsReady = D.fonts && D.fonts.ready ? D.fonts.ready : Promise.resolve();
    Promise.race([fontsReady, new Promise(function (r) { setTimeout(r, 1500); })]).then(function () {
      splitAll();
      initStory();
      curtainIn(function () {
        heroIntro();
        initReveal(); initMarks(); initCounters(); initParallax(); initDoor(); initJourney(); initRings();
        jumpToHash();
        if (hasG) ScrollTrigger.refresh();
      });
      var w = W.innerWidth;
      W.addEventListener('resize', function () { if (Math.abs(W.innerWidth - w) > 60) { w = W.innerWidth; $$('[data-split].is-split').forEach(function (el) { var inn = el.classList.contains('is-in'); split(el); if (inn) el.classList.add('is-in'); }); } });
    });
  }
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', boot); else boot();
})();
