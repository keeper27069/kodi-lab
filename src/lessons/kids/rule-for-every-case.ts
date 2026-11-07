import { kit } from '@engine/kit';
import { HOME, KCSS, ROUTE, rkick } from './_kids';

/* The robot reads the weather and picks clothes by its rule */
const CSS = `${KCSS}
.wx{display:flex;gap:40px;align-items:center}
.wx .sky,.wx .bot{width:180px;height:180px;border-radius:28px;display:grid;place-items:center;font-size:96px;background:#fff;border:3px solid #e1e4ea}
.wx .bot{width:240px;height:auto;min-height:180px;padding:12px 0;font-size:54px;line-height:1.25;text-align:center;white-space:nowrap}
.wx .bot.bad{border-color:#d80000;background:#ffecec}
.wx .bot.ok{border-color:#0cd678;background:#e9fbf2}
.arrow{font-size:56px}
.rule{margin-top:22px;display:inline-block;padding:10px 18px;border-radius:12px;background:#0fa38e;color:#fff;font:800 24px 'JetBrains Mono',monospace}`;
const dress = (sky: string, wear: string, mark: '' | 'ok' | 'bad', rule: string) =>
  `<div class="wrap"><div style="text-align:center"><div class="wx"><div class="sky">${sky}</div><span class="arrow">➡️</span><div class="bot ${mark}">🤖<br>${wear}</div></div><div class="rule">${rule}</div></div></div>`;
const R1 = 'If 🌧️ → 🧥☂️ · else → 🧢🕶️';
const R2 = 'If 🌧️ → 🧥☂️ · else if ❄️ → 🧣🧤 · else → 🧢🕶️';

export default kit({
  id: 'kids-t32',
  title: "Правило для каждого случая ¦ Har bir holat uchun qoida ¦ A rule for every case",
  question: "Как научить робота одеваться по погоде — в любой день? ¦ Robotni har qanday kunda ob-havoga qarab kiyinishga qanday o'rgatish mumkin? ¦ How do you teach a robot to dress for the weather — any day?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🌦️',
      kicker: rkick('algo'),
      title: "Робот собирается на прогулку ¦ Robot sayrga otlanyapti ¦ The robot is going out",
      chat: "что ты надеваешь, когда идёт дождь? ¦ yomg'ir yog'ayotganda nima kiyasan? ¦ what do you wear when it rains?",
      lead: "Робот выходит на улицу и смотрит на небо. Ему нужно правило «если… иначе…»: если дождь — куртка и зонт, иначе — кепка и очки. Проверим правило в солнечный и дождливый день. А что, если пойдёт снег? ¦ Robot ko'chaga chiqib, osmonga qaraydi. Unga «agar… aks holda…» qoidasi kerak: agar yomg'ir bo'lsa — kurtka va soyabon, aks holda — kepka va ko'zoynak. Qoidani quyoshli va yomg'irli kunda tekshiramiz. Qor yog'sa-chi? ¦ The robot steps outside and looks at the sky. It needs an “if… else…” rule: if it rains — a jacket and umbrella, else — a cap and sunglasses. We'll test it on a sunny day and a rainy day. And what if it snows?",
      facts: [
        "Повторяем уроки 20–23: условия ¦ 20–23-darslarni takrorlaymiz: shartlar ¦ We revise lessons 20–23: conditions",
      ],
      notes: { min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Проверяем правило ¦ Qoidani tekshiramiz ¦ Testing the rule",
      chat: "сработало ли правило? «да» или «нет» ¦ qoida ishladimi? «ha» yoki «yo'q» ¦ did the rule work? “yes” or “no”",
      lang: 'text',
      css: CSS,
      steps: [
        { code: '☀️ → else', html: dress('☀️', '🧢🕶️', 'ok', R1), say: "Солнце — дождя нет, работает «иначе»: кепка и очки. Отлично! ¦ Quyosh — yomg'ir yo'q, «aks holda» ishlaydi: kepka va ko'zoynak. Zo'r! ¦ Sunny — no rain, so “else” runs: cap and sunglasses. Great!" },
        { code: '🌧️ → if', html: dress('🌧️', '🧥☂️', 'ok', R1), say: "Дождь — условие верно: куртка и зонт. Тоже правильно! ¦ Yomg'ir — shart to'g'ri: kurtka va soyabon. Bu ham to'g'ri! ¦ Rain — the condition is true: jacket and umbrella. Right again!" },
        { code: '❄️ → else ?!', html: dress('❄️', '🧢🕶️', 'bad', R1), say: "Снег! Дождя нет — и робот надел кепку и очки. Замёрзнет! Правило не подумало про этот случай. ¦ Qor! Yomg'ir yo'q — va robot kepka va ko'zoynak kiydi. Muzlab qoladi! Qoida bu holatni o'ylamagan. ¦ Snow! It's not rain — so the robot put on a cap and sunglasses. It'll freeze! The rule forgot this case." },
        { code: '❄️ → else if ✓', html: dress('❄️', '🧣🧤', 'ok', R2), say: "Добавляем ещё одну проверку: «иначе если снег — шарф и варежки». Теперь правило полное. ¦ Yana bitta tekshiruv qo'shamiz: «aks holda agar qor bo'lsa — sharf va qo'lqop». Endi qoida to'liq. ¦ Add one more check: “else if snow — scarf and mittens”. Now the rule is complete." },
      ],
      takeaway: "Хорошее правило работает для каждого случая. Проверь все варианты! ¦ Yaxshi qoida har bir holat uchun ishlaydi. Barcha variantlarni tekshir! ¦ A good rule works for every case. Check them all!",
      notes: { min: 10 },
    },
    {
      type: 'truefalse',
      stage: 2,
      title: "Правда или нет? ¦ Rostmi yoki yo'q? ¦ True or not?",
      chat: "пиши «правда» или «нет» ¦ «rost» yoki «yo'q» deb yoz ¦ write “true” or “no”",
      statements: [
        { text: "«Иначе» срабатывает, когда условие неверно ¦ «Aks holda» shart noto'g'ri bo'lganda ishlaydi ¦ “Else” runs when the condition is false", truth: true, explain: "Если дождя нет — работает «иначе». ¦ Yomg'ir bo'lmasa — «aks holda» ishlaydi. ¦ No rain — the else part runs." },
        { text: "Правило достаточно проверить в один день ¦ Qoidani bir kunda tekshirish yetarli ¦ Testing the rule on one day is enough", truth: false, explain: "Нужно проверить все случаи: солнце, дождь, снег. ¦ Barcha holatlarni tekshirish kerak: quyosh, yomg'ir, qor. ¦ You need to test every case: sun, rain, snow." },
      ],
      notes: { min: 4 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: допиши правило ¦ O'zing bajar: qoidani to'ldir ¦ Your turn: finish the rule",
      chat: "пиши: «если …, то …, иначе …» ¦ yoz: «agar …, u holda …, aks holda …» ¦ write: “if …, then …, else …”",
      goal: "Твоё правило не подведёт робота ни в какую погоду! ¦ Qoidang robotni hech qanday ob-havoda pand bermaydi! ¦ Your rule won't let the robot down in any weather!",
      items: [
        { title: "Ветрено. Какой случай забыли? ¦ Shamol. Qaysi holat unutildi? ¦ It's windy. Which case was forgotten?", choices: ["«Если ветер — ветровка» ¦ «Agar shamol bo'lsa — shamolga qarshi kurtka» ¦ “If windy — a windbreaker”", "Ничего не нужно менять ¦ Hech narsani o'zgartirish shart emas ¦ Nothing needs changing"], correct: 0, explain: "Новый случай — новая проверка. ¦ Yangi holat — yangi tekshiruv. ¦ A new case needs a new check." },
        { title: "Робот-светофор: если красный — стоим, иначе… ¦ Svetofor-robot: agar qizil bo'lsa — turamiz, aks holda… ¦ Traffic-light robot: if red — stop, else…", choices: ["…иначе если жёлтый — ждём, иначе — идём ¦ …aks holda agar sariq bo'lsa — kutamiz, aks holda — yuramiz ¦ …else if yellow — wait, else — go", "…иначе — идём (и всё) ¦ …aks holda — yuramiz (tamom) ¦ …else — go (that's all)"], correct: 0, explain: "У светофора три цвета — нужно три случая. ¦ Svetoforda uchta rang — uchta holat kerak. ¦ A traffic light has three colours — so three cases." },
      ],
      notes: { min: 8 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: если… иначе… для всех случаев ¦ Xulosa: agar… aks holda… barcha holatlar uchun ¦ Wrap-up: if… else… for every case",
      chat: "какой случай ты добавишь роботу? ¦ robotga qanday holat qo'shasan? ¦ which case would you add for the robot?",
      answer: "Правило «если дождь — куртка и зонт, иначе — кепка и очки» работает в солнечный и дождливый день, но в снег робот замёрзнет. Чтобы правило было полным, проверяем все случаи и добавляем «иначе если снег — шарф и варежки». Так программисты делают программы надёжными. ¦ «Agar yomg'ir bo'lsa — kurtka va soyabon, aks holda — kepka va ko'zoynak» qoidasi quyoshli va yomg'irli kunda ishlaydi, lekin qorda robot muzlab qoladi. Qoida to'liq bo'lishi uchun barcha holatlarni tekshiramiz va «aks holda agar qor bo'lsa — sharf va qo'lqop» qo'shamiz. Dasturchilar dasturlarni shunday ishonchli qiladi. ¦ The rule “if rain — jacket and umbrella, else — cap and sunglasses” works on sunny and rainy days, but in snow the robot freezes. To make it complete, test every case and add “else if snow — scarf and mittens”. That's how programmers make programs reliable.",
      icon: '🌦️',
      badge: "Мастер правил ¦ Qoidalar ustasi ¦ Rule master",
      badgeSub: rkick('algo'),
      homeworkTitle: HOME,
      homework: [
        "Сделай карточки погоды (☀️🌧️❄️💨) и одежды. Напиши правило для робота и проверь его на каждой карточке вместе с родными. ¦ Ob-havo (☀️🌧️❄️💨) va kiyim kartochkalarini yasa. Robot uchun qoida yoz va uni yaqinlaring bilan har bir kartochkada tekshir. ¦ Make weather cards (☀️🌧️❄️💨) and clothes cards. Write a rule for the robot and test it on every card with your family.",
        "Нужны: карточки из бумаги. ¦ Kerak: qog'oz kartochkalar. ¦ You need: paper cards.",
      ],
      notes: { min: 5 },
    },
  ],
});
