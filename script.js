// Langue FR / EN : le choix est mémorisé dans le navigateur du visiteur.
// Le titre anglais de chaque page est dans l'attribut data-title-en de <html>.
(function () {
  var html = document.documentElement;
  var titleFr = document.title;
  var titleEn = html.getAttribute('data-title-en') || titleFr;

  function setLang(l) {
    html.lang = l;
    document.title = (l === 'en') ? titleEn : titleFr;
    var btn = document.getElementById('lang-btn');
    if (btn) btn.textContent = (l === 'fr') ? 'EN' : 'FR';
    try { localStorage.setItem('lang', l); } catch (e) {}
  }
  window.toggleLang = function () { setLang(html.lang === 'fr' ? 'en' : 'fr'); };

  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  var fromUrl = new URLSearchParams(location.search).get('lang');
  setLang(fromUrl === 'en' || fromUrl === 'fr' ? fromUrl : (saved === 'en' ? 'en' : 'fr'));

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
