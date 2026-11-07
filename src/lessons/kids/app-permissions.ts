import { kit } from '@engine/kit';
import { HOME, KCSS, ROUTE, rkick } from './_kids';

/* A pretend phone screen: the made-up torch app asks for four permissions */
const CSS = `${KCSS}
.ph{width:330px;padding:22px;border-radius:38px;background:#16181f;box-shadow:0 20px 50px rgba(0,0,0,.25)}
.ph .scr{border-radius:24px;background:#fff;padding:20px;display:flex;flex-direction:column;gap:12px}
.ph h4{margin:0 0 6px;font:800 24px Inter;text-align:center}
.ph p{margin:0;display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:14px;border:3px solid #e1e4ea;font:700 20px Inter}
.ph p.ok{border-color:#0cd678;background:#e9fbf2}
.ph p.bad{border-color:#d80000;background:#ffecec}
.ph p em{margin-left:auto;font-style:normal}`;
type P = { icon: string; name: string };
const PERMS: P[] = [
  { icon: '📸', name: 'Camera flash' },
  { icon: '👥', name: 'Contacts' },
  { icon: '🎤', name: 'Microphone' },
  { icon: '📍', name: 'Location' },
];
const phone = (marks: ('' | 'ok' | 'bad')[]) =>
  `<div class="wrap"><div class="ph"><div class="scr"><h4>🔦 SuperTorch</h4>${PERMS.map(
    (p, i) => `<p class="${marks[i] ?? ''}"><span>${i + 1}</span>${p.icon} ${p.name}<em>${marks[i] === 'ok' ? '✅' : marks[i] === 'bad' ? '❌' : '❔'}</em></p>`,
  ).join('')}</div></div></div>`;

export default kit({
  id: 'kids-t28',
  title: "Что просит приложение? ¦ Ilova nimani so'rayapti? ¦ What is the app asking for?",
  question: "Зачем фонарику твои контакты? ¦ Fonarga kontaktlaring nima uchun kerak? ¦ Why would a torch app need your contacts?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🔦',
      kicker: rkick('cyber'),
      title: "Разрешения — это ключи ¦ Ruxsatlar — bu kalitlar ¦ Permissions are keys",
      chat: "какое приложение ты открываешь чаще всего? ¦ qaysi ilovani eng ko'p ochasan? ¦ which app do you open most?",
      lead: "Когда ставишь приложение, оно просит доступ: к камере, микрофону, контактам. Это как ключи от комнат твоего телефона. Давать нужно только те ключи, которые нужны для работы. Сегодня разберём выдуманный фонарик «SuperTorch». Настройки телефона не меняем — только думаем! ¦ Ilova o'rnatganda u ruxsat so'raydi: kameraga, mikrofonga, kontaktlarga. Bu telefoning xonalari kalitlariga o'xshaydi. Faqat ishlash uchun kerak bo'lgan kalitlarni berish kerak. Bugun to'qima «SuperTorch» fonarini ko'rib chiqamiz. Telefon sozlamalarini o'zgartirmaymiz — faqat o'ylaymiz! ¦ When you install an app it asks for access: to the camera, microphone, contacts. These are like keys to the rooms of your phone. Only hand over the keys it needs to work. Today we'll look at a made-up torch app, “SuperTorch”. We won't change any settings — just think!",
      facts: [
        "Повторяем урок 18 ¦ 18-darsni takrorlaymiz ¦ We revise lesson 18",
        "Устанавливаем приложения только с родителями ¦ Ilovalarni faqat ota-ona bilan o'rnatamiz ¦ Install apps only with your parents",
      ],
      notes: { min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Фонарик просит четыре доступа ¦ Fonar to'rtta ruxsat so'rayapti ¦ The torch asks for four permissions",
      chat: "пиши номер лишнего доступа ¦ ortiqcha ruxsat raqamini yoz ¦ write the number of an unneeded permission",
      lang: 'text',
      css: CSS,
      steps: [
        { code: 'SuperTorch: 4 permissions', html: phone([]), say: "Фонарик просит: вспышку камеры, контакты, микрофон и место. Что из этого нужно, чтобы светить? ¦ Fonar so'rayapti: kamera chirog'i, kontaktlar, mikrofon va joylashuv. Yoritish uchun bulardan qaysi biri kerak? ¦ The torch wants the camera flash, contacts, microphone and location. Which does it need to shine?" },
        { code: '1 ✅', html: phone(['ok']), say: "Вспышка — да! Это и есть лампочка фонарика. ¦ Chiroq — ha! Bu fonarning lampochkasi. ¦ The flash — yes! That's the torch's light." },
        { code: '2 ❌  3 ❌  4 ❌', html: phone(['ok', 'bad', 'bad', 'bad']), say: "Контакты, микрофон и место фонарику не нужны. Если приложение просит лишнее — это повод насторожиться и спросить взрослого. ¦ Kontaktlar, mikrofon va joylashuv fonarga kerak emas. Ilova ortiqcha narsa so'rasa — bu ehtiyot bo'lish va kattalardan so'rash uchun sabab. ¦ A torch doesn't need contacts, the microphone or location. An app asking for extra is a reason to be careful and ask a grown-up." },
      ],
      notes: { min: 7 },
    },
    {
      type: 'sort',
      stage: 2,
      title: "Нужен доступ или лишний? ¦ Ruxsat kerakmi yoki ortiqchami? ¦ Needed or unneeded?",
      chat: "пиши: «3 — лишний» ¦ yoz: «3 — ortiqcha» ¦ write: “3 — unneeded”",
      zones: [
        { id: 'y', label: "Нужен для работы ¦ Ishlash uchun kerak ¦ Needed to work", icon: '✅' },
        { id: 'n', label: "Лишний ¦ Ortiqcha ¦ Unneeded", icon: '❌' },
      ],
      items: [
        { text: "1 · Камера для приложения «Фото» ¦ 1 · «Foto» ilovasi uchun kamera ¦ 1 · Camera for a Photo app", zone: 'y' },
        { text: "2 · Контакты для игры-раскраски ¦ 2 · Bo'yash o'yini uchun kontaktlar ¦ 2 · Contacts for a colouring game", zone: 'n' },
        { text: "3 · Микрофон для калькулятора ¦ 3 · Kalkulyator uchun mikrofon ¦ 3 · Microphone for a calculator", zone: 'n' },
        { text: "4 · Микрофон для диктофона ¦ 4 · Diktofon uchun mikrofon ¦ 4 · Microphone for a voice recorder", zone: 'y' },
        { text: "5 · Место для карты ¦ 5 · Xarita uchun joylashuv ¦ 5 · Location for a map", zone: 'y' },
        { text: "6 · Место для фонарика ¦ 6 · Fonar uchun joylashuv ¦ 6 · Location for a torch", zone: 'n' },
      ],
      notes: { min: 8 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: функция и доступ ¦ O'zing bajar: vazifa va ruxsat ¦ Your turn: job and permission",
      chat: "номер ответа в чат ¦ javob raqamini chatga ¦ answer number in the chat",
      goal: "Ты бережёшь свой телефон! ¦ Telefoningni asraysan! ¦ You look after your phone!",
      items: [
        { title: "Как понять, лишний ли доступ? ¦ Ruxsat ortiqcha ekanini qanday bilish mumkin? ¦ How do you tell a permission is unneeded?", choices: ["Спросить: нужен ли он для того, что делает приложение? ¦ So'rash: ilova qiladigan ish uchun u kerakmi? ¦ Ask: does the app's job need it?", "Разрешать всё, чтобы быстрее ¦ Tezroq bo'lishi uchun hammasiga ruxsat berish ¦ Allow everything to save time"], correct: 0, explain: "Сравниваем функцию и разрешение. ¦ Vazifa va ruxsatni solishtiramiz. ¦ Compare the job with the permission." },
        { title: "Игра просит контакты. Что сделать? ¦ O'yin kontaktlarni so'rayapti. Nima qilish kerak? ¦ A game asks for your contacts. What do you do?", choices: ["Позвать взрослого и решить вместе ¦ Kattalarni chaqirib, birga hal qilish ¦ Call a grown-up and decide together", "Сразу нажать «Разрешить» ¦ Darhol «Ruxsat berish»ni bosish ¦ Tap “Allow” right away"], correct: 0, explain: "Взрослый поможет разобраться без риска. ¦ Kattalar xavfsiz tushunib olishga yordam beradi. ¦ A grown-up helps you sort it out safely." },
      ],
      notes: { min: 7 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: только нужные ключи ¦ Xulosa: faqat kerakli kalitlar ¦ Wrap-up: only the keys it needs",
      chat: "какой доступ был лишним у фонарика? номер ¦ fonarda qaysi ruxsat ortiqcha edi? raqam ¦ which permission was unneeded for the torch? a number",
      answer: "Разрешения — это ключи к частям телефона. Приложению даём только те, что нужны для его работы: фонарику — вспышку, а контакты, микрофон и место ему ни к чему. Если приложение просит лишнее, не спешим нажимать «Разрешить», а зовём взрослого. ¦ Ruxsatlar — telefon qismlarining kalitlari. Ilovaga faqat uning ishi uchun kerak bo'lganlarini beramiz: fonarga — chiroqni, kontaktlar, mikrofon va joylashuv esa unga kerak emas. Ilova ortiqcha narsa so'rasa, «Ruxsat berish»ni bosishga shoshilmaymiz, kattalarni chaqiramiz. ¦ Permissions are keys to parts of your phone. Give an app only what its job needs: a torch needs the flash, not contacts, the microphone or location. If an app asks for extra, don't rush to tap “Allow” — call a grown-up.",
      icon: '🔑',
      badge: "Хранитель ключей ¦ Kalitlar qo'riqchisi ¦ Key keeper",
      badgeSub: rkick('cyber'),
      homeworkTitle: HOME,
      homework: [
        "Нарисуй таблицу: 3 приложения, что они делают и какие доступы им нужны. Обсуди её с родными. ¦ Jadval chiz: 3 ta ilova, ular nima qiladi va ularga qanday ruxsatlar kerak. Uni yaqinlaring bilan muhokama qil. ¦ Draw a table: 3 apps, what they do and what permissions they need. Talk it over with your family.",
        "Нужна: бумага. ¦ Kerak: qog'oz. ¦ You need: paper.",
      ],
      notes: { min: 5 },
    },
  ],
});
