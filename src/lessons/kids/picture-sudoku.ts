import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

const S = ['🍎', '🍌', '🍇', '🍓'];
// solution (indexes into S)
const SOL = [
  [0, 1, 2, 3],
  [2, 3, 0, 1],
  [1, 0, 3, 2],
  [3, 2, 1, 0],
];
// which cells are given at the start
const GIVEN = [
  [1, 1, 0, 1],
  [0, 1, 1, 0],
  [1, 0, 0, 1],
  [0, 1, 1, 0],
];
const CSS = `.wrap{display:grid;place-items:center;height:100%;font-family:Inter,system-ui,sans-serif}
.sd{display:grid;grid-template-columns:repeat(4,86px);gap:0;border:6px solid #16181f;border-radius:14px;overflow:hidden;background:#16181f}
.sd i{display:grid;place-items:center;width:86px;height:86px;background:#fff;font-size:46px;font-style:normal;box-shadow:inset 0 0 0 1px #c9cdd3}
.sd i.r{box-shadow:inset -4px 0 0 #16181f,inset 0 0 0 1px #c9cdd3}.sd i.b{box-shadow:inset 0 -4px 0 #16181f,inset 0 0 0 1px #c9cdd3}
.sd i.rb{box-shadow:inset -4px -4px 0 #16181f,inset 0 0 0 1px #c9cdd3}
.sd i.new{background:#fff1ec}.sd i.hl{background:#e9fbf2}`;
const grid = (filled: [number, number][], hl: 'row0' | 'none' = 'none') =>
  `<div class="wrap"><div class="sd">${SOL.map((row, y) =>
    row
      .map((v, x) => {
        const isGiven = GIVEN[y][x] === 1;
        const isNew = filled.some(([fy, fx]) => fy === y && fx === x);
        const cls = [x === 1 && y === 1 ? 'rb' : x === 1 ? 'r' : y === 1 ? 'b' : '', isNew ? 'new' : '', hl === 'row0' && y === 0 ? 'hl' : ''].join(' ');
        return `<i class="${cls}">${isGiven || isNew ? S[v] : ''}</i>`;
      })
      .join(''),
  ).join('')}</div></div>`;
const ALL: [number, number][] = [];
GIVEN.forEach((r, y) => r.forEach((g, x) => !g && ALL.push([y, x])));

export default kit({
  id: 'kids-g09',
  title: "Судоку с картинками ¦ Rasmli sudoku ¦ Picture sudoku",
  question: "Как заполнить поле, если у каждого значка своё место? ¦ Har bir belgining o'z joyi bo'lsa, maydonni qanday to'ldirish mumkin? ¦ How do you fill the grid when every symbol has its place?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🧩',
      kicker: kick('logic', 'g', 1),
      title: "Головоломка из четырёх фруктов ¦ To'rt mevali boshqotirma ¦ A four-fruit puzzle",
      chat: "какой фрукт ты любишь: 🍎 🍌 🍇 или 🍓? ¦ qaysi mevani yaxshi ko'rasan: 🍎 🍌 🍇 yoki 🍓? ¦ which fruit do you like: 🍎 🍌 🍇 or 🍓?",
      lead: "Поле 4×4 и четыре фрукта. Правило одно: каждый фрукт встречается один раз в строке, один раз в столбце и один раз в каждом квадрате 2×2. ¦ 4×4 maydon va to'rtta meva. Qoida bitta: har bir meva qatorda bir marta, ustunda bir marta va har bir 2×2 kvadratda bir marta uchraydi. ¦ A 4×4 grid and four fruits. One rule: each fruit appears once in every row, once in every column and once in each 2×2 square.",
      facts: [
        "Строка → ¦ Qator → ¦ Row →",
        "Столбец ↓ ¦ Ustun ↓ ¦ Column ↓",
        "Квадрат 2×2 ⊞ ¦ 2×2 kvadrat ⊞ ¦ 2×2 square ⊞",
      ],
      notes: { min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Первый ход вместе ¦ Birinchi yurishni birga qilamiz ¦ The first move together",
      chat: "чего не хватает в первой строке? ¦ birinchi qatorda nima yetishmaydi? ¦ what's missing from row one?",
      lang: 'text',
      css: CSS,
      steps: [
        { code: 'start', html: grid([]), say: "Начинаем там, где пустая клетка всего одна. ¦ Faqat bitta bo'sh katak bor joydan boshlaymiz. ¦ Start where only one cell is empty." },
        { code: 'row 1', html: grid([], 'row0'), say: "В первой строке есть 🍎, 🍌 и 🍓. Не хватает… ¦ Birinchi qatorda 🍎, 🍌 va 🍓 bor. Yetishmayapti… ¦ Row one has 🍎, 🍌 and 🍓. Missing…" },
        { code: 'row 1 ✓', html: grid([[0, 2]], 'row0'), say: "…винограда 🍇! Первый ход сделан. ¦ …uzum 🍇! Birinchi yurish qilindi. ¦ …the grapes 🍇! First move done." },
      ],
      notes: { min: 6 },
    },
    {
      type: 'show',
      stage: 2,
      title: "Заполни остальные клетки ¦ Qolgan kataklarni to'ldir ¦ Fill in the rest",
      chat: "пиши: «строка 2, клетка 1 — 🍇» ¦ yoz: «2-qator, 1-katak — 🍇» ¦ write: “row 2, cell 1 — 🍇”",
      lang: 'text',
      css: CSS,
      steps: [
        { code: '7 empty', html: grid([[0, 2]]), say: "Осталось 7 пустых клеток. Для каждой проверь строку, столбец и квадрат. ¦ 7 ta bo'sh katak qoldi. Har biri uchun qator, ustun va kvadratni tekshir. ¦ Seven empty cells left. For each, check the row, column and square." },
        { code: 'rows 2–3', html: grid(ALL.slice(0, 5)), say: "Строки 2 и 3 готовы. Проверь: нет ли повторов? ¦ 2 va 3-qatorlar tayyor. Tekshir: takrorlar yo'qmi? ¦ Rows 2 and 3 done. Check: any repeats?" },
        { code: 'solved ✓', html: grid(ALL), say: "Готово! В каждой строке, столбце и квадрате — все четыре фрукта. ¦ Tayyor! Har bir qator, ustun va kvadratda to'rtala meva bor. ¦ Done! Every row, column and square has all four fruits." },
      ],
      takeaway: "Секрет: начинай с клетки, где выбор только один. ¦ Sir: tanlov faqat bitta bo'lgan katakdan boshla. ¦ The secret: start with the cell that has only one choice.",
      notes: { min: 8 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: найди недостающий фрукт ¦ O'zing bajar: yetishmayotgan mevani top ¦ Your turn: find the missing fruit",
      chat: "пиши фрукт смайликом ¦ mevani smaylik bilan yoz ¦ send the fruit as an emoji",
      goal: "Ты решаешь судоку! ¦ Sen sudoku yechasan! ¦ You solve sudoku!",
      items: [
        { title: "Строка: 🍓 _ 🍎 🍌 ¦ Qator: 🍓 _ 🍎 🍌 ¦ Row: 🍓 _ 🍎 🍌", choices: ['🍇', '🍓'], correct: 0, explain: "🍓 уже есть — значит 🍇. ¦ 🍓 allaqachon bor — demak 🍇. ¦ 🍓 is already there, so 🍇." },
        { title: "В столбце есть 🍎 🍇 🍓. Чего нет? ¦ Ustunda 🍎 🍇 🍓 bor. Nima yo'q? ¦ A column has 🍎 🍇 🍓. What's missing?", choices: ['🍌', '🍎'], correct: 0, explain: "Каждый фрукт — один раз в столбце. ¦ Har bir meva ustunda bir marta. ¦ Each fruit appears once per column." },
        { title: "Может ли в строке быть два 🍎? ¦ Qatorda ikkita 🍎 bo'lishi mumkinmi? ¦ Can a row have two 🍎?", choices: ["Нет ¦ Yo'q ¦ No", "Да ¦ Ha ¦ Yes"], correct: 0, explain: "Это нарушает главное правило. ¦ Bu asosiy qoidani buzadi. ¦ That breaks the main rule." },
      ],
      notes: { say: ['Дети рисуют поле 4×4 на листе в клетку и решают новое судоку, которое ментор диктует по строкам.'], min: 8 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: правило решает всё ¦ Xulosa: qoida hammasini hal qiladi ¦ Wrap-up: the rule decides",
      chat: "сколько минут ушло на судоку? число ¦ sudokuga necha daqiqa ketdi? son ¦ how many minutes did the sudoku take? a number",
      answer: "В судоку каждый значок встречается один раз в строке, столбце и квадрате 2×2. Начинаем с клетки, где выбор только один, и после каждого хода проверяем правило. Так решаются даже трудные головоломки. ¦ Sudokuda har bir belgi qator, ustun va 2×2 kvadratda bir marta uchraydi. Tanlov faqat bitta bo'lgan katakdan boshlaymiz va har yurishdan keyin qoidani tekshiramiz. Hatto qiyin boshqotirmalar ham shunday yechiladi. ¦ In sudoku each symbol appears once per row, column and 2×2 square. Start with the cell that has only one choice and check the rule after every move. That's how even hard puzzles get solved.",
      icon: '🧩',
      badge: "Мастер судоку ¦ Sudoku ustasi ¦ Sudoku master",
      badgeSub: kick('logic', 'g', 1),
      homeworkTitle: HOME,
      homework: [
        "Придумай своё судоку 4×4 со смайликами и загадай его родным. ¦ Smayliklar bilan o'z 4×4 sudokuingni o'ylab top va yaqinlaringga ber. ¦ Make your own 4×4 emoji sudoku and give it to your family.",
        "Нужен: лист в клетку. ¦ Kerak: katakli varaq. ¦ You need: squared paper.",
      ],
      notes: { min: 5 },
    },
  ],
});
