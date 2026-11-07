import { kit } from '@engine/kit';
import { HOME, KCSS, ROUTE, rkick } from './_kids';

/* A tiny drawing: 5×5 squares; an erased stroke and Ctrl+Z bringing it back */
const CSS = `${KCSS}
.pic{display:grid;grid-template-columns:repeat(5,56px);gap:4px}
.pic i{width:56px;height:56px;border-radius:8px;background:#f1f2f5}
.pic i.on{background:#5b6ef5}
.pic i.gone{background:#ffd9cc;outline:3px dashed #fa4f28;outline-offset:-3px}
.keys{margin-top:20px;display:flex;gap:10px;justify-content:center}
.keys b{padding:10px 18px;border-radius:12px;background:#16181f;color:#fff;font:800 24px 'JetBrains Mono',monospace;box-shadow:inset 0 -4px 0 #000}`;
const HOUSE = ['..#..', '.###.', '#####', '#...#', '#####'];
const LINE = ['2,0', '2,1', '2,2', '2,3', '2,4'];
const pic = (erased: boolean, keys = '') =>
  `<div class="wrap"><div><div class="pic">${HOUSE.map((r, y) =>
    r
      .split('')
      .map((c, x) => {
        const k = `${y},${x}`;
        const cls = c === '#' ? (erased && LINE.includes(k) ? 'gone' : 'on') : '';
        return `<i class="${cls}"></i>`;
      })
      .join(''),
  ).join('')}</div>${keys ? `<div class="keys">${keys}</div>` : ''}</div></div>`;

export default kit({
  id: 'kids-t26',
  title: "Можно ли отменить? ¦ Bekor qilsa bo'ladimi? ¦ Can you undo it?",
  question: "Что на компьютере можно вернуть, а что — нет? ¦ Kompyuterda nimani qaytarish mumkin, nimani — yo'q? ¦ What can you take back on a computer, and what can't you?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '↩️',
      kicker: rkick('comp'),
      title: "Волшебная кнопка «Отменить» ¦ Sehrli «Bekor qilish» tugmasi ¦ The magic Undo button",
      chat: "ты когда-нибудь случайно что-то стирал? «да» или «нет» ¦ biror narsani tasodifan o'chirganmisan? «ha» yoki «yo'q» ¦ have you ever deleted something by accident? “yes” or “no”",
      lead: "В рисунке и в тексте есть «Отменить» — Ctrl+Z. Она возвращает последний шаг. Но не всё в жизни компьютера можно отменить: отправленное сообщение уже у друга. Сегодня учимся думать заранее: «А можно ли будет вернуть?» ¦ Rasm va matnda «Bekor qilish» bor — Ctrl+Z. U oxirgi qadamni qaytaradi. Lekin kompyuterda hamma narsani bekor qilib bo'lmaydi: yuborilgan xabar allaqachon do'stingda. Bugun oldindan o'ylashni o'rganamiz: «Buni qaytarsa bo'ladimi?» ¦ Drawings and text have Undo — Ctrl+Z. It takes back the last step. But not everything on a computer can be undone: a sent message is already with your friend. Today we learn to think ahead: “Could I take this back?”",
      facts: [
        "Повторяем уроки 2 и 21 ¦ 2 va 21-darslarni takrorlaymiz ¦ We revise lessons 2 and 21",
        "Отмену показываем только в рисунке ¦ Bekor qilishni faqat rasmda ko'rsatamiz ¦ We only demo Undo in a drawing",
      ],
      notes: { min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Ой, стёрли линию! ¦ Voy, chiziqni o'chirib qo'ydik! ¦ Oops, we erased a line!",
      chat: "какие клавиши вернут линию? ¦ qaysi tugmalar chiziqni qaytaradi? ¦ which keys bring the line back?",
      lang: 'text',
      css: CSS,
      steps: [
        { code: 'house.png', html: pic(false), say: "Нарисовали домик. ¦ Uycha chizdik. ¦ We drew a little house." },
        { code: '🧽 erase', html: pic(true), say: "Ластик задел линию — пропала полоска под крышей! ¦ O'chirg'ich chiziqqa tegib ketdi — tom ostidagi chiziq yo'qoldi! ¦ The eraser caught a line — the strip under the roof is gone!" },
        { code: 'Ctrl + Z', html: pic(false, '<b>Ctrl</b><b>+</b><b>Z</b>'), say: "Ctrl+Z — и линия вернулась. Отмена возвращает последний шаг. ¦ Ctrl+Z — va chiziq qaytdi. Bekor qilish oxirgi qadamni qaytaradi. ¦ Ctrl+Z — and the line is back. Undo takes back the last step." },
      ],
      notes: { min: 6 },
    },
    {
      type: 'sort',
      stage: 2,
      title: "Можно, не всегда или нужна помощь? ¦ Mumkin, har doim emas yoki yordam kerak? ¦ Yes, not always, or ask for help?",
      chat: "пиши: «2 — не всегда» ¦ yoz: «2 — har doim emas» ¦ write: “2 — not always”",
      zones: [
        { id: 'y', label: "Можно ¦ Mumkin ¦ Yes", icon: '✅' },
        { id: 'n', label: "Не всегда ¦ Har doim emas ¦ Not always", icon: '⚠️' },
        { id: 'h', label: "Нужна помощь взрослого ¦ Kattalar yordami kerak ¦ Ask a grown-up", icon: '🙋' },
      ],
      items: [
        { text: "1 · Стёр линию в рисунке ¦ 1 · Rasmda chiziqni o'chirdim ¦ 1 · Erased a line in a drawing", zone: 'y' },
        { text: "2 · Отправил сообщение не тому человеку ¦ 2 · Xabarni boshqa odamga yuborib qo'ydim ¦ 2 · Sent a message to the wrong person", zone: 'n' },
        { text: "3 · Перенёс файл в корзину ¦ 3 · Faylni savatga o'tkazdim ¦ 3 · Moved a file to the bin", zone: 'h' },
        { text: "4 · Напечатал лишнее слово ¦ 4 · Ortiqcha so'z yozib qo'ydim ¦ 4 · Typed an extra word", zone: 'y' },
        { text: "5 · Выложил фото в общий чат ¦ 5 · Umumiy chatga surat joyladim ¦ 5 · Posted a photo in a group chat", zone: 'n' },
      ],
      notes: { say: ['Сообщение и фото: даже если удалить, их могли уже увидеть или сохранить. Корзину восстанавливаем только вместе со взрослым, сами настройки не трогаем.'], min: 9 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: подумай до клика ¦ O'zing bajar: bosishdan oldin o'yla ¦ Your turn: think before you click",
      chat: "номер ответа в чат ¦ javob raqamini chatga ¦ answer number in the chat",
      goal: "Ты думаешь о последствиях заранее! ¦ Oqibatlar haqida oldindan o'ylaysan! ¦ You think about what happens next!",
      items: [
        { title: "Почему сообщение не всегда можно отменить? ¦ Nega xabarni har doim bekor qilib bo'lmaydi? ¦ Why can't you always undo a message?", choices: ["Его могли уже прочитать ¦ Uni allaqachon o'qib qo'yishgan bo'lishi mumkin ¦ Someone may have read it already", "Потому что Ctrl+Z сломан ¦ Chunki Ctrl+Z buzilgan ¦ Because Ctrl+Z is broken"], correct: 0, explain: "Прочитанное уже не сделаешь непрочитанным. ¦ O'qilganni «o'qilmagan» qilib bo'lmaydi. ¦ You can't “unread” something." },
        { title: "Случайно удалил важный файл. Что делать? ¦ Muhim faylni tasodifan o'chirib qo'ydim. Nima qilish kerak? ¦ You deleted an important file by accident. What now?", choices: ["Сказать взрослому и вместе проверить корзину ¦ Kattalarga aytish va savatni birga tekshirish ¦ Tell a grown-up and check the bin together", "Молчать и нажимать всё подряд ¦ Jim turib, hamma narsani bosaverish ¦ Say nothing and click everything"], correct: 0, explain: "Взрослый поможет и ничего не сломает. ¦ Kattalar yordam beradi va hech narsani buzmaydi. ¦ A grown-up can help without breaking anything." },
      ],
      notes: { min: 7 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: отменить можно не всё ¦ Xulosa: hamma narsani bekor qilib bo'lmaydi ¦ Wrap-up: not everything can be undone",
      chat: "что ты теперь проверишь перед отправкой? ¦ endi yuborishdan oldin nimani tekshirasan? ¦ what will you check before sending now?",
      answer: "Ctrl+Z возвращает последний шаг в рисунке или тексте. Файл из корзины можно восстановить, лучше вместе со взрослым. А отправленное сообщение или фото могли уже увидеть — их не всегда получится вернуть. Поэтому думаем до клика: «А можно ли будет отменить?» ¦ Ctrl+Z rasm yoki matndagi oxirgi qadamni qaytaradi. Savatdagi faylni tiklash mumkin, yaxshisi kattalar bilan. Yuborilgan xabar yoki suratni esa allaqachon ko'rishgan bo'lishi mumkin — ularni har doim ham qaytarib bo'lmaydi. Shuning uchun bosishdan oldin o'ylaymiz: «Buni bekor qilsa bo'ladimi?» ¦ Ctrl+Z takes back the last step in a drawing or text. A file in the bin can be restored, best with a grown-up. But a sent message or photo may already have been seen — you can't always take it back. So we think before we click: “Could I undo this?”",
      icon: '↩️',
      badge: "Мастер отмены ¦ Bekor qilish ustasi ¦ Undo master",
      badgeSub: rkick('comp'),
      homeworkTitle: HOME,
      homework: [
        "Составь с родными список: 3 действия, которые можно отменить, и 3 — которые нельзя (в жизни и на компьютере). ¦ Yaqinlaring bilan ro'yxat tuz: bekor qilsa bo'ladigan 3 ta va bo'lmaydigan 3 ta harakat (hayotda va kompyuterda). ¦ With your family, list 3 things you can undo and 3 you can't (in life and on a computer).",
        "Нужна: бумага. ¦ Kerak: qog'oz. ¦ You need: paper.",
      ],
      notes: { min: 5 },
    },
  ],
});
