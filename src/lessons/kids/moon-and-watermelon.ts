import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

export default kit({
  id: 'kids-g23',
  title: "Что общего у луны и арбуза? ¦ Oy bilan tarvuzning qanday umumiy tomoni bor? ¦ What do the moon and a watermelon have in common?",
  question: "Можно ли найти сходство у совсем разных вещей? ¦ Butunlay har xil narsalarning o'xshashligini topsa bo'ladimi? ¦ Can totally different things be alike?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🍉',
      kicker: kick('blockly', 'g', 3),
      title: "Мост между далёкими вещами ¦ Uzoq narsalar orasidagi ko'prik ¦ A bridge between distant things",
      chat: "чем похожи кот и облако? одно слово ¦ mushuk va bulut nimasi bilan o'xshash? bitta so'z ¦ how are a cat and a cloud alike? one word",
      lead: "Ведущий называет две далёкие вещи, а чат ищет, чем они похожи. Чем дальше вещи, тем интереснее связи! Так думают изобретатели и поэты. ¦ Boshlovchi ikkita uzoq narsani aytadi, chat esa ular nimasi bilan o'xshashligini qidiradi. Narsalar qanchalik uzoq bo'lsa, bog'lanishlar shunchalik qiziq! Ixtirochilar va shoirlar shunday fikrlaydi. ¦ The host names two distant things and the chat looks for what they share. The further apart, the more interesting the links! That's how inventors and poets think.",
      notes: { min: 3 },
    },
    {
      type: 'board',
      stage: 1,
      title: "Луна 🌙 и арбуз 🍉: чем похожи? ¦ Oy 🌙 va tarvuz 🍉: nimasi bilan o'xshash? ¦ Moon 🌙 and watermelon 🍉: what's alike?",
      chat: "пиши одно сходство ¦ bitta o'xshashlik yoz ¦ write one similarity",
      seeds: ["круглые ¦ dumaloq ¦ both round", "бывают «дольками» ¦ «bo'lak» bo'lishi mumkin ¦ come in slices"],
      placeholder: "Например: «оба…» ¦ Masalan: «ikkalasi ham…» ¦ For example: “both…”",
      notes: { min: 6 },
    },
    {
      type: 'cards',
      stage: 2,
      title: "Неожиданные связи ¦ Kutilmagan bog'lanishlar ¦ Surprising links",
      chat: "какая связь самая неожиданная? номер ¦ qaysi bog'lanish eng kutilmagan? raqam ¦ which link is most surprising? a number",
      cards: [
        { icon: '🌙', front: "1 · Круглые ¦ 1 · Dumaloq ¦ 1 · Round", back: "Полная луна и целый арбуз ¦ To'lin oy va butun tarvuz ¦ A full moon and a whole melon" },
        { icon: '🌗', front: "2 · Бывают половинками ¦ 2 · Yarimta bo'ladi ¦ 2 · Come in halves", back: "Полумесяц и долька арбуза ¦ Yarim oy va tarvuz bo'lagi ¦ A crescent moon and a melon slice" },
        { icon: '🌑', front: "3 · Есть тёмные пятна ¦ 3 · Qora dog'lari bor ¦ 3 · Have dark spots", back: "Кратеры на луне и косточки ¦ Oydagi kraterlar va urug'lar ¦ Moon craters and melon seeds" },
        { icon: '☀️', front: "4 · Связаны с летом ¦ 4 · Yoz bilan bog'liq ¦ 4 · Linked to summer", back: "Летние ночи и сезон арбузов ¦ Yozgi tunlar va tarvuz mavsumi ¦ Summer nights and melon season" },
      ],
      takeaway: "Чтобы найти связь, перебираем признаки: форма, цвет, части, время. ¦ Bog'lanishni topish uchun belgilarni ko'rib chiqamiz: shakl, rang, qismlar, vaqt. ¦ To find a link, go through features: shape, colour, parts, time.",
      notes: { min: 7 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: загадай пару ведущему ¦ O'zing bajar: boshlovchiga juftlik top deb ber ¦ Your turn: give the host a pair",
      chat: "пиши две далёкие вещи: «рыба и самолёт» ¦ ikkita uzoq narsani yoz: «baliq va samolyot» ¦ write two distant things: “a fish and a plane”",
      goal: "Ты видишь связи там, где их не видят другие! ¦ Boshqalar ko'rmagan joyda bog'lanishlarni ko'rasan! ¦ You see links others miss!",
      items: [
        { title: "Чем похожи рыба и самолёт? ¦ Baliq va samolyot nimasi bilan o'xshash? ¦ How are a fish and a plane alike?", choices: ["У обоих есть «хвост» и обтекаемая форма ¦ Ikkalasida ham «dum» va silliq shakl bor ¦ Both have a “tail” and a streamlined shape", "Ничем ¦ Hech narsasi bilan ¦ Not at all"], correct: 0, explain: "Сходство есть почти всегда — надо поискать. ¦ O'xshashlik deyarli doim bor — qidirish kerak. ¦ There's almost always a link — keep looking." },
        { title: "Какой признак проверить первым? ¦ Qaysi belgini birinchi tekshirish kerak? ¦ Which feature should you check first?", choices: ["Форму или цвет ¦ Shakl yoki rang ¦ Shape or colour", "Цену ¦ Narx ¦ Price"], correct: 0, explain: "Форма и цвет видны сразу. ¦ Shakl va rang darhol ko'rinadi. ¦ Shape and colour are easy to see." },
      ],
      notes: { min: 9 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: ищи связи ¦ Xulosa: bog'lanishlarni qidir ¦ Wrap-up: look for links",
      chat: "какую самую далёкую пару ты придумал? ¦ eng uzoq qaysi juftlikni o'ylab topding? ¦ what's the most distant pair you came up with?",
      answer: "Даже у луны и арбуза много общего: они круглые, бывают половинками, у них есть тёмные пятна, и оба напоминают о лете. Чтобы найти связь, перебираем признаки: форму, цвет, части и время. Чем дальше вещи, тем интереснее связь — так рождаются изобретения и стихи. ¦ Hatto oy bilan tarvuzning ham umumiy tomoni ko'p: ular dumaloq, yarimta bo'ladi, qora dog'lari bor va ikkalasi ham yozni eslatadi. Bog'lanishni topish uchun belgilarni ko'rib chiqamiz: shakl, rang, qismlar va vaqt. Narsalar qanchalik uzoq bo'lsa, bog'lanish shunchalik qiziq — ixtirolar va she'rlar shunday tug'iladi. ¦ Even the moon and a watermelon share a lot: they're round, come in halves, have dark spots and both remind us of summer. To find links, go through shape, colour, parts and time. The further apart things are, the more interesting the link — that's how inventions and poems are born.",
      icon: '🌙',
      badge: "Мастер ассоциаций ¦ Assotsiatsiyalar ustasi ¦ Link finder",
      badgeSub: kick('blockly', 'g', 3),
      homeworkTitle: HOME,
      homework: [
        "Загадай родным две далёкие вещи и найдите вместе три сходства. ¦ Yaqinlaringga ikkita uzoq narsani ayt va birga uchta o'xshashlik toping. ¦ Give your family two distant things and find three similarities together.",
        "Нужны: бумага и карандаш. ¦ Kerak: qog'oz va qalam. ¦ You need: paper and a pencil.",
      ],
      notes: { min: 5 },
    },
  ],
});
