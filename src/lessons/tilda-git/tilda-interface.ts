import { kit } from '@engine/kit';

/* A mock of the "Comfort Food" restaurant site we assemble block by block (made-up brand "Savoria") */
const CSS = `.wrap{display:grid;place-items:center;height:100%;font-family:Manrope,system-ui}
.site{width:620px;border-radius:16px;overflow:hidden;background:#fff;box-shadow:0 12px 34px #0002;font-size:13px;color:#2b211c}
.tag{display:inline-block;margin-bottom:10px;padding:4px 12px;border-radius:8px;font:800 14px JetBrains Mono,monospace;background:#16181f;color:#fff}
.nav{display:flex;align-items:center;gap:14px;padding:12px 18px;border-bottom:1px solid #eee}
.logo{font:700 20px Georgia,serif;margin-right:auto}
.nav a{color:#6b5d55}
.rb{padding:7px 14px;border-radius:999px;background:#9b2f22;color:#fff;font-weight:800}
.hero{padding:34px 24px;text-align:center;background:#eceef3}
.hero h2{margin:0 0 8px;font:700 34px Georgia,serif;line-height:1.1}
.hero p{margin:0 0 14px;color:#6b7183;font-size:14px}
.hero .btn{display:inline-block;padding:9px 18px;border-radius:999px;background:#16181f;color:#fff;font-weight:800}
.warm .hero{background:#f3ece4}.warm .hero p{color:#7b6a5f}.warm .hero .btn{background:#2b211c}
.serif .hero h2{font-size:40px;letter-spacing:-.5px}
.pic{height:118px;display:flex;align-items:center;justify-content:center;gap:18px;font-size:54px;background:linear-gradient(120deg,#3a1d15,#7a3b22 55%,#2b1510)}
.dishes{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;padding:14px 18px}
.dishes div{padding:10px;border-radius:12px;background:#f7f2ec;text-align:center;font-weight:800}
.dishes span{display:block;font-size:30px}.dishes em{display:block;font-style:normal;color:#9b2f22}`;
type Part = 'nav' | 'pic' | 'dishes';
const site = (title: string, cls: string, tag: string, parts: Part[] = []) =>
  `<div class="wrap"><div><span class="tag">${tag}</span><div class="site ${cls}">${
    parts.includes('nav') ? '<div class="nav"><span class="logo">Savoria</span><a>Home</a><a>Menu</a><a>Gallery</a><a>Reservations</a><span class="rb">Reserve a Table</span></div>' : ''
  }<div class="hero"><h2>${title}</h2><p>Seasonal ingredients, warm hospitality, and a space to slow down.</p><span class="btn">Reserve a Table</span></div>${
    parts.includes('pic') ? '<div class="pic">🍝 🥘 🍲</div>' : ''
  }${parts.includes('dishes') ? '<div class="dishes"><div><span>🍲</span>Lagman<em>$9</em></div><div><span>🥘</span>Plov<em>$11</em></div><div><span>🥗</span>Salad<em>$6</em></div></div>' : ''}</div></div></div>`;
const T = 'Comfort Food, Crafted Daily';

export default kit({
  id: 'tilda-git-t01',
  title: "Интерфейс Tilda и сайт «Comfort Food» ¦ Tilda interfeysi bilan tanishuv va Comfort Food saytini yaratish ¦ The Tilda interface and a “Comfort Food” site",
  question: "Как за один урок собрать сайт ресторана из готовых блоков — без кода? ¦ Bir darsda tayyor bloklardan restoran saytini kodsiz qanday yig'ish mumkin? ¦ How do you build a restaurant site from ready blocks in one lesson — no code?",
  route: ["Кубики ¦ Kubiklar ¦ Building blocks", "Блок ¦ Blok ¦ A block", "6 шагов ¦ 6 qadam ¦ 6 steps", "Практика ¦ Amaliyot ¦ Practice", "Финал ¦ Yakun ¦ Finale"],
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🍲',
      kicker: "Tilda · Git · техническая тема 1 ¦ Tilda · Git · texnik mavzu 1 ¦ Tilda · Git · technical topic 1",
      title: "Сайт ресторана из кубиков ¦ Kubiklardan restoran sayti ¦ A restaurant site made of blocks",
      chat: "какое ваше любимое домашнее блюдо? ¦ sevimli uy taomingiz qaysi? ¦ what's your favourite home-cooked dish?",
      lead: "Tilda — конструктор сайтов: страница собирается из готовых блоков, как из кубиков. Сегодня знакомимся с интерфейсом и собираем сайт выдуманного ресторана домашней еды «Savoria» — Comfort Food. ¦ Tilda — sayt konstruktori: sahifa tayyor bloklardan kubiklar kabi yig'iladi. Bugun interfeys bilan tanishamiz va «Savoria» nomli to'qima uy taomlari restorani — Comfort Food saytini yig'amiz. ¦ Tilda is a site builder: a page is assembled from ready blocks like toy bricks. Today we learn the interface and build a site for “Savoria”, a made-up comfort-food restaurant.",
      facts: ["Сотни готовых блоков ¦ Yuzlab tayyor bloklar ¦ Hundreds of ready blocks", "Тексты и фото меняете сами ¦ Matn va rasmlarni o'zingiz o'zgartirasiz ¦ You swap in your own text and photos", "Публикация — одной кнопкой ¦ Nashr — bitta tugma bilan ¦ Publish with one button"],
      takeaway: "Смотрим, как страница ресторана собирается из блоков. ¦ Restoran sahifasi bloklardan qanday yig'ilishini ko'ramiz. ¦ Watch the restaurant page snap together from blocks.",
      notes: { say: ["Tilda нельзя встроить в презентацию — здесь симуляция, сборку показывайте в настоящей Tilda.", "«Savoria» — выдуманный ресторан; фото берите из бесплатных стоков или из библиотеки Tilda.", "Названия разделов могут немного отличаться в новых версиях интерфейса."], min: 3 },
    },
    {
      type: 'animate',
      stage: 0,
      title: "Страница собирается из блоков ¦ Sahifa bloklardan yig'iladi ¦ A page snaps together",
      chat: "какой блок поставим первым? ¦ qaysi blokni birinchi qo'yamiz? ¦ which block goes first?",
      actors: [
        { id: 'lib', icon: '📚', label: "Библиотека блоков ¦ Bloklar kutubxonasi ¦ Block library" },
        { id: 'm', text: "☰ Меню сайта ¦ ☰ Sayt menyusi ¦ ☰ Site menu" },
        { id: 'c', text: "🖼️ Обложка ¦ 🖼️ Muqova ¦ 🖼️ Cover" },
        { id: 's', text: "🍲 Блюда ¦ 🍲 Taomlar ¦ 🍲 Dishes" },
        { id: 'f', text: "📅 Бронь столика ¦ 📅 Stol band qilish ¦ 📅 Table booking" },
        { id: 'z', text: "📍 Адрес и подвал ¦ 📍 Manzil va pastki qism ¦ 📍 Location & footer" },
      ],
      steps: [
        { say: "Слева — библиотека: меню, обложки, галереи, формы, подвалы. ¦ Chapda — kutubxona: menyular, muqovalar, galereyalar, formalar, pastki qismlar. ¦ On the left: the library — menus, covers, galleries, forms, footers.", at: { lib: [14, 50, 1.3], m: [40, 8, 0.7], c: [40, 29, 0.7], s: [40, 50, 0.7], f: [40, 71, 0.7], z: [40, 92, 0.7] } },
        { say: "Берём меню: Home, Menu, Gallery, Reservations — оно встаёт наверх. ¦ Menyuni olamiz: Home, Menu, Gallery, Reservations — u tepaga joylashadi. ¦ Take a menu: Home, Menu, Gallery, Reservations — it sits at the top.", at: { m: [74, 8, 0.75] }, pulse: ['m'] },
        { say: "Под ним — обложка «Comfort Food, Crafted Daily» и блюда. ¦ Uning ostida — «Comfort Food, Crafted Daily» muqovasi va taomlar. ¦ Below it: the “Comfort Food, Crafted Daily” cover and the dishes.", at: { c: [74, 29, 0.75], s: [74, 50, 0.75] } },
        { say: "Форма брони и адрес — сайт ресторана готов! ¦ Band qilish formasi va manzil — restoran sayti tayyor! ¦ A booking form and the address — the restaurant site is ready!", at: { f: [74, 71, 0.75], z: [74, 92, 0.75] }, pulse: ['m', 'c', 's', 'f', 'z'] },
      ],
      takeaway: "Страница = блоки друг под другом. ¦ Sahifa = bir-birining ostidagi bloklar. ¦ A page is blocks stacked one under another.",
      notes: { min: 4 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Собираем «Savoria» по блокам ¦ «Savoria»ni bloklab yig'amiz ¦ Building “Savoria” block by block",
      chat: "какой текст напишем на обложке? ¦ muqovaga qanday matn yozamiz? ¦ what text goes on the cover?",
      lang: 'text',
      css: CSS,
      steps: [
        { code: 'Block: Cover\n  Title: "Your title"', html: site('Your title', '', 'Cover'), say: "Новый блок обложки — с текстом-заглушкой. ¦ Yangi muqova bloki — o'rinbosar matn bilan. ¦ A new cover block with placeholder text." },
        { code: `Content\n  Title: "${T}"`, line: 2, html: site(T, '', 'Content'), say: "«Контент» — меняем заголовок, подзаголовок и текст кнопки. ¦ «Kontent» — sarlavha, qo'shimcha sarlavha va tugma matnini o'zgartiramiz. ¦ “Content”: change the title, subtitle and button text." },
        { code: 'Settings\n  Background: #F3ECE4\n  Font: Serif', line: 2, html: site(T, 'warm serif', 'Settings'), say: "«Настройки» — тёплый фон и шрифт с засечками, как в уютном ресторане. ¦ «Sozlamalar» — iliq fon va shtrixli shrift, xuddi shinam restorandagidek. ¦ “Settings”: a warm background and a serif font, like a cosy restaurant." },
        { code: '+ Block: Menu (Home, Menu, Gallery…)\n+ Block: Photo', line: 1, html: site(T, 'warm serif', '+ Menu + Photo', ['nav', 'pic']), say: "Добавляем меню сайта и большое фото блюд. ¦ Sayt menyusi va taomlarning katta rasmini qo'shamiz. ¦ Add the site menu and a big photo of dishes." },
        { code: '+ Block: Dishes\n  Lagman $9 · Plov $11 · Salad $6', line: 1, html: site(T, 'warm serif', '+ Dishes', ['nav', 'pic', 'dishes']), say: "Блок с карточками блюд и ценами — гость сразу видит меню. ¦ Taom kartochkalari va narxlari bilan blok — mehmon menyuni darhol ko'radi. ¦ A block of dish cards with prices — guests see the menu at once." },
      ],
      takeaway: "Контент — что написано. Настройки — как выглядит. ¦ Kontent — nima yozilgan. Sozlamalar — qanday ko'rinadi. ¦ Content is what it says; Settings is how it looks.",
      notes: { min: 6 },
    },
    {
      type: 'animate',
      stage: 2,
      title: "Сайт за 6 шагов ¦ 6 qadamda sayt ¦ A site in 6 steps",
      chat: "на каком шаге вы сейчас? ¦ hozir qaysi qadamdasiz? ¦ which step are you on now?",
      actors: [
        { id: 'p', icon: '📁', label: "Проект ¦ Loyiha ¦ Project" },
        { id: 'pg', icon: '📄', label: "Страница ¦ Sahifa ¦ Page" },
        { id: 'b', icon: '🧱', label: "Блоки ¦ Bloklar ¦ Blocks" },
        { id: 'ct', icon: '✏️', label: "Контент ¦ Kontent ¦ Content" },
        { id: 'pv', icon: '📱', label: "Предпросмотр ¦ Ko'rib chiqish ¦ Preview" },
        { id: 'pub', icon: '🚀', label: "Опубликовать ¦ Nashr qilish ¦ Publish" },
        { id: 'url', text: "savoria.tilda.ws" },
      ],
      steps: [
        { say: "1. Создаём проект «Savoria» — это будущий сайт. ¦ 1. «Savoria» loyihasini yaratamiz — bu bo'lajak sayt. ¦ 1. Create a “Savoria” project — the future site.", at: { p: [10, 40] } },
        { say: "2. Добавляем страницу — главную. ¦ 2. Sahifa qo'shamiz — bosh sahifani. ¦ 2. Add a page — the home page.", at: { pg: [26, 40] }, lines: [['p', 'pg']] },
        { say: "3. Ставим блоки: меню, обложка, блюда, бронь. ¦ 3. Bloklarni qo'yamiz: menyu, muqova, taomlar, band qilish. ¦ 3. Add blocks: menu, cover, dishes, booking.", at: { b: [42, 40] }, lines: [['p', 'pg'], ['pg', 'b']] },
        { say: "4. Меняем тексты и фото на свои. ¦ 4. Matn va rasmlarni o'zimiznikiga almashtiramiz. ¦ 4. Swap in our own text and photos.", at: { ct: [58, 40] }, lines: [['p', 'pg'], ['pg', 'b'], ['b', 'ct']] },
        { say: "5. Смотрим предпросмотр — и на телефоне тоже. ¦ 5. Ko'rib chiqamiz — telefonda ham. ¦ 5. Preview it — on a phone too.", at: { pv: [74, 40] }, lines: [['p', 'pg'], ['pg', 'b'], ['b', 'ct'], ['ct', 'pv']] },
        { say: "6. «Опубликовать» — и сайт доступен всем по ссылке! ¦ 6. «Nashr qilish» — va sayt hammaga havola orqali ochiq! ¦ 6. “Publish” — and the site is live for everyone!", at: { pub: [90, 40, 1.2], url: [74, 80] }, lines: [['p', 'pg'], ['pg', 'b'], ['b', 'ct'], ['ct', 'pv'], ['pv', 'pub']], pulse: ['pub', 'url'] },
      ],
      takeaway: "Проект → страница → блоки → контент → предпросмотр → публикация. ¦ Loyiha → sahifa → bloklar → kontent → ko'rib chiqish → nashr. ¦ Project → page → blocks → content → preview → publish.",
      notes: { min: 4 },
    },
    {
      type: 'order',
      stage: 3,
      title: "Расставьте блоки «Savoria» сверху вниз ¦ «Savoria» bloklarini yuqoridan pastga joylashtiring ¦ Stack the “Savoria” blocks top to bottom",
      chat: "пишите номера блоков по порядку ¦ bloklar raqamlarini tartib bilan yozing ¦ write the block numbers in order",
      items: [
        "☰ Меню сайта: Home, Menu, Gallery ¦ ☰ Sayt menyusi: Home, Menu, Gallery ¦ ☰ Site menu: Home, Menu, Gallery",
        "🖼️ Обложка «Comfort Food, Crafted Daily» ¦ 🖼️ «Comfort Food, Crafted Daily» muqovasi ¦ 🖼️ Cover: “Comfort Food, Crafted Daily”",
        "🍲 Карточки блюд с ценами ¦ 🍲 Narxli taom kartochkalari ¦ 🍲 Dish cards with prices",
        "📸 Галерея зала ¦ 📸 Zal galereyasi ¦ 📸 Dining-room gallery",
        "📅 Форма «Забронировать столик» ¦ 📅 «Stol band qilish» formasi ¦ 📅 “Reserve a Table” form",
        "📍 Адрес, карта и подвал ¦ 📍 Manzil, xarita va pastki qism ¦ 📍 Address, map and footer",
      ],
      takeaway: "Меню — всегда сверху, подвал — всегда внизу. Между ними — от «кто мы» к «что сделать». ¦ Menyu — doim tepada, pastki qism — doim pastda. Ular orasida — «biz kimmiz»dan «nima qilish kerak»gacha. ¦ The menu always goes on top and the footer at the bottom; in between, from “who we are” to “what to do”.",
      notes: { min: 3 },
    },
    {
      type: 'sort',
      stage: 3,
      title: "Контент или Настройки? ¦ Kontentmi yoki Sozlamalarmi? ¦ Content or Settings?",
      chat: "пишите: «1 — Настройки» ¦ yozing: «1 — Sozlamalar» ¦ write: “1 — Settings”",
      zones: [
        { id: 'c', label: "Контент ¦ Kontent ¦ Content", icon: '✏️' },
        { id: 's', label: "Настройки ¦ Sozlamalar ¦ Settings", icon: '🎨' },
      ],
      items: [
        { text: "Написать «Comfort Food, Crafted Daily» ¦ «Comfort Food, Crafted Daily» deb yozish ¦ Type “Comfort Food, Crafted Daily”", zone: 'c' },
        { text: "Сделать фон тёплым бежевым ¦ Fonni iliq och jigarrang qilish ¦ Make the background warm beige", zone: 's' },
        { text: "Загрузить фото плова ¦ Palov rasmini yuklash ¦ Upload a photo of plov", zone: 'c' },
        { text: "Поменять цену лагмана ¦ Lag'mon narxini o'zgartirish ¦ Change the price of lagman", zone: 'c' },
        { text: "Скруглить кнопку и сделать её бордовой ¦ Tugmani yumaloq va to'q qizil qilish ¦ Round the button and make it burgundy", zone: 's' },
      ],
      notes: { min: 3 },
    },
    {
      type: 'compare',
      stage: 3,
      title: "Код или Tilda? ¦ Kod yoki Tilda? ¦ Code or Tilda?",
      chat: "что бы вы выбрали для сайта ресторана? ¦ restoran sayti uchun nimani tanlagan bo'lardingiz? ¦ which would you pick for a restaurant site?",
      left: { icon: '💻', label: "Свой код ¦ O'z kodingiz ¦ Your own code", points: ["Можно всё что угодно ¦ Istalgan narsa mumkin ¦ Anything is possible", "Дольше делать ¦ Uzoqroq vaqt ketadi ¦ Takes longer"] },
      right: { icon: '🧱', label: 'Tilda', points: ["Сайт за час ¦ Bir soatda sayt ¦ A site in an hour", "Ресторан правит меню и цены сам ¦ Restoran menyu va narxlarni o'zi tuzatadi ¦ The restaurant edits its menu and prices itself"] },
      verdict: "Сайт ресторана быстро — Tilda. Необычная логика — код. ¦ Restoran saytini tez — Tilda. G'ayrioddiy mantiq — kod. ¦ A restaurant site fast: Tilda. Unusual logic: code.",
      notes: { min: 2 },
    },
    {
      type: 'mission',
      stage: 4,
      title: "Миссия: сайт «Savoria» ¦ Missiya: «Savoria» sayti ¦ Mission: the “Savoria” site",
      chat: "номера ответов в чат ¦ javob raqamlarini chatga ¦ answer numbers in the chat",
      goal: "Сайт ресторана опубликован! ¦ Restoran sayti nashr qilindi! ¦ The restaurant site is live!",
      items: [
        { title: "Где взять готовую обложку? ¦ Tayyor muqovani qayerdan olish mumkin? ¦ Where's a ready cover?", choices: ["Библиотека блоков ¦ Bloklar kutubxonasi ¦ The block library", "Нарисовать в Paint ¦ Paint'da chizish ¦ Draw it in Paint"], correct: 0, explain: "Сотни блоков по категориям. ¦ Toifalar bo'yicha yuzlab bloklar. ¦ Hundreds of blocks by category." },
        { title: "Как проверить вид на телефоне? ¦ Telefondagi ko'rinishni qanday tekshirish mumkin? ¦ How to check the phone view?", choices: ["Предпросмотр ¦ Ko'rib chiqish ¦ Preview", "Сразу опубликовать ¦ Darhol nashr qilish ¦ Publish straight away"], correct: 0, explain: "Сначала смотрим, потом публикуем. ¦ Avval ko'ramiz, keyin nashr qilamiz. ¦ Look first, then publish." },
        { title: "Цвет кнопки «Reserve a Table» меняют в… ¦ «Reserve a Table» tugmasi rangi qayerda o'zgartiriladi… ¦ The “Reserve a Table” button colour lives in…", choices: ["Настройках ¦ Sozlamalarda ¦ Settings", "Контенте ¦ Kontentda ¦ Content"], correct: 0, explain: "Вид — в Настройках. ¦ Ko'rinish — Sozlamalarda. ¦ Looks go in Settings." },
      ],
      notes: { min: 3 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: интерфейс Tilda ¦ Xulosa: Tilda interfeysi ¦ Summary: the Tilda interface",
      chat: "какой сайт соберёте на Tilda следующим? ¦ Tilda'da keyingi qaysi saytni yig'asiz? ¦ what site will you build on Tilda next?",
      answer: "Tilda — конструктор: страница собирается из готовых блоков из библиотеки. У каждого блока есть «Контент» (тексты, фото, цены) и «Настройки» (цвета, шрифты, отступы). Сайт ресторана «Savoria» мы собрали так: проект → страница → блоки (меню, обложка, блюда, галерея, бронь, адрес) → контент → предпросмотр на компьютере и телефоне → публикация одной кнопкой. ¦ Tilda — konstruktor: sahifa kutubxonadagi tayyor bloklardan yig'iladi. Har bir blokda «Kontent» (matn, rasm, narxlar) va «Sozlamalar» (ranglar, shriftlar, bo'shliqlar) bor. «Savoria» restorani saytini shunday yig'dik: loyiha → sahifa → bloklar (menyu, muqova, taomlar, galereya, band qilish, manzil) → kontent → kompyuter va telefonda ko'rib chiqish → bitta tugma bilan nashr. ¦ Tilda is a builder: a page is assembled from ready blocks in the library. Each block has “Content” (text, photos, prices) and “Settings” (colours, fonts, spacing). We built the “Savoria” restaurant site like this: project → page → blocks (menu, cover, dishes, gallery, booking, address) → content → preview on desktop and phone → publish with one button.",
      icon: '🍲',
      badge: "Сборщик сайтов ¦ Sayt yig'uvchi ¦ Site builder",
      badgeSub: "Tilda · Git · техническая 1 ¦ Tilda · Git · texnik 1 ¦ Tilda · Git · technical 1",
      homeworkTitle: "Дома ¦ Uyda ¦ At home",
      homework: [
        "Соберите на Tilda сайт своего выдуманного кафе из 6 блоков. ¦ Tilda'da o'zingiz o'ylab topgan kafe uchun 6 ta blokdan sayt yig'ing. ¦ Build a 6-block site for your own made-up café on Tilda.",
        "Опубликуйте его и пришлите ссылку. ¦ Uni nashr qiling va havolani yuboring. ¦ Publish it and share the link.",
      ],
      takeaway: "Дальше: Zero Block и сайт-портфолио. ¦ Keyingisi: Zero Block va portfolio sayt. ¦ Next: Zero Block and a portfolio site.",
      notes: { min: 2 },
    },
  ],
});
