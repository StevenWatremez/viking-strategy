const explanationMessages = [
  { title: 'Le principe et les points', titleEn: 'The basics and points', short: 'Principe et points', tag: 'COMPRENDRE', tone: 'wait',
    fr: '🛡️ Vikings : on se défend les uns les autres ! Vos troupes renforcent les alliés ; leurs renforts défendent votre ville. Vous gardez les points de défense des Vikings tués chez vous, même par les renforts. Vos troupes peuvent aussi marquer chez les autres. Des troupes restées chez vous prennent des éliminations aux renforts et réduisent les points de vos alliés.',
    en: '🛡️ Vikings: we defend each other! Your troops reinforce allies; their reinforcements defend your city. You keep defense points for Vikings killed at home, even by reinforcements. Your troops can also score at other cities. Troops left at home take kills from reinforcements, reducing your allies’ points.' },
  { title: 'Exemple : les points', titleEn: 'Example: points',
    fr: '📊 Sur 1 000 Vikings tués dans votre ville : si les renforts font tout, ils se partagent 1 000 éliminations. Si vos troupes en font 300, il n’en reste que 700 pour les alliés. Vous gardez les points de défense dans les deux cas. Ce sont des nombres de Vikings, pas un barème de points.',
    en: '📊 Out of 1,000 Vikings killed in your city: if reinforcements do all the work, they share 1,000 kills. If your own troops get 300, only 700 remain for allies. You keep defense points in both cases. These are Viking counts, not point values.' },
  { title: 'Préparer sa ville', titleEn: 'Prepare your city', short: 'Héros et troupes', tag: 'COMPRENDRE', tone: 'wait',
    fr: '🦸 Gardez vos 3 meilleurs héros en ville et bloquez-les au poste de commandement pour éviter de les envoyer par erreur. Sortez TOUTES vos troupes pour renforcer les alliés et faites défendre votre ville par leurs renforts. Garder ses héros ne veut pas dire garder ses troupes ! Surveillez aussi les troupes revenues chez vous pendant l’événement.',
    en: '🦸 Keep your 3 best heroes in your city and lock them in the Command Center to avoid sending them by mistake. Send ALL your troops to reinforce allies and let their reinforcements defend your city. Keeping heroes does not mean keeping troops at home! Also watch for troops returning home during the event.' },
  { title: 'Préparez vos villes', titleEn: 'Prepare your cities', short: 'Préparation', tag: 'AVANT / 1', tone: 'wait',
    fr: '⚔️ VIKINGS — Préparez vos villes :\n✅ Vos 3 meilleurs héros bloqués au poste de commandement.\n✅ TOUTES vos troupes envoyées chez les alliés.\n✅ Votre ville défendue par leurs renforts.\nVikings → Membres : aidez d’abord les joueurs en ligne peu renforcés, puis les autres villes dans le besoin.',
    en: '⚔️ VIKINGS — Prepare your cities:\n✅ Your 3 best heroes locked in the Command Center.\n✅ ALL your troops sent to allies.\n✅ Your city defended by their reinforcements.\nVikings → Members: help online players with few reinforcements first, then other cities in need.' },
  { title: 'Répartir les renforts', titleEn: 'Distribute reinforcements', short: 'Qui renforcer ?', tag: 'COMPRENDRE', tone: 'wait',
    fr: '🤝 Vikings → Membres : regardez qui est en ligne, les renforts reçus et qui vous renforcez déjà. Aidez d’abord les membres en ligne peu renforcés, puis les autres villes qui en ont besoin. Notre repère : ~200 000 renforts AU TOTAL par ville, pas par personne. Ajustez selon la force des troupes, la difficulté, les rapports et les consignes du R4.',
    en: '🤝 Vikings → Members: check who is online, incoming reinforcements, and whom you already reinforce. Help online members with few reinforcements first, then other cities in need. Our guideline: ~200,000 reinforcements IN TOTAL per city, not per person. Adjust for troop strength, difficulty, reports, and R4 instructions.' },
  { title: 'Dernière vérification', titleEn: 'Final check', short: 'Avant le départ', tag: 'AVANT / 2', tone: 'wait',
    fr: '🛡️ VIKINGS — Dernière vérification :\n✅ Aucune de vos troupes restée chez vous.\n✅ Villes couvertes : repère ~200 000 renforts AU TOTAL par ville, à ajuster selon les rapports. Signalez les manques au R4.\n✅ Vagues 10/20 : aucun déplacement sans GO du R4. Entrée au QG après Raagui ; retour chez les mêmes alliés.',
    en: '🛡️ VIKINGS — Final check:\n✅ None of your own troops left at home.\n✅ Cities covered: guideline ~200,000 reinforcements IN TOTAL per city, adjusted using reports. Tell the R4 about gaps.\n✅ Waves 10/20: no moves without the R4’s GO. Enter HQ after Raagui; return to the same allies.' },
  { title: 'Comprendre les vagues 10 et 20', titleEn: 'Understand waves 10 and 20', short: 'Vagues 10 et 20', tag: 'COMPRENDRE', tone: 'wait',
    fr: '🏰 Vagues 10/20 : restez chez vos alliés jusqu’au GO RAPPEL. Attendez ensuite Raagui au QG et le GO QG pour le rejoindre. Restez au QG jusqu’au GO SORTIE, puis attendez le GO RENFORTS pour retourner chez les mêmes alliés. Le R4 vérifie les rapports et la carte avant les départs : un timer terminé ne suffit pas !',
    en: '🏰 Waves 10/20: stay at your allies’ cities until GO RECALL. Then wait for Raagui to reach HQ and for GO HQ before joining him. Stay at HQ until GO LEAVE HQ, then wait for GO REINFORCE to return to the same allies. The R4 checks reports and the map before departures: a finished timer is not enough!' },
  { title: 'Lire les rapports', titleEn: 'Read the reports', short: 'Les deux contrôles', tag: 'COMPRENDRE', tone: 'wait',
    fr: '🔎 Après une attaque, contrôlez le rapport : 1️⃣ Votre joueur doit faire 0 élimination dans votre ville ; sinon, vérifiez les troupes restées ou revenues chez vous. 2️⃣ En haut à droite, visez 100 % des Vikings éliminés au total ; en dessous, signalez la ville au R4 pour ajuster les renforts. Respectez les GO pour déplacer les troupes déjà en place.',
    en: '🔎 After an attack, check the report: 1️⃣ Your player should have 0 kills in your city; otherwise, check for troops left at home or returning there. 2️⃣ At the top right, aim for 100% of Vikings killed overall; if lower, tell the R4 so reinforcements can be adjusted. Follow the GO signals before moving troops already in position.' }
];
const coordinationMessages = [
  { title: 'Consignes avant les vagues', short: 'Les consignes', tag: 'PRÉPARATION', tone: 'wait',
    titleEn: "Instructions before the waves",
    fr: '⚔️ Vagues 10 et 20 : suivez mes GO pour chaque déplacement ! Ne retirez pas vos renforts trop tôt : ils pourraient manquer l’attaque des Vikings chez votre allié. Les timers d’arrivée sont trompeurs : vérifiez les rapports de combat et la carte. Un timer terminé ne suffit pas pour partir !',
    en: '⚔️ Waves 10 & 20: wait for my GO before each move! Do not recall reinforcements too early: they could miss the Viking attack at your ally’s city. Arrival timers are misleading: check battle reports and the map. A finished timer alone does not mean you can leave!' },
  { title: 'Organisation au QG', short: 'Organisation au QG', tag: 'PRÉPARATION', tone: 'wait',
    titleEn: "HQ organization",
    fr: '🏰 Pour les vagues 10 et 20, nous attendons que Raagui soit arrivé au QG avant de le rejoindre. Je donnerai le GO pour entrer, puis le GO pour sortir après l’attaque. Ensuite, retournez renforcer le même allié qu’avant. Aucun déplacement sans mon signal !',
    en: '🏰 For waves 10 & 20, we wait until Raagui has arrived at HQ before joining him. I will give the GO to enter, then the GO to leave after the attack. Afterwards, return to reinforce the same ally as before. No moves without my signal!' },
  { title: 'Rappel avant le déplacement', short: 'Maintenir les renforts', tag: 'ATTENDRE', tone: 'wait',
    titleEn: "Reminder before moving",
    fr: '✋ Gardez vos renforts chez vos alliés ! Ne vous fiez pas uniquement aux timers : l’attaque peut encore être en route. Nous vérifions les rapports et la carte avant de bouger. Attendez mon GO pour rappeler vos troupes.',
    en: '✋ Keep your reinforcements at your allies’ cities! Do not rely only on timers: the attack may still be on its way. We are checking reports and the map before moving. Wait for my GO to recall your troops.' },
  { title: 'Maintenir les renforts', titleEn: 'Keep reinforcements in place',
    fr: '✋ Gardez vos renforts chez vos alliés. Attendez mon GO RAPPEL : un timer terminé ne confirme pas la fin de l’attaque.',
    en: '✋ Keep your reinforcements at your allies’ cities. Wait for my GO RECALL: a finished timer does not confirm the attack is over.' },
  { title: 'GO pour retirer les renforts', short: 'GO rappel', tag: 'RAPPELER', tone: 'go',
    titleEn: "GO RECALL",
    fr: '🟢 GO RAPPEL ! Retirez vos renforts de chez vos alliés. 🛑 N’entrez pas encore au QG : nous attendons l’arrivée de Raagui et mon prochain GO !',
    en: '🟢 GO RECALL! Recall your reinforcements from your allies’ cities. 🛑 Do not enter HQ yet: wait for Raagui to arrive and for my next GO!' },
  { title: 'GO pour entrer au QG', short: 'GO entrée QG', tag: 'REJOINDRE', tone: 'go',
    titleEn: "GO HQ",
    fr: '🟢 GO QG ! Raagui est arrivé : envoyez maintenant vos renforts au QG ! Restez jusqu’à mon GO de sortie, même si le timer semble terminé.',
    en: '🟢 GO HQ! Raagui has arrived: send your reinforcements to HQ now! Stay until my GO to leave, even if the timer appears to have finished.' },
  { title: 'Attendre l’attaque au QG', short: 'Tenir le QG', tag: 'ATTENDRE', tone: 'stop',
    titleEn: "Wait for the HQ attack",
    fr: '🛑 Restez au QG ! Ne retirez pas vos troupes sur la seule base du timer. Nous attendons la confirmation de l’attaque dans les rapports et sur la carte. Je donne le GO dès que vous pouvez sortir.',
    en: '🛑 Stay at HQ! Do not recall your troops based only on the timer. We are waiting for confirmation of the attack in reports and on the map. I will give the GO when you can leave.' },
  { title: 'Tenir le QG', titleEn: 'Hold HQ',
    fr: '🛑 Restez au QG jusqu’à mon GO SORTIE. Nous attendons la confirmation de l’attaque dans les rapports et sur la carte.',
    en: '🛑 Stay at HQ until my GO LEAVE HQ. We are waiting for confirmation of the attack in reports and on the map.' },
  { title: 'GO pour sortir du QG', short: 'GO sortie QG', tag: 'SORTIR', tone: 'go',
    titleEn: "GO LEAVE HQ",
    fr: '🟢 GO SORTIE QG ! L’attaque est confirmée, rappelez vos troupes maintenant. Préparez-vous à retourner chez le même allié que vous renforciez avant !',
    en: '🟢 GO LEAVE HQ! The attack is confirmed: recall your troops now. Get ready to return to the same ally you were reinforcing before!' },
  { title: 'GO pour renforcer à nouveau', short: 'GO renforts', tag: 'RENFORCER', tone: 'go',
    titleEn: "GO REINFORCE",
    fr: '🟢 GO RENFORTS ! Dès que vos troupes sont rentrées, renvoyez-les chez le même allié qu’avant. Faites vite pour être en place avant la prochaine attaque ! 🛡️',
    en: '🟢 GO REINFORCE! As soon as your troops return, send them back to the same ally as before. Move quickly to be in position before the next attack! 🛡️' }
];
const groups = {
  explanations: { messages: explanationMessages, label: 'COMPRENDRE ET SE PRÉPARER',
    hint: 'Choisis un sujet pour comprendre la stratégie, puis copie le message en français ou en anglais.' },
  coordination: { messages: coordinationMessages, label: 'EN DIRECT / VAGUES 10 & 20',
    hint: 'Les dix messages des vagues 10 et 20, dans l’ordre : consignes, organisation, attentes et GO. Copie chacun au bon moment.' }
};
let messageGroup = 'explanations';
let messages = explanationMessages;
let language = 'fr';
let toastTimer;
const copyIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></svg>';
function messageCard(item, i) {
  const title = language === 'en' ? item.titleEn : item.title;
  return `<article class="message-card">
    <div class="message-row">
      <h3 lang="${language}">${title}</h3>
      <div class="copy-actions" role="group" aria-label="Copier : ${title}">
        <button type="button" class="copy-small" data-copy="${i}" data-copy-lang="fr" aria-label="Copier en français : ${title}">${copyIcon} FR</button>
        <button type="button" class="copy-small" data-copy="${i}" data-copy-lang="en" aria-label="Copier en anglais : ${title}">${copyIcon} EN</button>
      </div>
    </div>
    <p class="message-text" lang="${language}">${item[language]}</p>
  </article>`;
}
function render() {
  document.querySelector('#message-count').textContent = String(messages.length).padStart(2, '0');
  document.querySelectorAll('[data-group]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.group === messageGroup)));
  document.querySelector('#message-hint').textContent = groups[messageGroup].hint;
  document.querySelector('#all-messages').innerHTML = messages.map((item, i) => messageCard(item, i)).join('');
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
  const message = messages[index];
  const title = lang === 'en' ? message.titleEn : message.title;
  const text = `${title}\n\n${message[lang]}`;
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
    messages = groups[messageGroup].messages;
    render();
  }
  if (button.dataset.lang) { language = button.dataset.lang; render(); }
  if (button.dataset.copy !== undefined) copy(Number(button.dataset.copy), button.dataset.copyLang || language);
});
render();
