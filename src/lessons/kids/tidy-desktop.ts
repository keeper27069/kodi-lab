import { kit } from '@engine/kit';
import { HOME, KCSS, ROUTE, kick, tri } from './_kids';

// 20 files on a messy desktop: [icon, kind]; kind: p = picture, m = music, d = document, g = game
const FILES: [string, string][] = [
  ['🖼️', 'p'], ['🎵', 'm'], ['📄', 'd'], ['🎮', 'g'], ['🖼️', 'p'], ['📄', 'd'], ['🎵', 'm'], ['🖼️', 'p'], ['🎮', 'g'], ['📄', 'd'],
  ['🎵', 'm'], ['🖼️', 'p'], ['📄', 'd'], ['🎮', 'g'], ['🎵', 'm'], ['🖼️', 'p'], ['📄', 'd'], ['🎮', 'g'], ['🎵', 'm'], ['🖼️', 'p'],
];
const CSS = `${KCSS}
.desk{display:grid;grid-template-columns:repeat(5,92px);gap:10px;padding:18px;border-radius:18px;background:#2f6fd6}
.f{display:flex;flex-direction:column;align-items:center;gap:2px;color:#fff;font-size:15px;font-weight:700}
.f b{font-size:40px;line-height:1}
.dirs{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.dir{padding:12px;border-radius:16px;background:#fff;border:3px solid #e1e4ea;min-width:150px}
.dir h5{margin:0 0 8px;font-size:20px}
.dir div{display:flex;flex-wrap:wrap;gap:4px;font-size:28px}`;
const desk = `<div class="wrap"><div class="desk">${FILES.map(([i], n) => `<div class="f"><b>${i}</b>file ${n + 1}</div>`).join('')}</div></div>`;
const NAMES: Record<string, [string, string, string]> = { p: ['🖼️ Рисунки', '🖼️ Rasmlar', '🖼️ Pictures'], m: ['🎵 Музыка', '🎵 Musiqa', '🎵 Music'], d: ['📄 Документы', '📄 Hujjatlar', '📄 Documents'], g: ['🎮 Игры', "🎮 O'yinlar", '🎮 Games'] };
const sorted = tri((l) => {
  const k = l === 'ru' ? 0 : l === 'uz' ? 1 : 2;
  return `<div class="wrap"><div class="dirs">${Object.keys(NAMES)
    .map((t) => `<div class="dir"><h5>📁 ${NAMES[t][k]}</h5><div>${FILES.filter((f) => f[1] === t).map((f) => f[0]).join('')}</div></div>`)
    .join('')}</div></div>`;
});

export default kit({
  id: 'kids-t02',
  title: "Беспорядок на рабочем столе: разложи 20 файлов ¦ Ish stolidagi tartibsizlik: 20 ta faylni joylashtir ¦ A messy desktop: sort 20 files",
  question: "Как быстро найти нужный файл среди двадцати? ¦ Yigirmata fayl orasidan keraklisini qanday tez topish mumkin? ¦ How do you quickly find one file among twenty?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🗂️',
      kicker: kick('comp', 't', 2),
      title: "Наводим порядок в компьютере ¦ Kompyuterda tartib o'rnatamiz ¦ Tidying up a computer",
      chat: "у тебя на столе дома порядок? 👍 или 👎 ¦ uyingdagi stolda tartib bormi? 👍 yoki 👎 ¦ is your desk at home tidy? 👍 or 👎",
      lead: "Файл — это рисунок, песня или текст в компьютере. Папка — коробка для файлов. Когда файлов много, без папок легко потеряться. ¦ Fayl — kompyuterdagi rasm, qo'shiq yoki matn. Papka — fayllar uchun quti. Fayllar ko'p bo'lsa, papkalarsiz adashib qolish oson. ¦ A file is a picture, song or text in a computer. A folder is a box for files. With lots of files, it's easy to get lost without folders.",
      facts: [
        "Повторяем уроки 9–12: файл, папка, сохранение, поиск ¦ 9–12-darslarni takrorlaymiz: fayl, papka, saqlash, qidirish ¦ We revise lessons 9–12: file, folder, saving, search",
      ],
      notes: { min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Найди рисунок с котом за 5 секунд! ¦ Mushukli rasmni 5 soniyada top! ¦ Find the cat picture in 5 seconds!",
      chat: "какие папки ты бы сделал? ¦ qanday papkalar qilgan bo'larding? ¦ what folders would you make?",
      lang: 'text',
      css: CSS,
      steps: [
        { code: 'desktop: 20 files', html: desk, say: "Двадцать файлов вперемешку. Трудно найти, правда? ¦ Yigirmata fayl aralash-quralash. Topish qiyin, to'g'rimi? ¦ Twenty files all mixed up. Hard to find anything, right?" },
        { code: '📁 × 4', html: sorted, say: "А теперь — четыре папки по типу файлов. Рисунок найдёшь сразу! ¦ Endi esa — fayl turi bo'yicha to'rtta papka. Rasmni darhol topasan! ¦ Now — four folders by file type. You'll find the picture at once!" },
      ],
      notes: { min: 5 },
    },
    {
      type: 'sort',
      stage: 2,
      title: "Разложи файлы по папкам ¦ Fayllarni papkalarga joylashtir ¦ Sort the files into folders",
      chat: "пиши: «файл 7 → музыка» ¦ yoz: «7-fayl → musiqa» ¦ write: “file 7 → music”",
      zones: [
        { id: 'p', label: "Рисунки ¦ Rasmlar ¦ Pictures", icon: '🖼️' },
        { id: 'm', label: "Музыка ¦ Musiqa ¦ Music", icon: '🎵' },
        { id: 'd', label: "Документы ¦ Hujjatlar ¦ Documents", icon: '📄' },
      ],
      items: [
        { text: "кот.png ¦ mushuk.png ¦ cat.png", zone: 'p' },
        { text: "песня.mp3 ¦ qo'shiq.mp3 ¦ song.mp3", zone: 'm' },
        { text: "сочинение.docx ¦ insho.docx ¦ essay.docx", zone: 'd' },
        { text: "море.jpg ¦ dengiz.jpg ¦ sea.jpg", zone: 'p' },
        { text: "гимн.mp3 ¦ madhiya.mp3 ¦ anthem.mp3", zone: 'm' },
        { text: "расписание.pdf ¦ jadval.pdf ¦ timetable.pdf", zone: 'd' },
      ],
      notes: { say: ['Обращаем внимание на хвостик имени: .png и .jpg — картинки, .mp3 — звук.'], min: 7 },
    },
    {
      type: 'compare',
      stage: 2,
      title: "Два правила — оба работают ¦ Ikki qoida — ikkalasi ham ishlaydi ¦ Two rules — both work",
      chat: "какое правило тебе удобнее? «тип» или «тема» ¦ qaysi qoida senga qulayroq? «tur» yoki «mavzu» ¦ which rule suits you? “type” or “topic”",
      left: { label: "По типу ¦ Turi bo'yicha ¦ By type", icon: '🧩', points: ["Рисунки, музыка, документы ¦ Rasmlar, musiqa, hujjatlar ¦ Pictures, music, documents", "Подходит для любого компьютера ¦ Har qanday kompyuterga mos ¦ Works on any computer"] },
      right: { label: "По теме ¦ Mavzu bo'yicha ¦ By topic", icon: '🏷️', points: ["Школа, каникулы, день рождения ¦ Maktab, ta'til, tug'ilgan kun ¦ School, holidays, birthday", "В одной папке и фото, и тексты ¦ Bitta papkada ham surat, ham matn ¦ Photos and texts in one folder"] },
      verdict: "Главное — одно понятное правило для всех файлов. ¦ Asosiysi — barcha fayllar uchun bitta tushunarli qoida. ¦ What matters is one clear rule for every file.",
      notes: { min: 6 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: проверь правило на новом файле ¦ O'zing bajar: qoidani yangi faylda tekshir ¦ Your turn: test the rule on a new file",
      chat: "номер ответа в чат ¦ javob raqamini chatga ¦ answer number in the chat",
      goal: "Твой рабочий стол в порядке! ¦ Ish stoling tartibda! ¦ Your desktop is tidy!",
      items: [
        { title: "Новый файл: «дельфин.jpg» ¦ Yangi fayl: «delfin.jpg» ¦ New file: “dolphin.jpg”", choices: ["🖼️ Рисунки ¦ 🖼️ Rasmlar ¦ 🖼️ Pictures", "🎵 Музыка ¦ 🎵 Musiqa ¦ 🎵 Music"], correct: 0, explain: ".jpg — это картинка. ¦ .jpg — bu rasm. ¦ .jpg is a picture." },
        { title: "Новый файл: «колыбельная.mp3» ¦ Yangi fayl: «alla.mp3» ¦ New file: “lullaby.mp3”", choices: ["📄 Документы ¦ 📄 Hujjatlar ¦ 📄 Documents", "🎵 Музыка ¦ 🎵 Musiqa ¦ 🎵 Music"], correct: 1, explain: ".mp3 — это звук. ¦ .mp3 — bu tovush. ¦ .mp3 is sound." },
        { title: "Какое имя файла понятнее? ¦ Qaysi fayl nomi tushunarliroq? ¦ Which file name is clearer?", choices: ["«123.png» ¦ «123.png» ¦ “123.png”", "«мой-кот-2026.png» ¦ «mening-mushugim-2026.png» ¦ “my-cat-2026.png”"], correct: 1, explain: "По имени сразу ясно, что внутри. ¦ Ichida nima borligi nomidan darhol tushunarli. ¦ The name tells you what's inside." },
      ],
      notes: { min: 6 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: у каждого файла свой дом ¦ Xulosa: har bir faylning o'z uyi bor ¦ Wrap-up: every file has a home",
      chat: "сколько папок ты сделал? число ¦ nechta papka qilding? son ¦ how many folders did you make? a number",
      answer: "Файлы в куче искать долго. Папки — это коробки с понятными названиями. Выбираем одно правило: по типу (рисунки, музыка, документы) или по теме — и проверяем его на новом файле. Понятное имя файла тоже помогает. ¦ Uyumdagi fayllarni qidirish uzoq. Papkalar — tushunarli nomli qutilar. Bitta qoidani tanlaymiz: turi bo'yicha (rasmlar, musiqa, hujjatlar) yoki mavzu bo'yicha — va uni yangi faylda tekshiramiz. Tushunarli fayl nomi ham yordam beradi. ¦ Files in a heap take ages to find. Folders are boxes with clear names. Pick one rule — by type (pictures, music, documents) or by topic — and test it on a new file. A clear file name helps too.",
      icon: '📁',
      badge: "Мастер порядка ¦ Tartib ustasi ¦ Master of order",
      badgeSub: kick('comp', 't', 2),
      homeworkTitle: HOME,
      homework: [
        "Нарисуй 4 папки и разложи по ним 12 своих вещей с полки. ¦ 4 ta papka chiz va javondagi 12 ta narsangni ularga joylashtir. ¦ Draw 4 folders and sort 12 things from your shelf into them.",
        "Нужны: бумага и карандаш. ¦ Kerak: qog'oz va qalam. ¦ You need: paper and a pencil.",
      ],
      notes: { min: 3 },
    },
  ],
});
