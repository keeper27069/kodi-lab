import { kit } from '@engine/kit';
import { HOME, KCSS, ROUTE, kick } from './_kids';

const row = (cells: string[], mark: number[] = [], block = 0) =>
  `<div class="wrap"><div class="row" style="gap:8px">${cells
    .map((c, i) => `<div class="cell ${mark.includes(i) ? 'on' : ''}" style="${block && i < block ? 'border-color:#0fa38e;background:#e6f7f4' : ''}">${c}</div>`)
    .join('')}</div></div>`;
const R = '🔴', B = '🔵', G = '🟢', Q = '❔';

export default kit({
  id: 'kids-t12',
  title: "Секрет цветного ряда ¦ Rangli qatorning siri ¦ The secret of the colour row",
  question: "Какие два цвета потерял робот? ¦ Robot qaysi ikki rangni yo'qotib qo'ydi? ¦ Which two colours did the robot lose?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🌈',
      kicker: kick('logic', 't', 4),
      title: "Робот собирал бусы ¦ Robot munchoq terayotgan edi ¦ The robot was making a bead string",
      chat: "какой цвет твой любимый? смайликом 🔴 🔵 🟢 ¦ sevimli ranging qaysi? smaylik bilan 🔴 🔵 🟢 ¦ your favourite colour? as an emoji 🔴 🔵 🟢",
      lead: "Робот нанизывал бусины по правилу, но две потерялись. Найдём повторяющийся блок — и сразу поймём, каких бусин не хватает. ¦ Robot munchoqlarni qoida bo'yicha terayotgan edi, lekin ikkitasi yo'qolib qoldi. Takrorlanuvchi blokni topamiz — va qaysi munchoqlar yetishmasligini darhol tushunamiz. ¦ The robot was stringing beads by a rule, but two went missing. Find the repeating block and you'll see at once which beads are missing.",
      facts: [
        "Повторяем уроки 9–12: узор и правило ¦ 9–12-darslarni takrorlaymiz: naqsh va qoida ¦ We revise lessons 9–12: patterns and rules",
        "Нужны цветные карандаши ¦ Rangli qalamlar kerak ¦ You need coloured pencils",
      ],
      notes: { min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Найди повторяющийся блок ¦ Takrorlanuvchi blokni top ¦ Find the repeating block",
      chat: "пиши пропущенные цвета: «красный, синий» ¦ tushib qolgan ranglarni yoz: «qizil, ko'k» ¦ write the missing colours: “red, blue”",
      lang: 'text',
      css: KCSS,
      steps: [
        { code: '? ?', html: row([R, B, G, R, B, G, Q, Q, G]), say: "Две бусины потерялись. Ищем, что повторяется. ¦ Ikkita munchoq yo'qolgan. Nima takrorlanishini qidiramiz. ¦ Two beads are missing. Look for what repeats." },
        { code: 'block: 🔴🔵🟢', html: row([R, B, G, R, B, G, Q, Q, G], [], 3), say: "Блок «🔴🔵🟢» повторяется снова и снова. ¦ «🔴🔵🟢» bloki qayta-qayta takrorlanadi. ¦ The block “🔴🔵🟢” repeats again and again." },
        { code: '🔴 🔵 ✓', html: row([R, B, G, R, B, G, R, B, G], [6, 7]), say: "Значит, пропущены красная и синяя! ¦ Demak, qizil va ko'k tushib qolgan! ¦ So the missing ones are red and blue!" },
      ],
      notes: { min: 7 },
    },
    {
      type: 'show',
      stage: 2,
      title: "Найди ошибку в ряду ¦ Qatordagi xatoni top ¦ Find the mistake in the row",
      chat: "номер бусины с ошибкой ¦ xato munchoq raqami ¦ the number of the wrong bead",
      lang: 'text',
      css: KCSS,
      steps: [
        { code: 'error?', html: row([R, B, G, R, G, G, R, B, G]), say: "Здесь одна бусина не на месте. Сравни каждый блок с правилом. ¦ Bu yerda bitta munchoq o'z joyida emas. Har bir blokni qoida bilan solishtir. ¦ One bead here is wrong. Compare each block with the rule." },
        { code: 'bead 5: 🟢 → 🔵', html: row([R, B, G, R, B, G, R, B, G], [4]), say: "Ошибка в бусине 5: должен быть синий. ¦ 5-munchoqda xato: ko'k bo'lishi kerak. ¦ The mistake is bead 5: it should be blue." },
        { code: 'rule: 🔴🔴🔵', html: row([R, R, B, R, R, B, R, R, B], [], 3), say: "Бывает правило в два шага: два красных, один синий. ¦ Ikki qadamli qoida ham bo'ladi: ikki qizil, bitta ko'k. ¦ Rules can have two steps: two red, one blue." },
      ],
      takeaway: "Назови правило словами — так легче проверить каждую бусину. ¦ Qoidani so'z bilan ayt — shunda har bir munchoqni tekshirish osonroq. ¦ Say the rule in words — it's easier to check each bead.",
      notes: { min: 8 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: продолжи ряд ¦ O'zing bajar: qatorni davom ettir ¦ Your turn: continue the row",
      chat: "пиши следующие цвета ¦ keyingi ranglarni yoz ¦ write the next colours",
      goal: "Ты разгадал секрет ряда! ¦ Qatorning sirini ochding! ¦ You cracked the row's secret!",
      items: [
        { title: "🟡🟣🟡🟣🟡 … что дальше? ¦ 🟡🟣🟡🟣🟡 … keyin nima? ¦ 🟡🟣🟡🟣🟡 … what's next?", choices: ['🟣', '🟡'], correct: 0, explain: "Блок «🟡🟣». ¦ «🟡🟣» bloki. ¦ The block is “🟡🟣”." },
        { title: "🔴🔴🔵🔴🔴🔵🔴 … что дальше? ¦ 🔴🔴🔵🔴🔴🔵🔴 … keyin nima? ¦ 🔴🔴🔵🔴🔴🔵🔴 … what's next?", choices: ['🔴', '🔵'], correct: 0, explain: "В блоке два красных: после одного 🔴 идёт ещё 🔴. ¦ Blokda ikkita qizil: bitta 🔴 dan keyin yana 🔴. ¦ The block has two reds: another 🔴 comes next." },
      ],
      notes: { min: 8 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: найди блок — найдёшь ответ ¦ Xulosa: blokni topsang — javobni topasan ¦ Wrap-up: find the block, find the answer",
      chat: "придумай свой ряд из трёх цветов смайликами ¦ uch rangdan o'z qatoringni smayliklar bilan o'ylab top ¦ make your own three-colour row with emojis",
      answer: "В узоре повторяется блок. Найдя его — например, «🔴🔵🟢», — легко восстановить пропуски: здесь не хватало красной и синей. Правило помогает найти и ошибку: бусина 5 должна быть синей. Правила бывают и в два шага: «два красных, один синий». ¦ Naqshda blok takrorlanadi. Uni topsang — masalan, «🔴🔵🟢» — bo'shliqlarni tiklash oson: bu yerda qizil va ko'k yetishmas edi. Qoida xatoni topishga ham yordam beradi: 5-munchoq ko'k bo'lishi kerak. Qoidalar ikki qadamli ham bo'ladi: «ikki qizil, bitta ko'k». ¦ A pattern repeats a block. Find it — like “🔴🔵🟢” — and filling the gaps is easy: red and blue were missing. The rule also reveals mistakes: bead 5 should be blue. Rules can have two steps too: “two red, one blue”.",
      icon: '🌈',
      badge: "Мастер узоров ¦ Naqsh ustasi ¦ Pattern master",
      badgeSub: kick('logic', 't', 4),
      homeworkTitle: HOME,
      homework: [
        "Нарисуй бусы по своему правилу, спрячь две бусины и загадай родным. ¦ O'z qoidang bo'yicha munchoq chiz, ikkitasini yashir va yaqinlaringga top deb ber. ¦ Draw beads by your own rule, hide two and challenge your family.",
        "Нужны: цветные карандаши. ¦ Kerak: rangli qalamlar. ¦ You need: coloured pencils.",
      ],
      notes: { min: 4 },
    },
  ],
});
