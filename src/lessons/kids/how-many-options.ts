import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

const SHIRTS = ['🟥', '🟦', '🟩'];
const SHORTS = ['⬛', '🟨'];
const CSS = `.wrap{display:grid;place-items:center;height:100%;font-family:Inter,system-ui,sans-serif}
.tb{display:grid;grid-template-columns:90px repeat(2,140px);gap:10px;align-items:center}
.h{font-size:44px;text-align:center}
.c{display:flex;gap:4px;justify-content:center;align-items:center;height:88px;border-radius:16px;background:#fff;border:3px solid #e1e4ea;font-size:38px}
.c.on{border-color:#fa4f28;background:#fff1ec}
.c b{font:800 20px Inter;color:#d53a17;margin-left:6px}
.sum{margin-top:18px;font:800 34px Inter;text-align:center}`;
const table = (n: number) => {
  let k = 0;
  const cells = SHIRTS.map((s) => `<div class="h">${s}</div>${SHORTS.map((p) => { k++; return k <= n ? `<div class="c on">👕${s}${p}<b>${k}</b></div>` : `<div class="c"></div>`; }).join('')}`).join('');
  return `<div class="wrap"><div><div class="tb"><div></div>${SHORTS.map((p) => `<div class="h">${p}</div>`).join('')}${cells}</div><div class="sum">${n === 6 ? '3 × 2 = 6' : n + ' …'}</div></div></div>`;
};

export default kit({
  id: 'kids-g11',
  title: "Сколько вариантов? Наряды, мороженое и замки ¦ Nechta variant? Kiyimlar, muzqaymoq va qulflar ¦ How many options? Outfits, ice cream and locks",
  question: "Как посчитать все варианты и ни одного не пропустить? ¦ Barcha variantlarni birortasini ham qoldirmay qanday sanash mumkin? ¦ How do you count every option without missing one?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '👕',
      kicker: kick('logic', 'g', 3),
      title: "Считаем варианты по порядку ¦ Variantlarni tartib bilan sanaymiz ¦ Counting options in order",
      chat: "сколько футболок у тебя в шкафу? число ¦ shkafingda nechta futbolka bor? son ¦ how many T-shirts are in your wardrobe? a number",
      lead: "У тебя 3 футболки и 2 пары шорт. Сколько разных нарядов можно собрать? Если перебирать как попало — легко ошибиться. Сегодня учимся системному перебору! ¦ Sening 3 ta futbolkang va 2 ta shortiking bor. Nechta har xil kiyim to'plamini yig'ish mumkin? Duch kelganicha sanasang — xato qilish oson. Bugun tizimli sanashni o'rganamiz! ¦ You have 3 T-shirts and 2 pairs of shorts. How many different outfits can you make? Counting randomly, it's easy to slip up. Today we learn to count systematically!",
      facts: [
        "Нужны: карточки одежды или бумага ¦ Kerak: kiyim kartochkalari yoki qog'oz ¦ You need: clothing cards or paper",
      ],
      notes: { min: 3 },
    },
    {
      type: 'predict',
      stage: 1,
      title: "3 футболки и 2 пары шорт — сколько нарядов? ¦ 3 ta futbolka va 2 ta shortik — nechta to'plam? ¦ 3 T-shirts and 2 pairs of shorts — how many outfits?",
      chat: "пиши число ¦ sonni yoz ¦ write a number",
      label: "Нарядов ¦ To'plamlar ¦ Outfits",
      min: 1,
      max: 10,
      answer: 6,
      result: "Шесть! Каждую футболку можно надеть с двумя шортами: 3 × 2 = 6. ¦ Oltita! Har bir futbolkani ikkita shortik bilan kiyish mumkin: 3 × 2 = 6. ¦ Six! Each T-shirt goes with two pairs of shorts: 3 × 2 = 6.",
      notes: { min: 4 },
    },
    {
      type: 'show',
      stage: 2,
      title: "Перебираем по порядку ¦ Tartib bilan sanaymiz ¦ Going through them in order",
      chat: "какой наряд ты бы выбрал? номер ¦ qaysi to'plamni tanlarding? raqam ¦ which outfit would you pick? a number",
      lang: 'text',
      css: CSS,
      steps: [
        { code: '🟥 + ⬛ 🟨', html: table(2), say: "Берём первую футболку и пробуем с каждыми шортами: 2 наряда. ¦ Birinchi futbolkani olamiz va har bir shortik bilan sinaymiz: 2 ta to'plam. ¦ Take the first T-shirt and try it with each pair of shorts: 2 outfits." },
        { code: '🟦 + ⬛ 🟨', html: table(4), say: "Вторая футболка — ещё 2. ¦ Ikkinchi futbolka — yana 2 ta. ¦ The second T-shirt — 2 more." },
        { code: '🟩 + ⬛ 🟨', html: table(6), say: "Третья — ещё 2. Таблица полная: 6 нарядов, ни один не пропущен. ¦ Uchinchisi — yana 2 ta. Jadval to'ldi: 6 ta to'plam, birortasi ham qolmadi. ¦ The third — 2 more. The table is full: 6 outfits, none missed." },
      ],
      notes: { min: 6 },
    },
    {
      type: 'predict',
      stage: 2,
      title: "Замок с кодом из двух цифр 0–9. Сколько кодов? ¦ 0–9 raqamlaridan iborat ikki xonali kodli qulf. Nechta kod bor? ¦ A lock with a two-digit code, 0–9. How many codes?",
      chat: "пиши число ¦ sonni yoz ¦ write a number",
      label: "Кодов ¦ Kodlar ¦ Codes",
      min: 10,
      max: 200,
      answer: 100,
      result: "100! Первая цифра — 10 вариантов, вторая — тоже 10. Повторы и ноль в начале можно: 00, 07, 99. 10 × 10 = 100. ¦ 100! Birinchi raqam — 10 variant, ikkinchisi ham 10. Takror va boshida nol bo'lishi mumkin: 00, 07, 99. 10 × 10 = 100. ¦ 100! The first digit has 10 options and so does the second. Repeats and a leading zero are allowed: 00, 07, 99. 10 × 10 = 100.",
      notes: { say: ['Дополнительный уровень для быстрых: три цифры — 10 × 10 × 10 = 1000 кодов.'], min: 5 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: мороженое ¦ O'zing bajar: muzqaymoq ¦ Your turn: ice cream",
      chat: "пиши число вариантов ¦ variantlar sonini yoz ¦ write the number of options",
      goal: "Ты считаешь варианты как профи! ¦ Variantlarni professionaldek sanaysan! ¦ You count options like a pro!",
      items: [
        { title: "3 вкуса 🍓🍫🍦 и 2 рожка. Сколько порций? ¦ 3 ta ta'm 🍓🍫🍦 va 2 ta vafli. Nechta porsiya? ¦ 3 flavours 🍓🍫🍦 and 2 cones. How many choices?", choices: ['6', '5'], correct: 0, explain: "3 × 2 = 6 ¦ 3 × 2 = 6 ¦ 3 × 2 = 6" },
        { title: "4 футболки и 2 шорт ¦ 4 ta futbolka va 2 ta shortik ¦ 4 T-shirts and 2 shorts", choices: ['6', '8'], correct: 1, explain: "4 × 2 = 8 ¦ 4 × 2 = 8 ¦ 4 × 2 = 8" },
        { title: "Как не пропустить вариант? ¦ Variantni qanday qoldirmaslik kerak? ¦ How do you avoid missing one?", choices: ["Перебирать по порядку ¦ Tartib bilan sanash ¦ Go in order", "Называть первые пришедшие ¦ Xayolga kelganini aytish ¦ Say whatever comes to mind"], correct: 0, explain: "Таблица помогает ничего не потерять. ¦ Jadval hech narsani yo'qotmaslikka yordam beradi. ¦ A table keeps track of everything." },
      ],
      notes: { min: 7 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: перебор по порядку ¦ Xulosa: tartib bilan sanash ¦ Wrap-up: count in order",
      chat: "сколько кодов у замка из трёх цифр? ¦ uch xonali qulfning nechta kodi bor? ¦ how many codes for a three-digit lock?",
      answer: "Чтобы посчитать все варианты, перебираем их по порядку: берём первую футболку и пробуем со всеми шортами, потом вторую. 3 футболки и 2 шорт дают 3 × 2 = 6 нарядов. Код из двух цифр 0–9 — это 10 × 10 = 100 вариантов, а из трёх — 1000. ¦ Barcha variantlarni sanash uchun ularni tartib bilan ko'rib chiqamiz: birinchi futbolkani olib barcha shortiklar bilan sinaymiz, keyin ikkinchisini. 3 futbolka va 2 shortik 3 × 2 = 6 to'plam beradi. 0–9 dan ikki xonali kod — 10 × 10 = 100 variant, uch xonali esa — 1000. ¦ To count every option, go in order: take the first T-shirt and try it with all the shorts, then the next. 3 T-shirts and 2 shorts give 3 × 2 = 6 outfits. A two-digit 0–9 code has 10 × 10 = 100 options; three digits give 1,000.",
      icon: '🔢',
      badge: "Мастер перебора ¦ Sanash ustasi ¦ Counting master",
      badgeSub: kick('logic', 'g', 3),
      homeworkTitle: HOME,
      homework: [
        "Посчитай, сколько бутербродов можно сделать из 2 видов хлеба и 3 начинок. Нарисуй таблицу. ¦ 2 xil non va 3 xil masalliqdan nechta buterbrod qilish mumkinligini sana. Jadval chiz. ¦ Count how many sandwiches you can make from 2 breads and 3 fillings. Draw a table.",
        "Нужны: бумага и карандаш. ¦ Kerak: qog'oz va qalam. ¦ You need: paper and a pencil.",
      ],
      notes: { min: 5 },
    },
  ],
});
