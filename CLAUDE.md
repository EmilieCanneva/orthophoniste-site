# Site vitrine — Emilie Canneva, orthophoniste à Vannes

Site statique hébergé gratuitement sur GitHub Pages : https://emiliecanneva.github.io/orthophoniste-site/

Fichiers :
- `index.html` — page principale (accueil, troubles pris en charge, mes services, parcours à suivre, PAP et école, à propos, questions fréquentes, témoignages, contact).
- `ressources.html` — page Ressources (jeux de langage, fiches, liens utiles).
- `style.css` — styles communs aux deux pages. Couleurs dans `:root` en haut du fichier.
- `script.js` — bouton FR / EN (le titre anglais d'une page est dans `data-title-en` sur `<html>`).
- `photo.jpg` (accueil, carré) et `portrait.jpg` (à propos, 4:5).

Règles :
- Site bilingue : chaque texte existe deux fois, `class="fr"` et `class="en"`. Toujours mettre à jour les deux.
- Ne jamais écrire que les séances ou rééducations se font en anglais : Emilie est bilingue mais rééduque en français.
- Témoignages : uniquement de vraies familles, avec leur accord écrit. Ne jamais en inventer.
- Référencement local : garder « Orthophoniste Vannes », « Morbihan », « troubles du neurodéveloppement » et « développement du langage oral et écrit en milieu bilingue » dans les titres et textes.
- L'en-tête (menu) est dupliqué dans les deux pages HTML : le modifier aux deux endroits.
- Garder le site responsive (tester à 375 px de large).
- Après une modification : `git add . && git commit -m "..." && git push` — le site se met à jour en 1–2 min.
