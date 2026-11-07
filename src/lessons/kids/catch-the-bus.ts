import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

// timeline 8:30 → 9:15; px per minute
const X0 = 60;
const PX = 14;
const x = (min: number) => X0 + (min - 30) * PX; // minutes after 8:00
type Kid = [string, number, number]; // name icon, leaves (min after 8:00), walk minutes
const CSS = `.wrap{display:grid;place-items:center;height:100%;font-family:Inter,system-ui,sans-serif}
svg text{font:700 18px Inter,system-ui}`;
const chart = (kids: Kid[], show: number) => {
  const ticks = [30, 40, 50, 60, 70].map((m) => `<line x1="${x(m)}" y1="30" x2="${x(m)}" y2="300" stroke="#e1e4ea" stroke-width="2"/><text x="${x(m) - 22}" y="330">${m < 60 ? '8:' + m : '9:' + String(m - 60).padStart(2, '0')}</text>`).join('');
  const bus = `<line x1="${x(60)}" y1="20" x2="${x(60)}" y2="300" stroke="#fa4f28" stroke-width="5"/><text x="${x(60) + 8}" y="24" fill="#d53a17">🚌 9:00</text>`;
  const rows = kids
    .map(([who, leave, walk], i) => {
      const y = 70 + i * 80;
      const ok = leave + walk <= 60;
      const bar = i < show ? `<rect x="${x(leave)}" y="${y - 16}" width="${walk * PX}" height="32" rx="10" fill="${ok ? '#0cd678' : '#d80000'}"/><text x="${x(leave + walk) + 8}" y="${y + 6}">${ok ? '✓' : '✗'}</text>` : '';
      return `<text x="4" y="${y + 8}" style="font-size:30px">${who}</text>${bar}`;
    })
    .join('');
  return `<div class="wrap"><svg viewBox="0 0 760 340" width="760">${ticks}${bus}${rows}</svg></div>`;
};
const KIDS: Kid[] = [
  ['👧', 40, 15],
  ['👦', 50, 15],
  ['👩‍🦱', 45, 10],
];

export default kit({
  id: 'kids-g16',
  title: "Кто успеет на автобус ¦ Avtobusga kim ulguradi ¦ Who will catch the bus",
  question: "Автобус уходит в 9:00. Кто из друзей успеет? ¦ Avtobus 9:00 da jo'naydi. Do'stlardan kim ulguradi? ¦ The bus leaves at 9:00. Which friends will make it?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🚌',
      kicker: kick('logic', 'g', 8),
      title: "Гонка со временем ¦ Vaqt bilan poyga ¦ A race against time",
      chat: "сколько минут ты идёшь до школы? число ¦ maktabgacha necha daqiqa yurasan? son ¦ how many minutes is your walk to school? a number",
      lead: "Автобус на экскурсию уходит ровно в 9:00. Аня выходит в 8:40 и идёт 15 минут. Бек выходит в 8:50 и идёт 15 минут. Лола выходит в 8:45 и идёт 10 минут. Кто успеет? ¦ Sayohat avtobusi roppa-rosa 9:00 da jo'naydi. Anya 8:40 da chiqadi va 15 daqiqa yuradi. Bek 8:50 da chiqadi va 15 daqiqa yuradi. Lola 8:45 da chiqadi va 10 daqiqa yuradi. Kim ulguradi? ¦ The trip bus leaves at exactly 9:00. Anya leaves home at 8:40 and walks 15 minutes. Bek leaves at 8:50 and walks 15. Lola leaves at 8:45 and walks 10. Who makes it?",
      facts: ["👧 Аня ¦ 👧 Anya ¦ 👧 Anya", "👦 Бек ¦ 👦 Bek ¦ 👦 Bek", "👩‍🦱 Лола ¦ 👩‍🦱 Lola ¦ 👩‍🦱 Lola"],
      notes: { min: 3 },
    },
    {
      type: 'poll',
      stage: 1,
      title: "Сначала угадай: кто опоздает? ¦ Avval taxmin qil: kim kechikadi? ¦ Guess first: who'll be late?",
      chat: "пиши имя ¦ ismni yoz ¦ write a name",
      options: [
        { label: "👧 Аня ¦ 👧 Anya ¦ 👧 Anya" },
        { label: "👦 Бек ¦ 👦 Bek ¦ 👦 Bek" },
        { label: "👩‍🦱 Лола ¦ 👩‍🦱 Lola ¦ 👩‍🦱 Lola" },
      ],
      correct: 1,
      result: "Проверим на шкале времени! ¦ Vaqt chizig'ida tekshiramiz! ¦ Let's check on a timeline!",
      notes: { min: 4 },
    },
    {
      type: 'show',
      stage: 2,
      title: "Шкала времени ¦ Vaqt chizig'i ¦ The timeline",
      chat: "пиши имена тех, кто успел ¦ ulgurganlarning ismini yoz ¦ write the names of those who made it",
      lang: 'text',
      css: CSS,
      steps: [
        { code: '8:40 + 15 = 8:55', html: chart(KIDS, 1), say: "Аня: 8:40 + 15 минут = 8:55. Успела! ¦ Anya: 8:40 + 15 daqiqa = 8:55. Ulgurdi! ¦ Anya: 8:40 + 15 minutes = 8:55. Made it!" },
        { code: '8:50 + 15 = 9:05', html: chart(KIDS, 2), say: "Бек: 8:50 + 15 = 9:05. Автобус уже ушёл… ¦ Bek: 8:50 + 15 = 9:05. Avtobus allaqachon ketgan… ¦ Bek: 8:50 + 15 = 9:05. The bus has gone…" },
        { code: '8:45 + 10 = 8:55', html: chart(KIDS, 3), say: "Лола: 8:45 + 10 = 8:55. Успела! ¦ Lola: 8:45 + 10 = 8:55. Ulgurdi! ¦ Lola: 8:45 + 10 = 8:55. Made it!" },
        { code: 'Bek: 8:40 → 8:55', html: chart([KIDS[0], ['👦', 40, 15], KIDS[2]], 3), say: "А если Бек выйдет в 8:40? Тогда он придёт в 8:55 и тоже успеет. ¦ Bek 8:40 da chiqsa-chi? Unda 8:55 da keladi va u ham ulguradi. ¦ What if Bek leaves at 8:40? He arrives at 8:55 and makes it too." },
      ],
      takeaway: "Время прихода = время выхода + время в пути. Приходить надо до отправления. ¦ Kelish vaqti = chiqish vaqti + yo'ldagi vaqt. Jo'nashdan oldin kelish kerak. ¦ Arrival = leaving time + travel time. Arrive before departure.",
      notes: { min: 9 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: успеет или нет? ¦ O'zing bajar: ulguradimi yoki yo'qmi? ¦ Your turn: on time or not?",
      chat: "номер ответа в чат ¦ javob raqamini chatga ¦ answer number in the chat",
      goal: "Ты управляешь временем! ¦ Sen vaqtni boshqarasan! ¦ You're in charge of time!",
      items: [
        { title: "Тимур выходит в 8:30 и идёт 25 минут ¦ Temur 8:30 da chiqadi va 25 daqiqa yuradi ¦ Timur leaves at 8:30 and walks 25 minutes", choices: ["Успеет (8:55) ¦ Ulguradi (8:55) ¦ Makes it (8:55)", "Опоздает ¦ Kechikadi ¦ Late"], correct: 0, explain: "8:30 + 25 = 8:55 ¦ 8:30 + 25 = 8:55 ¦ 8:30 + 25 = 8:55" },
        { title: "Мадина выходит в 8:55 и идёт 10 минут ¦ Madina 8:55 da chiqadi va 10 daqiqa yuradi ¦ Madina leaves at 8:55 and walks 10 minutes", choices: ["Успеет ¦ Ulguradi ¦ Makes it", "Опоздает (9:05) ¦ Kechikadi (9:05) ¦ Late (9:05)"], correct: 1, explain: "8:55 + 10 = 9:05 — позже 9:00. ¦ 8:55 + 10 = 9:05 — 9:00 dan keyin. ¦ 8:55 + 10 = 9:05 — after 9:00." },
      ],
      notes: { min: 8 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: считаем время прихода ¦ Xulosa: kelish vaqtini hisoblaymiz ¦ Wrap-up: work out arrival time",
      chat: "во сколько тебе выходить, чтобы успеть? ¦ ulgurish uchun soat nechada chiqishing kerak? ¦ when should you leave to make it?",
      answer: "Чтобы узнать, кто успеет, к времени выхода прибавляем время в пути. Аня и Лола приходят в 8:55 и успевают, Бек приходит в 9:05 и опаздывает. Шкала времени помогает увидеть всё сразу и проверить ответ, если условия изменятся. ¦ Kim ulgurishini bilish uchun chiqish vaqtiga yo'ldagi vaqtni qo'shamiz. Anya va Lola 8:55 da kelib ulgurishadi, Bek 9:05 da kelib kechikadi. Vaqt chizig'i hammasini birdaniga ko'rishga va shartlar o'zgarsa javobni tekshirishga yordam beradi. ¦ To see who makes it, add travel time to leaving time. Anya and Lola arrive at 8:55 and make it; Bek arrives at 9:05 and is late. A timeline shows it all at once and lets you recheck when things change.",
      icon: '⏰',
      badge: "Повелитель времени ¦ Vaqt hukmdori ¦ Time master",
      badgeSub: kick('logic', 'g', 8),
      homeworkTitle: HOME,
      homework: [
        "Посчитай, во сколько тебе выходить в школу, чтобы прийти за 5 минут до звонка. ¦ Qo'ng'iroqdan 5 daqiqa oldin kelish uchun maktabga soat nechada chiqishingni hisobla. ¦ Work out when to leave so you reach school 5 minutes before the bell.",
        "Нужны: бумага и карандаш. ¦ Kerak: qog'oz va qalam. ¦ You need: paper and a pencil.",
      ],
      notes: { min: 6 },
    },
  ],
});
