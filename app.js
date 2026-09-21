const messages = [
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
let selected = 0;
let language = 'fr';
let toastTimer;
const panel = document.querySelector('#message-panel');
const steps = document.querySelector('#steps');
const copyIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></svg>';
function render() {
  steps.innerHTML = messages.map((m, i) => `<button type="button" data-step="${i}" ${i === selected ? 'aria-current="step"' : ''}><span class="step-number">${String(i + 1).padStart(2, '0')}</span><span>${m.short}</span><span class="step-arrow" aria-hidden="true">↗</span></button>`).join('');
  const m = messages[selected];
  panel.innerHTML = `<div class="panel-top"><span class="badge ${m.tone}">${m.tag}</span><span class="panel-count">${String(selected + 1).padStart(2, '0')} / 08</span></div><h3>${m.title}</h3><div class="message-label">${language === 'fr' ? 'FRANÇAIS' : 'ENGLISH'} <span>VAGUES 10 & 20</span></div><p class="message-text" lang="${language}">${m[language]}</p><div class="panel-actions"><button type="button" class="copy-primary" data-copy="${selected}">${copyIcon} Copier le message <span>${language.toUpperCase()}</span></button><button type="button" class="copy-secondary" data-copy="${selected}" data-copy-lang="${language === 'fr' ? 'en' : 'fr'}">Copier en ${language === 'fr' ? 'anglais' : 'français'}</button></div><div class="panel-bottom"><span>À envoyer sur ton signal.</span><button type="button" id="next" ${selected === 7 ? 'disabled' : ''}>Étape suivante <span aria-hidden="true">→</span></button></div>`;
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
