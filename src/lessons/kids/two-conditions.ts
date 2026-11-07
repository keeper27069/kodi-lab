import { kit } from '@engine/kit';
import { HOME, KCSS, ROUTE, kick } from './_kids';

/* The gate opens only with 🔑 AND 💡 (both); the bell rings with 🔑 OR 💡 (at least one) */
const CSS = `${KCSS}
.gate{display:grid;grid-template-columns:repeat(3,auto);gap:14px 22px;align-items:center;font-size:44px}
.gate b{font:800 26px Inter;color:#5b6170}
.gate .res{font-size:56px}
.op{display:inline-block;padding:8px 18px;border-radius:12px;background:#0fa38e;color:#fff;font:800 30px 'JetBrains Mono',monospace;margin-bottom:22px}`;
const yes = '✅';
const no = '❌';
const table = (op: 'AND' | 'OR', upto: number) => {
  const rows: [boolean, boolean][] = [[true, true], [true, false], [false, true], [false, false]];
  const out = rows
    .slice(0, upto)
    .map(([a, b]) => {
      const r = op === 'AND' ? a && b : a || b;
      const res = op === 'AND' ? (r ? '🚪✨' : '🚪🔒') : r ? '🔔' : '🔕';
      return `<span>${a ? '🔑' : '▫️'}</span><span>${b ? '💡' : '▫️'}</span><span class="res">${res}</span>`;
    })
    .join('');
  return `<div class="wrap"><div style="text-align:center"><div class="op">If 🔑 ${op} 💡</div><div class="gate">${out}</div></div></div>`;
};

export default kit({
  id: 'kids-t24',
  title: "Два условия сразу: И и ИЛИ ¦ Bir vaqtda ikki shart: VA va YOKI ¦ Two conditions at once: AND and OR",
  question: "Когда ворота откроются: если есть ключ И свет, или ключ ИЛИ свет? ¦ Darvoza qachon ochiladi: kalit VA yorug'lik bo'lsami yoki kalit YOKI yorug'likmi? ¦ When does the gate open: with a key AND a light, or a key OR a light?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🔑',
      kicker: kick('blockly', 't', 4),
      title: "Ворота в замке Кодди ¦ Koddi qasridagi darvoza ¦ The gate in Coddy's castle",
      chat: "что нужно, чтобы выйти гулять? пример ¦ sayrga chiqish uchun nima kerak? misol ¦ what do you need to go out to play? an example",
      lead: "Иногда одного условия мало. Ворота откроются, только если у Кодди есть ключ 🔑 И горит фонарик 💡 — нужны оба. А колокольчик зазвенит, если есть ключ ИЛИ фонарик — хватит одного. ¦ Ba'zan bitta shart kam. Darvoza faqat Koddida kalit 🔑 VA yonib turgan fonar 💡 bo'lsa ochiladi — ikkalasi kerak. Qo'ng'iroqcha esa kalit YOKI fonar bo'lsa jiringlaydi — bittasi yetadi. ¦ Sometimes one condition isn't enough. The gate opens only if Coddy has a key 🔑 AND the torch 💡 is on — both are needed. The bell rings if there's a key OR a torch — one is enough.",
      facts: [
        "Повторяем уроки 22–24 ¦ 22–24-darslarni takrorlaymiz ¦ We revise lessons 22–24",
        "AND = И (оба) · OR = ИЛИ (хотя бы одно) ¦ AND = VA (ikkalasi) · OR = YOKI (kamida bittasi) ¦ AND = both · OR = at least one",
      ],
      notes: { min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Блок «И»: нужны оба ¦ «VA» bloki: ikkalasi kerak ¦ The AND block: both are needed",
      chat: "откроются ли ворота? «да» или «нет» ¦ darvoza ochiladimi? «ha» yoki «yo'q» ¦ will the gate open? “yes” or “no”",
      lang: 'text',
      css: CSS,
      steps: [
        { code: `🔑 ${yes} 💡 ${yes}`, html: table('AND', 1), say: "Есть ключ и есть свет — ворота открываются! ¦ Kalit ham, yorug'lik ham bor — darvoza ochiladi! ¦ A key and a light — the gate opens!" },
        { code: `🔑 ${yes} 💡 ${no}`, html: table('AND', 2), say: "Ключ есть, а света нет — закрыто. ¦ Kalit bor, yorug'lik yo'q — yopiq. ¦ A key but no light — locked." },
        { code: `🔑 ${no} 💡 ${yes}`, html: table('AND', 3), say: "Свет есть, ключа нет — тоже закрыто. ¦ Yorug'lik bor, kalit yo'q — bu ham yopiq. ¦ A light but no key — still locked." },
        { code: `🔑 ${no} 💡 ${no}`, html: table('AND', 4), say: "Ничего нет — закрыто. Блок «И» пропускает только в одном случае из четырёх. ¦ Hech narsa yo'q — yopiq. «VA» bloki to'rtta holatdan faqat bittasida o'tkazadi. ¦ Nothing at all — locked. AND lets you through in only one case out of four." },
      ],
      notes: { min: 7 },
    },
    {
      type: 'show',
      stage: 2,
      title: "Блок «ИЛИ»: хватит одного ¦ «YOKI» bloki: bittasi yetadi ¦ The OR block: one is enough",
      chat: "в скольких случаях звенит колокольчик? число ¦ qo'ng'iroqcha nechta holatda jiringlaydi? son ¦ in how many cases does the bell ring? a number",
      lang: 'text',
      css: CSS,
      steps: [
        { code: `🔑 ${yes} 💡 ${yes}`, html: table('OR', 1), say: "Оба есть — звенит! ¦ Ikkalasi bor — jiringlaydi! ¦ Both — it rings!" },
        { code: `🔑 ${yes} 💡 ${no} · 🔑 ${no} 💡 ${yes}`, html: table('OR', 3), say: "Есть хотя бы одно — тоже звенит. ¦ Kamida bittasi bor — bu ham jiringlaydi. ¦ At least one — it rings too." },
        { code: `🔑 ${no} 💡 ${no}`, html: table('OR', 4), say: "Только когда нет ничего, колокольчик молчит. «ИЛИ» срабатывает в трёх случаях из четырёх. ¦ Faqat hech narsa bo'lmaganda qo'ng'iroqcha jim. «YOKI» to'rtta holatdan uchtasida ishlaydi. ¦ Only with nothing at all is the bell silent. OR works in three cases out of four." },
      ],
      takeaway: "«И» — нужны оба условия. «ИЛИ» — хватит одного. ¦ «VA» — ikkala shart kerak. «YOKI» — bittasi yetadi. ¦ AND needs both conditions. OR needs just one.",
      notes: { min: 7 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: И или ИЛИ? ¦ O'zing bajar: VA yoki YOKI? ¦ Your turn: AND or OR?",
      chat: "номер ответа в чат ¦ javob raqamini chatga ¦ answer number in the chat",
      goal: "Ты управляешь двумя условиями сразу! ¦ Sen bir vaqtda ikki shartni boshqarasan! ¦ You can handle two conditions at once!",
      items: [
        { title: "«Иду гулять, если сделал уроки И на улице светло». Сделал уроки, но темно. Иду? ¦ «Darslarni qilgan bo'lsam VA tashqari yorug' bo'lsa, sayrga chiqaman». Darslar qilingan, lekin qorong'i. Chiqamanmi? ¦ “I go out if homework is done AND it's light.” Homework's done but it's dark. Do I go?", choices: ["Нет — нужны оба условия ¦ Yo'q — ikkala shart kerak ¦ No — both are needed", "Да ¦ Ha ¦ Yes"], correct: 0, explain: "Для «И» одного условия мало. ¦ «VA» uchun bitta shart kam. ¦ For AND, one condition isn't enough." },
        { title: "«Беру зонт, если дождь ИЛИ снег». Идёт снег. Беру? ¦ «Yomg'ir YOKI qor bo'lsa, soyabon olaman». Qor yog'yapti. Olamanmi? ¦ “I take an umbrella if it rains OR snows.” It's snowing. Do I take it?", choices: ["Да — хватит одного ¦ Ha — bittasi yetadi ¦ Yes — one is enough", "Нет ¦ Yo'q ¦ No"], correct: 0, explain: "Для «ИЛИ» достаточно одного условия. ¦ «YOKI» uchun bitta shart yetarli. ¦ For OR, one condition is enough." },
      ],
      notes: { min: 8 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: И — оба, ИЛИ — одно ¦ Xulosa: VA — ikkalasi, YOKI — bittasi ¦ Wrap-up: AND = both, OR = one",
      chat: "придумай правило с «И» для своей комнаты ¦ xonang uchun «VA» bilan qoida o'ylab top ¦ make up an AND rule for your room",
      answer: "В блоке «Если» можно проверить два условия сразу. «И» (AND) срабатывает, только когда верны оба: ключ и свет. «ИЛИ» (OR) срабатывает, когда верно хотя бы одно. Так программы решают сложные ситуации — от дверей с кодом до светофоров. ¦ «Agar» blokida bir vaqtda ikki shartni tekshirish mumkin. «VA» (AND) faqat ikkalasi to'g'ri bo'lganda ishlaydi: kalit ham, yorug'lik ham. «YOKI» (OR) kamida bittasi to'g'ri bo'lganda ishlaydi. Dasturlar murakkab vaziyatlarni shunday hal qiladi — kodli eshiklardan svetoforlargacha. ¦ An If block can check two conditions at once. AND works only when both are true: a key and a light. OR works when at least one is true. That's how programs handle tricky situations — from coded doors to traffic lights.",
      icon: '🔑',
      badge: "Хранитель ворот ¦ Darvoza qo'riqchisi ¦ Gatekeeper",
      badgeSub: kick('blockly', 't', 4),
      homeworkTitle: HOME,
      homework: [
        "Придумай с родными 2 правила: одно с «И», другое с «ИЛИ». Запиши их и нарисуй таблицу ✅/❌. ¦ Yaqinlaring bilan 2 ta qoida o'ylab top: biri «VA» bilan, boshqasi «YOKI» bilan. Ularni yozib, ✅/❌ jadvalini chiz. ¦ Make up 2 rules with your family: one with AND, one with OR. Write them down and draw a ✅/❌ table.",
        "Нужны: бумага и карандаш. ¦ Kerak: qog'oz va qalam. ¦ You need: paper and a pencil.",
      ],
      notes: { min: 5 },
    },
  ],
});
