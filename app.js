const explanationMessages = [
  { title: '🚨 VIKINGS : Le principe et les points', titleEn: '🚨 VIKINGS: The basics and points', titleEs: '🚨 VIKINGOS: El principio y los puntos', titleAr: '🚨 الفايكنغز: المبدأ والنقاط', short: 'Principe et points', tag: 'COMPRENDRE', tone: 'wait',
    titlePtBr: '🚨 VIKINGS: O básico e os pontos',
    ar: '🛡️ عزز حلفاءك واجعل قواتهم تدافع عن مدينتك: تحتفظ بكامل نقاط الدفاع الخاصة بك!\n\n⚠️ القوات المتبقية في مدينتك تسلب التصفيات من التعزيزات وتقلل نقاط حلفائك.\n\n📊 مثال (1000 فايكنغ في مدينتك):\n• التعزيزات وحدها = 1000 تصفية للحلفاء.\n• قواتك تقضي على 300 = يتبقى 700 فقط للحلفاء.\nتحتفظ بنقاط الدفاع في الحالتين! (عدد الفايكنغز، وليس سلم النقاط).',
    'pt-BR': '🛡️ Reforce seus aliados e deixe que defendam sua cidade: você mantém todos os seus pontos de defesa!\n\n⚠️ Tropas em casa tiram eliminações dos reforços e reduzem os pontos dos aliados.\n\n📊 Exemplo (1.000 Vikings mortos na sua cidade):\n• Só reforços = 1.000 eliminações para os aliados.\n• Suas tropas fazem 300 = sobram 700 para os aliados.\nVocê mantém os pontos de defesa nos dois casos! (Número de Vikings, não valor em pontos).',
    fr: '🛡️ Renforcez vos alliés et faites défendre votre ville par les leurs : vous gardez tous vos points de défense chez vous !\n\n⚠️ Des troupes restées chez vous prennent des éliminations aux renforts et réduisent les points de vos alliés.\n\n📊 Exemple (1 000 Vikings tués chez vous) :\n• Renforts seuls = 1 000 éliminations pour les alliés.\n• Vos troupes en font 300 = seulement 700 pour les alliés.\nVous gardez vos points de défense dans les deux cas !',
    en: '🛡️ Reinforce your allies and let their troops defend your city: you keep all your city defense points!\n\n⚠️ Troops left at home take kills from reinforcements and reduce your allies’ points.\n\n📊 Example (1,000 Vikings killed at your city):\n• Reinforcements do all: 1,000 kills shared by allies.\n• Your troops get 300: only 700 remain for allies.\nYou keep defense points in both cases! (Viking counts, not point values).',
    es: '🛡️ ¡Refuerza a tus aliados y deja que defiendan tu ciudad: conservas todos tus puntos de defensa!\n\n⚠️ Las tropas que dejas en casa quitan bajas a los refuerzos y reducen los puntos de tus aliados.\n\n📊 Ejemplo (1 000 vikingos en tu ciudad):\n• Solo refuerzos = 1 000 bajas para los aliados.\n• Tus tropas hacen 300 = solo quedan 700 para los aliados.\n¡Conservas tus puntos de defensa en ambos casos! (Cantidades de vikingos, no escala de puntos).' },
  { title: '🚨 VIKINGS : Préparer sa ville', titleEn: '🚨 VIKINGS: Prepare your city', titleEs: '🚨 VIKINGOS: Preparar la ciudad', titleAr: '🚨 الفايكنغز: تجهيز المدينة', short: 'Héros et troupes', tag: 'COMPRENDRE', tone: 'wait',
    titlePtBr: '🚨 VIKINGS: Prepare sua cidade',
    ar: '🦸 احتفظ بأفضل 3 أبطال في مدينتك وثبتهم في مركز القيادة لتجنب إرسالهم بالخطأ. أخرج كل قواتك لتعزيز الحلفاء، خاصة المشاة والرماة، واجعل تعزيزاتهم تدافع عن مدينتك. الاحتفاظ بالأبطال لا يعني إبقاء القوات في مدينتك! راقب أيضاً القوات التي تعود خلال الحدث.',
    'pt-BR': '🦸 Mantenha seus 3 melhores heróis na cidade e fixe-os no posto de comando para não enviá-los por engano. Envie TODAS as suas tropas para reforçar aliados, principalmente infantaria e arqueiros, e deixe os reforços deles defenderem sua cidade. Manter os heróis não significa manter tropas em casa! Fique de olho nas tropas que voltarem durante o evento.',
    fr: '🦸 Gardez vos 3 meilleurs héros en ville et bloquez-les au poste de commandement pour éviter de les envoyer par erreur. Sortez TOUTES vos troupes pour renforcer les alliés, surtout infanterie et archers, et faites défendre votre ville par leurs renforts. Garder ses héros ne veut pas dire garder ses troupes ! Surveillez aussi les troupes revenues chez vous pendant l’événement.',
    en: '🦸 Keep your 3 best heroes in your city and lock them in the Command Center to avoid sending them by mistake. Send ALL your troops to reinforce allies—especially infantry and archers—and let their reinforcements defend your city. Keeping heroes does not mean keeping troops at home! Also watch for troops returning home during the event.',
    es: '🦸 Mantén tus 3 mejores héroes en la ciudad y bloquéalos en el puesto de mando para no enviarlos por error. Saca TODAS tus tropas para reforzar aliados, sobre todo infantería y arqueros, y deja que sus refuerzos defiendan tu ciudad. ¡Guardar héroes no significa guardar tropas! Vigila también las tropas que regresen a casa durante el evento.' },
  { title: '🚨 VIKINGS : Préparez vos villes', titleEn: '🚨 VIKINGS: Prepare your cities', titleEs: '🚨 VIKINGOS: Preparad vuestras ciudades', titleAr: '🚨 الفايكنغز: جهزوا مدنكم', short: 'Préparation', tag: 'AVANT / 1', tone: 'wait',
    titlePtBr: '🚨 VIKINGS: Preparem suas cidades',
    ar: '✅ أفضل 3 أبطال مثبتون في مركز القيادة.\n✅ كل قواتكم مرسلة إلى الحلفاء، خاصة المشاة والرماة.\n✅ مدينتكم محمية بتعزيزاتهم.\nفي صفحة الحدث، افتحوا الفايكنغز ← الأعضاء: ستعرفون من متصل، ومستوى تعزيز كل مدينة، ومن تعززونه بالفعل. ساعدوا أولاً اللاعبين المتصلين ذوي التعزيزات القليلة، ثم المدن المحتاجة الأخرى.',
    'pt-BR': '✅ Seus 3 melhores heróis fixos no posto de comando.\n✅ TODAS as tropas com os aliados, principalmente infantaria e arqueiros.\n✅ Sua cidade defendida pelos reforços deles.\nNa página do evento, abram Vikings → Membros: vejam quem está online, o nível de reforço de cada cidade e quem vocês já estão reforçando. Ajudem primeiro os jogadores online com poucos reforços, depois as outras cidades que precisarem.',
    fr: '✅ Vos 3 meilleurs héros bloqués au poste de commandement.\n✅ TOUTES vos troupes envoyées chez les alliés, surtout infanterie et archers.\n✅ Votre ville défendue par leurs renforts.\nDans la page de l’événement, ouvrez Vikings → Membres : vous verrez qui est en ligne, le niveau de renfort de chaque ville et les membres auxquels vous envoyez déjà des renforts. Aidez d’abord les joueurs en ligne peu renforcés, puis les autres villes dans le besoin.',
    en: '✅ Your 3 best heroes locked in the Command Center.\n✅ ALL your troops sent to allies—especially infantry and archers.\n✅ Your city defended by their reinforcements.\nOn the event page, open Vikings → Members: you will see who is online, the reinforcement level of each city, and the members you are already sending reinforcements to. Help online players with few reinforcements first, then other cities in need.',
    es: '✅ Vuestros 3 mejores héroes bloqueados en el puesto de mando.\n✅ TODAS vuestras tropas enviadas a los aliados, sobre todo infantería y arqueros.\n✅ Vuestra ciudad defendida por sus refuerzos.\nEn la página del evento, abrid Vikingos → Miembros: veréis quién está en línea, el nivel de refuerzos de cada ciudad y los miembros a quienes ya enviáis refuerzos. Ayudad primero a los jugadores en línea poco reforzados y luego a las demás ciudades necesitadas.' },
  { title: '🚨 VIKINGS : Répartir les renforts', titleEn: '🚨 VIKINGS: Distribute reinforcements', titleEs: '🚨 VIKINGOS: Repartir los refuerzos', titleAr: '🚨 الفايكنغز: توزيع التعزيزات', short: 'Qui renforcer ?', tag: 'COMPRENDRE', tone: 'wait',
    titlePtBr: '🚨 VIKINGS: Distribuam os reforços',
    ar: '🤝 في صفحة الحدث، افتحوا الفايكنغز ← الأعضاء. تُظهر القائمة من متصل، ومستوى التعزيز لكل مدينة، ومن أرسلتم لهم بالفعل. ساعدوا أولاً المتصلين ذوي التعزيزات القليلة، ثم بقية المدن المحتاجة. معيارنا: ~200,000 تعزيز بالإجمالي لكل مدينة، وليس لكل شخص. عدلوا حسب قوة القوات، والصعوبة، والتقارير، وتعليمات R4.',
    'pt-BR': '🤝 Na página do evento, abram Vikings → Membros. A lista mostra quem está online, o nível de reforço de cada cidade e quem vocês já reforçaram. Ajudem primeiro os membros online com poucos reforços, depois as outras cidades que precisarem. Nossa referência: ~200.000 reforços NO TOTAL por cidade, não por pessoa. Ajustem conforme a força das tropas, a dificuldade, os relatórios e as instruções do R4.',
    fr: '🤝 Dans la page de l’événement, ouvrez Vikings → Membres. Cette liste montre qui est en ligne, le niveau de renfort reçu par chaque ville et les membres auxquels vous avez déjà envoyé des renforts. Aidez d’abord les membres en ligne peu renforcés, puis les autres villes qui en ont besoin. Notre repère : ~200 000 renforts AU TOTAL par ville, pas par personne. Ajustez selon la force des troupes, la difficulté, les rapports et les consignes du R4.',
    en: '🤝 On the event page, open Vikings → Members. This list shows who is online, the reinforcement level of each city, and the members you have already sent reinforcements to. Help online members with few reinforcements first, then other cities in need. Our guideline: ~200,000 reinforcements IN TOTAL per city, not per person. Adjust for troop strength, difficulty, reports, and R4 instructions.',
    es: '🤝 En la página del evento, abrid Vikingos → Miembros. Esta lista muestra quién está en línea, el nivel de refuerzos de cada ciudad y los miembros a quienes ya habéis enviado refuerzos. Ayudad primero a los miembros en línea poco reforzados, luego a las otras ciudades necesitadas. Nuestra referencia: ~200 000 refuerzos EN TOTAL por ciudad, no por persona. Ajustad según la fuerza de tropas, dificultad, informes y órdenes del R4.' },
  { title: '🚨 VIKINGS : Ni soin ni extinction', titleEn: '🚨 VIKINGS: No healing, no extinguishing', titleEs: '🚨 VIKINGOS: Ni curaciones ni apagar fuego', titleAr: '🚨 الفايكنغز: لا علاج ولا إطفاء', short: 'Soin et feu', tag: 'RÈGLE D’OR', tone: 'stop',
    titlePtBr: '🚨 VIKINGS: Sem cura e sem apagar o fogo',
    ar: '🩹 لا تعالجوا: العلاج يعيد القوات إلى مدينتكم، فتقتل الفايكنغز بدلاً من التعزيزات وتحرم حلفاءكم من نقاطهم (مع هدر التسريعات).\n🔥 لا تطفئوا النيران: احتراق المدينة يشير إلى سقوطها (لا تُستهدف بعد هزيمتين). الإطفاء يهدر الجواهر ويربك الحلفاء. الاحتراق لا يمنعكم من كسب النقاط!\nالعلاج والإصلاح فقط بعد انتهاء الحدث.',
    'pt-BR': '🩹 NÃO CUREM: curar manda tropas de volta à cidade, onde matam Vikings no lugar dos reforços e tiram pontos dos aliados (além de gastar aceleradores).\n🔥 NÃO APAGUEM O FOGO: uma cidade em chamas indica uma derrota (não é mais atacada após 2 derrotas). Apagar gasta gemas à toa e confunde os aliados. O fogo não impede vocês de ganhar pontos!\nCurem e reparem só DEPOIS do evento.',
    fr: '🩹 NE SOIGNEZ PAS : soigner renvoie vos troupes en ville, qui tuent les Vikings à la place des renforts et privent vos alliés de leurs points d’élimination (en plus de gaspiller des accélérateurs).\n🔥 N’ÉTEIGNEZ PAS LE FEU : une ville en flammes signale qu’elle a déjà chuté (plus ciblée après 2 défaites). Éteindre coûte des gemmes pour rien et perturbe l’alliance. Brûler ne bloque aucun gain de points !\nOn soigne et on répare APRÈS l’événement.',
    en: '🩹 DO NOT HEAL: healing returns troops home, where they kill Vikings instead of reinforcements and steal allies’ points (and wastes speedups).\n🔥 DO NOT EXTINGUISH FIRES: a burning city signals a defeat (no longer targeted after 2 losses). Putting it out wastes gems and misleads allies. Burning does not stop you from earning points!\nHeal and repair only AFTER the event.',
    es: '🩹 NO CURÉIS: curar devuelve tropas a vuestra ciudad, robando bajas y puntos a los refuerzos aliados (y gastando aceleradores).\n🔥 NO APAGUÉIS EL FUEGO: una ciudad en llamas avisa que ya cayó (no recibe ataques tras 2 derrotas). Apagarlo gasta gemas y confunde a los aliados. ¡Arder no impide ganar puntos!\nSe cura y se repara DESPUÉS del evento.' },
  { title: '🚨 VIKINGS : Dernière vérification', titleEn: '🚨 VIKINGS: Final check', titleEs: '🚨 VIKINGOS: Última comprobación', titleAr: '🚨 الفايكنغز: التحقق الأخير', short: 'Avant le départ', tag: 'AVANT / 2', tone: 'wait',
    titlePtBr: '🚨 VIKINGS: Última verificação',
    ar: '✅ لا توجد أي قوات تابعة لكم في مدينتكم (التعزيزات: خاصة مشاة ورماة).\n✅ المدن مغطاة: المعيار ~200,000 تعزيز بالإجمالي لكل مدينة، يُعدل حسب التقارير. أبلغوا R4 بالنواقص.\n✅ الموجتان 10 و20: أفضل 3 أبطال + 80 ألف مشاة كحد أقصى. لا تحرك بدون إشارة GO من R4. الدخول إلى المقر بعد راغي؛ والعودة لنفس الحلفاء.',
    'pt-BR': '✅ Nenhuma tropa sua em casa (reforços: principalmente infantaria e arqueiros).\n✅ Cidades cobertas: referência de ~200.000 reforços NO TOTAL por cidade, ajustada pelos relatórios. Avisem o R4 sobre faltas.\n✅ Ondas 10 e 20: 3 melhores heróis + no máximo 80 mil soldados de infantaria. Não se movam sem o GO do R4. Entrem no QG depois de Raagui; voltem aos mesmos aliados.',
    fr: '✅ Aucune de vos troupes restée chez vous (renforts : surtout infanterie et archers).\n✅ Villes couvertes : repère ~200 000 renforts AU TOTAL par ville, à ajuster selon les rapports. Signalez les manques au R4.\n✅ Vagues 10 et 20 : 3 meilleurs héros + seulement 80k fantassins max. Aucun déplacement sans GO du R4. Entrée au QG après Raagui ; retour chez les mêmes alliés.',
    en: '✅ None of your own troops left at home (reinforcements: especially infantry and archers).\n✅ Cities covered: guideline ~200,000 reinforcements IN TOTAL per city, adjusted using reports. Tell the R4 about gaps.\n✅ Waves 10 & 20: 3 best heroes + only 80k infantry max. No moves without the R4’s GO. Enter HQ after Raagui; return to the same allies.',
    es: '✅ Ninguna de tus tropas en casa (refuerzos: sobre todo infantería y arqueros).\n✅ Ciudades cubiertas: referencia ~200 000 refuerzos EN TOTAL por ciudad, ajustada según informes. Avisad de las faltas al R4.\n✅ Oleadas 10 y 20 : 3 mejores héroes + solo 80k de infantería máx. Ningún movimiento sin GO del R4. Entrada al CG tras Raagui; vuelta con los mismos aliados.' },
  { title: '🚨 VIKINGS : Comprendre les vagues 10 et 20', titleEn: '🚨 VIKINGS: Understand waves 10 and 20', titleEs: '🚨 VIKINGOS: Entender las oleadas 10 y 20', titleAr: '🚨 الفايكنغز: فهم الموجتين 10 و20', short: 'Vagues 10 et 20', tag: 'COMPRENDRE', tone: 'wait',
    titlePtBr: '🚨 VIKINGS: Entendam as ondas 10 e 20',
    ar: '🏰 الموجتان 10 و20: ابقوا لدى حلفائكم حتى إشارة GO استدعاء. ثم انتظروا وصول راغي إلى المقر وإشارة GO المقر للانضمام إليه. ابقوا في المقر حتى إشارة GO خروج، ثم انتظروا GO تعزيزات للعودة إلى نفس الحلفاء. يتحقق R4 من التقارير والخريطة قبل التحرك: انتهاء المؤقت لا يكفي!',
    'pt-BR': '🏰 Ondas 10 e 20: fiquem com os aliados até o GO RETIRADA. Depois, esperem Raagui chegar ao QG e o GO QG para se juntarem a ele. Fiquem no QG até o GO SAÍDA e aguardem o GO REFORÇOS para voltar aos mesmos aliados. O R4 verifica os relatórios e o mapa antes das saídas: o cronômetro zerar não basta!',
    fr: '🏰 Vagues 10 et 20 : restez chez vos alliés jusqu’au GO RAPPEL. Attendez ensuite Raagui au QG et le GO QG pour le rejoindre. Restez au QG jusqu’au GO SORTIE, puis attendez le GO RENFORTS pour retourner chez les mêmes alliés. Le R4 vérifie les rapports et la carte avant les départs : un timer terminé ne suffit pas !',
    en: '🏰 Waves 10 & 20: stay at your allies’ cities until GO RECALL. Then wait for Raagui to reach HQ and for GO HQ before joining him. Stay at HQ until GO LEAVE HQ, then wait for GO REINFORCE to return to the same allies. The R4 checks reports and the map before departures: a finished timer is not enough!',
    es: '🏰 Oleadas 10 y 20: quedaos con vuestros aliados hasta el GO RETIRADA. Esperad luego a Raagui en el CG y el GO CG para uniros. Quedaos en el CG hasta el GO SALIDA, luego esperad el GO REFUERZOS para volver con los mismos aliados. El R4 revisa informes y mapa antes de partir: ¡un temporizador terminado no basta!' },
  { title: '🚨 VIKINGS : Lire les rapports', titleEn: '🚨 VIKINGS: Read the reports', titleEs: '🚨 VIKINGOS: Leer los informes', titleAr: '🚨 الفايكنغز: قراءة التقارير', short: 'Les deux contrôles', tag: 'COMPRENDRE', tone: 'wait',
    titlePtBr: '🚨 VIKINGS: Leiam os relatórios',
    ar: '🔎 بعد الهجوم، تحققوا من التقرير: 1️⃣ يجب أن يحقق لاعبك 0 تصفية في مدينتك؛ وإلا فتحققوا من القوات المتبقية أو العائدة. 2️⃣ في أعلى اليمين، الهدف هو القضاء على 100% من الفايكنغز؛ إن كان أقل، أبلغوا R4 لتعديل التعزيزات. التزموا بإشارات GO قبل نقل القوات المتمركزة.',
    'pt-BR': '🔎 Após um ataque, confiram o relatório: 1️⃣ Seu jogador deve ter 0 eliminações na sua cidade; caso contrário, verifique as tropas que ficaram ou voltaram para casa. 2️⃣ No canto superior direito, a meta é 100% dos Vikings eliminados no total; se for menos, avisem o R4 para ajustar os reforços. Respeitem os GO antes de mover tropas já posicionadas.',
    fr: '🔎 Après une attaque, contrôlez le rapport : 1️⃣ Votre joueur doit faire 0 élimination dans votre ville ; sinon, vérifiez les troupes restées ou revenues chez vous. 2️⃣ En haut à droite, visez 100 % des Vikings éliminés au total ; en dessous, signalez la ville au R4 pour ajuster les renforts. Respectez les GO pour déplacer les troupes déjà en place.',
    en: '🔎 After an attack, check the report: 1️⃣ Your player should have 0 kills in your city; otherwise, check for troops left at home or returning there. 2️⃣ At the top right, aim for 100% of Vikings killed overall; if lower, tell the R4 so reinforcements can be adjusted. Follow the GO signals before moving troops already in position.',
    es: '🔎 Tras un ataque, revisad el informe: 1️⃣ Tu jugador debe hacer 0 bajas en tu ciudad; si no, revisa las tropas que quedaron o volvieron. 2️⃣ Arriba a la derecha, buscad el 100 % de vikingos eliminados en total; si es menos, avisad al R4 para ajustar refuerzos. Respetad los GO para mover tropas ya colocadas.' },
  { title: '🚨 VIKINGS : Récapitulatif de l’événement', titleEn: '🚨 VIKINGS: Event recap', titleEs: '🚨 VIKINGOS: Resumen del evento', titleAr: '🚨 الفايكنغز: ملخص الحدث', short: '22 et 24/09 · 19 UTC', tag: 'RÉCAP', tone: 'wait',
    titlePtBr: '🚨 VIKINGS: Resumo do evento',
    ar: '🕒 22/09 و 24/09 — 19 UTC\n💡 أكدوا تواجدكم بالإنترنت.\n\n1. احتفظوا بأفضل 3 أبطال في مركز القيادة.\n2. عززوا الحلفاء بكل قواتكم، خاصة المشاة والرماة.\n3. الموجتان 10 و20: أرسلوا أفضل 3 أبطال + 80 ألف مشاة من أعلى مستوى فقط.\n\n🐾 فعلوا مكافآت الحيوانات الأليفة ووزعوا القوات عبر الفايكنغز ← الأعضاء قبل 20 دقيقة.\n\nأي أسئلة؟ R4/R5.',
    'pt-BR': '🕒 22/09 e 24/09 — 19 UTC\n💡 Confirmem se estarão online.\n\n1. Mantenham seus 3 melhores heróis no posto de comando.\n2. Reforcem aliados com TODAS as tropas, principalmente infantaria e arqueiros.\n3. Ondas 10 e 20: enviem seus 3 melhores heróis + apenas 80 mil soldados de infantaria do nível mais alto.\n\n🐾 Ativem os bônus de mascotes e distribuam tropas em Vikings → Membros 20 min antes.\n\nDúvidas? R4/R5.',
    fr: '🕒 22/09 et 24/09 — 19 UTC\n💡 Confirmez votre présence en ligne.\n\n1. Gardez vos 3 meilleurs héros au poste de commandement.\n2. Renforcez vos alliés avec TOUTES vos troupes, surtout infanterie et archers.\n3. Vagues 10 et 20 : envoyez vos 3 meilleurs héros + seulement 80k fantassins du niveau le plus élevé.\n\n🐾 Activez les bonus de familiers et répartissez les troupes via Vikings → Membres 20 min avant.\n\nQuestions ? R4/R5.',
    en: '🕒 22/09 & 24/09 — 19 UTC\n💡 Confirm if you will be online.\n\n1. Keep your 3 best heroes at the Command Center.\n2. Reinforce allies with ALL troops—especially infantry and archers.\n3. Waves 10 & 20: send your 3 best heroes + only 80k highest-level infantry.\n\n🐾 Activate pet bonuses and distribute troops via Vikings → Members 20 min before.\n\nQuestions? Contact R4/R5.',
    es: '🕒 22/09 y 24/09 — 19 UTC\n💡 Confirmad vuestra presencia en línea.\n\n1. Dejad vuestros 3 mejores héroes en el puesto de mando.\n2. Reforzad aliados con TODAS las tropas, sobre todo infantería y arqueros.\n3. Oleadas 10 y 20: enviad vuestros 3 mejores héroes + solo 80k de infantería del nivel más alto.\n\n🐾 Activad los bonus de mascotas y repartid tropas mediante Vikingos → Miembros 20 min antes.\n\n¿Dudas? R4/R5.' }
];

const coordinationMessages = [
  { title: 'Consignes avant les vagues', titleEn: 'Instructions before the waves', titleEs: 'Instrucciones antes de las oleadas', titleAr: 'تعليمات قبل الموجات', short: 'Les consignes', tag: 'PRÉPARATION', tone: 'wait',
    titlePtBr: 'Instruções antes das ondas',
    ar: '⚔️ الموجتان 10 و20: اتبعوا إشارات GO لكل تحرك! لا تسحبوا التعزيزات مبكراً: قد تفوت هجوم الفايكنغز على مدينة حليفكم. مؤقتات الوصول خادعة: راجعوا تقارير المعركة والخريطة. انتهاء المؤقت وحده لا يعني إمكانية المغادرة!',
    'pt-BR': '⚔️ Ondas 10 e 20: sigam meus GO a cada movimento! Não retirem reforços cedo demais: eles podem perder o ataque dos Vikings na cidade aliada. Os cronômetros de chegada enganam: confiram os relatórios de batalha e o mapa. O cronômetro zerar não basta para sair!',
    fr: '⚔️ Vagues 10 et 20 : suivez mes GO pour chaque déplacement ! Ne retirez pas vos renforts trop tôt : ils pourraient manquer l’attaque des Vikings chez votre allié. Les timers d’arrivée sont trompeurs : vérifiez les rapports de combat et la carte. Un timer terminé ne suffit pas pour partir !',
    en: '⚔️ Waves 10 & 20: wait for my GO before each move! Do not recall reinforcements too early: they could miss the Viking attack at your ally’s city. Arrival timers are misleading: check battle reports and the map. A finished timer alone does not mean you can leave!',
    es: '⚔️ Oleadas 10 y 20: ¡seguid mis GO en cada movimiento! No retiréis vuestros refuerzos antes de tiempo: podrían perderse el ataque vikingo en la ciudad aliada. Los temporizadores de llegada engañan: revisad los informes y el mapa. ¡Un temporizador terminado no basta para marcharse!' },
  { title: 'Organisation au QG', titleEn: 'HQ organization', titleEs: 'Organización en el CG', titleAr: 'التنظيم في المقر الرئيسي', short: 'Organisation au QG', tag: 'PRÉPARATION', tone: 'wait',
    titlePtBr: 'Organização no QG',
    ar: '🏰 في الموجتين 10 و20، ننتظر وصول راغي إلى المقر قبل الانضمام إليه. سأعطي إشارة GO للدخول، ثم GO للخروج بعد الهجوم. بعد ذلك، عودوا لتعزيز نفس الحليف السابق. لا تحرك بدون إشارتي!',
    'pt-BR': '🏰 Nas ondas 10 e 20, esperamos Raagui chegar ao QG antes de nos juntarmos a ele. Vou dar o GO para entrar e o GO para sair após o ataque. Depois, voltem a reforçar o mesmo aliado de antes. Nenhum movimento sem meu sinal!',
    fr: '🏰 Pour les vagues 10 et 20, nous attendons que Raagui soit arrivé au QG avant de le rejoindre. Je donnerai le GO pour entrer, puis le GO pour sortir après l’attaque. Ensuite, retournez renforcer le même allié qu’avant. Aucun déplacement sans mon signal !',
    en: '🏰 For waves 10 & 20, we wait until Raagui has arrived at HQ before joining him. I will give the GO to enter, then the GO to leave after the attack. Afterwards, return to reinforce the same ally as before. No moves without my signal!',
    es: '🏰 Para las oleadas 10 y 20, esperamos a que Raagui llegue al CG antes de unirnos. Daré el GO para entrar, luego el GO para salir tras el ataque. Después, volved a reforzar al mismo aliado que antes. ¡Ningún movimiento sin mi señal!' },
  { title: 'Rappel avant le déplacement', titleEn: 'Reminder before moving', titleEs: 'Recordatorio antes del movimiento', titleAr: 'تذكير قبل التحرك', short: 'Maintenir les renforts', tag: 'ATTENDRE', tone: 'wait',
    titlePtBr: 'Lembrete antes de se mover',
    ar: '✋ أبقوا تعزيزاتكم لدى حلفائكم! لا تعتمدوا فقط على المؤقتات: الهجوم قد يكون في الطريق. نحن نتحقق من التقارير والخريطة قبل التحرك. انتظروا إشارة GO مني لسحب قواتكم.',
    'pt-BR': '✋ Mantenham os reforços nas cidades dos aliados! Não confiem só nos cronômetros: o ataque ainda pode estar a caminho. Estamos verificando os relatórios e o mapa antes de nos mover. Esperem meu GO para retirar as tropas.',
    fr: '✋ Gardez vos renforts chez vos alliés ! Ne vous fiez pas uniquement aux timers : l’attaque peut encore être en route. Nous vérifions les rapports et la carte avant de bouger. Attendez mon GO pour rappeler vos troupes.',
    en: '✋ Keep your reinforcements at your allies’ cities! Do not rely only on timers: the attack may still be on its way. We are checking reports and the map before moving. Wait for my GO to recall your troops.',
    es: '✋ ¡Mantened vuestros refuerzos con vuestros aliados! No os fiéis solo de los temporizadores: el ataque aún puede estar en camino. Revisamos los informes y el mapa antes de movernos. Esperad mi GO para retirar vuestras tropas.' },
  { title: 'Maintenir les renforts', titleEn: 'Keep reinforcements in place', titleEs: 'Mantener los refuerzos', titleAr: 'الحفاظ على التعزيزات',
    titlePtBr: 'Mantenham os reforços',
    ar: '✋ أبقوا تعزيزاتكم في مدن الحلفاء. انتظروا إشارة GO استدعاء مني: انتهاء المؤقت لا يؤكد نهاية الهجوم.',
    'pt-BR': '✋ Mantenham os reforços nas cidades dos aliados. Esperem meu GO RETIRADA: o cronômetro zerar não confirma o fim do ataque.',
    fr: '✋ Gardez vos renforts chez vos alliés. Attendez mon GO RAPPEL : un timer terminé ne confirme pas la fin de l’attaque.',
    en: '✋ Keep your reinforcements at your allies’ cities. Wait for my GO RECALL: a finished timer does not confirm the attack is over.',
    es: '✋ Mantened los refuerzos con vuestros aliados. Esperad mi GO RETIRADA: un temporizador terminado no confirma el fin del ataque.' },
  { title: 'GO pour retirer les renforts', titleEn: 'GO RECALL', titleEs: 'GO RETIRADA', titleAr: 'إشارة GO لسحب التعزيزات', short: 'GO rappel', tag: 'RAPPELER', tone: 'go',
    titlePtBr: 'GO RETIRADA',
    ar: '🟢 GO استدعاء! اسحبوا تعزيزاتكم من مدن الحلفاء. 🛑 لا تدخلوا المقر بعد: ننتظر وصول راغي وإشارة GO القادمة مني!',
    'pt-BR': '🟢 GO RETIRADA! Retirem os reforços das cidades dos aliados. 🛑 Não entrem no QG ainda: estamos esperando Raagui chegar e meu próximo GO!',
    fr: '🟢 GO RAPPEL ! Retirez vos renforts de chez vos alliés. 🛑 N’entrez pas encore au QG : nous attendons l’arrivée de Raagui et mon prochain GO !',
    en: '🟢 GO RECALL! Recall your reinforcements from your allies’ cities. 🛑 Do not enter HQ yet: wait for Raagui to arrive and for my next GO!',
    es: '🟢 ¡GO RETIRADA! Retirad los refuerzos de vuestros aliados. 🛑 ¡No entréis al CG todavía: esperamos la llegada de Raagui y mi próximo GO!' },
  { title: 'GO pour entrer au QG', titleEn: 'GO HQ', titleEs: 'GO CG', titleAr: 'إشارة GO لدخول المقر', short: 'GO entrée QG', tag: 'REJOINDRE', tone: 'go',
    titlePtBr: 'GO QG',
    ar: '🟢 GO المقر! وصل راغي: أرسلوا تعزيزاتكم إلى المقر الآن! ابقوا حتى إشارة GO للخروج مني، حتى لو بدا أن المؤقت قد انتهى.',
    'pt-BR': '🟢 GO QG! Raagui chegou: enviem seus reforços ao QG agora! Fiquem até meu GO de saída, mesmo que o cronômetro pareça ter zerado.',
    fr: '🟢 GO QG ! Raagui est arrivé : envoyez maintenant vos renforts au QG ! Restez jusqu’à mon GO de sortie, même si le timer semble terminé.',
    en: '🟢 GO HQ! Raagui has arrived: send your reinforcements to HQ now! Stay until my GO to leave, even if the timer appears to have finished.',
    es: '🟢 ¡GO CG! Raagui ha llegado: ¡enviad ya vuestros refuerzos al CG! Quedaos hasta mi GO de salida, aunque el temporizador parezca terminado.' },
  { title: 'Attendre l’attaque au QG', titleEn: 'Wait for the HQ attack', titleEs: 'Esperar el ataque en el CG', titleAr: 'انتظار الهجوم في المقر', short: 'Tenir le QG', tag: 'ATTENDRE', tone: 'stop',
    titlePtBr: 'Esperem o ataque no QG',
    ar: '🛑 ابقوا في المقر! لا تسحبوا قواتكم بناءً على المؤقت فقط. ننتظر تأكيد الهجوم في التقارير وعلى الخريطة. سأعطي إشارة GO عندما يحين وقت الخروج.',
    'pt-BR': '🛑 Fiquem no QG! Não retirem as tropas com base apenas no cronômetro. Estamos esperando a confirmação do ataque nos relatórios e no mapa. Vou dar o GO quando puderem sair.',
    fr: '🛑 Restez au QG ! Ne retirez pas vos troupes sur la seule base du timer. Nous attendons la confirmation de l’attaque dans les rapports et sur la carte. Je donne le GO dès que vous pouvez sortir.',
    en: '🛑 Stay at HQ! Do not recall your troops based only on the timer. We are waiting for confirmation of the attack in reports and on the map. I will give the GO when you can leave.',
    es: '🛑 ¡Quedaos en el CG! No retiréis vuestras tropas basándoos solo en el temporizador. Esperamos la confirmación del ataque en los informes y el mapa. Daré el GO en cuanto podáis salir.' },
  { title: 'Tenir le QG', titleEn: 'Hold HQ', titleEs: 'Mantener la posición en el CG', titleAr: 'الثبات في المقر',
    titlePtBr: 'Mantenham a posição no QG',
    ar: '🛑 ابقوا في المقر حتى إشارة GO خروج مني. ننتظر تأكيد الهجوم في التقارير وعلى الخريطة.',
    'pt-BR': '🛑 Fiquem no QG até meu GO SAÍDA. Estamos esperando a confirmação do ataque nos relatórios e no mapa.',
    fr: '🛑 Restez au QG jusqu’à mon GO SORTIE. Nous attendons la confirmation de l’attaque dans les rapports et sur la carte.',
    en: '🛑 Stay at HQ until my GO LEAVE HQ. We are waiting for confirmation of the attack in reports and on the map.',
    es: '🛑 Quedaos en el CG hasta mi GO SALIDA. Esperamos la confirmación del ataque en los informes y en el mapa.' },
  { title: 'GO pour sortir du QG', titleEn: 'GO LEAVE HQ', titleEs: 'GO SALIDA CG', titleAr: 'إشارة GO للخروج من المقر', short: 'GO sortie QG', tag: 'SORTIR', tone: 'go',
    titlePtBr: 'GO SAÍDA QG',
    ar: '🟢 GO خروج المقر! تم تأكيد الهجوم، استدعوا قواتكم الآن. استعدوا للعودة إلى نفس الحليف الذي كنتم تعززونه سابقاً!',
    'pt-BR': '🟢 GO SAÍDA QG! Ataque confirmado, retirem suas tropas agora. Preparem-se para voltar ao mesmo aliado que estavam reforçando antes!',
    fr: '🟢 GO SORTIE QG ! L’attaque est confirmée, rappelez vos troupes maintenant. Préparez-vous à retourner chez le même allié que vous renforciez avant !',
    en: '🟢 GO LEAVE HQ! The attack is confirmed: recall your troops now. Get ready to return to the same ally you were reinforcing before!',
    es: '🟢 ¡GO SALIDA CG! Ataque confirmado, retirad vuestras tropas ahora. ¡Preparaos para volver con el mismo aliado que reforzabais antes!' },
  { title: 'GO pour renforcer à nouveau', titleEn: 'GO REINFORCE', titleEs: 'GO REFUERZOS', titleAr: 'إشارة GO للتعزيز مجدداً', short: 'GO renforts', tag: 'RENFORCER', tone: 'go',
    titlePtBr: 'GO REFORÇOS',
    ar: '🟢 GO تعزيزات! بمجرد عودة قواتكم، أرسلوها إلى نفس الحليف كما كان. تحركوا بسرعة لتكونوا جاهزين قبل الهجوم القادم! 🛡️',
    'pt-BR': '🟢 GO REFORÇOS! Assim que suas tropas voltarem, enviem-nas ao mesmo aliado de antes. Sejam rápidos para estar em posição antes do próximo ataque! 🛡️',
    fr: '🟢 GO RENFORTS ! Dès que vos troupes sont rentrées, renvoyez-les chez le même allié qu’avant. Faites vite pour être en place avant la prochaine attaque ! 🛡️',
    en: '🟢 GO REINFORCE! As soon as your troops return, send them back to the same ally as before. Move quickly to be in position before the next attack! 🛡️',
    es: '🟢 ¡GO REFUERZOS! En cuanto vuelvan vuestras tropas, reenviadlas al mismo aliado que antes. ¡Daos prisa para estar listos antes del siguiente ataque! 🛡️' },
  { title: 'Rappel : Ni soin ni extinction', titleEn: 'Reminder: No heal, do not extinguish', titleEs: 'Recordatorio: No curar ni apagar fuego', titleAr: 'تذكير: لا علاج ولا إطفاء', short: 'Ni soin ni feu', tag: 'RAPPEL', tone: 'stop',
    titlePtBr: 'Lembrete: Não curem nem apaguem o fogo',
    ar: '⚠️ تذكير: لا تعالجوا أي قوات في المستوصف (ستعود لمدينتكم وتخطف نقاط التعزيز من الحلفاء) ولا تطفئوا النيران إذا احترقت مدينتكم (هدر للجواهر وعلامة للحلفاء). اتركوا كل شيء كما هو حتى نهاية الحدث!',
    'pt-BR': '⚠️ LEMBRETE: NÃO curem tropas na enfermaria (elas voltam para casa e tiram pontos dos reforços aliados) e NÃO apaguem o fogo se a cidade estiver queimando (gasta gemas e serve de aviso aos aliados). Deixem tudo como está até o fim do evento!',
    fr: '⚠️ RAPPEL : Ne soignez AUCUNE troupe dans l’infirmerie (elles voleraient les points des renforts chez vous) et n’éteignez PAS le feu si votre ville brûle (gaspillage de gemmes, et cela sert de repère aux alliés). Laissez tout en l’état jusqu’à la fin de l’événement !',
    en: '⚠️ REMINDER: Do NOT heal any troops in the infirmary (they will return home and steal points from allies) and do NOT extinguish fires if your city burns (wastes gems and misleads allies). Leave everything as is until the event ends!',
    es: '⚠️ RECORDATORIO: ¡NO curéis tropas en la enfermería (robarían puntos a los refuerzos aliados) y NO apaguéis el fuego si vuestra ciudad arde (gasto de gemas y sirve de aviso a los aliados)! Dejad todo como está hasta el final del evento.' }
];

const uiTranslations = {
  'pt-BR': {
    pageTitle: 'Vikings — Posto de comando',
    metaDesc: 'Estratégia Vikings: prepare sua cidade, entenda os pontos, distribua reforços e coordene as ondas 10 e 20.',
    skip: 'Ir para as mensagens',
    langAria: 'Idioma do site',
    introEyebrow: 'COORDENAÇÃO DA ALIANÇA',
    introH1: 'Cada movimento.<br><em>No sinal certo.</em>',
    introCopy: 'A estratégia e as mensagens para manter a aliança sincronizada durante os Vikings.',
    waveAria: 'Ondas 10 e 20',
    waveMarkSpan: 'ONDAS DO QG',
    waveMarkStrong: '10 <i>&</i> 20',
    waveMarkSmall: 'Uma só regra: espere o GO.',
    pageNavAria: 'Navegação do guia',
    navCityGuide: 'Preparar as cidades',
    navReinforcements: 'Quem reforçar?',
    navPoints: 'Entender os pontos',
    navFireHeal: 'Cura e fogo',
    navMessages: 'Mensagens para copiar',
    cityEyebrow: 'ESTRATÉGIA DAS CIDADES',
    cityTitle: 'Seus heróis em casa.<br> Suas tropas com os aliados.',
    cityLead: 'Cada jogador envia tropas para reforçar os outros e recebe reforços para defender sua cidade. O objetivo: proteger toda a aliança e permitir que todos ganhem pontos.',
    card1Eyebrow: '01 / PREPARAR',
    card1Title: 'Mantenha seus 3 melhores heróis',
    card1Body: 'Deixe seus três melhores heróis na cidade. No <strong>posto de comando</strong>, fixe-os para evitar enviá-los por engano com suas marchas.',
    card2Eyebrow: '02 / ESSENCIAL',
    card2Title: 'Envie todas as suas tropas',
    card2Body: '<p>Envie suas tropas para reforçar aliados e deixe os reforços deles defenderem sua cidade. <strong>Manter seus heróis não significa manter suas tropas.</strong></p><p>Tropas em casa podem matar Vikings no lugar dos reforços: seus aliados perdem oportunidades de ganhar pontos.</p>',
    card3Eyebrow: '03 / DISTRIBUIR',
    card3Title: 'Escolha quem reforçar',
    card3Body: '<p>A lista de <strong>Membros</strong> do evento mostra quem está online, quem precisa de reforços e quem você já está reforçando.</p><p><a href="#reinforcements">Veja como usar essa lista →</a></p>',
    card4Eyebrow: '04 / DIMENSIONAR',
    card4Title: 'Busque 200.000 reforços por cidade',
    card4Body: 'Essa é a referência da nossa aliança para resistir até o fim: <strong>200.000 no total em uma cidade</strong>, não 200.000 por jogador que envia reforços.<p>Ajuste conforme a força das tropas, a dificuldade e os relatórios. Uma cidade bem protegida pode dar prioridade a outra com menos reforços.</p>',
    reinfEyebrow: 'NO JOGO / PÁGINA DO EVENTO',
    reinfTitle: 'Quem está online? Quem estou reforçando? Quem ajudar?',
    reinfPath: 'Abra o evento <strong>Vikings</strong> → toque em <strong>Membros</strong>.',
    reinfLead: 'Essa lista dá uma visão geral da aliança. Antes de enviar uma marcha, confira estas três informações:',
    reinfCheck1: '<strong>Quem está online?</strong><p>Confira o status de conexão de cada membro. Identifique os jogadores online que precisam de ajuda prioritária por estarem com poucos reforços.</p>',
    reinfCheck2: '<strong>Quem já tem bons reforços?</strong><p>Compare o nível de reforço das cidades. Nossa referência é de <strong>200.000 tropas de reforço no total por cidade</strong>: procure primeiro as que têm poucos ou nenhum reforço e ajuste conforme os relatórios.</p>',
    reinfCheck3: '<strong>Quem já estou reforçando?</strong><p>Confira nessa mesma lista os reforços que você já enviou. Identifique os destinatários antes de escolher para onde enviar outra marcha: o objetivo é distribuir a ajuda entre os membros.</p>',
    reinfBoxTitle: 'Como escolher seu próximo destino?',
    reinfBoxBody: '<p><strong>Primeiro, um membro online com poucos reforços.</strong> Se os membros online já estiverem bem protegidos, ajude outras cidades que precisem. Evite concentrar todas as marchas em uma cidade enquanto outra fica sem ajuda.</p><p>Por exemplo, entre dois membros online, um com 80.000 reforços e outro com 200.000, priorize o de 80.000, salvo instrução do R4 ou relatório que indique outra necessidade.</p>',
    reinfTakeaway: 'Volte regularmente a Evento → Membros para acompanhar a distribuição. Para mover reforços já posicionados, confira os relatórios e respeite os GO do R4.',
    pointsEyebrow: 'POR QUE ESVAZIAR SUA CIDADE?',
    pointsTitle: 'Uma defesa, duas fontes de pontos.',
    pointsBody: '<p>Você ganha pontos pelos Vikings mortos na sua cidade, inclusive pelos reforços. Suas tropas também podem ganhar pontos de reforço nas cidades dos aliados.</p><p><strong>Deixar os outros defenderem sua cidade não tira seus pontos de defesa.</strong> Se suas próprias tropas fizerem as eliminações, elas reduzem os pontos de reforço disponíveis para quem veio ajudar.</p>',
    pointsExTitle: 'Exemplo: 1.000 Vikings eliminados',
    pointsExBody: '<p><strong>Sua cidade está sem tropas próprias:</strong> os reforços eliminam os 1.000 Vikings. Você recebe os pontos de defesa correspondentes; os aliados ganham pontos pelas eliminações.</p><p><strong>Suas tropas eliminam 300:</strong> sobram apenas 700 Vikings para os reforços eliminarem. Para o mesmo total de 1.000 Vikings mortos, seus aliados têm menos oportunidades de pontuar.</p><small>Exemplo ilustrativo em número de eliminações, não uma tabela de pontos. O valor em pontos depende da onda e da dificuldade.</small>',
    fireHealEyebrow: 'DURANTE O EVENTO / CURA E FOGO',
    fireHealTitle: 'Não cure. Não apague o fogo.',
    fireHealCol1: '<strong>Por que não curar na enfermaria?</strong><p>Ao curar tropas, elas voltam imediatamente para sua cidade. Elas matam Vikings no lugar dos reforços dos aliados, tirando os pontos de eliminação deles. Além disso, isso gasta aceleradores: espere o fim do evento para curar com calma.</p>',
    fireHealCol2: '<strong>Por que deixar sua cidade queimar?</strong><p>Uma cidade em chamas avisa à aliança que já sofreu uma derrota (após 2 derrotas, ela não é mais atacada). Apagar o fogo gasta gemas à toa e confunde os reforços. Além disso, o fogo não impede você de ganhar todos os seus pontos com os aliados e no QG!</p>',
    fireHealTakeaway: 'A atitude certa: deixe queimar e não mexa na enfermaria. Curas e reparos só depois do evento!',
    reportEyebrow: '05 / CONFERIR APÓS O ATAQUE',
    reportTitle: 'O relatório dá duas respostas.',
    reportCol1: '<strong>Minhas próprias tropas mataram Vikings?</strong><p>Confira a linha do seu jogador nos detalhes das eliminações. A meta é <strong>0 eliminações pelas suas próprias tropas na sua cidade</strong>. Se houver alguma, verifique as tropas que ficaram ou voltaram para casa e envie-as como reforço conforme as instruções.</p>',
    reportCol2: '<strong>100% dos Vikings foram mortos?</strong><p>Confira a porcentagem no canto superior direito do relatório. A meta é <strong>100% de eliminações no total pelos defensores</strong>. Se for menos, avise sobre a cidade para ajustar os reforços com o R4.</p>',
    reportTakeaway: 'O resultado ideal: suas tropas fazem 0 eliminações em casa, os reforços fazem 100%.',
    citySourceNote: 'Instruções e referência de 200.000 reforços: estratégia da nossa aliança. Mecânica de pontos: <a href="https://kingshotguides.com/guide/viking-vengeance-expert-guide-beginner-to-advanced/">guia da comunidade Kingshot Guides</a>. Nas ondas 10 e 20, siga os GO do R4 abaixo.',
    asideEyebrow: 'O PLANO DE BATALHA',
    asideTitle: 'Nenhuma saída <br>sem sinal.',
    strategyStep1: '<strong>Manter os reforços</strong><p>Conferir os relatórios e o mapa antes de sair dos aliados.</p>',
    strategyStep2: '<strong>Retirar ao GO</strong><p>Retirar os reforços e esperar Raagui chegar ao QG.</p>',
    strategyStep3: '<strong>Entrar no QG</strong><p>Entrar ao segundo GO e ficar até a confirmação do ataque.</p>',
    strategyStep4: '<strong>Voltar ao aliado</strong><p>Ao GO de saída, retirar as tropas e reforçar o mesmo aliado ao GO de reforços.</p>',
    warningBody: '<strong>O cronômetro não é confirmação.</strong>O cronômetro zerar não basta: confira os relatórios de batalha e o mapa.',
    asideSourceNote: 'Estratégia da aliança, baseada nas instruções fornecidas pelo R4.',
    messagesEyebrow: 'PRONTAS PARA O CHAT',
    messagesTitle: 'Mensagens para copiar',
    groupAria: 'Momento das mensagens',
    groupExplanations: '1. Entender e se preparar',
    groupCoordination: '2. Durante o evento',
    groupExplanationsHint: 'Escolha um assunto para entender a estratégia e copie a mensagem em português ou inglês.',
    groupCoordinationHint: 'Mensagens das ondas 10 e 20 e lembretes em ordem: instruções, organização, esperas, GO e lembretes. Copie cada uma no momento certo.',
    copyToast: (lang) => `Mensagem em ${lang.toUpperCase()} copiada. Pronta para colar no chat!`,
    copyUnavailable: 'Cópia indisponível: selecione o texto para copiar.',
    footerContent: '<span>KINGSHOT / VIKINGS</span><span>Os relatórios. O mapa. Depois, o GO.</span>',
    noscript: 'Ative o JavaScript para ver e copiar as mensagens rápidas.'
  },
  fr: {
    pageTitle: 'Vikings — Poste de commandement',
    metaDesc: 'Stratégie Vikings : préparer sa ville, comprendre les points, répartir les renforts et coordonner les vagues 10 et 20.',
    skip: 'Aller aux messages',
    langAria: 'Langue du site',
    introEyebrow: 'COORDINATION D’ALLIANCE',
    introH1: 'Chaque mouvement.<br><em>Au bon signal.</em>',
    introCopy: 'La stratégie et les messages pour garder l’alliance synchronisée pendant les Vikings.',
    waveAria: 'Vagues 10 et 20',
    waveMarkSpan: 'VAGUES QG',
    waveMarkStrong: '10 <i>&</i> 20',
    waveMarkSmall: 'Un seul mot d’ordre : attendre le GO.',
    pageNavAria: 'Navigation du guide',
    navCityGuide: 'Préparer les villes',
    navReinforcements: 'Qui renforcer ?',
    navPoints: 'Comprendre les points',
    navFireHeal: 'Soin et feu',
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
    fireHealEyebrow: 'PENDANT L’ÉVÉNEMENT / SOIN ET FEU',
    fireHealTitle: 'Ne soigne pas. N’éteins pas le feu.',
    fireHealCol1: '<strong>Pourquoi ne pas soigner dans l’infirmerie ?</strong><p>Quand tu soignes des troupes, elles retournent immédiatement dans ta ville. Elles tuent alors des Vikings à la place des renforts de tes alliés, ce qui les prive de leurs points d’élimination. En plus, cela gaspille des accélérateurs : attends la fin de l’événement pour soigner sereinement.</p>',
    fireHealCol2: '<strong>Pourquoi laisser brûler sa ville ?</strong><p>Une ville en feu signale à l’alliance qu’elle a déjà subi un échec (après 2 défaites, elle n’est plus ciblée). Éteindre coûte des gemmes pour rien et désoriente les renforts. De plus, être en feu ne t’empêche pas de marquer tous tes points chez tes alliés et au QG !</p>',
    fireHealTakeaway: 'Le bon réflexe : laisse brûler et ne touche pas à l’infirmerie. Soins et réparations se font après l’événement !',
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
    groupCoordinationHint: 'Les messages des vagues 10 et 20 et de rappel, dans l’ordre : consignes, organisation, attentes, GO et rappels. Copie chacun au bon moment.',
    copyToast: (lang) => `Message ${lang.toUpperCase()} copié. Prêt à coller dans le chat !`,
    copyUnavailable: 'Copie indisponible : sélectionne le texte pour le copier.',
    footerContent: '<span>KINGSHOT / VIKINGS</span><span>Les rapports. La carte. Puis le GO.</span>',
    noscript: 'Active JavaScript pour afficher et copier les messages rapides.'
  },
  en: {
    pageTitle: 'Vikings — Command Center',
    metaDesc: 'Viking Strategy: prepare your city, understand points, distribute reinforcements, and coordinate waves 10 and 20.',
    skip: 'Skip to messages',
    langAria: 'Site language',
    introEyebrow: 'ALLIANCE COORDINATION',
    introH1: 'Every move.<br><em>On the right signal.</em>',
    introCopy: 'Strategy and messages to keep the alliance synchronized during Vikings.',
    waveAria: 'Waves 10 and 20',
    waveMarkSpan: 'HQ WAVES',
    waveMarkStrong: '10 <i>&</i> 20',
    waveMarkSmall: 'Only one rule: wait for the GO.',
    pageNavAria: 'Guide navigation',
    navCityGuide: 'Prepare cities',
    navReinforcements: 'Who to reinforce?',
    navPoints: 'Understand points',
    navFireHeal: 'Heal & fire',
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
    fireHealEyebrow: 'DURING THE EVENT / HEAL & FIRE',
    fireHealTitle: 'Do not heal. Do not extinguish fires.',
    fireHealCol1: '<strong>Why not heal in the infirmary?</strong><p>Healing troops returns them immediately to your city. They will kill Vikings instead of your allies’ reinforcements, stealing their elimination points. It also wastes speedups: wait until the event ends to heal.</p>',
    fireHealCol2: '<strong>Why let your city burn?</strong><p>A burning city signals to the alliance that a defense has failed (after 2 defeats, it is no longer targeted). Putting it out wastes gems and misleads allies. Furthermore, burning does not stop you from scoring all your points with allies and at HQ!</p>',
    fireHealTakeaway: 'The right move: let it burn and do not touch the infirmary. Heal and repair after the event!',
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
    groupCoordinationHint: 'Wave 10 & 20 messages and reminders in order: instructions, setup, waiting, GO signals, and reminders. Copy each at the right time.',
    copyToast: (lang) => `${lang.toUpperCase()} message copied. Ready to paste in chat!`,
    copyUnavailable: 'Clipboard unavailable: please select text to copy.',
    footerContent: '<span>KINGSHOT / VIKINGS</span><span>Reports. Map. Then the GO.</span>',
    noscript: 'Enable JavaScript to view and copy quick messages.'
  },
  es: {
    pageTitle: 'Vikingos — Puesto de mando',
    metaDesc: 'Estrategia de Vikingos: prepara tu ciudad, comprende los puntos, distribuye refuerzos y coordina las oleadas 10 y 20.',
    skip: 'Ir a los mensajes',
    langAria: 'Idioma del sitio',
    introEyebrow: 'COORDINACIÓN DE ALIANZA',
    introH1: 'Cada movimiento.<br><em>A la señal correcta.</em>',
    introCopy: 'La estrategia y los mensajes para mantener a la alianza sincronizada durante Vikingos.',
    waveAria: 'Oleadas 10 y 20',
    waveMarkSpan: 'OLEADAS CG',
    waveMarkStrong: '10 <i>&</i> 20',
    waveMarkSmall: 'Una sola regla: esperar la señal de GO.',
    pageNavAria: 'Navegación de la guía',
    navCityGuide: 'Preparar ciudades',
    navReinforcements: '¿A quién reforzar?',
    navPoints: 'Entender los puntos',
    navFireHeal: 'Curación y fuego',
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
    fireHealEyebrow: 'DURANTE EL EVENTO / CURACIÓN Y FUEGO',
    fireHealTitle: 'No cures. No apagues el fuego.',
    fireHealCol1: '<strong>¿Por qué no curar en la enfermería?</strong><p>Al curar tropas, regresan de inmediato a tu ciudad. Matarán vikingos en lugar de los refuerzos aliados, quitándoles puntos de bajas. Además, gasta aceleradores: espera a que termine el evento para curar.</p>',
    fireHealCol2: '<strong>¿Por qué dejar que tu ciudad arda?</strong><p>Una ciudad en llamas indica a la alianza que sufrió una derrota (tras 2 derrotas, ya no recibe ataques). Apagarlo cuesta gemas y desorienta los refuerzos. ¡Además, arder no te impide ganar todos tus puntos en aliados y CG!</p>',
    fireHealTakeaway: 'La clave: déjalo arder y no toques la enfermería. ¡Las curaciones y reparaciones se hacen tras el evento!',
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
    groupCoordinationHint: 'Los mensajes de las oleadas 10 y 20 y de recordatorio en orden: consignas, organización, esperas, señales de GO y recordatorios. Copia cada uno a su debido tiempo.',
    copyToast: (lang) => `¡Mensaje ${lang.toUpperCase()} copiado. Listo para pegar en el chat!`,
    copyUnavailable: 'Portapapeles no disponible: por favor, selecciona el texto para copiarlo.',
    footerContent: '<span>KINGSHOT / VIKINGS</span><span>Los informes. El mapa. Y luego la señal de GO.</span>',
    noscript: 'Activa JavaScript para ver y copiar los mensajes rápidos.'
  },
  ar: {
    pageTitle: 'الفايكنغز — مركز القيادة',
    metaDesc: 'استراتيجية الفايكنغز: جهز مدينتك، افهم النقاط، وزع التعزيزات ونسق الموجتين 10 و20.',
    skip: 'الانتقال إلى الرسائل',
    langAria: 'لغة الموقع',
    introEyebrow: 'تنسيق التحالف',
    introH1: 'كل تحرك.<br><em>في الإشارة المناسبة.</em>',
    introCopy: 'الاستراتيجية والرسائل للحفاظ على تزامن التحالف خلال الفايكنغز.',
    waveAria: 'الموجتان 10 و20',
    waveMarkSpan: 'موجات المقر',
    waveMarkStrong: '10 <i>&</i> 20',
    waveMarkSmall: 'قاعدة واحدة: انتظر إشارة الانطلاق (GO).',
    pageNavAria: 'التنقل في الدليل',
    navCityGuide: 'تجهيز المدن',
    navReinforcements: 'من نعزز؟',
    navPoints: 'فهم النقاط',
    navFireHeal: 'العلاج والنيران',
    navMessages: 'رسائل للنسخ',
    cityEyebrow: 'استراتيجية المدن',
    cityTitle: 'أبطالك في مدينتك.<br> قواتك لدى حلفائك.',
    cityLead: 'يرسل كل عضو قواته لتعزيز الآخرين ويتلقى تعزيزات للدفاع عن مدينته. الهدف: حماية التحالف بأكمله وتمكين الجميع من كسب النقاط.',
    card1Eyebrow: '01 / تجهيز',
    card1Title: 'احتفظ بأفضل 3 أبطال لديك',
    card1Body: 'اترك أفضل ثلاثة أبطال في مدينتك. في <strong>مركز القيادة</strong>، قم بتثبيتهم لمنع إرسالهم بالخطأ مع مسيراتك.',
    card2Eyebrow: '02 / أساسي',
    card2Title: 'أخرج جميع قواتك',
    card2Body: '<p>أرسل قواتك كتعزيزات لحلفائك واجعل تعزيزاتهم تدافع عن مدينتك. <strong>الاحتفاظ بأبطالك لا يعني إبقاء قواتك في مدينتك.</strong></p><p>القوات المتبقية في مدينتك قد تقتل الفايكنغز بدلاً من التعزيزات: مما يحرم حلفاءك من فرص كسب النقاط.</p>',
    card3Eyebrow: '03 / توزيع',
    card3Title: 'اختر من تعزز',
    card3Body: '<p>تتيح قائمة <strong>الأعضاء</strong> في الحدث معرفة من متصل، ومن يحتاج لتعزيزات، ومن تعززه بالفعل.</p><p><a href="#reinforcements">شاهد كيفية استخدام هذه القائمة ←</a></p>',
    card4Eyebrow: '04 / التقدير',
    card4Title: 'استهدف 200,000 تعزيز لكل مدينة',
    card4Body: 'هذا هو معيار تحالفنا للصمود حتى النهاية: <strong>200,000 إجمالي في المدينة الواحدة</strong>، وليس 200,000 من كل شخص يعززها.<p>عدل ذلك حسب قوة القوات والصعوبة والتقارير. المدينة المحمية جيداً تفسح المجال لمدينة أقل تعزيزاً.</p>',
    reinfEyebrow: 'في اللعبة / صفحة الحدث',
    reinfTitle: 'من متصل؟ من أعزز؟ من نساعد؟',
    reinfPath: 'افتح حدث <strong>الفايكنغز</strong> ← اضغط على <strong>الأعضاء</strong>.',
    reinfLead: 'تمنحك هذه القائمة نظرة عامة على التحالف. قبل إرسال أي مسيرة، طابق هذه المعلومات الثلاث:',
    reinfCheck1: '<strong>من متصل بالإنترنت؟</strong><p>تحقق من حالة اتصال كل عضو. حدد اللاعبين المتصلين لمساعدتهم كأولوية عندما تنقصهم التعزيزات.</p>',
    reinfCheck2: '<strong>من لديه تعزيزات جيدة بالفعل؟</strong><p>قارن مستوى التعزيزات بين المدن. معيارنا هو <strong>200,000 جندي تعزيز إجمالاً لكل مدينة</strong>: ابحث أولاً عن المدن ذات التعزيزات القليلة أو المعدومة، ثم عدل حسب التقارير.</p>',
    reinfCheck3: '<strong>من الذي أعززه بالفعل؟</strong><p>راجع التعزيزات التي أرسلتها في نفس القائمة. حدد وجهاتها قبل اختيار إرسال مسيرة أخرى: الهدف هو توزيع المساعدة بين الأعضاء.</p>',
    reinfBoxTitle: 'كيف تختار وجهتك التالية؟',
    reinfBoxBody: '<p><strong>أولاً، عضو متصل تنقصه التعزيزات.</strong> إذا كان الأعضاء المتصلون مغطين جيداً، ساعد المدن الأخرى المحتاجة. تجنب تركيز كل المسيرات على مدينة واحدة بينما تبقى أخرى دون مساعدة.</p><p>على سبيل المثال، بين عضوين متصلين، أحدهما لديه 80,000 تعزيز والآخر 200,000، اكمل الأول ذو 80,000 كأولوية، إلا إذا كانت هناك تعليمات من R4 أو تقرير يوضح حاجة مختلفة.</p>',
    reinfTakeaway: 'عد بانتظام إلى الحدث ← الأعضاء لمتابعة التوزيع. لنقل تعزيزات موجودة بالفعل، تحقق من التقارير والتزم بإشارات GO من R4.',
    pointsEyebrow: 'لماذا تفرغ مدينتك؟',
    pointsTitle: 'دفاع واحد، ومصدران للنقاط.',
    pointsBody: '<p>تكسب نقاطاً مقابل الفايكنغز الذين يُقتلون في مدينتك، بما في ذلك من قِبل التعزيزات. ويمكن لقواتك أيضاً كسب نقاط التعزيز لدى حلفائك.</p><p><strong>دفاع الآخرين عن مدينتك لا يسلبك نقاط الدفاع الخاصة بك.</strong> ولكن إذا قامت قواتك بالقتل، فإنها تقلل من نقاط التعزيز المتاحة لمن جاء لمساعدتك.</p>',
    pointsExTitle: 'مثال: القضاء على 1,000 فايكنغ',
    pointsExBody: '<p><strong>مدينتك فارغة من قواتك:</strong> التعزيزات تقضي على 1,000 فايكنغ. تحصل أنت على نقاط الدفاع المقابلة؛ ويكسب الحلفاء نقاطاً لتصفياتهم.</p><p><strong>قواتك تقضي على 300:</strong> يتبقى 700 فايكنغ فقط لتقضي عليهم التعزيزات. مع نفس إجمالي 1,000 فايكنغ مقتول، يحصل حلفاؤك على فرص أقل لكسب النقاط.</p><small>مثال توضيحي لعدد التصفيات، وليس جدولاً للنقاط. تعتمد قيمة النقاط على الموجة ومستوى الصعوبة.</small>',
    fireHealEyebrow: 'خلال الحدث / العلاج والنيران',
    fireHealTitle: 'لا تعالج. لا تطفئ النيران.',
    fireHealCol1: '<strong>لماذا لا تعالج في المستوصف؟</strong><p>عندما تعالج القوات، فإنها تعود فوراً إلى مدينتك. وتقوم بقتل الفايكنغز بدلاً من تعزيزات حلفائك، مما يحرمهم من نقاط التصفية. بالإضافة إلى ذلك، هذا يهدر تسريعات: انتظر نهاية الحدث للعلاج بهدوء.</p>',
    fireHealCol2: '<strong>لماذا تترك مدينتك تحترق؟</strong><p>المدينة المشتعلة تشير للتحالف إلى أنها تعرضت للهزيمة بالفعل (بعد هزيمتين، لا تُستهدف بعد ذلك). إطفاء النيران يكلف جواهر بلا فائدة ويربك التعزيزات. كما أن الاحتراق لا يمنعك من كسب جميع نقاطك لدى الحلفاء وفي المقر!</p>',
    fireHealTakeaway: 'التصرف الصحيح: اتركها تحترق ولا تلمس المستوصف. العلاج والإصلاحات تتم بعد الحدث!',
    reportEyebrow: '05 / التحقق بعد الهجوم',
    reportTitle: 'التقرير يقدم إجابتين.',
    reportCol1: '<strong>هل قتلت قواتي الخاصة أي فايكنغز؟</strong><p>انظر إلى سطر لاعبك في تفاصيل التصفيات. الهدف هو <strong>0 تصفية من قواتك الخاصة في مدينتك</strong>. إذا رأيت أي تصفيات، فتحقق من القوات المتبقية أو العائدة وأعد إرسالها كتعزيزات وفقاً للتعليمات.</p>',
    reportCol2: '<strong>هل تم القضاء على 100% من الفايكنغز؟</strong><p>تحقق من النسبة المئوية في أعلى يمين التقرير. الهدف هو <strong>100% تصفيات إجمالاً بواسطة المدافعين</strong>. وإذا كانت أقل، أبلغ عن المدينة لتعديل تعزيزاتها مع R4.</p>',
    reportTakeaway: 'النتيجة المثالية: قواتك الخاصة تحقق 0 تصفية في مدينتك، والتعزيزات تحقق 100%.',
    citySourceNote: 'التعليمات ومعيار 200,000 تعزيز: استراتيجية تحالفنا. آلية النقاط: <a href="https://kingshotguides.com/guide/viking-vengeance-expert-guide-beginner-to-advanced/">دليل مجتمع Kingshot Guides</a>. للموجتين 10 و20، اتبع إشارات GO من R4 أدناه.',
    asideEyebrow: 'خطة المعركة',
    asideTitle: 'لا انطلاق <br>دون إشارة.',
    strategyStep1: '<strong>الحفاظ على التعزيزات</strong><p>تحقق من التقارير والخريطة قبل مغادرة الحلفاء.</p>',
    strategyStep2: '<strong>الاستدعاء عند إشارة GO</strong><p>اسحب التعزيزات، ثم انتظر وصول راغي إلى المقر الرئيسي.</p>',
    strategyStep3: '<strong>الانضمام إلى المقر الرئيسي</strong><p>ادخل عند إشارة GO الثانية وابقى حتى تأكيد الهجوم.</p>',
    strategyStep4: '<strong>العودة إلى الحليف</strong><p>عند إشارة GO للخروج، استدعِ القوات، ثم عزز نفس الحليف عند إشارة GO للتعزيزات.</p>',
    warningBody: '<strong>المؤقت ليس دليلاً قاطعاً.</strong>انتهاء المؤقت لا يكفي: تحقق من تقارير المعركة والخريطة.',
    asideSourceNote: 'استراتيجية التحالف، مأخوذة من تعليمات R4 المقدمة.',
    messagesEyebrow: 'جاهزة للدردشة',
    messagesTitle: 'رسائل للنسخ',
    groupAria: 'توقيت الرسائل',
    groupExplanations: '1. الفهم والاستعداد',
    groupCoordination: '2. خلال الحدث',
    groupExplanationsHint: 'اختر موضوعاً لفهم الاستراتيجية، ثم انسخ الرسالة بالعربية أو الإنجليزية.',
    groupCoordinationHint: 'رسائل الموجتين 10 و20 والتذكيرات بالترتيب: التعليمات، التنظيم، الانتظار، إشارات GO والتذكيرات. انسخ كل واحدة في الوقت المناسب.',
    copyToast: (lang) => `تم نسخ الرسالة بـ ${lang === 'ar' ? 'العربية' : lang.toUpperCase()}. جاهزة للصق في الدردشة!`,
    copyUnavailable: 'النسخ غير متاح: حدد النص لنسخه يدويًا.',
    footerContent: '<span>KINGSHOT / VIKINGS</span><span>التقارير. الخريطة. ثم إشارة الانطلاق (GO).</span>',
    noscript: 'يرجى تفعيل JavaScript لعرض ونسخ الرسائل السريعة.'
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
  if (saved && ['fr', 'en', 'es', 'pt-BR', 'ar'].includes(saved)) {
    language = saved;
  }
} catch {}

let toastTimer;
const copyIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></svg>';

function getMessageTitle(item, lang) {
  if (lang === 'ar' && item.titleAr) return item.titleAr;
  if (lang === 'pt-BR' && item.titlePtBr) return item.titlePtBr;
  if (lang === 'en' && item.titleEn) return item.titleEn;
  if (lang === 'es' && item.titleEs) return item.titleEs;
  return item.title;
}

function messageCard(item, i) {
  const currentTitle = getMessageTitle(item, language);

  let copyButtonsHtml = '';
  if (language === 'ar') {
    copyButtonsHtml = `
      <button type="button" class="copy-small" data-copy="${i}" data-copy-lang="ar" aria-label="نسخ بالعربية: ${currentTitle}">${copyIcon} العربية</button>
      <button type="button" class="copy-small" data-copy="${i}" data-copy-lang="en" aria-label="نسخ بالإنجليزية: ${currentTitle}">${copyIcon} EN</button>
    `;
  } else if (language === 'fr') {
    copyButtonsHtml = `
      <button type="button" class="copy-small" data-copy="${i}" data-copy-lang="fr" aria-label="Copier en français : ${currentTitle}">${copyIcon} FR</button>
      <button type="button" class="copy-small" data-copy="${i}" data-copy-lang="en" aria-label="Copier en anglais : ${currentTitle}">${copyIcon} EN</button>
    `;
  } else if (language === 'pt-BR') {
    copyButtonsHtml = `
      <button type="button" class="copy-small" data-copy="${i}" data-copy-lang="pt-BR" aria-label="Copiar em português: ${currentTitle}">${copyIcon} PT-BR</button>
      <button type="button" class="copy-small" data-copy="${i}" data-copy-lang="en" aria-label="Copiar em inglês: ${currentTitle}">${copyIcon} EN</button>
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
    : (language === 'ar'
      ? `نسخ: ${currentTitle}`
      : (['es', 'pt-BR'].includes(language) ? `Copiar: ${currentTitle}` : `Copy: ${currentTitle}`));

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
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
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
