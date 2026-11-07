# Site vitrine — orthophoniste

Site d'une seule page, hébergé gratuitement sur GitHub Pages.

- Tout est dans `index.html` (HTML + CSS + un peu de JS). Pas de build, pas de framework.
- Les couleurs sont des variables CSS en haut du `<style>` (`:root`).
- Les textes à remplacer sont entre crochets `[ ... ]`.
- Les images (photo, portrait) vont à la racine du dépôt, référencées par `<img src="photo.jpg">`.
- Sections : accueil, prises en charge, à propos, déroulement, contact, mentions légales.

Règles :
- Rester en français, ton chaleureux et professionnel.
- Pas d'avis/témoignages patients ni de promesses de résultat (déontologie des professions de santé).
- Garder le site responsive (tester à 375 px de large).
- Après une modification : `git add . && git commit -m "..." && git push` — le site se met à jour en 1–2 min.
