import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

// The classic 7 pieces inside a 4×4 square: [points, colour, offset when "exploded"]
const P: [string, string, [number, number]][] = [
  ['0,0 4,0 2,2', '#fa4f28', [0, -0.6]],
  ['0,0 2,2 0,4', '#5b6ef5', [-0.6, 0]],
  ['2,4 4,2 4,4', '#0cd678', [0.5, 0.5]],
  ['2,2 3,1 4,2 3,3', '#ffb000', [0.5, -0.1]],
  ['3,1 4,0 4,2', '#a855f7', [0.7, -0.5]],
  ['0,4 1,3 3,3 2,4', '#0fa38e', [-0.4, 0.6]],
  ['2,2 3,3 1,3', '#ff6bb5', [0, 0.3]],
];
const CSS = `.wrap{display:grid;place-items:center;height:100%;font-family:Inter,system-ui,sans-serif}`;
const svg = (spread: number) =>
  `<div class="wrap"><svg viewBox="-1.2 -1.2 6.4 6.4" width="440">${P.map(
    ([pts, col, [dx, dy]]) => `<polygon points="${pts}" fill="${col}" stroke="#fff" stroke-width=".06" stroke-linejoin="round" transform="translate(${dx * spread} ${dy * spread})"/>`,
  ).join('')}</svg></div>`;

export default kit({
  id: 'kids-g13',
  title: "Танграм: семь кусочков — сто фигур ¦ Tangram: yetti bo'lak — yuzta shakl ¦ Tangram: seven pieces, a hundred shapes",
  question: "Можно ли из одного квадрата сложить кота, дом и лодку? ¦ Bitta kvadratdan mushuk, uy va qayiq yasasa bo'ladimi? ¦ Can one square become a cat, a house and a boat?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🔷',
      kicker: kick('logic', 'g', 5),
      title: "Головоломка из квадрата ¦ Kvadratdan boshqotirma ¦ A puzzle from a square",
      chat: "сколько углов у квадрата? число ¦ kvadratning nechta burchagi bor? son ¦ how many corners does a square have? a number",
      lead: "Танграм — древняя китайская головоломка. Квадрат разрезают на 7 частей: 5 треугольников, квадратик и параллелограмм. Из них можно сложить сотни фигур! ¦ Tangram — qadimiy xitoy boshqotirmasi. Kvadrat 7 bo'lakka kesiladi: 5 ta uchburchak, kvadratcha va parallelogramm. Ulardan yuzlab shakl yasash mumkin! ¦ Tangram is an ancient Chinese puzzle. A square is cut into 7 pieces: 5 triangles, a small square and a parallelogram. You can make hundreds of shapes from them!",
      facts: [
        "Нужны: квадрат бумаги и ножницы ¦ Kerak: kvadrat qog'oz va qaychi ¦ You need: a paper square and scissors",
        "Ножницы — только вместе со взрослым ¦ Qaychi — faqat kattalar bilan ¦ Scissors only with a grown-up",
      ],
      notes: { say: ['Ножницы — только со взрослым. Можно заранее распечатать готовые части.'], min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Семь кусочков одного квадрата ¦ Bitta kvadratning yettita bo'lagi ¦ Seven pieces of one square",
      chat: "сколько треугольников ты видишь? число ¦ nechta uchburchakni ko'ryapsan? son ¦ how many triangles can you see? a number",
      lang: 'text',
      css: CSS,
      steps: [
        { code: 'square', html: svg(0), say: "Вот квадрат, разрезанный на 7 частей. ¦ Mana 7 bo'lakka kesilgan kvadrat. ¦ Here's a square cut into 7 pieces." },
        { code: '7 pieces', html: svg(1), say: "Раздвигаем: 2 больших треугольника, средний, 2 маленьких, квадратик и параллелограмм. ¦ Ajratamiz: 2 ta katta uchburchak, o'rta, 2 ta kichik, kvadratcha va parallelogramm. ¦ Pull them apart: 2 big triangles, a medium one, 2 small ones, a square and a parallelogram." },
        { code: 'square again', html: svg(0), say: "И собираем обратно. Это первая и самая трудная фигура! ¦ Va qayta yig'amiz. Bu birinchi va eng qiyin shakl! ¦ And put them back. That's the first and hardest shape!" },
      ],
      notes: { min: 6 },
    },
    {
      type: 'cards',
      stage: 2,
      title: "Собери силуэт ¦ Siluetni yig' ¦ Build the silhouette",
      chat: "собрал? пиши «готово» ¦ yig'dingmi? «tayyor» deb yoz ¦ done? write “ready”",
      cards: [
        { icon: '🐱', front: "Кот ¦ Mushuk ¦ A cat", back: "Голова — квадратик, уши — маленькие треугольники ¦ Boshi — kvadratcha, quloqlari — kichik uchburchaklar ¦ Head: the square; ears: small triangles" },
        { icon: '🏠', front: "Дом ¦ Uy ¦ A house", back: "Крыша — большой треугольник ¦ Tom — katta uchburchak ¦ Roof: a big triangle" },
        { icon: '⛵', front: "Лодка ¦ Qayiq ¦ A boat", back: "Паруса — два больших треугольника ¦ Yelkanlar — ikkita katta uchburchak ¦ Sails: two big triangles" },
      ],
      takeaway: "Правило танграма: используй все 7 частей и не клади их друг на друга. ¦ Tangram qoidasi: barcha 7 bo'lakni ishlat va ularni ustma-ust qo'yma. ¦ The tangram rule: use all 7 pieces and don't overlap them.",
      notes: { say: ['Ментор показывает силуэты на слайдах или листе; дети собирают у себя и пишут «готово».'], min: 9 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: придумай свою фигуру ¦ O'zing bajar: o'z shaklingni o'ylab top ¦ Your turn: invent your own shape",
      chat: "как называется твоя фигура? одно слово ¦ shaklingning nomi nima? bitta so'z ¦ what's your shape called? one word",
      goal: "Ты настоящий мастер танграма! ¦ Sen haqiqiy tangram ustasisan! ¦ You're a real tangram master!",
      items: [
        { title: "Сколько частей в танграме? ¦ Tangramda nechta bo'lak bor? ¦ How many pieces in a tangram?", choices: ['7', '5'], correct: 0, explain: "5 треугольников, квадратик и параллелограмм. ¦ 5 ta uchburchak, kvadratcha va parallelogramm. ¦ 5 triangles, a square and a parallelogram." },
        { title: "Можно ли класть части друг на друга? ¦ Bo'laklarni ustma-ust qo'ysa bo'ladimi? ¦ Can pieces overlap?", choices: ["Нет ¦ Yo'q ¦ No", "Да ¦ Ha ¦ Yes"], correct: 0, explain: "Все части лежат рядом. ¦ Barcha bo'laklar yonma-yon yotadi. ¦ All pieces lie side by side." },
      ],
      notes: { min: 7 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: из одного — многое ¦ Xulosa: bittadan — ko'p narsa ¦ Wrap-up: one square, many shapes",
      chat: "какую фигуру сложишь дома? одно слово ¦ uyda qanday shakl yasaysan? bitta so'z ¦ what shape will you build at home? one word",
      answer: "Танграм — квадрат из 7 частей: 5 треугольников, квадратика и параллелограмма. Используя все части и не накладывая их, можно сложить кота, дом, лодку и сотни других фигур. Это тренирует пространственное мышление — умение видеть форму в голове. ¦ Tangram — 7 bo'lakli kvadrat: 5 ta uchburchak, kvadratcha va parallelogramm. Barcha bo'laklarni ustma-ust qo'ymay ishlatib, mushuk, uy, qayiq va yuzlab boshqa shakllarni yasash mumkin. Bu fazoviy tafakkurni — shaklni xayolda ko'ra olishni mashq qildiradi. ¦ A tangram is a square in 7 pieces: 5 triangles, a square and a parallelogram. Using all of them without overlapping, you can make a cat, a house, a boat and hundreds more. It trains spatial thinking — seeing shapes in your head.",
      icon: '🔷',
      badge: "Мастер танграма ¦ Tangram ustasi ¦ Tangram master",
      badgeSub: kick('logic', 'g', 5),
      homeworkTitle: HOME,
      homework: [
        "Сложи из танграма свою фигуру, обведи её контур и загадай силуэт родным. ¦ Tangramdan o'z shaklingni yasa, chetini chizib chiq va siluetni yaqinlaringga top deb ber. ¦ Build your own shape, trace its outline and give the silhouette to your family.",
        "Нужны: квадрат бумаги, ножницы (со взрослым). ¦ Kerak: kvadrat qog'oz, qaychi (kattalar bilan). ¦ You need: a paper square, scissors (with a grown-up).",
      ],
      notes: { min: 5 },
    },
  ],
});
