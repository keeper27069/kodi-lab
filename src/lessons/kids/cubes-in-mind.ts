import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

const CSS = `.wrap{display:flex;gap:34px;align-items:center;justify-content:center;height:100%;font-family:Inter,system-ui,sans-serif}
.opt{display:flex;flex-direction:column;align-items:center;gap:10px;padding:14px;border-radius:16px;background:#fff;border:3px solid #e1e4ea}
.opt.on{border-color:#0cd678;background:#e9fbf2}.opt.no{border-color:#d80000;background:#fff1f1}
.opt b{font:800 22px Inter}
.g{display:grid;gap:3px}
.g i{width:40px;height:40px;border-radius:5px}
.g i.f{background:#fa4f28}.g i.e{background:transparent}
.iso{font-size:0}`;
// a little 3D block made of 4 cubes in an L, drawn as isometric SVG
const ISO = `<svg class="iso" viewBox="0 0 220 200" width="260">${[
  [0, 0, 0], [1, 0, 0], [0, 1, 0], [0, 0, 1],
]
  .map(([x, y, z]) => {
    const ox = 110 + (x - y) * 40;
    const oy = 120 + (x + y) * 22 - z * 46;
    return `<g transform="translate(${ox} ${oy})"><path d="M0 0 L40 -22 L0 -44 L-40 -22Z" fill="#ffb39f"/><path d="M-40 -22 L0 0 L0 46 L-40 24Z" fill="#fa4f28"/><path d="M40 -22 L0 0 L0 46 L40 24Z" fill="#d53a17"/></g>`;
  })
  .join('')}</svg>`;
const grid = (rows: string[]) =>
  `<div class="g" style="grid-template-columns:repeat(${rows[0].length},40px)">${rows.map((r) => r.split('').map((c) => `<i class="${c === '#' ? 'f' : 'e'}"></i>`).join('')).join('')}</div>`;
const tops = (mark: number) =>
  `<div class="wrap">${ISO}${[['##', '#.'], ['###'], ['##', '##']]
    .map((g, i) => `<div class="opt ${mark === i ? 'on' : mark >= 0 ? '' : ''}">${grid(g)}<b>${i + 1}</b></div>`)
    .join('')}</div>`;
const NETS: string[][] = [
  ['.#..', '####', '.#..'],
  ['######'],
  ['###', '###'],
];
const nets = (reveal: boolean) =>
  `<div class="wrap">${NETS.map((g, i) => `<div class="opt ${reveal ? (i === 0 ? 'on' : 'no') : ''}">${grid(g)}<b>${i + 1}${reveal ? (i === 0 ? ' ✓' : ' ✗') : ''}</b></div>`).join('')}</div>`;

export default kit({
  id: 'kids-t15',
  title: "Кубики в голове: вид сверху, сбоку и развёртка ¦ Boshdagi kubiklar: yuqoridan, yondan ko'rinish va yoyilma ¦ Cubes in your head: top view, side view and net",
  question: "Как увидеть постройку сверху, не вставая со стула? ¦ Qurilmani stuldan turmay turib yuqoridan qanday ko'rish mumkin? ¦ How do you see a building from above without standing up?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🧊',
      kicker: kick('logic', 't', 7),
      title: "Повороты в воображении ¦ Xayoldagi burilishlar ¦ Turning things in your mind",
      chat: "сколько граней у кубика? число ¦ kubikning nechta yog'i bor? son ¦ how many faces does a cube have? a number",
      lead: "Архитекторы и создатели игр умеют «вращать» предметы в голове. Сегодня тренируем это: смотрим на постройку из кубиков и угадываем, какой она будет сверху, а потом — какая выкройка складывается в кубик. ¦ Arxitektorlar va o'yin yaratuvchilar narsalarni xayolda «aylantira» oladi. Bugun buni mashq qilamiz: kubiklardan qurilmaga qaraymiz va u yuqoridan qanday bo'lishini topamiz, keyin esa qaysi bichim kubikka yig'ilishini. ¦ Architects and game makers can “spin” objects in their heads. Today we practise: look at a cube building and guess its top view, then which net folds into a cube.",
      facts: [
        "Повторяем уроки 18–20: схема и проба на малом ¦ 18–20-darslarni takrorlaymiz: sxema va kichikda sinash ¦ We revise lessons 18–20: diagrams and small tests",
        "Нужны кубики или коробка ¦ Kubiklar yoki quti kerak ¦ You need cubes or a box",
      ],
      notes: { min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Какой вид сверху у этой постройки? ¦ Bu qurilmaning yuqoridan ko'rinishi qanday? ¦ Which is this building's top view?",
      chat: "пиши номер варианта ¦ variant raqamini yoz ¦ write the option number",
      lang: 'text',
      css: CSS,
      steps: [
        { code: 'top view?', html: tops(-1), say: "Четыре кубика: три на полу буквой «Г» и один сверху. Как это выглядит сверху? ¦ To'rtta kubik: uchtasi polda «Г» shaklida, bittasi ustida. Yuqoridan qanday ko'rinadi? ¦ Four cubes: three on the floor in an L and one on top. What does it look like from above?" },
        { code: 'answer: 1', html: tops(0), say: "Вариант 1! Сверху видно только три клетки буквой «Г» — верхний кубик стоит над нижним и закрывает его. ¦ 1-variant! Yuqoridan faqat «Г» shaklidagi uchta katak ko'rinadi — ustki kubik pastkisining ustida turib uni yopadi. ¦ Option 1! From above you only see three squares in an L — the top cube sits on a bottom one and hides it." },
      ],
      notes: { min: 8 },
    },
    {
      type: 'show',
      stage: 2,
      title: "Какая выкройка станет кубиком? ¦ Qaysi bichim kubikka aylanadi? ¦ Which net folds into a cube?",
      chat: "пиши номер развёртки ¦ yoyilma raqamini yoz ¦ write the net number",
      lang: 'text',
      css: CSS,
      steps: [
        { code: 'nets: 3', html: nets(false), say: "У каждой выкройки 6 квадратов — как у кубика 6 граней. Но не каждая сложится! ¦ Har bir bichimda 6 ta kvadrat bor — kubikning 6 ta yog'i kabi. Lekin hammasi ham yig'ilmaydi! ¦ Every net has 6 squares, like a cube's 6 faces. But not all of them fold up!" },
        { code: 'net 1 ✓', html: nets(true), say: "Складывается только крестик (1). Полоска из 6 и прямоугольник 2×3 дают «дыры» и накладки. ¦ Faqat xoch (1) yig'iladi. 6 talik tasma va 2×3 to'rtburchak «teshik» va ustma-ustlik beradi. ¦ Only the cross (1) folds. The strip of 6 and the 2×3 rectangle leave gaps and overlaps." },
      ],
      takeaway: "Проверь на коробке: разрежь её по рёбрам — получится развёртка. ¦ Qutida tekshir: uni qirralari bo'ylab kes — yoyilma chiqadi. ¦ Check with a box: cut it along the edges and you get a net.",
      notes: { say: ['Ментор заранее готовит коробку-развёртку и показывает, как она складывается.'], min: 8 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: смотри в уме ¦ O'zing bajar: xayolda qara ¦ Your turn: look in your mind",
      chat: "номер ответа в чат ¦ javob raqamini chatga ¦ answer number in the chat",
      goal: "Ты видишь кубики со всех сторон! ¦ Kubiklarni har tomondan ko'rasan! ¦ You can see cubes from every side!",
      items: [
        { title: "Башня из 3 кубиков друг на друге. Что видно сверху? ¦ Bir-birining ustidagi 3 kubikli minora. Yuqoridan nima ko'rinadi? ¦ A tower of 3 stacked cubes. What do you see from above?", choices: ["Один квадрат ¦ Bitta kvadrat ¦ One square", "Три квадрата ¦ Uchta kvadrat ¦ Three squares"], correct: 0, explain: "Все кубики друг под другом. ¦ Hamma kubiklar bir-birining ostida. ¦ The cubes are all under one another." },
        { title: "Сколько квадратов в развёртке кубика? ¦ Kub yoyilmasida nechta kvadrat bor? ¦ How many squares in a cube's net?", choices: ['6', '4'], correct: 0, explain: "У кубика 6 граней. ¦ Kubning 6 ta yog'i bor. ¦ A cube has 6 faces." },
      ],
      notes: { min: 7 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: вращай в голове ¦ Xulosa: xayolda aylantir ¦ Wrap-up: spin it in your head",
      chat: "что сложнее: вид сверху или развёртка? ¦ nima qiyinroq: yuqoridan ko'rinishmi yoki yoyilma? ¦ which is harder: the top view or the net?",
      answer: "Вид сверху показывает только верхние квадраты: кубик, стоящий над другим, закрывает его. Развёртка кубика — это 6 квадратов, но складывается в кубик не каждая: крестик складывается, а полоска из шести и прямоугольник 2×3 — нет. Проверяем догадку на настоящей коробке. ¦ Yuqoridan ko'rinish faqat ustki kvadratlarni ko'rsatadi: boshqasining ustidagi kubik uni yopadi. Kub yoyilmasi — 6 ta kvadrat, lekin har biri ham kubga yig'ilmaydi: xoch yig'iladi, oltitalik tasma va 2×3 to'rtburchak esa — yo'q. Taxminni haqiqiy qutida tekshiramiz. ¦ A top view shows only the top squares: a cube sitting on another hides it. A cube's net has 6 squares, but not every net folds: the cross does; a strip of six and a 2×3 rectangle don't. Check your guess on a real box.",
      icon: '🧊',
      badge: "Архитектор ¦ Arxitektor ¦ Architect",
      badgeSub: kick('logic', 't', 7),
      homeworkTitle: HOME,
      homework: [
        "Нарисуй свою развёртку из 6 квадратов, вырежь со взрослым и проверь, сложится ли кубик. ¦ 6 ta kvadratdan o'z yoyilmangni chiz, kattalar bilan qirqib, kub yig'ilishini tekshir. ¦ Draw your own 6-square net, cut it out with a grown-up and see if it folds into a cube.",
        "Нужны: кубики или коробка. ¦ Kerak: kubiklar yoki quti. ¦ You need: cubes or a box.",
      ],
      notes: { min: 4 },
    },
  ],
});
