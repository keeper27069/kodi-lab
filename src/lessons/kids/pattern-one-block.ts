import { kit } from '@engine/kit';
import { HOME, KCSS, ROUTE, rkick } from './_kids';

/* An ornament built from one short block repeated; `rep` rounds are drawn, the current one highlighted */
const BLOCK = ['🌸', '🍃', '🍃'];
const CSS = `${KCSS}
.orn{display:grid;grid-template-columns:repeat(2,auto);gap:14px 26px;justify-content:center}
.orn div{display:flex;gap:6px}
.orn span{width:84px;height:84px;border-radius:14px;display:grid;place-items:center;font-size:48px;background:#fff;border:3px solid #e1e4ea}
.orn span.on{border-color:#5b6ef5;background:#eef0ff}
.blk{display:inline-flex;align-items:center;gap:10px;margin-bottom:22px;padding:10px 18px;border-radius:14px;background:#5b6ef5;color:#fff;font:800 28px 'JetBrains Mono',monospace;box-shadow:inset 0 -4px 0 #3e4fd1}`;
const ornament = (rep: number, total = 4) =>
  `<div class="wrap"><div style="text-align:center"><div class="blk">🔁 ${total} × [ ${BLOCK.join(' ')} ]</div><div class="orn">${Array.from({ length: total }, (_, r) =>
    `<div>${BLOCK.map((t) => (r < rep ? `<span class="${r === rep - 1 ? 'on' : ''}">${t}</span>` : '<span></span>')).join('')}</div>`,
  ).join('')}</div></div></div>`;

const LONG = `🌸 🍃 🍃 🌸 🍃 🍃
🌸 🍃 🍃 🌸 🍃 🍃`;
const LOOP = `🔁 4
  🌸 🍃 🍃`;

export default kit({
  id: 'kids-t31',
  title: "Узор одним блоком ¦ Bitta blok bilan naqsh ¦ A pattern with one block",
  question: "Как записать длинный орнамент одной короткой командой? ¦ Uzun naqshni bitta qisqa buyruq bilan qanday yozish mumkin? ¦ How do you write a long ornament as one short command?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🌸',
      kicker: rkick('algo'),
      title: "Орнамент на ковре ¦ Gilamdagi naqsh ¦ The pattern on a rug",
      chat: "где ты видел повторяющийся узор? пример ¦ takrorlanadigan naqshni qayerda ko'rgansan? misol ¦ where have you seen a repeating pattern? an example",
      lead: "На коврах, тюбетейках и посуде узоры повторяются. Мастер не придумывает каждый кусочек заново: он берёт один короткий блок и повторяет его. В программировании так же: блок + число повторов = цикл. ¦ Gilam, do'ppi va idishlarda naqshlar takrorlanadi. Usta har bir bo'lakni qaytadan o'ylab topmaydi: u bitta qisqa blokni olib takrorlaydi. Dasturlashda ham shunday: blok + takrorlar soni = sikl. ¦ On rugs, skullcaps and dishes, patterns repeat. A craftsperson doesn't invent every piece again — they take one short block and repeat it. Programming works the same: a block + a number of repeats = a loop.",
      facts: [
        "Повторяем уроки 10–14: циклы ¦ 10–14-darslarni takrorlaymiz: sikllar ¦ We revise lessons 10–14: loops",
      ],
      notes: { min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Строим орнамент блоком ¦ Naqshni blok bilan quramiz ¦ Building the ornament with a block",
      chat: "сколько фигур в блоке? число ¦ blokda nechta shakl bor? son ¦ how many shapes are in the block? a number",
      lang: 'text',
      css: CSS,
      steps: [
        { code: '🌸 🍃 🍃', html: ornament(1), say: "Блок: цветок и два листика. Это первый повтор. ¦ Blok: gul va ikkita barg. Bu birinchi takror. ¦ The block: a flower and two leaves. That's repeat one." },
        { code: '🔁 2', html: ornament(2), say: "Второй повтор — тот же блок ещё раз. ¦ Ikkinchi takror — o'sha blok yana bir marta. ¦ Repeat two — the same block again." },
        { code: '🔁 4 ✓', html: ornament(4), say: "Четыре повтора — и готов орнамент из 12 фигур! ¦ To'rtta takror — va 12 ta shakldan iborat naqsh tayyor! ¦ Four repeats — a 12-shape ornament is done!" },
      ],
      notes: { min: 7 },
    },
    {
      type: 'compare',
      stage: 2,
      title: "12 фигур или 1 блок? ¦ 12 ta shaklmi yoki 1 ta blokmi? ¦ 12 shapes or 1 block?",
      chat: "пиши: «блок 🌸🍃🍃, повторов 4» ¦ yoz: «blok 🌸🍃🍃, takror 4» ¦ write: “block 🌸🍃🍃, repeats 4”",
      left: { label: "Каждая фигура отдельно ¦ Har bir shakl alohida ¦ Each shape separately", icon: '📜', code: LONG, lang: 'text' },
      right: { label: "Один блок × повторы ¦ Bitta blok × takrorlar ¦ One block × repeats", icon: '🔁', code: LOOP, lang: 'text' },
      verdict: "Короче, а ошибиться труднее: блок пишем один раз. ¦ Qisqaroq va xato qilish qiyinroq: blokni bir marta yozamiz. ¦ Shorter and harder to get wrong: the block is written once.",
      notes: { min: 7 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: найди блок ¦ O'zing bajar: blokni top ¦ Your turn: find the block",
      chat: "номер ответа в чат ¦ javob raqamini chatga ¦ answer number in the chat",
      goal: "Ты видишь цикл в любом узоре! ¦ Har qanday naqshda siklni ko'rasan! ¦ You can spot the loop in any pattern!",
      items: [
        { title: "Узор: ⭐🌙⭐🌙⭐🌙⭐🌙. Как записать? ¦ Naqsh: ⭐🌙⭐🌙⭐🌙⭐🌙. Qanday yozish mumkin? ¦ Pattern: ⭐🌙⭐🌙⭐🌙⭐🌙. How do you write it?", choices: ["🔁 4 × [⭐🌙] ¦ 🔁 4 × [⭐🌙] ¦ 🔁 4 × [⭐🌙]", "🔁 8 × [⭐🌙] ¦ 🔁 8 × [⭐🌙] ¦ 🔁 8 × [⭐🌙]"], correct: 0, explain: "В блоке 2 фигуры, всего 8 — значит, 4 повтора. ¦ Blokda 2 ta shakl, jami 8 ta — demak, 4 ta takror. ¦ 2 shapes per block, 8 in all — so 4 repeats." },
        { title: "Узор: 🔷🔷🔶🔷🔷🔶🔷🔷🔶. Какой блок? ¦ Naqsh: 🔷🔷🔶🔷🔷🔶🔷🔷🔶. Qaysi blok? ¦ Pattern: 🔷🔷🔶🔷🔷🔶🔷🔷🔶. Which block?", choices: ["🔷🔷🔶 × 3 ¦ 🔷🔷🔶 × 3 ¦ 🔷🔷🔶 × 3", "🔷🔶 × 3 ¦ 🔷🔶 × 3 ¦ 🔷🔶 × 3"], correct: 0, explain: "Повторяется тройка «два синих, один оранжевый». ¦ «Ikkita ko'k, bitta to'q sariq» uchligi takrorlanadi. ¦ The “two blue, one orange” trio repeats." },
      ],
      notes: { say: ['Дети рисуют свой орнамент цветными карандашами и пишут в чат блок и число повторов.'], min: 8 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: блок × повторы ¦ Xulosa: blok × takrorlar ¦ Wrap-up: block × repeats",
      chat: "пиши свой узор формулой: блок × число ¦ o'z naqshingni formula bilan yoz: blok × son ¦ write your pattern as a formula: block × number",
      answer: "Длинный орнамент — это короткий блок, повторённый несколько раз: [🌸🍃🍃] × 4 = 12 фигур. Чтобы найти блок, ищем кусочек, который повторяется. В программе это цикл: состав блока + число повторов. ¦ Uzun naqsh — bir necha marta takrorlangan qisqa blok: [🌸🍃🍃] × 4 = 12 ta shakl. Blokni topish uchun takrorlanadigan bo'lakni qidiramiz. Dasturda bu sikl: blok tarkibi + takrorlar soni. ¦ A long ornament is a short block repeated several times: [🌸🍃🍃] × 4 = 12 shapes. To find the block, look for the piece that repeats. In a program that's a loop: what's in the block + how many repeats.",
      icon: '🌸',
      badge: "Мастер орнаментов ¦ Naqsh ustasi ¦ Ornament master",
      badgeSub: rkick('algo'),
      homeworkTitle: HOME,
      homework: [
        "Нарисуй цветными карандашами орнамент для тюбетейки или ковра и подпиши его формулой: блок × число повторов. ¦ Rangli qalamlar bilan do'ppi yoki gilam uchun naqsh chiz va unga formula yozib qo'y: blok × takrorlar soni. ¦ Draw an ornament for a skullcap or rug in coloured pencils and label it: block × number of repeats.",
        "Нужны: цветные карандаши. ¦ Kerak: rangli qalamlar. ¦ You need: coloured pencils.",
      ],
      notes: { min: 5 },
    },
  ],
});
