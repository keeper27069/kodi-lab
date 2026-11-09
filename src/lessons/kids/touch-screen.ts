import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

export default kit({
  id: 'kids-g04',
  title: "Что замечает сенсорный экран? ¦ Sensorli ekran nimani sezadi? ¦ What does a touch screen notice?",
  question: "Почему экран не слушается руки в обычной перчатке? ¦ Nega ekran oddiy qo'lqopdagi qo'lga bo'ysunmaydi? ¦ Why won't a screen obey a hand in an ordinary glove?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '👆',
      kicker: kick('comp', 'g', 4),
      title: "Экран, который чувствует ¦ Sezadigan ekran ¦ A screen that feels",
      chat: "сколько раз в день ты касаешься экрана? число ¦ kuniga necha marta ekranga tegasan? son ¦ how many times a day do you touch a screen? a number",
      lead: "Ты касаешься экрана — и он понимает, где твой палец. Но в зимней перчатке иногда ничего не выходит. Почему? Сегодня ты станешь учёным: сначала догадка, потом проверка. ¦ Ekranga tegasan — u barmog'ing qayerdaligini tushunadi. Lekin qishki qo'lqopda ba'zan hech narsa chiqmaydi. Nega? Bugun sen olim bo'lasan: avval taxmin, keyin tekshiruv. ¦ You touch a screen and it knows where your finger is. But in a winter glove it sometimes doesn't work. Why? Today you're a scientist: guess first, then test.",
      facts: [
        "Внутри экрана — сетка из невидимых проводков ¦ Ekran ichida ko'rinmas simchalar to'ri bor ¦ Inside the screen is a grid of invisible wires",
        "Твоё тело немного проводит электричество ¦ Tanang elektrni ozgina o'tkazadi ¦ Your body conducts a little electricity",
      ],
      notes: { min: 3 },
    },
    {
      type: 'poll',
      stage: 1,
      title: "Заметит ли экран палец в обычной перчатке? ¦ Ekran oddiy qo'lqopdagi barmoqni sezadimi? ¦ Will the screen notice a finger in an ordinary glove?",
      chat: "пиши «да» или «нет» ¦ «ha» yoki «yo'q» deb yoz ¦ write “yes” or “no”",
      options: [
        { label: "Да ✅ ¦ Ha ✅ ¦ Yes ✅" },
        { label: "Нет ❌ ¦ Yo'q ❌ ¦ No ❌" },
      ],
      correct: 1,
      result: "Обычно нет: ткань не пропускает к экрану маленький заряд твоего тела. ¦ Odatda yo'q: mato tanangdagi kichik zaryadni ekranga o'tkazmaydi. ¦ Usually no: the fabric blocks your body's tiny charge from the screen.",
      notes: { say: ['Сначала собираем гипотезы, потом ментор показывает опыт на своём устройстве.'], min: 5 },
    },
    {
      type: 'animate',
      stage: 2,
      title: "Как экран находит палец ¦ Ekran barmoqni qanday topadi ¦ How the screen finds your finger",
      chat: "что помогает экрану: палец или ткань? ¦ ekranga nima yordam beradi: barmoqmi yoki mato? ¦ what helps the screen: a finger or fabric?",
      actors: [
        { id: 'scr', icon: '📱', label: "Сетка в экране ¦ Ekrandagi to'r ¦ The grid in the screen" },
        { id: 'f', icon: '☝️', label: "Палец ¦ Barmoq ¦ Finger" },
        { id: 'z', icon: '⚡', label: "Крошечный заряд ¦ Juda kichik zaryad ¦ A tiny charge" },
        { id: 'g', icon: '🧤', label: "Перчатка ¦ Qo'lqop ¦ Glove" },
      ],
      steps: [
        { say: "По сетке в экране бегает слабое электричество. ¦ Ekrandagi to'rda kuchsiz elektr yuradi. ¦ Weak electricity runs through the grid in the screen.", at: { scr: [50, 70, 1.6], f: [50, 14], z: [80, 70, 0.8] } },
        { say: "Палец касается — тело забирает чуть-чуть заряда. Экран это замечает! ¦ Barmoq tegadi — tana ozgina zaryadni oladi. Ekran buni sezadi! ¦ A finger touches — your body takes a little charge. The screen notices!", at: { f: [50, 46], z: [50, 58] }, pulse: ['scr', 'z'] },
        { say: "Теперь палец в обычной перчатке. ¦ Endi barmoq oddiy qo'lqopda. ¦ Now the finger is in an ordinary glove.", at: { f: [50, 14], z: [80, 70, 0.8], g: [50, 30] } },
        { say: "Ткань — как стена: заряд не проходит, экран молчит. ¦ Mato devorga o'xshaydi: zaryad o'tmaydi, ekran jim. ¦ Fabric is like a wall: no charge passes, the screen stays silent.", at: { g: [50, 46] }, pulse: ['g'] },
        { say: "В сенсорной перчатке на кончиках вшиты особые нити — и экран снова слушается. ¦ Sensorli qo'lqop uchlariga maxsus iplar tikilgan — ekran yana bo'ysunadi. ¦ A touch glove has special threads in its fingertips — and the screen obeys again.", set: { g: { label: "Сенсорная перчатка ¦ Sensorli qo'lqop ¦ Touch glove" } }, at: { z: [50, 58] }, pulse: ['scr'] },
      ],
      takeaway: "Экран замечает то, что проводит электричество, как твоё тело. ¦ Ekran tanang kabi elektr o'tkazadigan narsani sezadi. ¦ The screen notices things that conduct electricity, like your body.",
      notes: { min: 7 },
    },
    {
      type: 'sort',
      stage: 2,
      title: "Заметит или нет? ¦ Sezadimi yoki yo'qmi? ¦ Will it notice?",
      chat: "пиши: «1 — да» ¦ yoz: «1 — ha» ¦ write: “1 — yes”",
      zones: [
        { id: 'y', label: "Заметит ¦ Sezadi ¦ It notices", icon: '✅' },
        { id: 'n', label: "Не заметит ¦ Sezmaydi ¦ It doesn't", icon: '❌' },
      ],
      items: [
        { text: "Обычный палец без перчатки ¦ Qo'lqopsiz oddiy barmoq ¦ A plain finger, no glove", zone: 'y' },
        { text: "Палец в шерстяной перчатке ¦ Jun qo'lqopdagi barmoq ¦ A finger in a woolly glove", zone: 'n' },
        { text: "Сенсорная перчатка ¦ Sensorli qo'lqop ¦ A touch glove", zone: 'y' },
        { text: "Карандаш с ластиком ¦ O'chirg'ichli qalam ¦ A pencil eraser", zone: 'n' },
      ],
      notes: { say: ['Ложку в руке показывает только ментор и только после проверки на своём устройстве: иногда срабатывает, иногда нет. Дома не повторяем.'], min: 7 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: гипотеза и проверка ¦ O'zing bajar: faraz va tekshiruv ¦ Your turn: guess and test",
      chat: "номер ответа в чат ¦ javob raqamini chatga ¦ answer number in the chat",
      goal: "Ты думаешь как учёный! ¦ Sen olimdek fikrlaysan! ¦ You think like a scientist!",
      items: [
        { title: "Что делает учёный сначала? ¦ Olim avval nima qiladi? ¦ What does a scientist do first?", choices: ["Выдвигает догадку ¦ Taxmin qiladi ¦ Makes a guess", "Сразу пишет ответ ¦ Darhol javob yozadi ¦ Writes the answer straight away"], correct: 0, explain: "Сначала гипотеза, потом опыт. ¦ Avval faraz, keyin tajriba. ¦ First a guess, then an experiment." },
        { title: "Почему перчатка мешает? ¦ Nega qo'lqop xalaqit beradi? ¦ Why does a glove get in the way?", choices: ["Экран боится холода ¦ Ekran sovuqdan qo'rqadi ¦ The screen fears the cold", "Ткань не пропускает заряд ¦ Mato zaryadni o'tkazmaydi ¦ Fabric blocks the charge"], correct: 1, explain: "Дело не в холоде, а в ткани. ¦ Gap sovuqda emas, matoda. ¦ It's the fabric, not the cold." },
        { title: "Ментор показал ложку: сработало не всегда. Почему? ¦ Mentor qoshiqni ko'rsatdi: har doim ishlamadi. Nega? ¦ The spoon worked only sometimes. Why?", choices: ["Результат зависит от экрана и касания ¦ Natija ekran va teginishga bog'liq ¦ It depends on the screen and the contact", "Ложка сломалась ¦ Qoshiq sindi ¦ The spoon broke"], correct: 0, explain: "Разные экраны чувствуют по-разному. ¦ Turli ekranlar turlicha sezadi. ¦ Different screens sense differently." },
      ],
      notes: { min: 5 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: экран чувствует электричество ¦ Xulosa: ekran elektrni sezadi ¦ Wrap-up: the screen senses electricity",
      chat: "твоя гипотеза подтвердилась? «да» или «нет» ¦ farazing tasdiqlandimi? «ha» yoki «yo'q» ¦ was your guess right? “yes” or “no”",
      answer: "В сенсорном экране есть сетка из тонких проводков со слабым электричеством. Палец забирает крошечный заряд, и экран понимает, где ты коснулся. Обычная ткань заряд не пропускает, а в сенсорной перчатке есть особые нити. Результат зависит от экрана и касания — поэтому учёные всё проверяют опытом. ¦ Sensorli ekranda kuchsiz elektrli ingichka simchalar to'ri bor. Barmoq juda kichik zaryadni oladi va ekran qayerga tekkaningni tushunadi. Oddiy mato zaryadni o'tkazmaydi, sensorli qo'lqopda esa maxsus iplar bor. Natija ekran va teginishga bog'liq — shuning uchun olimlar hammasini tajriba bilan tekshiradi. ¦ A touch screen has a grid of thin wires with weak electricity. Your finger takes a tiny charge, so the screen knows where you touched. Ordinary fabric blocks it; a touch glove has special threads. Results depend on the screen and the contact — that's why scientists test everything.",
      icon: '🧪',
      badge: "Юный учёный ¦ Yosh olim ¦ Young scientist",
      badgeSub: kick('comp', 'g', 4),
      homeworkTitle: HOME,
      homework: [
        "Запиши одну свою гипотезу о технике: «Я думаю, что…». Дома опыт повторять не нужно. ¦ Texnika haqida bitta farazingni yoz: «Menimcha…». Uyda tajribani takrorlash shart emas. ¦ Write one guess about gadgets: “I think that…”. No need to repeat the experiment at home.",
      ],
      notes: { min: 3 },
    },
  ],
});
