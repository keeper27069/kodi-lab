import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

export default kit({
  id: 'kids-t10',
  title: "Остров правдивых и лжецов: кто говорит правду? ¦ Rostgo'ylar va yolg'onchilar oroli: kim rost gapiryapti? ¦ The island of truth-tellers and liars: who is honest?",
  question: "Житель А говорит: «Мы оба лжецы». Кто он? ¦ A aholisi aytadi: «Ikkalamiz ham yolg'onchimiz». U kim? ¦ Islander A says: “We are both liars.” What is A?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🏝️',
      kicker: kick('logic', 't', 2),
      title: "Добро пожаловать на остров ¦ Orolga xush kelibsiz ¦ Welcome to the island",
      chat: "ты бы хотел жить на острове? 🏝️ или 🏙️ ¦ orolda yashashni xohlarmiding? 🏝️ yoki 🏙️ ¦ would you like to live on an island? 🏝️ or 🏙️",
      lead: "На острове живут правдивые — они всегда говорят правду, и лжецы — они всегда лгут. Нам встретились двое: А и Б. А говорит: «Мы оба лжецы». ¦ Orolda rostgo'ylar — ular doim rost gapiradi, va yolg'onchilar — ular doim yolg'on gapiradi. Bizga ikki kishi uchradi: A va B. A aytadi: «Ikkalamiz ham yolg'onchimiz». ¦ The island has truth-tellers, who always tell the truth, and liars, who always lie. We meet two islanders, A and B. A says: “We are both liars.”",
      facts: [
        "Повторяем урок 7 «Кто говорит правду» ¦ 7-dars «Kim rost gapiryapti»ni takrorlaymiz ¦ We revise lesson 7 “Who tells the truth”",
        "Главный приём — проверить обе версии ¦ Asosiy usul — ikkala variantni tekshirish ¦ The trick: test both versions",
      ],
      notes: { min: 3 },
    },
    {
      type: 'compare',
      stage: 1,
      title: "Проверяем обе версии про А ¦ A haqida ikkala variantni tekshiramiz ¦ Testing both versions of A",
      chat: "какая версия ломается? «левая» или «правая» ¦ qaysi variant buziladi? «chap» yoki «o'ng» ¦ which version breaks? “left” or “right”",
      left: { label: "Если А правдивый ¦ Agar A rostgo'y bo'lsa ¦ If A tells the truth", icon: '😇', points: ["Тогда «мы оба лжецы» — правда ¦ Unda «ikkalamiz yolg'onchimiz» — rost ¦ Then “we're both liars” is true", "Но тогда А — лжец. Противоречие! ¦ Lekin unda A — yolg'onchi. Qarama-qarshilik! ¦ But then A is a liar. Contradiction!"] },
      right: { label: "Если А лжец ¦ Agar A yolg'onchi bo'lsa ¦ If A is a liar", icon: '😈', points: ["Тогда фраза — ложь: они не оба лжецы ¦ Unda gap — yolg'on: ikkalasi yolg'onchi emas ¦ Then the sentence is false: not both are liars", "Значит, Б — правдивый. Всё сходится! ¦ Demak, B — rostgo'y. Hammasi mos! ¦ So B tells the truth. It all fits!"] },
      verdict: "Ответ: А — лжец, Б — правдивый. ¦ Javob: A — yolg'onchi, B — rostgo'y. ¦ Answer: A is a liar, B tells the truth.",
      notes: { min: 8 },
    },
    {
      type: 'poll',
      stage: 2,
      title: "Случай 2: А говорит «2 + 2 = 4». Кто А? ¦ 2-holat: A «2 + 2 = 4» deydi. A kim? ¦ Case 2: A says “2 + 2 = 4.” What is A?",
      chat: "пиши «правдивый» или «лжец» ¦ «rostgo'y» yoki «yolg'onchi» deb yoz ¦ write “truth-teller” or “liar”",
      options: [
        { label: "😇 Правдивый ¦ 😇 Rostgo'y ¦ 😇 Truth-teller" },
        { label: "😈 Лжец ¦ 😈 Yolg'onchi ¦ 😈 Liar" },
      ],
      correct: 0,
      result: "Правдивый: 2 + 2 и правда 4, а лжец никогда не говорит правду. ¦ Rostgo'y: 2 + 2 haqiqatan 4, yolg'onchi esa hech qachon rost gapirmaydi. ¦ A truth-teller: 2 + 2 really is 4, and a liar never says anything true.",
      notes: { min: 4 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: случай 3 ¦ O'zing bajar: 3-holat ¦ Your turn: case 3",
      chat: "пиши «А — …, Б — …» и почему ¦ yoz «A — …, B — …» va nega ¦ write “A — …, B — …” and why",
      goal: "Ты разгадал жителей острова! ¦ Orol aholisini topding! ¦ You've figured out the islanders!",
      items: [
        { title: "А: «Б — лжец». Б: «Мы с А одинаковые». Кто А? ¦ A: «B — yolg'onchi». B: «A bilan bir xilmiz». A kim? ¦ A: “B is a liar.” B: “A and I are the same kind.” What is A?", choices: ["Правдивый ¦ Rostgo'y ¦ A truth-teller", "Лжец ¦ Yolg'onchi ¦ A liar"], correct: 0, explain: "Если А правдивый, Б — лжец, и его фраза ложна: они разные ✓. Если А лжец, Б правдивый — но тогда А тоже правдивый. Противоречие. ¦ A rostgo'y bo'lsa, B yolg'onchi va uning gapi yolg'on: ular har xil ✓. A yolg'onchi bo'lsa, B rostgo'y — lekin unda A ham rostgo'y. Qarama-qarshilik. ¦ If A is honest, B lies, so B's sentence is false: they're different ✓. If A lies, B is honest — but then A is honest too. Contradiction." },
        { title: "А тогда Б — … ¦ Unda B — … ¦ So B is…", choices: ["Лжец ¦ Yolg'onchi ¦ A liar", "Правдивый ¦ Rostgo'y ¦ A truth-teller"], correct: 0, explain: "Так сказал правдивый А. ¦ Buni rostgo'y A aytdi. ¦ Honest A said so." },
      ],
      notes: { say: ['Ментор заранее проверил: у каждой задачи единственный ответ.'], min: 10 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: проверь обе версии ¦ Xulosa: ikkala variantni tekshir ¦ Wrap-up: test both versions",
      chat: "какая задача была самой трудной? номер ¦ qaysi masala eng qiyin edi? raqam ¦ which case was hardest? a number",
      answer: "Чтобы понять, кто правдивый, а кто лжец, проверяем обе версии. Версия, которая приводит к противоречию, неверна. Фраза «мы оба лжецы» не может быть правдой, значит, А — лжец, а Б — правдивый. ¦ Kim rostgo'y, kim yolg'onchi ekanini tushunish uchun ikkala variantni tekshiramiz. Qarama-qarshilikka olib keladigan variant noto'g'ri. «Ikkalamiz ham yolg'onchimiz» degan gap rost bo'lishi mumkin emas, demak A — yolg'onchi, B esa — rostgo'y. ¦ To work out who's honest and who lies, test both versions. A version that leads to a contradiction is wrong. “We are both liars” can't be true, so A is a liar and B tells the truth.",
      icon: '🏝️',
      badge: "Знаток острова ¦ Orol bilimdoni ¦ Island expert",
      badgeSub: kick('logic', 't', 2),
      homeworkTitle: HOME,
      homework: [
        "Придумай фразу для жителя острова, по которой сразу ясно, что он лжец. ¦ Orol aholisi uchun uning yolg'onchi ekanini darhol ko'rsatadigan gap o'ylab top. ¦ Invent a sentence that instantly shows an islander is a liar.",
        "Нужны: бумага и карандаш. ¦ Kerak: qog'oz va qalam. ¦ You need: paper and a pencil.",
      ],
      notes: { min: 5 },
    },
  ],
});
