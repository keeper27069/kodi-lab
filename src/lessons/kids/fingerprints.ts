import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

// Simple drawings of the three patterns (lines only)
const ARCH = `<svg viewBox="0 0 120 140" width="150"><g fill="none" stroke="#16181f" stroke-width="4" stroke-linecap="round">${[0, 1, 2, 3, 4, 5]
  .map((i) => `<path d="M10 ${110 - i * 14} Q60 ${70 - i * 16} 110 ${110 - i * 14}"/>`)
  .join('')}</g></svg>`;
const LOOP = `<svg viewBox="0 0 120 140" width="150"><g fill="none" stroke="#16181f" stroke-width="4" stroke-linecap="round">${[0, 1, 2, 3, 4]
  .map((i) => `<path d="M${20 + i * 6} 130 C${20 + i * 6} ${50 + i * 8} ${95 - i * 6} ${40 + i * 8} ${95 - i * 6} ${80 + i * 4} C${95 - i * 6} ${100} ${70} ${110} ${60 + i * 2} 130"/>`)
  .join('')}</g></svg>`;
const WHORL = `<svg viewBox="0 0 120 140" width="150"><g fill="none" stroke="#16181f" stroke-width="4">${[10, 22, 34, 46, 56]
  .map((r) => `<ellipse cx="60" cy="72" rx="${r}" ry="${r * 1.15}"/>`)
  .join('')}</g></svg>`;
const CSS = `.wrap{display:flex;gap:30px;align-items:flex-end;justify-content:center;height:100%;font-family:Inter,system-ui,sans-serif}
.p{display:flex;flex-direction:column;align-items:center;gap:10px;padding:18px;border-radius:18px;background:#fff;border:3px solid #e1e4ea}
.p.on{border-color:#fa4f28;background:#fff1ec}
.p b{font-size:24px}`;
const pats = (on: number, names: [string, string, string]) =>
  `<div class="wrap">${[ARCH, LOOP, WHORL].map((s, i) => `<div class="p ${i === on ? 'on' : ''}">${s}<b>${names[i]}</b></div>`).join('')}</div>`;
const html = (on: number) => `${pats(on, ['Дуга', 'Петля', 'Завиток'])} ¦ ${pats(on, ['Yoy', 'Sirtmoq', 'Jingalak'])} ¦ ${pats(on, ['Arch', 'Loop', 'Whorl'])}`;

export default kit({
  id: 'kids-g06',
  title: "Отпечатки пальцев: почему у всех разные ¦ Barmoq izlari: nega hammada har xil ¦ Fingerprints: why everyone's are different",
  question: "Как телефон узнаёт своего хозяина по пальцу? ¦ Telefon egasini barmog'idan qanday taniydi? ¦ How does a phone recognise its owner by a finger?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '👆',
      kicker: kick('cyber', 'g', 2),
      title: "Узор на кончике пальца ¦ Barmoq uchidagi naqsh ¦ The pattern on your fingertip",
      chat: "посмотри на свой палец: видишь линии? «да» или «нет» ¦ barmog'ingga qara: chiziqlarni ko'ryapsanmi? «ha» yoki «yo'q» ¦ look at your fingertip: can you see lines? “yes” or “no”",
      lead: "На кончиках пальцев есть тонкие линии. Их узор у каждого человека свой — даже у близнецов он разный. Поэтому палец работает как ключ. ¦ Barmoq uchlarida ingichka chiziqlar bor. Ularning naqshi har bir odamda o'ziga xos — hatto egizaklarda ham har xil. Shuning uchun barmoq kalit vazifasini bajaradi. ¦ Your fingertips have thin lines. Everyone's pattern is unique — even twins' are different. That's why a finger works like a key.",
      facts: [
        "Узор не меняется всю жизнь ¦ Naqsh butun umr o'zgarmaydi ¦ The pattern stays the same all your life",
        "Сегодня только смотрим — ничего не фотографируем ¦ Bugun faqat qaraymiz — hech narsani suratga olmaymiz ¦ Today we only look — no photos",
      ],
      notes: { say: ['Не просим детей фотографировать или отправлять отпечатки. Только наблюдение.'], min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Три главных узора ¦ Uchta asosiy naqsh ¦ The three main patterns",
      chat: "какой узор у тебя? «дуга», «петля» или «завиток» ¦ seniki qaysi naqsh? «yoy», «sirtmoq» yoki «jingalak» ¦ which pattern is yours? “arch”, “loop” or “whorl”",
      lang: 'text',
      css: CSS,
      steps: [
        { code: '1 · arch', html: html(0), say: "Дуга — линии идут с одного края на другой, как мостик. ¦ Yoy — chiziqlar bir chetdan ikkinchisiga ko'prikdek o'tadi. ¦ Arch: lines run from one side to the other, like a bridge." },
        { code: '2 · loop', html: html(1), say: "Петля — линии заходят и поворачивают обратно. ¦ Sirtmoq — chiziqlar kirib, orqaga buriladi. ¦ Loop: lines come in and turn back." },
        { code: '3 · whorl', html: html(2), say: "Завиток — круги вокруг центра, как улитка. ¦ Jingalak — markaz atrofida aylanalar, shilliqqurtdek. ¦ Whorl: circles around a centre, like a snail." },
      ],
      notes: { min: 7 },
    },
    {
      type: 'poll',
      stage: 2,
      title: "Какой узор встречается чаще всего? ¦ Qaysi naqsh eng ko'p uchraydi? ¦ Which pattern is most common?",
      chat: "голосуй цифрой ¦ raqam bilan ovoz ber ¦ vote with a number",
      options: [
        { label: "1 · Дуга ¦ 1 · Yoy ¦ 1 · Arch" },
        { label: "2 · Петля ¦ 2 · Sirtmoq ¦ 2 · Loop" },
        { label: "3 · Завиток ¦ 3 · Jingalak ¦ 3 · Whorl" },
      ],
      correct: 1,
      result: "Петля! Она примерно у шести человек из десяти. Дуга — самая редкая. ¦ Sirtmoq! U taxminan o'n kishidan oltitasida bor. Yoy — eng kam uchraydi. ¦ The loop! About six people in ten have it. The arch is the rarest.",
      notes: { say: ['Сравниваем с результатами чата: совпало ли с общей статистикой?'], min: 5 },
    },
    {
      type: 'animate',
      stage: 2,
      title: "Как телефон узнаёт хозяина ¦ Telefon egasini qanday taniydi ¦ How a phone knows its owner",
      chat: "откроет ли телефон чужой палец? ¦ telefon begona barmoqqa ochiladimi? ¦ will the phone open for someone else's finger?",
      actors: [
        { id: 'ph', icon: '📱', label: "Телефон ¦ Telefon ¦ Phone" },
        { id: 'me', icon: '☝️', label: "Хозяин ¦ Egasi ¦ Owner" },
        { id: 'k', icon: '🔒' },
        { id: 'x', icon: '👆', label: "Чужой палец ¦ Begona barmoq ¦ Someone else" },
      ],
      steps: [
        { say: "Хозяин один раз показал телефону свой узор. Телефон запомнил его. ¦ Egasi telefonga naqshini bir marta ko'rsatdi. Telefon uni eslab qoldi. ¦ The owner showed the phone their pattern once. The phone remembered it.", at: { ph: [50, 60, 1.5], me: [20, 60], k: [50, 25], x: [85, 85, 0.8] } },
        { say: "Чужой палец: узор другой — замок закрыт. ¦ Begona barmoq: naqsh boshqa — qulf yopiq. ¦ Someone else's finger: a different pattern — still locked.", at: { x: [64, 60, 1] }, pulse: ['k'] },
        { say: "Палец хозяина: узор совпал — телефон открылся! ¦ Egasining barmog'i: naqsh mos keldi — telefon ochildi! ¦ The owner's finger: the pattern matches — unlocked!", at: { x: [85, 85, 0.8], me: [36, 60] }, set: { k: { icon: '🔓' } }, pulse: ['ph', 'k'] },
      ],
      takeaway: "Палец — ключ, который нельзя забыть дома. ¦ Barmoq — uyda unutib bo'lmaydigan kalit. ¦ A finger is a key you can't leave at home.",
      notes: { min: 6 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: наблюдай и сравнивай ¦ O'zing bajar: kuzat va solishtir ¦ Your turn: observe and compare",
      chat: "номер ответа в чат ¦ javob raqamini chatga ¦ answer number in the chat",
      goal: "Ты умеешь различать узоры! ¦ Sen naqshlarni farqlay olasan! ¦ You can tell patterns apart!",
      items: [
        { title: "Линии кружатся вокруг центра — это… ¦ Chiziqlar markaz atrofida aylanadi — bu… ¦ Lines circle a centre — that's a…", choices: ["Завиток ¦ Jingalak ¦ Whorl", "Дуга ¦ Yoy ¦ Arch"], correct: 0, explain: "Как раковина улитки. ¦ Shilliqqurt chig'anog'iga o'xshaydi. ¦ Like a snail shell." },
        { title: "У близнецов отпечатки… ¦ Egizaklarda barmoq izlari… ¦ Twins' fingerprints are…", choices: ["Одинаковые ¦ Bir xil ¦ The same", "Разные ¦ Har xil ¦ Different"], correct: 1, explain: "Узор свой у каждого. ¦ Naqsh har kimniki o'ziga xos. ¦ Everyone's pattern is unique." },
        { title: "Можно ли отправлять фото своего пальца незнакомцам? ¦ Barmog'ing suratini notanishlarga yuborsa bo'ladimi? ¦ Should you send a photo of your finger to strangers?", choices: ["Нет ¦ Yo'q ¦ No", "Да ¦ Ha ¦ Yes"], correct: 0, explain: "Это твой личный ключ. ¦ Bu sening shaxsiy kaliting. ¦ It's your personal key." },
      ],
      notes: { min: 6 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: твой палец — уникальный ключ ¦ Xulosa: barmog'ing — noyob kalit ¦ Wrap-up: your finger is a unique key",
      chat: "какой узор у тебя на большом пальце? ¦ bosh barmog'ingda qaysi naqsh? ¦ what pattern is on your thumb?",
      answer: "На пальцах есть узор из линий: дуга, петля или завиток. Чаще всего встречается петля, реже всего — дуга. Узор у каждого свой и не меняется, поэтому телефон узнаёт хозяина по пальцу. Это личный ключ: его фото никому не отправляем. ¦ Barmoqlarda chiziqlardan naqsh bor: yoy, sirtmoq yoki jingalak. Eng ko'p sirtmoq, eng kam yoy uchraydi. Naqsh har kimniki o'ziga xos va o'zgarmaydi, shuning uchun telefon egasini barmog'idan taniydi. Bu shaxsiy kalit: uning suratini hech kimga yubormaymiz. ¦ Fingers carry a pattern of lines: an arch, a loop or a whorl. Loops are the most common, arches the rarest. Everyone's pattern is unique and never changes, so a phone can recognise its owner. It's a personal key: never send photos of it to anyone.",
      icon: '👆',
      badge: "Наблюдатель ¦ Kuzatuvchi ¦ Sharp observer",
      badgeSub: kick('cyber', 'g', 2),
      homeworkTitle: HOME,
      homework: [
        "Посмотри на узоры всех десяти пальцев и посчитай, сколько петель. ¦ O'nta barmog'ingning naqshlariga qara va nechta sirtmoq borligini sana. ¦ Look at all ten fingers and count your loops.",
        "Ничего не нужно — только наблюдение. ¦ Hech narsa kerak emas — faqat kuzatish. ¦ Nothing needed — just look.",
      ],
      notes: { min: 3 },
    },
  ],
});
