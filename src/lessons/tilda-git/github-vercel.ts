import { kit } from '@engine/kit';

/* A simplified mock of the deploy screens (made-up account "aziz-dev", made-up repo "my-portfolio") */
const CSS = `.wrap{display:grid;place-items:center;height:100%;font-family:Manrope,system-ui}
.win{width:600px;border-radius:16px;overflow:hidden;background:#fff;box-shadow:0 12px 34px #0002;color:#16181f}
.bar{display:flex;align-items:center;gap:8px;padding:10px 14px;background:#f1f2f5;font:700 13px JetBrains Mono,monospace;color:#5b6170}
.bar i{width:11px;height:11px;border-radius:50%;background:#d8dbe2}
.pad{padding:20px 22px}
.pad h3{margin:0 0 12px;font-size:22px}
.repo{display:flex;align-items:center;gap:12px;padding:12px 14px;border:2px solid #e1e4ea;border-radius:12px;margin-bottom:8px;font-weight:800}
.repo span{margin-left:auto;padding:6px 14px;border-radius:8px;background:#16181f;color:#fff;font-size:14px}
.repo.on{border-color:#5b6ef5;background:#eef0ff}
.log{padding:14px;border-radius:12px;background:#0e1117;color:#9fe7b4;font:600 14px/1.7 JetBrains Mono,monospace}
.ok{display:flex;align-items:center;gap:14px;font-size:20px;font-weight:800}
.ok b{font-size:44px}
.url{margin-top:12px;display:inline-block;padding:8px 14px;border-radius:10px;background:#e9fbf2;color:#05402a;font:800 16px JetBrains Mono,monospace}
.site{margin-top:14px;padding:22px;border-radius:12px;background:#eef1ff;text-align:center}
.site h4{margin:0 0 6px;font-size:24px}.site p{margin:0;color:#5b6170}`;
const win = (url: string, body: string) => `<div class="wrap"><div class="win"><div class="bar"><i></i><i></i><i></i>${url}</div><div class="pad">${body}</div></div></div>`;
const IMPORT = win(
  'vercel.com/new',
  `<h3>Import Git Repository</h3><div class="repo on">📁 aziz-dev / my-portfolio<span>Import</span></div><div class="repo">📁 aziz-dev / snake-game<span>Import</span></div>`,
);
const BUILD = win('vercel.com/aziz-dev/my-portfolio', `<h3>Deploying…</h3><div class="log">▸ Cloning github.com/aziz-dev/my-portfolio<br>▸ Building…<br>▸ Uploading files<br>✓ Ready</div>`);
const DONE = win('vercel.com/aziz-dev/my-portfolio', `<div class="ok"><b>🎉</b>Congratulations! Your site is live.</div><span class="url">my-portfolio.vercel.app</span>`);
const LIVE = (title: string) => win('my-portfolio.vercel.app', `<div class="site"><h4>${title}</h4><p>Junior web designer · My works · Contacts</p></div>`);

export default kit({
  id: 'tilda-git-t07',
  title: "GitHub и Vercel: выкладываем проект в интернет ¦ Github va Vercel bilan ishlash: loyihani internetga joylash ¦ GitHub and Vercel: putting a project online",
  question: "Как сделать так, чтобы ваш сайт открывался у друга на телефоне по ссылке? ¦ Saytingiz do'stingizning telefonida havola orqali ochilishi uchun nima qilish kerak? ¦ How do you get your site to open on a friend's phone from a link?",
  route: ["Сайт в интернете ¦ Sayt internetda ¦ Site online", "GitHub ¦ GitHub ¦ GitHub", "Vercel ¦ Vercel ¦ Vercel", "Обновления ¦ Yangilanishlar ¦ Updates", "Финал ¦ Yakun ¦ Finale"],
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🚀',
      kicker: "Tilda · Git · техническая тема 7 ¦ Tilda · Git · texnik mavzu 7 ¦ Tilda · Git · technical topic 7",
      title: "Сайт живёт только у вас на компьютере ¦ Sayt faqat sizning kompyuteringizda yashaydi ¦ Your site only lives on your computer",
      chat: "кому вы первым отправите ссылку на свой сайт? ¦ sayt havolasini birinchi kimga yuborasiz? ¦ who will you send your site link to first?",
      lead: "Файл index.html открывается только у вас. Чтобы сайт увидел весь мир, код кладут на GitHub, а Vercel берёт его оттуда и публикует по ссылке вида my-portfolio.vercel.app. И каждое новое сохранение само обновляет сайт! ¦ index.html fayli faqat sizda ochiladi. Saytni butun dunyo ko'rishi uchun kod GitHub'ga joylanadi, Vercel esa uni u yerdan olib, my-portfolio.vercel.app kabi havola bilan nashr qiladi. Har bir yangi saqlash esa saytni o'zi yangilaydi! ¦ An index.html file only opens on your machine. To show the world, the code goes to GitHub, and Vercel takes it from there and publishes it at a link like my-portfolio.vercel.app. Every new save updates the site by itself!",
      facts: ["GitHub — склад кода ¦ GitHub — kod ombori ¦ GitHub stores the code", "Vercel — публикация по ссылке ¦ Vercel — havola bilan nashr ¦ Vercel publishes it at a link", "Бесплатно для учебных проектов ¦ O'quv loyihalari uchun bepul ¦ Free for learning projects"],
      notes: { say: ["Аккаунты GitHub и Vercel ученики создают и входят сами (с разрешения родителей). Пароли и токены в эфире не показываем и не диктуем.", "Имена «aziz-dev» и «my-portfolio» — выдуманные примеры."], min: 3 },
    },
    {
      type: 'animate',
      stage: 0,
      title: "Путь кода до интернета ¦ Kodning internetgacha yo'li ¦ How code gets online",
      chat: "что будет посередине: GitHub или Vercel? ¦ o'rtada nima bo'ladi: GitHub yoki Vercel? ¦ what's in the middle: GitHub or Vercel?",
      actors: [
        { id: 'pc', icon: '💻', label: "Ваш компьютер ¦ Kompyuteringiz ¦ Your computer" },
        { id: 'gh', icon: '🐙', label: 'GitHub' },
        { id: 'v', icon: '▲', label: 'Vercel' },
        { id: 'w', icon: '🌍', label: "Интернет ¦ Internet ¦ The internet" },
        { id: 'url', text: 'my-portfolio.vercel.app' },
      ],
      steps: [
        { say: "Код проекта лежит у вас на компьютере. ¦ Loyiha kodi kompyuteringizda turibdi. ¦ The project code sits on your computer.", at: { pc: [12, 50, 1.2] } },
        { say: "git push — и копия кода на GitHub. ¦ git push — va kod nusxasi GitHub'da. ¦ git push — and a copy of the code is on GitHub.", at: { gh: [38, 50, 1.1] }, lines: [['pc', 'gh', 'git push']] },
        { say: "Vercel подключается к GitHub и собирает сайт. ¦ Vercel GitHub'ga ulanadi va saytni yig'adi. ¦ Vercel connects to GitHub and builds the site.", at: { v: [62, 50, 1.1] }, lines: [['pc', 'gh', 'git push'], ['gh', 'v', 'Import']] },
        { say: "Сайт в интернете — по ссылке его откроет любой! ¦ Sayt internetda — havola orqali uni istalgan odam ochadi! ¦ The site is online — anyone can open the link!", at: { w: [88, 50, 1.2], url: [76, 82] }, lines: [['pc', 'gh', 'git push'], ['gh', 'v', 'Import'], ['v', 'w', 'Deploy']], pulse: ['w', 'url'] },
      ],
      takeaway: "Компьютер → GitHub → Vercel → интернет. ¦ Kompyuter → GitHub → Vercel → internet. ¦ Computer → GitHub → Vercel → the internet.",
      notes: { min: 3 },
    },
    {
      type: 'terminal',
      stage: 1,
      title: "Шаг 1: проект на GitHub ¦ 1-qadam: loyiha GitHub'da ¦ Step 1: the project on GitHub",
      chat: "какая команда отправляет код на GitHub? ¦ qaysi buyruq kodni GitHub'ga yuboradi? ¦ which command sends the code to GitHub?",
      lines: [
        { cmd: 'git init', note: "Включаем Git в папке проекта. ¦ Loyiha papkasida Git'ni yoqamiz. ¦ Turn Git on in the project folder." },
        { cmd: 'git add .', note: "Добавляем все файлы. ¦ Barcha fayllarni qo'shamiz. ¦ Add all the files." },
        { cmd: 'git commit -m "First version"', out: ['[main (root-commit)] First version'], note: "Сохраняем версию. ¦ Versiyani saqlaymiz. ¦ Save a version." },
        { cmd: 'git remote add origin https://github.com/aziz-dev/my-portfolio.git', note: "Связываем папку с пустым репозиторием на GitHub. ¦ Papkani GitHub'dagi bo'sh repozitoriy bilan bog'laymiz. ¦ Link the folder to an empty GitHub repository." },
        { cmd: 'git push -u origin main', out: ['To github.com/aziz-dev/my-portfolio.git', ' * [new branch]  main -> main'], note: "Отправляем — код на GitHub! ¦ Yuboramiz — kod GitHub'da! ¦ Push — the code is on GitHub!" },
      ],
      takeaway: "Повторили урок 5: теперь репозиторий готов для Vercel. ¦ 5-darsni takrorladik: endi repozitoriy Vercel uchun tayyor. ¦ A recap of lesson 5: now the repository is ready for Vercel.",
      notes: { say: ["Репозиторий создаём на GitHub заранее: «New repository», без README, если папка уже с файлами."], min: 4 },
    },
    {
      type: 'order',
      stage: 2,
      title: "Шаг 2: расставьте шаги публикации на Vercel ¦ 2-qadam: Vercel'da nashr qadamlarini tartiblang ¦ Step 2: put the Vercel publishing steps in order",
      chat: "пишите номера шагов по порядку ¦ qadam raqamlarini tartib bilan yozing ¦ write the step numbers in order",
      items: [
        "🔑 Войти в Vercel через свой GitHub ¦ 🔑 Vercel'ga o'z GitHub'ingiz orqali kirish ¦ 🔑 Sign in to Vercel with your GitHub",
        "➕ Нажать «Add New → Project» ¦ ➕ «Add New → Project»ni bosish ¦ ➕ Click “Add New → Project”",
        "📁 Выбрать репозиторий и нажать «Import» ¦ 📁 Repozitoriyni tanlab, «Import»ni bosish ¦ 📁 Pick the repository and click “Import”",
        "⚙️ Проверить настройки проекта ¦ ⚙️ Loyiha sozlamalarini tekshirish ¦ ⚙️ Check the project settings",
        "🚀 Нажать «Deploy» и подождать ¦ 🚀 «Deploy»ni bosib, kutish ¦ 🚀 Click “Deploy” and wait",
        "🔗 Открыть ссылку и проверить сайт ¦ 🔗 Havolani ochib, saytni tekshirish ¦ 🔗 Open the link and check the site",
      ],
      takeaway: "Без «Import» Vercel не знает, какой проект публиковать. ¦ «Import»siz Vercel qaysi loyihani nashr qilishni bilmaydi. ¦ Without “Import”, Vercel doesn't know which project to publish.",
      notes: { min: 4 },
    },
    {
      type: 'show',
      stage: 2,
      title: "Так это выглядит ¦ Bu shunday ko'rinadi ¦ What it looks like",
      chat: "какой адрес получит сайт? ¦ sayt qanday manzil oladi? ¦ what address will the site get?",
      lang: 'text',
      css: CSS,
      steps: [
        { code: 'Add New → Project\nImport: aziz-dev/my-portfolio', line: 2, html: IMPORT, say: "Vercel показывает ваши репозитории с GitHub — выбираем нужный. ¦ Vercel GitHub'dagi repozitoriylaringizni ko'rsatadi — keraklisini tanlaymiz. ¦ Vercel lists your GitHub repositories — pick the right one." },
        { code: 'Deploy ▸ Building…', html: BUILD, say: "Vercel скачивает код и собирает сайт — обычно меньше минуты. ¦ Vercel kodni yuklab olib, saytni yig'adi — odatda bir daqiqadan kam. ¦ Vercel downloads the code and builds the site — usually under a minute." },
        { code: '✓ Ready\nmy-portfolio.vercel.app', line: 2, html: DONE, say: "Готово! У сайта есть адрес. ¦ Tayyor! Saytning manzili bor. ¦ Done! The site has an address." },
        { code: 'https://my-portfolio.vercel.app', html: LIVE("Hi, I'm Aziz 👋"), say: "Открываем ссылку на телефоне — сайт работает у всех. ¦ Havolani telefonda ochamiz — sayt hammada ishlaydi. ¦ Open the link on a phone — the site works for everyone." },
      ],
      notes: { say: ["Покажите деплой вживую на учебном проекте. Интерфейс Vercel иногда меняется — названия кнопок могут отличаться."], min: 5 },
    },
    {
      type: 'animate',
      stage: 3,
      title: "Обновление сайта — само ¦ Saytni yangilash — o'z-o'zidan ¦ Updates happen by themselves",
      chat: "что сделать, чтобы на сайте появился новый проект? ¦ saytda yangi loyiha paydo bo'lishi uchun nima qilish kerak? ¦ what do you do to add a new project to the site?",
      actors: [
        { id: 'e', icon: '✏️', label: "Меняем код ¦ Kodni o'zgartiramiz ¦ Edit the code" },
        { id: 'c', icon: '💾', label: 'commit + push' },
        { id: 'g', icon: '🐙', label: 'GitHub' },
        { id: 'v', icon: '▲', label: "Vercel пересобирает ¦ Vercel qayta yig'adi ¦ Vercel rebuilds" },
        { id: 's', icon: '🌍', label: "Сайт обновлён ¦ Sayt yangilandi ¦ Site updated" },
      ],
      steps: [
        { say: "Добавили в портфолио новый проект. ¦ Portfolioga yangi loyiha qo'shdik. ¦ We added a new project to the portfolio.", at: { e: [12, 50] } },
        { say: "git commit и git push — как обычно. ¦ git commit va git push — odatdagidek. ¦ git commit and git push, as usual.", at: { c: [32, 50], g: [52, 50] }, lines: [['e', 'c'], ['c', 'g']] },
        { say: "Vercel сам замечает новый коммит и пересобирает сайт. ¦ Vercel yangi kommitni o'zi sezadi va saytni qayta yig'adi. ¦ Vercel spots the new commit itself and rebuilds the site.", at: { v: [72, 50] }, lines: [['e', 'c'], ['c', 'g'], ['g', 'v']], pulse: ['v'] },
        { say: "Через минуту по той же ссылке — новая версия! ¦ Bir daqiqadan keyin o'sha havolada — yangi versiya! ¦ A minute later, the same link shows the new version!", at: { s: [90, 50, 1.2] }, lines: [['e', 'c'], ['c', 'g'], ['g', 'v'], ['v', 's']], pulse: ['s'] },
      ],
      takeaway: "Один раз подключили — дальше достаточно git push. ¦ Bir marta ulandi — keyin git push yetarli. ¦ Connect once — after that, git push is all it takes.",
      notes: { min: 3 },
    },
    {
      type: 'truefalse',
      stage: 3,
      title: "Правда или миф? ¦ Rostmi yoki afsona? ¦ True or myth?",
      chat: "пишите «правда» или «миф» ¦ «rost» yoki «afsona» deb yozing ¦ write “true” or “myth”",
      statements: [
        { text: "После каждого изменения сайт нужно заново загружать в Vercel вручную ¦ Har bir o'zgarishdan keyin saytni Vercel'ga qo'lda qayta yuklash kerak ¦ After every change you must re-upload the site to Vercel by hand", truth: false, explain: "Vercel сам пересобирает сайт после git push. ¦ Vercel git push'dan keyin saytni o'zi qayta yig'adi. ¦ Vercel rebuilds by itself after git push." },
        { text: "Пароли и секретные ключи нельзя хранить в коде на GitHub ¦ Parollar va maxfiy kalitlarni GitHub'dagi kodda saqlab bo'lmaydi ¦ Passwords and secret keys must never be stored in code on GitHub", truth: true, explain: "Публичный репозиторий видят все. ¦ Ochiq repozitoriyni hamma ko'radi. ¦ Everyone can see a public repository." },
      ],
      notes: { min: 2 },
    },
    {
      type: 'mission',
      stage: 4,
      title: "Миссия: сайт в интернете ¦ Missiya: sayt internetda ¦ Mission: the site goes live",
      chat: "номера ответов в чат ¦ javob raqamlarini chatga ¦ answer numbers in the chat",
      goal: "Сайт открывается по ссылке у всех! ¦ Sayt havola orqali hammada ochiladi! ¦ The site opens from the link for everyone!",
      items: [
        { title: "Где хранится код для Vercel? ¦ Vercel uchun kod qayerda saqlanadi? ¦ Where does Vercel take the code from?", choices: ["В репозитории на GitHub ¦ GitHub'dagi repozitoriyda ¦ From a GitHub repository", "В письме другу ¦ Do'stga yozilgan xatda ¦ From an email to a friend"], correct: 0, explain: "Vercel импортирует репозиторий. ¦ Vercel repozitoriyni import qiladi. ¦ Vercel imports the repository." },
        { title: "Исправили опечатку. Что дальше? ¦ Imlo xatosini tuzatdik. Keyin nima? ¦ You fixed a typo. What next?", choices: ["git commit и git push ¦ git commit va git push ¦ git commit and git push", "Создать новый проект в Vercel ¦ Vercel'da yangi loyiha yaratish ¦ Create a new Vercel project"], correct: 0, explain: "Сайт обновится сам. ¦ Sayt o'zi yangilanadi. ¦ The site updates itself." },
      ],
      notes: { min: 2 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: GitHub + Vercel ¦ Xulosa: GitHub + Vercel ¦ Summary: GitHub + Vercel",
      chat: "пришлите ссылку на свой сайт после урока! ¦ darsdan keyin saytingiz havolasini yuboring! ¦ share your site link after the lesson!",
      answer: "Чтобы сайт увидели все, код отправляем на GitHub (git add → commit → push), а Vercel импортирует репозиторий и публикует его по ссылке вида my-portfolio.vercel.app. Дальше каждое git push само обновляет сайт. Пароли и секретные ключи в код не кладём. ¦ Saytni hamma ko'rishi uchun kodni GitHub'ga yuboramiz (git add → commit → push), Vercel esa repozitoriyni import qilib, uni my-portfolio.vercel.app kabi havola bilan nashr qiladi. Keyin har bir git push saytni o'zi yangilaydi. Parol va maxfiy kalitlarni kodga qo'ymaymiz. ¦ To show the world, we send the code to GitHub (git add → commit → push), and Vercel imports the repository and publishes it at a link like my-portfolio.vercel.app. After that, every git push updates the site by itself. Never put passwords or secret keys in code.",
      icon: '🚀',
      badge: "Запускающий в интернет ¦ Internetga chiqaruvchi ¦ Launch engineer",
      badgeSub: "Tilda · Git · техническая 7 ¦ Tilda · Git · texnik 7 ¦ Tilda · Git · technical 7",
      homeworkTitle: "Дома ¦ Uyda ¦ At home",
      homework: [
        "Выложите своё портфолио или игру на GitHub и опубликуйте через Vercel (с разрешения родителей). ¦ Portfoliongiz yoki o'yiningizni GitHub'ga joylang va Vercel orqali nashr qiling (ota-ona ruxsati bilan). ¦ Put your portfolio or game on GitHub and publish it with Vercel (with your parents' permission).",
        "Измените одну деталь, сделайте git push и проверьте, что сайт обновился. ¦ Bitta detalni o'zgartiring, git push qiling va sayt yangilanganini tekshiring. ¦ Change one detail, git push and check that the site updated.",
      ],
      notes: { min: 2 },
    },
  ],
});
