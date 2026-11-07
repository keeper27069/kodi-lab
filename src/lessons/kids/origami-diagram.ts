import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

export default kit({
  id: 'kids-g20',
  title: "Оригами по схеме: читаем инструкцию без слов ¦ Sxema bo'yicha origami: so'zsiz yo'riqnomani o'qiymiz ¦ Origami from a diagram: reading instructions without words",
  question: "Можно ли понять инструкцию, в которой нет ни одного слова? ¦ Bitta ham so'z bo'lmagan yo'riqnomani tushunsa bo'ladimi? ¦ Can you follow instructions with no words at all?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '📄',
      kicker: kick('algo', 'g', 4),
      title: "Инструкция из значков ¦ Belgilardan yo'riqnoma ¦ Instructions made of symbols",
      chat: "ты собирал что-то по схеме? 🧩 или 🙅 ¦ biror narsani sxema bo'yicha yig'ganmisan? 🧩 yoki 🙅 ¦ have you built anything from a diagram? 🧩 or 🙅",
      lead: "Схемы оригами понимают в любой стране: в них нет слов, только линии и стрелки. Это тоже алгоритм! Сегодня разберём значки и сложим стаканчик. ¦ Origami sxemalarini har qanday mamlakatda tushunishadi: ularda so'z yo'q, faqat chiziq va strelkalar. Bu ham algoritm! Bugun belgilarni o'rganamiz va stakancha buklaymiz. ¦ Origami diagrams work in any country: no words, just lines and arrows. That's an algorithm too! Today we learn the symbols and fold a cup.",
      facts: [
        "Нужен квадрат бумаги ¦ Kvadrat qog'oz kerak ¦ You need a square of paper",
      ],
      notes: { min: 3 },
    },
    {
      type: 'cards',
      stage: 1,
      title: "Словарь значков ¦ Belgilar lug'ati ¦ The symbol dictionary",
      chat: "какой значок самый понятный? номер ¦ qaysi belgi eng tushunarli? raqam ¦ which symbol is clearest? a number",
      cards: [
        { icon: '➖', front: "1 · Пунктир ¦ 1 · Punktir ¦ 1 · Dashed line", back: "Линия сгиба: здесь сгибаем ¦ Buklash chizig'i: shu yerdan buklaymiz ¦ Fold line: fold here" },
        { icon: '↪️', front: "2 · Стрелка ¦ 2 · Strelka ¦ 2 · Arrow", back: "Куда двигать уголок ¦ Burchakni qayerga surish ¦ Where the corner goes" },
        { icon: '🔄', front: "3 · Круговая стрелка ¦ 3 · Aylana strelka ¦ 3 · Round arrow", back: "Переверни лист ¦ Varaqni ag'dar ¦ Turn the paper over" },
        { icon: '🔢', front: "4 · Номер ¦ 4 · Raqam ¦ 4 · Number", back: "Порядок шагов ¦ Qadamlar tartibi ¦ The order of the steps" },
      ],
      notes: { min: 5 },
    },
    {
      type: 'flow',
      stage: 2,
      title: "Стаканчик за 4 шага ¦ 4 qadamda stakancha ¦ A cup in 4 steps",
      chat: "на каком шаге ты сейчас? номер ¦ hozir qaysi qadamdasan? raqam ¦ which step are you on? a number",
      nodes: [
        { icon: '🔺', label: "1 · Треугольник ¦ 1 · Uchburchak ¦ 1 · Triangle", text: "Сложи квадрат по диагонали ¦ Kvadratni diagonal bo'yicha bukla ¦ Fold the square corner to corner" },
        { icon: '↩️', label: "2 · Правый угол ¦ 2 · O'ng burchak ¦ 2 · Right corner", text: "Загни к левой стороне ¦ Chap tomonga bukla ¦ Fold it to the left edge" },
        { icon: '↪️', label: "3 · Левый угол ¦ 3 · Chap burchak ¦ 3 · Left corner", text: "Загни к правой стороне ¦ O'ng tomonga bukla ¦ Fold it to the right edge" },
        { icon: '🥤', label: "4 · Верх ¦ 4 · Tepa ¦ 4 · Top", text: "Отогни верхние уголки — спереди и сзади ¦ Ustki burchaklarni old va orqaga bukla ¦ Fold the top flaps down, front and back" },
      ],
      takeaway: "Схема — это алгоритм в картинках: каждый шаг по номеру. ¦ Sxema — rasmlardagi algoritm: har bir qadam raqami bo'yicha. ¦ A diagram is an algorithm in pictures: each step by number.",
      notes: { say: ['Ментор показывает каждый шаг на камеру. Дети пишут «готово» или номер шага, где нужна помощь.'], min: 10 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: прочитай значок ¦ O'zing bajar: belgini o'qi ¦ Your turn: read the symbol",
      chat: "пиши «готово» или номер шага, где нужна помощь ¦ «tayyor» yoki yordam kerak bo'lgan qadam raqamini yoz ¦ write “ready” or the step number where you need help",
      goal: "Ты читаешь инструкции без слов! ¦ Yo'riqnomalarni so'zsiz o'qiysan! ¦ You read instructions without words!",
      items: [
        { title: "На схеме 🔄. Что делать? ¦ Sxemada 🔄. Nima qilish kerak? ¦ The diagram shows 🔄. What do you do?", choices: ["Перевернуть лист ¦ Varaqni ag'darish ¦ Turn the paper over", "Порвать лист ¦ Varaqni yirtish ¦ Tear the paper"], correct: 0, explain: "Круговая стрелка — «переверни». ¦ Aylana strelka — «ag'dar». ¦ The round arrow means “turn over”." },
        { title: "Шаги на схеме можно делать… ¦ Sxemadagi qadamlarni… qilish mumkin ¦ The steps on a diagram should be done…", choices: ["По номерам ¦ Raqamlar bo'yicha ¦ In number order", "В любом порядке ¦ Istalgan tartibda ¦ In any order"], correct: 0, explain: "Иначе стаканчик не получится. ¦ Aks holda stakancha chiqmaydi. ¦ Otherwise the cup won't work." },
      ],
      notes: { min: 6 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: значки вместо слов ¦ Xulosa: so'z o'rniga belgilar ¦ Wrap-up: symbols instead of words",
      chat: "твой стаканчик держит форму? ✅ или 🙈 ¦ stakanchang shaklini ushlab turibdimi? ✅ yoki 🙈 ¦ does your cup hold its shape? ✅ or 🙈",
      answer: "В схеме оригами нет слов, но есть значки: пунктир — линия сгиба, стрелка — куда двигать уголок, круговая стрелка — перевернуть, номер — порядок шагов. Выполняя шаги по номерам, мы сложили стаканчик. Это алгоритм в картинках. ¦ Origami sxemasida so'z yo'q, lekin belgilar bor: punktir — buklash chizig'i, strelka — burchakni qayerga surish, aylana strelka — ag'darish, raqam — qadamlar tartibi. Qadamlarni raqamlar bo'yicha bajarib, stakancha bukladik. Bu rasmlardagi algoritm. ¦ An origami diagram has no words, only symbols: a dashed line is a fold, an arrow shows where a corner goes, a round arrow means turn over, and numbers give the order. Following the numbers, we folded a cup. It's an algorithm in pictures.",
      icon: '🥤',
      badge: "Мастер схем ¦ Sxema ustasi ¦ Diagram reader",
      badgeSub: kick('algo', 'g', 4),
      homeworkTitle: HOME,
      homework: [
        "Нарисуй схему из значков для простого дела, например «как завязать шнурок», и проверь её на родных. ¦ Oddiy ish uchun belgilardan sxema chiz, masalan «bog'ichni qanday bog'lash», va uni yaqinlaringda sinab ko'r. ¦ Draw a symbol diagram for a simple task, like tying a shoelace, and test it on your family.",
        "Нужен: квадрат бумаги. ¦ Kerak: kvadrat qog'oz. ¦ You need: a square of paper.",
      ],
      notes: { min: 6 },
    },
  ],
});
