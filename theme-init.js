/* apply the saved theme before first paint; the site defaults to dark.
   the .js class hides the static crawler copy of the content (see scripts/build.py) */
(function () {
  document.documentElement.classList.add('js');
  try {
    var stored = localStorage.getItem('janyris-theme');
    if (stored === 'light' || stored === 'dark') {
      document.documentElement.setAttribute('data-theme', stored);
    }
  } catch (e) {}
})();
