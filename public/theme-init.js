(function () {
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.classList.add('js');
})();