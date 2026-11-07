import { kit } from '@engine/kit';
import { HOME, MAZE_CSS, ROUTE, kick, maze } from './_kids';

/* A straight corridor: 6 steps right */
const LINE = ['......F'];
const lineAt = (n: number, prog: { t: string; c?: string }[]) =>
  maze(LINE, [0, n], Array.from({ length: n + 1 }, (_, i) => `0,${i}`), [], prog);
const LONG = Array.from({ length: 6 }, () => ({ t: '➡️' }));
const LOOP = [{ t: '🔁 6', c: 'r' }, { t: '➡️', c: 'in' }];
/* A staircase: repeat 3 × (⬇️ ➡️) */
const STAIRS = ['.###', '..##', '#..#', '##.F'];
const SC: [number, number][] = [[0, 0], [1, 0], [1, 1], [2, 1], [2, 2], [3, 2], [3, 3]];
const stairs = (n: number) =>
  maze(STAIRS, SC[n], SC.slice(0, n + 1).map((c) => `${c[0]},${c[1]}`), [], [
    { t: '🔁 3', c: 'r' },
    { t: '⬇️', c: 'in' },
    { t: '➡️', c: 'in' },
  ]);

const LONG_TXT = `➡️
➡️
➡️
➡️
➡️
➡️`;
const LOOP_TXT = `🔁 6
  ➡️`;

export default kit({
  id: 'kids-t22',
  title: "Короткая программа: блок «Повторить» ¦ Qisqa dastur: «Takrorlash» bloki ¦ A short program: the Repeat block",
  question: "Как пройти длинный коридор двумя блоками? ¦ Uzun yo'lakdan ikki blok bilan qanday o'tish mumkin? ¦ How do you cross a long corridor with two blocks?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🔁',
      kicker: kick('blockly', 't', 2),
      title: "Кодди устал от длинных программ ¦ Koddi uzun dasturlardan charchadi ¦ Coddy is tired of long programs",
      chat: "сколько раз ты повторяешь что-то каждый день? пример ¦ har kuni nimanidir necha marta takrorlaysan? misol ¦ what do you repeat every day? an example",
      lead: "Помнишь танец «повтори 3 раза»? В Blockly есть такой же синий блок — «Повторить». Внутрь кладём команды, а число говорит, сколько раз их сделать. Программа становится короче! ¦ «3 marta takrorla» raqsini eslaysanmi? Blockly'da xuddi shunday ko'k blok bor — «Takrorlash». Ichiga buyruqlarni qo'yamiz, son esa ularni necha marta bajarishni aytadi. Dastur qisqaradi! ¦ Remember the “repeat 3 times” dance? Blockly has the same blue block — Repeat. We put commands inside, and the number says how many times to run them. The program gets shorter!",
      facts: [
        "Повторяем уроки 16–18 ¦ 16–18-darslarni takrorlaymiz ¦ We revise lessons 16–18",
        "🔁 = блок повторения ¦ 🔁 = takrorlash bloki ¦ 🔁 = the repeat block",
      ],
      notes: { min: 3 },
    },
    {
      type: 'compare',
      stage: 1,
      title: "6 блоков или 2? ¦ 6 blokmi yoki 2? ¦ 6 blocks or 2?",
      chat: "какая программа короче? «длинная» или «цикл» ¦ qaysi dastur qisqaroq? «uzun» yoki «sikl» ¦ which program is shorter? “long” or “loop”",
      left: { label: "Без повтора ¦ Takrorlashsiz ¦ Without repeat", icon: '📜', code: LONG_TXT, lang: 'text' },
      right: { label: "С блоком «Повторить» ¦ «Takrorlash» bloki bilan ¦ With the Repeat block", icon: '🔁', code: LOOP_TXT, lang: 'text' },
      verdict: "Кодди пройдёт одинаково, но вторую программу легче читать и менять. ¦ Koddi bir xil yuradi, lekin ikkinchi dasturni o'qish va o'zgartirish osonroq. ¦ Coddy walks the same, but the second program is easier to read and change.",
      notes: { min: 5 },
    },
    {
      type: 'show',
      stage: 2,
      title: "Коридор и лестница ¦ Yo'lak va zinapoya ¦ A corridor and a staircase",
      chat: "сколько раз повторить ⬇️ ➡️? число ¦ ⬇️ ➡️ ni necha marta takrorlash kerak? son ¦ how many times to repeat ⬇️ ➡️? a number",
      lang: 'text',
      css: MAZE_CSS,
      steps: [
        { code: '🔁 6: ➡️', html: lineAt(0, LOOP), say: "Длинный коридор. Блок «Повторить 6 раз», внутри шаг ➡️. ¦ Uzun yo'lak. «6 marta takrorla» bloki, ichida ➡️ qadami. ¦ A long corridor. A “repeat 6 times” block with a ➡️ step inside." },
        { code: '🔁 6: ➡️ ✓', html: lineAt(6, LOOP), say: "Шесть повторов — и Кодди у звезды. Два блока вместо шести! ¦ Olti takror — va Koddi yulduz yonida. Olti o'rniga ikki blok! ¦ Six repeats and Coddy is at the star. Two blocks instead of six!" },
        { code: '⬇️ ➡️ ?', html: stairs(2), say: "А теперь лестница. Видишь узор? Вниз, вправо… и снова вниз, вправо. ¦ Endi zinapoya. Naqshni ko'ryapsanmi? Pastga, o'ngga… va yana pastga, o'ngga. ¦ Now a staircase. See the pattern? Down, right… then down, right again." },
        { code: '🔁 3: ⬇️ ➡️ ✓', html: stairs(6), say: "Узор ⬇️ ➡️ повторяется 3 раза. Три блока — и лестница пройдена! ¦ ⬇️ ➡️ naqshi 3 marta takrorlanadi. Uchta blok — va zinapoyadan o'tildi! ¦ The ⬇️ ➡️ pattern repeats 3 times. Three blocks and the staircase is done!" },
      ],
      takeaway: "Ищи повторяющийся кусочек — его можно положить в блок «Повторить». ¦ Takrorlanadigan bo'lakni qidir — uni «Takrorlash» blokiga solish mumkin. ¦ Look for the repeating piece — it goes inside the Repeat block.",
      notes: { min: 9 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: сократи программу ¦ O'zing bajar: dasturni qisqartir ¦ Your turn: shorten the program",
      chat: "номер ответа в чат ¦ javob raqamini chatga ¦ answer number in the chat",
      goal: "Ты пишешь короткие и умные программы! ¦ Sen qisqa va aqlli dasturlar yozasan! ¦ You write short, smart programs!",
      items: [
        { title: "Программа: ⬇️ ⬇️ ⬇️ ⬇️. Как короче? ¦ Dastur: ⬇️ ⬇️ ⬇️ ⬇️. Qanday qisqaroq? ¦ Program: ⬇️ ⬇️ ⬇️ ⬇️. How to shorten it?", choices: ["🔁 4: ⬇️ ¦ 🔁 4: ⬇️ ¦ 🔁 4: ⬇️", "🔁 2: ⬇️ ¦ 🔁 2: ⬇️ ¦ 🔁 2: ⬇️"], correct: 0, explain: "Четыре одинаковых шага — повтор 4 раза. ¦ To'rtta bir xil qadam — 4 marta takror. ¦ Four identical steps — repeat 4 times." },
        { title: "Программа: ➡️ ⬇️ ➡️ ⬇️. Что внутри повтора? ¦ Dastur: ➡️ ⬇️ ➡️ ⬇️. Takror ichida nima? ¦ Program: ➡️ ⬇️ ➡️ ⬇️. What goes inside the repeat?", choices: ["➡️ ⬇️, повторить 2 раза ¦ ➡️ ⬇️, 2 marta takrorlash ¦ ➡️ ⬇️, repeated 2 times", "Только ➡️ ¦ Faqat ➡️ ¦ Only ➡️"], correct: 0, explain: "Повторяется пара «вправо, вниз». ¦ «O'ngga, pastga» jufti takrorlanadi. ¦ The “right, down” pair repeats." },
      ],
      notes: { min: 8 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: повторяй, а не переписывай ¦ Xulosa: qayta yozma, takrorla ¦ Wrap-up: repeat, don't rewrite",
      chat: "что бы ты положил в блок «Повторить»? ¦ «Takrorlash» blokiga nimani solarding? ¦ what would you put inside a Repeat block?",
      answer: "Когда команды повторяются, их кладут в блок «Повторить» и пишут число раз. Коридор из 6 шагов — это 2 блока: «🔁 6: ➡️». Лестница — «🔁 3: ⬇️ ➡️». Программа становится короче, а ошибиться в ней сложнее. ¦ Buyruqlar takrorlansa, ularni «Takrorlash» blokiga solib, necha marta ekanini yozishadi. 6 qadamli yo'lak — 2 ta blok: «🔁 6: ➡️». Zinapoya — «🔁 3: ⬇️ ➡️». Dastur qisqaradi, unda xato qilish esa qiyinroq. ¦ When commands repeat, put them in a Repeat block and write the count. A 6-step corridor is 2 blocks: “🔁 6: ➡️”. The staircase is “🔁 3: ⬇️ ➡️”. The program gets shorter and harder to get wrong.",
      icon: '🔁',
      badge: "Мастер повторов ¦ Takrorlash ustasi ¦ Loop master",
      badgeSub: kick('blockly', 't', 2),
      homeworkTitle: HOME,
      homework: [
        "Нарисуй лестницу из 5 ступенек в клетку и запиши программу с блоком «Повторить». ¦ Katakli qog'ozga 5 pog'onali zinapoya chiz va «Takrorlash» bloki bilan dastur yoz. ¦ Draw a 5-step staircase on squared paper and write a program with a Repeat block.",
        "Нужны: бумага в клетку и карандаш. ¦ Kerak: katakli qog'oz va qalam. ¦ You need: squared paper and a pencil.",
      ],
      notes: { min: 5 },
    },
  ],
});
