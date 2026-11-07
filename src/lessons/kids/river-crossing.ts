import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

// Banks: left x≈14–30 %, right x≈70–86 %, boat in the middle
type P = [number, number];
const L: Record<'w' | 'g' | 'c' | 'f' | 'b', P> = { w: [14, 30], g: [14, 52], c: [14, 74], f: [30, 52], b: [38, 60] };
const R: Record<'w' | 'g' | 'c' | 'f' | 'b', P> = { w: [86, 30], g: [86, 52], c: [86, 74], f: [70, 52], b: [62, 60] };

export default kit({
  id: 'kids-g12',
  title: "Волк, коза и капуста: задачи на переправу ¦ Bo'ri, echki va karam: daryodan o'tish masalalari ¦ Wolf, goat and cabbage: river-crossing puzzles",
  question: "Как перевезти всех и никого не потерять? ¦ Hammani qanday qilib birortasini ham yo'qotmay o'tkazish mumkin? ¦ How do you get everyone across without losing anyone?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🛶',
      kicker: kick('logic', 'g', 4),
      title: "Старинная задача про лодку ¦ Qayiq haqida qadimiy masala ¦ An old puzzle about a boat",
      chat: "ты плавал на лодке? ⛵ или 🙅 ¦ qayiqda suzganmisan? ⛵ yoki 🙅 ¦ have you been in a boat? ⛵ or 🙅",
      lead: "Фермеру нужно перевезти через реку волка, козу и капусту. В лодку помещается только фермер и ещё кто-то один. Если оставить без фермера волка с козой — волк съест козу. Если козу с капустой — коза съест капусту. ¦ Fermer daryodan bo'ri, echki va karamni o'tkazishi kerak. Qayiqqa faqat fermer va yana bittasi sig'adi. Fermersiz bo'ri bilan echkini qoldirsa — bo'ri echkini yeydi. Echki bilan karamni qoldirsa — echki karamni yeydi. ¦ A farmer must take a wolf, a goat and a cabbage across a river. The boat holds the farmer and one more. Leave the wolf with the goat alone and the wolf eats the goat. Leave the goat with the cabbage and the goat eats the cabbage.",
      facts: [
        "Этой задаче больше 1000 лет ¦ Bu masalaning yoshi 1000 yildan oshiq ¦ This puzzle is over 1,000 years old",
        "Нужны: 4 бумажные фигурки ¦ Kerak: 4 ta qog'oz shakl ¦ You need: 4 paper figures",
      ],
      notes: { min: 3 },
    },
    {
      type: 'poll',
      stage: 1,
      title: "Кого фермер повезёт первым? ¦ Fermer birinchi kimni olib o'tadi? ¦ Who does the farmer take first?",
      chat: "пиши: «волк», «коза» или «капуста» ¦ yoz: «bo'ri», «echki» yoki «karam» ¦ write: “wolf”, “goat” or “cabbage”",
      options: [
        { label: "🐺 Волка ¦ 🐺 Bo'rini ¦ 🐺 The wolf" },
        { label: "🐐 Козу ¦ 🐐 Echkini ¦ 🐐 The goat" },
        { label: "🥬 Капусту ¦ 🥬 Karamni ¦ 🥬 The cabbage" },
      ],
      correct: 1,
      result: "Козу! Волк капусту не ест, их можно оставить вместе. ¦ Echkini! Bo'ri karam yemaydi, ularni birga qoldirish mumkin. ¦ The goat! The wolf doesn't eat cabbage, so they can stay together.",
      notes: { say: ['Проверяем каждое предложение чата: кто остаётся на берегу без фермера?'], min: 5 },
    },
    {
      type: 'animate',
      stage: 2,
      title: "Переправа за 7 поездок ¦ 7 qatnovda o'tish ¦ Across in 7 trips",
      chat: "что фермер сделает на 4-м шаге? ¦ fermer 4-qadamda nima qiladi? ¦ what does the farmer do on step 4?",
      actors: [
        { id: 'f', icon: '🧑‍🌾', label: "Фермер ¦ Fermer ¦ Farmer" },
        { id: 'w', icon: '🐺' },
        { id: 'g', icon: '🐐' },
        { id: 'c', icon: '🥬' },
        { id: 'b', icon: '🛶' },
      ],
      steps: [
        { say: "Все на левом берегу. ¦ Hamma chap qirg'oqda. ¦ Everyone's on the left bank.", at: { f: L.f, w: L.w, g: L.g, c: L.c, b: L.b } },
        { say: "1 · Везём козу направо. ¦ 1 · Echkini o'ngga olib o'tamiz. ¦ 1 · Take the goat across.", at: { f: R.f, g: R.g, b: R.b } },
        { say: "2 · Фермер возвращается один. ¦ 2 · Fermer yolg'iz qaytadi. ¦ 2 · The farmer returns alone.", at: { f: L.f, b: L.b } },
        { say: "3 · Везём волка направо… ¦ 3 · Bo'rini o'ngga olib o'tamiz… ¦ 3 · Take the wolf across…", at: { f: R.f, w: R.w, b: R.b } },
        { say: "4 · …и забираем козу обратно! Иначе волк её съест. ¦ 4 · …va echkini qaytarib olamiz! Aks holda bo'ri uni yeydi. ¦ 4 · …and bring the goat back! Otherwise the wolf eats her.", at: { f: L.f, g: L.g, b: L.b }, pulse: ['g'] },
        { say: "5 · Везём капусту к волку. ¦ 5 · Karamni bo'rining yoniga olib o'tamiz. ¦ 5 · Take the cabbage over to the wolf.", at: { f: R.f, c: R.c, b: R.b } },
        { say: "6 · Фермер возвращается один. ¦ 6 · Fermer yolg'iz qaytadi. ¦ 6 · The farmer returns alone.", at: { f: L.f, b: L.b } },
        { say: "7 · Везём козу. Все на месте и целы! ¦ 7 · Echkini olib o'tamiz. Hamma joyida va sog'-salomat! ¦ 7 · Take the goat. Everyone's across and safe!", at: { f: R.f, g: R.g, b: R.b }, pulse: ['w', 'g', 'c'] },
      ],
      takeaway: "Хитрый ход — вернуть козу назад. Иногда шаг назад помогает победить. ¦ Ayyorona yurish — echkini qaytarish. Ba'zan orqaga bir qadam g'alabaga yordam beradi. ¦ The clever move is bringing the goat back. Sometimes a step back helps you win.",
      notes: { min: 10 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: кот, мышка и сыр ¦ O'zing bajar: mushuk, sichqon va pishloq ¦ Your turn: cat, mouse and cheese",
      chat: "первый ход в чат ¦ birinchi yurish chatga ¦ your first move in the chat",
      goal: "Ты умеешь планировать на несколько ходов вперёд! ¦ Bir necha yurish oldinni rejalay olasan! ¦ You can plan several moves ahead!",
      items: [
        { title: "Кот ест мышку, мышка ест сыр. Кого везём первым? ¦ Mushuk sichqonni, sichqon pishloqni yeydi. Birinchi kimni olib o'tamiz? ¦ The cat eats the mouse, the mouse eats the cheese. Who goes first?", choices: ["🐭 Мышку ¦ 🐭 Sichqonni ¦ 🐭 The mouse", "🐱 Кота ¦ 🐱 Mushukni ¦ 🐱 The cat"], correct: 0, explain: "Мышка — как коза: она в середине цепочки. ¦ Sichqon echki kabi: u zanjirning o'rtasida. ¦ The mouse is like the goat: it's in the middle of the chain." },
        { title: "Сколько поездок нужно? ¦ Nechta qatnov kerak? ¦ How many trips are needed?", choices: ['7', '3'], correct: 0, explain: "Как в задаче про волка: 7. ¦ Bo'ri haqidagi masaladagidek: 7 ta. ¦ Same as the wolf puzzle: 7." },
      ],
      notes: { say: ['Дети двигают бумажные фигурки на столе и пишут ходы в чат.'], min: 9 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: план на несколько ходов ¦ Xulosa: bir necha yurishlik reja ¦ Wrap-up: a plan several moves ahead",
      chat: "какой ход был самым хитрым? номер ¦ qaysi yurish eng ayyorona edi? raqam ¦ which move was cleverest? a number",
      answer: "Сначала везём козу, потому что волк не ест капусту. Потом везём волка и забираем козу обратно, отвозим капусту к волку и в конце снова козу — всего 7 поездок. Главная хитрость — иногда нужно вернуться на шаг назад. ¦ Avval echkini olib o'tamiz, chunki bo'ri karam yemaydi. Keyin bo'rini olib o'tamiz va echkini qaytarib olamiz, karamni bo'rining yoniga olib boramiz va oxirida yana echkini — jami 7 qatnov. Asosiy hiyla — ba'zan bir qadam orqaga qaytish kerak. ¦ Take the goat first, since the wolf won't eat the cabbage. Then take the wolf and bring the goat back, take the cabbage to the wolf and finally the goat again — 7 trips in all. The key trick: sometimes you need a step back.",
      icon: '🛶',
      badge: "Капитан переправы ¦ O'tish kapitani ¦ Crossing captain",
      badgeSub: kick('logic', 'g', 4),
      homeworkTitle: HOME,
      homework: [
        "Покажи родным задачу с фигурками и проверь, решат ли они её за 7 поездок. ¦ Yaqinlaringga masalani shakllar bilan ko'rsat va ular 7 qatnovda yechishadimi, tekshir. ¦ Show your family the puzzle with the figures and see if they solve it in 7 trips.",
        "Нужны: 4 бумажные фигурки. ¦ Kerak: 4 ta qog'oz shakl. ¦ You need: 4 paper figures.",
      ],
      notes: { min: 3 },
    },
  ],
});
