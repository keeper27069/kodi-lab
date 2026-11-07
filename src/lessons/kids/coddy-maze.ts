import { kit } from '@engine/kit';
import { HOME, MAZE_CSS, ROUTE, kick, maze } from './_kids';

/* Coddy starts top-left; ⭐ is bottom-right. Correct program: ➡️ ➡️ ⬇️ ⬇️ ➡️ */
const MAP = ['...#', '##.#', '##.F'];
const PROG = ['➡️', '➡️', '⬇️', '⬇️', '➡️'];
const CELLS: [number, number][] = [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2], [2, 3]];
const key = (c: [number, number]) => `${c[0]},${c[1]}`;
const step = (n: number) =>
  maze(MAP, CELLS[n], CELLS.slice(0, n + 1).map(key), [], PROG.map((t, i) => ({ t, c: i === n - 1 ? 'now' : '' })));
/* Buggy program: one extra ➡️ at the start crashes into the wall */
const BUG = ['➡️', '➡️', '➡️', '⬇️', '⬇️'];
const bug = maze(MAP, [0, 2], ['0,0', '0,1', '0,2'], ['0,3'], BUG.map((t, i) => ({ t, c: i === 2 ? 'bad' : '' })));

export default kit({
  id: 'kids-t21',
  title: "Помоги Кодди пройти лабиринт ¦ Koddiga labirintdan o'tishga yordam ber ¦ Help Coddy through the maze",
  question: "Какими командами довести робота до звезды? ¦ Robotni yulduzgacha qaysi buyruqlar bilan olib borish mumkin? ¦ Which commands get the robot to the star?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🤖',
      kicker: kick('blockly', 't', 1),
      title: "Знакомься: робот Кодди ¦ Tanishing: robot Koddi ¦ Meet Coddy the robot",
      chat: "какую команду Кодди сделает первой? ➡️ или ⬇️ ¦ Koddi birinchi qaysi buyruqni bajaradi? ➡️ yoki ⬇️ ¦ which command will Coddy do first? ➡️ or ⬇️",
      lead: "Кодди умеет только ходить на одну клетку: вправо ➡️ или вниз ⬇️. Серые клетки — стены. Мы складываем команды-блоки по порядку, как в Blockly, и Кодди выполняет их одну за другой. ¦ Koddi faqat bitta katakka yura oladi: o'ngga ➡️ yoki pastga ⬇️. Kulrang kataklar — devorlar. Biz buyruq-bloklarni Blockly'dagidek tartib bilan teramiz, Koddi esa ularni birma-bir bajaradi. ¦ Coddy can only move one square: right ➡️ or down ⬇️. Grey squares are walls. We stack command blocks in order, like in Blockly, and Coddy runs them one by one.",
      facts: [
        "Повторяем уроки 13–15 ¦ 13–15-darslarni takrorlaymiz ¦ We revise lessons 13–15",
        "🤖 Кодди · ⭐ финиш · ⬛ стена ¦ 🤖 Koddi · ⭐ marra · ⬛ devor ¦ 🤖 Coddy · ⭐ finish · ⬛ wall",
      ],
      notes: { min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Запускаем программу ¦ Dasturni ishga tushiramiz ¦ Running the program",
      chat: "сколько всего команд? число ¦ jami nechta buyruq? son ¦ how many commands in total? a number",
      lang: 'text',
      css: MAZE_CSS,
      steps: [
        { code: 'start', html: step(0), say: "Кодди стоит в начале. Справа программа из 5 блоков. ¦ Koddi boshida turibdi. O'ngda 5 ta blokli dastur. ¦ Coddy is at the start. On the right is a 5-block program." },
        { code: '➡️ ➡️', html: step(2), say: "Два шага вправо — дальше стена. ¦ O'ngga ikki qadam — keyin devor. ¦ Two steps right — then a wall." },
        { code: '⬇️ ⬇️', html: step(4), say: "Два шага вниз по коридору. ¦ Yo'lak bo'ylab pastga ikki qadam. ¦ Two steps down the corridor." },
        { code: '➡️ ⭐', html: step(5), say: "Последний шаг вправо — звезда! Программа сработала. ¦ O'ngga oxirgi qadam — yulduz! Dastur ishladi. ¦ One last step right — the star! The program worked." },
      ],
      notes: { min: 7 },
    },
    {
      type: 'show',
      stage: 2,
      title: "Лишняя команда ¦ Ortiqcha buyruq ¦ One command too many",
      chat: "какой блок лишний? номер ¦ qaysi blok ortiqcha? raqam ¦ which block is extra? a number",
      lang: 'text',
      css: MAZE_CSS,
      steps: [
        { code: '➡️ ➡️ ➡️ ⬇️ ⬇️', html: bug, say: "Здесь три шага вправо. Третий ведёт в стену — Кодди врезался! ¦ Bu yerda o'ngga uch qadam. Uchinchisi devorga olib boradi — Koddi urilib ketdi! ¦ Here there are three steps right. The third goes into the wall — Coddy bumped into it!" },
        { code: '➡️ ➡️ ⬇️ ⬇️ ➡️ ✓', html: step(5), say: "Убираем третий ➡️ и ставим шаг вправо в конец — путь снова верный. ¦ Uchinchi ➡️ ni olib tashlab, o'ngga qadamni oxiriga qo'yamiz — yo'l yana to'g'ri. ¦ Remove the third ➡️ and put a step right at the end — the path is right again." },
      ],
      takeaway: "Порядок блоков важен: те же команды в другом порядке ведут в стену. ¦ Bloklar tartibi muhim: o'sha buyruqlar boshqa tartibda devorga olib boradi. ¦ Block order matters: the same commands in another order lead into a wall.",
      notes: { min: 7 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: собери программу ¦ O'zing bajar: dasturni yig' ¦ Your turn: build the program",
      chat: "пиши стрелки по порядку: ➡️⬇️… ¦ strelkalarni tartib bilan yoz: ➡️⬇️… ¦ write the arrows in order: ➡️⬇️…",
      goal: "Кодди дошёл до звезды благодаря тебе! ¦ Koddi sen tufayli yulduzga yetdi! ¦ Coddy reached the star thanks to you!",
      items: [
        { title: "Звезда на 3 клетки правее Кодди. Какая программа? ¦ Yulduz Koddidan 3 katak o'ngda. Qaysi dastur? ¦ The star is 3 squares right of Coddy. Which program?", choices: ["➡️ ➡️ ➡️ ¦ ➡️ ➡️ ➡️ ¦ ➡️ ➡️ ➡️", "➡️ ⬇️ ➡️ ¦ ➡️ ⬇️ ➡️ ¦ ➡️ ⬇️ ➡️"], correct: 0, explain: "Три шага вправо — и звезда. ¦ O'ngga uch qadam — va yulduz. ¦ Three steps right and you're there." },
        { title: "Кодди упёрся в стену. Что делать? ¦ Koddi devorga tirab qoldi. Nima qilish kerak? ¦ Coddy hit a wall. What now?", choices: ["Найти лишний блок и убрать его ¦ Ortiqcha blokni topib olib tashlash ¦ Find the extra block and remove it", "Запустить ещё раз так же ¦ Xuddi shunday yana ishga tushirish ¦ Run it again unchanged"], correct: 0, explain: "Та же программа даст ту же ошибку. ¦ O'sha dastur o'sha xatoni beradi. ¦ The same program gives the same mistake." },
      ],
      notes: { say: ['Ментор рисует свой лабиринт 3×4 на экране, дети пишут программу стрелками в чат; проверяем одну вместе.'], min: 8 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: блоки по порядку ¦ Xulosa: bloklar tartib bilan ¦ Wrap-up: blocks in order",
      chat: "сколько блоков было в нашей программе? ¦ dasturimizda nechta blok bor edi? ¦ how many blocks were in our program?",
      answer: "Программа — это блоки-команды, которые робот выполняет по очереди. Кодди дошёл до звезды за 5 блоков: ➡️ ➡️ ⬇️ ⬇️ ➡️. Если поменять порядок или добавить лишний шаг, робот врежется в стену — тогда ищем лишний блок и исправляем. ¦ Dastur — robot navbat bilan bajaradigan buyruq-bloklar. Koddi yulduzga 5 ta blok bilan yetdi: ➡️ ➡️ ⬇️ ⬇️ ➡️. Tartibni o'zgartirsak yoki ortiqcha qadam qo'shsak, robot devorga uriladi — unda ortiqcha blokni topib tuzatamiz. ¦ A program is a stack of command blocks the robot runs in turn. Coddy reached the star in 5 blocks: ➡️ ➡️ ⬇️ ⬇️ ➡️. Change the order or add an extra step and the robot hits a wall — then we find the extra block and fix it.",
      icon: '🤖',
      badge: "Штурман Кодди ¦ Koddi shturmani ¦ Coddy's navigator",
      badgeSub: kick('blockly', 't', 1),
      homeworkTitle: HOME,
      homework: [
        "Нарисуй лабиринт 4×4 на бумаге в клетку и напиши программу стрелками. Пусть родные проверят её пальцем. ¦ Katakli qog'ozga 4×4 labirint chiz va strelkalar bilan dastur yoz. Yaqinlaring uni barmoq bilan tekshirsin. ¦ Draw a 4×4 maze on squared paper and write a program in arrows. Let your family check it with a finger.",
        "Нужны: бумага в клетку и карандаш. ¦ Kerak: katakli qog'oz va qalam. ¦ You need: squared paper and a pencil.",
      ],
      notes: { min: 5 },
    },
  ],
});
