# Kingshot — Vikings

Page statique adaptée au mobile : stratégie des Vikings et messages traduits en français, anglais et espagnol, avec traduction intégrale du site et copie en un clic.

- **Comprendre et se préparer** : neuf messages dans leur ordre logique (principe et points avec exemple, préparation, renforts, règle du soin et du feu, dernière vérification, vagues 10 et 20, rapports et récapitulatif de l’événement).
- **Pendant l’événement** : onze messages (consignes et GO des vagues 10 et 20 avec leurs rappels, ainsi qu'un rappel final sur l'interdiction de soigner et d'éteindre le feu).

Le sélecteur de langue situé dans la barre supérieure (`FR` / `EN` / `ES`) traduit l'ensemble du site et des messages. Sur chaque carte de message, les boutons de copie s'adaptent selon la langue choisie :
- En **FR** : boutons de copie **FR** et **EN**
- En **ES** : boutons de copie **ES** et **EN**
- En **EN** : bouton de copie **EN** uniquement

Les consignes reprennent les captures et indications fournies par le R4. Les 200 000 renforts sont un repère de son alliance, à ajuster selon les rapports. L’explication des points renvoie au guide communautaire cité sur la page ; l’exemple porte sur des éliminations, sans inventer de barème de points. Copier un message ne déclenche aucun envoi dans Kingshot.

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

Le workflow publie les fichiers publics du site (HTML, CSS, JS, logo et favicons). Les chemins relatifs permettent un hébergement sous le nom du dépôt.

## Modifier les messages et traductions

Les messages et leurs traductions (`fr`, `en`, `es` avec `title`, `titleEn`, `titleEs`) ainsi que le dictionnaire d'interface (`uiTranslations`) sont regroupés dans `app.js`. Les styles se trouvent dans `style.css` et le balisage initial dans `index.html`. La copie inclut le titre, une ligne vide, puis le texte du message. Le titre, les sauts de ligne et le texte doivent tenir dans la limite de 512 caractères du chat.
