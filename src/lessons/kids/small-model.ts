import { kit } from '@engine/kit';
import { HOME, KCSS, ROUTE, rkick } from './_kids';

/* Squares in a row made of counting sticks: 1 → 4, 2 → 7, 3 → 10 (each new square adds 3) */
const CSS = `${KCSS}
.sq{display:flex}
.sq i{width:96px;height:96px;border:8px solid #c58b3a;border-radius:4px;margin-left:-8px}
.sq i:first-child{margin-left:0}
.sq i.new{border-color:#fa4f28;border-left-color:#c58b3a}
.sq i.new:first-child{border-left-color:#fa4f28}
.tab{margin-top:24px;display:grid;grid-template-columns:repeat(2,auto);gap:6px 34px;font:800 26px Inter;justify-content:center}
.tab span:nth-child(odd){color:#5b6170}`;
const sticks = (n: number) => 1 + 3 * n;
const model = (n: number, rows = n) =>
  `<div class="wrap"><div><div class="sq">${Array.from({ length: n }, (_, i) => `<i class="${i === n - 1 && n > 1 ? 'new' : ''}"></i>`).join('')}</div><div class="tab">${Array.from(
    { length: rows },
    (_, i) => `<span>${i + 1} ⬜</span><span>${sticks(i + 1)} 🥢</span>`,
  ).join('')}</div></div></div>`;

export default kit({
  id: 'kids-t30',
  title: "Маленькая модель большой задачи ¦ Katta masalaning kichik modeli ¦ A small model of a big problem",
  question: "Сколько палочек нужно на 10 квадратов в ряд — не выкладывая все 10? ¦ Qatorda 10 ta kvadrat uchun nechta cho'p kerak — hammasini terib chiqmasdan? ¦ How many sticks for 10 squares in a row — without laying out all 10?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🥢',
      kicker: rkick('logic'),
      title: "Проверяем на малом ¦ Kichikda tekshiramiz ¦ Test it small first",
      chat: "сколько палочек нужно на один квадрат? число ¦ bitta kvadrat uchun nechta cho'p kerak? son ¦ how many sticks for one square? a number",
      lead: "Большую задачу трудно решить сразу. Учёные и инженеры сначала строят маленькую модель: три элемента вместо сотни. Находят правило на малом — и применяют к большому. Возьми счётные палочки! ¦ Katta masalani darhol yechish qiyin. Olimlar va muhandislar avval kichik model quradi: yuzta o'rniga uchta element. Kichikda qoidani topib, kattasiga qo'llaydi. Sanoq cho'plarini ol! ¦ A big problem is hard to solve in one go. Scientists and engineers first build a small model: three items instead of a hundred. Find the rule on the small one, then apply it to the big one. Grab your counting sticks!",
      facts: [
        "Повторяем уроки 18–20 ¦ 18–20-darslarni takrorlaymiz ¦ We revise lessons 18–20",
        "Нужны: счётные палочки и бумага ¦ Kerak: sanoq cho'plari va qog'oz ¦ You need: counting sticks and paper",
      ],
      notes: { min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Модель из трёх квадратов ¦ Uch kvadratli model ¦ A three-square model",
      chat: "на сколько палочек больше каждый раз? число ¦ har safar nechta cho'p ko'payadi? son ¦ how many more sticks each time? a number",
      lang: 'text',
      css: CSS,
      steps: [
        { code: '1 ⬜ = 4 🥢', html: model(1), say: "Один квадрат — 4 палочки. ¦ Bitta kvadrat — 4 ta cho'p. ¦ One square — 4 sticks." },
        { code: '2 ⬜ = 7 🥢', html: model(2), say: "Пристраиваем второй: одна сторона общая, поэтому нужно ещё только 3. ¦ Ikkinchisini qo'shamiz: bir tomoni umumiy, shuning uchun yana atigi 3 ta kerak. ¦ Add a second: one side is shared, so we only need 3 more." },
        { code: '3 ⬜ = 10 🥢', html: model(3), say: "Третий — снова плюс 3. Правило найдено: каждый новый квадрат = +3 палочки. ¦ Uchinchisi — yana plyus 3. Qoida topildi: har bir yangi kvadrat = +3 cho'p. ¦ The third — plus 3 again. Rule found: every new square = +3 sticks." },
      ],
      takeaway: "Правило: 1 палочка в начале + 3 на каждый квадрат. ¦ Qoida: boshida 1 ta cho'p + har bir kvadratga 3 ta. ¦ The rule: 1 stick to start + 3 for each square.",
      notes: { say: ['Дети повторяют на столе палочками (не спичками) и сверяют с экраном.'], min: 8 },
    },
    {
      type: 'predict',
      stage: 2,
      title: "Предскажи: 10 квадратов ¦ Bashorat qil: 10 ta kvadrat ¦ Predict: 10 squares",
      chat: "пиши число палочек ¦ cho'plar sonini yoz ¦ write the number of sticks",
      label: "Палочек ¦ Cho'plar ¦ Sticks",
      min: 10,
      max: 45,
      answer: 31,
      result: "31 палочка! 1 + 3 × 10 = 31. Мы не выкладывали 10 квадратов — нам хватило модели из трёх. ¦ 31 ta cho'p! 1 + 3 × 10 = 31. 10 ta kvadratni terib chiqmadik — uchtalik model yetarli bo'ldi. ¦ 31 sticks! 1 + 3 × 10 = 31. We never laid out 10 squares — the three-square model was enough.",
      notes: { min: 7 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: следующий шаг ¦ O'zing bajar: keyingi qadam ¦ Your turn: the next step",
      chat: "номер ответа в чат ¦ javob raqamini chatga ¦ answer number in the chat",
      goal: "Ты решаешь большие задачи маленькими моделями! ¦ Katta masalalarni kichik modellar bilan yechasan! ¦ You solve big problems with small models!",
      items: [
        { title: "Сколько палочек на 4 квадрата? ¦ 4 ta kvadrat uchun nechta cho'p? ¦ How many sticks for 4 squares?", choices: ["13 ¦ 13 ¦ 13", "16 ¦ 16 ¦ 16"], correct: 0, explain: "10 + 3 = 13 (а 16 было бы, если бы стороны не были общими). ¦ 10 + 3 = 13 (tomonlar umumiy bo'lmaganda 16 bo'lardi). ¦ 10 + 3 = 13 (16 would be if no sides were shared)." },
        { title: "Зачем строить модель из трёх? ¦ Nega uchtalik model quriladi? ¦ Why build a three-item model?", choices: ["Найти правило быстро и без ошибок ¦ Qoidani tez va xatosiz topish uchun ¦ To find the rule quickly and correctly", "Потому что больше палочек нет ¦ Chunki boshqa cho'p yo'q ¦ Because there are no more sticks"], correct: 0, explain: "На малом легко проверить правило. ¦ Kichikda qoidani tekshirish oson. ¦ It's easy to test a rule on something small." },
      ],
      notes: { min: 7 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: малое объясняет большое ¦ Xulosa: kichik kattani tushuntiradi ¦ Wrap-up: small explains big",
      chat: "сколько палочек на 5 квадратов? ¦ 5 ta kvadrat uchun nechta cho'p? ¦ how many sticks for 5 squares?",
      answer: "Вместо 10 квадратов мы построили модель из трёх и нашли правило: каждый новый квадрат добавляет 3 палочки, потому что одна сторона общая. Значит, на 10 квадратов нужно 1 + 3 × 10 = 31 палочка. Делим большую задачу и проверяем правило на малом — это декомпозиция и моделирование. ¦ 10 ta kvadrat o'rniga uchtalik model qurdik va qoidani topdik: har bir yangi kvadrat 3 ta cho'p qo'shadi, chunki bir tomoni umumiy. Demak, 10 ta kvadrat uchun 1 + 3 × 10 = 31 ta cho'p kerak. Katta masalani bo'lamiz va qoidani kichikda tekshiramiz — bu dekompozitsiya va modellashtirish. ¦ Instead of 10 squares we built a three-square model and found the rule: each new square adds 3 sticks because one side is shared. So 10 squares need 1 + 3 × 10 = 31 sticks. Breaking a big problem down and testing the rule small is decomposition and modelling.",
      icon: '🥢',
      badge: "Конструктор моделей ¦ Model konstruktori ¦ Model maker",
      badgeSub: rkick('logic'),
      homeworkTitle: HOME,
      homework: [
        "Выложи из палочек треугольники в ряд: 1, 2, 3. Найди правило и предскажи, сколько палочек нужно на 10 треугольников. ¦ Cho'plardan qatorda uchburchaklar ter: 1, 2, 3. Qoidani top va 10 ta uchburchak uchun nechta cho'p kerakligini bashorat qil. ¦ Lay out triangles in a row with sticks: 1, 2, 3. Find the rule and predict how many sticks 10 triangles need.",
        "Нужны: счётные палочки и бумага. ¦ Kerak: sanoq cho'plari va qog'oz. ¦ You need: counting sticks and paper.",
      ],
      notes: { min: 5 },
    },
  ],
});
