import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

const CSS = `.wrap{display:grid;place-items:center;height:100%;font-family:Inter,system-ui,sans-serif}
svg text{font:700 22px Inter,system-ui}`;
// Müller-Lyer: two equal lines (240 px) with arrow ends; ruler optional
const lines = (ruler: boolean) => `<div class="wrap"><svg viewBox="0 0 420 300" width="560"><g stroke="#16181f" stroke-width="6" stroke-linecap="round" fill="none">
<path d="M90 80 H330"/><path d="M90 80 l30 -26 M90 80 l30 26 M330 80 l-30 -26 M330 80 l-30 26"/>
<path d="M90 200 H330"/><path d="M90 200 l-30 -26 M90 200 l-30 26 M330 200 l30 -26 M330 200 l30 26"/></g>
<text x="20" y="88">1</text><text x="20" y="208">2</text>
${ruler ? `<g><rect x="90" y="100" width="240" height="18" fill="#ffd400" opacity=".85"/><rect x="90" y="220" width="240" height="18" fill="#ffd400" opacity=".85"/><text x="160" y="286" fill="#d53a17">240 = 240</text></g>` : ''}
</svg></div>`;
// Simultaneous contrast: the same grey square on dark and light backgrounds; "cover" hides the backgrounds
const greys = (cover: boolean) => `<div class="wrap"><svg viewBox="0 0 440 260" width="580">
<rect x="10" y="20" width="200" height="200" fill="#2a2d34"/><rect x="230" y="20" width="200" height="200" fill="#e9ebef"/>
<rect x="75" y="85" width="70" height="70" fill="#8a8f99"/><rect x="295" y="85" width="70" height="70" fill="#8a8f99"/>
${cover ? `<path fill="#fff" fill-rule="evenodd" d="M0 0H440V260H0Z M75 85h70v70h-70Z M295 85h70v70h-70Z"/><rect x="2" y="2" width="436" height="256" fill="none" stroke="#c9cdd3" stroke-width="3"/>` : ''}
<text x="100" y="250">A</text><text x="320" y="250">B</text></svg></div>`;

export default kit({
  id: 'kids-g07',
  title: "Оптические иллюзии: почему глаза нас обманывают ¦ Optik illyuziyalar: ko'zlarimiz bizni nega aldaydi ¦ Optical illusions: why our eyes fool us",
  question: "Можно ли верить своим глазам? ¦ Ko'zlarimizga ishonsa bo'ladimi? ¦ Can you trust your eyes?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '👁️',
      kicker: kick('cyber', 'g', 3),
      title: "Ловушки для глаз ¦ Ko'z uchun tuzoqlar ¦ Traps for the eyes",
      chat: "твои глаза тебя когда-нибудь обманывали? 👀 или 🙅 ¦ ko'zlaring seni hech aldaganmi? 👀 yoki 🙅 ¦ have your eyes ever fooled you? 👀 or 🙅",
      lead: "Мозг очень быстро догадывается, что мы видим. Обычно он прав, но иногда ошибается — так появляются иллюзии. Сегодня мы проверим впечатление линейкой и листом бумаги. ¦ Miya nimani ko'rayotganimizni juda tez taxmin qiladi. Odatda u haq, lekin ba'zan adashadi — illyuziyalar shunday paydo bo'ladi. Bugun taassurotni chizg'ich va qog'oz varaq bilan tekshiramiz. ¦ Your brain guesses what you see very quickly. It's usually right, but sometimes wrong — that's an illusion. Today we check first impressions with a ruler and a sheet of paper.",
      facts: [
        "Нужны: лист бумаги и линейка ¦ Kerak: qog'oz varaq va chizg'ich ¦ You need: paper and a ruler",
        "Сначала голосуем, потом проверяем ¦ Avval ovoz beramiz, keyin tekshiramiz ¦ Vote first, then check",
      ],
      notes: { min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Какая линия длиннее: 1 или 2? ¦ Qaysi chiziq uzunroq: 1 yoki 2? ¦ Which line is longer: 1 or 2?",
      chat: "голосуй цифрой: 1, 2 или «равны» ¦ raqam bilan ovoz ber: 1, 2 yoki «teng» ¦ vote: 1, 2 or “equal”",
      lang: 'text',
      css: CSS,
      steps: [
        { code: '1 ? 2', html: lines(false), say: "Посмотри внимательно. Кажется, что нижняя линия длиннее… ¦ Diqqat bilan qara. Pastki chiziq uzunroqdek tuyuladi… ¦ Look carefully. The bottom line seems longer…" },
        { code: 'ruler ✓', html: lines(true), say: "Прикладываем линейку: линии одинаковые! Мозг обманули «стрелочки» на концах. ¦ Chizg'ichni qo'yamiz: chiziqlar bir xil! Miyani uchlaridagi «strelkalar» aldadi. ¦ Out comes the ruler: they're equal! The little arrows at the ends fooled the brain." },
      ],
      notes: { say: ['Ментор измеряет линии на своём экране или листе и показывает результат.'], min: 6 },
    },
    {
      type: 'show',
      stage: 2,
      title: "Квадрат A темнее, чем B? ¦ A kvadrat B dan to'qroqmi? ¦ Is square A darker than B?",
      chat: "пиши «одинаковые» или «разные» ¦ «bir xil» yoki «har xil» deb yoz ¦ write “same” or “different”",
      lang: 'text',
      css: CSS,
      steps: [
        { code: 'A ? B', html: greys(false), say: "На тёмном фоне квадрат кажется светлее, на светлом — темнее. ¦ To'q fonda kvadrat ochroq, och fonda esa to'qroq ko'rinadi. ¦ On a dark background the square looks lighter, on a light one darker." },
        { code: 'cover the background', html: greys(true), say: "Закрываем фон листом с двумя окошками — квадраты одинаково серые! ¦ Fonni ikki teshikli varaq bilan yopamiz — kvadratlar bir xil kulrang! ¦ Cover the background with a sheet with two windows — the squares are the same grey!" },
      ],
      takeaway: "Линейка проверяет длину, а цвет — лист с окошками. ¦ Uzunlikni chizg'ich, rangni esa teshikli varaq tekshiradi. ¦ A ruler checks length; a sheet with windows checks colour.",
      notes: { say: ['Важно: линейка цвет не проверяет. Для цвета убираем влияние фона.'], min: 8 },
    },
    {
      type: 'truefalse',
      stage: 2,
      title: "Правда или нет? ¦ Rostmi yoki yo'q? ¦ True or not?",
      chat: "пиши «правда» или «нет» ¦ «rost» yoki «yo'q» deb yoz ¦ write “true” or “no”",
      statements: [
        { text: "Иллюзия значит, что с глазами что-то не так ¦ Illyuziya ko'zda muammo borligini bildiradi ¦ An illusion means something is wrong with your eyes", truth: false, explain: "Иллюзии видят все люди — так работает мозг. ¦ Illyuziyalarni hamma ko'radi — miya shunday ishlaydi. ¦ Everyone sees illusions — that's how brains work." },
        { text: "Первое впечатление лучше проверять ¦ Birinchi taassurotni tekshirgan yaxshi ¦ It's wise to check a first impression", truth: true, explain: "Линейкой, сравнением или опытом. ¦ Chizg'ich, solishtirish yoki tajriba bilan. ¦ With a ruler, a comparison or an experiment." },
      ],
      notes: { min: 4 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: проверь впечатление ¦ O'zing bajar: taassurotni tekshir ¦ Your turn: check the impression",
      chat: "номер ответа в чат ¦ javob raqamini chatga ¦ answer number in the chat",
      goal: "Тебя не обманешь! ¦ Seni aldab bo'lmaydi! ¦ You can't be fooled!",
      items: [
        { title: "Чем проверить, равны ли две линии? ¦ Ikki chiziq tengligini nima bilan tekshirish mumkin? ¦ How do you check two lines are equal?", choices: ["Линейкой ¦ Chizg'ich bilan ¦ With a ruler", "На глаз ¦ Ko'z bilan chamalab ¦ By eye"], correct: 0, explain: "Линейка не обманывается. ¦ Chizg'ich aldanmaydi. ¦ A ruler isn't fooled." },
        { title: "Как проверить, одинаковы ли цвета? ¦ Ranglar bir xilligini qanday tekshirish mumkin? ¦ How do you check two colours are the same?", choices: ["Закрыть фон листом с окошками ¦ Fonni teshikli varaq bilan yopish ¦ Cover the background with a sheet", "Измерить линейкой ¦ Chizg'ich bilan o'lchash ¦ Measure with a ruler"], correct: 0, explain: "Без фона мозг видит настоящий цвет. ¦ Fonsiz miya haqiqiy rangni ko'radi. ¦ Without the background, the brain sees the real colour." },
      ],
      notes: { min: 6 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: впечатление → проверка ¦ Xulosa: taassurot → tekshiruv ¦ Wrap-up: impression → check",
      chat: "твоё мнение изменилось после опыта? «да» или «нет» ¦ tajribadan keyin fikring o'zgardimi? «ha» yoki «yo'q» ¦ did the experiment change your mind? “yes” or “no”",
      answer: "Мозг быстро догадывается, что мы видим, и иногда ошибается. Одинаковые линии кажутся разными из-за стрелочек на концах, одинаковый серый — из-за фона. Поэтому первое впечатление проверяем: длину — линейкой, цвет — листом с окошками. ¦ Miya nimani ko'rayotganimizni tez taxmin qiladi va ba'zan adashadi. Bir xil chiziqlar uchlaridagi strelkalar tufayli, bir xil kulrang esa fon tufayli har xil ko'rinadi. Shuning uchun birinchi taassurotni tekshiramiz: uzunlikni — chizg'ich bilan, rangni — teshikli varaq bilan. ¦ The brain guesses fast and sometimes gets it wrong. Equal lines look different because of the arrow ends, the same grey because of the background. So we check first impressions: length with a ruler, colour with a sheet with windows.",
      icon: '🔍',
      badge: "Проверяльщик ¦ Tekshiruvchi ¦ Fact checker",
      badgeSub: kick('cyber', 'g', 3),
      homeworkTitle: HOME,
      homework: [
        "Нарисуй две равные линии со стрелочками и проверь иллюзию на родных. ¦ Strelkali ikki teng chiziq chiz va illyuziyani yaqinlaringda sinab ko'r. ¦ Draw two equal lines with arrow ends and try the illusion on your family.",
        "Нужны: бумага и линейка. ¦ Kerak: qog'oz va chizg'ich. ¦ You need: paper and a ruler.",
      ],
      notes: { min: 3 },
    },
  ],
});
