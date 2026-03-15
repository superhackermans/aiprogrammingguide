/* Sidebar — hamburger toggle + scroll-based active link tracking */
(function () {
  var ham = document.getElementById('hamburger');
  var sb = document.getElementById('sidebar');
  var ov = document.getElementById('sidebar-overlay');

  ham.addEventListener('click', function () {
    ham.classList.toggle('open');
    sb.classList.toggle('open');
    ov.classList.toggle('open');
  });

  ov.addEventListener('click', function () {
    ham.classList.remove('open');
    sb.classList.remove('open');
    ov.classList.remove('open');
  });

  sb.querySelectorAll('.toc-link').forEach(function (l) {
    l.addEventListener('click', function () {
      if (window.innerWidth <= 900) {
        ham.classList.remove('open');
        sb.classList.remove('open');
        ov.classList.remove('open');
      }
    });
  });

  var secs = document.querySelectorAll('section[id]');
  var links = document.querySelectorAll('.toc-link');
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        links.forEach(function (l) { l.classList.remove('active'); });
        var active = sb.querySelector('a[href="#' + entry.target.id + '"]');
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  secs.forEach(function (s) { obs.observe(s); });
})();
