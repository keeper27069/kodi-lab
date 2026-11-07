import { kit } from '@engine/kit';
import { HOME, ROUTE, kick, tri } from './_kids';

const CSS = `.wrap{display:flex;gap:40px;align-items:center;justify-content:center;height:100%;font-family:Inter,system-ui,sans-serif}
.pie{width:330px;height:330px;border-radius:50%;box-shadow:0 0 0 6px #fff,0 8px 24px #0002}
.leg{display:flex;flex-direction:column;gap:12px;font-size:24px;font-weight:700}
.leg span{display:flex;align-items:center;gap:12px}.leg i{width:26px;height:26px;border-radius:7px}`;
// [hours, colour, ru, uz, en]
type Part = [number, string, string, string, string];
const SLEEP: Part = [10, '#5b6ef5', '😴 Сон', '😴 Uyqu', '😴 Sleep'];
const SCHOOL: Part = [6, '#fa4f28', '🏫 Школа', '🏫 Maktab', '🏫 School'];
const FOOD: Part = [2, '#0cd678', '🍽️ Еда', '🍽️ Ovqat', '🍽️ Meals'];
const HOMEWORK: Part = [2, '#ffb000', '📚 Уроки', '📚 Uy vazifasi', '📚 Homework'];
const PLAY: Part = [2, '#0fa38e', '⚽ Игры', "⚽ O'yin", '⚽ Play'];
const SCREEN: Part = [2, '#a855f7', '📱 Экран', '📱 Ekran', '📱 Screens'];
const FREE: Part = [0, '#e9ebef', '⬜ Свободно', "⬜ Bo'sh", '⬜ Free'];
const pie = (parts: Part[]) =>
  tri((l) => {
    const k = l === 'ru' ? 2 : l === 'uz' ? 3 : 4;
    const used = parts.reduce((a, p) => a + p[0], 0);
    const all = used < 24 ? [...parts, [24 - used, FREE[1], FREE[2], FREE[3], FREE[4]] as Part] : parts;
    let acc = 0;
    const stops = all.map((p) => `${p[1]} ${(acc / 24) * 360}deg ${((acc += p[0]) / 24) * 360}deg`).join(',');
    return `<div class="wrap"><div class="pie" style="background:conic-gradient(${stops})"></div><div class="leg">${all.map((p) => `<span><i style="background:${p[1]}"></i>${p[k]} · ${p[0]}</span>`).join('')}</div></div>`;
  });

export default kit({
  id: 'kids-g08',
  title: "24 часа в одном круге: куда уходит мой день ¦ Bir doirada 24 soat: kunim qayerga ketadi ¦ 24 hours in one circle: where my day goes",
  question: "Хватит ли в одном дне времени на всё? ¦ Bir kunda hamma narsaga vaqt yetadimi? ¦ Is there time for everything in one day?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🕐',
      kicker: kick('cyber', 'g', 4),
      title: "Мой день как пирог ¦ Kunim pirogdek ¦ My day as a pie",
      chat: "во сколько ты сегодня проснулся? ¦ bugun soat nechada uyg'onding? ¦ what time did you wake up today?",
      lead: "В сутках 24 часа — не больше и не меньше. Нарисуем день как круг и разделим его на кусочки: сон, школа, еда, игры, экран. Так видно, куда уходит время! ¦ Bir sutkada 24 soat bor — ortiq ham, kam ham emas. Kunni doira qilib chizamiz va bo'laklarga bo'lamiz: uyqu, maktab, ovqat, o'yin, ekran. Vaqt qayerga ketayotgani shunda ko'rinadi! ¦ A day has 24 hours — no more, no less. Let's draw the day as a circle and slice it: sleep, school, meals, play, screens. Then you can see where time goes!",
      facts: [
        "Нужны: бумага и цветные карандаши ¦ Kerak: qog'oz va rangli qalamlar ¦ You need: paper and coloured pencils",
      ],
      notes: { min: 3 },
    },
    {
      type: 'predict',
      stage: 1,
      title: "Сколько часов в день ты спишь? ¦ Kuniga necha soat uxlaysan? ¦ How many hours a day do you sleep?",
      chat: "пиши число ¦ sonni yoz ¦ write a number",
      label: "Часов сна ¦ Uyqu soatlari ¦ Hours of sleep",
      min: 5,
      max: 14,
      answer: 10,
      unit: "ч ¦ soat ¦ h",
      result: "Детям 8–10 лет обычно советуют спать 9–12 часов. Сон — самый большой кусок пирога! ¦ 8–10 yoshli bolalarga odatda 9–12 soat uxlash tavsiya etiladi. Uyqu — pirogning eng katta bo'lagi! ¦ Kids aged 8–10 are usually advised to sleep 9–12 hours. Sleep is the biggest slice!",
      notes: { min: 5 },
    },
    {
      type: 'show',
      stage: 2,
      title: "Собираем день по кусочкам ¦ Kunni bo'laklab yig'amiz ¦ Building the day slice by slice",
      chat: "сколько часов осталось свободными? ¦ necha soat bo'sh qoldi? ¦ how many hours are left free?",
      lang: 'text',
      css: CSS,
      steps: [
        { code: '😴 10', html: pie([SLEEP]), say: "Сначала сон — 10 часов. Почти половина круга! ¦ Avval uyqu — 10 soat. Deyarli doiraning yarmi! ¦ First sleep — 10 hours. Almost half the circle!" },
        { code: '🏫 6', html: pie([SLEEP, SCHOOL]), say: "Школа с дорогой — 6 часов. ¦ Yo'li bilan maktab — 6 soat. ¦ School and getting there — 6 hours." },
        { code: '🍽️ 2 · 📚 2', html: pie([SLEEP, SCHOOL, FOOD, HOMEWORK]), say: "Еда и уроки — по 2 часа. Осталось 4 часа. ¦ Ovqat va uy vazifasi — 2 soatdan. 4 soat qoldi. ¦ Meals and homework — 2 hours each. 4 hours left." },
        { code: '⚽ 2 · 📱 2', html: pie([SLEEP, SCHOOL, FOOD, HOMEWORK, PLAY, SCREEN]), say: "Игры и экран — по 2 часа. Круг полный: 24 часа! ¦ O'yin va ekran — 2 soatdan. Doira to'ldi: 24 soat! ¦ Play and screens — 2 hours each. The circle is full: 24 hours!" },
      ],
      takeaway: "Если экран занял больше, какой-то другой кусок станет меньше. ¦ Agar ekran ko'proq joy olsa, boshqa bir bo'lak kichrayadi. ¦ If screens take more, another slice gets smaller.",
      notes: { min: 8 },
    },
    {
      type: 'poll',
      stage: 2,
      title: "Экран занял 6 часов. Что уменьшится? ¦ Ekran 6 soatni oldi. Nima kamayadi? ¦ Screens took 6 hours. What shrinks?",
      chat: "пиши номер ¦ raqamini yoz ¦ write the number",
      options: [
        { label: "1 · Сон или игры на улице ¦ 1 · Uyqu yoki ko'chadagi o'yin ¦ 1 · Sleep or outdoor play" },
        { label: "2 · Ничего — время растянется ¦ 2 · Hech narsa — vaqt cho'ziladi ¦ 2 · Nothing — time will stretch" },
      ],
      correct: 0,
      result: "Время не растягивается: 24 часа на всех. Лишние часы у экрана забирают сон, игры или прогулки. ¦ Vaqt cho'zilmaydi: hammaga 24 soat. Ekran oldidagi ortiqcha soatlar uyqu, o'yin yoki sayrdan olinadi. ¦ Time doesn't stretch: everyone gets 24 hours. Extra screen hours come out of sleep, play or walks.",
      notes: { say: ['Не стыдим детей за время у экрана. Просто показываем, что круг общий.'], min: 5 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: нарисуй свой круг ¦ O'zing bajar: o'z doirangni chiz ¦ Your turn: draw your own circle",
      chat: "сколько часов у тебя уходит на экран? число ¦ ekranga necha soat ketadi? son ¦ how many hours go on screens? a number",
      goal: "Ты умеешь планировать свой день! ¦ Kuningni rejalashtira olasan! ¦ You can plan your day!",
      items: [
        { title: "Сколько часов в сутках? ¦ Bir sutkada necha soat bor? ¦ How many hours in a day?", choices: ["24", "12"], correct: 0, explain: "День и ночь вместе. ¦ Kun va tun birga. ¦ Day and night together." },
        { title: "Какой кусок у детей самый большой? ¦ Bolalarda qaysi bo'lak eng katta? ¦ Which slice is biggest for kids?", choices: ["Сон ¦ Uyqu ¦ Sleep", "Экран ¦ Ekran ¦ Screens"], correct: 0, explain: "Детям нужно спать 9–12 часов. ¦ Bolalarga 9–12 soat uxlash kerak. ¦ Kids need 9–12 hours of sleep." },
      ],
      notes: { say: ['5 минут на свой круг. В чат — только число часов у экрана, без других личных подробностей.'], min: 6 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: 24 часа на всё ¦ Xulosa: hammasiga 24 soat ¦ Wrap-up: 24 hours for everything",
      chat: "что ты добавишь в свой день? одно слово ¦ kuningga nima qo'shasan? bitta so'z ¦ what will you add to your day? one word",
      answer: "В сутках 24 часа, и их нельзя растянуть. Больше всего у детей занимает сон, потом школа. Если на экран уходит много времени, меньше остаётся на сон, игры и прогулки. Круг дня помогает увидеть время и спланировать день, в котором хватает места для всего важного. ¦ Bir sutkada 24 soat bor va ularni cho'zib bo'lmaydi. Bolalarda eng ko'p vaqtni uyqu, keyin maktab oladi. Ekranga ko'p vaqt ketsa, uyqu, o'yin va sayrga kamroq qoladi. Kun doirasi vaqtni ko'rishga va barcha muhim narsalarga joy yetadigan kunni rejalashtirishga yordam beradi. ¦ A day has 24 hours and they don't stretch. Sleep takes the most for kids, then school. Lots of screen time leaves less for sleep, play and walks. A day circle helps you see your time and plan a day with room for everything important.",
      icon: '🕐',
      badge: "Хозяин времени ¦ Vaqt egasi ¦ Time keeper",
      badgeSub: kick('cyber', 'g', 4),
      homeworkTitle: HOME,
      homework: [
        "Нарисуй круг завтрашнего дня и покажи его родным. ¦ Ertangi kun doirasini chiz va yaqinlaringga ko'rsat. ¦ Draw tomorrow's circle and show it to your family.",
        "Нужны: бумага и цветные карандаши. ¦ Kerak: qog'oz va rangli qalamlar. ¦ You need: paper and coloured pencils.",
      ],
      notes: { min: 3 },
    },
  ],
});
