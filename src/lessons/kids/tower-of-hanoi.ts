import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

type P = [number, number, number];
const X = { A: 20, B: 50, C: 80 };
const Y = [72, 60, 48];
const big = (p: keyof typeof X, lvl: number): P => [X[p], Y[lvl], 1.6];
const mid = (p: keyof typeof X, lvl: number): P => [X[p], Y[lvl], 1.2];
const sml = (p: keyof typeof X, lvl: number): P => [X[p], Y[lvl], 0.85];

export default kit({
  id: 'kids-g17',
  title: "Ханойская башня: головоломка, которой больше 100 лет ¦ Xanoy minorasi: 100 yildan oshiq boshqotirma ¦ Tower of Hanoi: a puzzle over 100 years old",
  question: "За сколько ходов можно перенести башню из трёх кругов? ¦ Uch doiradan iborat minorani necha yurishda ko'chirish mumkin? ¦ In how many moves can you move a tower of three discs?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🗼',
      kicker: kick('algo', 'g', 1),
      title: "Перенеси башню ¦ Minorani ko'chir ¦ Move the tower",
      chat: "ты собирал пирамидку в детстве? 👍 или 👎 ¦ bolaligingda piramidka yig'ganmisan? 👍 yoki 👎 ¦ did you build stacking rings as a little kid? 👍 or 👎",
      lead: "Три места и башня из трёх кругов разного размера. Нужно перенести башню с места A на место C. Правила: за один ход берём один круг и никогда не кладём большой на маленький. ¦ Uchta joy va har xil o'lchamli uchta doiradan iborat minora. Minorani A joydan C joyga ko'chirish kerak. Qoidalar: bir yurishda bitta doirani olamiz va hech qachon kattasini kichigining ustiga qo'ymaymiz. ¦ Three places and a tower of three discs of different sizes. Move the tower from A to C. Rules: move one disc at a time and never put a big disc on a smaller one.",
      facts: [
        "Её придумал математик Эдуард Люка в 1883 году ¦ Uni matematik Eduard Lyuka 1883-yilda o'ylab topgan ¦ Mathematician Édouard Lucas invented it in 1883",
        "Нужны: 3 бумажных круга и 3 листка ¦ Kerak: 3 ta qog'oz doira va 3 ta varaq ¦ You need: 3 paper circles and 3 sheets",
      ],
      notes: { say: ['Можно монеты, но бумажные круги безопаснее. Монеты не брать в рот.'], min: 3 },
    },
    {
      type: 'predict',
      stage: 1,
      title: "Сколько ходов нужно для трёх кругов? ¦ Uchta doira uchun nechta yurish kerak? ¦ How many moves for three discs?",
      chat: "пиши число ¦ sonni yoz ¦ write a number",
      label: "Ходов ¦ Yurishlar ¦ Moves",
      min: 1,
      max: 15,
      answer: 7,
      result: "7 ходов — и меньше нельзя! Смотрим, как это сделать. ¦ 7 ta yurish — kamroq bo'lmaydi! Qanday qilishni ko'ramiz. ¦ 7 moves — and you can't do it in fewer! Let's see how.",
      notes: { min: 4 },
    },
    {
      type: 'animate',
      stage: 2,
      title: "Решение за 7 ходов ¦ 7 yurishda yechim ¦ The 7-move solution",
      chat: "какой круг переносим чаще всех? ¦ qaysi doirani hammadan ko'p ko'chiramiz? ¦ which disc moves most often?",
      actors: [
        { id: 'a', text: 'A' },
        { id: 'b', text: 'B' },
        { id: 'c', text: 'C' },
        { id: 'L', icon: '🔴' },
        { id: 'M', icon: '🟠' },
        { id: 'S', icon: '🟡' },
      ],
      steps: [
        { say: "Башня на месте A. ¦ Minora A joyida. ¦ The tower is on A.", at: { a: [20, 90], b: [50, 90], c: [80, 90], L: big('A', 0), M: mid('A', 1), S: sml('A', 2) } },
        { say: "1 · Маленький → C ¦ 1 · Kichik → C ¦ 1 · Small → C", at: { S: sml('C', 0) } },
        { say: "2 · Средний → B ¦ 2 · O'rta → B ¦ 2 · Medium → B", at: { M: mid('B', 0) } },
        { say: "3 · Маленький → B, на средний ¦ 3 · Kichik → B, o'rtaning ustiga ¦ 3 · Small → B, onto medium", at: { S: sml('B', 1) } },
        { say: "4 · Большой → C. Самый важный ход! ¦ 4 · Katta → C. Eng muhim yurish! ¦ 4 · Big → C. The key move!", at: { L: big('C', 0) }, pulse: ['L'] },
        { say: "5 · Маленький → A ¦ 5 · Kichik → A ¦ 5 · Small → A", at: { S: sml('A', 0) } },
        { say: "6 · Средний → C, на большой ¦ 6 · O'rta → C, kattaning ustiga ¦ 6 · Medium → C, onto big", at: { M: mid('C', 1) } },
        { say: "7 · Маленький → C. Башня перенесена! ¦ 7 · Kichik → C. Minora ko'chirildi! ¦ 7 · Small → C. The tower has moved!", at: { S: sml('C', 2) }, pulse: ['L', 'M', 'S'] },
      ],
      takeaway: "План: сначала убрать маленькие с дороги, перенести большой, потом вернуть маленькие сверху. ¦ Reja: avval kichiklarni yo'ldan olib tashlash, kattasini ko'chirish, keyin kichiklarni ustiga qaytarish. ¦ The plan: clear the small ones out of the way, move the big one, then stack the small ones back on top.",
      notes: { min: 9 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: перенеси свою башню ¦ O'zing bajar: o'z minorangni ko'chir ¦ Your turn: move your own tower",
      chat: "пиши, за сколько ходов справился ¦ necha yurishda uddalaganingni yoz ¦ write how many moves it took you",
      goal: "Ты умеешь планировать ходы! ¦ Yurishlarni rejalashtira olasan! ¦ You can plan your moves!",
      items: [
        { title: "Сколько ходов для двух кругов? ¦ Ikkita doira uchun nechta yurish? ¦ How many moves for two discs?", choices: ['3', '5'], correct: 0, explain: "Маленький в сторону, большой на место, маленький сверху. ¦ Kichigi chetga, kattasi joyiga, kichigi ustiga. ¦ Small aside, big across, small on top." },
        { title: "Можно ли положить 🔴 на 🟡? ¦ 🔴 ni 🟡 ustiga qo'ysa bo'ladimi? ¦ Can 🔴 go on 🟡?", choices: ["Нет ¦ Yo'q ¦ No", "Да ¦ Ha ¦ Yes"], correct: 0, explain: "Большой на маленький — нельзя. ¦ Kattasini kichigining ustiga — mumkin emas. ¦ Big on small isn't allowed." },
      ],
      notes: { say: ['Дети повторяют решение со своими кругами и пишут число ходов в чат.'], min: 9 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: большой ход — в середине плана ¦ Xulosa: katta yurish — rejaning o'rtasida ¦ Wrap-up: the big move is mid-plan",
      chat: "попробуешь дома с четырьмя кругами? 💪 или 😅 ¦ uyda to'rtta doira bilan sinab ko'rasanmi? 💪 yoki 😅 ¦ will you try four discs at home? 💪 or 😅",
      answer: "Башню из трёх кругов можно перенести за 7 ходов. Главный план: убрать маленькие круги с дороги, перенести самый большой и вернуть маленькие на него. Каждый ход — один круг, и большой никогда не лежит на маленьком. ¦ Uch doirali minorani 7 yurishda ko'chirish mumkin. Asosiy reja: kichik doiralarni yo'ldan olib tashlash, eng kattasini ko'chirish va kichiklarni uning ustiga qaytarish. Har bir yurish — bitta doira, katta hech qachon kichikning ustida yotmaydi. ¦ A three-disc tower moves in 7 moves. The plan: get the small discs out of the way, move the biggest, then put the small ones back on it. One disc per move, and never big on small.",
      icon: '🗼',
      badge: "Строитель башен ¦ Minora quruvchisi ¦ Tower builder",
      badgeSub: kick('algo', 'g', 1),
      homeworkTitle: HOME,
      homework: [
        "Научи родных переносить башню и проверь, уложатся ли они в 7 ходов. ¦ Yaqinlaringga minorani ko'chirishni o'rgat va ular 7 yurishga sig'ishadimi, tekshir. ¦ Teach your family the tower and see if they manage it in 7 moves.",
        "Нужны: 3 бумажных круга и 3 листка. ¦ Kerak: 3 ta qog'oz doira va 3 ta varaq. ¦ You need: 3 paper circles and 3 sheets.",
      ],
      notes: { min: 5 },
    },
  ],
});
