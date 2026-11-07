import { kit } from '@engine/kit';
import { HOME, ROUTE, kick, tri } from './_kids';

const CSS = `.wrap{display:grid;place-items:center;height:100%;font-family:Inter,system-ui,sans-serif;color:#16181f}
.t{display:grid;grid-auto-flow:column;grid-template-rows:auto auto;gap:6px 6px}
.t b,.t i{display:grid;place-items:center;width:54px;height:54px;border-radius:10px;font:800 28px Inter,system-ui;font-style:normal}
.t b{background:#fff;border:3px solid #e1e4ea}.t i{background:#fff1ec;border:3px solid #fa4f28;color:#d53a17}
.w{display:flex;gap:10px;margin-top:22px;justify-content:center}
.w span{display:grid;place-items:center;width:70px;height:78px;border-radius:14px;background:#16181f;color:#fff;font:800 40px 'JetBrains Mono',monospace}
.w span.ok{background:#0cd678}
.lbl{font:700 22px Inter;margin-top:12px;text-align:center;color:#6b7280}`;
// shift alphabets
const AB: Record<string, string> = { ru: 'АБВГДЕЖЗИЙКЛМНОПРСТУ', uz: 'ABCDEFGHIJKLMNOPQRSTU', en: 'ABCDEFGHIJKLMNOPQRSTU' };
const WORD: Record<string, [string, string]> = { ru: ['ЛПУ', 'КОТ'], uz: ['LJUPC', 'KITOB'], en: ['DBU', 'CAT'] };
const table = (l: string) => {
  const a = AB[l];
  return a.slice(0, a.length - 1).split('').map((c, i) => `<b>${c}</b><i>${a[i + 1]}</i>`).join('');
};
const step = (solved: number) =>
  tri((l) => {
    const [enc, dec] = WORD[l];
    const cap = l === 'ru' ? 'верх → низ: шифруем (+1) · низ → верх: расшифровываем' : l === 'uz' ? 'yuqori → past: shifrlaymiz (+1) · past → yuqori: ochamiz' : 'top → bottom: encode (+1) · bottom → top: decode';
    return `<div class="wrap"><div><div class="t">${table(l)}</div><div class="lbl">${cap}</div><div class="w">${enc
      .split('')
      .map((c, i) => `<span class="${i < solved ? 'ok' : ''}">${i < solved ? dec[i] : c}</span>`)
      .join('')}</div></div></div>`;
  });

export default kit({
  id: 'kids-g05',
  title: "Секретные шифры: как спрятать послание ¦ Maxfiy shifrlar: xabarni qanday yashirish mumkin ¦ Secret ciphers: how to hide a message",
  question: "Как написать записку, которую прочитает только друг? ¦ Faqat do'sting o'qiy oladigan xatni qanday yozish mumkin? ¦ How do you write a note only your friend can read?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🔐',
      kicker: kick('cyber', 'g', 1),
      title: "Школа шпионов открыта ¦ Josuslar maktabi ochildi ¦ Spy school is open",
      chat: "придумай себе шпионское имя одним словом ¦ o'zingga bitta so'zli josus ismini o'ylab top ¦ make up a one-word spy name",
      lead: "Шифр — это правило, по которому буквы превращаются в загадку. Кто знает правило, тот прочитает послание. Так прятали письма полководцы 2000 лет назад — и так защищают сообщения в телефоне сегодня. ¦ Shifr — harflarni topishmoqqa aylantiradigan qoida. Qoidani bilgan odam xabarni o'qiy oladi. 2000 yil oldin sarkardalar xatlarni shunday yashirgan — bugun telefondagi xabarlar ham shunday himoyalanadi. ¦ A cipher is a rule that turns letters into a puzzle. Whoever knows the rule can read the message. Generals hid letters this way 2,000 years ago — and phones protect messages like this today.",
      facts: [
        "Шифр со сдвигом придумали очень давно ¦ Siljitish shifri juda qadim o'ylab topilgan ¦ The shift cipher is very old",
        "Главное — договориться о правиле ¦ Asosiysi — qoida haqida kelishib olish ¦ The key is agreeing on the rule",
      ],
      notes: { say: ['Шифр со сдвигом часто называют шифром Цезаря.'], min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Каждая буква сдвинута на одну вперёд ¦ Har bir harf bittaga oldinga surilgan ¦ Every letter moved one step forward",
      chat: "какое слово спрятано? ¦ qaysi so'z yashiringan? ¦ which word is hidden?",
      lang: 'text',
      css: CSS,
      steps: [
        { code: 'shift +1', html: step(0), say: "Зашифрованное слово внизу. Найди каждую букву в нижнем ряду и посмотри, что над ней. ¦ Shifrlangan so'z pastda. Har bir harfni pastki qatordan top va ustida nima borligiga qara. ¦ The coded word is below. Find each letter in the bottom row and look above it." },
        { code: 'decode 1…', html: step(1), say: "Первая буква найдена! ¦ Birinchi harf topildi! ¦ The first letter is found!" },
        { code: 'decode ✓', html: step(9), say: "Слово расшифровано! Пиши его в чат. ¦ So'z ochildi! Uni chatga yoz. ¦ The word is decoded! Write it in the chat." },
      ],
      notes: { min: 6 },
    },
    {
      type: 'cards',
      stage: 2,
      title: "Шифр-картинка ¦ Rasmli shifr ¦ A picture cipher",
      chat: "расшифруй: ☀️🌊 — что это? ¦ och: ☀️🌊 — bu nima? ¦ decode: ☀️🌊 — what is it?",
      cards: [
        { icon: '☀️', front: "☀️ = день ¦ ☀️ = kun ¦ ☀️ = day", back: "Солнце — значит днём ¦ Quyosh — demak kunduzi ¦ The sun means daytime" },
        { icon: '🌊', front: "🌊 = речка ¦ 🌊 = daryo ¦ 🌊 = the river", back: "Встреча у речки ¦ Daryo bo'yida uchrashuv ¦ Meet at the river" },
        { icon: '🌳', front: "🌳 = парк ¦ 🌳 = bog' ¦ 🌳 = the park", back: "Встреча в парке ¦ Bog'da uchrashuv ¦ Meet in the park" },
        { icon: '🌙', front: "🌙 = вечер ¦ 🌙 = kech ¦ 🌙 = evening", back: "Луна — значит вечером ¦ Oy — demak kechqurun ¦ The moon means evening" },
      ],
      takeaway: "☀️🌊 — «днём у речки». Картинки — тоже шифр, если знаешь правило. ¦ ☀️🌊 — «kunduzi daryo bo'yida». Rasmlar ham shifr, agar qoidani bilsang. ¦ ☀️🌊 means “by the river in the daytime”. Pictures are a cipher too, if you know the rule.",
      notes: { min: 7 },
    },
    {
      type: 'truefalse',
      stage: 2,
      title: "Правда или нет? ¦ Rostmi yoki yo'q? ¦ True or not?",
      chat: "пиши «правда» или «нет» ¦ «rost» yoki «yo'q» deb yoz ¦ write “true” or “no”",
      statements: [
        { text: "Без правила шифр трудно прочитать ¦ Qoidasiz shifrni o'qish qiyin ¦ Without the rule a cipher is hard to read", truth: true, explain: "Поэтому правило держат в секрете. ¦ Shuning uchun qoida sir saqlanadi. ¦ That's why the rule is kept secret." },
        { text: "Сдвиг можно сделать и на 2, и на 3 буквы ¦ Siljitishni 2 yoki 3 harfga ham qilish mumkin ¦ You can shift by 2 or 3 letters too", truth: true, explain: "Главное, чтобы друг знал число. ¦ Asosiysi, do'sting sonni bilsin. ¦ Your friend just needs the number." },
        { text: "Шифры нужны только шпионам ¦ Shifrlar faqat josuslarga kerak ¦ Only spies need ciphers", truth: false, explain: "Телефон шифрует твои сообщения каждый день. ¦ Telefon har kuni xabarlaringni shifrlaydi. ¦ Your phone encrypts your messages every day." },
      ],
      notes: { min: 5 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: зашифруй сдвигом +1 ¦ O'zing bajar: +1 siljitish bilan shifrla ¦ Your turn: encode with shift +1",
      chat: "загадай чату своё зашифрованное слово ¦ chatga shifrlangan so'zingni top deb ber ¦ post your own coded word for the chat",
      goal: "Ты умеешь прятать послания! ¦ Sen xabarlarni yashira olasan! ¦ You can hide messages!",
      items: [
        { title: "Зашифруй: ДА ¦ Shifrla: HA ¦ Encode: YES", choices: ["ЕБ ¦ IB ¦ ZFT", "ГЯ ¦ GZ ¦ XDR"], correct: 0, explain: "Каждая буква — на одну дальше. ¦ Har bir harf — bittaga keyin. ¦ Each letter moves one step on." },
        { title: "Расшифруй: НБНБ ¦ Och: POB ¦ Decode: NPN", choices: ["МАМА ¦ ONA ¦ MOM", "ПАПА ¦ OTA ¦ DAD"], correct: 0, explain: "Каждую букву сдвигаем на одну назад. ¦ Har bir harfni bittaga orqaga suramiz. ¦ Move each letter one step back." },
      ],
      notes: { say: ['Ответы: ЕБ / IB / ZFT и МАМА / ONA / MOM. Каждый ребёнок шифрует своё слово и загадывает его чату.'], min: 6 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: шифр = правило ¦ Xulosa: shifr = qoida ¦ Wrap-up: a cipher is a rule",
      chat: "какое слово ты зашифровал? ¦ qaysi so'zni shifrlading? ¦ which word did you encode?",
      answer: "Шифр — правило, которое превращает буквы в загадку. В шифре со сдвигом каждая буква заменяется соседней. В шифре-картинке значки заменяют слова. Кто знает правило — читает послание, кто не знает — видит путаницу. ¦ Shifr — harflarni topishmoqqa aylantiradigan qoida. Siljitish shifrida har bir harf qo'shnisiga almashtiriladi. Rasmli shifrda belgilar so'zlar o'rnini bosadi. Qoidani bilgan xabarni o'qiydi, bilmagan esa chalkashlikni ko'radi. ¦ A cipher is a rule that turns letters into a puzzle. In a shift cipher each letter is swapped for its neighbour. In a picture cipher symbols stand for words. Whoever knows the rule reads the message; everyone else sees a muddle.",
      icon: '🕵️',
      badge: "Юный шифровальщик ¦ Yosh shifrlovchi ¦ Young code-maker",
      badgeSub: kick('cyber', 'g', 1),
      homeworkTitle: HOME,
      homework: [
        "Придумай свой шифр-картинку из 5 значков и отправь записку другу или родным. ¦ 5 ta belgidan o'z rasmli shifringni o'ylab top va do'stingga yoki yaqinlaringga xat yubor. ¦ Invent a 5-symbol picture cipher and send a note to a friend or family.",
        "Нужны: бумага и карандаш. ¦ Kerak: qog'oz va qalam. ¦ You need: paper and a pencil.",
      ],
      notes: { min: 3 },
    },
  ],
});
