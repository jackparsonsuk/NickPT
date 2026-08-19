/* Two behaviours only.
   1. The tick list stamps itself as it comes into view — the page's one
      authored moment. Ticks are stamped in the stylesheet by default, so a
      browser without JS, or with reduced motion asked for, gets the finished
      state rather than an empty one.
   2. The nav marks the section you are currently reading, and — where the nav
      is the narrow-screen scrolling strip — keeps that mark in view. */

(function () {
  'use strict';

  var wantsMotion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canObserve = 'IntersectionObserver' in window;

  if (wantsMotion && canObserve) {
    document.documentElement.classList.add('js-motion');

    var items = Array.prototype.slice.call(document.querySelectorAll('#ticks li'));
    var stamper = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var index = items.indexOf(entry.target);
        // Weighted, staggered: the row settles rather than snapping.
        entry.target.style.transitionDelay = '0ms';
        window.setTimeout(function () {
          entry.target.classList.add('is-stamped');
        }, Math.max(0, index) * 90);
        stamper.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -18% 0px', threshold: 0.4 });

    items.forEach(function (item) { stamper.observe(item); });
  }

  if (canObserve) {
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav a'));
    var byId = {};
    links.forEach(function (link) { byId[link.getAttribute('href').slice(1)] = link; });

    var sections = Object.keys(byId)
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);

    // On narrow screens the index is a single sideways-scrolling strip, so the
    // marked link can sit off-screen to the right — which would leave the spy
    // marking a section you cannot see. Bring it into the strip's own view.
    // scrollLeft is set directly rather than calling scrollIntoView, which
    // would also scroll the page and fight the reader.
    var strip = document.querySelector('.nav ul');
    function revealInStrip(link) {
      if (!strip) return;
      var slack = strip.scrollWidth - strip.clientWidth;
      if (slack <= 0) return;
      var target = link.offsetLeft - (strip.clientWidth - link.offsetWidth) / 2;
      strip.scrollLeft = Math.max(0, Math.min(slack, target));
    }

    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = byId[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach(function (other) { other.removeAttribute('aria-current'); });
          link.setAttribute('aria-current', 'true');
          revealInStrip(link);
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (section) { spy.observe(section); });
  }
})();
