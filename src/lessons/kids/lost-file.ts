import { kit } from '@engine/kit';
import { HOME, KCSS, ROUTE, rkick } from './_kids';

/* A folder tree; `open` = how deep we've walked, `found` highlights the file */
const CSS = `${KCSS}
.tree{display:flex;flex-direction:column;gap:10px;font:700 26px Inter,system-ui,sans-serif}
.tree div{display:flex;align-items:center;gap:12px;padding:10px 18px;border-radius:14px;background:#fff;border:3px solid #e1e4ea}
.tree div.on{border-color:#fa4f28;background:#fff1ec}
.tree div.ok{border-color:#0cd678;background:#e9fbf2}
.tree div.dim{opacity:.35}`;
const LEVELS = [
  { pad: 0, icon: '💻', name: 'Computer' },
  { pad: 40, icon: '📁', name: 'Documents' },
  { pad: 80, icon: '📁', name: 'Pictures' },
  { pad: 120, icon: '🖼️', name: 'cat-in-space.png' },
];
const tree = (open: number, found = false) =>
  `<div class="wrap"><div class="tree">${LEVELS.map(
    (l, i) =>
      `<div class="${i < open ? 'on' : i === open && found ? 'ok' : i > open ? 'dim' : 'on'}" style="margin-left:${l.pad}px"><span>${l.icon}</span>${l.name}</div>`,
  ).join('')}</div></div>`;

export default kit({
  id: 'kids-t25',
  title: "Спасаем потерянный файл ¦ Yo'qolgan faylni qutqaramiz ¦ Rescuing a lost file",
  question: "Куда пропал рисунок, который сохранил Рустам? ¦ Rustam saqlagan rasm qayerga yo'qoldi? ¦ Where did Rustam's saved drawing go?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🔍',
      kicker: rkick('comp'),
      title: "Рисунок пропал! ¦ Rasm yo'qoldi! ¦ The drawing is gone!",
      chat: "где ты хранишь свои рисунки на компьютере? ¦ kompyuterda rasmlaringni qayerda saqlaysan? ¦ where do you keep your drawings on a computer?",
      lead: "Герой Рустам нарисовал кота в космосе, нажал «Сохранить»… и не нашёл файл. Он не посмотрел, в какую папку сохраняет, и назвал файл «111». Помогаем Рустаму: найдём файл, дадим ему понятное имя и место. ¦ Qahramon Rustam koinotdagi mushukni chizdi, «Saqlash»ni bosdi… va faylni topa olmadi. U qaysi papkaga saqlayotganiga qaramadi va faylni «111» deb nomladi. Rustamga yordam beramiz: faylni topamiz, unga tushunarli nom va joy beramiz. ¦ Our hero Rustam drew a cat in space, clicked “Save”… and couldn't find the file. He didn't check which folder he saved to and named the file “111”. Let's help him: find the file and give it a clear name and place.",
      facts: [
        "Повторяем уроки 9–12: файл и папка ¦ 9–12-darslarni takrorlaymiz: fayl va papka ¦ We revise lessons 9–12: files and folders",
      ],
      notes: { min: 3 },
    },
    {
      type: 'poll',
      stage: 1,
      title: "Какое имя файла самое понятное? ¦ Qaysi fayl nomi eng tushunarli? ¦ Which file name is clearest?",
      chat: "пиши номер ¦ raqamini yoz ¦ write the number",
      options: [
        { label: "1 · 111.png" },
        { label: "2 · ааааа.png ¦ 2 · aaaaa.png ¦ 2 · aaaaa.png" },
        { label: "3 · cat-in-space.png" },
      ],
      correct: 2,
      result: "По имени «cat-in-space» сразу понятно, что внутри: кот в космосе. Файл легко найти поиском. ¦ «cat-in-space» nomidan ichida nima borligi darhol tushunarli: koinotdagi mushuk. Faylni qidiruv bilan topish oson. ¦ “cat-in-space” tells you straight away what's inside. It's easy to find with search.",
      notes: { min: 5 },
    },
    {
      type: 'show',
      stage: 2,
      title: "Путь к файлу: папка в папке ¦ Faylga yo'l: papka ichida papka ¦ The path to a file: folders in folders",
      chat: "пиши путь: Computer → … ¦ yo'lni yoz: Computer → … ¦ write the path: Computer → …",
      lang: 'text',
      css: CSS,
      steps: [
        { code: 'Computer', html: tree(0), say: "Начинаем с самого верха — с компьютера. ¦ Eng yuqoridan — kompyuterdan boshlaymiz. ¦ We start at the very top — the computer." },
        { code: 'Computer → Documents', html: tree(1), say: "Открываем папку «Документы». ¦ «Hujjatlar» papkasini ochamiz. ¦ We open the Documents folder." },
        { code: 'Computer → Documents → Pictures', html: tree(2), say: "Внутри — папка «Рисунки». Папка в папке! ¦ Ichida — «Rasmlar» papkasi. Papka ichida papka! ¦ Inside is the Pictures folder. A folder in a folder!" },
        { code: 'Computer → Documents → Pictures → cat-in-space.png ✓', html: tree(3, true), say: "Вот он! Это и есть путь к файлу — как адрес дома. ¦ Mana u! Bu faylga yo'l — uy manziliga o'xshaydi. ¦ There it is! That's the file's path — like a home address." },
      ],
      takeaway: "Путь — это цепочка папок от верха до файла. ¦ Yo'l — yuqoridan faylgacha bo'lgan papkalar zanjiri. ¦ A path is the chain of folders from the top down to the file.",
      notes: { min: 9 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: сохрани правильно ¦ O'zing bajar: to'g'ri saqla ¦ Your turn: save it right",
      chat: "номер ответа в чат ¦ javob raqamini chatga ¦ answer number in the chat",
      goal: "Твои файлы больше не теряются! ¦ Fayllaring endi yo'qolmaydi! ¦ Your files won't get lost any more!",
      items: [
        { title: "Рустам нарисовал собаку. Куда сохранить? ¦ Rustam it chizdi. Qayerga saqlash kerak? ¦ Rustam drew a dog. Where should he save it?", choices: ["В папку Pictures с именем dog.png ¦ Pictures papkasiga dog.png nomi bilan ¦ In Pictures, named dog.png", "Куда угодно, имя «2» ¦ Istalgan joyga, nomi «2» ¦ Anywhere, named “2”"], correct: 0, explain: "Понятная папка + понятное имя = файл не потеряется. ¦ Tushunarli papka + tushunarli nom = fayl yo'qolmaydi. ¦ A clear folder + a clear name = a file you won't lose." },
        { title: "Что смотреть, когда жмёшь «Сохранить»? ¦ «Saqlash»ni bosganda nimaga qarash kerak? ¦ What should you check when you click Save?", choices: ["В какую папку и под каким именем ¦ Qaysi papkaga va qanday nom bilan ¦ Which folder and what name", "Ничего, компьютер сам решит ¦ Hech narsa, kompyuter o'zi hal qiladi ¦ Nothing, the computer decides"], correct: 0, explain: "Так ты всегда будешь знать путь к файлу. ¦ Shunda faylga yo'lni doim bilasan. ¦ Then you'll always know the file's path." },
      ],
      notes: { min: 8 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: имя, папка, путь ¦ Xulosa: nom, papka, yo'l ¦ Wrap-up: name, folder, path",
      chat: "какую папку ты создашь для своих рисунков? ¦ rasmlaring uchun qanday papka yaratasan? ¦ what folder will you make for your drawings?",
      answer: "Чтобы файл не потерялся, даём ему понятное имя («cat-in-space», а не «111») и сохраняем в подходящую папку. Путь к файлу — это цепочка папок: Computer → Documents → Pictures → cat-in-space.png. Зная путь, файл легко найти. ¦ Fayl yo'qolmasligi uchun unga tushunarli nom beramiz («111» emas, «cat-in-space») va mos papkaga saqlaymiz. Faylga yo'l — papkalar zanjiri: Computer → Documents → Pictures → cat-in-space.png. Yo'lni bilsang, faylni topish oson. ¦ To keep a file from getting lost, give it a clear name (“cat-in-space”, not “111”) and save it in the right folder. The path is the chain of folders: Computer → Documents → Pictures → cat-in-space.png. Know the path and the file is easy to find.",
      icon: '🗂️',
      badge: "Хранитель файлов ¦ Fayllar qo'riqchisi ¦ File keeper",
      badgeSub: rkick('comp'),
      homeworkTitle: HOME,
      homework: [
        "Нарисуй на бумаге «дерево папок» для своих рисунков, игр и уроков и придумай понятные имена трём файлам. ¦ Qog'ozga rasmlaring, o'yinlaring va darslaring uchun «papkalar daraxti»ni chiz va uchta faylga tushunarli nom o'ylab top. ¦ Draw a “folder tree” on paper for your drawings, games and lessons, and give three files clear names.",
        "Нужна: бумага. ¦ Kerak: qog'oz. ¦ You need: paper.",
      ],
      notes: { min: 5 },
    },
  ],
});
