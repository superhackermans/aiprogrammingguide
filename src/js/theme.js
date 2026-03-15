/* Theme toggle — dark/light with localStorage persistence */
(function () {
  var t = document.getElementById('themeToggle');
  var h = document.documentElement;
  try {
    var saved = localStorage.getItem('zth-theme');
    if (saved === 'light') h.setAttribute('data-theme', 'light');
  } catch (e) {}
  t.addEventListener('click', function () {
    var isLight = h.getAttribute('data-theme') === 'light';
    if (isLight) {
      h.removeAttribute('data-theme');
      try { localStorage.setItem('zth-theme', 'dark'); } catch (e) {}
    } else {
      h.setAttribute('data-theme', 'light');
      try { localStorage.setItem('zth-theme', 'light'); } catch (e) {}
    }
  });
})();
