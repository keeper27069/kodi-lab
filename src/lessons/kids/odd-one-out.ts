import { kit } from '@engine/kit';
import { HOME, KCSS, ROUTE, kick, tri } from './_kids';

const ITEMS = ['🍌', '🍋', '🥒', '🟡'];
const set = (mark: number, label: [string, string, string] | null) =>
  tri((l) => {
    const k = l === 'ru' ? 0 : l === 'uz' ? 1 : 2;
    return `<div class="wrap"><div><div class="row">${ITEMS.map((it, i) => `<div class="card ${i === mark ? 'on' : ''}"><div class="big">${it === '🟡' ? '🟡' : it}</div>${i + 1}</div>`).join('')}</div>${label ? `<div class="cap">${label[k]}</div>` : ''}</div></div>`;
  });

export default kit({
  id: 'kids-g14',
  title: "Лишний предмет: найди два разных ответа ¦ Ortiqcha narsa: ikki xil javobni top ¦ Odd one out: find two different answers",
  question: "Может ли у задачи быть два верных ответа? ¦ Masalaning ikkita to'g'ri javobi bo'lishi mumkinmi? ¦ Can a puzzle have two right answers?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🤔',
      kicker: kick('logic', 'g', 6),
      title: "Что здесь лишнее? ¦ Bu yerda nima ortiqcha? ¦ What's the odd one out?",
      chat: "напиши любимый жёлтый предмет одним словом ¦ sevimli sariq narsangni bitta so'z bilan yoz ¦ name your favourite yellow thing in one word",
      lead: "На слайде банан, лимон, огурец и жёлтый мяч. Какой предмет лишний? Внимание: у этой загадки есть сюрприз! ¦ Slaydda banan, limon, bodring va sariq to'p. Qaysi narsa ortiqcha? Diqqat: bu topishmoqning siri bor! ¦ On the slide: a banana, a lemon, a cucumber and a yellow ball. Which is the odd one out? Careful — this riddle has a surprise!",
      notes: { min: 3 },
    },
    {
      type: 'poll',
      stage: 1,
      title: "Какой предмет лишний? ¦ Qaysi narsa ortiqcha? ¦ Which one is the odd one out?",
      chat: "пиши номер и признак: «3 — цвет» ¦ raqam va belgini yoz: «3 — rang» ¦ write a number and a reason: “3 — colour”",
      options: [
        { label: "1 · 🍌 Банан ¦ 1 · 🍌 Banan ¦ 1 · 🍌 Banana" },
        { label: "2 · 🍋 Лимон ¦ 2 · 🍋 Limon ¦ 2 · 🍋 Lemon" },
        { label: "3 · 🥒 Огурец ¦ 3 · 🥒 Bodring ¦ 3 · 🥒 Cucumber" },
        { label: "4 · 🟡 Жёлтый мяч ¦ 4 · 🟡 Sariq to'p ¦ 4 · 🟡 Yellow ball" },
      ],
      result: "Чат разделился? Отлично — правы обе половины! Смотрим почему. ¦ Chat ikkiga bo'lindimi? Ajoyib — ikkala yarim ham haq! Nega ekanini ko'ramiz. ¦ Is the chat split? Great — both halves are right! Let's see why.",
      notes: { say: ['Не говорим «неправильно». Просим назвать признак.'], min: 5 },
    },
    {
      type: 'show',
      stage: 2,
      title: "Два признака — два ответа ¦ Ikki belgi — ikki javob ¦ Two features, two answers",
      chat: "какой признак ты выбрал? ¦ qaysi belgini tanlading? ¦ which feature did you pick?",
      lang: 'text',
      css: KCSS,
      steps: [
        { code: 'feature: ?', html: set(-1, null), say: "Чтобы найти лишнее, сначала выбираем признак. ¦ Ortiqchasini topish uchun avval belgini tanlaymiz. ¦ To find the odd one out, first pick a feature." },
        { code: 'feature: colour', html: set(2, ['По цвету: все жёлтые, огурец — зелёный', "Rang bo'yicha: hammasi sariq, bodring — yashil", 'By colour: all yellow, the cucumber is green']), say: "По цвету лишний огурец — он зелёный. ¦ Rang bo'yicha bodring ortiqcha — u yashil. ¦ By colour, the cucumber is odd — it's green." },
        { code: 'feature: food', html: set(3, ['По назначению: всё едят, а мяч — нет', "Vazifasi bo'yicha: hammasi yeyiladi, to'p esa — yo'q", 'By use: you eat the rest, not the ball']), say: "По назначению лишний мяч — его не едят! ¦ Vazifasi bo'yicha to'p ortiqcha — uni yemaydilar! ¦ By use, the ball is odd — you don't eat it!" },
      ],
      takeaway: "Ответ зависит от признака. Поэтому важно его назвать. ¦ Javob belgiga bog'liq. Shuning uchun uni aytish muhim. ¦ The answer depends on the feature — so always name it.",
      notes: { min: 7 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: найди признак ¦ O'zing bajar: belgini top ¦ Your turn: find the feature",
      chat: "номер и признак в чат ¦ raqam va belgi chatga ¦ number and feature in the chat",
      goal: "Ты видишь несколько ответов сразу! ¦ Sen bir vaqtda bir nechta javobni ko'rasan! ¦ You can see more than one answer!",
      items: [
        { title: "🐶 🐱 🐟 🐦 — кто лишний, если признак «живёт в воде»? ¦ 🐶 🐱 🐟 🐦 — «suvda yashaydi» belgisi bo'yicha kim ortiqcha? ¦ 🐶 🐱 🐟 🐦 — who's odd by “lives in water”?", choices: ['🐟', '🐶'], correct: 0, explain: "Только рыбка живёт в воде. ¦ Faqat baliq suvda yashaydi. ¦ Only the fish lives in water." },
        { title: "А если признак «умеет летать»? ¦ «Ucha oladi» belgisi bo'yicha-chi? ¦ And by “can fly”?", choices: ['🐦', '🐱'], correct: 0, explain: "Только птица летает. Другой признак — другой ответ! ¦ Faqat qush uchadi. Boshqa belgi — boshqa javob! ¦ Only the bird flies. A different feature, a different answer!" },
      ],
      notes: { say: ['Дальше дети рисуют свой набор из 4 картинок с двумя верными ответами и загадывают его чату.'], min: 9 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: сначала признак ¦ Xulosa: avval belgi ¦ Wrap-up: feature first",
      chat: "сколько ответов может быть у загадки? число ¦ topishmoqning nechta javobi bo'lishi mumkin? son ¦ how many answers can a riddle have? a number",
      answer: "Лишний предмет зависит от признака. По цвету лишний огурец, потому что он зелёный, а по назначению — мяч, потому что его не едят. Поэтому в ответе называем и номер, и признак: «3 — цвет». У одной задачи может быть несколько верных ответов. ¦ Ortiqcha narsa belgiga bog'liq. Rang bo'yicha bodring ortiqcha, chunki u yashil, vazifasi bo'yicha esa — to'p, chunki uni yemaydilar. Shuning uchun javobda raqam ham, belgi ham aytiladi: «3 — rang». Bitta masalaning bir nechta to'g'ri javobi bo'lishi mumkin. ¦ The odd one out depends on the feature. By colour it's the cucumber, which is green; by use it's the ball, which you don't eat. So answer with a number and a feature: “3 — colour”. One puzzle can have several right answers.",
      icon: '🟡',
      badge: "Мастер признаков ¦ Belgilar ustasi ¦ Feature finder",
      badgeSub: kick('logic', 'g', 6),
      homeworkTitle: HOME,
      homework: [
        "Нарисуй 4 предмета, у которых два верных лишних, и загадай родным. ¦ Ikkita to'g'ri ortiqchasi bor 4 ta narsa chiz va yaqinlaringga top deb ber. ¦ Draw 4 items with two correct odd ones out and test your family.",
        "Нужны: бумага и 4 рисунка. ¦ Kerak: qog'oz va 4 ta rasm. ¦ You need: paper and 4 drawings.",
      ],
      notes: { min: 6 },
    },
  ],
});
