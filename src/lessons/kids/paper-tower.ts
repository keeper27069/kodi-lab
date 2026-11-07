import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

export default kit({
  id: 'kids-g24',
  title: "Самая высокая башня из 10 листов бумаги ¦ 10 varaq qog'ozdan eng baland minora ¦ The tallest tower from 10 sheets of paper",
  question: "Как построить высокую башню без клея и скотча? ¦ Yelim va skotchsiz baland minorani qanday qurish mumkin? ¦ How do you build a tall tower with no glue or tape?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🏗️',
      kicker: kick('blockly', 'g', 4),
      title: "Инженерный вызов ¦ Muhandislik sinovi ¦ An engineering challenge",
      chat: "какое самое высокое здание ты видел? ¦ ko'rgan eng baland binong qaysi? ¦ what's the tallest building you've seen?",
      lead: "У тебя 10 листов бумаги и 7 минут. Ни клея, ни скотча! Задача — построить самую высокую башню, которая стоит сама. Инженеры решают такие задачи каждый день. ¦ Senda 10 varaq qog'oz va 7 daqiqa bor. Yelim ham, skotch ham yo'q! Vazifa — o'zi turadigan eng baland minorani qurish. Muhandislar bunday masalalarni har kuni yechadi. ¦ You have 10 sheets of paper and 7 minutes. No glue, no tape! Build the tallest tower that stands on its own. Engineers solve problems like this every day.",
      facts: [
        "Нужны: 10 листов и линейка ¦ Kerak: 10 varaq va chizg'ich ¦ You need: 10 sheets and a ruler",
      ],
      notes: { min: 3 },
    },
    {
      type: 'poll',
      stage: 1,
      title: "Какой лист выдержит книгу? ¦ Qaysi varaq kitobni ko'tara oladi? ¦ Which sheet can hold up a book?",
      chat: "пиши номер ¦ raqamini yoz ¦ write the number",
      options: [
        { label: "1 · Плоский лист стоймя ¦ 1 · Tik qo'yilgan tekis varaq ¦ 1 · A flat sheet standing up" },
        { label: "2 · Лист, свёрнутый в трубочку ¦ 2 · Naycha qilib o'ralgan varaq ¦ 2 · A sheet rolled into a tube" },
        { label: "3 · Лист, сложенный гармошкой ¦ 3 · Garmon qilib buklangan varaq ¦ 3 · A sheet folded like an accordion" },
      ],
      correct: 1,
      result: "Трубочка! Она держит вес со всех сторон. Гармошка тоже крепче плоского листа — сгибы делают бумагу жёстче. ¦ Naycha! U og'irlikni har tomondan ushlaydi. Garmon ham tekis varaqdan mustahkamroq — buklamlar qog'ozni qattiqroq qiladi. ¦ The tube! It carries weight all round. The accordion is stronger than a flat sheet too — folds make paper stiffer.",
      notes: { say: ['Ментор показывает опыт с книгой на трубочке, заранее проверенный.'], min: 5 },
    },
    {
      type: 'cards',
      stage: 2,
      title: "Секреты крепкой башни ¦ Mustahkam minora sirlari ¦ Secrets of a strong tower",
      chat: "какой секрет используешь? номер ¦ qaysi sirdan foydalanasan? raqam ¦ which secret will you use? a number",
      cards: [
        { icon: '🧻', front: "1 · Трубочки ¦ 1 · Naychalar ¦ 1 · Tubes", back: "Свёрнутый лист держит больше ¦ O'ralgan varaq ko'proq ushlaydi ¦ A rolled sheet carries more" },
        { icon: '🔺', front: "2 · Треугольники ¦ 2 · Uchburchaklar ¦ 2 · Triangles", back: "Самая устойчивая форма ¦ Eng barqaror shakl ¦ The steadiest shape" },
        { icon: '⬛', front: "3 · Широкое основание ¦ 3 · Keng asos ¦ 3 · A wide base", back: "Внизу шире — башня не падает ¦ Pastda kengroq — minora yiqilmaydi ¦ Wider at the bottom, so it won't topple" },
        { icon: '✂️', front: "4 · Надрезы-замки ¦ 4 · Qulf-kesiklar ¦ 4 · Slot locks", back: "Листы вставляют друг в друга (ножницы — со взрослым) ¦ Varaqlar bir-biriga kiritiladi (qaychi — kattalar bilan) ¦ Slot sheets into each other (scissors with a grown-up)" },
      ],
      notes: { min: 5 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: строим за 7 минут! ¦ O'zing bajar: 7 daqiqada quramiz! ¦ Your turn: build in 7 minutes!",
      chat: "пиши высоту башни в сантиметрах ¦ minora balandligini santimetrda yoz ¦ write your tower's height in centimetres",
      goal: "Ты настоящий инженер! ¦ Sen haqiqiy muhandissan! ¦ You're a real engineer!",
      items: [
        { title: "Башня шатается. Что сделать? ¦ Minora tebranyapti. Nima qilish kerak? ¦ The tower wobbles. What should you do?", choices: ["Сделать основание шире ¦ Asosni kengroq qilish ¦ Make the base wider", "Сделать верх тяжелее ¦ Tepasini og'irroq qilish ¦ Make the top heavier"], correct: 0, explain: "Широкое основание — главный секрет устойчивости. ¦ Keng asos — barqarorlikning asosiy siri. ¦ A wide base is the key to stability." },
        { title: "Какая башня победит? ¦ Qaysi minora g'olib bo'ladi? ¦ Which tower wins?", choices: ["Самая высокая из тех, что стоят сами ¦ O'zi turadiganlar orasida eng balandi ¦ The tallest one that stands by itself", "Та, что упала, но была высокой ¦ Yiqilgan, lekin baland bo'lgani ¦ A tall one that fell over"], correct: 0, explain: "Считаются только устойчивые башни. ¦ Faqat barqaror minoralar hisoblanadi. ¦ Only standing towers count." },
      ],
      notes: { say: ['Таймер 7 минут. Потом дети измеряют башни и пишут высоту в чат; обсуждаем, какие сгибы помогли.'], min: 12 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: форма делает бумагу сильной ¦ Xulosa: shakl qog'ozni kuchli qiladi ¦ Wrap-up: shape makes paper strong",
      chat: "какой секрет помог тебе больше всего? ¦ qaysi sir senga ko'proq yordam berdi? ¦ which secret helped you most?",
      answer: "Плоский лист бумаги слабый, но форма делает его сильнее: трубочки и гармошка держат вес, треугольники устойчивы, а широкое основание не даёт башне упасть. Инженеры думают так же, когда строят мосты и небоскрёбы. ¦ Tekis qog'oz varag'i zaif, lekin shakl uni kuchliroq qiladi: naychalar va garmon og'irlikni ushlaydi, uchburchaklar barqaror, keng asos esa minoraning yiqilishiga yo'l qo'ymaydi. Muhandislar ko'prik va osmono'par binolarni qurishda xuddi shunday fikrlaydi. ¦ A flat sheet is weak, but shape makes it strong: tubes and accordion folds carry weight, triangles are steady and a wide base keeps the tower up. Engineers think the same way when building bridges and skyscrapers.",
      icon: '🏗️',
      badge: "Юный инженер ¦ Yosh muhandis ¦ Young engineer",
      badgeSub: kick('blockly', 'g', 4),
      homeworkTitle: HOME,
      homework: [
        "Устрой дома соревнование башен с родными: 10 листов, 7 минут, без клея. ¦ Uyda yaqinlaring bilan minoralar musobaqasini o'tkaz: 10 varaq, 7 daqiqa, yelimsiz. ¦ Hold a tower contest at home: 10 sheets, 7 minutes, no glue.",
        "Нужны: 10 листов и линейка. ¦ Kerak: 10 varaq va chizg'ich. ¦ You need: 10 sheets and a ruler.",
      ],
      notes: { min: 5 },
    },
  ],
});
