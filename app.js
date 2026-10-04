const explanationMessages = [
  { title: '🚨 VIKINGS : Le principe et les points', titleEn: '🚨 VIKINGS: The basics and points', titleEs: '🚨 VIKINGOS: El principio y los puntos', titleAr: '🚨 الفايكنغز: المبدأ والنقاط', short: 'Principe et points', tag: 'COMPRENDRE', tone: 'wait',
    titlePtBr: '🚨 VIKINGS: O básico e os pontos',
    titlePl: '🚨 WIKINGOWIE: Zasady i punkty',
    titleTr: '🚨 VİKİNGLER: Temel kural ve puanlar',
    ar: '🛡️ عزز حلفاءك واجعل قواتهم تدافع عن مدينتك: تحتفظ بكامل نقاط الدفاع الخاصة بك!\n\n⚠️ القوات المتبقية في مدينتك تسلب التصفيات من التعزيزات وتقلل نقاط حلفائك.\n\n📊 مثال (1000 فايكنغ في مدينتك):\n• التعزيزات وحدها = 1000 تصفية للحلفاء.\n• قواتك تقضي على 300 = يتبقى 700 فقط للحلفاء.\nتحتفظ بنقاط الدفاع في الحالتين! (عدد الفايكنغز، وليس سلم النقاط).',
    'pt-BR': '🛡️ Reforce seus aliados e deixe que defendam sua cidade: você mantém todos os seus pontos de defesa!\n\n⚠️ Tropas em casa tiram eliminações dos reforços e reduzem os pontos dos aliados.\n\n📊 Exemplo (1.000 Vikings mortos na sua cidade):\n• Só reforços = 1.000 eliminações para os aliados.\n• Suas tropas fazem 300 = sobram 700 para os aliados.\nVocê mantém os pontos de defesa nos dois casos! (Número de Vikings, não valor em pontos).',
    pl: '🛡️ Wspieraj sojuszników i pozwól im bronić twojego miasta: zachowujesz wszystkie własne punkty obrony!\n\n⚠️ Wojska zostawione w domu zabierają zabójstwa posiłkom i zmniejszają punkty sojuszników.\n\n📊 Przykład (1 000 Wikingów w twoim mieście):\n• Same posiłki = 1 000 zabójstw dla sojuszników.\n• Twoje wojska zabiją 300 = tylko 700 zostaje dla sojuszników.\nW obu przypadkach zachowujesz punkty obrony! (Liczba Wikingów, nie tabela punktów).',
    tr: '🛡️ Müttefiklerinizi destekleyin, şehrinizi onların birlikleri savunsun: savunma puanlarınızı korursunuz!\n\n⚠️ Şehrinizde kalan birlikler takviyelerden öldürme çalar ve müttefiklerin puanını düşürür.\n\n📊 Örnek (şehrinizde 1.000 Viking öldürüldü):\n• Yalnızca takviyeler = müttefiklere 1.000 öldürme.\n• Birlikleriniz 300 alırsa = müttefiklere sadece 700 kalır.\nHer iki durumda da savunma puanlarınızı korursunuz!',
    fr: '🛡️ Renforcez vos alliés et faites défendre votre ville par les leurs : vous gardez tous vos points de défense chez vous !\n\n⚠️ Des troupes restées chez vous prennent des éliminations aux renforts et réduisent les points de vos alliés.\n\n📊 Exemple (1 000 Vikings tués chez vous) :\n• Renforts seuls = 1 000 éliminations pour les alliés.\n• Vos troupes en font 300 = seulement 700 pour les alliés.\nVous gardez vos points de défense dans les deux cas !',
    en: '🛡️ Reinforce your allies and let their troops defend your city: you keep all your city defense points!\n\n⚠️ Troops left at home take kills from reinforcements and reduce your allies’ points.\n\n📊 Example (1,000 Vikings killed at your city):\n• Reinforcements do all: 1,000 kills shared by allies.\n• Your troops get 300: only 700 remain for allies.\nYou keep defense points in both cases! (Viking counts, not point values).',
    es: '🛡️ ¡Refuerza a tus aliados y deja que defiendan tu ciudad: conservas todos tus puntos de defensa!\n\n⚠️ Las tropas que dejas en casa quitan bajas a los refuerzos y reducen los puntos de tus aliados.\n\n📊 Ejemplo (1 000 vikingos en tu ciudad):\n• Solo refuerzos = 1 000 bajas para los aliados.\n• Tus tropas hacen 300 = solo quedan 700 para los aliados.\n¡Conservas tus puntos de defensa en ambos casos! (Cantidades de vikingos, no escala de puntos).' },
  { title: '🚨 VIKINGS : Préparer sa ville', titleEn: '🚨 VIKINGS: Prepare your city', titleEs: '🚨 VIKINGOS: Preparar la ciudad', titleAr: '🚨 الفايكنغز: تجهيز المدينة', short: 'Héros et troupes', tag: 'COMPRENDRE', tone: 'wait',
    titlePtBr: '🚨 VIKINGS: Prepare sua cidade',
    titlePl: '🚨 WIKINGOWIE: Przygotowanie miasta',
    titleTr: '🚨 VİKİNGLER: Şehrinizi hazırlayın',
    ar: '🦸 احتفظوا بأفضل 3 أبطال في مدينتكم وثبتوهم في مركز القيادة.\n⚔️ المشاة والفرسان أولاً، ثم الرماة إن سمحت السعة والدفاع.\nلتدافع تعزيزات الحلفاء عن مدينتكم. الهدف 0 تصفيات لقواتكم في مدينتكم وقتل 100% من الفايكنغ. راقبوا التقارير والقوات العائدة وعدّلوا مع R4.',
    'pt-BR': '🦸 Deixem os 3 melhores heróis em casa, fixos no posto de comando.\n⚔️ Infantaria e cavalaria primeiro; arqueiros depois se a capacidade e a defesa permitirem.\nOs reforços aliados defendem sua cidade. Busquem 0 eliminações pelas próprias tropas em casa E 100% dos Vikings mortos. Confiram relatórios e tropas que voltaram; ajustem com o R4.',
    pl: '🦸 Zostawcie 3 najlepszych bohaterów w domu, zablokowanych w centrum dowodzenia.\n⚔️ Najpierw piechota i kawaleria; potem łucznicy, jeśli pozwalają pojemność marszów i obrona.\nMiasta bronią posiłki sojuszników. Cel: 0 zabójstw własnych wojsk w domu ORAZ 100% zabitych Wikingów. Sprawdzajcie raporty i wracające wojska; korygujcie z R4.',
    tr: '🦸 En iyi 3 kahramanı şehirde, Komuta Merkezinde kilitli tutun.\n⚔️ Önce piyade ve süvari; kapasite ve savunma uygunsa ardından okçular.\nŞehrinizi müttefik takviyeleri savunsun. Hedef evde kendi birliklerinizden 0 öldürme VE Vikinglerin %100’ünün öldürülmesi. Raporları ve dönen birlikleri kontrol edin; R4 ile ayarlayın.',
    fr: '🦸 Gardez vos 3 meilleurs héros en ville, bloqués au poste de commandement.\n⚔️ Infanterie et cavalerie d’abord ; archers ensuite si la capacité et la défense le permettent.\nFaites défendre votre ville par les renforts alliés. Visez 0 kill par vos troupes chez vous ET 100 % des Vikings tués. Surveillez les rapports et les troupes revenues ; ajustez avec le R4.',
    en: '🦸 Keep your 3 best heroes at home, locked in the Command Center.\n⚔️ Infantry and cavalry first; archers next if capacity and defense allow.\nLet allied reinforcements defend your city. Aim for 0 kills by your troops at home AND 100% of Vikings killed. Watch reports and returning troops; adjust with R4.',
    es: '🦸 Dejad los 3 mejores héroes en casa, bloqueados en el puesto de mando.\n⚔️ Infantería y caballería primero; arqueros después si la capacidad y la defensa lo permiten.\nLos refuerzos aliados defienden vuestra ciudad. Buscad 0 bajas de tropas propias en casa Y 100 % de vikingos eliminados. Revisad informes y tropas que regresan; ajustad con R4.' },
  { title: '🚨 VIKINGS : Sortir ses troupes', titleEn: '🚨 VIKINGS: Sending troops out', titleEs: '🚨 VIKINGOS: Sacar las tropas', titleAr: '🚨 الفايكنغز: إخراج القوات', titlePtBr: '🚨 VIKINGS: Enviar as tropas', titlePl: '🚨 WIKINGOWIE: Wysyłanie wojsk', titleTr: '🚨 VİKİNGLER: Birlikleri gönderme', short: 'Sortie des troupes', tag: 'COMPRENDRE', tone: 'wait',
    fr: '⚔️ Sortez d’abord toute l’infanterie et la cavalerie, puis les archers si vos marches le permettent.\nAu niveau 11, testons la ville vide avec assez de renforts. Surveillez surtout les vagues 16–19 : objectif 0 kill par vos troupes chez vous ET 100 % des Vikings tués.\nSous 100 %, demandez plus de renforts ou rappelez des troupes avec le R4, sans découvrir un allié. La défense passe avant le 0 kill !',
    en: '⚔️ Send all infantry and cavalry first, then archers if your marches have room.\nAt level 11, test an empty city with enough reinforcements. Watch waves 16–19: aim for 0 kills by your own troops at home AND 100% of Vikings killed.\nBelow 100%, request more reinforcements or recall troops with R4, without leaving an ally exposed. Defense comes before 0 kills!',
    es: '⚔️ Sacad primero toda la infantería y caballería; después, arqueros si caben.\nEn nivel 11, probemos la ciudad vacía con suficientes refuerzos. Vigilad las oleadas 16–19: objetivo 0 bajas de tropas propias en casa Y 100 % de vikingos eliminados.\nPor debajo del 100 %, pedid más refuerzos o recuperad tropas con R4 sin dejar desprotegido a un aliado. ¡La defensa va antes que las 0 bajas!',
    ar: '⚔️ أخرجوا كل المشاة والفرسان أولاً، ثم الرماة إن اتسعت المسيرات.\nفي المستوى 11، لنختبر المدينة الخالية مع تعزيزات كافية. راقبوا الموجات 16–19: الهدف 0 تصفيات لقواتكم في مدينتكم وقتل 100% من الفايكنغ.\nإذا كانت النسبة أقل، اطلبوا تعزيزات إضافية أو أعيدوا قوات بالتنسيق مع R4 دون كشف دفاع حليف. الدفاع قبل هدف الصفر!',
    'pt-BR': '⚔️ Enviem primeiro toda a infantaria e cavalaria, depois arqueiros se couberem nas marchas.\nNo nível 11, vamos testar a cidade vazia com reforços suficientes. Atenção às ondas 16–19: meta de 0 eliminações pelas próprias tropas em casa E 100% dos Vikings mortos.\nAbaixo de 100%, peçam mais reforços ou retirem tropas com o R4, sem deixar um aliado desprotegido. A defesa vem antes do 0!',
    pl: '⚔️ Najpierw wyślijcie całą piechotę i kawalerię, potem łuczników, jeśli jest miejsce.\nNa poziomie 11 testujemy puste miasto z wystarczającymi posiłkami. Sprawdzajcie fale 16–19: cel to 0 zabójstw własnych wojsk w domu ORAZ 100% zabitych Wikingów.\nPoniżej 100% proście o więcej posiłków lub wycofajcie wojska z R4, nie odsłaniając sojusznika. Obrona jest ważniejsza niż 0!',
    tr: '⚔️ Önce tüm piyade ve süvariyi, yer varsa ardından okçuları gönderin.\n11. seviyede yeterli takviyeyle boş şehri deneyelim. 16–19. dalgalara dikkat: hedef evde kendi birliklerinizden 0 öldürme VE Vikinglerin %100’ünün öldürülmesi.\n%100 altında daha fazla takviye isteyin veya müttefiki savunmasız bırakmadan R4 ile birlikleri geri çağırın. Savunma, 0 öldürmeden önce gelir!' },
  { title: '🚨 VIKINGS : Préparez vos villes', titleEn: '🚨 VIKINGS: Prepare your cities', titleEs: '🚨 VIKINGOS: Preparad vuestras ciudades', titleAr: '🚨 الفايكنغز: جهزوا مدنكم', short: 'Préparation', tag: 'AVANT / 1', tone: 'wait',
    titlePtBr: '🚨 VIKINGS: Preparem suas cidades',
    titlePl: '🚨 WIKINGOWIE: Przygotujcie swoje miasta',
    titleTr: '🚨 VİKİNGLER: Şehirlerinizi hazırlayın',
    ar: '✅ أفضل 3 أبطال مثبتون في مركز القيادة.\n✅ المشاة والفرسان أولاً، ثم الرماة إن سمحت السعة والدفاع.\n✅ مدينتكم محمية بتعزيزاتهم.\nفي صفحة الحدث، افتحوا الفايكنغز ← الأعضاء: ستعرفون من متصل، ومستوى تعزيز كل مدينة، ومن تعززونه بالفعل. ساعدوا أولاً اللاعبين المتصلين ذوي التعزيزات القليلة، ثم المدن المحتاجة الأخرى.',
    'pt-BR': '✅ Seus 3 melhores heróis fixos no posto de comando.\n✅ Infantaria e cavalaria primeiro; arqueiros depois se a capacidade e a defesa permitirem.\n✅ Sua cidade defendida pelos reforços deles.\nNa página do evento, abram Vikings → Membros: vejam quem está online, o nível de reforço de cada cidade e quem vocês já estão reforçando. Ajudem primeiro os jogadores online com poucos reforços, depois as outras cidades que precisarem.',
    pl: '✅ 3 najlepszych bohaterów zablokowanych w centrum dowodzenia.\n✅ Najpierw piechota i kawaleria; potem łucznicy, jeśli pozwalają pojemność marszów i obrona.\n✅ Wasze miasto bronione przez ich posiłki.\nNa stronie wydarzenia otwórzcie Wikingowie → Członkowie: zobaczycie, kto jest online, poziom wsparcia każdego miasta i kogo już wspieracie. Pomóżcie najpierw graczom online ze słabym wsparciem, a potem innym potrzebującym miastom.',
    tr: '✅ En iyi 3 kahramanınız Komuta Merkezinde kilitli.\n✅ Önce piyade ve süvari; kapasite ve savunma uygunsa ardından okçular.\n✅ Şehriniz onların takviyeleriyle savunuluyor.\nEtkinlik sayfasında Vikingler → Üyeler bölümünü açın: kimin çevrimiçi olduğunu, şehirlerin takviye durumunu ve kime takviye gönderdiğinizi görürsünüz. Önce az takviyeli çevrimiçi üyelere, ardından diğer ihtiyaç duyan şehirlere yardım edin.',
    fr: '✅ Vos 3 meilleurs héros bloqués au poste de commandement.\n✅ Infanterie et cavalerie d’abord ; archers ensuite si la capacité et la défense le permettent.\n✅ Votre ville défendue par leurs renforts.\nDans la page de l’événement, ouvrez Vikings → Membres : vous verrez qui est en ligne, le niveau de renfort de chaque ville et les membres auxquels vous envoyez déjà des renforts. Aidez d’abord les joueurs en ligne peu renforcés, puis les autres villes dans le besoin.',
    en: '✅ Your 3 best heroes locked in the Command Center.\n✅ Infantry and cavalry first; archers next if capacity and defense allow.\n✅ Your city defended by their reinforcements.\nOn the event page, open Vikings → Members: you will see who is online, the reinforcement level of each city, and the members you are already sending reinforcements to. Help online players with few reinforcements first, then other cities in need.',
    es: '✅ Vuestros 3 mejores héroes bloqueados en el puesto de mando.\n✅ Infantería y caballería primero; arqueros después si la capacidad y la defensa lo permiten.\n✅ Vuestra ciudad defendida por sus refuerzos.\nEn la página del evento, abrid Vikingos → Miembros: veréis quién está en línea, el nivel de refuerzos de cada ciudad y los miembros a quienes ya enviáis refuerzos. Ayudad primero a los jugadores en línea poco reforzados y luego a las demás ciudades necesitadas.' },
  { title: '🚨 VIKINGS : Répartir les renforts', titleEn: '🚨 VIKINGS: Distribute reinforcements', titleEs: '🚨 VIKINGOS: Repartir los refuerzos', titleAr: '🚨 الفايكنغز: توزيع التعزيزات', short: 'Qui renforcer ?', tag: 'COMPRENDRE', tone: 'wait',
    titlePtBr: '🚨 VIKINGS: Distribuam os reforços',
    titlePl: '🚨 WIKINGOWIE: Rozmieszczenie posiłków',
    titleTr: '🚨 VİKİNGLER: Takviyeleri dağıtın',
    ar: '🤝 في صفحة الحدث، افتحوا الفايكنغز ← الأعضاء. تُظهر القائمة من متصل، ومستوى التعزيز لكل مدينة، ومن أرسلتم لهم بالفعل. ساعدوا أولاً المتصلين ذوي التعزيزات القليلة، ثم بقية المدن المحتاجة. معيارنا: ~200,000 تعزيز بالإجمالي لكل مدينة، وليس لكل شخص. عدلوا حسب قوة القوات، والصعوبة، والتقارير، وتعليمات R4.',
    'pt-BR': '🤝 Na página do evento, abram Vikings → Membros. A lista mostra quem está online, o nível de reforço de cada cidade e quem vocês já reforçaram. Ajudem primeiro os membros online com poucos reforços, depois as outras cidades que precisarem. Nossa referência: ~200.000 reforços NO TOTAL por cidade, não por pessoa. Ajustem conforme a força das tropas, a dificuldade, os relatórios e as instruções do R4.',
    pl: '🤝 Na stronie wydarzenia otwórzcie Wikingowie → Członkowie. Lista pokazuje, kto jest online, poziom wsparcia każdego miasta i kogo już wspieracie. Pomóżcie najpierw graczom online ze słabym wsparciem, potem reszcie. Nasz punkt odniesienia: ~200 000 posiłków ŁĄCZNIE na miasto, nie na osobę. Dostosujcie do siły wojsk, poziomu trudności, raportów i poleceń R4.',
    tr: '🤝 Etkinlik sayfasında Vikingler → Üyeler bölümünü açın. Liste kimin çevrimiçi olduğunu, alınan takviyeyi ve kime takviye gönderdiğinizi gösterir. Önce az takviyeli çevrimiçi üyelere, sonra diğer ihtiyaç duyan şehirlere yardım edin. Kılavuzumuz: Şehir başına kişi başı değil, TOPLAMDA ~200.000 takviye. Birlik gücü, zorluk, raporlar ve R4 talimatlarına göre ayarlayın.',
    fr: '🤝 Dans la page de l’événement, ouvrez Vikings → Membres. Cette liste montre qui est en ligne, le niveau de renfort reçu par chaque ville et les membres auxquels vous avez déjà envoyé des renforts. Aidez d’abord les membres en ligne peu renforcés, puis les autres villes qui en ont besoin. Notre repère : ~200 000 renforts AU TOTAL par ville, pas par personne. Ajustez selon la force des troupes, la difficulté, les rapports et les consignes du R4.',
    en: '🤝 On the event page, open Vikings → Members. This list shows who is online, the reinforcement level of each city, and the members you have already sent reinforcements to. Help online members with few reinforcements first, then other cities in need. Our guideline: ~200,000 reinforcements IN TOTAL per city, not per person. Adjust for troop strength, difficulty, reports, and R4 instructions.',
    es: '🤝 En la página del evento, abrid Vikingos → Miembros. Esta lista muestra quién está en línea, el nivel de refuerzos de cada ciudad y los miembros a quienes ya habéis enviado refuerzos. Ayudad primero a los miembros en línea poco reforzados, luego a las otras ciudades necesitadas. Nuestra referencia: ~200 000 refuerzos EN TOTAL por ciudad, no por persona. Ajustad según la fuerza de tropas, dificultad, informes y órdenes del R4.' },
  { title: '🚨 VIKINGS : Ni soin ni extinction', titleEn: '🚨 VIKINGS: No healing, no extinguishing', titleEs: '🚨 VIKINGOS: Ni curaciones ni apagar fuego', titleAr: '🚨 الفايكنغز: لا علاج ولا إطفاء', short: 'Soin et feu', tag: 'RÈGLE D’OR', tone: 'stop',
    titlePtBr: '🚨 VIKINGS: Sem cura e sem apagar o fogo',
    titlePl: '🚨 WIKINGOWIE: Zakaz leczenia i gaszenia',
    titleTr: '🚨 VİKİNGLER: İyileştirme ve yangın söndürme yok',
    ar: '🩹 لا تعالجوا: العلاج يعيد القوات إلى مدينتكم، فتقتل الفايكنغز بدلاً من التعزيزات وتحرم حلفاءكم من نقاطهم (مع هدر التسريعات).\n🔥 لا تطفئوا النيران: احتراق المدينة يشير إلى سقوطها (لا تُستهدف بعد هزيمتين). الإطفاء يهدر الجواهر ويربك الحلفاء. الاحتراق لا يمنعكم من كسب النقاط!\nالعلاج والإصلاح فقط بعد انتهاء الحدث.',
    'pt-BR': '🩹 NÃO CUREM: curar manda tropas de volta à cidade, onde matam Vikings no lugar dos reforços e tiram pontos dos aliados (além de gastar aceleradores).\n🔥 NÃO APAGUEM O FOGO: uma cidade em chamas indica uma derrota (não é mais atacada após 2 derrotas). Apagar gasta gemas à toa e confunde os aliados. O fogo não impede vocês de ganhar pontos!\nCurem e reparem só DEPOIS do evento.',
    pl: '🩹 NIE LECZCIE WOJSK: leczenie odsyła je do miasta, gdzie zabijają Wikingów zamiast posiłków i pozbawiają sojuszników punktów (i marnują przyspieszenia).\n🔥 NIE GAŚCIE POŻARU: płonące miasto sygnalizuje porażkę (po 2 porażkach nie jest już atakowane). Gaszenie marnuje klejnoty i myli sojuszników. Płonięcie nie blokuje zdobywania punktów!\nLeczenie i naprawy dopiero PO wydarzeniu.',
    tr: '🩹 İYİLEŞTİRMEYİN: İyileştirme birlikleri eve döndürür; takviyelerin yerine Vikingleri öldürerek müttefiklerin puanını çalar (hızlandırıcılar da boşa gider).\n🔥 YANGINI SÖNDÜRMEYİN: Yanan bir şehir yenilgiyi gösterir (2 yenilgiden sonra hedef alınmaz). Söndürmek elmas israfıdır ve ittifakı yanıltır. Yanmak puan kazanmanızı engellemez!\nİyileştirme ve onarım yalnızca etkinlik bittikten SONRA yapılır.',
    fr: '🩹 NE SOIGNEZ PAS : soigner renvoie vos troupes en ville, qui tuent les Vikings à la place des renforts et privent vos alliés de leurs points d’élimination (en plus de gaspiller des accélérateurs).\n🔥 N’ÉTEIGNEZ PAS LE FEU : une ville en flammes signale qu’elle a déjà chuté (plus ciblée après 2 défaites). Éteindre coûte des gemmes pour rien et perturbe l’alliance. Brûler ne bloque aucun gain de points !\nOn soigne et on répare APRÈS l’événement.',
    en: '🩹 DO NOT HEAL: healing returns troops home, where they kill Vikings instead of reinforcements and steal allies’ points (and wastes speedups).\n🔥 DO NOT EXTINGUISH FIRES: a burning city signals a defeat (no longer targeted after 2 losses). Putting it out wastes gems and misleads allies. Burning does not stop you from earning points!\nHeal and repair only AFTER the event.',
    es: '🩹 NO CURÉIS: curar devuelve tropas a vuestra ciudad, robando bajas y puntos a los refuerzos aliados (y gastando aceleradores).\n🔥 NO APAGUÉIS EL FUEGO: una ciudad en llamas avisa que ya cayó (no recibe ataques tras 2 derrotas). Apagarlo gasta gemas y confunde a los aliados. ¡Arder no impide ganar puntos!\nSe cura y se repara DESPUÉS del evento.' },
  { title: '🚨 VIKINGS : Dernière vérification', titleEn: '🚨 VIKINGS: Final check', titleEs: '🚨 VIKINGOS: Última comprobación', titleAr: '🚨 الفايكنغز: التحقق الأخير', short: 'Avant le départ', tag: 'AVANT / 2', tone: 'wait',
    titlePtBr: '🚨 VIKINGS: Última verificação',
    titlePl: '🚨 WIKINGOWIE: Ostatnie sprawdzenie',
    titleTr: '🚨 VİKİNGLER: Son kontroller',
    ar: '✅ المشاة والفرسان أولاً، ثم الرماة إن سمحت السعة والدفاع.\n✅ المدن مغطاة: المعيار ~200,000 تعزيز بالإجمالي لكل مدينة، يُعدل حسب التقارير. أبلغوا R4 بالنواقص.\n✅ الموجتان 10 و20: أفضل 3 أبطال + 80 ألف مشاة كحد أقصى. لا تحرك بدون إشارة GO من R4. الدخول إلى المقر بعد راغي؛ والعودة لنفس الحلفاء.',
    'pt-BR': '✅ Infantaria e cavalaria primeiro; arqueiros depois se a capacidade e a defesa permitirem.\n✅ Cidades cobertas: referência de ~200.000 reforços NO TOTAL por cidade, ajustada pelos relatórios. Avisem o R4 sobre faltas.\n✅ Ondas 10 e 20: 3 melhores heróis + no máximo 80 mil soldados de infantaria. Não se movam sem o GO do R4. Entrem no QG depois de Raagui; voltem aos mesmos aliados.',
    pl: '✅ Najpierw piechota i kawaleria; potem łucznicy, jeśli pozwalają pojemność marszów i obrona.\n✅ Miasta zabezpieczone: cel ~200 000 posiłków ŁĄCZNIE na miasto, korygowany raportami. Zgłaszajcie braki do R4.\n✅ Fale 10 i 20: 3 najlepszych bohaterów + maks. 80 tys. piechoty najwyższego poziomu. Żadnych ruchów bez sygnału GO od R4. Wejście do KG po Raagui; powrót do tych samych sojuszników.',
    tr: '✅ Önce piyade ve süvari; kapasite ve savunma uygunsa ardından okçular.\n✅ Şehirler koruma altında: Şehir başına TOPLAMDA ~200.000 takviye hedefi, raporlara göre güncellenir. Eksikleri R4\'e bildirin.\n✅ 10 ve 20. Dalgalar: En iyi 3 kahraman + en fazla 80k piyade. R4\'ün GO işareti olmadan hareket yok. Karargaha Raagui\'den sonra girin; aynı müttefiklere geri dönün.',
    fr: '✅ Infanterie et cavalerie d’abord ; archers ensuite si la capacité et la défense le permettent.\n✅ Villes couvertes : repère ~200 000 renforts AU TOTAL par ville, à ajuster selon les rapports. Signalez les manques au R4.\n✅ Vagues 10 et 20 : 3 meilleurs héros + seulement 80k fantassins max. Aucun déplacement sans GO du R4. Entrée au QG après Raagui ; retour chez les mêmes alliés.',
    en: '✅ Infantry and cavalry first; archers next if capacity and defense allow.\n✅ Cities covered: guideline ~200,000 reinforcements IN TOTAL per city, adjusted using reports. Tell the R4 about gaps.\n✅ Waves 10 & 20: 3 best heroes + only 80k infantry max. No moves without the R4’s GO. Enter HQ after Raagui; return to the same allies.',
    es: '✅ Infantería y caballería primero; arqueros después si la capacidad y la defensa lo permiten.\n✅ Ciudades cubiertas: referencia ~200 000 refuerzos EN TOTAL por ciudad, ajustada según informes. Avisad de las faltas al R4.\n✅ Oleadas 10 y 20 : 3 mejores héroes + solo 80k de infantería máx. Ningún movimiento sin GO del R4. Entrada al CG tras Raagui; vuelta con los mismos aliados.' },
  { title: '🚨 VIKINGS : Comprendre les vagues 10 et 20', titleEn: '🚨 VIKINGS: Understand waves 10 and 20', titleEs: '🚨 VIKINGOS: Entender las oleadas 10 y 20', titleAr: '🚨 الفايكنغز: فهم الموجتين 10 و20', short: 'Vagues 10 et 20', tag: 'COMPRENDRE', tone: 'wait',
    titlePtBr: '🚨 VIKINGS: Entendam as ondas 10 e 20',
    titlePl: '🚨 WIKINGOWIE: Fale 10 i 20',
    titleTr: '🚨 VİKİNGLER: 10 ve 20. Dalgaları anlama',
    ar: '🏰 الموجتان 10 و20: ابقوا لدى حلفائكم حتى إشارة GO استدعاء. ثم انتظروا وصول راغي إلى المقر وإشارة GO المقر للانضمام إليه. ابقوا في المقر حتى إشارة GO خروج، ثم انتظروا GO تعزيزات للعودة إلى نفس الحلفاء. يتحقق R4 من التقارير والخريطة قبل التحرك: انتهاء المؤقت لا يكفي!',
    'pt-BR': '🏰 Ondas 10 e 20: fiquem com os aliados até o GO RETIRADA. Depois, esperem Raagui chegar ao QG e o GO QG para se juntarem a ele. Fiquem no QG até o GO SAÍDA e aguardem o GO REFORÇOS para voltar aos mesmos aliados. O R4 verifica os relatórios e o mapa antes das saídas: o cronômetro zerar não basta!',
    pl: '🏰 Fale 10 i 20: zostańcie u sojuszników aż do GO ODWRÓT. Następnie poczekajcie na dotarcie Raagui do KG i GO KG, aby dołączyć. Zostańcie w KG do GO WYJŚCIE, a potem czekajcie na GO WSPARCIE, by wrócić do tych samych sojuszników. R4 sprawdza raporty i mapę przed wymarszem: koniec odliczania zegara to za mało!',
    tr: '🏰 10 ve 20. Dalgalar: GERİ ÇEKİLME GO işaretine kadar müttefiklerinizde kalın. Ardından Raagui\'nin Karargaha varmasını ve KARARGAH GO işaretini bekleyip katılın. ÇIKIŞ GO işaretine kadar Karargahta kalın, ardından aynı müttefiklere dönmek için TAKVİYE GO işaretini bekleyin. R4 hareket öncesi raporları ve haritayı kontrol eder: sayacın bitmesi tek başına yetmez!',
    fr: '🏰 Vagues 10 et 20 : restez chez vos alliés jusqu’au GO RAPPEL. Attendez ensuite Raagui au QG et le GO QG pour le rejoindre. Restez au QG jusqu’au GO SORTIE, puis attendez le GO RENFORTS pour retourner chez les mêmes alliés. Le R4 vérifie les rapports et la carte avant les départs : un timer terminé ne suffit pas !',
    en: '🏰 Waves 10 & 20: stay at your allies’ cities until GO RECALL. Then wait for Raagui to reach HQ and for GO HQ before joining him. Stay at HQ until GO LEAVE HQ, then wait for GO REINFORCE to return to the same allies. The R4 checks reports and the map before departures: a finished timer is not enough!',
    es: '🏰 Oleadas 10 y 20: quedaos con vuestros aliados hasta el GO RETIRADA. Esperad luego a Raagui en el CG y el GO CG para uniros. Quedaos en el CG hasta el GO SALIDA, luego esperad el GO REFUERZOS para volver con los mismos aliados. El R4 revisa informes y mapa antes de partir: ¡un temporizador terminado no basta!' },
  { title: '🚨 VIKINGS : Lire les rapports', titleEn: '🚨 VIKINGS: Read the reports', titleEs: '🚨 VIKINGOS: Leer los informes', titleAr: '🚨 الفايكنغز: قراءة التقارير', short: 'Les deux contrôles', tag: 'COMPRENDRE', tone: 'wait',
    titlePtBr: '🚨 VIKINGS: Leiam os relatórios',
    titlePl: '🚨 WIKINGOWIE: Czytanie raportów',
    titleTr: '🚨 VİKİNGLER: Raporları okuma',
    ar: '🔎 بعد الهجوم، تحققوا من التقرير: 1️⃣ يجب أن يحقق لاعبك 0 تصفية في مدينتك؛ وإلا فتحققوا من القوات المتبقية أو العائدة. 2️⃣ في أعلى اليمين، الهدف هو القضاء على 100% من الفايكنغز؛ إن كان أقل، أبلغوا R4 لتعديل التعزيزات. التزموا بإشارات GO قبل نقل القوات المتمركزة.',
    'pt-BR': '🔎 Após um ataque, confiram o relatório: 1️⃣ Seu jogador deve ter 0 eliminações na sua cidade; caso contrário, verifique as tropas que ficaram ou voltaram para casa. 2️⃣ No canto superior direito, a meta é 100% dos Vikings eliminados no total; se for menos, avisem o R4 para ajustar os reforços. Respeitem os GO antes de mover tropas já posicionadas.',
    pl: '🔎 Po ataku sprawdźcie raport: 1️⃣ Wasz gracz powinien mieć 0 zabójstw w swoim mieście; jeśli nie, sprawdźcie wojska w domu i obronę z R4. 2️⃣ W prawym górnym rogu cel to 100% zabitych Wikingów; jeśli mniej, zgłoście miasto do R4 w celu korekty posiłków. Przestrzegajcie sygnałów GO przed przesunięciem wojsk.',
    tr: '🔎 Bir saldırıdan sonra raporu kontrol edin: 1️⃣ Şehrinizde kendi oyuncunuz 0 öldürme yapmalıdır; aksi takdirde evde kalan veya dönen birlikleri kontrol edin. 2️⃣ Sağ üstte savunucuların toplam %100 öldürme oranını hedefleyin; daha düşükse takviyeleri ayarlamak için şehri R4\'e bildirin. Konumlanmış birlikleri kaydırmadan önce GO işaretlerine uyun.',
    fr: '🔎 Après une attaque, contrôlez le rapport : 1️⃣ Votre joueur doit faire 0 élimination dans votre ville ; sinon, vérifiez les troupes restées ou revenues chez vous. 2️⃣ En haut à droite, visez 100 % des Vikings éliminés au total ; en dessous, signalez la ville au R4 pour ajuster les renforts. Respectez les GO pour déplacer les troupes déjà en place.',
    en: '🔎 After an attack, check the report: 1️⃣ Your player should have 0 kills in your city; otherwise, check for troops left at home or returning there. 2️⃣ At the top right, aim for 100% of Vikings killed overall; if lower, tell the R4 so reinforcements can be adjusted. Follow the GO signals before moving troops already in position.',
    es: '🔎 Tras un ataque, revisad el informe: 1️⃣ Tu jugador debe hacer 0 bajas en tu ciudad; si no, revisa las tropas que quedaron o volvieron. 2️⃣ Arriba a la derecha, buscad el 100 % de vikingos eliminados en total; si es menos, avisad al R4 para ajustar refuerzos. Respetad los GO para mover tropas ya colocadas.' },
  { title: '🚨 VIKINGS : Récapitulatif de l’événement', titleEn: '🚨 VIKINGS: Event recap', titleEs: '🚨 VIKINGOS: Resumen del evento', titleAr: '🚨 الفايكنغز: ملخص الحدث', short: '22 et 24/09 · 19 UTC', tag: 'RÉCAP', tone: 'wait',
    titlePtBr: '🚨 VIKINGS: Resumo do evento',
    titlePl: '🚨 WIKINGOWIE: Podsumowanie wydarzenia',
    titleTr: '🚨 VİKİNGLER: Etkinlik özeti',
    ar: '🕒 22/09 و 24/09 — 19 UTC\n💡 أكدوا تواجدكم بالإنترنت.\n\n1. احتفظوا بأفضل 3 أبطال في مركز القيادة.\n2. المشاة والفرسان أولاً، ثم الرماة إن سمحت السعة والدفاع.\n3. الموجتان 10 و20: أرسلوا أفضل 3 أبطال + 80 ألف مشاة من أعلى مستوى فقط.\n\n🐾 فعلوا مكافآت الحيوانات الأليفة ووزعوا القوات عبر الفايكنغز ← الأعضاء قبل 20 دقيقة.\n\nأي أسئلة؟ R4/R5.',
    'pt-BR': '🕒 22/09 e 24/09 — 19 UTC\n💡 Confirmem se estarão online.\n\n1. Mantenham seus 3 melhores heróis no posto de comando.\n2. Infantaria e cavalaria primeiro; arqueiros depois se a capacidade e a defesa permitirem.\n3. Ondas 10 e 20: enviem seus 3 melhores heróis + apenas 80 mil soldados de infantaria do nível mais alto.\n\n🐾 Ativem os bônus de mascotes e distribuam tropas em Vikings → Membros 20 min antes.\n\nDúvidas? R4/R5.',
    pl: '🕒 22/09 i 24/09 — 19:00 UTC\n💡 Potwierdźcie obecność online.\n\n1. Zostawcie 3 najlepszych bohaterów w centrum dowodzenia.\n2. Najpierw piechota i kawaleria; potem łucznicy, jeśli pozwalają pojemność marszów i obrona.\n3. Fale 10 i 20: wyślijcie 3 najlepszych bohaterów + tylko 80 tys. piechoty najwyższego poziomu.\n\n🐾 Aktywujcie bonusy chowańców i rozdzielcie wojska przez Wikingowie → Członkowie 20 min przed startem.\n\nPytania? R4/R5.',
    tr: '🕒 22/09 ve 24/09 — 19 UTC\n💡 Çevrimiçi olacağınızı onaylayın.\n\n1. En iyi 3 kahramanınızı Komuta Merkezinde tutun.\n2. Önce piyade ve süvari; kapasite ve savunma uygunsa ardından okçular.\n3. 10 ve 20. Dalgalar: En iyi 3 kahramanınızı + sadece en yüksek seviye 80k piyade gönderin.\n\n🐾 Evcil hayvan bonuslarını etkinleştirin ve 20 dk önce Vikingler → Üyeler üzerinden birlikleri dağıtın.\n\nSorular için: R4/R5.',
    fr: '🕒 22/09 et 24/09 — 19 UTC\n💡 Confirmez votre présence en ligne.\n\n1. Gardez vos 3 meilleurs héros au poste de commandement.\n2. Infanterie et cavalerie d’abord ; archers ensuite si la capacité et la défense le permettent.\n3. Vagues 10 et 20 : envoyez vos 3 meilleurs héros + seulement 80k fantassins du niveau le plus élevé.\n\n🐾 Activez les bonus de familiers et répartissez les troupes via Vikings → Membres 20 min avant.\n\nQuestions ? R4/R5.',
    en: '🕒 22/09 & 24/09 — 19 UTC\n💡 Confirm if you will be online.\n\n1. Keep your 3 best heroes at the Command Center.\n2. Infantry and cavalry first; archers next if capacity and defense allow.\n3. Waves 10 & 20: send your 3 best heroes + only 80k highest-level infantry.\n\n🐾 Activate pet bonuses and distribute troops via Vikings → Members 20 min before.\n\nQuestions? Contact R4/R5.',
    es: '🕒 22/09 y 24/09 — 19 UTC\n💡 Confirmad vuestra presencia en línea.\n\n1. Dejad vuestros 3 mejores héroes en el puesto de mando.\n2. Infantería y caballería primero; arqueros después si la capacidad y la defensa lo permiten.\n3. Oleadas 10 y 20: enviad vuestros 3 mejores héroes + solo 80k de infantería del nivel más alto.\n\n🐾 Activad los bonus de mascotas y repartid tropas mediante Vikingos → Miembros 20 min antes.\n\n¿Dudas? R4/R5.' }
];

const coordinationMessages = [
  { title: 'Consignes avant les vagues', titleEn: 'Instructions before the waves', titleEs: 'Instrucciones antes de las oleadas', titleAr: 'تعليمات قبل الموجات', short: 'Les consignes', tag: 'PRÉPARATION', tone: 'wait',
    titlePtBr: 'Instruções antes das ondas',
    titlePl: 'Instrukcje przed falami',
    titleTr: 'Dalgalar öncesi talimatlar',
    ar: '⚔️ الموجتان 10 و20: اتبعوا إشارات GO لكل تحرك! لا تسحبوا التعزيزات مبكراً: قد تفوت هجوم الفايكنغز على مدينة حليفكم. مؤقتات الوصول خادعة: راجعوا تقارير المعركة والخريطة. انتهاء المؤقت وحده لا يعني إمكانية المغادرة!',
    'pt-BR': '⚔️ Ondas 10 e 20: sigam meus GO a cada movimento! Não retirem reforços cedo demais: eles podem perder o ataque dos Vikings na cidade aliada. Os cronômetros de chegada enganam: confiram os relatórios de batalha e o mapa. O cronômetro zerar não basta para sair!',
    pl: '⚔️ Fale 10 i 20: czekajcie na moje GO przy każdym ruchu! Nie wycofujcie posiłków za wcześnie: mogą minąć się z atakiem Wikingów na miasto sojusznika. Liczniki czasu bywają mylące: sprawdzajcie raporty walki i mapę. Sam koniec odliczania nie oznacza, że można ruszać!',
    tr: '⚔️ 10 ve 20. Dalgalar: Her hareket için GO işaretlerimi bekleyin! Takviyeleri erkenden geri çekmeyin: müttefik şehrindeki Viking saldırısını kaçırabilirler. Varış sayaçları yanıltıcıdır: savaş raporlarını ve haritayı kontrol edin. Sayacın sıfırlanması ayrılmak için tek başına yeterli değildir!',
    fr: '⚔️ Vagues 10 et 20 : suivez mes GO pour chaque déplacement ! Ne retirez pas vos renforts trop tôt : ils pourraient manquer l’attaque des Vikings chez votre allié. Les timers d’arrivée sont trompeurs : vérifiez les rapports de combat et la carte. Un timer terminé ne suffit pas pour partir !',
    en: '⚔️ Waves 10 & 20: wait for my GO before each move! Do not recall reinforcements too early: they could miss the Viking attack at your ally’s city. Arrival timers are misleading: check battle reports and the map. A finished timer alone does not mean you can leave!',
    es: '⚔️ Oleadas 10 y 20: ¡seguid mis GO en cada movimiento! No retiréis vuestros refuerzos antes de tiempo: podrían perderse el ataque vikingo en la ciudad aliada. Los temporizadores de llegada engañan: revisad los informes y el mapa. ¡Un temporizador terminado no basta para marcharse!' },
  { title: 'Organisation au QG', titleEn: 'HQ organization', titleEs: 'Organización en el CG', titleAr: 'التنظيم في المقر الرئيسي', short: 'Organisation au QG', tag: 'PRÉPARATION', tone: 'wait',
    titlePtBr: 'Organização no QG',
    titlePl: 'Organizacja w KG',
    titleTr: 'Karargahta organizasyon',
    ar: '🏰 في الموجتين 10 و20، ننتظر وصول راغي إلى المقر قبل الانضمام إليه. سأعطي إشارة GO للدخول، ثم GO للخروج بعد الهجوم. بعد ذلك، عودوا لتعزيز نفس الحليف السابق. لا تحرك بدون إشارتي!',
    'pt-BR': '🏰 Nas ondas 10 e 20, esperamos Raagui chegar ao QG antes de nos juntarmos a ele. Vou dar o GO para entrar e o GO para sair após o ataque. Depois, voltem a reforçar o mesmo aliado de antes. Nenhum movimento sem meu sinal!',
    pl: '🏰 Przy falach 10 i 20 czekamy, aż Raagui dotrze do KG, zanim dołączymy. Dam sygnał GO na wejście, a potem GO na wyjście po ataku. Następnie wracacie wspierać tego samego sojusznika co wcześniej. Żadnych ruchów bez mojego sygnału!',
    tr: '🏰 10 ve 20. dalgalarda, katılmadan önce Raagui\'nin Karargaha varmasını bekliyoruz. Giriş için GO, saldırıdan sonra ise çıkış için GO vereceğim. Ardından daha önce takviye ettiğiniz aynı müttefike geri dönün. İşaretim olmadan hareket yok!',
    fr: '🏰 Pour les vagues 10 et 20, nous attendons que Raagui soit arrivé au QG avant de le rejoindre. Je donnerai le GO pour entrer, puis le GO pour sortir après l’attaque. Ensuite, retournez renforcer le même allié qu’avant. Aucun déplacement sans mon signal !',
    en: '🏰 For waves 10 & 20, we wait until Raagui has arrived at HQ before joining him. I will give the GO to enter, then the GO to leave after the attack. Afterwards, return to reinforce the same ally as before. No moves without my signal!',
    es: '🏰 Para las oleadas 10 y 20, esperamos a que Raagui llegue al CG antes de unirnos. Daré el GO para entrar, luego el GO para salir tras el ataque. Después, volved a reforzar al mismo aliado que antes. ¡Ningún movimiento sin mi señal!' },
  { title: 'Rappel avant le déplacement', titleEn: 'Reminder before moving', titleEs: 'Recordatorio antes del movimiento', titleAr: 'تذكير قبل التحرك', short: 'Maintenir les renforts', tag: 'ATTENDRE', tone: 'wait',
    titlePtBr: 'Lembrete antes de se mover',
    titlePl: 'Przypomnienie przed ruchem',
    titleTr: 'Hareket öncesi hatırlatma',
    ar: '✋ أبقوا تعزيزاتكم لدى حلفائكم! لا تعتمدوا فقط على المؤقتات: الهجوم قد يكون في الطريق. نحن نتحقق من التقارير والخريطة قبل التحرك. انتظروا إشارة GO مني لسحب قواتكم.',
    'pt-BR': '✋ Mantenham os reforços nas cidades dos aliados! Não confiem só nos cronômetros: o ataque ainda pode estar a caminho. Estamos verificando os relatórios e o mapa antes de nos mover. Esperem meu GO para retirar as tropas.',
    pl: '✋ Trzymajcie posiłki u sojuszników! Nie polegajcie wyłącznie na licznikach: atak może być jeszcze w drodze. Sprawdzamy raporty i mapę przed wymarszem. Czekajcie na moje GO, aby wycofać wojska.',
    tr: '✋ Takviyelerinizi müttefik şehirlerinde tutun! Yalnızca sayaçlara güvenmeyin: saldırı hâlâ yolda olabilir. Hareket etmeden önce raporları ve haritayı kontrol ediyoruz. Birliklerinizi geri çekmek için GO işaretimi bekleyin.',
    fr: '✋ Gardez vos renforts chez vos alliés ! Ne vous fiez pas uniquement aux timers : l’attaque peut encore être en route. Nous vérifions les rapports et la carte avant de bouger. Attendez mon GO pour rappeler vos troupes.',
    en: '✋ Keep your reinforcements at your allies’ cities! Do not rely only on timers: the attack may still be on its way. We are checking reports and the map before moving. Wait for my GO to recall your troops.',
    es: '✋ ¡Mantened vuestros refuerzos con vuestros aliados! No os fiéis solo de los temporizadores: el ataque aún puede estar en camino. Revisamos los informes y el mapa antes de movernos. Esperad mi GO para retirar vuestras tropas.' },
  { title: 'Maintenir les renforts', titleEn: 'Keep reinforcements in place', titleEs: 'Mantener los refuerzos', titleAr: 'الحفاظ على التعزيزات',
    titlePtBr: 'Mantenham os reforços',
    titlePl: 'Utrzymać posiłki',
    titleTr: 'Takviyeleri koruyun',
    ar: '✋ أبقوا تعزيزاتكم في مدن الحلفاء. انتظروا إشارة GO استدعاء مني: انتهاء المؤقت لا يؤكد نهاية الهجوم.',
    'pt-BR': '✋ Mantenham os reforços nas cidades dos aliados. Esperem meu GO RETIRADA: o cronômetro zerar não confirma o fim do ataque.',
    pl: '✋ Trzymajcie posiłki w miastach sojuszników. Czekajcie na moje GO ODWRÓT: skończony czas nie potwierdza zakończenia ataku.',
    tr: '✋ Takviyelerinizi müttefik şehirlerinde tutun. GERİ ÇEKİLME GO işaretimi bekleyin: sayacın bitmesi saldırının bittiğini doğrulamaz.',
    fr: '✋ Gardez vos renforts chez vos alliés. Attendez mon GO RAPPEL : un timer terminé ne confirme pas la fin de l’attaque.',
    en: '✋ Keep your reinforcements at your allies’ cities. Wait for my GO RECALL: a finished timer does not confirm the attack is over.',
    es: '✋ Mantened los refuerzos con vuestros aliados. Esperad mi GO RETIRADA: un temporizador terminado no confirma el fin del ataque.' },
  { title: 'GO pour retirer les renforts', titleEn: 'GO RECALL', titleEs: 'GO RETIRADA', titleAr: 'إشارة GO لسحب التعزيزات', short: 'GO rappel', tag: 'RAPPELER', tone: 'go',
    titlePtBr: 'GO RETIRADA',
    titlePl: 'GO ODWRÓT',
    titleTr: 'GERİ ÇEKİLME GO',
    ar: '🟢 GO استدعاء! اسحبوا تعزيزاتكم من مدن الحلفاء. 🛑 لا تدخلوا المقر بعد: ننتظر وصول راغي وإشارة GO القادمة مني!',
    'pt-BR': '🟢 GO RETIRADA! Retirem os reforços das cidades dos aliados. 🛑 Não entrem no QG ainda: estamos esperando Raagui chegar e meu próximo GO!',
    pl: '🟢 GO ODWRÓT! Wycofajcie posiłki z miast sojuszników. 🛑 Nie wchodźcie jeszcze do KG: czekamy na przybycie Raagui i moje kolejne GO!',
    tr: '🟢 GERİ ÇEKİLME GO! Takviyelerinizi müttefik şehirlerinden geri çekin. 🛑 Henüz Karargaha girmeyin: Raagui\'nin varmasını ve bir sonraki GO işaretimi bekleyin!',
    fr: '🟢 GO RAPPEL ! Retirez vos renforts de chez vos alliés. 🛑 N’entrez pas encore au QG : nous attendons l’arrivée de Raagui et mon prochain GO !',
    en: '🟢 GO RECALL! Recall your reinforcements from your allies’ cities. 🛑 Do not enter HQ yet: wait for Raagui to arrive and for my next GO!',
    es: '🟢 ¡GO RETIRADA! Retirad los refuerzos de vuestros aliados. 🛑 ¡No entréis al CG todavía: esperamos la llegada de Raagui y mi próximo GO!' },
  { title: 'GO pour entrer au QG', titleEn: 'GO HQ', titleEs: 'GO CG', titleAr: 'إشارة GO لدخول المقر', short: 'GO entrée QG', tag: 'REJOINDRE', tone: 'go',
    titlePtBr: 'GO QG',
    titlePl: 'GO KG',
    titleTr: 'KARARGAH GO',
    ar: '🟢 GO المقر! وصل راغي: أرسلوا تعزيزاتكم إلى المقر الآن! ابقوا حتى إشارة GO للخروج مني، حتى لو بدا أن المؤقت قد انتهى.',
    'pt-BR': '🟢 GO QG! Raagui chegou: enviem seus reforços ao QG agora! Fiquem até meu GO de saída, mesmo que o cronômetro pareça ter zerado.',
    pl: '🟢 GO KG! Raagui dotarł: wyślijcie posiłki do KG teraz! Zostańcie do mojego GO na wyjście, nawet jeśli licznik wydaje się zakończony.',
    tr: '🟢 KARARGAH GO! Raagui ulaştı: takviyelerinizi hemen Karargaha gönderin! Sayaç bitmiş gibi görünse bile çıkış GO işaretime kadar kalın.',
    fr: '🟢 GO QG ! Raagui est arrivé : envoyez maintenant vos renforts au QG ! Restez jusqu’à mon GO de sortie, même si le timer semble terminé.',
    en: '🟢 GO HQ! Raagui has arrived: send your reinforcements to HQ now! Stay until my GO to leave, even if the timer appears to have finished.',
    es: '🟢 ¡GO CG! Raagui ha llegado: ¡enviad ya vuestros refuerzos al CG! Quedaos hasta mi GO de salida, aunque el temporizador parezca terminado.' },
  { title: 'Attendre l’attaque au QG', titleEn: 'Wait for the HQ attack', titleEs: 'Esperar el ataque en el CG', titleAr: 'انتظار الهجوم في المقر', short: 'Tenir le QG', tag: 'ATTENDRE', tone: 'stop',
    titlePtBr: 'Esperem o ataque no QG',
    titlePl: 'Czekać na atak w KG',
    titleTr: 'Karargahta saldırıyı bekleyin',
    ar: '🛑 ابقوا في المقر! لا تسحبوا قواتكم بناءً على المؤقت فقط. ننتظر تأكيد الهجوم في التقارير وعلى الخريطة. سأعطي إشارة GO عندما يحين وقت الخروج.',
    'pt-BR': '🛑 Fiquem no QG! Não retirem as tropas com base apenas no cronômetro. Estamos esperando a confirmação do ataque nos relatórios e no mapa. Vou dar o GO quando puderem sair.',
    pl: '🛑 Zostańcie w KG! Nie wycofujcie wojsk na podstawie samego licznika czasu. Czekamy na potwierdzenie ataku w raportach i na mapie. Dam GO, gdy będzie można wyjść.',
    tr: '🛑 Karargahta kalın! Birliklerinizi yalnızca sayaca bakarak geri çekmeyin. Raporlarda ve haritada saldırının onaylanmasını bekliyoruz. Çıkabileceğiniz zaman GO vereceğim.',
    fr: '🛑 Restez au QG ! Ne retirez pas vos troupes sur la seule base du timer. Nous attendons la confirmation de l’attaque dans les rapports et sur la carte. Je donne le GO dès que vous pouvez sortir.',
    en: '🛑 Stay at HQ! Do not recall your troops based only on the timer. We are waiting for confirmation of the attack in reports and on the map. I will give the GO when you can leave.',
    es: '🛑 ¡Quedaos en el CG! No retiréis vuestras tropas basándoos solo en el temporizador. Esperamos la confirmación del ataque en los informes y el mapa. Daré el GO en cuanto podáis salir.' },
  { title: 'Tenir le QG', titleEn: 'Hold HQ', titleEs: 'Mantener la posición en el CG', titleAr: 'الثبات في المقر',
    titlePtBr: 'Mantenham a posição no QG',
    titlePl: 'Trzymać pozycję w KG',
    titleTr: 'Karargahta kalın',
    ar: '🛑 ابقوا في المقر حتى إشارة GO خروج مني. ننتظر تأكيد الهجوم في التقارير وعلى الخريطة.',
    'pt-BR': '🛑 Fiquem no QG até meu GO SAÍDA. Estamos esperando a confirmação do ataque nos relatórios e no mapa.',
    pl: '🛑 Zostańcie w KG do mojego GO WYJŚCIE. Czekamy na potwierdzenie ataku w raportach i na mapie.',
    tr: '🛑 ÇIKIŞ GO işaretime kadar Karargahta kalın. Raporlarda ve haritada saldırının onaylanmasını bekliyoruz.',
    fr: '🛑 Restez au QG jusqu’à mon GO SORTIE. Nous attendons la confirmation de l’attaque dans les rapports et sur la carte.',
    en: '🛑 Stay at HQ until my GO LEAVE HQ. We are waiting for confirmation of the attack in reports and on the map.',
    es: '🛑 Quedaos en el CG hasta mi GO SALIDA. Esperamos la confirmación del ataque en los informes y en el mapa.' },
  { title: 'GO pour sortir du QG', titleEn: 'GO LEAVE HQ', titleEs: 'GO SALIDA CG', titleAr: 'إشارة GO للخروج من المقر', short: 'GO sortie QG', tag: 'SORTIR', tone: 'go',
    titlePtBr: 'GO SAÍDA QG',
    titlePl: 'GO WYJŚCIE Z KG',
    titleTr: 'KARARGAHTAN ÇIKIŞ GO',
    ar: '🟢 GO خروج المقر! تم تأكيد الهجوم، استدعوا قواتكم الآن. استعدوا للعودة إلى نفس الحليف الذي كنتم تعززونه سابقاً!',
    'pt-BR': '🟢 GO SAÍDA QG! Ataque confirmado, retirem suas tropas agora. Preparem-se para voltar ao mesmo aliado que estavam reforçando antes!',
    pl: '🟢 GO WYJŚCIE Z KG! Atak potwierdzony, wycofajcie wojska teraz. Przygotujcie się do powrotu do tego samego sojusznika, którego wspieraliście wcześniej!',
    tr: '🟢 KARARGAHTAN ÇIKIŞ GO! Saldırı onaylandı, birliklerinizi hemen geri çağırın. Daha önce takviye ettiğiniz aynı müttefike dönmeye hazır olun!',
    fr: '🟢 GO SORTIE QG ! L’attaque est confirmée, rappelez vos troupes maintenant. Préparez-vous à retourner chez le même allié que vous renforciez avant !',
    en: '🟢 GO LEAVE HQ! The attack is confirmed: recall your troops now. Get ready to return to the same ally you were reinforcing before!',
    es: '🟢 ¡GO SALIDA CG! Ataque confirmado, retirad vuestras tropas ahora. ¡Preparaos para volver con el mismo aliado que reforzabais antes!' },
  { title: 'GO pour renforcer à nouveau', titleEn: 'GO REINFORCE', titleEs: 'GO REFUERZOS', titleAr: 'إشارة GO للتعزيز مجدداً', short: 'GO renforts', tag: 'RENFORCER', tone: 'go',
    titlePtBr: 'GO REFORÇOS',
    titlePl: 'GO WSPARCIE',
    titleTr: 'YENİDEN TAKVİYE GO',
    ar: '🟢 GO تعزيزات! بمجرد عودة قواتكم، أرسلوها إلى نفس الحليف كما كان. تحركوا بسرعة لتكونوا جاهزين قبل الهجوم القادم! 🛡️',
    'pt-BR': '🟢 GO REFORÇOS! Assim que suas tropas voltarem, enviem-nas ao mesmo aliado de antes. Sejam rápidos para estar em posição antes do próximo ataque! 🛡️',
    pl: '🟢 GO WSPARCIE! Gdy tylko wojska wrócą, wyślijcie je do tego samego sojusznika co wcześniej. Działajcie szybko, aby zająć pozycje przed kolejnym atakiem! 🛡️',
    tr: '🟢 YENİDEN TAKVİYE GO! Birlikleriniz döner dönmez onları aynı müttefike geri gönderin. Bir sonraki saldırıdan önce yerinizi almak için acele edin! 🛡️',
    fr: '🟢 GO RENFORTS ! Dès que vos troupes sont rentrées, renvoyez-les chez le même allié qu’avant. Faites vite pour être en place avant la prochaine attaque ! 🛡️',
    en: '🟢 GO REINFORCE! As soon as your troops return, send them back to the same ally as before. Move quickly to be in position before the next attack! 🛡️',
    es: '🟢 ¡GO REFUERZOS! En cuanto vuelvan vuestras tropas, reenviadlas al mismo aliado que antes. ¡Daos prisa para estar listos antes del siguiente ataque! 🛡️' },
  { title: 'Rappel : Ni soin ni extinction', titleEn: 'Reminder: No heal, do not extinguish', titleEs: 'Recordatorio: No curar ni apagar fuego', titleAr: 'تذكير: لا علاج ولا إطفاء', short: 'Ni soin ni feu', tag: 'RAPPEL', tone: 'stop',
    titlePtBr: 'Lembrete: Não curem nem apaguem o fogo',
    titlePl: 'Przypomnienie: Zakaz leczenia i gaszenia',
    titleTr: 'Hatırlatma: İyileştirme ve yangın söndürme yok',
    ar: '⚠️ تذكير: لا تعالجوا أي قوات في المستوصف (ستعود لمدينتكم وتخطف نقاط التعزيز من الحلفاء) ولا تطفئوا النيران إذا احترقت مدينتكم (هدر للجواهر وعلامة للحلفاء). اتركوا كل شيء كما هو حتى نهاية الحدث!',
    'pt-BR': '⚠️ LEMBRETE: NÃO curem tropas na enfermaria (elas voltam para casa e tiram pontos dos reforços aliados) e NÃO apaguem o fogo se a cidade estiver queimando (gasta gemas e serve de aviso aos aliados). Deixem tudo como está até o fim do evento!',
    pl: '⚠️ PRZYPOMNIENIE: NIE leczcie wojsk w szpitalu (wrócą do domu i odbiorą punkty posiłkom sojuszników) i NIE gaście pożaru, jeśli miasto płonie (strata klejnotów, służy za znak dla sojuszu). Zostawcie wszystko tak, jak jest, do końca wydarzenia!',
    tr: '⚠️ HATIRLATMA: Revirde HİÇBİR birliği iyileştirmeyin (şehre dönüp müttefiklerin takviye puanlarını çalarlar) ve şehriniz yanıyorsa yangını SÖNDÜRMEYİN (elmas israfıdır ve müttefiklere işaret görevi görür). Etkinlik bitene kadar her şeyi olduğu gibi bırakın!',
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
    navTroops: 'Enviar as tropas',
    troopsEyebrow: 'SAÍDA DAS TROPAS / BUSCAR O EQUILÍBRIO',
    troopsTitle: 'Infantaria e cavalaria primeiro. Arqueiros depois.',
    troopsOrder: '<strong>1. Priorize infantaria e cavalaria</strong><p>Envie-as para reforçar aliados. Depois que todas saírem, use o espaço restante das marchas para arqueiros. Envie tudo se puder, desde que os reforços recebidos consigam defender sua cidade.</p>',
    troopsWhy: '<strong>2. Por que deixávamos arqueiros em casa?</strong><p>Na nossa estratégia anterior, eram uma reserva defensiva caso os reforços não bastassem, sobretudo no fim do evento. Os guias também sugerem deixá-los quando as marchas estão cheias: geralmente fazem menos eliminações. Mantê-los em casa não é uma obrigação permanente.</p>',
    troopsTest: '<strong>3. Testar o nível 11 com nossa força atual</strong><p>Nossa aliança ficou mais forte: podemos testar a saída de todas as tropas, inclusive arqueiros, de cidades bem reforçadas. Confira os relatórios, principalmente nas <strong>ondas 16–19</strong>: compare suas eliminações, as dos reforços e o total de Vikings mortos. Um começo fácil não garante uma defesa completa nas últimas ondas.</p>',
    troopsNext: '<strong>4. Ajustar a defesa conforme a dificuldade aumenta</strong><p>Nos próximos níveis, esperados em cerca de um mês conforme o calendário da aliança, reavalie os relatórios. Se menos de <strong>100% dos Vikings</strong> morrerem, peça mais reforços ou coordene com o R4 o retorno de parte das suas tropas para defender sua cidade. Não deixe um aliado sem defesa ao retirá-las.</p>',
    troopsTakeaway: '<strong>Meta: 0 eliminações pelas suas tropas em casa + 100% dos Vikings mortos pelos reforços.</strong> Se não for possível cumprir as duas metas, garanta primeiro a defesa. Arqueiros que fazem eliminações podem estar ajudando: não os retire automaticamente sem verificar a cobertura.',
    troopsSource: 'Prioridade das tropas: <a href="https://kingshotguides.com/guide/viking-vengeance-expert-guide-beginner-to-advanced/">Kingshot Guides</a>. Comparação de relatórios: <a href="https://9to5gaming.com/kingshot-viking-vengeance-guide/">9to5Gaming</a>. O teste do nível 11, a atenção às ondas 16–19 e o calendário são específicos da nossa aliança.',
    troopsArchersTitle: 'Por que enviar seus arqueiros a um aliado também?',
    troopsArchersBody: '<p>Se o aliado enviou os próprios arqueiros para fora, <strong>os seus podem fornecer o dano que falta para eliminar os Vikings restantes</strong> quando o combate chega aos arqueiros. As eliminações deles lá rendem pontos de reforço para você, enquanto o aliado mantém os pontos de defesa pelos Vikings mortos na cidade dele.</p><p><strong>Não ter arqueiros em casa não garante dano dos seus:</strong> se a infantaria e cavalaria já matam todos os Vikings, seus arqueiros não fazem eliminações. Compare relatórios para escolher uma cidade onde eles realmente contribuam, em coordenação com o R4.</p>',
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
    card2Title: 'Priorize infantaria e cavalaria',
    card2Body: '<p>Envie primeiro toda a infantaria e cavalaria aos aliados, depois arqueiros se houver espaço nas marchas e reforços suficientes na sua cidade. <strong>Mantenha seus 3 melhores heróis em casa.</strong></p><p><a href="#troop-strategy">Entenda a saída das tropas e o papel dos arqueiros →</a></p>',
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
    reportCol1: '<strong>Minhas próprias tropas mataram Vikings?</strong><p>Confira sua linha no detalhamento das eliminações. Busque <strong>0 eliminações pelas suas tropas em casa</strong>, mantendo uma defesa capaz de matar 100% dos Vikings. Se seus arqueiros fizerem eliminações, veja com o R4 se precisa de mais reforços antes de enviá-los.</p>',
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
    navTroops: 'Sortir ses troupes',
    troopsEyebrow: 'SORTIE DES TROUPES / TROUVER L’ÉQUILIBRE',
    troopsTitle: 'Infanterie et cavalerie d’abord. Les archers ensuite.',
    troopsOrder: '<strong>1. Donne la priorité à l’infanterie et à la cavalerie</strong><p>Envoie-les renforcer tes alliés. Une fois toutes ces troupes sorties, utilise la place restante dans tes marches pour les archers. Si tu peux tout sortir, fais-le, à condition que les renforts reçus suffisent à défendre ta ville.</p>',
    troopsWhy: '<strong>2. Pourquoi gardait-on les archers à la maison ?</strong><p>Dans notre ancienne stratégie, ils servaient de réserve défensive si les renforts ne suffisaient plus, notamment en fin d’événement. Les guides conseillent aussi de les laisser quand les marches sont pleines : ils réalisent généralement moins d’éliminations. Ce n’est donc pas une obligation permanente de les garder.</p>',
    troopsTest: '<strong>3. Au niveau 11, testons avec notre puissance actuelle</strong><p>Notre alliance a progressé : nous pouvons tester la sortie de toutes les troupes, archers compris, dans les villes suffisamment renforcées. Surveille les rapports, surtout aux <strong>vagues 16 à 19</strong> : compare les éliminations de tes troupes, celles des renforts et le total des Vikings tués. Un bon début ne garantit pas une défense complète sur les dernières vagues.</p>',
    troopsNext: '<strong>4. Quand la difficulté augmente, ajuste la défense</strong><p>Pour les prochains niveaux, attendus dans environ un mois selon le calendrier de notre alliance, repars des rapports. Si moins de <strong>100 % des Vikings</strong> sont tués, demande davantage de renforts ou, avec le R4, rappelle une partie de tes propres troupes pour défendre ta ville. Coordonne ce rappel pour ne pas laisser un allié sans défense.</p>',
    troopsTakeaway: '<strong>L’équilibre recherché : 0 élimination par tes propres troupes chez toi + 100 % des Vikings éliminés par les renforts.</strong> Si ces deux objectifs ne sont pas compatibles, sécurise d’abord la défense. Des archers qui font des éliminations peuvent être utiles : ne les retire pas automatiquement sans vérifier la couverture.',
    troopsSource: 'Priorité des troupes : <a href="https://kingshotguides.com/guide/viking-vengeance-expert-guide-beginner-to-advanced/">Kingshot Guides</a>. Intérêt de comparer les rapports : <a href="https://9to5gaming.com/kingshot-viking-vengeance-guide/">9to5Gaming</a>. Le test au niveau 11, la vigilance sur les vagues 16–19 et le calendrier sont des consignes propres à notre alliance.',
    troopsArchersTitle: 'Pourquoi envoyer aussi tes archers chez un allié ?',
    troopsArchersBody: '<p>Si l’allié a sorti ses propres archers, <strong>les tiens peuvent apporter les dégâts qui manquent pour finir les Vikings</strong> lorsque le combat atteint les archers. Les éliminations qu’ils réalisent chez lui te rapportent des points de renfort, tandis que l’allié conserve ses points de défense pour les Vikings tués dans sa ville.</p><p><strong>Sans archers chez lui ne veut pas dire dégâts garantis pour les tiens :</strong> si l’infanterie et la cavalerie éliminent déjà tous les Vikings, tes archers ne feront aucune élimination. Compare les rapports pour choisir une ville où ils contribuent réellement, en coordination avec le R4.</p>',
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
    card2Title: 'Infanterie et cavalerie en priorité',
    card2Body: '<p>Envoie d’abord toute ton infanterie et ta cavalerie chez les alliés, puis les archers si tes marches le permettent et si ta ville est suffisamment renforcée. <strong>Garde tes 3 meilleurs héros en ville.</strong></p><p><a href="#troop-strategy">Comprendre la sortie des troupes et le rôle des archers →</a></p>',
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
    reportCol1: '<strong>Mes propres troupes ont-elles tué des Vikings ?</strong><p>Regarde la ligne de ton joueur dans le détail des éliminations. Vise <strong>0 élimination par tes propres troupes chez toi</strong>, tout en gardant une défense capable de tuer 100 % des Vikings. Si tes archers participent, vérifie avec le R4 si davantage de renforts sont nécessaires avant de les sortir.</p>',
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
    navTroops: 'Sending troops out',
    troopsEyebrow: 'TROOP DEPLOYMENT / FIND THE BALANCE',
    troopsTitle: 'Infantry and cavalry first. Archers next.',
    troopsOrder: '<strong>1. Prioritize infantry and cavalry</strong><p>Send them to reinforce allies. Once all of them are out, use any remaining march capacity for archers. Send everything if you can, provided the reinforcements you receive can defend your city.</p>',
    troopsWhy: '<strong>2. Why did we keep archers at home?</strong><p>In our earlier strategy, they were a defensive reserve if reinforcements fell short, especially late in the event. Guides also suggest leaving them when marches are full: they usually get fewer kills. Keeping them home is therefore not a permanent requirement.</p>',
    troopsTest: '<strong>3. Test level 11 with our current strength</strong><p>Our alliance has grown stronger: we can test sending all troops out, including archers, from well-reinforced cities. Watch reports, especially <strong>waves 16–19</strong>: compare your own kills, reinforcement kills and total Vikings killed. An easy start does not guarantee full defense in the final waves.</p>',
    troopsNext: '<strong>4. Adjust defense as difficulty increases</strong><p>For the next levels, expected in about a month according to our alliance schedule, reassess using reports. If fewer than <strong>100% of Vikings</strong> die, request more reinforcements or coordinate with R4 to recall some of your own troops to defend your city. Do not leave an ally undefended when recalling.</p>',
    troopsTakeaway: '<strong>The target: 0 kills by your own troops at home + 100% of Vikings killed by reinforcements.</strong> If both goals cannot be met, secure the defense first. Archers getting kills may be helping: do not automatically remove them without checking defensive coverage.',
    troopsSource: 'Troop priority: <a href="https://kingshotguides.com/guide/viking-vengeance-expert-guide-beginner-to-advanced/">Kingshot Guides</a>. Comparing battle reports: <a href="https://9to5gaming.com/kingshot-viking-vengeance-guide/">9to5Gaming</a>. The level 11 test, focus on waves 16–19 and schedule are specific to our alliance.',
    troopsArchersTitle: 'Why send your archers to an ally too?',
    troopsArchersBody: '<p>If your ally has sent their own archers out, <strong>yours can provide the extra damage needed to finish the Vikings</strong> when combat reaches the archers. Their kills there earn you reinforcement points, while your ally keeps defense points for Vikings killed in their city.</p><p><strong>No archers at home does not guarantee damage from yours:</strong> if infantry and cavalry already kill all Vikings, your archers get no kills. Compare reports to choose a city where they actually contribute, in coordination with R4.</p>',
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
    card2Title: 'Prioritize infantry and cavalry',
    card2Body: '<p>Send all infantry and cavalry to allies first, then archers if your marches have room and your city has enough reinforcements. <strong>Keep your 3 best heroes at home.</strong></p><p><a href="#troop-strategy">Understand troop deployment and the role of archers →</a></p>',
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
    reportCol1: '<strong>Did my own troops kill Vikings?</strong><p>Check your player’s row in the kill breakdown. Aim for <strong>0 kills by your own troops at home</strong> while maintaining a defense that kills 100% of Vikings. If your archers get kills, check with R4 whether more reinforcements are needed before sending them out.</p>',
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
    navTroops: 'Sacar las tropas',
    troopsEyebrow: 'SALIDA DE TROPAS / BUSCAR EL EQUILIBRIO',
    troopsTitle: 'Primero infantería y caballería. Después arqueros.',
    troopsOrder: '<strong>1. Prioriza infantería y caballería</strong><p>Envíalas a reforzar aliados. Cuando hayan salido todas, usa el espacio restante de las marchas para arqueros. Saca todo si puedes, siempre que los refuerzos recibidos basten para defender tu ciudad.</p>',
    troopsWhy: '<strong>2. ¿Por qué dejábamos arqueros en casa?</strong><p>En nuestra estrategia anterior servían como reserva defensiva si faltaba fuerza en los refuerzos, sobre todo al final del evento. Las guías también aconsejan dejarlos cuando las marchas están llenas: suelen conseguir menos bajas. No es una obligación permanente mantenerlos en casa.</p>',
    troopsTest: '<strong>3. Probemos el nivel 11 con nuestra fuerza actual</strong><p>Nuestra alianza ha mejorado: podemos probar a sacar todas las tropas, incluidos los arqueros, de ciudades bien reforzadas. Vigila los informes, especialmente en las <strong>oleadas 16–19</strong>: compara tus bajas, las de los refuerzos y el total de vikingos eliminados. Un inicio fácil no garantiza una defensa completa al final.</p>',
    troopsNext: '<strong>4. Ajusta la defensa al subir la dificultad</strong><p>Para los próximos niveles, previstos en aproximadamente un mes según el calendario de nuestra alianza, revisa los informes. Si no muere el <strong>100 % de los vikingos</strong>, pide más refuerzos o coordina con R4 el regreso de parte de tus tropas para defender tu ciudad. No dejes a un aliado sin defensa al retirarlas.</p>',
    troopsTakeaway: '<strong>Objetivo: 0 bajas de tus tropas en casa + 100 % de vikingos eliminados por los refuerzos.</strong> Si no se cumplen ambas metas, asegura primero la defensa. Los arqueros que consiguen bajas pueden ser útiles: no los retires automáticamente sin comprobar la cobertura.',
    troopsSource: 'Prioridad de tropas: <a href="https://kingshotguides.com/guide/viking-vengeance-expert-guide-beginner-to-advanced/">Kingshot Guides</a>. Comparación de informes: <a href="https://9to5gaming.com/kingshot-viking-vengeance-guide/">9to5Gaming</a>. La prueba del nivel 11, la atención a las oleadas 16–19 y el calendario son propios de nuestra alianza.',
    troopsArchersTitle: '¿Por qué enviar también tus arqueros a un aliado?',
    troopsArchersBody: '<p>Si el aliado ha sacado sus propios arqueros, <strong>los tuyos pueden aportar el daño que falta para acabar con los vikingos</strong> cuando el combate alcanza a los arqueros. Sus bajas allí te dan puntos de refuerzo, mientras el aliado conserva los puntos de defensa por los vikingos eliminados en su ciudad.</p><p><strong>Que no tenga arqueros en casa no garantiza daño de los tuyos:</strong> si la infantería y caballería ya eliminan a todos los vikingos, tus arqueros no conseguirán bajas. Compara informes para elegir una ciudad donde contribuyan realmente, en coordinación con R4.</p>',
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
    card2Title: 'Prioriza infantería y caballería',
    card2Body: '<p>Envía primero toda tu infantería y caballería a aliados, luego arqueros si caben en las marchas y tu ciudad está bien reforzada. <strong>Deja tus 3 mejores héroes en casa.</strong></p><p><a href="#troop-strategy">Entender la salida de tropas y el papel de los arqueros →</a></p>',
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
    reportCol1: '<strong>¿Mis tropas han matado vikingos?</strong><p>Revisa tu fila en el detalle de bajas. Busca <strong>0 bajas de tus tropas en casa</strong>, manteniendo una defensa capaz de eliminar el 100 % de los vikingos. Si tus arqueros consiguen bajas, consulta con R4 si hacen falta más refuerzos antes de sacarlos.</p>',
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
    navTroops: 'إخراج القوات',
    troopsEyebrow: 'إخراج القوات / إيجاد التوازن',
    troopsTitle: 'المشاة والفرسان أولاً، ثم الرماة.',
    troopsOrder: '<strong>1. أعطِ الأولوية للمشاة والفرسان</strong><p>أرسلهم لتعزيز الحلفاء. بعد إخراجهم جميعاً، استخدم سعة المسيرات المتبقية للرماة. أخرج كل القوات إن أمكن، بشرط أن تكفي التعزيزات المستلمة للدفاع عن مدينتك.</p>',
    troopsWhy: '<strong>2. لماذا كنا نترك الرماة في المدينة؟</strong><p>كانوا في استراتيجيتنا السابقة احتياطاً دفاعياً إذا لم تكفِ التعزيزات، خصوصاً في نهاية الحدث. وتقترح الأدلة أيضاً تركهم عند امتلاء المسيرات لأنهم يحققون عادةً تصفيات أقل. لذلك ليس إبقاؤهم في المدينة قاعدة دائمة.</p>',
    troopsTest: '<strong>3. لنختبر المستوى 11 بقوتنا الحالية</strong><p>أصبح تحالفنا أقوى: يمكننا تجربة إخراج جميع القوات، بما فيها الرماة، من المدن المعززة جيداً. راقب التقارير خصوصاً في <strong>الموجات 16–19</strong>: قارن تصفيات قواتك بتصفيات التعزيزات وإجمالي الفايكنغ الذين قُتلوا. البداية السهلة لا تضمن دفاعاً كاملاً في الموجات الأخيرة.</p>',
    troopsNext: '<strong>4. عدّل الدفاع مع ارتفاع الصعوبة</strong><p>في المستويات القادمة، المتوقعة بعد نحو شهر حسب جدول تحالفنا، أعد التقييم باستخدام التقارير. إذا لم يُقتل <strong>100% من الفايكنغ</strong>، فاطلب تعزيزات إضافية أو نسّق مع R4 لإعادة بعض قواتك للدفاع عن مدينتك. لا تترك حليفاً دون دفاع عند سحبها.</p>',
    troopsTakeaway: '<strong>الهدف: 0 تصفيات لقواتك داخل مدينتك + قتل 100% من الفايكنغ بواسطة التعزيزات.</strong> إذا تعذر الجمع بين الهدفين، فأمّن الدفاع أولاً. قد تكون تصفيات الرماة مفيدة: لا تُخرجهم تلقائياً دون التحقق من كفاية الدفاع.',
    troopsSource: 'أولوية القوات: <a href="https://kingshotguides.com/guide/viking-vengeance-expert-guide-beginner-to-advanced/">Kingshot Guides</a>. مقارنة التقارير: <a href="https://9to5gaming.com/kingshot-viking-vengeance-guide/">9to5Gaming</a>. اختبار المستوى 11 والتركيز على الموجات 16–19 والجدول الزمني تعليمات خاصة بتحالفنا.',
    troopsArchersTitle: 'لماذا ترسل رُماتك أيضاً إلى حليف؟',
    troopsArchersBody: '<p>إذا أرسل الحليف رُماته خارج مدينته، <strong>يمكن لرُماتك توفير الضرر الإضافي اللازم للقضاء على الفايكنغ المتبقين</strong> عندما يصل القتال إلى الرماة. تمنحك تصفياتهم هناك نقاط تعزيز، بينما يحتفظ الحليف بنقاط الدفاع عن الفايكنغ الذين قُتلوا في مدينته.</p><p><strong>غياب الرماة عنده لا يضمن أن رُماتك سيلحقون ضرراً:</strong> إذا قضى المشاة والفرسان على جميع الفايكنغ، فلن يحقق رُماتك أي تصفيات. قارن التقارير لاختيار مدينة يساهمون فيها فعلياً، بالتنسيق مع R4.</p>',
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
    card2Title: 'الأولوية للمشاة والفرسان',
    card2Body: '<p>أرسل كل المشاة والفرسان إلى الحلفاء أولاً، ثم الرماة إذا اتسعت المسيرات وكانت مدينتك معززة بما يكفي. <strong>أبقِ أفضل 3 أبطال في مدينتك.</strong></p><p><a href="#troop-strategy">فهم إخراج القوات ودور الرماة ←</a></p>',
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
    reportCol1: '<strong>هل قتلت قواتي الفايكنغ؟</strong><p>راجع سطر لاعبك في تفاصيل التصفيات. استهدف <strong>0 تصفيات لقواتك داخل مدينتك</strong> مع دفاع قادر على قتل 100% من الفايكنغ. إذا حقق الرماة تصفيات، تحقق مع R4 من الحاجة إلى تعزيزات إضافية قبل إخراجهم.</p>',
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
  },
  pl: {
    pageTitle: 'Wikingowie — Centrum dowodzenia',
    metaDesc: 'Strategia na Wikingów: przygotuj miasto, zrozum punktację, rozdziel posiłki i skoordynuj fale 10 i 20.',
    skip: 'Przejdź do wiadomości',
    langAria: 'Język strony',
    introEyebrow: 'KOORDYNACJA SOJUSZU',
    introH1: 'Każdy ruch.<br><em>Na właściwy sygnał.</em>',
    introCopy: 'Strategia i wiadomości, które pozwolą utrzymać zsynchronizowany sojusz podczas Wikingów.',
    waveAria: 'Fale 10 i 20',
    waveMarkSpan: 'FALE KG',
    waveMarkStrong: '10 <i>&</i> 20',
    waveMarkSmall: 'Jedna zasada: czekaj na GO.',
    pageNavAria: 'Nawigacja w przewodniku',
    navCityGuide: 'Przygotowanie miast',
    navTroops: 'Wysyłanie wojsk',
    troopsEyebrow: 'WYSYŁANIE WOJSK / ZNAJDŹ RÓWNOWAGĘ',
    troopsTitle: 'Najpierw piechota i kawaleria. Potem łucznicy.',
    troopsOrder: '<strong>1. Priorytet dla piechoty i kawalerii</strong><p>Wyślij je do sojuszników. Gdy wyjdą wszystkie, wykorzystaj wolne miejsca w marszach na łuczników. Wyślij wszystko, jeśli możesz, pod warunkiem że otrzymane posiłki wystarczą do obrony miasta.</p>',
    troopsWhy: '<strong>2. Dlaczego zostawialiśmy łuczników w domu?</strong><p>W poprzedniej strategii byli rezerwą obronną, gdy posiłki nie wystarczały, zwłaszcza pod koniec wydarzenia. Poradniki zalecają też pozostawienie ich przy pełnych marszach: zwykle zdobywają mniej zabójstw. Zostawianie ich w domu nie jest więc stałym obowiązkiem.</p>',
    troopsTest: '<strong>3. Sprawdźmy poziom 11 przy obecnej sile</strong><p>Nasz sojusz stał się silniejszy: możemy próbować wysyłać wszystkie wojska, także łuczników, z dobrze wspieranych miast. Sprawdzaj raporty, szczególnie z <strong>fal 16–19</strong>: porównuj zabójstwa własnych wojsk, posiłków i łączną liczbę zabitych Wikingów. Łatwy początek nie gwarantuje pełnej obrony na końcu.</p>',
    troopsNext: '<strong>4. Dostosuj obronę do wyższej trudności</strong><p>Na kolejnych poziomach, spodziewanych za około miesiąc według planu sojuszu, ponownie oceń raporty. Jeśli ginie mniej niż <strong>100% Wikingów</strong>, poproś o więcej posiłków lub uzgodnij z R4 powrót części własnych wojsk do obrony miasta. Nie zostawiaj sojusznika bez obrony przy wycofaniu.</p>',
    troopsTakeaway: '<strong>Cel: 0 zabójstw własnych wojsk w domu + 100% Wikingów zabitych przez posiłki.</strong> Jeśli nie da się spełnić obu celów, najpierw zapewnij obronę. Łucznicy zdobywający zabójstwa mogą być potrzebni: nie wysyłaj ich automatycznie bez sprawdzenia osłony.',
    troopsSource: 'Priorytet wojsk: <a href="https://kingshotguides.com/guide/viking-vengeance-expert-guide-beginner-to-advanced/">Kingshot Guides</a>. Porównywanie raportów: <a href="https://9to5gaming.com/kingshot-viking-vengeance-guide/">9to5Gaming</a>. Test poziomu 11, uwaga na fale 16–19 i harmonogram dotyczą naszego sojuszu.',
    troopsArchersTitle: 'Dlaczego warto wysłać także łuczników do sojusznika?',
    troopsArchersBody: '<p>Jeśli sojusznik wysłał własnych łuczników poza miasto, <strong>twoi mogą zadać brakujące obrażenia i dobić Wikingów</strong>, gdy walka dotrze do łuczników. Ich zabójstwa dają ci punkty wsparcia, a sojusznik zachowuje punkty obrony za Wikingów zabitych w jego mieście.</p><p><strong>Brak łuczników u niego nie gwarantuje obrażeń twoich:</strong> jeśli piechota i kawaleria zabiją już wszystkich Wikingów, twoi łucznicy nie zdobędą zabójstw. Porównuj raporty, aby wybrać miasto, w którym rzeczywiście pomogą, w porozumieniu z R4.</p>',
    navReinforcements: 'Kogo wspierać?',
    navPoints: 'Zrozumieć punkty',
    navFireHeal: 'Leczenie i ogień',
    navMessages: 'Wiadomości do skopiowania',
    cityEyebrow: 'STRATEGIA DLA MIAST',
    cityTitle: 'Twoi bohaterowie w domu.<br> Twoje wojska u sojuszników.',
    cityLead: 'Każdy gracz wysyła wojska, by wzmocnić innych, i otrzymuje posiłki do obrony swojego miasta. Cel: chronić cały sojusz i pozwolić każdemu zdobywać punkty.',
    card1Eyebrow: '01 / PRZYGOTOWANIE',
    card1Title: 'Zostaw 3 najlepszych bohaterów',
    card1Body: 'Zostaw trzech najlepszych bohaterów w mieście. W <strong>centrum dowodzenia</strong> zablokuj ich, aby uniknąć przypadkowego wysłania ich z marszami.',
    card2Eyebrow: '02 / NIEZBĘDNE',
    card2Title: 'Priorytet: piechota i kawaleria',
    card2Body: '<p>Wyślij najpierw całą piechotę i kawalerię do sojuszników, potem łuczników, jeśli jest miejsce w marszach i miasto ma dość posiłków. <strong>Zostaw 3 najlepszych bohaterów w domu.</strong></p><p><a href="#troop-strategy">Poznaj zasady wysyłania wojsk i rolę łuczników →</a></p>',
    card3Eyebrow: '03 / ROZDZIELENIE',
    card3Title: 'Wybierz kogo wspierać',
    card3Body: '<p>Lista <strong>Członkowie</strong> w wydarzeniu pozwala sprawdzić, kto jest online, komu brakuje posiłków i kogo już wspierasz.</p><p><a href="#reinforcements">Zobacz, jak korzystać z tej listy →</a></p>',
    card4Eyebrow: '04 / CEL',
    card4Title: 'Celuj w 200 000 posiłków na miasto',
    card4Body: 'To nasz sojuszniczy punkt odniesienia, by wytrwać do końca: <strong>200 000 łącznie w mieście</strong>, a nie 200 000 na osobę wysyłającą posiłki.<p>Dostosuj do siły wojsk, poziomu trudności i raportów. Dobrze zabezpieczone miasto powinno ustąpić pierwszeństwa miastu słabiej wspieranemu.</p>',
    reinfEyebrow: 'W GRZE / STRONA WYDARZENIA',
    reinfTitle: 'Kto jest online? Kogo wspieram? Komu pomóc?',
    reinfPath: 'Otwórz wydarzenie <strong>Wikingowie</strong> → dotknij <strong>Członkowie</strong>.',
    reinfLead: 'Ta lista daje pełny obraz sojuszu. Przed wysłaniem marszu sprawdź te trzy informacje:',
    reinfCheck1: '<strong>Kto jest online?</strong><p>Sprawdź status połączenia każdego członka. Zidentyfikuj graczy online, którym brakuje wsparcia, aby pomóc im w pierwszej kolejności.</p>',
    reinfCheck2: '<strong>Kto ma już solidne posiłki?</strong><p>Porównaj poziom wsparcia miast. Nasz cel to <strong>200 000 żołnierzy wsparcia łącznie na miasto</strong>: szukaj najpierw tych z małą ilością posiłków lub bez nich, korygując wg raportów.</p>',
    reinfCheck3: '<strong>Kogo już wspieram?</strong><p>Sprawdź na tej samej liście posiłki, które już wysłałeś(-aś). Zidentyfikuj odbiorców przed wyborem celu kolejnego marszu: celem jest równomierne rozłożenie pomocy.</p>',
    reinfBoxTitle: 'Jak wybrać kolejny cel?',
    reinfBoxBody: '<p><strong>Najpierw członek online z niewielkim wsparciem.</strong> Jeśli gracze online są już dobrze zabezpieczeni, pomóż innym potrzebującym miastom. Unikaj kumulowania wszystkich marszów w jednym mieście, gdy inne zostaje bez pomocy.</p><p>Na przykład: mając dwóch graczy online, jednego z 80 000 posiłków i drugiego z 200 000, priorytetowo uzupełnij tego z 80 000, chyba że R4 wyda inne polecenie lub raporty wskażą inną potrzebę.</p>',
    reinfTakeaway: 'Zaglądaj regularnie do Wydarzenie → Członkowie, aby śledzić rozkład sił. Aby przenieść już rozstawione posiłki, sprawdzaj raporty i przestrzegaj sygnałów GO od R4.',
    pointsEyebrow: 'DLACZEGO OPRÓŻNIAĆ MIASTO?',
    pointsTitle: 'Jedna obrona, dwa źródła punktów.',
    pointsBody: '<p>Zdobywasz punkty za Wikingów zabitych w twoim mieście, w tym przez posiłki sojuszników. Twoje wojska mogą również zdobywać punkty za posiłki w miastach sojuszników.</p><p><strong>Pozwolenie innym na obronę twojego miasta nie odbiera ci punktów obrony.</strong> Jeśli twoje własne wojska dokonują zabójstw, zmniejszają pulę punktów dostępnych dla tych, którzy przyszli ci z pomocą.</p>',
    pointsExTitle: 'Przykład: 1 000 pokonanych Wikingów',
    pointsExBody: '<p><strong>W twoim mieście nie ma twoich wojsk:</strong> posiłki eliminują 1 000 Wikingów. Otrzymujesz należne punkty obrony; sojusznicy zdobywają punkty za swoje zabójstwa.</p><p><strong>Twoje wojska zabiją 300:</strong> dla posiłków zostaje tylko 700 Wikingów. Przy tej samej łącznej liczbie 1 000 zabitych Wikingów, twoi sojusznicy mają mniej okazji do zdobycia punktów.</p><small>Przykład poglądowy w liczbie zabójstw, a nie tabela punktacji. Wartość punktowa zależy od fali i poziomu trudności.</small>',
    fireHealEyebrow: 'W CZASIE WYDARZENIA / LECZENIE I OGIEŃ',
    fireHealTitle: 'Nie lecz wojsk. Nie gaś pożarów.',
    fireHealCol1: '<strong>Dlaczego nie leczyć w szpitalu?</strong><p>Uleczenie wojsk natychmiast odsyła je do twojego miasta. Będą zabijać Wikingów zamiast posiłków sojuszników, odbierając im punkty eliminacji. Ponadto marnuje to przyspieszenia: poczekaj na zakończenie wydarzenia, aby leczyć ze spokojem.</p>',
    fireHealCol2: '<strong>Dlaczego pozwolić miastu płonąć?</strong><p>Płonące miasto sygnalizuje sojuszowi, że poniosło porażkę (po 2 porażkach nie jest już atakowane). Ugaszenie kosztuje klejnoty i wprowadza w błąd sojuszników. Ponadto ogień nie przeszkadza w zdobywaniu wszystkich punktów u sojuszników i w KG!</p>',
    fireHealTakeaway: 'Właściwy odruch: pozwól płonąć i nie dotykaj szpitala. Leczenie i naprawy dopiero po wydarzeniu!',
    reportEyebrow: '05 / SPRAWDZENIE PO ATAKU',
    reportTitle: 'Raport daje dwie odpowiedzi.',
    reportCol1: '<strong>Czy moje wojska zabiły Wikingów?</strong><p>Sprawdź swój wiersz w szczegółach zabójstw. Celuj w <strong>0 zabójstw własnych wojsk w domu</strong>, utrzymując obronę zdolną zabić 100% Wikingów. Jeśli łucznicy zdobywają zabójstwa, ustal z R4, czy potrzeba więcej posiłków, zanim ich wyślesz.</p>',
    reportCol2: '<strong>Czy zabito 100% Wikingów?</strong><p>Sprawdź procent w prawym górnym rogu raportu. Celem jest <strong>100% zabójstw łącznie przez obrońców</strong>. Jeśli jest mniej, zgłoś miasto, aby dostosować posiłki z R4.</p>',
    reportTakeaway: 'Idealny wynik: twoje własne wojska mają 0 zabójstw w domu, posiłki mają 100%.',
    citySourceNote: 'Instrukcje i punkt odniesienia 200 000 posiłków: strategia naszego sojuszu. Mechanika punktów: <a href="https://kingshotguides.com/guide/viking-vengeance-expert-guide-beginner-to-advanced/">przewodnik społeczności Kingshot Guides</a>. Przy falach 10 i 20 kieruj się poniższymi sygnałami GO od R4.',
    asideEyebrow: 'PLAN BITWY',
    asideTitle: 'Żadnego wymarszu <br>bez sygnału.',
    strategyStep1: '<strong>Trzymać posiłki</strong><p>Sprawdź raporty i mapę przed opuszczeniem sojuszników.</p>',
    strategyStep2: '<strong>Wycofać na GO</strong><p>Wycofaj posiłki i poczekaj, aż Raagui dotrze do KG.</p>',
    strategyStep3: '<strong>Wejść do KG</strong><p>Wejdź na drugi sygnał GO i zostań do potwierdzenia ataku.</p>',
    strategyStep4: '<strong>Wrócić do sojusznika</strong><p>Na sygnał GO wyjścia wycofaj wojska, a na GO wsparcia wyślij je do tego samego sojusznika.</p>',
    warningBody: '<strong>Zegar nie jest ostatecznym dowodem.</strong>Koniec odliczania zegara nie wystarczy: sprawdź raporty walki i mapę.',
    asideSourceNote: 'Strategia sojuszu, opracowana na podstawie wytycznych R4.',
    messagesEyebrow: 'GOTOWE NA CZAT',
    messagesTitle: 'Wiadomości do skopiowania',
    groupAria: 'Kategoria wiadomości',
    groupExplanations: '1. Zrozumieć i przygotować się',
    groupCoordination: '2. Podczas wydarzenia',
    groupExplanationsHint: 'Wybierz temat, aby zrozumieć strategię, a następnie skopiuj wiadomość po polsku lub po angielsku.',
    groupCoordinationHint: 'Wiadomości dotyczące fal 10 i 20 oraz przypomnienia w kolejności: instrukcje, organizacja, oczekiwanie, sygnały GO i przypomnienia. Kopiuj każdą we właściwym momencie.',
    copyToast: (lang) => `Wiadomość w języku ${lang.toUpperCase()} została skopiowana. Gotowa do wklejenia na czacie!`,
    copyUnavailable: 'Schowek niedostępny: zaznacz tekst, aby go skopiować.',
    footerContent: '<span>KINGSHOT / VIKINGS</span><span>Raporty. Mapa. Następnie sygnał GO.</span>',
    noscript: 'Włącz obsługę JavaScript, aby wyświetlać i kopiować szybkie wiadomości.'
  },
  tr: {
    pageTitle: 'Vikings — Komuta Merkezi',
    metaDesc: 'Vikingler stratejisi: şehrinizi hazırlayın, puanları anlayın, takviyeleri dağıtın ve 10 ile 20. dalgaları koordine edin.',
    skip: 'Mesajlara git',
    langAria: 'Site dili',
    introEyebrow: 'İTTİFAK KOORDİNASYONU',
    introH1: 'Her hareket.<br><em>Doğru sinyalle.</em>',
    introCopy: 'Vikingler sırasında ittifakın senkronize kalmasını sağlayan strateji ve mesajlar.',
    waveAria: '10 ve 20. Dalgalar',
    waveMarkSpan: 'KARARGAH DALGALARI',
    waveMarkStrong: '10 <i>&</i> 20',
    waveMarkSmall: 'Tek bir kural: GO işaretini bekleyin.',
    pageNavAria: 'Rehber gezintisi',
    navCityGuide: 'Şehirleri hazırlama',
    navTroops: 'Birlikleri dışarı gönder',
    troopsEyebrow: 'BİRLİK GÖNDERİMİ / DENGEYİ BUL',
    troopsTitle: 'Önce piyade ve süvari. Sonra okçular.',
    troopsOrder: '<strong>1. Piyade ve süvariye öncelik verin</strong><p>Onları müttefiklere takviye gönderin. Hepsi çıktıktan sonra yürüyüşlerde kalan kapasiteyi okçular için kullanın. Gelen takviyeler şehrinizi savunabiliyorsa ve kapasiteniz yetiyorsa tüm birlikleri çıkarın.</p>',
    troopsWhy: '<strong>2. Okçuları neden evde tutuyorduk?</strong><p>Önceki stratejimizde, özellikle etkinliğin sonunda takviyeler yetersiz kalırsa savunma yedeğiydiler. Rehberler de yürüyüşler doluyken okçuları evde bırakmayı öneriyor: genellikle daha az öldürme alırlar. Bu yüzden onları evde tutmak kalıcı bir zorunluluk değildir.</p>',
    troopsTest: '<strong>3. Mevcut gücümüzle 11. seviyeyi deneyelim</strong><p>İttifakımız güçlendi: iyi takviye edilmiş şehirlerden okçular dahil tüm birlikleri göndermeyi deneyebiliriz. Özellikle <strong>16–19. dalgalarda</strong> raporları inceleyin: kendi birliklerinizin, takviyelerin ve toplam Viking öldürmelerinin sayılarını karşılaştırın. Kolay başlangıç, son dalgalarda tam savunmayı garanti etmez.</p>',
    troopsNext: '<strong>4. Zorluk arttıkça savunmayı ayarlayın</strong><p>İttifak takvimine göre yaklaşık bir ay sonra beklenen sonraki seviyelerde raporları yeniden değerlendirin. <strong>Vikinglerin %100’ü</strong> öldürülemiyorsa daha fazla takviye isteyin veya kendi birliklerinizin bir kısmını savunma için R4 ile koordine ederek geri çağırın. Geri çekerken müttefikinizi savunmasız bırakmayın.</p>',
    troopsTakeaway: '<strong>Hedef: kendi şehrinizde kendi birliklerinizden 0 öldürme + takviyeler tarafından Vikinglerin %100’ünün öldürülmesi.</strong> İki hedef birlikte sağlanamıyorsa önce savunmayı güvenceye alın. Öldürme alan okçular yararlı olabilir: savunmayı kontrol etmeden onları otomatik olarak çıkarmayın.',
    troopsSource: 'Birlik önceliği: <a href="https://kingshotguides.com/guide/viking-vengeance-expert-guide-beginner-to-advanced/">Kingshot Guides</a>. Rapor karşılaştırma: <a href="https://9to5gaming.com/kingshot-viking-vengeance-guide/">9to5Gaming</a>. 11. seviye denemesi, 16–19. dalgalara dikkat ve takvim ittifakımıza özgüdür.',
    troopsArchersTitle: 'Okçularınızı neden bir müttefike de göndermelisiniz?',
    troopsArchersBody: '<p>Müttefikiniz kendi okçularını dışarı gönderdiyse, savaş okçulara ulaştığında <strong>sizin okçularınız kalan Vikingleri bitirmek için gereken ek hasarı sağlayabilir.</strong> Oradaki öldürmeleri size takviye puanı kazandırırken müttefikiniz şehrinde öldürülen Vikingler için savunma puanlarını korur.</p><p><strong>Şehrinde okçu olmaması, sizin okçularınızın hasar vereceğini garanti etmez:</strong> piyade ve süvari zaten tüm Vikingleri öldürüyorsa okçularınız öldürme alamaz. R4 ile koordineli olarak, gerçekten katkı sağlayacakları şehri seçmek için raporları karşılaştırın.</p>',
    navReinforcements: 'Kimi takviye etmeli?',
    navPoints: 'Puanları anlama',
    navFireHeal: 'İyileştirme ve yangın',
    navMessages: 'Kopyalanacak mesajlar',
    cityEyebrow: 'ŞEHİR STRATEJİSİ',
    cityTitle: 'Kahramanlar evde.<br> Birlikler müttefiklerde.',
    cityLead: 'Herkes birliklerini başkalarını takviye etmek için gönderir ve kendi şehrini savunmak için takviye alır. Amaç: tüm ittifakı korumak ve herkesin puan kazanmasını sağlamak.',
    card1Eyebrow: '01 / HAZIRLIK',
    card1Title: 'En iyi 3 kahramanınızı tutun',
    card1Body: 'En iyi üç kahramanınızı şehrinizde bırakın. Yürüyüşlerinizle yanlışlıkla göndermemek için onları <strong>komuta merkezinde</strong> kilitleyin.',
    card2Eyebrow: '02 / ZORUNLU',
    card2Title: 'Öncelik piyade ve süvaride',
    card2Body: '<p>Önce tüm piyade ve süvariyi müttefiklere gönderin; yürüyüşlerde yer ve şehrinizde yeterli takviye varsa ardından okçuları gönderin. <strong>En iyi 3 kahramanınızı evde tutun.</strong></p><p><a href="#troop-strategy">Birlik gönderimini ve okçuların rolünü anlayın →</a></p>',
    card3Eyebrow: '03 / DAĞITIM',
    card3Title: 'Kimi takviye edeceğinizi seçin',
    card3Body: '<p>Etkinliğin <strong>Üyeler</strong> listesi kimin çevrimiçi olduğunu, kimin takviyeye ihtiyacı olduğunu ve kimi zaten takviye ettiğinizi gösterir.</p><p><a href="#reinforcements">Bu listenin nasıl kullanılacağını görün →</a></p>',
    card4Eyebrow: '04 / ÖLÇEKLENDİRME',
    card4Title: 'Şehir başına 200.000 takviye hedefleyin',
    card4Body: 'Sonuna kadar dayanmak için ittifak referansımız: takviye gönderen kişi başına değil, <strong>bir şehirde toplam 200.000</strong>.<p>Birlik gücüne, zorluğa ve raporlara göre ayarlayın. Zaten iyi korunan bir şehir, önceliği daha az takviyeli bir şehre bırakabilir.</p>',
    reinfEyebrow: 'OYUN İÇİNDE / ETKİNLİK SAYFASI',
    reinfTitle: 'Kim çevrimiçi? Kimi takviye ediyorum? Kime yardım etmeli?',
    reinfPath: '<strong>Vikingler</strong> etkinliğini açın → <strong>Üyeler</strong> sekmesine dokunun.',
    reinfLead: 'Bu liste size ittifakın genel bir görünümünü sunar. Bir yürüyüş göndermeden önce bu üç bilgiyi karşılaştırın:',
    reinfCheck1: '<strong>Kim çevrimiçi?</strong><p>Her üyenin bağlantı durumuna bakın. Az takviyeleri olduğunda öncelikli olarak yardım edilecek çevrimiçi oyuncuları belirleyin.</p>',
    reinfCheck2: '<strong>Kimin takviyesi zaten iyi?</strong><p>Şehirlerin takviye seviyelerini karşılaştırın. Kılavuzumuz <strong>şehir başına toplam 200.000 takviye birliğidir</strong>: önce az takviyeli veya hiç takviyesi olmayanları bulun, ardından raporlarına göre ayarlayın.</p>',
    reinfCheck3: '<strong>Zaten kimi takviye ediyorum?</strong><p>Daha önce gönderdiğiniz takviyeleri aynı listede kontrol edin. Başka bir yürüyüşün nereye gönderileceğini seçmeden önce alıcıları kontrol edin: amaç yardımı üyeler arasında dağıtmaktır.</p>',
    reinfBoxTitle: 'Bir sonraki hedefinizi nasıl seçersiniz?',
    reinfBoxBody: '<p><strong>Öncelikle, takviyesi az olan çevrimiçi bir üye.</strong> Çevrimiçi üyeler zaten iyi durumdaysa, ihtiyacı olan diğer şehirlere yardım edin. Bir şehir yardımsız kalırken tüm yürüyüşleri tek bir şehre toplamaktan kaçının.</p><p>Örneğin, biri 80.000, diğeri 200.000 takviyeli iki çevrimiçi üye arasında, R4 talimatı veya farklı bir ihtiyaç gösteren bir rapor olmadıkça, öncelikle 80.000 olanı tamamlayın.</p>',
    reinfTakeaway: 'Dağılımı takip etmek için düzenli olarak Etkinlik → Üyeler bölümüne dönün. Konumlanmış takviyeleri kaydırmak için raporları kontrol edin ve R4\'ün GO işaretlerine uyun.',
    pointsEyebrow: 'NEDEN ŞEHRİ BOŞALTMALI?',
    pointsTitle: 'Bir savunma, iki puan kaynağı.',
    pointsBody: '<p>Takviyeler de dahil olmak üzere şehrinizde öldürülen Vikingler için puan kazanırsınız. Birlikleriniz ayrıca müttefiklerinizde takviye puanları kazanabilir.</p><p><strong>Şehrinizi başkalarının savunmasına izin vermek savunma puanlarınızı elinizden almaz.</strong> Kendi birlikleriniz öldürme yaparsa, size yardıma gelenlerin alabileceği takviye puanlarını azaltır.</p>',
    pointsExTitle: 'Örnek: 1.000 Viking öldürüldü',
    pointsExBody: '<p><strong>Şehrinizde kendi birlikleriniz yok:</strong> takviyeler 1.000 Viking\'i öldürür. Karşılık gelen savunma puanlarını alırsınız; müttefikler öldürmeleri için puan kazanır.</p><p><strong>Birlikleriniz 300 öldürür:</strong> takviyelerin öldürmesi için yalnızca 700 Viking kalır. Aynı toplam 1.000 öldürülen Viking için müttefiklerinizin puan kazanma şansı azalır.</p><small>Öldürme sayısı üzerinden açıklayıcı örnek, puan tablosu değildir. Puan değeri dalgaya ve zorluğa bağlıdır.</small>',
    fireHealEyebrow: 'ETKİNLİK SIRASINDA / İYİLEŞTİRME VE YANGIN',
    fireHealTitle: 'İyileştirmeyin. Yangını söndürmeyin.',
    fireHealCol1: '<strong>Neden revirde iyileştirme yapılmamalı?</strong><p>Birlikleri iyileştirdiğinizde hemen şehrinize dönerler. Müttefiklerinizin takviyeleri yerine Vikingleri öldürür ve onları eleme puanlarından mahrum bırakırlar. Ayrıca hızlandırıcıları boşa harcar: sakin bir şekilde iyileştirmek için etkinliğin bitmesini bekleyin.</p>',
    fireHealCol2: '<strong>Neden şehrin yanmasına izin verilmeli?</strong><p>Yanan bir şehir ittifaka zaten bir yenilgi aldığını bildirir (2 yenilgiden sonra artık hedef alınmaz). Söndürmek boşuna elmas harcatır ve takviyelerin kafasını karıştırır. Ayrıca yanıyor olmak müttefiklerinizde ve Karargahta tüm puanlarınızı kazanmanızı engellemez!</p>',
    fireHealTakeaway: 'Doğru refleks: bırakın yansın ve revire dokunmayın. İyileştirme ve onarımlar etkinlikten sonra yapılır!',
    reportEyebrow: '05 / SALDIRIDAN SONRA KONTROL',
    reportTitle: 'Rapor iki yanıt verir.',
    reportCol1: '<strong>Kendi birliklerim Viking öldürdü mü?</strong><p>Öldürme ayrıntılarında kendi satırınızı kontrol edin. Vikinglerin %100’ünü öldürebilen savunmayı korurken <strong>kendi şehrinizde kendi birliklerinizden 0 öldürme</strong> hedefleyin. Okçularınız öldürme alıyorsa onları göndermeden önce daha fazla takviye gerekip gerekmediğini R4 ile değerlendirin.</p>',
    reportCol2: '<strong>Vikinglerin %100\'ü öldürüldü mü?</strong><p>Raporun sağ üst köşesindeki yüzdeyi kontrol edin. Hedef, <strong>savunucular tarafından toplamda %100 öldürmedir</strong>. Bunun altındaysa, takviyeleri R4 ile ayarlamak için şehri bildirin.</p>',
    reportTakeaway: 'Doğru sonuç: kendi birlikleriniz evde 0 öldürme yapar, takviyeler %100 yapar.',
    citySourceNote: 'Talimatlar ve 200.000 takviye referansı: ittifakımızın stratejisi. Puan mekaniği: <a href="https://kingshotguides.com/guide/viking-vengeance-expert-guide-beginner-to-advanced/">Kingshot Guides topluluk rehberi</a>. 10 ve 20. dalgalar için aşağıdaki R4 GO işaretlerini takip edin.',
    asideEyebrow: 'SAVAŞ PLANI',
    asideTitle: 'Sinyal olmadan <br>çıkış yok.',
    strategyStep1: '<strong>Takviyeleri koruyun</strong><p>Müttefiklerden ayrılmadan önce raporları ve haritayı kontrol edin.</p>',
    strategyStep2: '<strong>GO ile geri çekilin</strong><p>Takviyeleri çekin, ardından Raagui\'nin Karargaha varmasını bekleyin.</p>',
    strategyStep3: '<strong>Karargaha katılın</strong><p>İkinci GO ile girin ve saldırı onaylanana kadar kalın.</p>',
    strategyStep4: '<strong>Müttefike geri dönün</strong><p>Çıkış GO\'sunda birlikleri çekin, ardından takviye GO\'sunda aynı müttefike takviye gönderin.</p>',
    warningBody: '<strong>Sayaç kesin kanıt değildir.</strong>Sayacın bitmesi yeterli değildir: savaş raporlarını ve haritayı kontrol edin.',
    asideSourceNote: 'Verilen R4 talimatlarına dayanan ittifak stratejisi.',
    messagesEyebrow: 'SOHBET İÇİN HAZIR',
    messagesTitle: 'Kopyalanacak mesajlar',
    groupAria: 'Mesaj zamanı',
    groupExplanations: '1. Anlama ve hazırlanma',
    groupCoordination: '2. Etkinlik sırasında',
    groupExplanationsHint: 'Stratejiyi anlamak için bir konu seçin, ardından mesajı Türkçe veya İngilizce olarak kopyalayın.',
    groupCoordinationHint: '10 ve 20. dalga mesajları ve hatırlatmalar sırayla: talimatlar, organizasyon, beklemeler, GO ve hatırlatmalar. Her birini doğru anda kopyalayın.',
    copyToast: (lang) => `${lang.toUpperCase()} mesajı kopyalandı. Sohbete yapıştırmaya hazır!`,
    copyUnavailable: 'Kopyalama kullanılamıyor: kopyalamak için metni seçin.',
    footerContent: '<span>KINGSHOT / VIKINGS</span><span>Raporlar. Harita. Sonra GO.</span>',
    noscript: 'Hızlı mesajları görüntülemek ve kopyalamak için JavaScript\'i etkinleştirin.'
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
  if (saved && ['fr', 'en', 'es', 'pt-BR', 'ar', 'pl', 'tr'].includes(saved)) {
    language = saved;
  }
} catch {}

let toastTimer;
const copyIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></svg>';

function getMessageTitle(item, lang) {
  if (lang === 'tr' && item.titleTr) return item.titleTr;
  if (lang === 'pl' && item.titlePl) return item.titlePl;
  if (lang === 'ar' && item.titleAr) return item.titleAr;
  if (lang === 'pt-BR' && item.titlePtBr) return item.titlePtBr;
  if (lang === 'en' && item.titleEn) return item.titleEn;
  if (lang === 'es' && item.titleEs) return item.titleEs;
  return item.title;
}

function messageCard(item, i) {
  const currentTitle = getMessageTitle(item, language);

  let copyButtonsHtml = '';
  if (language === 'pl') {
    copyButtonsHtml = `
      <button type="button" class="copy-small" data-copy="${i}" data-copy-lang="pl" aria-label="Kopiuj po polsku: ${currentTitle}">${copyIcon} PL</button>
      <button type="button" class="copy-small" data-copy="${i}" data-copy-lang="en" aria-label="Kopiuj po angielsku: ${currentTitle}">${copyIcon} EN</button>
    `;
  } else if (language === 'tr') {
    copyButtonsHtml = `
      <button type="button" class="copy-small" data-copy="${i}" data-copy-lang="tr" aria-label="Türkçe kopyala: ${currentTitle}">${copyIcon} TR</button>
      <button type="button" class="copy-small" data-copy="${i}" data-copy-lang="en" aria-label="İngilizce kopyala: ${currentTitle}">${copyIcon} EN</button>
    `;
  } else if (language === 'ar') {
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
    : (language === 'pl'
      ? `Kopiuj: ${currentTitle}`
      : (language === 'tr'
        ? `Kopyala: ${currentTitle}`
        : (language === 'ar'
          ? `نسخ: ${currentTitle}`
          : (['es', 'pt-BR'].includes(language) ? `Copiar: ${currentTitle}` : `Copy: ${currentTitle}`))));

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
