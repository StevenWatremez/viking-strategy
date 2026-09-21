const recapMessages = [
  {
    "title": "Préparer sa ville et gagner des points",
    "short": "Préparation et points",
    "tag": "RÉCAP 1/2",
    "tone": "wait",
    "fr": "⚔️ VIKINGS 1/2 — Gardez vos 3 meilleurs héros en ville et bloquez-les au poste de commandement. Sortez TOUTES vos troupes pour renforcer les alliés : leurs renforts défendent votre ville. Vous gardez vos points de défense et gagnez aussi des points chez les autres. Des troupes restées chez vous prennent des éliminations aux renforts et réduisent les points de vos alliés !",
    "en": "⚔️ VIKINGS 1/2 — Keep your 3 best heroes in your city and lock them in the Command Center. Send ALL your troops out to reinforce allies: their reinforcements defend your city. You keep your defense points and also earn points at other cities. Troops left at home take kills from reinforcements, reducing your allies’ points!"
  },
  {
    "title": "Répartir les renforts et suivre les attaques",
    "short": "Renforts et rapports",
    "tag": "RÉCAP 2/2",
    "tone": "wait",
    "fr": "🛡️ VIKINGS 2/2 — Événement → Membres : vérifiez qui est en ligne, les renforts reçus et qui vous renforcez déjà. Aidez d’abord les joueurs en ligne peu renforcés, puis les autres. Visez ~200 000 renforts au total par ville, à ajuster selon les rapports : 0 élimination par vos propres troupes chez vous, 100 % des Vikings tués au total. Vagues 10/20 : attendez les GO du R4 pour rappeler, rejoindre le QG après Raagui, puis repartir renforcer le même allié. Vérifiez rapports et carte, pas seulement le timer !",
    "en": "🛡️ VIKINGS 2/2 — Event → Members: check who is online, incoming reinforcements, and whom you already reinforce. Help online players with few reinforcements first, then others. Aim for ~200,000 reinforcements in total per city, adjusted using reports: 0 kills by your own troops at home, 100% of Vikings killed overall. Waves 10/20: wait for the R4’s GO to recall, join HQ after Raagui, then return to reinforce the same ally. Check reports and the map, not just the timer!"
  }
];
const explanationMessages = [
  {
    "title": "Le principe de la stratégie",
    "short": "Le principe",
    "tag": "EXPLICATION",
    "tone": "wait",
    "fr": "🛡️ Vikings : on se défend les uns les autres ! Envoyez vos troupes chez vos alliés et faites défendre votre ville par leurs renforts. Vous marquez des points grâce aux Vikings éliminés dans votre ville, et vos troupes peuvent aussi gagner des points en défendant les autres.",
    "en": "🛡️ Vikings: we defend each other! Send your troops to your allies and let their reinforcements defend your city. You earn points from Vikings killed in your city, and your troops can also earn points by defending others."
  },
  {
    "title": "Garder ses trois meilleurs héros",
    "short": "Les 3 héros",
    "tag": "EXPLICATION",
    "tone": "wait",
    "fr": "🦸 Gardez vos 3 meilleurs héros dans votre ville. Bloquez-les dans le poste de commandement pour éviter de les envoyer par erreur avec vos marches. Attention : garder ses héros à la maison ne veut pas dire y garder ses troupes !",
    "en": "🦸 Keep your 3 best heroes in your city. Lock them in the Command Center to avoid accidentally sending them out with your marches. Keeping your heroes at home does not mean keeping your troops there!"
  },
  {
    "title": "Sortir toutes ses troupes",
    "short": "Vider sa ville",
    "tag": "EXPLICATION",
    "tone": "wait",
    "fr": "⚠️ Sortez toutes vos troupes de votre ville pour renforcer vos alliés. Si vos propres troupes restent chez vous, elles peuvent tuer des Vikings à la place des renforts et réduire les points de vos alliés. Vérifiez aussi les troupes revenues chez vous pendant l’événement. Votre défense doit être assurée par les renforts reçus.",
    "en": "⚠️ Send all your troops out of your city to reinforce your allies. Troops left at home can kill Vikings instead of the reinforcements, reducing your allies’ points. Also check for troops returning home during the event. Your city should be defended by incoming reinforcements."
  },
  {
    "title": "Comprendre les points",
    "short": "Les points",
    "tag": "EXPLICATION",
    "tone": "wait",
    "fr": "💡 Les Vikings tués dans votre ville vous rapportent des points de défense, même si ce sont les renforts qui les éliminent. Vos alliés gagnent aussi des points de renfort pour leurs éliminations. Faire défendre votre ville par les autres ne vous retire donc pas vos points ! Pendant ce temps, vos troupes marquent chez eux.",
    "en": "💡 Vikings killed in your city give you defense points, even when reinforcements get the kills. Your allies also earn reinforcement points for their kills. Letting others defend your city does not take away your defense points! Meanwhile, your troops earn points at their cities."
  },
  {
    "title": "Un exemple pour comprendre",
    "short": "Exemple concret",
    "tag": "EXPLICATION",
    "tone": "wait",
    "fr": "📊 Exemple : 1 000 Vikings sont éliminés dans votre ville. Sans vos troupes, les renforts font les 1 000 éliminations. Si vos troupes en tuent 300, il ne reste que 700 éliminations pour les alliés. Le total défendu est le même, mais les renforts ont moins d’occasions de marquer. Ce sont des nombres de Vikings, pas un barème de points.",
    "en": "📊 Example: 1,000 Vikings are killed in your city. With none of your own troops at home, reinforcements get all 1,000 kills. If your troops kill 300, only 700 kills remain for your allies. The total defended is the same, but reinforcements have fewer chances to score. These are Viking counts, not point values."
  },
  {
    "title": "Consulter la liste des membres",
    "short": "Événement → Membres",
    "tag": "EXPLICATION",
    "tone": "wait",
    "fr": "📋 Pour organiser vos renforts : ouvrez l’événement Vikings, puis le bouton Membres. Vous pouvez y voir qui est en ligne, le niveau de renforcement des villes et les renforts que vous avez déjà envoyés. Regardez qui vous renforcez déjà avant d’envoyer une autre marche. Revenez régulièrement dans cette liste pour suivre les besoins de l’alliance.",
    "en": "📋 To organize your reinforcements, open the Vikings event and tap Members. Check who is online, how well each city is reinforced, and the reinforcements you have already sent. Check whom you are already reinforcing before sending another march. Return to this list regularly to track the alliance’s needs."
  },
  {
    "title": "Choisir qui aider en priorité",
    "short": "Qui renforcer ?",
    "tag": "EXPLICATION",
    "tone": "wait",
    "fr": "🤝 Renforcez en priorité les membres en ligne qui ont peu ou pas de renforts. S’ils sont déjà bien couverts, aidez les autres villes qui en ont besoin. Entre deux membres en ligne avec 80 000 et 200 000 renforts, complétez d’abord celui à 80 000, sauf consigne du R4 ou besoin différent dans les rapports. L’objectif est d’aider tout le monde !",
    "en": "🤝 Prioritize online members with few or no reinforcements. Once they are well covered, help other cities in need. Between two online members with 80,000 and 200,000 reinforcements, help the one at 80,000 first, unless the R4 instructs otherwise or reports show a different need. The goal is to help everyone!"
  },
  {
    "title": "Combien de renforts envoyer ?",
    "short": "Le repère de 200 000",
    "tag": "EXPLICATION",
    "tone": "wait",
    "fr": "🛡️ Notre repère : environ 200 000 troupes de renfort AU TOTAL par ville pour tenir jusqu’au bout, pas 200 000 par personne. C’est une base à ajuster selon la force des troupes, la difficulté et les rapports. Si une ville est déjà bien couverte, utilisez vos marches disponibles pour aider une ville moins renforcée.",
    "en": "🛡️ Our guideline: around 200,000 reinforcement troops IN TOTAL per city to last through the event, not 200,000 per person. Adjust this starting point based on troop strength, difficulty, and battle reports. If a city is already well covered, use your available marches to help a less reinforced city."
  },
  {
    "title": "Vérifier les rapports d’attaque",
    "short": "Lire les rapports",
    "tag": "EXPLICATION",
    "tone": "wait",
    "fr": "🔎 Après une attaque, vérifiez 2 choses dans le rapport : 1️⃣ Votre propre joueur doit faire 0 élimination dans votre ville. Sinon, vérifiez les troupes restées ou revenues chez vous. 2️⃣ En haut à droite, visez 100 % des Vikings éliminés au total. En dessous, signalez-le au R4 pour ajuster les renforts. Pour déplacer des troupes déjà en place, respectez les GO !",
    "en": "🔎 After an attack, check 2 things in the report: 1️⃣ Your own player should have 0 kills in your city. Otherwise, check for troops left at home or returning there. 2️⃣ At the top right, aim for 100% of Vikings killed in total. If it is lower, tell the R4 so reinforcements can be adjusted. Wait for the GO before moving troops already in position!"
  }
];
const coordinationMessages = [
  { title: 'Consignes avant les vagues', short: 'Les consignes', tag: 'PRÉPARATION', tone: 'wait',
    fr: '⚔️ Vagues 10 et 20 : suivez mes GO pour chaque déplacement ! Ne retirez pas vos renforts trop tôt : ils pourraient manquer l’attaque des Vikings chez votre allié. Les timers d’arrivée sont trompeurs : vérifiez les rapports de combat et la carte. Un timer terminé ne suffit pas pour partir !',
    en: '⚔️ Waves 10 & 20: wait for my GO before each move! Do not recall reinforcements too early: they could miss the Viking attack at your ally’s city. Arrival timers are misleading: check battle reports and the map. A finished timer alone does not mean you can leave!' },
  { title: 'Organisation au QG', short: 'Organisation au QG', tag: 'PRÉPARATION', tone: 'wait',
    fr: '🏰 Pour les vagues 10 et 20, nous attendons que Raagui soit arrivé au QG avant de le rejoindre. Je donnerai le GO pour entrer, puis le GO pour sortir après l’attaque. Ensuite, retournez renforcer le même allié qu’avant. Aucun déplacement sans mon signal !',
    en: '🏰 For waves 10 & 20, we wait until Raagui has arrived at HQ before joining him. I will give the GO to enter, then the GO to leave after the attack. Afterwards, return to reinforce the same ally as before. No moves without my signal!' },
  { title: 'Rappel avant le déplacement', short: 'Maintenir les renforts', tag: 'ATTENDRE', tone: 'wait',
    fr: '✋ Gardez vos renforts chez vos alliés ! Ne vous fiez pas uniquement aux timers : l’attaque peut encore être en route. Nous vérifions les rapports et la carte avant de bouger. Attendez mon GO pour rappeler vos troupes.',
    en: '✋ Keep your reinforcements at your allies’ cities! Do not rely only on timers: the attack may still be on its way. We are checking reports and the map before moving. Wait for my GO to recall your troops.' },
  { title: 'GO pour retirer les renforts', short: 'GO rappel', tag: 'RAPPELER', tone: 'go',
    fr: '🟢 GO RAPPEL ! Retirez vos renforts de chez vos alliés. 🛑 N’entrez pas encore au QG : nous attendons l’arrivée de Raagui et mon prochain GO !',
    en: '🟢 GO RECALL! Recall your reinforcements from your allies’ cities. 🛑 Do not enter HQ yet: wait for Raagui to arrive and for my next GO!' },
  { title: 'GO pour entrer au QG', short: 'GO entrée QG', tag: 'REJOINDRE', tone: 'go',
    fr: '🟢 GO QG ! Raagui est arrivé : envoyez maintenant vos renforts au QG ! Restez jusqu’à mon GO de sortie, même si le timer semble terminé.',
    en: '🟢 GO HQ! Raagui has arrived: send your reinforcements to HQ now! Stay until my GO to leave, even if the timer appears to have finished.' },
  { title: 'Attendre l’attaque au QG', short: 'Tenir le QG', tag: 'ATTENDRE', tone: 'stop',
    fr: '🛑 Restez au QG ! Ne retirez pas vos troupes sur la seule base du timer. Nous attendons la confirmation de l’attaque dans les rapports et sur la carte. Je donne le GO dès que vous pouvez sortir.',
    en: '🛑 Stay at HQ! Do not recall your troops based only on the timer. We are waiting for confirmation of the attack in reports and on the map. I will give the GO when you can leave.' },
  { title: 'GO pour sortir du QG', short: 'GO sortie QG', tag: 'SORTIR', tone: 'go',
    fr: '🟢 GO SORTIE QG ! L’attaque est confirmée, rappelez vos troupes maintenant. Préparez-vous à retourner chez le même allié que vous renforciez avant !',
    en: '🟢 GO LEAVE HQ! The attack is confirmed: recall your troops now. Get ready to return to the same ally you were reinforcing before!' },
  { title: 'GO pour renforcer à nouveau', short: 'GO renforts', tag: 'RENFORCER', tone: 'go',
    fr: '🟢 GO RENFORTS ! Dès que vos troupes sont rentrées, renvoyez-les chez le même allié qu’avant. Faites vite pour être en place avant la prochaine attaque ! 🛡️',
    en: '🟢 GO REINFORCE! As soon as your troops return, send them back to the same ally as before. Move quickly to be in position before the next attack! 🛡️' }
];
let messageGroup = 'recap';
let messages = recapMessages;
let selected = 0;
let language = 'fr';
let toastTimer;
const panel = document.querySelector('#message-panel');
const steps = document.querySelector('#steps');
const copyIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></svg>';
function render() {
  const explaining = messageGroup !== 'coordination';
  const count = String(messages.length).padStart(2, '0');
  document.querySelector('#message-count').textContent = count;
  document.querySelectorAll('[data-group]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.group === messageGroup)));
  document.querySelector('#message-hint').textContent = messageGroup === 'recap'
    ? 'Toute la stratégie en deux messages : copie le premier, puis le second pour les partager dans le chat.'
    : explaining
    ? 'Un sujet par message : partage les explications dans cet ordre ou choisis celle dont ton alliance a besoin.'
    : 'Choisis une étape, copie le message et colle-le dans le chat de l’alliance à ton signal.';
  steps.innerHTML = messages.map((m, i) => `<button type="button" data-step="${i}" ${i === selected ? 'aria-current="step"' : ''}><span class="step-number">${String(i + 1).padStart(2, '0')}</span><span>${m.short}</span><span class="step-arrow" aria-hidden="true">↗</span></button>`).join('');
  const m = messages[selected];
  panel.innerHTML = `<div class="panel-top"><span class="badge ${m.tone}">${m.tag}</span><span class="panel-count">${String(selected + 1).padStart(2, '0')} / ${count}</span></div><h3>${m.title}</h3><div class="message-label">${language === 'fr' ? 'FRANÇAIS' : 'ENGLISH'} <span>${explaining ? 'STRATÉGIE DES VILLES' : 'VAGUES 10 & 20'}</span></div><p class="message-text" lang="${language}">${m[language]}</p><div class="panel-actions"><button type="button" class="copy-primary" data-copy="${selected}">${copyIcon} Copier le message <span>${language.toUpperCase()}</span></button><button type="button" class="copy-secondary" data-copy="${selected}" data-copy-lang="${language === 'fr' ? 'en' : 'fr'}">Copier en ${language === 'fr' ? 'anglais' : 'français'}</button></div><div class="panel-bottom"><span>${explaining ? 'À partager pour préparer l’alliance.' : 'À envoyer sur ton signal.'}</span><button type="button" id="next" ${selected === messages.length - 1 ? 'disabled' : ''}>${explaining ? 'Message suivant' : 'Étape suivante'} <span aria-hidden="true">→</span></button></div>`;
  document.querySelector('#all-messages').innerHTML = messages.map((item, i) => `<article><div><span class="eyebrow">${String(i + 1).padStart(2, '0')}</span><h3>${item.title}</h3><button type="button" class="copy-small" data-copy="${i}" aria-label="Copier : ${item.title}">${copyIcon} ${language.toUpperCase()}</button></div><p lang="${language}">${item[language]}</p></article>`).join('');
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
}
function notify(text) {
  const toast = document.querySelector('#toast');
  toast.textContent = text;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2800);
}
async function copy(index, lang) {
  const text = messages[index][lang];
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(text);
  } catch {
    const previousFocus = document.activeElement;
    const field = document.createElement('textarea');
    field.value = text;
    field.setAttribute('aria-label', 'Message à copier');
    field.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
    document.body.append(field);
    field.select();
    const copied = document.execCommand('copy');
    field.remove();
    previousFocus?.focus();
    if (!copied) { notify('Copie indisponible : sélectionne le texte pour le copier.'); return; }
  }
  notify(`Message ${lang.toUpperCase()} copié. Prêt à coller dans le chat !`);
}
document.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.dataset.group) {
    messageGroup = button.dataset.group;
    messages = { recap: recapMessages, explanations: explanationMessages, coordination: coordinationMessages }[messageGroup];
    selected = 0;
    render();
  }
  if (button.dataset.step !== undefined) {
    selected = Number(button.dataset.step); render();
    steps.querySelector(`[data-step="${selected}"]`).focus();
  }
  if (button.dataset.lang) { language = button.dataset.lang; render(); }
  if (button.dataset.copy !== undefined) copy(Number(button.dataset.copy), button.dataset.copyLang || language);
  if (button.id === 'next' && selected < messages.length - 1) {
    selected++; render(); panel.querySelector('.copy-primary').focus();
  }
});
render();
