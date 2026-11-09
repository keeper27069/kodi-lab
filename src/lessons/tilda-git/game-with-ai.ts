import { kit } from '@engine/kit';

/* Little pictures for the game options (plain SVG shapes, no emoji inside SVG) */
const svg = (body: string, bg: string) => `<svg viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="120" fill="${bg}"/>${body}</svg>`;
const SNAKE = svg(
  `${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="${40 + i * 22}" y="56" width="20" height="20" rx="6" fill="${i === 5 ? '#b6f36b' : '#57c84d'}"/>`).join('')}<rect x="150" y="34" width="20" height="20" rx="6" fill="#57c84d"/><circle cx="196" cy="44" r="10" fill="#ff4d4d"/><rect x="194" y="30" width="4" height="7" fill="#6b3d1f"/><circle cx="174" cy="62" r="2.5" fill="#123"/>`,
  '#123a2a',
);
const BIRD = svg(
  `<rect x="150" y="0" width="34" height="38" fill="#3fbf4f"/><rect x="146" y="34" width="42" height="10" fill="#2f9a3d"/><rect x="150" y="82" width="34" height="38" fill="#3fbf4f"/><rect x="146" y="76" width="42" height="10" fill="#2f9a3d"/><circle cx="80" cy="60" r="16" fill="#ffd23f"/><circle cx="86" cy="55" r="4" fill="#fff"/><circle cx="87" cy="55" r="2" fill="#123"/><polygon points="95,60 106,63 95,66" fill="#ff8a1e"/><ellipse cx="72" cy="64" rx="8" ry="5" fill="#ffb800"/><circle cx="40" cy="24" r="10" fill="#fff" opacity=".8"/><circle cx="52" cy="24" r="8" fill="#fff" opacity=".8"/>`,
  '#7fd3ff',
);
const MEMORY = svg(
  [0, 1, 2, 3].flatMap((c) => [0, 1].map((r) => {
    const open = (c === 0 && r === 0) || (c === 2 && r === 1);
    return `<rect x="${22 + c * 52}" y="${14 + r * 50}" width="44" height="42" rx="8" fill="${open ? '#fff' : '#8b5cf6'}" stroke="#c4b5fd" stroke-width="2"/>${open ? `<circle cx="${44 + c * 52}" cy="${36 + r * 50}" r="11" fill="#ff4d4d"/>` : `<text x="${44 + c * 52}" y="${42 + r * 50}" font-size="20" font-weight="800" text-anchor="middle" fill="#ede9fe">?</text>`}`;
  })).join(''),
  '#4c1d95',
);
const SPACE = svg(
  `${[[20, 20], [200, 14], [120, 30], [60, 90], [220, 80], [170, 100]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.8" fill="#fff"/>`).join('')}${[70, 120, 170].map((x) => `<rect x="${x - 12}" y="18" width="24" height="14" rx="5" fill="#ff5ccd"/><circle cx="${x - 5}" cy="25" r="2.5" fill="#fff"/><circle cx="${x + 5}" cy="25" r="2.5" fill="#fff"/>`).join('')}<rect x="118" y="50" width="4" height="14" rx="2" fill="#ffe14d"/><polygon points="120,78 136,108 104,108" fill="#5bd3ff"/><rect x="114" y="104" width="12" height="6" fill="#ff8a1e"/>`,
  '#0b1030',
);

export default kit({
  id: 'tilda-git-t04',
  title: "Создаём игру с AI ¦ AI bilan o'yin yaratamiz ¦ Building a game with AI",
  question: "Как с помощью AI за один урок превратить идею в работающую игру? ¦ AI yordamida bir darsda g'oyani ishlaydigan o'yinga qanday aylantirish mumkin? ¦ How do you turn an idea into a working game in one lesson with AI?",
  route: ["Идея ¦ G'oya ¦ Idea", "Промпт ¦ Prompt ¦ Prompt", "Что умеет AI ¦ AI nima qila oladi ¦ What AI can do", "Проверка ¦ Tekshiruv ¦ Check", "Финал ¦ Yakun ¦ Finale"],
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🎮',
      kicker: "Tilda · Git · техническая тема 4 ¦ Tilda · Git · texnik mavzu 4 ¦ Tilda · Git · technical topic 4",
      title: "Вы — геймдизайнеры, AI — помощник ¦ Siz — geymdizaynerlar, AI — yordamchi ¦ You're the game designers; AI is the helper",
      chat: "в какую простую игру вы бы сыграли прямо сейчас? ¦ hozir qaysi oddiy o'yinni o'ynagan bo'lardingiz? ¦ what simple game would you play right now?",
      lead: "Сегодня чат придумывает игру и правила, а ментор вместе с AI превращает их в код. Главное — не код от AI, а ваши идеи и проверка. ¦ Bugun chat o'yin va qoidalarni o'ylab topadi, mentor esa AI bilan birga ularni kodga aylantiradi. Asosiysi — AI kodi emas, sizning g'oyalaringiz va tekshiruvingiz. ¦ Today the chat invents a game and its rules; the mentor and AI turn them into code. What matters is your ideas and your checking.",
      facts: ["Идея и правила — от вас ¦ G'oya va qoidalar — sizdan ¦ Idea and rules: from you", "Черновик кода — от AI ¦ Kod qoralamasi — AI'dan ¦ Draft code: from AI", "Проверка — снова вы ¦ Tekshiruv — yana siz ¦ Checking: you again"],
      takeaway: "AI ускоряет работу, но решает человек. ¦ AI ishni tezlashtiradi, lekin odam hal qiladi. ¦ AI speeds things up, but people decide.",
      notes: { say: ["Используйте AI-ассистент, разрешённый на вашей платформе. Не вставляйте в промпты личные данные учеников."], min: 3 },
    },
    {
      type: 'poll',
      stage: 0,
      title: "Какую игру делаем? ¦ Qaysi o'yinni yasaymiz? ¦ Which game do we build?",
      chat: "голосуйте 1–4 ¦ 1–4 ovoz bering ¦ vote 1–4",
      options: [
        { art: SNAKE, label: "Змейка 🐍 ¦ Ilon 🐍 ¦ Snake 🐍", detail: "Стрелками ведём змейку к яблокам, она растёт ¦ Strelkalar bilan ilonni olmalarga boshlaymiz, u o'sadi ¦ Steer the snake to apples with the arrows; it grows" },
        { art: BIRD, label: "Летающая птичка 🐦 ¦ Uchar qush 🐦 ¦ Flappy bird 🐦", detail: "Нажимаем пробел — птичка пролетает между трубами ¦ Probelni bosamiz — qush quvurlar orasidan uchib o'tadi ¦ Tap space to fly between the pipes" },
        { art: MEMORY, label: "Найди пару 🃏 ¦ Juftini top 🃏 ¦ Memory match 🃏", detail: "Открываем карточки и ищем одинаковые ¦ Kartochkalarni ochib, bir xillarini qidiramiz ¦ Flip cards to find matching pairs" },
        { art: SPACE, label: "Космический бой 🚀 ¦ Kosmik jang 🚀 ¦ Space battle 🚀", detail: "Корабль стреляет по пришельцам ¦ Kema o'zga sayyoraliklarga o'q uzadi ¦ The ship shoots at the aliens" },
      ],
      result: "Любую из них можно сделать с AI за урок — ментор собирает выбранную игру вживую. ¦ Ularning istalganini AI bilan bir darsda yasash mumkin — mentor tanlangan o'yinni jonli yig'adi. ¦ Any of these can be built with AI in one lesson — the mentor builds the chosen game live.",
      notes: { say: ["Голосуют числом в чат; выбранную игру делайте в AI вживую по кругу со следующего слайда."], min: 2 },
    },
    {
      type: 'animate',
      stage: 1,
      title: "Круг работы с AI ¦ AI bilan ishlash aylanasi ¦ The AI work loop",
      chat: "какой шаг самый важный? ¦ qaysi qadam eng muhim? ¦ which step matters most?",
      actors: [
        { id: 'i', icon: '💡', label: "Идея и правила ¦ G'oya va qoidalar ¦ Idea & rules" },
        { id: 'p', icon: '✍️', label: "Промпт ¦ Prompt ¦ Prompt" },
        { id: 'ai', icon: '🤖', label: "Код от AI ¦ AI kodi ¦ AI's code" },
        { id: 't', icon: '🕹️', label: "Играем и проверяем ¦ O'ynaymiz va tekshiramiz ¦ Play & check" },
        { id: 'n', text: "+ одно улучшение ¦ + bitta yaxshilash ¦ + one improvement" },
      ],
      steps: [
        { say: "Сначала — идея и чёткие правила: «змейка +1 за яблоко, врезалась в стену — конец». ¦ Avval — g'oya va aniq qoidalar: «ilon har olma uchun +1, devorga urilsa — tamom». ¦ First an idea and clear rules: “the snake gets +1 per apple; hit a wall and it's over”.", at: { i: [50, 14] }, pulse: ['i'] },
        { say: "Из правил пишем промпт. ¦ Qoidalardan prompt yozamiz. ¦ Turn the rules into a prompt.", at: { p: [84, 50] }, lines: [['i', 'p']] },
        { say: "AI присылает черновик кода. ¦ AI kod qoralamasini yuboradi. ¦ AI sends a draft of the code.", at: { ai: [50, 84] }, lines: [['i', 'p'], ['p', 'ai']] },
        { say: "Запускаем и играем: всё ли по правилам? ¦ Ishga tushiramiz va o'ynaymiz: hammasi qoidaga mosmi? ¦ Run it and play: does it follow the rules?", at: { t: [16, 50] }, lines: [['i', 'p'], ['p', 'ai'], ['ai', 't']], pulse: ['t'] },
        { say: "Просим ОДНО улучшение — и круг повторяется. ¦ BITTA yaxshilash so'raymiz — va aylana takrorlanadi. ¦ Ask for ONE improvement and go round again.", at: { n: [50, 50] }, lines: [['i', 'p'], ['p', 'ai'], ['ai', 't'], ['t', 'i']], pulse: ['n'] },
      ],
      takeaway: "Маленькие шаги: одна просьба → проверка → следующая. ¦ Kichik qadamlar: bitta iltimos → tekshiruv → keyingisi. ¦ Small steps: one request → check → the next.",
      notes: { min: 4 },
    },
    {
      type: 'cards',
      stage: 2,
      title: "Что ещё умеет AI в игре ¦ AI o'yinda yana nimalar qila oladi ¦ What else AI can do for a game",
      chat: "какую суперсилу AI добавим в нашу игру? номер ¦ o'yinimizga AI'ning qaysi super kuchini qo'shamiz? raqam ¦ which AI superpower shall we add to our game? a number",
      columns: 3,
      cards: [
        { icon: '🎨', front: "1 · Рисует ¦ 1 · Rasm chizadi ¦ 1 · Draws", back: "Героев, фон и предметы игры по описанию ¦ Ta'rif bo'yicha qahramonlar, fon va o'yin narsalarini ¦ Heroes, backgrounds and items from a description" },
        { icon: '🎵', front: "2 · Сочиняет звук ¦ 2 · Tovush yaratadi ¦ 2 · Makes sound", back: "Музыку уровня и звуки «прыжка» или «монетки» ¦ Bosqich musiqasi va «sakrash» yoki «tanga» tovushlari ¦ Level music and “jump” or “coin” sounds" },
        { icon: '🌍', front: "3 · Переводит ¦ 3 · Tarjima qiladi ¦ 3 · Translates", back: "Меню и подсказки на узбекский, русский, английский ¦ Menyu va maslahatlarni o'zbek, rus, ingliz tillariga ¦ Menus and tips into Uzbek, Russian, English" },
        { icon: '🐞', front: "4 · Объясняет ошибки ¦ 4 · Xatolarni tushuntiradi ¦ 4 · Explains errors", back: "Вставили текст ошибки — получили простое объяснение ¦ Xato matnini qo'ydik — oddiy tushuntirish oldik ¦ Paste an error message and get a plain explanation" },
        { icon: '🧩', front: "5 · Придумывает уровни ¦ 5 · Bosqichlar o'ylab topadi ¦ 5 · Invents levels", back: "10 идей уровней или вопросов для викторины за минуту ¦ Bir daqiqada 10 ta bosqich yoki viktorina savoli g'oyasi ¦ 10 level or quiz ideas in a minute" },
        { icon: '🗣️', front: "6 · Озвучивает ¦ 6 · Ovoz beradi ¦ 6 · Gives voices", back: "Превращает текст героя в голос ¦ Qahramon matnini ovozga aylantiradi ¦ Turns a hero's lines into speech" },
      ],
      takeaway: "AI — целая команда помощников: художник, композитор, переводчик и тестировщик. ¦ AI — butun bir yordamchilar jamoasi: rassom, kompozitor, tarjimon va tester. ¦ AI is a whole team of helpers: artist, composer, translator and tester.",
      notes: { say: ["Покажите вживую 1–2 возможности в разрешённом AI-инструменте, например перевод меню игры или 5 идей уровней."], min: 6 },
    },
    {
      type: 'sort',
      stage: 2,
      title: "Кто это делает: AI помогает или решает человек? ¦ Buni kim qiladi: AI yordam beradimi yoki odam hal qiladimi? ¦ Who does it: AI helps, or a person decides?",
      chat: "пишите: «3 — человек» ¦ yozing: «3 — odam» ¦ write: “3 — person”",
      zones: [
        { id: 'ai', label: "AI помогает ¦ AI yordam beradi ¦ AI helps", icon: '🤖' },
        { id: 'h', label: "Решает человек ¦ Odam hal qiladi ¦ A person decides", icon: '🧑' },
      ],
      items: [
        { text: "1 · Нарисовать фон для уровня ¦ 1 · Bosqich uchun fon chizish ¦ 1 · Draw a background for a level", zone: 'ai' },
        { text: "2 · Перевести кнопки на английский ¦ 2 · Tugmalarni inglizchaga tarjima qilish ¦ 2 · Translate the buttons into English", zone: 'ai' },
        { text: "3 · Решить, весёлая ли игра и честные ли правила ¦ 3 · O'yin qiziqmi va qoidalar adolatlimi — hal qilish ¦ 3 · Decide whether the game is fun and fair", zone: 'h' },
        { text: "4 · Придумать 10 идей уровней ¦ 4 · 10 ta bosqich g'oyasini o'ylab topish ¦ 4 · Come up with 10 level ideas", zone: 'ai' },
        { text: "5 · Выбрать, какая идея пойдёт в игру ¦ 5 · Qaysi g'oya o'yinga kirishini tanlash ¦ 5 · Choose which idea goes into the game", zone: 'h' },
        { text: "6 · Проверить игру перед тем, как дать другу ¦ 6 · Do'stga berishdan oldin o'yinni tekshirish ¦ 6 · Test the game before giving it to a friend", zone: 'h' },
      ],
      takeaway: "AI быстро делает черновики, а выбор и проверка — за вами. ¦ AI qoralamalarni tez qiladi, tanlov va tekshiruv esa — sizda. ¦ AI makes drafts fast; choosing and checking are up to you.",
      notes: { min: 5 },
    },
    {
      type: 'truefalse',
      stage: 3,
      title: "Правда или миф? ¦ Rostmi yoki afsona? ¦ True or myth?",
      chat: "пишите «правда» или «миф» ¦ «rost» yoki «afsona» deb yozing ¦ write “true” or “myth”",
      statements: [
        { text: "Код от AI всегда работает с первого раза ¦ AI kodi doim birinchi martadan ishlaydi ¦ AI code always works first time", truth: false, explain: "Запускаем и проверяем каждое правило. ¦ Ishga tushirib, har bir qoidani tekshiramiz. ¦ Run it and check every rule." },
        { text: "Лучше просить по одному улучшению ¦ Bittadan yaxshilash so'ragan ma'qul ¦ Ask for one improvement at a time", truth: true, explain: "Так легко понять, что сломалось. ¦ Shunda nima buzilganini tushunish oson. ¦ Then it's easy to see what broke." },
        { text: "В промпт можно вставлять личные данные одноклассников ¦ Promptga sinfdoshlarning shaxsiy ma'lumotlarini qo'yish mumkin ¦ It's fine to put classmates' personal data in prompts", truth: false, explain: "Личные данные в промпты не вставляем. ¦ Shaxsiy ma'lumotlarni promptga qo'ymaymiz. ¦ Never put personal data in prompts." },
      ],
      notes: { min: 3 },
    },
    {
      type: 'mission',
      stage: 4,
      title: "Миссия: своя игра ¦ Missiya: o'z o'yining ¦ Mission: your own game",
      chat: "номера ответов в чат ¦ javob raqamlarini chatga ¦ answer numbers in the chat",
      goal: "Игра работает и честно проверена! ¦ O'yin ishlaydi va halol tekshirilgan! ¦ The game works and is properly tested!",
      items: [
        { title: "Какое правило лучше? ¦ Qaysi qoida yaxshiroq? ¦ Which rule is better?", choices: ["«20 секунд» ¦ «20 soniya» ¦ “20 seconds”", "«недолго» ¦ «uzoq emas» ¦ “not too long”"], correct: 0, explain: "Правило должно быть проверяемым. ¦ Qoida tekshirib bo'ladigan bo'lishi kerak. ¦ Rules must be testable." },
        { title: "AI прислал код ¦ AI kod yubordi ¦ AI sent the code", choices: ["Запустить и проверить правила ¦ Ishga tushirib, qoidalarni tekshirish ¦ Run it and check the rules", "Сразу сдать ¦ Darhol topshirish ¦ Hand it in right away"], correct: 0, explain: "Проверка — ваша работа. ¦ Tekshiruv — sizning ishingiz. ¦ Checking is your job." },
        { title: "Хотим уровни и музыку ¦ Bosqichlar va musiqa xohlaymiz ¦ We want levels and music", choices: ["Добавить по одному ¦ Bittadan qo'shish ¦ Add them one at a time", "Попросить всё сразу ¦ Hammasini birdan so'rash ¦ Ask for everything at once"], correct: 0, explain: "Маленькие шаги — меньше поломок. ¦ Kichik qadamlar — kamroq buzilish. ¦ Small steps, fewer breaks." },
      ],
      notes: { min: 3 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: игра с AI ¦ Xulosa: AI bilan o'yin ¦ Summary: a game with AI",
      chat: "какую игру сделаете дома? ¦ uyda qanday o'yin yasaysiz? ¦ what game will you make at home?",
      answer: "Игру с AI делают по кругу: идея и чёткие правила → промпт (что, на чём, правила, как выглядит) → черновик кода от AI → запуск и проверка → одно улучшение за раз. AI ускоряет работу, но идеи, проверку и решения делает человек. Личные данные в промпты не вставляем. ¦ AI bilan o'yin aylana bo'yicha yasaladi: g'oya va aniq qoidalar → prompt (nima, nimada, qoidalar, qanday ko'rinadi) → AI'dan kod qoralamasi → ishga tushirish va tekshirish → bir martada bitta yaxshilash. AI ishni tezlashtiradi, lekin g'oyalar, tekshiruv va qarorlarni odam qiladi. Shaxsiy ma'lumotlarni promptga qo'ymaymiz. ¦ A game with AI is made in a loop: an idea and clear rules → a prompt (what, with what, rules, looks) → AI's draft code → run and check → one improvement at a time. AI speeds things up, but people make the ideas, checks and decisions. Never put personal data in prompts.",
      icon: '🎮',
      badge: "Геймдизайнер ¦ Geymdizayner ¦ Game designer",
      badgeSub: "Tilda · Git · техническая 4 ¦ Tilda · Git · texnik 4 ¦ Tilda · Git · technical 4",
      homeworkTitle: "Дома ¦ Uyda ¦ At home",
      homework: [
        "Добавьте в игру одно своё правило через AI. ¦ AI orqali o'yinga o'zingizning bitta qoidangizni qo'shing. ¦ Add one rule of your own to the game with AI.",
        "Дайте сыграть другу и запишите, что сломалось. ¦ Do'stingizga o'ynab ko'rishga bering va nima buzilganini yozib oling. ¦ Let a friend play and note what broke.",
      ],
      takeaway: "Дальше: Git и GitHub — как хранить код. ¦ Keyingisi: Git va GitHub — kodni qanday saqlash. ¦ Next: Git and GitHub — how to store code.",
      notes: { min: 2 },
    },
  ],
});
