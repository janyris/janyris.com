/* apply the saved theme before first paint; the site defaults to dark */
(function () {
  try {
    var stored = localStorage.getItem('janyris-theme');
    if (stored === 'light' || stored === 'dark') {
      document.documentElement.setAttribute('data-theme', stored);
    }
  } catch (e) {}
})();
