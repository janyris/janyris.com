/* show the path the visitor actually asked for */
(function () {
  var el = document.getElementById('missingPath');
  if (el) el.textContent = location.pathname;
})();
