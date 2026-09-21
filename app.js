const explanationMessages = [
  { title: 'Le principe et les points', titleEn: 'The basics and points', titleEs: 'El principio y los puntos', short: 'Principe et points', tag: 'COMPRENDRE', tone: 'wait',
    fr: '🛡️ Vikings : on se défend les uns les autres ! Vos troupes renforcent les alliés ; leurs renforts défendent votre ville. Vous gardez les points de défense des Vikings tués chez vous, même par les renforts. Vos troupes peuvent aussi marquer chez les autres. Des troupes restées chez vous prennent des éliminations aux renforts et réduisent les points de vos alliés.',
    en: '🛡️ Vikings: we defend each other! Your troops reinforce allies; their reinforcements defend your city. You keep defense points for Vikings killed at home, even by reinforcements. Your troops can also score at other cities. Troops left at home take kills from reinforcements, reducing your allies’ points.',
    es: '🛡️ ¡Vikingos: nos defendemos entre todos! Tus tropas refuerzan a los aliados; sus refuerzos defienden tu ciudad. Conservas los puntos de defensa de los vikingos eliminados en tu ciudad, incluso por los refuerzos. Tus tropas también pueden puntuar con otros. Las tropas que dejas en casa quitan bajas a los refuerzos y reducen los puntos de tus aliados.' },
  { title: 'Exemple : les points', titleEn: 'Example: points', titleEs: 'Ejemplo: los puntos',
    fr: '📊 Sur 1 000 Vikings tués dans votre ville : si les renforts font tout, ils se partagent 1 000 éliminations. Si vos troupes en font 300, il n’en reste que 700 pour les alliés. Vous gardez les points de défense dans les deux cas. Ce sont des nombres de Vikings, pas un barème de points.',
    en: '📊 Out of 1,000 Vikings killed in your city: if reinforcements do all the work, they share 1,000 kills. If your own troops get 300, only 700 remain for allies. You keep defense points in both cases. These are Viking counts, not point values.',
    es: '📊 De 1 000 vikingos eliminados en tu ciudad: si los refuerzos hacen todo, se reparten 1 000 bajas. Si tus tropas hacen 300, solo quedan 700 para los aliados. Conservas los puntos de defensa en ambos casos. Son cantidades de vikingos, no una escala de puntos.' },
  { title: 'Préparer sa ville', titleEn: 'Prepare your city', titleEs: 'Preparar la ciudad', short: 'Héros et troupes', tag: 'COMPRENDRE', tone: 'wait',
    fr: '🦸 Gardez vos 3 meilleurs héros en ville et bloquez-les au poste de commandement pour éviter de les envoyer par erreur. Sortez TOUTES vos troupes pour renforcer les alliés et faites défendre votre ville par leurs renforts. Garder ses héros ne veut pas dire garder ses troupes ! Surveillez aussi les troupes revenues chez vous pendant l’événement.',
    en: '🦸 Keep your 3 best heroes in your city and lock them in the Command Center to avoid sending them by mistake. Send ALL your troops to reinforce allies and let their reinforcements defend your city. Keeping heroes does not mean keeping troops at home! Also watch for troops returning home during the event.',
    es: '🦸 Mantén tus 3 mejores héroes en la ciudad y bloquéalos en el puesto de mando para no enviarlos por error. Saca TODAS tus tropas para reforzar aliados y deja que sus refuerzos defiendan tu ciudad. ¡Guardar héroes no significa guardar tropas! Vigila también las tropas que regresen a casa durante el evento.' },
  { title: 'Préparez vos villes', titleEn: 'Prepare your cities', titleEs: 'Preparad vuestras ciudades', short: 'Préparation', tag: 'AVANT / 1', tone: 'wait',
    fr: '⚔️ VIKINGS — Préparez vos villes :\n✅ Vos 3 meilleurs héros bloqués au poste de commandement.\n✅ TOUTES vos troupes envoyées chez les alliés.\n✅ Votre ville défendue par leurs renforts.\nVikings → Membres : aidez d’abord les joueurs en ligne peu renforcés, puis les autres villes dans le besoin.',
    en: '⚔️ VIKINGS — Prepare your cities:\n✅ Your 3 best heroes locked in the Command Center.\n✅ ALL your troops sent to allies.\n✅ Your city defended by their reinforcements.\nVikings → Members: help online players with few reinforcements first, then other cities in need.',
    es: '⚔️ VIKINGOS — Preparad vuestras ciudades:\n✅ Vuestros 3 mejores héroes bloqueados en el puesto de mando.\n✅ TODAS vuestras tropas enviadas a los aliados.\n✅ Vuestra ciudad defendida por sus refuerzos.\nVikingos → Miembros: ayudad primero a los jugadores en línea poco reforzados y luego a las demás ciudades necesitadas.' },
  { title: 'Répartir les renforts', titleEn: 'Distribute reinforcements', titleEs: 'Repartir los refuerzos', short: 'Qui renforcer ?', tag: 'COMPRENDRE', tone: 'wait',
    fr: '🤝 Vikings → Membres : regardez qui est en ligne, les renforts reçus et qui vous renforcez déjà. Aidez d’abord les membres en ligne peu renforcés, puis les autres villes qui en ont besoin. Notre repère : ~200 000 renforts AU TOTAL par ville, pas par personne. Ajustez selon la force des troupes, la difficulté, les rapports et les consignes du R4.',
    en: '🤝 Vikings → Members: check who is online, incoming reinforcements, and whom you already reinforce. Help online members with few reinforcements first, then other cities in need. Our guideline: ~200,000 reinforcements IN TOTAL per city, not per person. Adjust for troop strength, difficulty, reports, and R4 instructions.',
    es: '🤝 Vikingos → Miembros: mirad quién está en línea, los refuerzos recibidos y a quién reforzáis ya. Ayudad primero a los miembros en línea poco reforzados, luego a las otras ciudades necesitadas. Nuestra referencia: ~200 000 refuerzos EN TOTAL por ciudad, no por persona. Ajustad según la fuerza de tropas, dificultad, informes y órdenes del R4.' },
  { title: 'Dernière vérification', titleEn: 'Final check', titleEs: 'Última comprobación', short: 'Avant le départ', tag: 'AVANT / 2', tone: 'wait',
    fr: '🛡️ VIKINGS — Dernière vérification :\n✅ Aucune de vos troupes restée chez vous.\n✅ Villes couvertes : repère ~200 000 renforts AU TOTAL par ville, à ajuster selon les rapports. Signalez les manques au R4.\n✅ Vagues 10/20 : aucun déplacement sans GO du R4. Entrée au QG après Raagui ; retour chez les mêmes alliés.',
    en: '🛡️ VIKINGS — Final check:\n✅ None of your own troops left at home.\n✅ Cities covered: guideline ~200,000 reinforcements IN TOTAL per city, adjusted using reports. Tell the R4 about gaps.\n✅ Waves 10/20: no moves without the R4’s GO. Enter HQ after Raagui; return to the same allies.',
    es: '🛡️ VIKINGOS — Última comprobación:\n✅ Ninguna de tus tropas en casa.\n✅ Ciudades cubiertas: referencia ~200 000 refuerzos EN TOTAL por ciudad, ajustada según informes. Avisad de las faltas al R4.\n✅ Oleadas 10/20: ningún movimiento sin GO del R4. Entrada al CG tras Raagui; vuelta con los mismos aliados.' },
  { title: 'Comprendre les vagues 10 et 20', titleEn: 'Understand waves 10 and 20', titleEs: 'Entender las oleadas 10 y 20', short: 'Vagues 10 et 20', tag: 'COMPRENDRE', tone: 'wait',
    fr: '🏰 Vagues 10/20 : restez chez vos alliés jusqu’au GO RAPPEL. Attendez ensuite Raagui au QG et le GO QG pour le rejoindre. Restez au QG jusqu’au GO SORTIE, puis attendez le GO RENFORTS pour retourner chez les mêmes alliés. Le R4 vérifie les rapports et la carte avant les départs : un timer terminé ne suffit pas !',
    en: '🏰 Waves 10/20: stay at your allies’ cities until GO RECALL. Then wait for Raagui to reach HQ and for GO HQ before joining him. Stay at HQ until GO LEAVE HQ, then wait for GO REINFORCE to return to the same allies. The R4 checks reports and the map before departures: a finished timer is not enough!',
    es: '🏰 Oleadas 10/20: quedaos con vuestros aliados hasta el GO RETIRADA. Esperad luego a Raagui en el CG y el GO CG para uniros. Quedaos en el CG hasta el GO SALIDA, luego esperad el GO REFUERZOS para volver con los mismos aliados. El R4 revisa informes y mapa antes de partir: ¡un temporizador terminado no basta!' },
  { title: 'Lire les rapports', titleEn: 'Read the reports', titleEs: 'Leer los informes', short: 'Les deux contrôles', tag: 'COMPRENDRE', tone: 'wait',
    fr: '🔎 Après une attaque, contrôlez le rapport : 1️⃣ Votre joueur doit faire 0 élimination dans votre ville ; sinon, vérifiez les troupes restées ou revenues chez vous. 2️⃣ En haut à droite, visez 100 % des Vikings éliminés au total ; en dessous, signalez la ville au R4 pour ajuster les renforts. Respectez les GO pour déplacer les troupes déjà en place.',
    en: '🔎 After an attack, check the report: 1️⃣ Your player should have 0 kills in your city; otherwise, check for troops left at home or returning there. 2️⃣ At the top right, aim for 100% of Vikings killed overall; if lower, tell the R4 so reinforcements can be adjusted. Follow the GO signals before moving troops already in position.',
    es: '🔎 Tras un ataque, revisad el informe: 1️⃣ Tu jugador debe hacer 0 bajas en tu ciudad; si no, revisa las tropas que quedaron o volvieron. 2️⃣ Arriba a la derecha, buscad el 100 % de vikingos eliminados en total; si es menos, avisad al R4 para ajustar refuerzos. Respetad los GO para mover tropas ya colocadas.' }
];

const coordinationMessages = [
  { title: 'Consignes avant les vagues', titleEn: 'Instructions before the waves', titleEs: 'Instrucciones antes de las oleadas', short: 'Les consignes', tag: 'PRÉPARATION', tone: 'wait',
    fr: '⚔️ Vagues 10 et 20 : suivez mes GO pour chaque déplacement ! Ne retirez pas vos renforts trop tôt : ils pourraient manquer l’attaque des Vikings chez votre allié. Les timers d’arrivée sont trompeurs : vérifiez les rapports de combat et la carte. Un timer terminé ne suffit pas pour partir !',
    en: '⚔️ Waves 10 & 20: wait for my GO before each move! Do not recall reinforcements too early: they could miss the Viking attack at your ally’s city. Arrival timers are misleading: check battle reports and the map. A finished timer alone does not mean you can leave!',
    es: '⚔️ Oleadas 10 y 20: ¡seguid mis GO en cada movimiento! No retiréis vuestros refuerzos antes de tiempo: podrían perderse el ataque vikingo en la ciudad aliada. Los temporizadores de llegada engañan: revisad los informes y el mapa. ¡Un temporizador terminado no basta para marcharse!' },
  { title: 'Organisation au QG', titleEn: 'HQ organization', titleEs: 'Organización en el CG', short: 'Organisation au QG', tag: 'PRÉPARATION', tone: 'wait',
    fr: '🏰 Pour les vagues 10 et 20, nous attendons que Raagui soit arrivé au QG avant de le rejoindre. Je donnerai le GO pour entrer, puis le GO pour sortir après l’attaque. Ensuite, retournez renforcer le même allié qu’avant. Aucun déplacement sans mon signal !',
    en: '🏰 For waves 10 & 20, we wait until Raagui has arrived at HQ before joining him. I will give the GO to enter, then the GO to leave after the attack. Afterwards, return to reinforce the same ally as before. No moves without my signal!',
    es: '🏰 Para las oleadas 10 y 20, esperamos a que Raagui llegue al CG antes de unirnos. Daré el GO para entrar, luego el GO para salir tras el ataque. Después, volved a reforzar al mismo aliado que antes. ¡Ningún movimiento sin mi señal!' },
  { title: 'Rappel avant le déplacement', titleEn: 'Reminder before moving', titleEs: 'Recordatorio antes del movimiento', short: 'Maintenir les renforts', tag: 'ATTENDRE', tone: 'wait',
    fr: '✋ Gardez vos renforts chez vos alliés ! Ne vous fiez pas uniquement aux timers : l’attaque peut encore être en route. Nous vérifions les rapports et la carte avant de bouger. Attendez mon GO pour rappeler vos troupes.',
    en: '✋ Keep your reinforcements at your allies’ cities! Do not rely only on timers: the attack may still be on its way. We are checking reports and the map before moving. Wait for my GO to recall your troops.',
    es: '✋ ¡Mantened vuestros refuerzos con vuestros aliados! No os fiéis solo de los temporizadores: el ataque aún puede estar en camino. Revisamos los informes y el mapa antes de movernos. Esperad mi GO para retirar vuestras tropas.' },
  { title: 'Maintenir les renforts', titleEn: 'Keep reinforcements in place', titleEs: 'Mantener los refuerzos',
    fr: '✋ Gardez vos renforts chez vos alliés. Attendez mon GO RAPPEL : un timer terminé ne confirme pas la fin de l’attaque.',
    en: '✋ Keep your reinforcements at your allies’ cities. Wait for my GO RECALL: a finished timer does not confirm the attack is over.',
    es: '✋ Mantened los refuerzos con vuestros aliados. Esperad mi GO RETIRADA: un temporizador terminado no confirma el fin del ataque.' },
  { title: 'GO pour retirer les renforts', titleEn: 'GO RECALL', titleEs: 'GO RETIRADA', short: 'GO rappel', tag: 'RAPPELER', tone: 'go',
    fr: '🟢 GO RAPPEL ! Retirez vos renforts de chez vos alliés. 🛑 N’entrez pas encore au QG : nous attendons l’arrivée de Raagui et mon prochain GO !',
    en: '🟢 GO RECALL! Recall your reinforcements from your allies’ cities. 🛑 Do not enter HQ yet: wait for Raagui to arrive and for my next GO!',
    es: '🟢 ¡GO RETIRADA! Retirad los refuerzos de vuestros aliados. 🛑 ¡No entréis al CG todavía: esperamos la llegada de Raagui y mi próximo GO!' },
  { title: 'GO pour entrer au QG', titleEn: 'GO HQ', titleEs: 'GO CG', short: 'GO entrée QG', tag: 'REJOINDRE', tone: 'go',
    fr: '🟢 GO QG ! Raagui est arrivé : envoyez maintenant vos renforts au QG ! Restez jusqu’à mon GO de sortie, même si le timer semble terminé.',
    en: '🟢 GO HQ! Raagui has arrived: send your reinforcements to HQ now! Stay until my GO to leave, even if the timer appears to have finished.',
    es: '🟢 ¡GO CG! Raagui ha llegado: ¡enviad ya vuestros refuerzos al CG! Quedaos hasta mi GO de salida, aunque el temporizador parezca terminado.' },
  { title: 'Attendre l’attaque au QG', titleEn: 'Wait for the HQ attack', titleEs: 'Esperar el ataque en el CG', short: 'Tenir le QG', tag: 'ATTENDRE', tone: 'stop',
    fr: '🛑 Restez au QG ! Ne retirez pas vos troupes sur la seule base du timer. Nous attendons la confirmation de l’attaque dans les rapports et sur la carte. Je donne le GO dès que vous pouvez sortir.',
    en: '🛑 Stay at HQ! Do not recall your troops based only on the timer. We are waiting for confirmation of the attack in reports and on the map. I will give the GO when you can leave.',
    es: '🛑 ¡Quedaos en el CG! No retiréis vuestras tropas basándoos solo en el temporizador. Esperamos la confirmación del ataque en los informes y el mapa. Daré el GO en cuanto podáis salir.' },
  { title: 'Tenir le QG', titleEn: 'Hold HQ', titleEs: 'Mantener la posición en el CG',
    fr: '🛑 Restez au QG jusqu’à mon GO SORTIE. Nous attendons la confirmation de l’attaque dans les rapports et sur la carte.',
    en: '🛑 Stay at HQ until my GO LEAVE HQ. We are waiting for confirmation of the attack in reports and on the map.',
    es: '🛑 Quedaos en el CG hasta mi GO SALIDA. Esperamos la confirmación del ataque en los informes y en el mapa.' },
  { title: 'GO pour sortir du QG', titleEn: 'GO LEAVE HQ', titleEs: 'GO SALIDA CG', short: 'GO sortie QG', tag: 'SORTIR', tone: 'go',
    fr: '🟢 GO SORTIE QG ! L’attaque est confirmée, rappelez vos troupes maintenant. Préparez-vous à retourner chez le même allié que vous renforciez avant !',
    en: '🟢 GO LEAVE HQ! The attack is confirmed: recall your troops now. Get ready to return to the same ally you were reinforcing before!',
    es: '🟢 ¡GO SALIDA CG! Ataque confirmado, retirad vuestras tropas ahora. ¡Preparaos para volver con el mismo aliado que reforzabais antes!' },
  { title: 'GO pour renforcer à nouveau', titleEn: 'GO REINFORCE', titleEs: 'GO REFUERZOS', short: 'GO renforts', tag: 'RENFORCER', tone: 'go',
    fr: '🟢 GO RENFORTS ! Dès que vos troupes sont rentrées, renvoyez-les chez le même allié qu’avant. Faites vite pour être en place avant la prochaine attaque ! 🛡️',
    en: '🟢 GO REINFORCE! As soon as your troops return, send them back to the same ally as before. Move quickly to be in position before the next attack! 🛡️',
    es: '🟢 ¡GO REFUERZOS! En cuanto vuelvan vuestras tropas, reenviadlas al mismo aliado que antes. ¡Daos prisa para estar listos antes del siguiente ataque! 🛡️' }
];

const uiTranslations = {
  fr: {
    pageTitle: 'Vikings — Poste de commandement',
    metaDesc: 'Stratégie Vikings : préparer sa ville, comprendre les points, répartir les renforts et coordonner les vagues 10 et 20.',
    skip: 'Aller aux messages',
    role: 'GUIDE R4',
    langAria: 'Langue du site',
    introEyebrow: 'COORDINATION D’ALLIANCE',
    introH1: 'Chaque mouvement.<br><em>Au bon signal.</em>',
    introCopy: 'La stratégie et les messages pour garder l’alliance synchronisée pendant les Vikings.',
    waveAria: 'Vagues 10 et 20',
    waveMarkSpan: 'VAGUES QG',
    waveMarkSmall: 'Un seul mot d’ordre : attendre le GO.',
    pageNavAria: 'Navigation du guide',
    navCityGuide: 'Préparer les villes',
    navReinforcements: 'Qui renforcer ?',
    navPoints: 'Comprendre les points',
    navMessages: 'Messages à copier',
    cityEyebrow: 'LA STRATÉGIE DES VILLES',
    cityTitle: 'Tes héros à la maison.<br> Tes troupes chez tes alliés.',
    cityLead: 'Chacun envoie ses troupes renforcer les autres et reçoit des renforts pour défendre sa ville. Le but : protéger toute l’alliance et permettre à chacun de marquer des points.',
    card1Eyebrow: '01 / PRÉPARER',
    card1Title: 'Garde tes 3 meilleurs héros',
    card1Body: 'Laisse tes trois meilleurs héros dans ta ville. Dans le <strong>poste de commandement</strong>, bloque-les pour éviter de les déployer par erreur avec tes marches.',
    card2Eyebrow: '02 / INDISPENSABLE',
    card2Title: 'Sors toutes tes troupes',
    card2Body: '<p>Envoie tes troupes en renfort chez tes alliés et fais défendre ta ville par leurs renforts. <strong>Garder tes héros ne veut pas dire garder tes troupes.</strong></p><p>Des troupes restées chez toi peuvent tuer des Vikings à la place des renforts : tes alliés perdent alors des occasions de marquer des points.</p>',
    card3Eyebrow: '03 / RÉPARTIR',
    card3Title: 'Choisis qui renforcer',
    card3Body: '<p>La liste <strong>Membres</strong> de l’événement permet de voir qui est en ligne, qui manque de renforts et qui tu renforces déjà.</p><p><a href="#reinforcements">Voir comment utiliser cette liste →</a></p>',
    card4Eyebrow: '04 / DIMENSIONNER',
    card4Title: 'Vise 200 000 renforts par ville',
    card4Body: 'C’est notre repère d’alliance pour tenir jusqu’au bout : <strong>200 000 au total dans une ville</strong>, pas 200 000 par personne qui la renforce.<p>Ajuste selon la force des troupes, la difficulté et les rapports. Une ville déjà bien couverte peut laisser la priorité à une ville moins renforcée.</p>',
    reinfEyebrow: 'DANS LE JEU / PAGE DE L’ÉVÉNEMENT',
    reinfTitle: 'Qui est en ligne ? Qui je renforce ? Qui aider ?',
    reinfPath: 'Ouvre l’événement <strong>Vikings</strong> → appuie sur <strong>Membres</strong>.',
    reinfLead: 'Cette liste te donne une vue d’ensemble de l’alliance. Avant d’envoyer une marche, croise ces trois informations :',
    reinfCheck1: '<strong>Qui est en ligne ?</strong><p>Regarde le statut de connexion de chaque membre. Repère les joueurs en ligne pour identifier ceux à aider en priorité lorsqu’ils manquent de renforts.</p>',
    reinfCheck2: '<strong>Qui est déjà bien renforcé ?</strong><p>Compare le niveau de renforcement des villes. Notre repère est de <strong>200 000 troupes de renfort au total par ville</strong> : cherche d’abord celles qui sont peu ou pas renforcées, puis ajuste selon leurs rapports.</p>',
    reinfCheck3: '<strong>Qui est-ce que je renforce déjà ?</strong><p>Consulte les renforts que tu as déjà envoyés dans cette même liste. Repère leurs destinataires avant de choisir où envoyer une autre marche : l’objectif est de répartir l’aide entre les membres.</p>',
    reinfBoxTitle: 'Comment choisir ta prochaine destination ?',
    reinfBoxBody: '<p><strong>D’abord, un membre en ligne qui manque de renforts.</strong> Si les membres en ligne sont déjà bien couverts, aide les autres villes qui en ont besoin. Évite de concentrer toutes les marches sur une ville alors qu’une autre reste sans aide.</p><p>Par exemple, entre deux membres en ligne, l’un avec 80 000 renforts et l’autre avec 200 000, complète en priorité celui à 80 000, sauf consigne du R4 ou rapport montrant un besoin différent.</p>',
    reinfTakeaway: 'Reviens régulièrement dans Événement → Membres pour suivre la répartition. Pour déplacer des renforts déjà en place, vérifie les rapports et respecte les GO du R4.',
    pointsEyebrow: 'POURQUOI VIDER SA VILLE ?',
    pointsTitle: 'Une défense, deux sources de points.',
    pointsBody: '<p>Tu marques des points pour les Vikings tués dans ta ville, y compris par les renforts. Tes troupes peuvent aussi marquer des points de renfort chez tes alliés.</p><p><strong>Faire défendre ta ville par les autres ne te retire donc pas tes points de défense.</strong> Si tes propres troupes prennent les éliminations, elles réduisent les points de renfort disponibles pour ceux qui sont venus t’aider.</p>',
    pointsExTitle: 'Exemple : 1 000 Vikings éliminés',
    pointsExBody: '<p><strong>Ta ville est vide de tes troupes :</strong> les renforts éliminent les 1 000 Vikings. Tu obtiens les points de défense correspondants ; les alliés gagnent des points pour leurs éliminations.</p><p><strong>Tes troupes en éliminent 300 :</strong> il ne reste que 700 Vikings à éliminer pour les renforts. Pour le même total de 1 000 Vikings tués, tes alliés ont moins d’occasions de marquer.</p><small>Exemple illustratif en nombre d’éliminations, pas un barème de points. La valeur en points dépend de la vague et de la difficulté.</small>',
    reportEyebrow: '05 / CONTRÔLER APRÈS L’ATTAQUE',
    reportTitle: 'Le rapport donne deux réponses.',
    reportCol1: '<strong>Mes propres troupes ont-elles tué des Vikings ?</strong><p>Regarde la ligne de ton joueur dans le détail des éliminations. L’objectif est <strong>0 élimination par tes propres troupes dans ta ville</strong>. Si tu en vois, vérifie les troupes restées ou revenues chez toi et renvoie-les en renfort selon les consignes.</p>',
    reportCol2: '<strong>100 % des Vikings ont-ils été tués ?</strong><p>Vérifie le pourcentage en haut à droite du rapport. L’objectif est <strong>100 % d’éliminations au total par les défenseurs</strong>. En dessous, signale la ville pour ajuster ses renforts avec le R4.</p>',
    reportTakeaway: 'Le bon résultat : tes propres troupes font 0 élimination chez toi, les renforts en font 100 %.',
    citySourceNote: 'Consignes et repère de 200 000 renforts : stratégie de notre alliance. Mécanisme des points : <a href="https://kingshotguides.com/guide/viking-vengeance-expert-guide-beginner-to-advanced/">guide communautaire Kingshot Guides</a>. Pour les vagues 10 et 20, suis les GO du R4 ci-dessous.',
    asideEyebrow: 'LE PLAN DE BATAILLE',
    asideTitle: 'Aucun départ <br>sans signal.',
    strategyStep1: '<strong>Maintenir les renforts</strong><p>Vérifier les rapports et la carte avant de quitter les alliés.</p>',
    strategyStep2: '<strong>Rappeler au GO</strong><p>Retirer les renforts, puis attendre l’arrivée de Raagui au QG.</p>',
    strategyStep3: '<strong>Rejoindre le QG</strong><p>Entrer au second GO et rester jusqu’à la confirmation de l’attaque.</p>',
    strategyStep4: '<strong>Revenir chez l’allié</strong><p>Au GO de sortie, rappeler les troupes, puis renforcer le même allié au GO renforts.</p>',
    warningBody: '<strong>Le timer ne fait pas foi.</strong>Un timer terminé ne suffit pas : vérifier les rapports de combat et la carte.',
    asideSourceNote: 'Stratégie de l’alliance, issue des consignes R4 fournies.',
    messagesEyebrow: 'PRÊTS POUR LE CHAT',
    messagesTitle: 'Messages à copier',
    groupAria: 'Moment des messages',
    groupExplanations: '1. Comprendre et se préparer',
    groupCoordination: '2. Pendant l’événement',
    groupExplanationsHint: 'Choisis un sujet pour comprendre la stratégie, puis copie le message en français ou en anglais.',
    groupCoordinationHint: 'Les dix messages des vagues 10 et 20, dans l’ordre : consignes, organisation, attentes et GO. Copie chacun au bon moment.',
    copyToast: (lang) => `Message ${lang.toUpperCase()} copié. Prêt à coller dans le chat !`,
    copyUnavailable: 'Copie indisponible : sélectionne le texte pour le copier.',
    footerContent: '<span>KINGSHOT / VIKINGS</span><span>Les rapports. La carte. Puis le GO.</span>',
    noscript: 'Active JavaScript pour afficher et copier les messages rapides.'
  },
  en: {
    pageTitle: 'Vikings — Command Center',
    metaDesc: 'Viking Strategy: prepare your city, understand points, distribute reinforcements, and coordinate waves 10 and 20.',
    skip: 'Skip to messages',
    role: 'R4 GUIDE',
    langAria: 'Site language',
    introEyebrow: 'ALLIANCE COORDINATION',
    introH1: 'Every move.<br><em>On the right signal.</em>',
    introCopy: 'Strategy and messages to keep the alliance synchronized during Vikings.',
    waveAria: 'Waves 10 and 20',
    waveMarkSpan: 'HQ WAVES',
    waveMarkSmall: 'Only one rule: wait for the GO.',
    pageNavAria: 'Guide navigation',
    navCityGuide: 'Prepare cities',
    navReinforcements: 'Who to reinforce?',
    navPoints: 'Understand points',
    navMessages: 'Messages to copy',
    cityEyebrow: 'CITY STRATEGY',
    cityTitle: 'Your heroes at home.<br> Your troops with allies.',
    cityLead: 'Everyone sends troops to reinforce others and receives reinforcements to defend their city. The goal: protect the entire alliance and let everyone score points.',
    card1Eyebrow: '01 / PREPARE',
    card1Title: 'Keep your 3 best heroes',
    card1Body: 'Leave your three best heroes in your city. In the <strong>Command Center</strong>, lock them to avoid deploying them by mistake with your marches.',
    card2Eyebrow: '02 / ESSENTIAL',
    card2Title: 'Send all your troops out',
    card2Body: '<p>Send your troops to reinforce allies and let their reinforcements defend your city. <strong>Keeping heroes does not mean keeping troops.</strong></p><p>Troops left at home can kill Vikings instead of reinforcements: your allies then lose opportunities to score points.</p>',
    card3Eyebrow: '03 / DISTRIBUTE',
    card3Title: 'Choose who to reinforce',
    card3Body: '<p>The event’s <strong>Members</strong> list shows who is online, who lacks reinforcements, and who you are already reinforcing.</p><p><a href="#reinforcements">See how to use this list →</a></p>',
    card4Eyebrow: '04 / TARGET CAPACITY',
    card4Title: 'Aim for 200,000 reinforcements per city',
    card4Body: 'This is our alliance guideline to hold until the end: <strong>200,000 in total in a city</strong>, not 200,000 per reinforcing player.<p>Adjust according to troop strength, difficulty, and battle reports. A well-covered city should yield priority to a less reinforced one.</p>',
    reinfEyebrow: 'IN-GAME / EVENT PAGE',
    reinfTitle: 'Who is online? Who am I reinforcing? Who to help?',
    reinfPath: 'Open the <strong>Vikings</strong> event → tap <strong>Members</strong>.',
    reinfLead: 'This list gives you an overview of the alliance. Before sending a march, check these three pieces of information:',
    reinfCheck1: '<strong>Who is online?</strong><p>Check each member’s connection status. Spot online players to identify those who need priority help when lacking reinforcements.</p>',
    reinfCheck2: '<strong>Who is already well reinforced?</strong><p>Compare reinforcement levels across cities. Our benchmark is <strong>200,000 total reinforcement troops per city</strong>: look first for those with few or no reinforcements, then adjust based on reports.</p>',
    reinfCheck3: '<strong>Who am I already reinforcing?</strong><p>Check the reinforcements you have already sent in this same list. Identify recipients before deciding where to send another march: the goal is to distribute aid across members.</p>',
    reinfBoxTitle: 'How to choose your next destination?',
    reinfBoxBody: '<p><strong>First, an online member lacking reinforcements.</strong> If online members are already well covered, help other cities in need. Avoid stacking all marches on one city while another has no help.</p><p>For example, between two online members, one with 80,000 reinforcements and another with 200,000, prioritize topping up the one at 80,000, unless instructed otherwise by R4 or shown differently in reports.</p>',
    reinfTakeaway: 'Check Event → Members regularly to monitor distribution. To move existing reinforcements, check reports and follow R4 GO signals.',
    pointsEyebrow: 'WHY EMPTY YOUR CITY?',
    pointsTitle: 'One defense, two scoring sources.',
    pointsBody: '<p>You score points for Vikings killed in your city, including by reinforcements. Your troops can also score reinforcement points at allies’ cities.</p><p><strong>Having others defend your city does not take away your defense points.</strong> If your own troops take kills, they reduce the reinforcement points available to those who came to help you.</p>',
    pointsExTitle: 'Example: 1,000 Vikings defeated',
    pointsExBody: '<p><strong>Your city is empty of your troops:</strong> reinforcements defeat all 1,000 Vikings. You get the corresponding defense points; allies earn points for their kills.</p><p><strong>Your troops defeat 300:</strong> only 700 Vikings remain for reinforcements to kill. For the same 1,000 Vikings defeated, your allies have fewer scoring opportunities.</p><small>Illustrative example based on kill counts, not a points scale. Point value depends on wave and difficulty.</small>',
    reportEyebrow: '05 / CHECK AFTER ATTACK',
    reportTitle: 'The report answers two questions.',
    reportCol1: '<strong>Did my own troops kill Vikings?</strong><p>Check your player’s line in the kill details. The target is <strong>0 kills by your own troops in your city</strong>. If you see any, check for troops remaining or returned home and send them back as reinforcements according to instructions.</p>',
    reportCol2: '<strong>Were 100% of the Vikings killed?</strong><p>Check the percentage in the top right of the report. The target is <strong>100% total kills by defenders</strong>. If lower, report the city to adjust its reinforcements with the R4.</p>',
    reportTakeaway: 'The target result: your own troops get 0 kills at home, reinforcements get 100%.',
    citySourceNote: 'Instructions and 200,000 reinforcement guideline: our alliance strategy. Points mechanics: <a href="https://kingshotguides.com/guide/viking-vengeance-expert-guide-beginner-to-advanced/">Kingshot Guides community guide</a>. For waves 10 and 20, follow R4 GO signals below.',
    asideEyebrow: 'THE BATTLE PLAN',
    asideTitle: 'No departure <br>without a signal.',
    strategyStep1: '<strong>Hold reinforcements</strong><p>Check reports and the map before leaving allies.</p>',
    strategyStep2: '<strong>Recall on GO</strong><p>Recall reinforcements, then wait for Raagui to reach HQ.</p>',
    strategyStep3: '<strong>Join HQ</strong><p>Enter on the second GO and stay until attack confirmation.</p>',
    strategyStep4: '<strong>Return to ally</strong><p>On exit GO, recall troops, then reinforce the same ally on reinforcement GO.</p>',
    warningBody: '<strong>The timer is not definitive.</strong>A finished timer is not enough: check battle reports and the map.',
    asideSourceNote: 'Alliance strategy, based on provided R4 instructions.',
    messagesEyebrow: 'READY FOR CHAT',
    messagesTitle: 'Messages to copy',
    groupAria: 'Timing of messages',
    groupExplanations: '1. Understand and prepare',
    groupCoordination: '2. During the event',
    groupExplanationsHint: 'Choose a topic to understand strategy, then copy the message in English.',
    groupCoordinationHint: 'The ten wave 10 & 20 messages in order: instructions, setup, waiting, and GO. Copy each at the right time.',
    copyToast: (lang) => `${lang.toUpperCase()} message copied. Ready to paste in chat!`,
    copyUnavailable: 'Clipboard unavailable: please select text to copy.',
    footerContent: '<span>KINGSHOT / VIKINGS</span><span>Reports. Map. Then the GO.</span>',
    noscript: 'Enable JavaScript to view and copy quick messages.'
  },
  es: {
    pageTitle: 'Vikingos — Puesto de mando',
    metaDesc: 'Estrategia de Vikingos: prepara tu ciudad, comprende los puntos, distribuye refuerzos y coordina las oleadas 10 y 20.',
    skip: 'Ir a los mensajes',
    role: 'GUÍA R4',
    langAria: 'Idioma del sitio',
    introEyebrow: 'COORDINACIÓN DE ALIANZA',
    introH1: 'Cada movimiento.<br><em>A la señal correcta.</em>',
    introCopy: 'La estrategia y los mensajes para mantener a la alianza sincronizada durante Vikingos.',
    waveAria: 'Oleadas 10 y 20',
    waveMarkSpan: 'OLEADAS CG',
    waveMarkSmall: 'Una sola regla: esperar la señal de GO.',
    pageNavAria: 'Navegación de la guía',
    navCityGuide: 'Preparar ciudades',
    navReinforcements: '¿A quién reforzar?',
    navPoints: 'Entender los puntos',
    navMessages: 'Mensajes para copiar',
    cityEyebrow: 'ESTRATEGIA DE CIUDADES',
    cityTitle: 'Tus héroes en casa.<br> Tus tropas con los aliados.',
    cityLead: 'Cada uno envía sus tropas a reforzar a otros y recibe refuerzos para defender su ciudad. El objetivo: proteger a toda la alianza y permitir que todos sumen puntos.',
    card1Eyebrow: '01 / PREPARAR',
    card1Title: 'Guarda tus 3 mejores héroes',
    card1Body: 'Deja tus tres mejores héroes en tu ciudad. En el <strong>puesto de mando</strong>, bloquéalos para evitar desplegarlos por error en tus marchas.',
    card2Eyebrow: '02 / INDISPENSABLE',
    card2Title: 'Saca todas tus tropas',
    card2Body: '<p>Envía tus tropas como refuerzo a tus aliados y haz que sus refuerzos defiendan tu ciudad. <strong>Guardar tus héroes no significa guardar tus tropas.</strong></p><p>Las tropas que se quedan en casa pueden matar vikingos en lugar de los refuerzos: tus aliados pierden oportunidades de sumar puntos.</p>',
    card3Eyebrow: '03 / REPARTIR',
    card3Title: 'Elige a quién reforzar',
    card3Body: '<p>La lista de <strong>Miembros</strong> del evento permite ver quién está en línea, a quién le faltan refuerzos y a quién ya estás reforzando.</p><p><a href="#reinforcements">Ver cómo usar esta lista →</a></p>',
    card4Eyebrow: '04 / DIMENSIONAR',
    card4Title: 'Apunta a 200 000 refuerzos por ciudad',
    card4Body: 'Esta es la referencia de nuestra alianza para aguantar hasta el final: <strong>200 000 en total por ciudad</strong>, no 200 000 por persona que refuerza.<p>Ajusta según la fuerza de las tropas, la dificultad y los informes. Una ciudad ya bien cubierta puede ceder prioridad a una con menos refuerzos.</p>',
    reinfEyebrow: 'EN EL JUEGO / PÁGINA DEL EVENTO',
    reinfTitle: '¿Quién está en línea? ¿A quién refuerzo? ¿A quién ayudar?',
    reinfPath: 'Abre el evento <strong>Vikingos</strong> → pulsa en <strong>Miembros</strong>.',
    reinfLead: 'Esta lista te da una vista general de la alianza. Antes de enviar una marcha, cruza estos tres datos:',
    reinfCheck1: '<strong>¿Quién está en línea?</strong><p>Mira el estado de conexión de cada miembro. Identifica a los jugadores en línea para ayudar prioritariamente a quienes les falten refuerzos.</p>',
    reinfCheck2: '<strong>¿Quién ya está bien reforzado?</strong><p>Compara el nivel de refuerzo de las ciudades. Nuestra referencia es de <strong>200 000 tropas de refuerzo en total por ciudad</strong>: busca primero las que tengan pocos o ningún refuerzo y ajusta según sus informes.</p>',
    reinfCheck3: '<strong>¿A quién estoy reforzando ya?</strong><p>Consulta en esta misma lista los refuerzos que ya has enviado. Identifica a sus destinatarios antes de elegir dónde enviar otra marcha: el objetivo es repartir la ayuda entre los miembros.</p>',
    reinfBoxTitle: '¿Cómo elegir tu próximo destino?',
    reinfBoxBody: '<p><strong>Primero, un miembro en línea al que le falten refuerzos.</strong> Si los miembros en línea ya están bien cubiertos, ayuda a otras ciudades que lo necesiten. Evita concentrar todas las marchas en una sola ciudad mientras otra se queda sin ayuda.</p><p>Por ejemplo, entre dos miembros en línea, uno con 80 000 refuerzos y otro con 200 000, completa prioritariamente el de 80 000, salvo orden del R4 o informe que indique lo contrario.</p>',
    reinfTakeaway: 'Vuelve con frecuencia a Evento → Miembros para seguir la distribución. Para mover refuerzos ya colocados, revisa los informes y respeta las señales de GO del R4.',
    pointsEyebrow: '¿POR QUÉ VACIAR TU CIUDAD?',
    pointsTitle: 'Una defensa, dos fuentes de puntos.',
    pointsBody: '<p>Ganas puntos por los vikingos derrotados en tu ciudad, incluidos los que eliminan los refuerzos. Tus tropas también pueden ganar puntos de refuerzo con tus aliados.</p><p><strong>Hacer que otros defiendan tu ciudad no te quita tus puntos de defensa.</strong> Si tus propias tropas logran las bajas, reducen los puntos de refuerzo disponibles para quienes fueron a ayudarte.</p>',
    pointsExTitle: 'Ejemplo: 1 000 vikingos eliminados',
    pointsExBody: '<p><strong>Tu ciudad está vacía de tus tropas:</strong> los refuerzos eliminan a los 1 000 vikingos. Obtienes los puntos de defensa correspondientes; los aliados ganan puntos por sus bajas.</p><p><strong>Tus tropas eliminan a 300:</strong> solo quedan 700 vikingos para los refuerzos. Por el mismo total de 1 000 vikingos derrotados, tus aliados tienen menos oportunidades de puntuar.</p><small>Ejemplo ilustrativo en número de bajas, no una escala de puntos. El valor en puntos depende de la oleada y la dificultad.</small>',
    reportEyebrow: '05 / CONTROLAR TRAS EL ATAQUE',
    reportTitle: 'El informe da dos respuestas.',
    reportCol1: '<strong>¿Mis propias tropas mataron vikingos?</strong><p>Mira la línea de tu jugador en el desglose de bajas. El objetivo es <strong>0 bajas por tus propias tropas en tu ciudad</strong>. Si ves alguna, revisa las tropas que quedaron o regresaron a tu ciudad y reenvíalas como refuerzo según las indicaciones.</p>',
    reportCol2: '<strong>¿Se eliminó al 100 % de los vikingos?</strong><p>Revisa el porcentaje en la esquina superior derecha del informe. El objetivo es <strong>100 % de bajas en total por los defensores</strong>. Si es menor, avisa sobre la ciudad para ajustar sus refuerzos con el R4.</p>',
    reportTakeaway: 'El resultado ideal: tus propias tropas hacen 0 bajas en tu ciudad, los refuerzos hacen el 100 %.',
    citySourceNote: 'Instrucciones y referencia de 200 000 refuerzos: estrategia de nuestra alianza. Mecánica de puntos: <a href="https://kingshotguides.com/guide/viking-vengeance-expert-guide-beginner-to-advanced/">guía comunitaria Kingshot Guides</a>. Para las oleadas 10 y 20, sigue las señales de GO del R4 a continuación.',
    asideEyebrow: 'EL PLAN DE BATALLA',
    asideTitle: 'Ninguna salida <br>sin señal.',
    strategyStep1: '<strong>Mantener los refuerzos</strong><p>Revisar los informes y el mapa antes de dejar a los aliados.</p>',
    strategyStep2: '<strong>Retirar con la señal de GO</strong><p>Retirar los refuerzos y esperar la llegada de Raagui al CG.</p>',
    strategyStep3: '<strong>Entrar al CG</strong><p>Entrar con la segunda señal de GO y quedarse hasta confirmar el ataque.</p>',
    strategyStep4: '<strong>Volver con el aliado</strong><p>Con la señal de salida, retirar tropas y luego reforzar al mismo aliado con la señal de refuerzos.</p>',
    warningBody: '<strong>El temporizador no es de fiar.</strong>Un temporizador terminado no basta: revisa los informes de combate y el mapa.',
    asideSourceNote: 'Estrategia de la alianza, basada en las instrucciones R4 proporcionadas.',
    messagesEyebrow: 'LISTOS PARA EL CHAT',
    messagesTitle: 'Mensajes para copiar',
    groupAria: 'Momento de los mensajes',
    groupExplanations: '1. Comprender y prepararse',
    groupCoordination: '2. Durante el evento',
    groupExplanationsHint: 'Elige un tema para comprender la estrategia, luego copia el mensaje en español o en inglés.',
    groupCoordinationHint: 'Los diez mensajes de las oleadas 10 y 20 en orden: consignas, organización, esperas y señales de GO. Copia cada uno a su debido tiempo.',
    copyToast: (lang) => `¡Mensaje ${lang.toUpperCase()} copiado. Listo para pegar en el chat!`,
    copyUnavailable: 'Portapapeles no disponible: por favor, selecciona el texto para copiarlo.',
    footerContent: '<span>KINGSHOT / VIKINGS</span><span>Los informes. El mapa. Y luego la señal de GO.</span>',
    noscript: 'Activa JavaScript para ver y copiar los mensajes rápidos.'
  }
};

const groups = {
  explanations: {
    messages: explanationMessages,
    hintKey: 'groupExplanationsHint'
  },
  coordination: {
    messages: coordinationMessages,
    hintKey: 'groupCoordinationHint'
  }
};

let messageGroup = 'explanations';
let messages = explanationMessages;
let language = 'fr';
try {
  const saved = localStorage.getItem('kingshot_lang');
  if (saved && ['fr', 'en', 'es'].includes(saved)) {
    language = saved;
  }
} catch {}

let toastTimer;
const copyIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></svg>';

function getMessageTitle(item, lang) {
  if (lang === 'en' && item.titleEn) return item.titleEn;
  if (lang === 'es' && item.titleEs) return item.titleEs;
  return item.title;
}

function messageCard(item, i) {
  const currentTitle = getMessageTitle(item, language);

  let copyButtonsHtml = '';
  if (language === 'fr') {
    copyButtonsHtml = `
      <button type="button" class="copy-small" data-copy="${i}" data-copy-lang="fr" aria-label="Copier en français : ${currentTitle}">${copyIcon} FR</button>
      <button type="button" class="copy-small" data-copy="${i}" data-copy-lang="en" aria-label="Copier en anglais : ${currentTitle}">${copyIcon} EN</button>
    `;
  } else if (language === 'es') {
    copyButtonsHtml = `
      <button type="button" class="copy-small" data-copy="${i}" data-copy-lang="es" aria-label="Copiar en español: ${currentTitle}">${copyIcon} ES</button>
      <button type="button" class="copy-small" data-copy="${i}" data-copy-lang="en" aria-label="Copiar en inglés: ${currentTitle}">${copyIcon} EN</button>
    `;
  } else {
    copyButtonsHtml = `
      <button type="button" class="copy-small" data-copy="${i}" data-copy-lang="en" aria-label="Copy in English: ${currentTitle}">${copyIcon} EN</button>
    `;
  }

  const copyGroupAria = language === 'fr'
    ? `Copier : ${currentTitle}`
    : (language === 'es' ? `Copiar: ${currentTitle}` : `Copy: ${currentTitle}`);

  return `<article class="message-card">
    <div class="message-row">
      <h3 lang="${language}">${currentTitle}</h3>
      <div class="copy-actions" role="group" aria-label="${copyGroupAria}">
        ${copyButtonsHtml}
      </div>
    </div>
    <p class="message-text" lang="${language}">${item[language]}</p>
  </article>`;
}

function updateStaticUI() {
  const t = uiTranslations[language];
  if (!t) return;

  document.documentElement.lang = language;
  document.title = t.pageTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = t.metaDesc;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    if (t[key] !== undefined) {
      el.setAttribute('aria-label', t[key]);
    }
  });

  document.querySelectorAll('.language [data-lang]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === language));
  });
}

function render() {
  updateStaticUI();

  const countEl = document.querySelector('#message-count');
  if (countEl) countEl.textContent = String(messages.length).padStart(2, '0');

  document.querySelectorAll('[data-group]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.group === messageGroup));
  });

  const hintKey = groups[messageGroup].hintKey;
  const hintEl = document.querySelector('#message-hint');
  if (hintEl && uiTranslations[language]) hintEl.textContent = uiTranslations[language][hintKey];

  const listEl = document.querySelector('#all-messages');
  if (listEl) {
    listEl.innerHTML = messages.map((item, i) => messageCard(item, i)).join('');
  }
}

function notify(text) {
  const toast = document.querySelector('#toast');
  if (!toast) return;
  toast.textContent = text;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2800);
}

async function copy(index, lang) {
  const message = messages[index];
  const title = getMessageTitle(message, lang);
  const text = `${title}\n\n${message[lang]}`;

  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(text);
  } catch {
    const previousFocus = document.activeElement;
    const field = document.createElement('textarea');
    field.value = text;
    field.setAttribute('aria-label', 'Message to copy');
    field.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
    document.body.append(field);
    field.select();
    const copied = document.execCommand('copy');
    field.remove();
    previousFocus?.focus();
    if (!copied) {
      notify(uiTranslations[language].copyUnavailable);
      return;
    }
  }

  notify(uiTranslations[language].copyToast(lang));
}

document.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;

  if (button.dataset.group) {
    messageGroup = button.dataset.group;
    messages = groups[messageGroup].messages;
    render();
  }

  if (button.dataset.lang) {
    language = button.dataset.lang;
    try {
      localStorage.setItem('kingshot_lang', language);
    } catch {}
    render();
  }

  if (button.dataset.copy !== undefined) {
    const targetLang = button.dataset.copyLang || language;
    copy(Number(button.dataset.copy), targetLang);
  }
});

render();
