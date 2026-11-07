import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

export default kit({
  id: 'kids-t08',
  title: "Правда или фейк: как проверить невероятную новость ¦ Haqiqatmi yoki feyk: aql bovar qilmas yangilikni qanday tekshirish mumkin ¦ True or fake: how to check an unbelievable story",
  question: "Может ли кот быть мэром города? ¦ Mushuk shahar meri bo'la oladimi? ¦ Can a cat be a town's mayor?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '📰',
      kicker: kick('cyber', 't', 4),
      title: "Новость дня: кот стал мэром ¦ Kun yangiligi: mushuk mer bo'ldi ¦ Today's news: a cat became mayor",
      chat: "правда это или выдумка? «правда» или «фейк» ¦ bu rostmi yoki to'qima? «rost» yoki «feyk» ¦ true or made up? “true” or “fake”",
      lead: "Заголовок «Кот стал мэром» звучит как шутка. Но странное — ещё не значит ложное! Сегодня мы проверим новость, как настоящие журналисты. ¦ «Mushuk mer bo'ldi» sarlavhasi hazilga o'xshaydi. Lekin g'alati narsa — hali yolg'on degani emas! Bugun yangilikni haqiqiy jurnalistlardek tekshiramiz. ¦ The headline “Cat becomes mayor” sounds like a joke. But strange doesn't mean false! Today we check the story like real journalists.",
      facts: [
        "Повторяем урок 21 «Правда или ложь» ¦ 21-dars «Rost yoki yolg'on»ni takrorlaymiz ¦ We revise lesson 21 “True or false”",
      ],
      notes: { say: ['Факт: кот Стаббс был почётным мэром посёлка Талкитна на Аляске около 20 лет (с 1997 года). Почётный — без полномочий настоящего мэра.'], min: 3 },
    },
    {
      type: 'flow',
      stage: 1,
      title: "Четыре вопроса к новости ¦ Yangilikka to'rtta savol ¦ Four questions for any story",
      chat: "какой вопрос ты задашь первым? номер ¦ qaysi savolni birinchi berasan? raqam ¦ which question first? a number",
      nodes: [
        { icon: '✍️', label: "1 · Кто автор? ¦ 1 · Muallif kim? ¦ 1 · Who wrote it?", text: "Известное издание или неизвестно кто ¦ Taniqli nashrmi yoki noma'lum kimdir ¦ A known outlet or nobody knows" },
        { icon: '📅', label: "2 · Когда? ¦ 2 · Qachon? ¦ 2 · When?", text: "Свежая новость или старая ¦ Yangi xabarmi yoki eski ¦ Fresh or old news" },
        { icon: '🔗', label: "3 · Откуда? ¦ 3 · Qayerdan? ¦ 3 · Where from?", text: "Первоисточник: кто сообщил первым ¦ Birlamchi manba: kim birinchi xabar berdi ¦ The original source: who said it first" },
        { icon: '👥', label: "4 · Кто ещё? ¦ 4 · Yana kim? ¦ 4 · Who else?", text: "Пишут ли об этом другие, независимые ¦ Boshqa, mustaqil manbalar yozyaptimi ¦ Do other, independent sources say so" },
      ],
      notes: { min: 6 },
    },
    {
      type: 'animate',
      stage: 2,
      title: "Проверяем историю кота Стаббса ¦ Stabbs mushuk tarixini tekshiramiz ¦ Checking the story of Stubbs the cat",
      chat: "сколько проверок прошла новость? число ¦ yangilik nechta tekshiruvdan o'tdi? son ¦ how many checks did it pass? a number",
      actors: [
        { id: 'cat', icon: '🐱', label: "Стаббс ¦ Stabbs ¦ Stubbs" },
        { id: 'a', icon: '✍️', label: "Автор ¦ Muallif ¦ Author" },
        { id: 'd', icon: '📅', label: "Дата ¦ Sana ¦ Date" },
        { id: 's', icon: '🔗', label: "Источник ¦ Manba ¦ Source" },
        { id: 'o', icon: '👥', label: "Другие ¦ Boshqalar ¦ Others" },
      ],
      steps: [
        { say: "Посёлок Талкитна на Аляске. Там жил рыжий кот Стаббс. ¦ Alyaskadagi Talkitna qishlog'i. U yerda malla mushuk Stabbs yashagan. ¦ The town of Talkeetna, Alaska. A ginger cat named Stubbs lived there.", at: { cat: [50, 50, 1.6], a: [14, 18], d: [38, 18], s: [62, 18], o: [86, 18] } },
        { say: "Автор: о нём писали известные газеты и радио. ✓ ¦ Muallif: u haqida taniqli gazeta va radiolar yozgan. ✓ ¦ Author: well-known newspapers and radio covered him. ✓", pulse: ['a'], lines: [['a', 'cat', '✓']] },
        { say: "Дата: история длилась около 20 лет, с 1997 года. ✓ ¦ Sana: voqea 1997-yildan taxminan 20 yil davom etgan. ✓ ¦ Date: the story lasted about 20 years, from 1997. ✓", pulse: ['d'], lines: [['a', 'cat', '✓'], ['d', 'cat', '✓']] },
        { say: "Источник и другие: жители и разные издания подтверждают. ✓✓ ¦ Manba va boshqalar: aholi va turli nashrlar tasdiqlaydi. ✓✓ ¦ Source and others: locals and different outlets confirm it. ✓✓", pulse: ['s', 'o'], lines: [['a', 'cat', '✓'], ['d', 'cat', '✓'], ['s', 'cat', '✓'], ['o', 'cat', '✓']] },
        { say: "Но важная деталь: Стаббс был почётным мэром — без полномочий настоящего мэра. ¦ Lekin muhim detal: Stabbs faxriy mer bo'lgan — haqiqiy mer vakolatlarisiz. ¦ But a key detail: Stubbs was an honorary mayor — without a real mayor's powers.", set: { cat: { label: "Почётный мэр 🎖️ ¦ Faxriy mer 🎖️ ¦ Honorary mayor 🎖️" } }, pulse: ['cat'] },
      ],
      takeaway: "Вердикт: подтверждено — с уточнением «почётный». ¦ Hukm: tasdiqlandi — «faxriy» aniqlik kiritilgan holda. ¦ Verdict: confirmed — with the detail “honorary”.",
      notes: { min: 6 },
    },
    {
      type: 'truefalse',
      stage: 2,
      title: "Правда или нет? ¦ Rostmi yoki yo'q? ¦ True or not?",
      chat: "пиши «правда» или «нет» ¦ «rost» yoki «yo'q» deb yoz ¦ write “true” or “no”",
      statements: [
        { text: "Если новость странная, она точно ложная ¦ Yangilik g'alati bo'lsa, u aniq yolg'on ¦ If a story is strange, it must be false", truth: false, explain: "Кот-мэр странный, но настоящий. ¦ Mushuk-mer g'alati, lekin haqiqiy. ¦ The cat mayor is strange but real." },
        { text: "Если об этом пишет только один неизвестный сайт — данных мало ¦ Bu haqda faqat bitta noma'lum sayt yozsa — ma'lumot kam ¦ If only one unknown site says it, there's not enough data", truth: true, explain: "Нужны независимые подтверждения. ¦ Mustaqil tasdiqlar kerak. ¦ You need independent confirmation." },
      ],
      notes: { min: 4 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: вынеси вердикт ¦ O'zing bajar: hukm chiqar ¦ Your turn: give a verdict",
      chat: "пиши «подтверждено», «опровергнуто» или «данных мало» и улику ¦ «tasdiqlandi», «rad etildi» yoki «ma'lumot kam» va dalilni yoz ¦ write “confirmed”, “debunked” or “not enough data” plus a clue",
      goal: "Ты проверяешь новости как журналист! ¦ Yangiliklarni jurnalistdek tekshirasan! ¦ You check news like a journalist!",
      items: [
        { title: "«Завтра отменят все уроки навсегда!» — пишет неизвестный аккаунт без даты ¦ «Ertaga barcha darslar butunlay bekor qilinadi!» — sanasiz noma'lum akkaunt yozmoqda ¦ “All lessons cancelled forever from tomorrow!” — says an unknown account with no date", choices: ["Данных мало ¦ Ma'lumot kam ¦ Not enough data", "Подтверждено ¦ Tasdiqlandi ¦ Confirmed"], correct: 0, explain: "Нет автора, даты и других источников. ¦ Muallif, sana va boshqa manbalar yo'q. ¦ No author, date or other sources." },
        { title: "Школа на своём сайте и в письме родителям пишет: «Экскурсия в пятницу» ¦ Maktab o'z saytida va ota-onalarga xatda yozadi: «Juma kuni sayohat» ¦ The school's site and a letter to parents both say: “Trip on Friday”", choices: ["Подтверждено ¦ Tasdiqlandi ¦ Confirmed", "Опровергнуто ¦ Rad etildi ¦ Debunked"], correct: 0, explain: "Первоисточник и подтверждение есть. ¦ Birlamchi manba ham, tasdiq ham bor. ¦ There's an original source and confirmation." },
      ],
      notes: { min: 8 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: проверяй, а не угадывай ¦ Xulosa: taxmin qilma, tekshir ¦ Wrap-up: check, don't guess",
      chat: "какой из четырёх вопросов тебе понравился? номер ¦ to'rt savoldan qaysi biri senga yoqdi? raqam ¦ which of the four questions did you like? a number",
      answer: "Странная новость не всегда ложная: кот Стаббс правда был почётным мэром Талкитны на Аляске. Чтобы проверить новость, спрашиваем: кто автор, когда это было, где первоисточник и подтверждают ли другие. Ответ может быть «подтверждено», «опровергнуто» или «данных мало». ¦ G'alati yangilik har doim ham yolg'on emas: Stabbs mushuk haqiqatan ham Alyaskadagi Talkitnaning faxriy meri bo'lgan. Yangilikni tekshirish uchun so'raymiz: muallif kim, qachon bo'lgan, birlamchi manba qayerda va boshqalar tasdiqlaydimi. Javob «tasdiqlandi», «rad etildi» yoki «ma'lumot kam» bo'lishi mumkin. ¦ A strange story isn't always false: Stubbs the cat really was the honorary mayor of Talkeetna, Alaska. To check a story, ask who wrote it, when, where the original source is and whether others confirm it. The answer can be “confirmed”, “debunked” or “not enough data”.",
      icon: '🐱',
      badge: "Юный журналист ¦ Yosh jurnalist ¦ Young journalist",
      badgeSub: kick('cyber', 't', 4),
      homeworkTitle: HOME,
      homework: [
        "Найди вместе со взрослым одну удивительную новость и проверь её по четырём вопросам. ¦ Kattalar bilan birga bitta ajoyib yangilik top va uni to'rt savol bo'yicha tekshir. ¦ With a grown-up, find one amazing story and check it with the four questions.",
        "Нужны: бумага и карандаш. ¦ Kerak: qog'oz va qalam. ¦ You need: paper and a pencil.",
      ],
      notes: { min: 3 },
    },
  ],
});
