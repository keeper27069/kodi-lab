import { kit } from '@engine/kit';

const CSS = `.wrap{display:grid;place-items:center;height:100%;font-family:Manrope,system-ui}
.maze{position:relative;display:grid;grid-template-columns:repeat(5,70px);grid-template-rows:repeat(5,70px);gap:6px;padding:12px;border-radius:20px;background:#fff;box-shadow:0 10px 30px #0001}
.c{border-radius:12px;background:#eceef3}.c.p{background:#ccf3ee}.c.w{background:#3a3f52}
.bot{position:absolute;width:70px;height:70px;display:grid;place-items:center;font-size:48px}
.goal{position:absolute;width:70px;height:70px;display:grid;place-items:center;font-size:44px}
.cnt{position:absolute;right:-12px;top:-14px;padding:4px 12px;border-radius:999px;background:#0fb5a6;color:#fff;font:800 16px JetBrains Mono,monospace}`;
// path: from (0,4) up to (0,0)? keep simple: start bottom-left, go right 4, then up 4
const PATH = new Set(['0,4', '1,4', '2,4', '3,4', '4,4', '4,3', '4,2', '4,1', '4,0']);
const at = (x: number, y: number) => `left:${12 + x * 76}px;top:${12 + y * 76}px`;
const maze = (x: number, y: number, lines: number, face = '🤖') => {
  let cells = '';
  for (let r = 0; r < 5; r++) for (let c = 0; c < 5; c++) cells += `<div class="c ${PATH.has(`${c},${r}`) ? 'p' : (c + r) % 3 === 0 ? 'w' : ''}"></div>`;
  return `<div class="wrap"><div class="maze">${cells}<div class="goal" style="${at(4, 0)}">🏁</div><div class="bot" style="${at(x, y)}">${face}</div><span class="cnt">${lines} blocks</span></div></div>`;
};

export default kit({
  id: 'tilda-git-t03',
  title: "Алгоритм на примере из жизни ¦ Algoritmni hayotiy vaziyat orqali tushuntirish ¦ Algorithms through everyday life",
  question: "Как научить робота приготовить завтрак, если он понимает только точные шаги? ¦ Faqat aniq qadamlarni tushunadigan robotni nonushta tayyorlashga qanday o'rgatish mumkin? ¦ How do you teach a robot to make breakfast when it only understands exact steps?",
  route: ["Жизнь ¦ Hayot ¦ Everyday life", "Яйцо ¦ Tuxum ¦ The egg", "Чай ¦ Choy ¦ Tea", "Робот ¦ Robot ¦ The robot", "Финал ¦ Yakun ¦ Finale"],
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🍳',
      kicker: "Tilda · Git · техническая тема 3 ¦ Tilda · Git · texnik mavzu 3 ¦ Tilda · Git · technical topic 3",
      title: "Учим робота готовить завтрак ¦ Robotga nonushta tayyorlashni o'rgatamiz ¦ Teaching a robot to make breakfast",
      chat: "что вы едите на завтрак? ¦ nonushtaga nima yeysiz? ¦ what do you have for breakfast?",
      lead: "Робот не знает, что такое «свари яйцо». Он понимает только точные шаги в правильном порядке. Такой набор шагов и есть алгоритм — мы пользуемся алгоритмами каждый день, даже не замечая этого. ¦ Robot «tuxum pishir» nima ekanini bilmaydi. U faqat to'g'ri tartibdagi aniq qadamlarni tushunadi. Shunday qadamlar to'plami — algoritm. Biz har kuni algoritmlardan foydalanamiz, hatto buni sezmaymiz ham. ¦ A robot doesn't know what “boil an egg” means. It only understands exact steps in the right order. That set of steps is an algorithm — we use algorithms every day without noticing.",
      facts: ["Чёткие шаги ¦ Aniq qadamlar ¦ Clear steps", "Строгий порядок ¦ Qat'iy tartib ¦ A strict order", "Понятный результат ¦ Tushunarli natija ¦ A clear result"],
      takeaway: "Сначала найдём алгоритмы в обычном утре. ¦ Avval oddiy tongdagi algoritmlarni topamiz. ¦ First, let's find the algorithms in an ordinary morning.",
      notes: { say: ["Готовка — только на карточках: у плиты и с кипятком работают взрослые."], min: 3 },
    },
    {
      type: 'flow',
      stage: 0,
      title: "Алгоритм обычного утра ¦ Oddiy tong algoritmi ¦ The algorithm of an ordinary morning",
      chat: "какой шаг нельзя переставить? ¦ qaysi qadamning o'rnini almashtirib bo'lmaydi? ¦ which step can't be moved?",
      nodes: [
        { icon: '⏰', label: "Проснуться ¦ Uyg'onish ¦ Wake up", text: "Будильник — сигнал начала ¦ Budilnik — boshlanish signali ¦ The alarm is the start signal" },
        { icon: '🪥', label: "Умыться ¦ Yuvinish ¦ Wash", text: "Зубы, лицо, руки ¦ Tish, yuz, qo'llar ¦ Teeth, face, hands" },
        { icon: '👕', label: "Одеться ¦ Kiyinish ¦ Get dressed", text: "Носки — до обуви! ¦ Paypoq — poyabzaldan oldin! ¦ Socks before shoes!" },
        { icon: '🍳', label: "Позавтракать ¦ Nonushta qilish ¦ Breakfast", text: "Тут спрятан ещё один алгоритм ¦ Bu yerda yana bitta algoritm yashiringan ¦ Another algorithm hides here" },
        { icon: '🎒', label: "Выйти из дома ¦ Uydan chiqish ¦ Leave home", text: "Результат: готов к учёбе ¦ Natija: o'qishga tayyor ¦ Result: ready to study" },
      ],
      takeaway: "Обувь до носков не наденешь — порядок шагов важен. ¦ Paypoqdan oldin poyabzal kiyib bo'lmaydi — qadamlar tartibi muhim. ¦ You can't put shoes on before socks — step order matters.",
      notes: { min: 3 },
    },
    {
      type: 'order',
      stage: 1,
      title: "Практика: как научить робота сварить яйцо? ¦ Amaliyot: robotga tuxum pishirishni o'rgatish uchun qanday buyruqlar beramiz? ¦ Practice: what commands teach a robot to boil an egg?",
      chat: "пишите номера шагов по порядку ¦ qadam raqamlarini tartib bilan yozing ¦ write the step numbers in order",
      items: [
        "🥚 Возьмите яйцо ¦ 🥚 Tuxumni oling ¦ 🥚 Take an egg",
        "🫕 Налейте воду в кастрюлю ¦ 🫕 Idishga suv quying ¦ 🫕 Pour water into a pot",
        "🔥 Вскипятите воду ¦ 🔥 Suvni qaynating ¦ 🔥 Boil the water",
        "⬇️ Опустите яйцо в воду ¦ ⬇️ Tuxumni suvga soling ¦ ⬇️ Put the egg in the water",
        "⏱️ Подождите 8 минут ¦ ⏱️ 8 daqiqa kuting ¦ ⏱️ Wait 8 minutes",
        "🥄 Достаньте яйцо из воды ¦ 🥄 Tuxumni suvdan oling ¦ 🥄 Take the egg out of the water",
      ],
      takeaway: "Переставили «вскипятите» и «опустите яйцо»? Робот положит яйцо в пустую кастрюлю! ¦ «Qaynating» va «suvga soling» o'rnini almashtirdingizmi? Robot tuxumni bo'sh idishga qo'yadi! ¦ Swapped “boil” and “put the egg in”? The robot drops the egg into an empty pot!",
      notes: { say: ["Перетаскивайте шаги по ответам чата. Неверный порядок показывайте как «что сделает робот».", "Обсудите: «подождите» — сколько? Точное число минут делает шаг понятным роботу."], min: 5 },
    },
    {
      type: 'order',
      stage: 2,
      title: "Ещё практика: робот заваривает чай ¦ Yana amaliyot: robot choy damlaydi ¦ More practice: the robot makes tea",
      chat: "какой шаг робот забудет чаще всего? ¦ robot qaysi qadamni ko'proq unutadi? ¦ which step would the robot forget most often?",
      items: [
        "💧 Налейте воду в чайник ¦ 💧 Choynakka suv quying ¦ 💧 Fill the kettle with water",
        "🔌 Включите чайник ¦ 🔌 Choynakni yoqing ¦ 🔌 Switch the kettle on",
        "🍃 Положите заварку в заварочный чайник ¦ 🍃 Damlash choynagiga choy soling ¦ 🍃 Put tea leaves in the teapot",
        "♨️ Залейте кипятком ¦ ♨️ Qaynoq suv quying ¦ ♨️ Pour in the boiling water",
        "⏱️ Подождите 5 минут ¦ ⏱️ 5 daqiqa damlang ¦ ⏱️ Let it brew for 5 minutes",
        "🫖 Налейте чай в пиалу ¦ 🫖 Choyni piyolaga quying ¦ 🫖 Pour the tea into a cup",
      ],
      takeaway: "Каждая бытовая задача — это алгоритм: шаги, порядок и результат. ¦ Har bir maishiy vazifa — algoritm: qadamlar, tartib va natija. ¦ Every everyday task is an algorithm: steps, order and a result.",
      notes: { min: 4 },
    },
    {
      type: 'show',
      stage: 3,
      title: "Тот же робот в лабиринте Blockly ¦ O'sha robot Blockly labirintida ¦ The same robot in a Blockly maze",
      chat: "сколько блоков понадобится? угадайте! ¦ nechta blok kerak bo'ladi? taxmin qiling! ¦ how many blocks will it take? guess!",
      lang: 'text',
      css: CSS,
      steps: [
        { code: '(start)', html: maze(0, 4, 0), say: "Робот внизу слева, флажок — справа вверху. ¦ Robot pastda chapda, bayroqcha — yuqorida o'ngda. ¦ The robot is bottom-left; the flag is top-right." },
        { code: 'move forward\nmove forward', line: 2, html: maze(2, 4, 2), say: "Два «вперёд» — робот прошёл две клетки. ¦ Ikkita «oldinga» — robot ikki katak yurdi. ¦ Two “forward” blocks: two squares." },
        { code: 'move forward\nmove forward\nmove forward\nmove forward', line: 4, html: maze(4, 4, 4), say: "Ещё два — дошли до угла. ¦ Yana ikkita — burchakka yetdik. ¦ Two more and we reach the corner." },
        { code: 'move forward ×4\nturn left\nmove forward\nmove forward\nmove forward\nmove forward', line: 6, html: maze(4, 0, 9, '🥳'), say: "Поворот и ещё 4 шага — флажок! Но вышло 9 блоков. ¦ Burilish va yana 4 qadam — bayroqcha! Lekin 9 ta blok chiqdi. ¦ A turn and 4 more steps — the flag! But that's 9 blocks." },
      ],
      takeaway: "Работает, но длинно: одно и то же много раз. ¦ Ishlaydi, lekin uzun: bir xil narsa ko'p marta. ¦ It works but it's long: the same thing over and over.",
      notes: { min: 4 },
    },
    {
      type: 'show',
      stage: 3,
      title: "Блок «повторить» ¦ «Takrorla» bloki ¦ The “repeat” block",
      chat: "как сократить программу? ¦ dasturni qanday qisqartirish mumkin? ¦ how can we shorten it?",
      lang: 'text',
      css: CSS,
      steps: [
        { code: 'repeat 4 times:\n  move forward', line: 1, html: maze(4, 4, 2), say: "«Повтори 4 раза: вперёд» — 2 блока вместо 4. ¦ «4 marta takrorla: oldinga» — 4 ta o'rniga 2 ta blok. ¦ “Repeat 4 times: forward” — 2 blocks instead of 4." },
        { code: 'repeat 4 times:\n  move forward\nturn left', line: 3, html: maze(4, 4, 3), say: "Поворачиваем налево. ¦ Chapga buramiz. ¦ Turn left." },
        { code: 'repeat 4 times:\n  move forward\nturn left\nrepeat 4 times:\n  move forward', line: 4, html: maze(4, 0, 5, '🥳'), say: "Ещё один повтор — флажок! Всего 5 блоков вместо 9. ¦ Yana bitta takror — bayroqcha! 9 ta o'rniga jami 5 ta blok. ¦ One more repeat — the flag! 5 blocks instead of 9." },
      ],
      takeaway: "Повтор делает программу короче и понятнее. Это оптимизация. ¦ Takror dasturni qisqaroq va tushunarliroq qiladi. Bu optimallashtirish. ¦ Repeat makes programs shorter and clearer — that's optimisation.",
      notes: { min: 4 },
    },
    {
      type: 'mission',
      stage: 4,
      title: "Миссия: оптимизатор ¦ Missiya: optimallashtiruvchi ¦ Mission: optimiser",
      chat: "номера ответов в чат ¦ javob raqamlarini chatga ¦ answer numbers in the chat",
      goal: "Программа короткая и работает! ¦ Dastur qisqa va ishlaydi! ¦ The program is short and works!",
      items: [
        { title: "«вперёд» 6 раз подряд ¦ Ketma-ket 6 marta «oldinga» ¦ “forward” 6 times in a row", choices: ["repeat 6: forward", "6 отдельных блоков ¦ 6 ta alohida blok ¦ 6 separate blocks"], correct: 0, explain: "Повтор вместо копий. ¦ Nusxalar o'rniga takror. ¦ Repeat instead of copies." },
        { title: "Робот положил яйцо в пустую кастрюлю. Почему? ¦ Robot tuxumni bo'sh idishga qo'ydi. Nega? ¦ The robot put the egg in an empty pot. Why?", choices: ["Шаг «налейте воду» стоит не на своём месте ¦ «Suv quying» qadami o'z o'rnida emas ¦ The “pour water” step is in the wrong place", "Робот сломался ¦ Robot buzildi ¦ The robot is broken"], correct: 0, explain: "Робот делает шаги ровно в том порядке, что мы дали. ¦ Robot qadamlarni aynan biz bergan tartibda bajaradi. ¦ The robot follows our order exactly." },
        { title: "Что такое алгоритм? ¦ Algoritm nima? ¦ What's an algorithm?", choices: ["Шаги по порядку для решения задачи ¦ Vazifani hal qilish uchun tartibli qadamlar ¦ Ordered steps to solve a task", "Картинка робота ¦ Robot rasmi ¦ A robot picture"], correct: 0, explain: "Как рецепт. ¦ Retsept kabi. ¦ Like a recipe." },
        { title: "Клеток стало 8 вместо 4 ¦ Kataklar 4 ta o'rniga 8 ta bo'ldi ¦ 8 squares instead of 4", choices: ["Поменять repeat 4 на repeat 8 ¦ repeat 4 ni repeat 8 ga almashtirish ¦ Change repeat 4 to repeat 8", "Дописать 4 блока ¦ 4 ta blok qo'shish ¦ Add 4 blocks"], correct: 0, explain: "Одно число — и готово. ¦ Bitta raqam — va tayyor. ¦ One number and done." },
      ],
      notes: { min: 3 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: алгоритмы вокруг нас ¦ Xulosa: atrofimizdagi algoritmlar ¦ Summary: algorithms all around us",
      chat: "какой домашний алгоритм вы запишете? ¦ uydagi qaysi algoritmni yozasiz? ¦ which home algorithm will you write down?",
      answer: "Алгоритм — это чёткие шаги в строгом порядке, которые дают понятный результат. Мы пользуемся ими каждый день: утро, варка яйца, заваривание чая. Робот не догадывается — он выполняет шаги ровно в том порядке, что мы дали, поэтому переставленный шаг ломает всё. А в программе одинаковые шаги можно заменить блоком «повторить» — это оптимизация. ¦ Algoritm — tushunarli natija beradigan, qat'iy tartibdagi aniq qadamlar. Biz ulardan har kuni foydalanamiz: tong, tuxum pishirish, choy damlash. Robot taxmin qilmaydi — u qadamlarni aynan biz bergan tartibda bajaradi, shuning uchun o'rni almashgan qadam hammasini buzadi. Dasturda esa bir xil qadamlarni «takrorla» bloki bilan almashtirish mumkin — bu optimallashtirish. ¦ An algorithm is clear steps in a strict order that give a clear result. We use them every day: the morning routine, boiling an egg, making tea. A robot doesn't guess — it follows our steps in exactly that order, so one misplaced step breaks everything. In a program, repeated steps can become a “repeat” block — that's optimisation.",
      icon: '🍳',
      badge: "Шеф-алгоритмист ¦ Algoritm oshpazi ¦ Algorithm chef",
      badgeSub: "Tilda · Git · техническая 3 ¦ Tilda · Git · texnik 3 ¦ Tilda · Git · technical 3",
      homeworkTitle: "Дома ¦ Uyda ¦ At home",
      homework: [
        "Запишите алгоритм из 6 шагов для любого дела дома: умыться, собрать рюкзак, полить цветок. ¦ Uydagi istalgan ish uchun 6 qadamli algoritm yozing: yuvinish, ryukzak yig'ish, gulga suv quyish. ¦ Write a 6-step algorithm for any task at home: washing up, packing a bag, watering a plant.",
        "Перемешайте шаги и попросите родных расставить их по порядку. ¦ Qadamlarni aralashtiring va yaqinlaringizdan ularni tartib bilan joylashtirishni so'rang. ¦ Shuffle the steps and ask your family to put them in order.",
      ],
      takeaway: "Дальше: создаём игру вместе с AI. ¦ Keyingisi: AI bilan birga o'yin yaratamiz. ¦ Next: building a game together with AI.",
      notes: { min: 2 },
    },
  ],
});
