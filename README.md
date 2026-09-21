# Kingshot — Vikings

Page statique adaptée au mobile pour coordonner les vagues 10 et 20 : stratégie d’alliance, huit messages en français et en anglais, copie en un clic et navigation par étape.

Les consignes reprennent les captures fournies par le R4. Elles décrivent la stratégie de son alliance et ne constituent pas une vérification indépendante des règles du jeu. Le passage à l’étape suivante ne déclenche aucun envoi dans Kingshot.

## Aperçu local

Depuis ce dossier :

```sh
python3 -m http.server 8080
```

Ouvrir http://localhost:8080. Aucun outil de compilation ni installation nécessaire. Les polices Google sont facultatives : des polices système prennent le relais sans accès réseau.

## Publication sur GitHub Pages

1. Créer un dépôt GitHub et y envoyer les fichiers sur la branche `main`.
2. Dans **Settings → Pages → Build and deployment → Source**, choisir **GitHub Actions**.
3. Dans **Actions**, lancer **Publish GitHub Pages** (ou pousser une nouvelle modification sur `main`).

Le workflow publie uniquement les quatre fichiers publics. Les chemins relatifs permettent un hébergement sous le nom du dépôt.

## Modifier les messages

Les huit messages et leurs traductions sont regroupés au début de `app.js`. Les styles se trouvent dans `style.css` et le résumé de stratégie dans `index.html`. La copie concerne uniquement le texte du message, sans son titre.
