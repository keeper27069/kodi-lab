import { kit } from '@engine/kit';
import { HOME, KCSS, ROUTE, kick, tri } from './_kids';

const W: [string, string, string, string][] = [
  ['🍎', 'яблоко', 'olma', 'apple'],
  ['🚲', 'велосипед', 'velosiped', 'bicycle'],
  ['🐘', 'слон', 'fil', 'elephant'],
  ['☂️', 'зонт', 'soyabon', 'umbrella'],
  ['🎂', 'торт', 'tort', 'cake'],
  ['🔑', 'ключ', 'kalit', 'key'],
  ['🌵', 'кактус', 'kaktus', 'cactus'],
  ['🎺', 'труба', 'truba', 'trumpet'],
  ['🧦', 'носок', 'paypoq', 'sock'],
  ['🚀', 'ракета', 'raketa', 'rocket'],
];
const CSS = `${KCSS}
.ws{display:grid;grid-template-columns:repeat(5,150px);gap:12px}
.ws div{height:130px;border-radius:18px;background:#fff;border:3px solid #e1e4ea;display:grid;place-items:center;align-content:center;gap:6px;font:800 22px Inter}
.ws div span{font-size:52px}
.ws div.h{background:#f1f2f5;color:#b3b8c4;font-size:48px}`;
const words = (open: boolean) =>
  tri((l) => {
    const i = l === 'ru' ? 1 : l === 'uz' ? 2 : 3;
    return `<div class="wrap"><div class="ws">${W.map((w) => (open ? `<div><span>${w[0]}</span>${w[i]}</div>` : '<div class="h">?</div>')).join('')}</div></div>`;
  });

export default kit({
  id: 'kids-g26',
  title: "Как запомнить 10 слов за минуту ¦ Bir daqiqada 10 ta so'zni qanday eslab qolish mumkin ¦ How to remember 10 words in a minute",
  question: "Почему смешную историю помнить легче, чем список? ¦ Nega kulgili hikoyani eslab qolish ro'yxatdan osonroq? ¦ Why is a funny story easier to remember than a list?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🧠',
      kicker: kick('reserve', 'g', 2),
      title: "Тренируем память ¦ Xotirani mashq qildiramiz ¦ Training our memory",
      chat: "сколько слов ты запомнишь за минуту? угадай число ¦ bir daqiqada nechta so'zni eslab qolasan? sonni taxmin qil ¦ how many words can you remember in a minute? guess a number",
      lead: "Сначала запомним 10 слов просто так. Потом — с секретным приёмом: свяжем их в смешную историю. И сравним, сколько слов вспомнили в первый и во второй раз! ¦ Avval 10 ta so'zni shunchaki eslab qolamiz. Keyin — maxfiy usul bilan: ularni kulgili hikoyaga bog'laymiz. Va birinchi va ikkinchi marta nechta so'z esga tushganini solishtiramiz! ¦ First we'll memorise 10 words the plain way. Then with a secret trick: link them into a funny story. And compare how many words we remembered the first and second time!",
      facts: ["Нужны: бумага и карандаш ¦ Kerak: qog'oz va qalam ¦ You need: paper and a pencil"],
      notes: { min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Попытка 1: запомни 10 слов ¦ 1-urinish: 10 ta so'zni eslab qol ¦ Try 1: remember 10 words",
      chat: "через минуту закрой экран и напиши, сколько слов вспомнил ¦ bir daqiqadan keyin ekranni yop va nechta so'z esga tushganini yoz ¦ in a minute, cover the screen and write how many you remember",
      lang: 'text',
      css: CSS,
      steps: [
        { code: '⏱️ 60 s', html: words(true), say: "Смотри и запоминай целую минуту. ¦ Bir daqiqa davomida qarab, eslab qol. ¦ Look and remember for a whole minute." },
        { code: '🙈 ?', html: words(false), say: "Время вышло! Слова спрятались. Запиши на бумаге всё, что вспомнил, и напиши в чат число. ¦ Vaqt tugadi! So'zlar yashirindi. Esingda qolganlarning hammasini qog'ozga yoz va chatga sonni yoz. ¦ Time's up! The words are hidden. Write down all you remember and put the number in the chat." },
      ],
      notes: { say: ['Таймер 1 минута на первом шаге, потом переключаем на второй и даём 1 минуту записать.'], min: 7 },
    },
    {
      type: 'flow',
      stage: 2,
      title: "Попытка 2: связываем в историю ¦ 2-urinish: hikoyaga bog'laymiz ¦ Try 2: link them into a story",
      chat: "теперь сколько вспомнил? число ¦ endi nechtasi esga tushdi? son ¦ how many now? a number",
      nodes: [
        { icon: '🍎', label: "🍎 → 🚲", text: "Яблоко ехало на велосипеде… ¦ Olma velosipedda ketayotgan edi… ¦ An apple was riding a bicycle…" },
        { icon: '🐘', label: "🐘 ☂️", text: "…и врезалось в слона под зонтом. ¦ …va soyabon ostidagi filga urilib ketdi. ¦ …and crashed into an elephant under an umbrella." },
        { icon: '🎂', label: "🎂 🔑", text: "Слон ел торт, а внутри был ключ! ¦ Fil tort yeyayotgan edi, ichida esa kalit bor edi! ¦ The elephant was eating a cake with a key inside!" },
        { icon: '🌵', label: "🌵 🎺", text: "Ключ открыл кактус, а оттуда заиграла труба. ¦ Kalit kaktusni ochdi, undan truba chalindi. ¦ The key opened a cactus, and a trumpet started to play." },
        { icon: '🚀', label: "🧦 🚀", text: "Из трубы вылетел носок и улетел на ракете! ¦ Trubadan paypoq uchib chiqib, raketada uchib ketdi! ¦ A sock flew out of it and zoomed off on a rocket!" },
      ],
      takeaway: "Смешные и яркие картинки мозг запоминает лучше скучного списка. ¦ Miya kulgili va yorqin tasvirlarni zerikarli ro'yxatdan yaxshiroq eslab qoladi. ¦ The brain remembers funny, vivid pictures better than a dull list.",
      notes: { say: ['Рассказываем историю с выражением, потом скрываем слайд и даём записать слова. В чат — два числа: «5 и 9».'], min: 9 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: свяжи слова ¦ O'zing bajar: so'zlarni bog'la ¦ Your turn: link the words",
      chat: "пиши два числа: первая и вторая попытка ¦ ikkita son yoz: birinchi va ikkinchi urinish ¦ write two numbers: try 1 and try 2",
      goal: "Твоя память стала сильнее! ¦ Xotirang kuchliroq bo'ldi! ¦ Your memory just got stronger!",
      items: [
        { title: "Как лучше запомнить «кот, луна, ложка»? ¦ «Mushuk, oy, qoshiq»ni qanday yaxshiroq eslab qolish mumkin? ¦ How can you best remember “cat, moon, spoon”?", choices: ["Кот ложкой ест луну, как сыр ¦ Mushuk qoshiq bilan oyni pishloqdek yeyapti ¦ A cat eats the moon with a spoon like cheese", "Повторить 3 раза без картинки ¦ Rasmsiz 3 marta takrorlash ¦ Repeat it 3 times with no picture"], correct: 0, explain: "Смешная картинка цепляет слова друг за друга. ¦ Kulgili tasvir so'zlarni bir-biriga ulaydi. ¦ A funny picture hooks the words together." },
        { title: "Почему история помогает? ¦ Hikoya nega yordam beradi? ¦ Why does a story help?", choices: ["Одно слово тянет за собой следующее ¦ Bitta so'z keyingisini tortib keladi ¦ Each word pulls in the next one", "Потому что она длиннее ¦ Chunki u uzunroq ¦ Because it's longer"], correct: 0, explain: "Получается цепочка, а не отдельные слова. ¦ Alohida so'zlar emas, zanjir hosil bo'ladi. ¦ You get a chain, not loose words." },
      ],
      notes: { min: 6 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: картинка + история ¦ Xulosa: tasvir + hikoya ¦ Wrap-up: picture + story",
      chat: "на сколько слов больше ты вспомнил во второй раз? ¦ ikkinchi marta nechta so'z ko'proq esga tushdi? ¦ how many more words did you remember the second time?",
      answer: "Список из 10 слов запомнить трудно. Но если связать слова в смешную историю с яркими картинками, мозг держит цепочку: одно слово тянет за собой следующее. Поэтому во второй раз мы вспомнили больше. Этот приём помогает учить стихи, слова и правила. ¦ 10 ta so'zdan iborat ro'yxatni eslab qolish qiyin. Lekin so'zlarni yorqin tasvirli kulgili hikoyaga bog'lasak, miya zanjirni ushlab turadi: bitta so'z keyingisini tortib keladi. Shuning uchun ikkinchi marta ko'proq so'z esga tushdi. Bu usul she'r, so'z va qoidalarni o'rganishga yordam beradi. ¦ A list of 10 words is hard to remember. But link them into a funny story with vivid pictures and the brain holds the chain — each word pulls in the next. That's why we remembered more the second time. The trick helps with poems, words and rules.",
      icon: '🧠',
      badge: "Мастер памяти ¦ Xotira ustasi ¦ Memory master",
      badgeSub: kick('reserve', 'g', 2),
      homeworkTitle: HOME,
      homework: [
        "Попроси родных назвать 10 предметов и запомни их через смешную историю. Расскажи её за ужином! ¦ Yaqinlaringdan 10 ta narsa aytishni so'ra va ularni kulgili hikoya orqali eslab qol. Uni kechki ovqatda aytib ber! ¦ Ask your family for 10 objects and remember them with a funny story. Tell it at dinner!",
        "Нужны: бумага и карандаш. ¦ Kerak: qog'oz va qalam. ¦ You need: paper and a pencil.",
      ],
      notes: { min: 5 },
    },
  ],
});
