import { kit } from '@engine/kit';
import { HOME, MAZE_CSS, ROUTE, kick, maze } from './_kids';

/* One program, two maps: repeat until ⭐ { if wall ahead → ⬇️ else ➡️ } */
const PROG = (now: number) =>
  [
    { t: '🔁 until ⭐', c: 'r' },
    { t: 'If 🧱 ➡️', c: 'i in' },
    { t: '⬇️', c: 'in2' },
    { t: 'else', c: 'i in' },
    { t: '➡️', c: 'in2' },
  ].map((b, i) => ({ ...b, c: `${b.c}${i === now ? ' now' : ''}` }));
const k = (c: [number, number]) => `${c[0]},${c[1]}`;
const A = ['..#', '#.F'];
const AC: [number, number][] = [[0, 0], [0, 1], [1, 1], [1, 2]];
const B = ['.###', '...#', '##.F'];
const BC: [number, number][] = [[0, 0], [1, 0], [1, 1], [1, 2], [2, 2], [2, 3]];
const run = (map: string[], cells: [number, number][], n: number, now: number) =>
  maze(map, cells[n], cells.slice(0, n + 1).map(k), [], PROG(now));

export default kit({
  id: 'kids-t23',
  title: "Лабиринт с выбором: блок «Если» ¦ Tanlovli labirint: «Agar» bloki ¦ A maze with choices: the If block",
  question: "Как одной программой пройти два разных лабиринта? ¦ Bitta dastur bilan ikkita har xil labirintdan qanday o'tish mumkin? ¦ How can one program solve two different mazes?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🔀',
      kicker: kick('blockly', 't', 3),
      title: "Кодди учится думать ¦ Koddi o'ylashni o'rganyapti ¦ Coddy learns to think",
      chat: "если идёт дождь, то ты… ? ¦ agar yomg'ir yog'sa, sen… ? ¦ if it rains, then you… ?",
      lead: "Помнишь игру «если — то»? Бирюзовый блок «Если» проверяет условие. Кодди смотрит вперёд: если там стена 🧱 — идёт вниз, иначе — вправо. С таким блоком робот сам выбирает дорогу! ¦ «Agar — u holda» o'yinini eslaysanmi? Feruza rangli «Agar» bloki shartni tekshiradi. Koddi oldinga qaraydi: agar u yerda devor 🧱 bo'lsa — pastga yuradi, aks holda — o'ngga. Shunday blok bilan robot yo'lni o'zi tanlaydi! ¦ Remember the “if — then” game? The teal If block checks a condition. Coddy looks ahead: if there's a wall 🧱 he goes down, else he goes right. With this block the robot chooses its own way!",
      facts: [
        "Повторяем уроки 19–21 ¦ 19–21-darslarni takrorlaymiz ¦ We revise lessons 19–21",
        "If = если · else = иначе ¦ If = agar · else = aks holda ¦ If · else",
      ],
      notes: { min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Лабиринт 1 ¦ 1-labirint ¦ Maze 1",
      chat: "куда пойдёт Кодди? ➡️ или ⬇️ ¦ Koddi qayerga yuradi? ➡️ yoki ⬇️ ¦ where will Coddy go? ➡️ or ⬇️",
      lang: 'text',
      css: MAZE_CSS,
      steps: [
        { code: 'If 🧱 ➡️ ? no → ➡️', html: run(A, AC, 1, 4), say: "Впереди свободно — блок «иначе»: шаг вправо. ¦ Oldinda bo'sh — «aks holda» bloki: o'ngga qadam. ¦ The way ahead is clear — the else block: a step right." },
        { code: 'If 🧱 ➡️ ? yes → ⬇️', html: run(A, AC, 2, 2), say: "Теперь впереди стена — условие верно: шаг вниз. ¦ Endi oldinda devor — shart to'g'ri: pastga qadam. ¦ Now there's a wall ahead — the condition is true: a step down." },
        { code: '➡️ ⭐', html: run(A, AC, 3, 4), say: "Снова свободно — вправо, и вот звезда! ¦ Yana bo'sh — o'ngga, mana yulduz! ¦ Clear again — right, and there's the star!" },
      ],
      notes: { min: 6 },
    },
    {
      type: 'show',
      stage: 2,
      title: "Лабиринт 2 — та же программа! ¦ 2-labirint — o'sha dastur! ¦ Maze 2 — the same program!",
      chat: "сработает ли программа? «да» или «нет» ¦ dastur ishlaydimi? «ha» yoki «yo'q» ¦ will the program work? “yes” or “no”",
      lang: 'text',
      css: MAZE_CSS,
      steps: [
        { code: 'If 🧱 ➡️ ? yes → ⬇️', html: run(B, BC, 1, 2), say: "Новый лабиринт. Сразу стена справа — Кодди идёт вниз. ¦ Yangi labirint. Darhol o'ngda devor — Koddi pastga yuradi. ¦ A new maze. A wall on the right straight away — Coddy goes down." },
        { code: 'else → ➡️ ➡️', html: run(B, BC, 3, 4), say: "Дальше свободно — два шага вправо. ¦ Keyin bo'sh — o'ngga ikki qadam. ¦ Then it's clear — two steps right." },
        { code: 'If 🧱 ➡️ ? yes → ⬇️', html: run(B, BC, 4, 2), say: "Опять стена — вниз. ¦ Yana devor — pastga. ¦ A wall again — down." },
        { code: '➡️ ⭐ ✓', html: run(B, BC, 5, 4), say: "Шаг вправо — звезда! Одна программа прошла оба лабиринта. ¦ O'ngga qadam — yulduz! Bitta dastur ikkala labirintdan o'tdi. ¦ A step right — the star! One program solved both mazes." },
      ],
      takeaway: "Блок «Если» делает программу умной: она работает на разных картах. ¦ «Agar» bloki dasturni aqlli qiladi: u turli xaritalarda ishlaydi. ¦ The If block makes a program smart: it works on different maps.",
      notes: { min: 8 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: что сделает Кодди? ¦ O'zing bajar: Koddi nima qiladi? ¦ Your turn: what will Coddy do?",
      chat: "номер ответа в чат ¦ javob raqamini chatga ¦ answer number in the chat",
      goal: "Ты научил робота выбирать! ¦ Robotni tanlashga o'rgatding! ¦ You taught the robot to choose!",
      items: [
        { title: "Справа стена. Что сделает Кодди? ¦ O'ngda devor. Koddi nima qiladi? ¦ There's a wall on the right. What does Coddy do?", choices: ["Пойдёт вниз ⬇️ ¦ Pastga yuradi ⬇️ ¦ Goes down ⬇️", "Пойдёт вправо ➡️ ¦ O'ngga yuradi ➡️ ¦ Goes right ➡️"], correct: 0, explain: "Условие «стена» верно — выполняется первая ветка. ¦ «Devor» sharti to'g'ri — birinchi tarmoq bajariladi. ¦ The “wall” condition is true, so the first branch runs." },
        { title: "Зачем нужен блок «Если»? ¦ «Agar» bloki nima uchun kerak? ¦ Why do we need the If block?", choices: ["Чтобы робот выбирал сам по ситуации ¦ Robot vaziyatga qarab o'zi tanlashi uchun ¦ So the robot chooses by itself", "Чтобы программа была длиннее ¦ Dastur uzunroq bo'lishi uchun ¦ To make the program longer"], correct: 0, explain: "Одна программа подходит к разным лабиринтам. ¦ Bitta dastur turli labirintlarga mos keladi. ¦ One program fits different mazes." },
      ],
      notes: { min: 8 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: если — то — иначе ¦ Xulosa: agar — u holda — aks holda ¦ Wrap-up: if — then — else",
      chat: "придумай своё правило «если — то» для Кодди ¦ Koddi uchun o'z «agar — u holda» qoidangni o'ylab top ¦ make up your own “if — then” rule for Coddy",
      answer: "Блок «Если» проверяет условие: если впереди стена — Кодди идёт вниз, иначе — вправо. Вместе с повтором «до звезды» эта программа сама проходит разные лабиринты. Так роботы-пылесосы объезжают мебель: они не знают карту заранее, а проверяют условия. ¦ «Agar» bloki shartni tekshiradi: agar oldinda devor bo'lsa — Koddi pastga yuradi, aks holda — o'ngga. «Yulduzgacha» takrorlash bilan birga bu dastur turli labirintlardan o'zi o'tadi. Robot-changyutgichlar mebelni xuddi shunday aylanib o'tadi: ular xaritani oldindan bilmaydi, shartlarni tekshiradi. ¦ The If block checks a condition: if there's a wall ahead Coddy goes down, else right. Together with “repeat until ⭐” the program solves different mazes on its own. Robot vacuums steer around furniture the same way — they don't know the map, they check conditions.",
      icon: '🔀',
      badge: "Мастер условий ¦ Shartlar ustasi ¦ Condition master",
      badgeSub: kick('blockly', 't', 3),
      homeworkTitle: HOME,
      homework: [
        "Нарисуй два лабиринта в клетку, которые проходит программа «если стена — вниз, иначе — вправо». ¦ Katakli qog'ozga «agar devor — pastga, aks holda — o'ngga» dasturi o'ta oladigan ikkita labirint chiz. ¦ Draw two mazes on squared paper that the “if wall — down, else — right” program can solve.",
        "Нужны: бумага в клетку и карандаш. ¦ Kerak: katakli qog'oz va qalam. ¦ You need: squared paper and a pencil.",
      ],
      notes: { min: 5 },
    },
  ],
});
