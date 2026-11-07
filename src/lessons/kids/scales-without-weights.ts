import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

const CSS = `.wrap{display:flex;gap:40px;align-items:center;justify-content:center;height:100%;font-family:Inter,system-ui,sans-serif}
.sc{display:flex;flex-direction:column;align-items:center}
.beam{position:relative;width:300px;height:10px;border-radius:5px;background:#16181f;transform:rotate(-12deg)}
.pan{position:absolute;top:-62px;font-size:56px}
.pan.l{left:-10px;transform:rotate(12deg) translateY(34px)}.pan.r{right:-10px;transform:rotate(12deg) translateY(-30px)}
.post{width:10px;height:90px;background:#16181f;border-radius:5px}
.base{width:120px;height:12px;background:#16181f;border-radius:6px}
.line{display:flex;gap:14px;align-items:center;font-size:58px;font-weight:800}
.line span{font:800 34px Inter;color:#6b7280}`;
// heavier one always on the left (lower pan)
const scale = (heavy: string, light: string) => `<div class="sc"><div class="beam"><span class="pan l">${heavy}</span><span class="pan r">${light}</span></div><div class="post"></div><div class="base"></div></div>`;

export default kit({
  id: 'kids-g15',
  title: "Весы без гирь ¦ Toshsiz tarozi ¦ Scales without weights",
  question: "Как узнать, кто тяжелее, если гирь нет? ¦ Toshlar bo'lmasa, kim og'irroq ekanini qanday bilish mumkin? ¦ How do you find out who's heavier with no weights?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '⚖️',
      kicker: kick('logic', 'g', 7),
      title: "Игрушки на весах ¦ Tarozidagi o'yinchoqlar ¦ Toys on the scales",
      chat: "какая твоя игрушка самая тяжёлая? одно слово ¦ qaysi o'yinchog'ing eng og'ir? bitta so'z ¦ which of your toys is heaviest? one word",
      lead: "Гирь нет — есть только весы и сравнения. Мишка тяжелее зайца, заяц тяжелее утки. Можно ли из этого выстроить всех по порядку? ¦ Toshlar yo'q — faqat tarozi va solishtirishlar bor. Ayiq quyondan og'ir, quyon o'rdakdan og'ir. Shundan hammasini tartib bilan terish mumkinmi? ¦ No weights — just scales and comparisons. The bear is heavier than the hare, the hare heavier than the duck. Can we line them all up from that?",
      notes: { min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Два взвешивания ¦ Ikki marta tortish ¦ Two weighings",
      chat: "кто самый лёгкий? ¦ eng yengili kim? ¦ who is lightest?",
      lang: 'text',
      css: CSS,
      steps: [
        { code: '🧸 > 🐰', html: `<div class="wrap">${scale('🧸', '🐰')}</div>`, say: "Весы 1: мишка опустился ниже — он тяжелее зайца. ¦ 1-tarozi: ayiq pastga tushdi — u quyondan og'ir. ¦ Scale 1: the bear goes down — it's heavier than the hare." },
        { code: '🐰 > 🦆', html: `<div class="wrap">${scale('🧸', '🐰')}${scale('🐰', '🦆')}</div>`, say: "Весы 2: заяц тяжелее утки. ¦ 2-tarozi: quyon o'rdakdan og'ir. ¦ Scale 2: the hare is heavier than the duck." },
        { code: '🦆 < 🐰 < 🧸', html: `<div class="wrap"><div class="line">🦆<span>&lt;</span>🐰<span>&lt;</span>🧸</div></div>`, say: "Значит, порядок от лёгкого к тяжёлому: утка — заяц — мишка. ¦ Demak, yengildan og'irga tartib: o'rdak — quyon — ayiq. ¦ So from lightest to heaviest: duck, hare, bear." },
      ],
      notes: { min: 7 },
    },
    {
      type: 'poll',
      stage: 2,
      title: "Новый набор: кот тяжелее мыши, собака тяжелее мыши. Кто тяжелее: кот или собака? ¦ Yangi to'plam: mushuk sichqondan og'ir, it sichqondan og'ir. Kim og'irroq: mushukmi yoki it? ¦ New set: the cat outweighs the mouse, the dog outweighs the mouse. Who's heavier, the cat or the dog?",
      chat: "пиши номер ¦ raqamini yoz ¦ write the number",
      options: [
        { label: "1 · Кот ¦ 1 · Mushuk ¦ 1 · The cat" },
        { label: "2 · Собака ¦ 2 · It ¦ 2 · The dog" },
        { label: "3 · Данных мало ¦ 3 · Ma'lumot kam ¦ 3 · Not enough data" },
      ],
      correct: 2,
      result: "Данных мало! Мы знаем только, что оба тяжелее мыши. Кота и собаку никто не сравнивал. ¦ Ma'lumot kam! Faqat ikkalasi sichqondan og'irligini bilamiz. Mushuk bilan itni hech kim solishtirmagan. ¦ Not enough data! We only know both outweigh the mouse. Nobody compared the cat and the dog.",
      notes: { say: ['Хвалим тех, кто честно сказал «данных мало», — это тоже верный вывод.'], min: 6 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: выстрой по порядку ¦ O'zing bajar: tartib bilan ter ¦ Your turn: put them in order",
      chat: "пиши порядок: «утка — заяц — мишка» ¦ tartibni yoz: «o'rdak — quyon — ayiq» ¦ write the order: “duck — hare — bear”",
      goal: "Ты делаешь выводы по условиям! ¦ Shartlar bo'yicha xulosa chiqarasan! ¦ You draw conclusions from the facts!",
      items: [
        { title: "🍎 тяжелее 🍓, 🍉 тяжелее 🍎. Кто самый тяжёлый? ¦ 🍎 🍓 dan og'ir, 🍉 🍎 dan og'ir. Eng og'iri kim? ¦ 🍎 outweighs 🍓, 🍉 outweighs 🍎. Which is heaviest?", choices: ['🍉', '🍓'], correct: 0, explain: "🍓 < 🍎 < 🍉 ¦ 🍓 < 🍎 < 🍉 ¦ 🍓 < 🍎 < 🍉" },
        { title: "🚗 тяжелее 🛴. Что тяжелее: 🛴 или ✈️? ¦ 🚗 🛴 dan og'ir. Nima og'irroq: 🛴 mi yoki ✈️? ¦ 🚗 outweighs 🛴. Which is heavier, 🛴 or ✈️?", choices: ["Данных мало ¦ Ma'lumot kam ¦ Not enough data", '🛴'], correct: 0, explain: "Самолёт ни с кем не сравнивали на этих весах. ¦ Samolyot bu tarozida hech kim bilan solishtirilmagan. ¦ The plane wasn't compared on these scales." },
      ],
      notes: { min: 8 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: сравнения складываются в цепочку ¦ Xulosa: solishtirishlar zanjirga bog'lanadi ¦ Wrap-up: comparisons make a chain",
      chat: "что ты ответишь, если сравнений не хватает? ¦ solishtirishlar yetmasa, nima deb javob berasan? ¦ what do you say when comparisons aren't enough?",
      answer: "Если мишка тяжелее зайца, а заяц тяжелее утки, то мишка тяжелее утки: порядок «утка — заяц — мишка». Но когда два предмета сравнивали только с третьим, про них самих сказать нельзя — честный ответ «данных мало». ¦ Agar ayiq quyondan, quyon esa o'rdakdan og'ir bo'lsa, ayiq o'rdakdan og'ir: tartib «o'rdak — quyon — ayiq». Lekin ikki narsa faqat uchinchisi bilan solishtirilgan bo'lsa, ular haqida aytib bo'lmaydi — halol javob «ma'lumot kam». ¦ If the bear outweighs the hare and the hare outweighs the duck, the bear outweighs the duck: duck, hare, bear. But if two things were only compared with a third, you can't tell about them — the honest answer is “not enough data”.",
      icon: '⚖️',
      badge: "Мастер сравнений ¦ Solishtirish ustasi ¦ Comparison master",
      badgeSub: kick('logic', 'g', 7),
      homeworkTitle: HOME,
      homework: [
        "Сравни в руках три предмета дома и запиши порядок от лёгкого к тяжёлому. ¦ Uydagi uchta narsani qo'lda solishtir va yengildan og'irga tartibini yoz. ¦ Compare three things at home in your hands and write them from lightest to heaviest.",
        "Нужны: бумага и карандаш. ¦ Kerak: qog'oz va qalam. ¦ You need: paper and a pencil.",
      ],
      notes: { min: 6 },
    },
  ],
});
