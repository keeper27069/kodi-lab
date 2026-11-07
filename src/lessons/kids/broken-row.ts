import { kit } from '@engine/kit';
import { HOME, KCSS, ROUTE, rkick } from './_kids';

/* Rows of shapes with one mistake; `mark` = index to flag, `fix` = what belongs there */
const CSS = `${KCSS}
.cell{width:84px;height:84px;font-size:48px}
.n{font:700 18px Inter;color:#8a8f9c;text-align:center;margin-top:4px}`;
const row = (items: string[], mark = -1, ok = false) =>
  `<div class="wrap"><div class="row">${items
    .map((t, i) => `<div><div class="cell ${i === mark ? (ok ? 'ok' : 'bad') : ''}">${t}</div><div class="n">${i + 1}</div></div>`)
    .join('')}</div></div>`;
const A = ['🔴', '🔵', '🔴', '🔵', '🔴', '🔴', '🔴', '🔵'];
const A_OK = ['🔴', '🔵', '🔴', '🔵', '🔴', '🔵', '🔴', '🔵'];
const B = ['🔺', '🔺', '⚪', '🔺', '🔺', '⚪', '🔺', '⚪'];
const B_OK = ['🔺', '🔺', '⚪', '🔺', '🔺', '⚪', '🔺', '🔺'];

export default kit({
  id: 'kids-t29',
  title: "Где сломался ряд? ¦ Qator qayerda buzildi? ¦ Where did the row break?",
  question: "Как найти одну ошибку в длинном узоре? ¦ Uzun naqshdagi bitta xatoni qanday topish mumkin? ¦ How do you find one mistake in a long pattern?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🧩',
      kicker: rkick('logic'),
      title: "Узор с подвохом ¦ Hiylali naqsh ¦ A pattern with a catch",
      chat: "какой узор ты видишь вокруг себя? пример ¦ atrofingda qanday naqshni ko'ryapsan? misol ¦ what pattern can you see around you? an example",
      lead: "Робот рисовал узоры и в каждом ошибся один раз. Чтобы найти ошибку, сначала назовём правило словами: «красный, синий, и снова». Потом проверим каждую клетку по правилу. ¦ Robot naqshlar chizdi va har birida bir marta xato qildi. Xatoni topish uchun avval qoidani so'z bilan aytamiz: «qizil, ko'k va yana». Keyin har bir katakni qoida bo'yicha tekshiramiz. ¦ The robot drew patterns and made one mistake in each. To find it, first name the rule in words: “red, blue, and again”. Then check every square against the rule.",
      facts: [
        "Повторяем уроки 9–12: узоры и правила ¦ 9–12-darslarni takrorlaymiz: naqsh va qoidalar ¦ We revise lessons 9–12: patterns and rules",
      ],
      notes: { min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Ряд 1: красный и синий ¦ 1-qator: qizil va ko'k ¦ Row 1: red and blue",
      chat: "пиши номер клетки с ошибкой ¦ xatoli katak raqamini yoz ¦ write the number of the wrong square",
      lang: 'text',
      css: CSS,
      steps: [
        { code: '🔴🔵🔴🔵🔴🔴🔴🔵', html: row(A), say: "Правило: красный, синий — и повторяем. Где робот сбился? ¦ Qoida: qizil, ko'k — va takrorlaymiz. Robot qayerda adashdi? ¦ The rule: red, blue — repeat. Where did the robot slip?" },
        { code: '6 ✗', html: row(A, 5), say: "Клетка 6: после красного должен быть синий! ¦ 6-katak: qizildan keyin ko'k bo'lishi kerak! ¦ Square 6: after red comes blue!" },
        { code: '6 → 🔵 ✓', html: row(A_OK, 5, true), say: "Исправили — ряд снова ровный. ¦ Tuzatdik — qator yana tekis. ¦ Fixed — the row is right again." },
      ],
      notes: { min: 6 },
    },
    {
      type: 'show',
      stage: 2,
      title: "Ряд 2: правило из трёх ¦ 2-qator: uchtalik qoida ¦ Row 2: a rule of three",
      chat: "назови правило словами ¦ qoidani so'z bilan ayt ¦ say the rule in words",
      lang: 'text',
      css: CSS,
      steps: [
        { code: '🔺🔺⚪🔺🔺⚪🔺⚪', html: row(B), say: "Здесь блок длиннее. Найди, что повторяется. ¦ Bu yerda blok uzunroq. Nima takrorlanishini top. ¦ The block is longer here. Find what repeats." },
        { code: 'rule: 🔺🔺⚪', html: row(B, 2, true), say: "Правило: два треугольника и круг. Блок 🔺🔺⚪ повторяется. ¦ Qoida: ikkita uchburchak va doira. 🔺🔺⚪ bloki takrorlanadi. ¦ The rule: two triangles and a circle. The 🔺🔺⚪ block repeats." },
        { code: '8 ✗ → 🔺 ✓', html: row(B_OK, 7, true), say: "Клетка 8: после одного треугольника нужен второй, а не круг. ¦ 8-katak: bitta uchburchakdan keyin doira emas, ikkinchisi kerak. ¦ Square 8: after one triangle comes a second, not a circle." },
      ],
      takeaway: "Сначала правило словами, потом проверка каждой клетки. ¦ Avval qoida so'z bilan, keyin har bir katakni tekshirish. ¦ First say the rule, then check every square.",
      notes: { min: 8 },
    },
    {
      type: 'board',
      stage: 3,
      title: "Сделай сам: загадай ряд ментору ¦ O'zing bajar: mentorga qator top deb ber ¦ Your turn: give the mentor a row",
      chat: "пиши свой ряд с одной ошибкой ¦ bitta xatoli o'z qatoringni yoz ¦ write your own row with one mistake",
      seeds: ["🟢🟡🟢🟡🟡🟢🟡", "⭐🌙🌙⭐🌙⭐"],
      placeholder: "Например: 🟣🟠🟣🟠🟠 ¦ Masalan: 🟣🟠🟣🟠🟠 ¦ For example: 🟣🟠🟣🟠🟠",
      footer: "Ментор ищет ошибку и называет правило. Сможет ли? ¦ Mentor xatoni qidiradi va qoidani aytadi. Uddalay oladimi? ¦ The mentor finds the mistake and names the rule. Can they?",
      notes: { say: ['Ментор «решает» 2–3 ряда из чата вслух, проговаривая правило и номер ошибки.'], min: 8 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: правило → проверка ¦ Xulosa: qoida → tekshiruv ¦ Wrap-up: rule → check",
      chat: "какое правило было в ряду 2? ¦ 2-qatorda qanday qoida bor edi? ¦ what was the rule in row 2?",
      answer: "Чтобы найти ошибку в узоре, сначала находим повторяющийся блок и называем правило словами: «красный, синий» или «два треугольника и круг». Потом проверяем каждую клетку по правилу — так ошибка сама «выпрыгивает». Так же программисты ищут ошибки в коде. ¦ Naqshdagi xatoni topish uchun avval takrorlanadigan blokni topib, qoidani so'z bilan aytamiz: «qizil, ko'k» yoki «ikkita uchburchak va doira». Keyin har bir katakni qoida bo'yicha tekshiramiz — shunda xato o'zi «sakrab chiqadi». Dasturchilar ham koddagi xatolarni shunday qidiradi. ¦ To find a mistake in a pattern, first find the repeating block and say the rule: “red, blue” or “two triangles and a circle”. Then check each square against it — the mistake jumps out. Programmers hunt bugs in code the same way.",
      icon: '🧩',
      badge: "Охотник за ошибками ¦ Xato ovchisi ¦ Bug hunter",
      badgeSub: rkick('logic'),
      homeworkTitle: HOME,
      homework: [
        "Нарисуй цветными карандашами ряд из 10 фигур с одной ошибкой и попроси родных её найти. ¦ Rangli qalamlar bilan bitta xatoli 10 ta shakldan iborat qator chiz va yaqinlaringdan uni topishni so'ra. ¦ Draw a row of 10 shapes with one mistake in coloured pencils and ask your family to find it.",
        "Нужны: цветные карандаши. ¦ Kerak: rangli qalamlar. ¦ You need: coloured pencils.",
      ],
      notes: { min: 5 },
    },
  ],
});
