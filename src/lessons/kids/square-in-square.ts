import { kit } from '@engine/kit';
import { HOME, KCSS, ROUTE, rkick } from './_kids';

/* The pen draws squares from the centre outward: inner loop = 4 sides, outer loop = how many squares */
const CSS = `${KCSS}
svg{width:420px;height:420px;background:#fff;border-radius:20px}`;
const C = 210;
const sq = (size: number, sides: number, color: string) => {
  const h = size / 2;
  const pts = [
    [C - h, C - h],
    [C + h, C - h],
    [C + h, C + h],
    [C - h, C + h],
    [C - h, C - h],
  ];
  const d = pts.slice(0, sides + 1).map((p, i) => `${i ? 'L' : 'M'}${p[0]} ${p[1]}`).join(' ');
  return `<path d="${d}" fill="none" stroke="${color}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`;
};
const COLORS = ['#fa4f28', '#5b6ef5', '#0fa38e'];
/* `done` full squares + `sides` of the next one */
const draw = (done: number, sides = 0) =>
  `<div class="wrap"><svg viewBox="0 0 420 420">${Array.from({ length: done }, (_, i) => sq(100 + i * 110, 4, COLORS[i])).join('')}${
    sides ? sq(100 + done * 110, sides, COLORS[done]) : ''
  }</svg></div>`;

const NESTED = `🔁 2
  🔁 4
    ✏️ ➡️
    ↪️ 90°
  📏 ➕`;

export default kit({
  id: 'kids-t34',
  title: "Квадрат внутри квадрата ¦ Kvadrat ichida kvadrat ¦ A square inside a square",
  question: "Что повторяется внутри, а что — снаружи? ¦ Ichkarida nima takrorlanadi, tashqarida-chi? ¦ What repeats on the inside, and what on the outside?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🔳',
      kicker: rkick('blockly'),
      title: "Цикл в цикле ¦ Sikl ichida sikl ¦ A loop inside a loop",
      chat: "сколько сторон у квадрата? число ¦ kvadratning nechta tomoni bor? son ¦ how many sides does a square have? a number",
      lead: "Кодди умеет рисовать: ✏️ — провести сторону, ↪️ — повернуть на 90°. Квадрат — это «4 раза: сторона и поворот». А если нужен квадрат внутри квадрата? Кладём один цикл внутрь другого! ¦ Koddi chiza oladi: ✏️ — tomonni chizish, ↪️ — 90° ga burilish. Kvadrat — bu «4 marta: tomon va burilish». Kvadrat ichida kvadrat kerak bo'lsa-chi? Bitta siklni boshqasining ichiga qo'yamiz! ¦ Coddy can draw: ✏️ draws a side, ↪️ turns 90°. A square is “4 times: a side and a turn”. What about a square inside a square? Put one loop inside another!",
      facts: [
        "Повторяем уроки 10–11 ¦ 10–11-darslarni takrorlaymiz ¦ We revise lessons 10–11",
        "Нужен: лист в клетку ¦ Kerak: katakli varaq ¦ You need: squared paper",
      ],
      notes: { min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Внутренний цикл: один квадрат ¦ Ichki sikl: bitta kvadrat ¦ The inner loop: one square",
      chat: "сколько раз повторяем «сторона + поворот»? число ¦ «tomon + burilish»ni necha marta takrorlaymiz? son ¦ how many times do we repeat “side + turn”? a number",
      lang: 'text',
      css: CSS,
      steps: [
        { code: '✏️ ➡️  ↪️ 90°', html: draw(0, 1), say: "Сторона и поворот — один раз. ¦ Tomon va burilish — bir marta. ¦ A side and a turn — once." },
        { code: '🔁 2', html: draw(0, 2), say: "Второй раз — уже уголок. ¦ Ikkinchi marta — endi burchak. ¦ Twice — now it's a corner." },
        { code: '🔁 4 ✓', html: draw(1), say: "Четыре раза — квадрат готов! Это внутренний цикл. ¦ To'rt marta — kvadrat tayyor! Bu ichki sikl. ¦ Four times — the square is done! That's the inner loop." },
      ],
      notes: { min: 6 },
    },
    {
      type: 'show',
      stage: 2,
      title: "Внешний цикл: квадраты растут ¦ Tashqi sikl: kvadratlar kattalashadi ¦ The outer loop: the squares grow",
      chat: "сколько раз работает внешний цикл? число ¦ tashqi sikl necha marta ishlaydi? son ¦ how many times does the outer loop run? a number",
      lang: 'text',
      css: CSS,
      steps: [
        { code: NESTED, html: draw(1), say: "Внешний цикл повторяет весь квадрат, а потом делает сторону длиннее 📏➕. ¦ Tashqi sikl butun kvadratni takrorlaydi, keyin tomonni uzunroq qiladi 📏➕. ¦ The outer loop repeats the whole square, then makes the side longer 📏➕." },
        { code: '🔁 2 → 2 ⬛', html: draw(2), say: "Два повтора внешнего цикла — квадрат внутри квадрата! ¦ Tashqi siklning ikki takrori — kvadrat ichida kvadrat! ¦ Two runs of the outer loop — a square inside a square!" },
        { code: '🔁 3 → 3 ⬛', html: draw(3), say: "Меняем внешнее число на 3 — и квадратов три. Внутренний цикл тот же: 4. ¦ Tashqi sonni 3 ga o'zgartiramiz — va kvadratlar uchta. Ichki sikl o'sha: 4. ¦ Change the outer number to 3 — three squares. The inner loop stays the same: 4." },
      ],
      takeaway: "Внутри — 4 (стороны квадрата). Снаружи — сколько квадратов. ¦ Ichkarida — 4 (kvadrat tomonlari). Tashqarida — nechta kvadrat. ¦ Inside: 4 (the square's sides). Outside: how many squares.",
      notes: { min: 9 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: внутри или снаружи? ¦ O'zing bajar: ichkaridami yoki tashqaridami? ¦ Your turn: inside or outside?",
      chat: "номер ответа в чат ¦ javob raqamini chatga ¦ answer number in the chat",
      goal: "Ты разобрался с вложенными циклами! ¦ Ichma-ich sikllarni tushunib olding! ¦ You've figured out nested loops!",
      items: [
        { title: "Нужно 5 квадратов. Какое число поменять? ¦ 5 ta kvadrat kerak. Qaysi sonni o'zgartirish kerak? ¦ You want 5 squares. Which number changes?", choices: ["Внешнее: 🔁 5 ¦ Tashqisini: 🔁 5 ¦ The outer one: 🔁 5", "Внутреннее: 🔁 5 ¦ Ichkisini: 🔁 5 ¦ The inner one: 🔁 5"], correct: 0, explain: "Внешний цикл считает квадраты. ¦ Tashqi sikl kvadratlarni sanaydi. ¦ The outer loop counts the squares." },
        { title: "Внутри поставили 3 вместо 4. Что выйдет? ¦ Ichkariga 4 o'rniga 3 qo'yishdi. Nima chiqadi? ¦ The inner number was set to 3, not 4. What happens?", choices: ["Квадраты не замкнутся — без одной стороны ¦ Kvadratlar yopilmaydi — bitta tomonsiz ¦ The squares won't close — one side missing", "Ничего не изменится ¦ Hech narsa o'zgarmaydi ¦ Nothing changes"], correct: 0, explain: "Внутренний цикл рисует стороны — их должно быть 4. ¦ Ichki sikl tomonlarni chizadi — ular 4 ta bo'lishi kerak. ¦ The inner loop draws the sides — there must be 4." },
      ],
      notes: { say: ['Дети рисуют квадрат в квадрате на листе в клетку, считая «сторона-поворот», и пишут числа обоих циклов.'], min: 7 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: цикл внутри цикла ¦ Xulosa: sikl ichida sikl ¦ Wrap-up: a loop inside a loop",
      chat: "пиши два числа для 4 квадратов: внешний и внутренний ¦ 4 ta kvadrat uchun ikkita son yoz: tashqi va ichki ¦ write two numbers for 4 squares: outer and inner",
      answer: "Квадрат — это внутренний цикл: 4 раза «сторона и поворот». Внешний цикл повторяет целый квадрат и делает сторону длиннее — так получается квадрат внутри квадрата. Внутреннее число отвечает за стороны (4), внешнее — за количество квадратов. Это вложенный цикл. ¦ Kvadrat — ichki sikl: 4 marta «tomon va burilish». Tashqi sikl butun kvadratni takrorlaydi va tomonni uzunroq qiladi — shunday qilib kvadrat ichida kvadrat hosil bo'ladi. Ichki son tomonlar uchun (4), tashqisi — kvadratlar soni uchun javob beradi. Bu ichma-ich sikl. ¦ A square is the inner loop: 4 times “a side and a turn”. The outer loop repeats the whole square and makes the side longer — giving a square inside a square. The inner number is for the sides (4), the outer one for how many squares. That's a nested loop.",
      icon: '🔳',
      badge: "Мастер вложенных циклов ¦ Ichma-ich sikl ustasi ¦ Nested-loop master",
      badgeSub: rkick('blockly'),
      homeworkTitle: HOME,
      homework: [
        "Нарисуй на листе в клетку 3 квадрата друг в друге и запиши программу: 🔁 3 { 🔁 4 { ✏️ ↪️ } 📏➕ }. ¦ Katakli varaqqa bir-birining ichida 3 ta kvadrat chiz va dasturni yoz: 🔁 3 { 🔁 4 { ✏️ ↪️ } 📏➕ }. ¦ Draw 3 squares one inside another on squared paper and write the program: 🔁 3 { 🔁 4 { ✏️ ↪️ } 📏➕ }.",
        "Нужен: лист в клетку. ¦ Kerak: katakli varaq. ¦ You need: squared paper.",
      ],
      notes: { min: 5 },
    },
  ],
});
