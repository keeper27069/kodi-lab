import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

export default kit({
  id: 'kids-g25',
  title: "Почему железный корабль не тонет ¦ Temir kema nega cho'kmaydi ¦ Why an iron ship doesn't sink",
  question: "Гвоздь тонет, а огромный железный корабль плывёт. Почему? ¦ Mix cho'kadi, ulkan temir kema esa suzadi. Nega? ¦ A nail sinks, but a huge iron ship floats. Why?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🚢',
      kicker: kick('reserve', 'g', 1),
      title: "Загадка корабля ¦ Kema topishmog'i ¦ The ship riddle",
      chat: "что тонет быстрее: гвоздь или корабль? ¦ nima tezroq cho'kadi: mixmi yoki kemami? ¦ which sinks faster: a nail or a ship?",
      lead: "Корабль сделан из железа и весит как тысячи машин. Гвоздь тоже железный, но он сразу тонет. Сегодня мы проверим опытом: что решает — материал или форма? ¦ Kema temirdan yasalgan va minglab mashinalarcha og'ir. Mix ham temir, lekin u darhol cho'kadi. Bugun tajriba bilan tekshiramiz: nima hal qiladi — materialmi yoki shaklmi? ¦ A ship is made of iron and weighs as much as thousands of cars. A nail is iron too, but it sinks at once. Today we'll test it: what matters — the material or the shape?",
      facts: [
        "Опыт с водой — только со взрослым ¦ Suv bilan tajriba — faqat kattalar bilan ¦ Water experiments only with a grown-up",
        "Воду держим подальше от техники ¦ Suvni texnikadan uzoqroq tutamiz ¦ Keep water away from devices",
      ],
      notes: { say: ['Ментор заранее проверяет опыт с фольгой в прозрачной миске.'], min: 3 },
    },
    {
      type: 'poll',
      stage: 1,
      title: "Два кусочка фольги: что поплывёт? ¦ Ikki bo'lak folga: qaysi biri suzadi? ¦ Two pieces of foil: which will float?",
      chat: "пиши номер ¦ raqamini yoz ¦ write the number",
      options: [
        { label: "1 · Плотный комок фольги ¦ 1 · Zich folga g'o'labasi ¦ 1 · A tight ball of foil" },
        { label: "2 · Лодочка из такого же листа ¦ 2 · Xuddi shunday varaqdan qayiqcha ¦ 2 · A boat from the same sheet" },
        { label: "3 · Оба утонут ¦ 3 · Ikkalasi ham cho'kadi ¦ 3 · Both will sink" },
      ],
      correct: 1,
      result: "Лодочка плывёт, а комок тонет! Фольги столько же — разная только форма. ¦ Qayiqcha suzadi, g'o'laba esa cho'kadi! Folga bir xil — faqat shakli har xil. ¦ The boat floats and the ball sinks! Same amount of foil — only the shape is different.",
      notes: { say: ['Показываем оба варианта в миске. Комок сжимаем очень плотно, иначе он может держаться на воде.'], min: 6 },
    },
    {
      type: 'flow',
      stage: 2,
      title: "Как работает лодочка ¦ Qayiqcha qanday ishlaydi ¦ How the boat works",
      chat: "что внутри лодочки помогает ей плыть? ¦ qayiqcha ichida nima suzishga yordam beradi? ¦ what inside the boat helps it float?",
      nodes: [
        { icon: '🛶', label: "Широкое дно ¦ Keng tub ¦ A wide bottom", text: "Лодочка раздвигает много воды ¦ Qayiqcha ko'p suvni surib chiqaradi ¦ The boat pushes aside lots of water" },
        { icon: '💨', label: "Воздух внутри ¦ Ichidagi havo ¦ Air inside", text: "Внутри не железо, а лёгкий воздух ¦ Ichida temir emas, yengil havo ¦ Inside is light air, not metal" },
        { icon: '⬆️', label: "Вода толкает вверх ¦ Suv yuqoriga itaradi ¦ Water pushes up", text: "Чем больше воды раздвинули, тем сильнее толчок ¦ Qancha ko'p suv surilsa, itarish shuncha kuchli ¦ The more water pushed aside, the stronger the push" },
      ],
      takeaway: "Корабль плывёт, потому что он большой, полый и полон воздуха. ¦ Kema katta, ichi bo'sh va havoga to'la bo'lgani uchun suzadi. ¦ A ship floats because it's big, hollow and full of air.",
      notes: { min: 8 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: гипотеза и проверка ¦ O'zing bajar: faraz va tekshiruv ¦ Your turn: guess and test",
      chat: "сколько монет выдержала лодочка? число ¦ qayiqcha nechta tangani ko'tardi? son ¦ how many coins did your boat hold? a number",
      goal: "Ты проверяешь идеи как настоящий учёный! ¦ G'oyalarni haqiqiy olimdek tekshirasan! ¦ You test ideas like a real scientist!",
      items: [
        { title: "Какая лодочка выдержит больше монет? ¦ Qaysi qayiqcha ko'proq tangani ko'taradi? ¦ Which boat will hold more coins?", choices: ["Широкая, с высокими бортиками ¦ Keng, baland bortli ¦ A wide one with high sides", "Узкая и плоская ¦ Tor va yassi ¦ A narrow, flat one"], correct: 0, explain: "Широкая лодочка раздвигает больше воды. ¦ Keng qayiqcha ko'proq suvni suradi. ¦ A wide boat pushes aside more water." },
        { title: "Лодочка набрала воды. Что будет? ¦ Qayiqchaga suv kirdi. Nima bo'ladi? ¦ The boat let water in. What happens?", choices: ["Она утонет — воздух ушёл ¦ U cho'kadi — havo chiqib ketdi ¦ It sinks — the air is gone", "Ничего ¦ Hech narsa ¦ Nothing"], correct: 0, explain: "Поэтому у кораблей прочный корпус. ¦ Shuning uchun kemalarning korpusi mustahkam. ¦ That's why ships have strong hulls." },
      ],
      notes: { say: ['Дома дети со взрослым кладут монеты (или скрепки) по одной и считают.'], min: 8 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: решает форма ¦ Xulosa: shakl hal qiladi ¦ Wrap-up: shape decides",
      chat: "что ещё может плавать благодаря форме? ¦ yana nima shakli tufayli suza oladi? ¦ what else can float thanks to its shape?",
      answer: "Комок фольги тонет, а лодочка из того же листа плывёт. Значит, дело не только в материале: широкая полая форма с воздухом внутри раздвигает много воды, и вода толкает её вверх. Так плавают и огромные железные корабли. Мы выдвинули гипотезу и проверили её опытом. ¦ Folga g'o'labasi cho'kadi, xuddi shu varaqdan yasalgan qayiqcha esa suzadi. Demak, gap faqat materialda emas: ichida havo bo'lgan keng va bo'sh shakl ko'p suvni suradi, suv esa uni yuqoriga itaradi. Ulkan temir kemalar ham shunday suzadi. Biz faraz qildik va uni tajriba bilan tekshirdik. ¦ A foil ball sinks, but a boat from the same sheet floats. So it's not just the material: a wide hollow shape full of air pushes aside lots of water, and the water pushes it up. Huge iron ships float the same way. We made a guess and tested it.",
      icon: '🚢',
      badge: "Корабел ¦ Kemasoz ¦ Shipbuilder",
      badgeSub: kick('reserve', 'g', 1),
      homeworkTitle: HOME,
      homework: [
        "Со взрослым сделай лодочку из фольги и проверь в тазике, сколько монет она выдержит. ¦ Kattalar bilan folgadan qayiqcha yasab, tog'orada u nechta tangani ko'tarishini tekshir. ¦ With a grown-up, make a foil boat and test in a bowl how many coins it holds.",
        "Нужны: фольга, тазик с водой, монеты или скрепки. ¦ Kerak: folga, suvli tog'ora, tangalar yoki skrepkalar. ¦ You need: foil, a bowl of water, coins or paper clips.",
      ],
      notes: { min: 5 },
    },
  ],
});
