import { kit } from '@engine/kit';
import { HOME, MAZE_CSS, ROUTE, maze, rkick } from './_kids';

/* Correct plan: ➡️ ➡️ ⬇️ ⬇️ ➡️ ➡️. The buggy plan has ➡️ in block 4 and crashes into the wall at (1,3). */
const MAP = ['...##', '##.##', '##..F'];
const GOOD = ['➡️', '➡️', '⬇️', '⬇️', '➡️', '➡️'];
const BAD = ['➡️', '➡️', '⬇️', '➡️', '⬇️', '➡️'];
const GC: [number, number][] = [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2], [2, 3], [2, 4]];
const k = (c: [number, number]) => `${c[0]},${c[1]}`;
const blocks = (plan: string[], mark: number, cls: string) => plan.map((t, i) => ({ t: `${i + 1} ${t}`, c: i === mark ? cls : '' }));
const bad = (n: number, crash = false) =>
  maze(MAP, GC[Math.min(n, 3)], GC.slice(0, Math.min(n, 3) + 1).map(k), crash ? ['1,3'] : [], blocks(BAD, crash ? 3 : n - 1, crash ? 'bad' : 'now'));
const good = (n: number) => maze(MAP, GC[n], GC.slice(0, n + 1).map(k), [], blocks(GOOD, n === 6 ? -1 : 3, 'now'));

export default kit({
  id: 'kids-t33',
  title: "Один поворот ломает маршрут ¦ Bitta burilish yo'lni buzadi ¦ One turn breaks the route",
  question: "На каком блоке Кодди сбился с пути? ¦ Koddi qaysi blokda yo'ldan adashdi? ¦ On which block did Coddy go wrong?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🐞',
      kicker: rkick('blockly'),
      title: "Почти верный план ¦ Deyarli to'g'ri reja ¦ An almost-right plan",
      chat: "как называют ошибку в программе? одно слово ¦ dasturdagi xato nima deb ataladi? bitta so'z ¦ what's a mistake in a program called? one word",
      lead: "У Кодди план из 6 блоков. Почти всё верно, но один блок перепутан — и Кодди врезается в стену. Ошибку в программе называют «баг», а её поиск — «отладка». Сначала предскажем, где сбой, потом проверим запуском. ¦ Koddining 6 blokdan iborat rejasi bor. Deyarli hammasi to'g'ri, lekin bitta blok adashtirilgan — va Koddi devorga uriladi. Dasturdagi xato «bag», uni qidirish esa «sozlash» deyiladi. Avval nosozlik qayerdaligini bashorat qilamiz, keyin ishga tushirib tekshiramiz. ¦ Coddy has a 6-block plan. Almost everything is right, but one block is wrong — and Coddy hits a wall. A mistake in a program is a “bug”, and finding it is “debugging”. First we predict where it breaks, then run it to check.",
      facts: [
        "Повторяем уроки 4–6 ¦ 4–6-darslarni takrorlaymiz ¦ We revise lessons 4–6",
        "Нужна: бумага со стрелками ¦ Kerak: strelkali qog'oz ¦ You need: paper with arrows",
      ],
      notes: { min: 3 },
    },
    {
      type: 'predict',
      stage: 1,
      title: "Предскажи: номер плохого блока ¦ Bashorat qil: yomon blok raqami ¦ Predict: the bad block's number",
      chat: "пиши номер блока ¦ blok raqamini yoz ¦ write the block number",
      label: "Блок ¦ Blok ¦ Block",
      min: 1,
      max: 6,
      answer: 4,
      result: "Блок 4! План: ➡️ ➡️ ⬇️ ➡️ ⬇️ ➡️. После шага вниз справа стена, а блок 4 ведёт вправо. ¦ 4-blok! Reja: ➡️ ➡️ ⬇️ ➡️ ⬇️ ➡️. Pastga qadamdan keyin o'ngda devor, 4-blok esa o'ngga olib boradi. ¦ Block 4! The plan: ➡️ ➡️ ⬇️ ➡️ ⬇️ ➡️. After the step down there's a wall on the right, but block 4 goes right.",
      notes: { say: ['Сначала показываем план и лабиринт на следующем слайде без запуска, даём 1 минуту подумать.'], min: 5 },
    },
    {
      type: 'show',
      stage: 2,
      title: "Запускаем и чиним ¦ Ishga tushiramiz va tuzatamiz ¦ Run it and fix it",
      chat: "на какую стрелку заменить блок 4? ¦ 4-blokni qaysi strelkaga almashtirish kerak? ¦ which arrow should replace block 4?",
      lang: 'text',
      css: MAZE_CSS,
      steps: [
        { code: '1 ➡️  2 ➡️  3 ⬇️', html: bad(3), say: "Первые три блока работают: два шага вправо и шаг вниз. ¦ Birinchi uchta blok ishlaydi: o'ngga ikki qadam va pastga bir qadam. ¦ The first three blocks work: two steps right and one step down." },
        { code: '4 ➡️ 💥', html: bad(4, true), say: "Блок 4 — вправо… стена! Вот где баг. ¦ 4-blok — o'ngga… devor! Bag mana shu yerda. ¦ Block 4 — right… a wall! There's the bug." },
        { code: '4 ⬇️ ✓', html: good(3), say: "Меняем блок 4 на ⬇️. Остальные блоки не трогаем! ¦ 4-blokni ⬇️ ga almashtiramiz. Qolgan bloklarga tegmaymiz! ¦ We change block 4 to ⬇️ and leave the other blocks alone!" },
        { code: '➡️ ➡️ ⬇️ ⬇️ ➡️ ➡️ ⭐', html: good(6), say: "Запускаем снова — Кодди у звезды. Отладка закончена! ¦ Yana ishga tushiramiz — Koddi yulduz yonida. Sozlash tugadi! ¦ Run it again — Coddy reaches the star. Debugging done!" },
      ],
      takeaway: "Ищем первый блок, после которого Кодди пошёл не туда, и меняем только его. ¦ Koddi noto'g'ri yurgan birinchi blokni qidiramiz va faqat uni o'zgartiramiz. ¦ Find the first block where Coddy goes wrong and change only that one.",
      notes: { min: 9 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: отладчик ¦ O'zing bajar: sozlovchi ¦ Your turn: the debugger",
      chat: "номер ответа в чат ¦ javob raqamini chatga ¦ answer number in the chat",
      goal: "Ты настоящий охотник за багами! ¦ Sen haqiqiy bag ovchisisan! ¦ You're a real bug hunter!",
      items: [
        { title: "Кодди врезался после блока 2. Где баг? ¦ Koddi 2-blokdan keyin urildi. Bag qayerda? ¦ Coddy crashed after block 2. Where's the bug?", choices: ["Скорее всего, в блоке 3 ¦ Ehtimol, 3-blokda ¦ Most likely in block 3", "В блоке 1 ¦ 1-blokda ¦ In block 1"], correct: 0, explain: "Блоки 1 и 2 сработали — проверяем следующий. ¦ 1 va 2-bloklar ishladi — keyingisini tekshiramiz. ¦ Blocks 1 and 2 worked — check the next one." },
        { title: "Нашли баг. Что делать дальше? ¦ Bagni topdik. Keyin nima qilamiz? ¦ We found the bug. What next?", choices: ["Заменить блок и запустить снова ¦ Blokni almashtirib, yana ishga tushirish ¦ Replace the block and run again", "Стереть всю программу ¦ Butun dasturni o'chirish ¦ Delete the whole program"], correct: 0, explain: "Чиним одно место и проверяем запуском. ¦ Bitta joyni tuzatib, ishga tushirib tekshiramiz. ¦ Fix one spot, then test it by running." },
      ],
      notes: { min: 8 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: найди, замени, проверь ¦ Xulosa: top, almashtir, tekshir ¦ Wrap-up: find, replace, check",
      chat: "какой блок был багом в нашем плане? номер ¦ rejamizda qaysi blok bag edi? raqam ¦ which block was the bug in our plan? a number",
      answer: "В плане Кодди был один неверный блок — номер 4: стрелка вправо вместо вниз. Отладка — это три шага: найти первый блок, где робот пошёл не туда, заменить только его и снова запустить программу. Так работают все программисты. ¦ Koddi rejasida bitta noto'g'ri blok bor edi — 4-raqam: pastga o'rniga o'ngga strelka. Sozlash — uch qadam: robot noto'g'ri yurgan birinchi blokni topish, faqat uni almashtirish va dasturni yana ishga tushirish. Barcha dasturchilar shunday ishlaydi. ¦ Coddy's plan had one wrong block — number 4: an arrow right instead of down. Debugging is three steps: find the first block where the robot went wrong, replace only that one, and run the program again. That's how every programmer works.",
      icon: '🐞',
      badge: "Охотник за багами ¦ Bag ovchisi ¦ Bug hunter",
      badgeSub: rkick('blockly'),
      homeworkTitle: HOME,
      homework: [
        "Нарисуй лабиринт и план из стрелок с одной ошибкой. Попроси родных найти баг и исправить его. ¦ Labirint va bitta xatoli strelkalar rejasini chiz. Yaqinlaringdan bagni topib tuzatishni so'ra. ¦ Draw a maze and an arrow plan with one mistake. Ask your family to find and fix the bug.",
        "Нужна: бумага со стрелками. ¦ Kerak: strelkali qog'oz. ¦ You need: paper with arrows.",
      ],
      notes: { min: 5 },
    },
  ],
});
