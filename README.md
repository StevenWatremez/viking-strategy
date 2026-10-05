# Kingshot — Vikings

Page statique adaptée au mobile : stratégie des Vikings et messages traduits en français, anglais, espagnol, portugais du Brésil, arabe, polonais, turc, chinois traditionnel et chinois simplifié, avec traduction intégrale du site et copie en un clic.

- **Comprendre et se préparer** : dix messages dans leur ordre logique (principe et points avec exemple, préparation de la ville, sortie des troupes, préparation collective, renforts, règle du soin et du feu, dernière vérification, vagues 10 et 20, rapports et récapitulatif de l’événement).
- **Pendant l’événement** : onze messages (consignes et GO des vagues 10 et 20 avec leurs rappels, ainsi qu'un rappel final sur l'interdiction de soigner et d'éteindre le feu).

Le sélecteur de langue sous forme de menu déroulant compact situé dans la barre supérieure (`FR` / `EN` / `ES` / `PT-BR` / `العربية` / `PL` / `TR` / `繁中` / `简中`) traduit l'ensemble du site et des messages, et adapte la direction d'écriture (LTR / RTL). Sur chaque carte de message, les boutons de copie s'adaptent selon la langue choisie :
- En **FR** : boutons de copie **FR** et **EN**
- En **ES** : boutons de copie **ES** et **EN**
- En **PT-BR** : boutons de copie **PT-BR** et **EN**
- En **AR** (العربية) : boutons de copie **العربية** et **EN**
- En **PL** : boutons de copie **PL** et **EN**
- En **TR** : boutons de copie **TR** et **EN**
- En **ZH-TW** (繁中) : boutons de copie **繁中** et **EN**
- En **ZH-CN** (简中) : boutons de copie **简中** et **EN**
- En **EN** : bouton de copie **EN** uniquement

Les consignes reprennent les captures et indications fournies par le R4. Les 200 000 renforts sont un repère de son alliance, à ajuster selon les rapports. L’explication des points renvoie au guide communautaire cité sur la page ; l’exemple porte sur des éliminations, sans inventer de barème de points. Copier un message ne déclenche aucun envoi dans Kingshot.

La section **Sortir ses troupes** explique la priorité infanterie/cavalerie, puis la sortie des archers selon la capacité des marches et la couverture défensive. Le test au niveau 11 et la surveillance des vagues 16 à 19 sont des consignes d’alliance : viser 0 élimination par ses propres troupes chez soi tout en éliminant 100 % des Vikings, puis ajuster avec le R4. Le calendrier des prochains niveaux est une estimation de l’alliance, pas une annonce officielle. Les guides communautaires Kingshot Guides et 9to5Gaming sont cités dans cette section, traduite dans les neuf langues du site.

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

Les messages et leurs traductions (`fr`, `en`, `es`, `pt-BR`, `ar`, `pl`, `tr`, `zh-TW`, `zh-CN` avec `title`, `titleEn`, `titleEs`, `titlePtBr`, `titleAr`, `titlePl`, `titleTr`, `titleZhTw`, `titleZhCn`) ainsi que le dictionnaire d'interface (`uiTranslations`) sont regroupés dans `app.js`. Les styles se trouvent dans `style.css` et le balisage initial dans `index.html`. La copie inclut le titre, une ligne vide, puis le texte du message. Le titre, les sauts de ligne et le texte doivent tenir dans la limite de 512 caractères du chat.
