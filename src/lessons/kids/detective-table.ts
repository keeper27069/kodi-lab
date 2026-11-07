import { kit } from '@engine/kit';
import { HOME, ROUTE, kick, tri } from './_kids';

const NAMES: Record<string, string[]> = { ru: ['Али', 'Мадина', 'Тимур'], uz: ['Ali', 'Madina', 'Temur'], en: ['Ali', 'Madina', 'Timur'] };
const PETS = ['🐱', '🐶', '🦜'];
// marks[row][col]: '' | 'x' | 'v'
type M = string[][];
const CSS = `.wrap{display:grid;place-items:center;height:100%;font-family:Inter,system-ui,sans-serif}
table{border-collapse:separate;border-spacing:6px}
th{font-size:46px;padding:4px 10px}
td.n{font:800 26px Inter;padding-right:14px;text-align:right}
td.c{width:92px;height:80px;border-radius:14px;background:#fff;border:3px solid #e1e4ea;text-align:center;font:800 40px Inter}
td.x{color:#d80000}td.v{color:#fff;background:#0cd678;border-color:#0cd678}`;
const table = (m: M) =>
  tri((l) => `<div class="wrap"><table><tr><th></th>${PETS.map((p) => `<th>${p}</th>`).join('')}</tr>${NAMES[l]
    .map((n, r) => `<tr><td class="n">${n}</td>${m[r].map((c) => `<td class="c ${c}">${c === 'x' ? '✗' : c === 'v' ? '✓' : ''}</td>`).join('')}</tr>`)
    .join('')}</table></div>`);
const E = [['', '', ''], ['', '', ''], ['', '', '']];
const S1 = [['', '', ''], ['', '', 'x'], ['', '', '']];
const S2 = [['', '', ''], ['', 'x', 'x'], ['', '', '']];
const S3 = [['', '', ''], ['', 'x', 'x'], ['', 'x', '']];
const S4 = [['x', 'v', 'x'], ['v', 'x', 'x'], ['x', 'x', 'v']];

export default kit({
  id: 'kids-t09',
  title: "Таблица-сыщик: кто где живёт и что любит ¦ Izquvar jadval: kim qayerda yashaydi va nimani yaxshi ko'radi ¦ The detective table: who lives where and likes what",
  question: "Кому из трёх друзей достался кот? ¦ Uch do'stdan qaysi biriga mushuk tegdi? ¦ Which of the three friends got the cat?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🗒️',
      kicker: kick('logic', 't', 1),
      title: "Три друга и три питомца ¦ Uch do'st va uchta uy hayvoni ¦ Three friends and three pets",
      chat: "какой питомец тебе нравится: 🐱 🐶 или 🦜? ¦ qaysi uy hayvoni senga yoqadi: 🐱 🐶 yoki 🦜? ¦ which pet do you like: 🐱 🐶 or 🦜?",
      lead: "У Али, Мадины и Тимура по одному питомцу: кот, собака и попугай. Кто кого завёл? У нас есть три подсказки и таблица-сыщик, в которую ставим крестики. ¦ Ali, Madina va Temurning har birida bittadan uy hayvoni bor: mushuk, it va to'tiqush. Kim kimni boqadi? Bizda uchta ishora va xochchalar qo'yiladigan izquvar jadval bor. ¦ Ali, Madina and Timur each have one pet: a cat, a dog and a parrot. Who has which? We have three clues and a detective table to fill with crosses.",
      facts: [
        "Повторяем урок 4 «Кто есть кто» ¦ 4-dars «Kim kim»ni takrorlaymiz ¦ We revise lesson 4 “Who's who”",
        "Нужен лист в клетку ¦ Katakli varaq kerak ¦ You need squared paper",
      ],
      notes: { min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Ставим крестики после каждой подсказки ¦ Har bir ishoradan keyin xochcha qo'yamiz ¦ A cross after every clue",
      chat: "куда ставим крестик? пиши «Мадина — 🦜» ¦ xochchani qayerga qo'yamiz? yoz «Madina — 🦜» ¦ where does the cross go? write “Madina — 🦜”",
      lang: 'text',
      css: CSS,
      steps: [
        { code: 'table 3×3', html: table(E), say: "Строки — друзья, столбцы — питомцы. ✓ — точно, ✗ — точно нет. ¦ Qatorlar — do'stlar, ustunlar — uy hayvonlari. ✓ — aniq, ✗ — aniq yo'q. ¦ Rows are friends, columns are pets. ✓ means yes, ✗ means no." },
        { code: 'clue 1', html: table(S1), say: "Подсказка 1: «Мадина не любит птиц». Крестик: Мадина — попугай. ¦ 1-ishora: «Madina qushlarni yoqtirmaydi». Xochcha: Madina — to'tiqush. ¦ Clue 1: “Madina doesn't like birds.” Cross: Madina — parrot." },
        { code: 'clue 2', html: table(S2), say: "Подсказка 2: «Собака живёт у мальчика». Мадина — девочка: крестик Мадина — собака. ¦ 2-ishora: «It o'g'il bolada yashaydi». Madina — qiz: xochcha Madina — it. ¦ Clue 2: “The dog lives with a boy.” Madina's a girl: cross Madina — dog." },
        { code: 'clue 3', html: table(S3), say: "Подсказка 3: «Тимур боится собак». Крестик: Тимур — собака. ¦ 3-ishora: «Temur itlardan qo'rqadi». Xochcha: Temur — it. ¦ Clue 3: “Timur is scared of dogs.” Cross: Timur — dog." },
        { code: 'solved ✓', html: table(S4), say: "У Мадины остался только кот ✓, собака — у Али ✓, попугай — у Тимура ✓. ¦ Madinada faqat mushuk qoldi ✓, it — Alida ✓, to'tiqush — Temurda ✓. ¦ Madina has only the cat left ✓, the dog is Ali's ✓, the parrot is Timur's ✓." },
      ],
      notes: { min: 10 },
    },
    {
      type: 'truefalse',
      stage: 2,
      title: "Правила таблицы-сыщика ¦ Izquvar jadval qoidalari ¦ Detective-table rules",
      chat: "пиши «правда» или «нет» ¦ «rost» yoki «yo'q» deb yoz ¦ write “true” or “no”",
      statements: [
        { text: "В каждой строке может быть только одна ✓ ¦ Har bir qatorda faqat bitta ✓ bo'lishi mumkin ¦ Each row can have only one ✓", truth: true, explain: "У каждого друга один питомец. ¦ Har bir do'stda bitta uy hayvoni. ¦ Each friend has one pet." },
        { text: "Если в строке два ✗, в третьей клетке — ✓ ¦ Qatorda ikkita ✗ bo'lsa, uchinchi katakda ✓ ¦ If a row has two ✗, the third cell is ✓", truth: true, explain: "Других вариантов не осталось. ¦ Boshqa variant qolmadi. ¦ There's no other option left." },
      ],
      notes: { min: 4 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: подтверждённые пары ¦ O'zing bajar: tasdiqlangan juftliklar ¦ Your turn: confirmed pairs",
      chat: "пиши пару: «Али — 🐶» ¦ juftlikni yoz: «Ali — 🐶» ¦ write a pair: “Ali — 🐶”",
      goal: "Дело о питомцах раскрыто! ¦ Uy hayvonlari ishi ochildi! ¦ The pet case is solved!",
      items: [
        { title: "Кому достался кот? ¦ Mushuk kimga tegdi? ¦ Who got the cat?", choices: ["Мадине ¦ Madinaga ¦ Madina", "Тимуру ¦ Temurga ¦ Timur"], correct: 0, explain: "У Мадины ✗ на 🦜 и 🐶. ¦ Madinada 🦜 va 🐶 ga ✗. ¦ Madina has ✗ on 🦜 and 🐶." },
        { title: "Почему собака у Али? ¦ Nega it Alida? ¦ Why is the dog Ali's?", choices: ["Мальчик, и не Тимур ¦ O'g'il bola va Temur emas ¦ He's a boy, and not Timur", "Он самый высокий ¦ U eng baland ¦ He's the tallest"], correct: 0, explain: "Подсказки 2 и 3 вместе. ¦ 2 va 3-ishoralar birga. ¦ Clues 2 and 3 together." },
      ],
      notes: { say: ['Усложнение для быстрых: добавить цвет дома (красный, синий, зелёный) в отдельной таблице.'], min: 9 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: крестик за крестиком ¦ Xulosa: xochcha ketidan xochcha ¦ Wrap-up: cross by cross",
      chat: "сколько крестиков в решённой таблице? число ¦ yechilgan jadvalda nechta xochcha bor? son ¦ how many crosses in the solved table? a number",
      answer: "Таблица-сыщик помогает не держать всё в голове. После каждой подсказки ставим ✗ там, где точно нет. Когда в строке остаётся одна пустая клетка — это ✓. Так мы узнали: у Мадины кот, у Али собака, у Тимура попугай. ¦ Izquvar jadval hammasini xotirada saqlamaslikka yordam beradi. Har bir ishoradan keyin aniq yo'q joyga ✗ qo'yamiz. Qatorda bitta bo'sh katak qolsa — bu ✓. Shunday qilib bildik: Madinada mushuk, Alida it, Temurda to'tiqush. ¦ A detective table means you don't hold it all in your head. After each clue, put ✗ where it's definitely no. When one empty cell is left in a row, it's ✓. That's how we learned: Madina has the cat, Ali the dog, Timur the parrot.",
      icon: '🗒️',
      badge: "Табличный сыщик ¦ Jadval izquvari ¦ Table detective",
      badgeSub: kick('logic', 't', 1),
      homeworkTitle: HOME,
      homework: [
        "Придумай задачу про трёх друзей и их любимые фрукты с тремя подсказками. ¦ Uch do'st va ularning sevimli mevalari haqida uchta ishorali masala o'ylab top. ¦ Make up a puzzle about three friends and their favourite fruits with three clues.",
        "Нужен: лист в клетку. ¦ Kerak: katakli varaq. ¦ You need: squared paper.",
      ],
      notes: { min: 4 },
    },
  ],
});
