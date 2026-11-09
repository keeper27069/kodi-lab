import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

export default kit({
  id: 'kids-t18',
  title: "Найди поломку: охота за ошибками в инструкции ¦ Buzilishni top: yo'riqnomadagi xatolarni ovlaymiz ¦ Find the break: hunting bugs in instructions",
  question: "Что сломалось в инструкции, если чай не получился? ¦ Choy chiqmagan bo'lsa, yo'riqnomada nima buzilgan? ¦ What broke in the instructions if the tea didn't work?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🐞',
      kicker: kick('algo', 't', 2),
      title: "Четыре вида поломок ¦ To'rt xil buzilish ¦ Four kinds of breaks",
      chat: "пиши 🐞, если готов охотиться за ошибками ¦ xatolarni ovlashga tayyor bo'lsang 🐞 yoz ¦ send 🐞 if you're ready to hunt bugs",
      lead: "Инструкция ломается по-разному: шаг бывает лишний, пропущенный, перепутанный местами или неточный. Сегодня ищем поломки в рецепте чая, в маршруте до школы и в схеме оригами. ¦ Yo'riqnoma turlicha buziladi: qadam ortiqcha, tushib qolgan, o'rni almashgan yoki noaniq bo'lishi mumkin. Bugun choy retseptida, maktabgacha yo'lda va origami sxemasida buzilishlarni qidiramiz. ¦ Instructions break in different ways: a step can be extra, missing, swapped or vague. Today we hunt for breaks in a tea recipe, a route to school and an origami diagram.",
      facts: [
        "Повторяем уроки 8–9 ¦ 8–9-darslarni takrorlaymiz ¦ We revise lessons 8–9",
      ],
      notes: { min: 3 },
    },
    {
      type: 'cards',
      stage: 1,
      title: "Словарь поломок ¦ Buzilishlar lug'ati ¦ The break dictionary",
      chat: "какая поломка самая хитрая? номер ¦ qaysi buzilish eng ayyor? raqam ¦ which break is sneakiest? a number",
      cards: [
        { icon: '➕', front: "1 · Лишний шаг ¦ 1 · Ortiqcha qadam ¦ 1 · Extra step", back: "«Налей воду. Станцуй. Включи чайник» ¦ «Suv quy. Raqsga tush. Choynakni yoq» ¦ “Pour water. Dance. Switch on the kettle”" },
        { icon: '🕳️', front: "2 · Пропущенный шаг ¦ 2 · Tushib qolgan qadam ¦ 2 · Missing step", back: "Забыли положить заварку ¦ Choy solishni unutishdi ¦ Forgot to add the tea" },
        { icon: '🔀', front: "3 · Перепутанный шаг ¦ 3 · O'rni almashgan qadam ¦ 3 · Swapped steps", back: "«Пей чай», а потом «завари» ¦ «Choy ich», keyin «damla» ¦ “Drink the tea”, then “brew it”" },
        { icon: '🌫️', front: "4 · Неточный шаг ¦ 4 · Noaniq qadam ¦ 4 · Vague step", back: "«Положи немного сахара» — сколько? ¦ «Ozgina shakar sol» — qancha? ¦ “Add some sugar” — how much?" },
      ],
      notes: { min: 5 },
    },
    {
      type: 'sort',
      stage: 2,
      title: "Какая это поломка? ¦ Bu qanday buzilish? ¦ What kind of break is it?",
      chat: "пиши: «маршрут — пропущенный, шаг 2» ¦ yoz: «yo'l — tushib qolgan, 2-qadam» ¦ write: “route — missing, step 2”",
      zones: [
        { id: 'x', label: "Лишний ¦ Ortiqcha ¦ Extra", icon: '➕' },
        { id: 'm', label: "Пропущенный ¦ Tushib qolgan ¦ Missing", icon: '🕳️' },
        { id: 's', label: "Перепутанный ¦ O'rni almashgan ¦ Swapped", icon: '🔀' },
        { id: 'v', label: "Неточный ¦ Noaniq ¦ Vague", icon: '🌫️' },
      ],
      items: [
        { text: "Маршрут: «Выйди из дома → войди в класс» (нет «перейди дорогу») ¦ Yo'l: «Uydan chiq → sinfga kir» («yo'ldan o't» yo'q) ¦ Route: “Leave home → enter the classroom” (no “cross the road”)", zone: 'm' },
        { text: "Оригами: «Сложи стаканчик», потом «сложи треугольник» ¦ Origami: «Stakancha bukla», keyin «uchburchak bukla» ¦ Origami: “Fold the cup”, then “fold a triangle”", zone: 's' },
        { text: "Чай: «Налей воду, хлопни в ладоши, включи чайник» ¦ Choy: «Suv quy, qarsak chal, choynakni yoq» ¦ Tea: “Pour water, clap your hands, switch on the kettle”", zone: 'x' },
        { text: "Маршрут: «Иди немного прямо» ¦ Yo'l: «Biroz to'g'riga yur» ¦ Route: “Walk straight a bit”", zone: 'v' },
      ],
      notes: { min: 8 },
    },
    {
      type: 'order',
      stage: 2,
      title: "Почини порядок: бутерброд ¦ Tartibni tuzat: buterbrod ¦ Fix the order: a sandwich",
      chat: "пиши номера по порядку ¦ raqamlarni tartib bilan yoz ¦ write the numbers in order",
      items: [
        "🍞 Достань хлеб из пакета ¦ 🍞 Nonni paketdan ol ¦ 🍞 Take the bread out of the bag",
        "🍽️ Положи ломтик на тарелку ¦ 🍽️ Bo'lakni likopchaga qo'y ¦ 🍽️ Put a slice on the plate",
        "🧈 Намажь масло ¦ 🧈 Sariyog' surt ¦ 🧈 Spread the butter",
        "🧀 Положи сыр сверху ¦ 🧀 Ustiga pishloq qo'y ¦ 🧀 Put cheese on top",
        "😋 Приятного аппетита! ¦ 😋 Yoqimli ishtaha! ¦ 😋 Enjoy!",
      ],
      takeaway: "Поломка «не тот порядок» чинится перестановкой шагов. ¦ «Noto'g'ri tartib» buzilishi qadamlarning o'rnini almashtirib tuzatiladi. ¦ A “wrong order” break is fixed by rearranging the steps.",
      notes: { min: 4 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: почини инструкцию ¦ O'zing bajar: yo'riqnomani tuzat ¦ Your turn: fix the instructions",
      chat: "тип поломки и номер шага в чат ¦ buzilish turi va qadam raqami chatga ¦ break type and step number in the chat",
      goal: "Ты починил все инструкции! ¦ Barcha yo'riqnomalarni tuzatding! ¦ You fixed every instruction!",
      items: [
        { title: "«1. Положи хлеб. 2. Намажь масло. 3. Достань хлеб из пакета». Какая поломка? ¦ «1. Nonni qo'y. 2. Sariyog' surt. 3. Nonni paketdan ol». Qanday buzilish? ¦ “1. Put down the bread. 2. Spread butter. 3. Take the bread out of the bag.” What break?", choices: ["Перепутанный: шаг 3 должен быть первым ¦ O'rni almashgan: 3-qadam birinchi bo'lishi kerak ¦ Swapped: step 3 should be first", "Лишний шаг ¦ Ortiqcha qadam ¦ An extra step"], correct: 0, explain: "Сначала достаём хлеб, потом всё остальное. ¦ Avval nonni olamiz, keyin qolganini. ¦ Take the bread out first, then the rest." },
        { title: "Как починить «Положи немного соли»? ¦ «Ozgina tuz sol»ni qanday tuzatish mumkin? ¦ How do you fix “Add a little salt”?", choices: ["«Положи пол-ложки соли» ¦ «Yarim qoshiq tuz sol» ¦ “Add half a spoon of salt”", "«Положи соль» ¦ «Tuz sol» ¦ “Add salt”"], correct: 0, explain: "Указали точное количество. ¦ Aniq miqdor ko'rsatildi. ¦ Now the amount is exact." },
      ],
      notes: { min: 6 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: четыре поломки — четыре починки ¦ Xulosa: to'rt buzilish — to'rt tuzatish ¦ Wrap-up: four breaks, four fixes",
      chat: "какую поломку ты чаще встречаешь в жизни? ¦ hayotda qaysi buzilishni ko'proq uchratasan? ¦ which break do you meet most in real life?",
      answer: "Инструкция ломается четырьмя способами: лишний шаг, пропущенный шаг, перепутанные шаги и неточный шаг. Чтобы найти поломку, проходим инструкцию шаг за шагом и спрашиваем: нужен ли шаг, на месте ли он и понятно ли, что делать. Программисты называют это отладкой. ¦ Yo'riqnoma to'rt xil buziladi: ortiqcha qadam, tushib qolgan qadam, o'rni almashgan qadamlar va noaniq qadam. Buzilishni topish uchun yo'riqnomani qadamma-qadam o'tamiz va so'raymiz: qadam kerakmi, u o'z joyidami va nima qilish tushunarlimi. Dasturchilar buni sozlash (debugging) deb atashadi. ¦ Instructions break in four ways: an extra step, a missing step, swapped steps and a vague step. To find the break, go step by step and ask: is it needed, is it in the right place, is it clear? Programmers call this debugging.",
      icon: '🐞',
      badge: "Отладчик ¦ Sozlovchi ¦ Debugger",
      badgeSub: kick('algo', 't', 2),
      homeworkTitle: HOME,
      homework: [
        "Напиши инструкцию «как почистить зубы» с одной спрятанной поломкой и загадай родным. ¦ «Tishni qanday tozalash» yo'riqnomasini bitta yashirin buzilish bilan yoz va yaqinlaringga top deb ber. ¦ Write “how to brush your teeth” with one hidden break and challenge your family.",
        "Нужны: бумага и карандаш. ¦ Kerak: qog'oz va qalam. ¦ You need: paper and a pencil.",
      ],
      notes: { min: 4 },
    },
  ],
});
