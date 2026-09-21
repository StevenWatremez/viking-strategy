# Kingshot — Vikings

Page statique adaptée au mobile : stratégie des Vikings et messages en français et en anglais, organisés en deux parties avec copie en un clic.

- **Comprendre et se préparer** : cinq fiches par sujet (principe et points, préparation, renforts, rapports, vagues 10 et 20), chacune accompagnée d’une astuce courte copiable séparément en FR ou EN. Les deux checklists de préparation et l’exemple sur les points restent disponibles dans « À envoyer si besoin ».
- **Pendant l’événement** : les huit messages d’origine des vagues 10 et 20, dans leur ordre (consignes, organisation au QG, attente chez les alliés, GO rappel, GO entrée QG, attente au QG, GO sortie QG, GO renforts). Les deux variantes courtes d’attente restent accessibles dans « À envoyer si besoin ».

Tous les messages de la catégorie choisie sont affichés directement en liste, avec des boutons de copie FR/EN sur chaque carte. Les astuces restent associées à leur sujet. Chaque message indique quand l’envoyer. Ces indications servent au R4 et ne sont pas copiées dans le chat. Les fiches d’apprentissage ne sont pas une série à republier intégralement à chaque événement.

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

Le workflow publie uniquement les quatre fichiers publics. Les chemins relatifs permettent un hébergement sous le nom du dépôt.

## Modifier les messages

Les messages, leurs traductions, les indications `when`, les astuces `tip` et les compléments `extraMessages` sont regroupés au début de `app.js`. Les styles se trouvent dans `style.css` et le résumé de stratégie dans `index.html`. La copie inclut le titre (`title` en FR, `titleEn` en EN), une ligne vide, puis le texte du message ou de l’astuce. L’indication « Quand l’envoyer » reste réservée au guide. Le titre, les sauts de ligne et le texte doivent tenir dans la limite de 512 caractères du chat.
