import { kit } from '@engine/kit';
import { HOME, ROUTE, kick, tri } from './_kids';

const CSS = `.wrap{display:flex;gap:22px;align-items:center;justify-content:center;height:100%;font-family:Inter,system-ui,sans-serif}
.ph{width:250px;border-radius:18px;background:#fff;box-shadow:0 8px 22px #0002;overflow:hidden}
.ph .img{height:170px;display:grid;place-items:center;font-size:72px;position:relative;background:#dff3ff}
.ph .img em{position:absolute;font-style:normal;font-size:20px;font-weight:800;padding:4px 10px;border-radius:8px;background:#fff;color:#16181f}
.ph .img em.hot{background:#d80000;color:#fff;box-shadow:0 0 0 4px #ffd0d0}
.ph p{margin:0;padding:12px 14px;font-size:18px;font-weight:600;line-height:1.3;min-height:72px}
.ph p b{color:#d80000}
.n{font-size:20px;font-weight:800;color:#6b7280;padding:10px 14px 0}`;
type Lang = 'ru' | 'uz' | 'en';
const T: Record<Lang, string[]> = {
  ru: ['Первый день в новой форме!', 'Мой дом — лучший 🏡', 'Уезжаем на дачу на всю неделю!', 'Фото 1', 'Фото 2', 'Фото 3'],
  uz: ['Yangi formada birinchi kun!', 'Mening uyim — eng zo\'ri 🏡', "Butun hafta dachaga ketyapmiz!", '1-surat', '2-surat', '3-surat'],
  en: ['First day in my new uniform!', 'My house is the best 🏡', 'Off to the country for the whole week!', 'Photo 1', 'Photo 2', 'Photo 3'],
};
const photos = (hot: number[]) =>
  tri((l) => {
    const t = T[l as Lang];
    const card = (i: number, icon: string, badge: string, text: string) =>
      `<div class="ph"><div class="n">${t[3 + i]}</div><div class="img">${icon}<em class="${hot.includes(i) ? 'hot' : ''}" style="${i === 0 ? 'left:14px;bottom:14px' : i === 1 ? 'right:14px;top:14px' : 'left:14px;top:14px'}">${badge}</em></div><p>${hot.includes(i) && i === 2 ? text.replace(/(.+)/, '<b>$1</b>') : text}</p></div>`;
    return `<div class="wrap">${card(0, '🧒', l === 'en' ? 'School 25' : l === 'uz' ? '25-maktab' : 'Школа 25', t[0])}${card(1, '🏠', 'Nº 14', t[1])}${card(2, '🧳', l === 'en' ? 'Mon–Sun' : l === 'uz' ? 'Du–Ya' : 'Пн–Вс', t[2])}</div>`;
  });

export default kit({
  id: 'kids-t05',
  title: "Детектив по фотографиям: что можно узнать о человеке ¦ Fotosuratlar bo'yicha detektiv: odam haqida nimani bilish mumkin ¦ Photo detective: what a photo tells about a person",
  question: "Что расскажут о тебе три обычных фото? ¦ Uchta oddiy surat sen haqingda nima aytib beradi? ¦ What can three ordinary photos reveal about you?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🕵️',
      kicker: kick('cyber', 't', 1),
      title: "Цифровой след ¦ Raqamli iz ¦ Your digital footprint",
      chat: "что можно рассказать всем? одно слово ¦ hammaga nimani aytsa bo'ladi? bitta so'z ¦ what's fine to tell everyone? one word",
      lead: "Всё, что выкладывают в интернет, оставляет след. Сегодня мы детективы: изучим фото выдуманного героя Тимура и найдём подсказки, которые лучше было скрыть. ¦ Internetga joylangan hamma narsa iz qoldiradi. Bugun biz detektivmiz: to'qima qahramon Temurning suratlarini o'rganamiz va yashirgan ma'qul bo'lgan belgilarni topamiz. ¦ Everything posted online leaves a trace. Today we're detectives: we'll study photos of a made-up hero, Timur, and find clues he'd better have hidden.",
      facts: [
        "Повторяем уроки 3–4: открытое и личное ¦ 3–4-darslarni takrorlaymiz: ochiq va shaxsiy ¦ We revise lessons 3–4: public vs personal",
        "Тимур выдуманный — свои фото не показываем ¦ Temur to'qima — o'z suratlarimizni ko'rsatmaymiz ¦ Timur isn't real — we don't share our own photos",
      ],
      notes: { say: ['Реальные фото и адреса детей не используем и не просим.'], min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Три фото Тимура ¦ Temurning uchta surati ¦ Timur's three photos",
      chat: "номер самой опасной детали ¦ eng xavfli detal raqami ¦ the number of the riskiest clue",
      lang: 'text',
      css: CSS,
      steps: [
        { code: 'photos: 3', html: photos([]), say: "Обычные фото, правда? Посмотри внимательно на надписи и подписи. ¦ Oddiy suratlar, to'g'rimi? Yozuvlar va izohlarga diqqat bilan qara. ¦ Ordinary photos, right? Look closely at the signs and captions." },
        { code: 'clue 1', html: photos([0]), say: "Фото 1: номер школы на форме — ясно, где Тимур бывает каждый день. ¦ 1-surat: formadagi maktab raqami — Temur har kuni qayerda bo'lishi ma'lum. ¦ Photo 1: the school number on the uniform — now everyone knows where Timur is each day." },
        { code: 'clue 2', html: photos([0, 1]), say: "Фото 2: номер дома — можно узнать адрес. ¦ 2-surat: uy raqami — manzilni bilib olish mumkin. ¦ Photo 2: the house number — someone could find the address." },
        { code: 'clue 3', html: photos([0, 1, 2]), say: "Фото 3: «уезжаем на неделю» — все знают, что дома никого нет. ¦ 3-surat: «bir haftaga ketyapmiz» — hamma uyda hech kim yo'qligini biladi. ¦ Photo 3: “away all week” — everyone knows nobody's home." },
      ],
      notes: { min: 8 },
    },
    {
      type: 'sort',
      stage: 2,
      title: "Можно показать или лучше скрыть? ¦ Ko'rsatsa bo'ladimi yoki yashirgan ma'qulmi? ¦ OK to show or better to hide?",
      chat: "пиши: «1 — скрыть» ¦ yoz: «1 — yashirish» ¦ write: “1 — hide”",
      zones: [
        { id: 'ok', label: "Можно показать ¦ Ko'rsatsa bo'ladi ¦ OK to show", icon: '👍' },
        { id: 'hide', label: "Лучше скрыть ¦ Yashirgan ma'qul ¦ Better hidden", icon: '🙈' },
      ],
      items: [
        { text: "Рисунок кота, который ты нарисовал ¦ O'zing chizgan mushuk rasmi ¦ A cat you drew", zone: 'ok' },
        { text: "Номер дома и улица ¦ Uy raqami va ko'cha ¦ Your house number and street", zone: 'hide' },
        { text: "«Мы уехали на неделю» ¦ «Bir haftaga ketdik» ¦ “We're away all week”", zone: 'hide' },
        { text: "Поделка из пластилина ¦ Plastilindan buyum ¦ A clay model you made", zone: 'ok' },
        { text: "Номер школы на форме ¦ Formadagi maktab raqami ¦ The school number on your uniform", zone: 'hide' },
      ],
      notes: { min: 8 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: как исправить фото? ¦ O'zing bajar: suratni qanday tuzatish mumkin? ¦ Your turn: how do you fix the photo?",
      chat: "номер ответа в чат ¦ javob raqamini chatga ¦ answer number in the chat",
      goal: "Ты защищаешь свою приватность! ¦ Sen shaxsiy hayotingni himoya qilasan! ¦ You protect your privacy!",
      items: [
        { title: "На фото виден номер дома ¦ Suratda uy raqami ko'rinadi ¦ The house number is visible", choices: ["Выбрать другое фото или закрыть номер ¦ Boshqa surat tanlash yoki raqamni yopish ¦ Pick another photo or cover the number", "Оставить как есть ¦ O'zgarishsiz qoldirish ¦ Leave it as it is"], correct: 0, explain: "Адрес — личная информация. ¦ Manzil — shaxsiy ma'lumot. ¦ An address is personal information." },
        { title: "Когда рассказать про поездку? ¦ Safar haqida qachon aytish kerak? ¦ When should you post about a trip?", choices: ["После возвращения ¦ Qaytgandan keyin ¦ After you're back", "Перед отъездом всем ¦ Ketishdan oldin hammaga ¦ Before leaving, to everyone"], correct: 0, explain: "Так никто не узнает, что дом пустой. ¦ Shunda uy bo'shligini hech kim bilmaydi. ¦ Then nobody knows the house is empty." },
        { title: "С кем посоветоваться перед публикацией? ¦ Joylashdan oldin kim bilan maslahatlashish kerak? ¦ Who should you ask before posting?", choices: ["Со взрослым ¦ Kattalar bilan ¦ A grown-up", "Ни с кем ¦ Hech kim bilan ¦ Nobody"], correct: 0, explain: "Взрослый заметит то, что ты пропустил. ¦ Katta odam sen o'tkazib yuborganni payqaydi. ¦ A grown-up spots what you missed." },
      ],
      notes: { min: 8 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: смотри на фото глазами детектива ¦ Xulosa: suratga detektiv ko'zi bilan qara ¦ Wrap-up: see photos like a detective",
      chat: "какую деталь ты теперь будешь проверять? ¦ endi qaysi detalni tekshirasan? ¦ which clue will you check from now on?",
      answer: "Даже обычное фото может рассказать, где ты учишься, где живёшь и когда дома никого нет. Перед публикацией проверяем надписи, номера и подписи, а о поездках рассказываем после возвращения. Если сомневаешься — спроси взрослого. ¦ Hatto oddiy surat ham qayerda o'qishing, qayerda yashashing va uyda qachon hech kim bo'lmasligini aytib berishi mumkin. Joylashdan oldin yozuvlar, raqamlar va izohlarni tekshiramiz, safar haqida esa qaytgandan keyin aytamiz. Shubha bo'lsa — kattalardan so'ra. ¦ Even an ordinary photo can show where you study, where you live and when nobody's home. Before posting, check signs, numbers and captions, and share trips after you're back. Not sure? Ask a grown-up.",
      icon: '🕵️',
      badge: "Детектив приватности ¦ Maxfiylik detektivi ¦ Privacy detective",
      badgeSub: kick('cyber', 't', 1),
      homeworkTitle: HOME,
      homework: [
        "Придумай подпись к фото рисунка, в которой нет ни одной личной детали. ¦ Rasm surati uchun bitta ham shaxsiy detal bo'lmagan izoh o'ylab top. ¦ Write a caption for a photo of your drawing with no personal details.",
        "Нужны: бумага и карандаш. ¦ Kerak: qog'oz va qalam. ¦ You need: paper and a pencil.",
      ],
      notes: { min: 3 },
    },
  ],
});
