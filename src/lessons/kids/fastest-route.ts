import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

// nodes of the neighbourhood map
const N: Record<string, [number, number, string]> = {
  H: [60, 200, '🏠'], A: [260, 70, '🏪'], B: [220, 300, '🌳'], C: [420, 300, '🕌'], S: [620, 200, '🏫'],
};
const E: [string, string, number][] = [
  ['H', 'A', 5], ['A', 'S', 12], ['H', 'B', 4], ['B', 'C', 3], ['C', 'S', 4],
];
const CSS = `.wrap{display:grid;place-items:center;height:100%;font-family:Inter,system-ui,sans-serif}
svg text{font:800 26px Inter,system-ui}`;
const map = (hl: string[] = [], col = '#fa4f28') => {
  const edges = E.map(([a, b, m]) => {
    const on = hl.includes(a + b);
    const [x1, y1] = N[a];
    const [x2, y2] = N[b];
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${on ? col : '#c9cdd3'}" stroke-width="${on ? 12 : 8}" stroke-linecap="round"/><rect x="${(x1 + x2) / 2 - 34}" y="${(y1 + y2) / 2 - 22}" width="68" height="40" rx="12" fill="#fff" stroke="${on ? col : '#e1e4ea'}" stroke-width="3"/><text x="${(x1 + x2) / 2 - 24}" y="${(y1 + y2) / 2 + 8}">${m}′</text>`;
  }).join('');
  const nodes = Object.values(N).map(([x, y, i]) => `<circle cx="${x}" cy="${y}" r="38" fill="#fff" stroke="#16181f" stroke-width="3"/><text x="${x - 20}" y="${y + 12}" style="font-size:36px">${i}</text>`).join('');
  return `<div class="wrap"><svg viewBox="0 0 680 370" width="760">${edges}${nodes}</svg></div>`;
};

export default kit({
  id: 'kids-g18',
  title: "Как навигатор находит быстрый путь ¦ Navigator tez yo'lni qanday topadi ¦ How a navigator finds the fastest route",
  question: "Короткий путь — всегда самый быстрый? ¦ Qisqa yo'l doim eng tezmi? ¦ Is the shortest way always the fastest?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🧭',
      kicker: kick('algo', 'g', 2),
      title: "Карта махалли ¦ Mahalla xaritasi ¦ A neighbourhood map",
      chat: "как ты добираешься до школы? 🚶 🚌 или 🚗 ¦ maktabga qanday borasan? 🚶 🚌 yoki 🚗 ¦ how do you get to school? 🚶 🚌 or 🚗",
      lead: "На карте у каждой дороги написано, сколько минут по ней идти. Где-то пробка, где-то светофор. Навигатор складывает минуты и выбирает самый быстрый путь. Попробуем так же! ¦ Xaritada har bir yo'lda u bo'ylab necha daqiqa yurish yozilgan. Qayerdadir tirbandlik, qayerdadir svetofor. Navigator daqiqalarni qo'shadi va eng tez yo'lni tanlaydi. Biz ham shunday qilib ko'ramiz! ¦ On this map, each road shows how many minutes it takes. Some have traffic, some have lights. A navigator adds up the minutes and picks the fastest way. Let's try!",
      notes: { min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Два пути от дома до школы ¦ Uydan maktabgacha ikki yo'l ¦ Two ways from home to school",
      chat: "пиши, за сколько минут проходит выбранный путь ¦ tanlangan yo'l necha daqiqada o'tilishini yoz ¦ write how many minutes your chosen route takes",
      lang: 'text',
      css: CSS,
      steps: [
        { code: '🏠 → 🏫 ?', html: map(), say: "Сложи минуты на каждом пути. Какой быстрее? ¦ Har bir yo'ldagi daqiqalarni qo'sh. Qaysi biri tezroq? ¦ Add up the minutes on each route. Which is faster?" },
        { code: '5 + 12 = 17', html: map(['HA', 'AS']), say: "Через магазин: всего две дороги, путь короче. Но 5 + 12 = 17 минут — там пробка. ¦ Do'kon orqali: atigi ikki yo'l, yo'l qisqaroq. Lekin 5 + 12 = 17 daqiqa — u yerda tirbandlik. ¦ Via the shop: only two roads, a shorter route. But 5 + 12 = 17 minutes — there's traffic." },
        { code: '4 + 3 + 4 = 11', html: map(['HB', 'BC', 'CS'], '#0cd678'), say: "Через парк и мечеть: три дороги, но 4 + 3 + 4 = 11 минут. Быстрее! ¦ Bog' va masjid orqali: uchta yo'l, lekin 4 + 3 + 4 = 11 daqiqa. Tezroq! ¦ Via the park and the mosque: three roads, but 4 + 3 + 4 = 11 minutes. Faster!" },
      ],
      takeaway: "Самый короткий путь не всегда самый быстрый. Считать надо минуты. ¦ Eng qisqa yo'l doim eng tez emas. Daqiqalarni hisoblash kerak. ¦ The shortest way isn't always the fastest. Count the minutes.",
      notes: { min: 9 },
    },
    {
      type: 'poll',
      stage: 2,
      title: "На дороге через парк ремонт: теперь 4 → 10 минут. Какой путь выберет навигатор? ¦ Bog' orqali yo'lda ta'mir: endi 4 → 10 daqiqa. Navigator qaysi yo'lni tanlaydi? ¦ Roadworks by the park: 4 → 10 minutes now. Which route will the navigator pick?",
      chat: "пиши номер ¦ raqamini yoz ¦ write the number",
      options: [
        { label: "1 · Через магазин: 17 минут ¦ 1 · Do'kon orqali: 17 daqiqa ¦ 1 · Via the shop: 17 minutes" },
        { label: "2 · Через парк: 10 + 3 + 4 = 17 минут ¦ 2 · Bog' orqali: 10 + 3 + 4 = 17 daqiqa ¦ 2 · Via the park: 10 + 3 + 4 = 17 minutes" },
        { label: "3 · Оба одинаковые ¦ 3 · Ikkalasi bir xil ¦ 3 · Both are the same" },
      ],
      correct: 2,
      result: "Оба по 17 минут! Навигатор пересчитывает путь каждый раз, когда что-то меняется. ¦ Ikkalasi ham 17 daqiqa! Navigator biror narsa o'zgarsa, yo'lni har safar qayta hisoblaydi. ¦ Both take 17 minutes! A navigator recalculates every time something changes.",
      notes: { min: 6 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: посчитай минуты ¦ O'zing bajar: daqiqalarni hisobla ¦ Your turn: count the minutes",
      chat: "номер ответа в чат ¦ javob raqamini chatga ¦ answer number in the chat",
      goal: "Ты работаешь как навигатор! ¦ Navigatordek ishlaysan! ¦ You work like a navigator!",
      items: [
        { title: "Путь 1: 6 + 6. Путь 2: 3 + 3 + 3. Какой быстрее? ¦ 1-yo'l: 6 + 6. 2-yo'l: 3 + 3 + 3. Qaysi biri tezroq? ¦ Route 1: 6 + 6. Route 2: 3 + 3 + 3. Which is faster?", choices: ["Путь 2 (9 минут) ¦ 2-yo'l (9 daqiqa) ¦ Route 2 (9 minutes)", "Путь 1 (12 минут) ¦ 1-yo'l (12 daqiqa) ¦ Route 1 (12 minutes)"], correct: 0, explain: "9 меньше 12, хотя дорог больше. ¦ Yo'llar ko'proq bo'lsa ham, 9 12 dan kam. ¦ 9 is less than 12, even with more roads." },
        { title: "Что считает навигатор? ¦ Navigator nimani hisoblaydi? ¦ What does a navigator add up?", choices: ["Минуты на дорогах ¦ Yo'llardagi daqiqalar ¦ Minutes on each road", "Количество домов ¦ Uylar soni ¦ The number of houses"], correct: 0, explain: "И пересчитывает, если что-то меняется. ¦ Va biror narsa o'zgarsa, qayta hisoblaydi. ¦ And recalculates if anything changes." },
      ],
      notes: { min: 7 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: быстрый ≠ короткий ¦ Xulosa: tez ≠ qisqa ¦ Wrap-up: fast ≠ short",
      chat: "какой путь быстрее у тебя до магазина? ¦ do'kongacha qaysi yo'ling tezroq? ¦ which way to the shop is fastest for you?",
      answer: "Навигатор складывает минуты на каждой дороге и выбирает путь с наименьшей суммой. Путь через магазин короче, но с пробкой — 17 минут, а через парк и мечеть — 11. Когда на дороге что-то меняется, навигатор пересчитывает всё заново. ¦ Navigator har bir yo'ldagi daqiqalarni qo'shadi va yig'indisi eng kichik yo'lni tanlaydi. Do'kon orqali yo'l qisqaroq, lekin tirbandlik bor — 17 daqiqa, bog' va masjid orqali esa — 11. Yo'lda biror narsa o'zgarsa, navigator hammasini qaytadan hisoblaydi. ¦ A navigator adds the minutes on each road and picks the route with the smallest total. Via the shop is shorter but jammed — 17 minutes; via the park and mosque it's 11. When something changes, it recalculates everything.",
      icon: '🧭',
      badge: "Живой навигатор ¦ Tirik navigator ¦ Human navigator",
      badgeSub: kick('algo', 'g', 2),
      homeworkTitle: HOME,
      homework: [
        "Нарисуй карту от дома до школы с двумя путями и подпиши минуты. ¦ Uydan maktabgacha ikki yo'lli xarita chiz va daqiqalarni yozib qo'y. ¦ Draw a map from home to school with two routes and label the minutes.",
        "Нужны: бумага и карандаш. ¦ Kerak: qog'oz va qalam. ¦ You need: paper and a pencil.",
      ],
      notes: { min: 5 },
    },
  ],
});
