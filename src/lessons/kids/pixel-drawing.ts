import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

// 8×8 picture, 1 = coloured cell. A heart.
const HEART = ['01100110', '11111111', '11111111', '11111111', '01111110', '00111100', '00011000', '00000000'];
const CSS = `.wrap{display:flex;gap:28px;align-items:center;justify-content:center;height:100%;font-family:Inter,system-ui,sans-serif}
.g{display:grid;grid-template-columns:repeat(8,44px);gap:3px;padding:8px;background:#e1e4ea;border-radius:12px}
.g i{width:44px;height:44px;background:#fff;border-radius:4px}
.g i.on{background:#fa4f28}.g i.err{background:#ffd400}
.codes{display:flex;flex-direction:column;gap:3px;font:700 24px 'JetBrains Mono',monospace;color:#16181f}
.codes span{height:47px;display:flex;align-items:center}
.codes span.now{color:#fa4f28}`;
const draw = (rows: number, err = -1, fixed = false) => {
  const cells = HEART.map((r, y) =>
    r.split('').map((c, x) => {
      let on = y < rows && c === '1';
      if (y === 4 && x === 0 && err === 4 && !fixed) on = true; // a wrong cell in row 5
      const cls = on ? (y === 4 && x === 0 && err === 4 ? 'err' : 'on') : '';
      return `<i class="${cls}"></i>`;
    }).join(''),
  ).join('');
  const codes = HEART.map((r, y) => `<span class="${y === rows - 1 ? 'now' : ''}">${y < rows ? (y === 4 && err === 4 && !fixed ? '11111110' : r) : '········'}</span>`).join('');
  return `<div class="wrap"><div class="g">${cells}</div><div class="codes">${codes}</div></div>`;
};

export default kit({
  id: 'kids-t03',
  title: "Рисуем по клеточкам: как компьютер хранит картинку ¦ Kataklar bo'yicha chizamiz: kompyuter rasmni qanday saqlaydi ¦ Drawing on a grid: how a computer stores a picture",
  question: "Как превратить рисунок в цифры? ¦ Rasmni qanday qilib raqamlarga aylantirish mumkin? ¦ How do you turn a picture into numbers?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🟥',
      kicker: kick('comp', 't', 3),
      title: "Рисунок из клеточек ¦ Kataklardan rasm ¦ A picture made of squares",
      chat: "какого цвета твой любимый фломастер? ¦ sevimli flomasteringning rangi qanday? ¦ what colour is your favourite marker?",
      lead: "Если очень близко рассмотреть экран, видно крошечные квадратики — пиксели. Компьютер хранит картинку как список: какая клетка какого цвета. Сегодня мы будем таким компьютером! ¦ Ekranga juda yaqindan qarasang, mitti kvadratchalar — piksellar ko'rinadi. Kompyuter rasmni ro'yxat sifatida saqlaydi: qaysi katak qaysi rangda. Bugun biz shunday kompyuter bo'lamiz! ¦ Look really closely at a screen and you'll see tiny squares — pixels. A computer stores a picture as a list: which square is which colour. Today we'll be that computer!",
      facts: [
        "Повторяем уроки 19–22: рисунок, цвета, отмена, сохранение ¦ 19–22-darslarni takrorlaymiz: rasm, ranglar, bekor qilish, saqlash ¦ We revise lessons 19–22: drawing, colours, undo, saving",
        "Нужен лист в клетку и 2 цвета ¦ Katakli varaq va 2 ta rang kerak ¦ You need squared paper and 2 colours",
      ],
      notes: { say: ['Это упрощённая модель: настоящие пиксели хранят цвет числами, а не только 0 и 1.'], min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Ведущий диктует строки: 1 — закрась, 0 — оставь ¦ Boshlovchi qatorlarni aytadi: 1 — bo'ya, 0 — qoldir ¦ The host reads out rows: 1 = colour, 0 = leave blank",
      chat: "что получается? одно слово ¦ nima chiqyapti? bitta so'z ¦ what is it? one word",
      lang: 'text',
      css: CSS,
      steps: [
        { code: 'row 1: 01100110', html: draw(1), say: "Строка 1: 0 1 1 0 0 1 1 0. Закрась клетки, где 1. ¦ 1-qator: 0 1 1 0 0 1 1 0. 1 turgan kataklarni bo'ya. ¦ Row 1: 0 1 1 0 0 1 1 0. Colour the squares with a 1." },
        { code: 'rows 2–4: 11111111', html: draw(4), say: "Строки 2, 3 и 4 — восемь единиц. Что-то вырисовывается… ¦ 2, 3 va 4-qatorlar — sakkizta bir. Nimadir paydo bo'lyapti… ¦ Rows 2, 3 and 4 — eight ones each. Something is appearing…" },
        { code: 'rows 5–8', html: draw(8), say: "Ещё четыре строки — и это сердце! ❤️ ¦ Yana to'rtta qator — va bu yurak! ❤️ ¦ Four more rows — and it's a heart! ❤️" },
      ],
      notes: { min: 6 },
    },
    {
      type: 'show',
      stage: 2,
      title: "Найди и исправь ошибку ¦ Xatoni top va tuzat ¦ Find and fix the mistake",
      chat: "в какой строке ошибка? номер ¦ xato qaysi qatorda? raqam ¦ which row has the mistake? a number",
      lang: 'text',
      css: CSS,
      steps: [
        { code: 'row 5: 11111110 ?', html: draw(8, 4), say: "Робот закрасил лишнюю клетку. Сравни код строки 5 с рисунком. ¦ Robot ortiqcha katakni bo'yab qo'ydi. 5-qator kodini rasm bilan solishtir. ¦ The robot coloured an extra square. Compare row 5's code with the picture." },
        { code: 'row 5: 01111110 ✓', html: draw(8, 4, true), say: "В строке 5 первая цифра должна быть 0. Исправили — сердце снова ровное. ¦ 5-qatorda birinchi raqam 0 bo'lishi kerak. Tuzatdik — yurak yana tekis. ¦ In row 5 the first digit should be 0. Fixed — the heart is neat again." },
      ],
      takeaway: "Одна неверная цифра — и картинка портится. Компьютер слушается цифр точно. ¦ Bitta noto'g'ri raqam — va rasm buziladi. Kompyuter raqamlarga aniq bo'ysunadi. ¦ One wrong digit spoils the picture. The computer follows the digits exactly.",
      notes: { min: 7 },
    },
    {
      type: 'truefalse',
      stage: 2,
      title: "Правда или нет? ¦ Rostmi yoki yo'q? ¦ True or not?",
      chat: "пиши «правда» или «нет» ¦ «rost» yoki «yo'q» deb yoz ¦ write “true” or “no”",
      statements: [
        { text: "Картинка на экране состоит из маленьких точек ¦ Ekrandagi rasm kichik nuqtalardan iborat ¦ A screen picture is made of tiny dots", truth: true, explain: "Это пиксели. ¦ Bular piksellar. ¦ They're pixels." },
        { text: "Чем больше клеток, тем точнее рисунок ¦ Katak qancha ko'p bo'lsa, rasm shuncha aniq ¦ More squares means a more detailed picture", truth: true, explain: "В фото с телефона их миллионы. ¦ Telefon suratida ular millionlab. ¦ A phone photo has millions." },
        { text: "Компьютер помнит рисунок словами «красивое сердце» ¦ Kompyuter rasmni «chiroyli yurak» degan so'zlar bilan eslaydi ¦ A computer remembers a picture as the words “pretty heart”", truth: false, explain: "Он хранит цифры для каждой клетки. ¦ U har bir katak uchun raqamlarni saqlaydi. ¦ It stores numbers for each square." },
      ],
      notes: { min: 5 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: закодируй строку ¦ O'zing bajar: qatorni kodla ¦ Your turn: code a row",
      chat: "пиши код строки в чат ¦ qator kodini chatga yoz ¦ write the row code in the chat",
      goal: "Ты умеешь превращать рисунок в цифры! ¦ Sen rasmni raqamlarga aylantira olasan! ¦ You can turn a picture into numbers!",
      items: [
        { title: "Строка: ⬜🟥🟥⬜ ¦ Qator: ⬜🟥🟥⬜ ¦ Row: ⬜🟥🟥⬜", choices: ["0110", "1001"], correct: 0, explain: "Белая — 0, красная — 1. ¦ Oq — 0, qizil — 1. ¦ White is 0, red is 1." },
        { title: "Код 1010 — какая строка? ¦ 1010 kodi — qaysi qator? ¦ Code 1010 — which row?", choices: ["🟥⬜🟥⬜", "⬜🟥⬜🟥"], correct: 0, explain: "Первая клетка — 1, значит красная. ¦ Birinchi katak — 1, demak qizil. ¦ The first square is 1, so it's red." },
      ],
      notes: { say: ['Даём 3 минуты: каждый рисует свою строку из 8 клеток и пишет её код в чат.'], min: 6 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: картинка — это цифры ¦ Xulosa: rasm — bu raqamlar ¦ Wrap-up: a picture is numbers",
      chat: "какой рисунок ты закодируешь дома? ¦ uyda qanday rasmni kodlaysan? ¦ what picture will you code at home?",
      answer: "Экран состоит из крошечных клеток — пикселей. Компьютер хранит картинку как список: какая клетка закрашена, а какая нет. Мы рисовали по коду 1 и 0 и исправляли ошибку в строке. Это упрощённая модель: настоящие пиксели хранят ещё и цвет. ¦ Ekran mitti kataklar — piksellardan iborat. Kompyuter rasmni ro'yxat sifatida saqlaydi: qaysi katak bo'yalgan, qaysi biri yo'q. Biz 1 va 0 kodi bo'yicha chizdik va qatordagi xatoni tuzatdik. Bu sodda model: haqiqiy piksellar rangni ham saqlaydi. ¦ A screen is made of tiny squares — pixels. A computer stores a picture as a list of which squares are coloured. We drew from a code of 1s and 0s and fixed a mistake in a row. It's a simple model: real pixels store colour too.",
      icon: '🖼️',
      badge: "Пиксельный художник ¦ Piksel rassom ¦ Pixel artist",
      badgeSub: kick('comp', 't', 3),
      homeworkTitle: HOME,
      homework: [
        "Нарисуй смайлик 8×8 и запиши код каждой строки. Загадай его родным. ¦ 8×8 smaylik chiz va har bir qator kodini yoz. Uni yaqinlaringga topishmoq qilib ber. ¦ Draw an 8×8 smiley, write each row's code and let your family decode it.",
        "Нужны: лист в клетку и 2 цвета. ¦ Kerak: katakli varaq va 2 ta rang. ¦ You need: squared paper and 2 colours.",
      ],
      notes: { min: 3 },
    },
  ],
});
