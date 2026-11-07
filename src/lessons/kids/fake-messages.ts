import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

export default kit({
  id: 'kids-t07',
  title: "Найди подвох: детектив поддельных сообщений ¦ Hiylani top: soxta xabarlar detektivi ¦ Find the trick: fake-message detective",
  question: "Как отличить настоящее сообщение от ловушки? ¦ Haqiqiy xabarni tuzoqdan qanday farqlash mumkin? ¦ How do you tell a real message from a trap?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🧀',
      kicker: kick('cyber', 't', 3),
      title: "Бесплатный сыр ¦ Tekin pishloq ¦ Free cheese",
      chat: "тебе обещали в интернете приз? 🎁 или 🙅 ¦ internetda senga sovrin va'da qilishganmi? 🎁 yoki 🙅 ¦ has anyone online promised you a prize? 🎁 or 🙅",
      lead: "Есть поговорка: бесплатный сыр бывает только в мышеловке. Обманщики пишут о призах и подарках, чтобы ты перешёл по ссылке или отдал пароль. Сегодня мы ищем улики в шести учебных сообщениях. ¦ Maqol bor: tekin pishloq faqat qopqonda bo'ladi. Firibgarlar havolaga o'tishing yoki parolni berishing uchun sovrin va sovg'alar haqida yozadi. Bugun oltita o'quv xabaridan dalil qidiramiz. ¦ There's a saying: free cheese is only found in a mousetrap. Tricksters write about prizes so you click a link or give away a password. Today we look for clues in six practice messages.",
      facts: [
        "Повторяем уроки 16–17 ¦ 16–17-darslarni takrorlaymiz ¦ We revise lessons 16–17",
        "Все ссылки на слайдах ненастоящие ¦ Slayddagi barcha havolalar soxta ¦ All links on the slides are fake",
      ],
      notes: { say: ['Ссылки на слайдах неактивны. Дети ничего не открывают.'], min: 3 },
    },
    {
      type: 'poll',
      stage: 1,
      title: "«🎉 Ты выиграл iPhone! Нажми ссылку за 10 минут!» Что это? ¦ «🎉 Sen iPhone yutding! 10 daqiqada havolani bos!» Bu nima? ¦ “🎉 You won an iPhone! Click the link within 10 minutes!” What is it?",
      chat: "пиши номер ¦ raqamini yoz ¦ write the number",
      options: [
        { label: "1 · Удача, надо нажать! ¦ 1 · Omad, bosish kerak! ¦ 1 · Lucky me, click it!" },
        { label: "2 · Ловушка ¦ 2 · Tuzoq ¦ 2 · A trap" },
      ],
      correct: 1,
      result: "Ловушка! Ты ни в чём не участвовал, а тебя торопят. Это две главные улики. ¦ Tuzoq! Sen hech narsada qatnashmagansan, seni esa shoshiltirishyapti. Bu ikki asosiy dalil. ¦ A trap! You never entered anything, and they're rushing you. Those are the two main clues.",
      notes: { min: 5 },
    },
    {
      type: 'cards',
      stage: 2,
      title: "Четыре улики обманщика ¦ Firibgarning to'rtta dalili ¦ Four trickster clues",
      chat: "какую улику ты заметишь первой? ¦ qaysi dalilni birinchi payqaysan? ¦ which clue would you spot first?",
      cards: [
        { icon: '🎁', front: "Приз ни за что ¦ Hech narsasiz sovrin ¦ A prize for nothing", back: "Ты не участвовал в конкурсе ¦ Sen tanlovda qatnashmagansan ¦ You never entered a contest" },
        { icon: '⏰', front: "Торопят ¦ Shoshiltirishadi ¦ They rush you", back: "«Только 10 минут!» — чтобы ты не думал ¦ «Faqat 10 daqiqa!» — o'ylamasliging uchun ¦ “Only 10 minutes!” so you don't think" },
        { icon: '🔑', front: "Просят пароль или код ¦ Parol yoki kod so'rashadi ¦ They ask for a password or code", back: "Настоящие сервисы так не делают ¦ Haqiqiy xizmatlar bunday qilmaydi ¦ Real services never do that" },
        { icon: '🔤', front: "Странный адрес ¦ G'alati manzil ¦ A strange address", back: "«g00gle-prize.xyz» вместо настоящего ¦ Haqiqiysi o'rniga «g00gle-prize.xyz» ¦ “g00gle-prize.xyz” instead of the real one" },
      ],
      notes: { min: 5 },
    },
    {
      type: 'sort',
      stage: 2,
      title: "Шесть сообщений: обычное или подозрительное? ¦ Oltita xabar: oddiymi yoki shubhalimi? ¦ Six messages: normal or suspicious?",
      chat: "пиши: «3 — подвох: торопят» ¦ yoz: «3 — hiyla: shoshiltirishyapti» ¦ write: “3 — trick: rushing me”",
      zones: [
        { id: 'ok', label: "Обычное ¦ Oddiy ¦ Normal", icon: '✅' },
        { id: 'sus', label: "Подозрительное ¦ Shubhali ¦ Suspicious", icon: '🚩' },
      ],
      items: [
        { text: "1 · Мама: «Купи хлеб по дороге» ¦ 1 · Onam: «Yo'lda non olib kel» ¦ 1 · Mum: “Grab some bread on the way”", zone: 'ok' },
        { text: "2 · «Ты выиграл 1000 монет! Введи пароль» ¦ 2 · «1000 tanga yutding! Parolni kirit» ¦ 2 · “You won 1,000 coins! Enter your password”", zone: 'sus' },
        { text: "3 · «Срочно! Аккаунт удалят через час» ¦ 3 · «Shoshilinch! Akkaunt bir soatda o'chiriladi» ¦ 3 · “Urgent! Your account will be deleted in an hour”", zone: 'sus' },
        { text: "4 · Учитель: «Завтра урок в 9:00» ¦ 4 · O'qituvchi: «Ertaga dars 9:00 da» ¦ 4 · Teacher: “Class tomorrow at 9:00”", zone: 'ok' },
        { text: "5 · «Бесплатные скины тут: sk1ns-free.xyz» ¦ 5 · «Bepul skinlar shu yerda: sk1ns-free.xyz» ¦ 5 · “Free skins here: sk1ns-free.xyz”", zone: 'sus' },
        { text: "6 · «Пришли код из СМС, это ошибка» ¦ 6 · «SMS'dagi kodni yubor, bu xato» ¦ 6 · “Send me the code from the text, it was a mistake”", zone: 'sus' },
      ],
      notes: { min: 6 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: что делаем с подвохом? ¦ O'zing bajar: hiyla bilan nima qilamiz? ¦ Your turn: what do we do with a trick?",
      chat: "номер ответа в чат ¦ javob raqamini chatga ¦ answer number in the chat",
      goal: "Тебя не поймать на бесплатный сыр! ¦ Seni tekin pishloq bilan tutib bo'lmaydi! ¦ You won't fall for free cheese!",
      items: [
        { title: "Пришло подозрительное сообщение ¦ Shubhali xabar keldi ¦ A suspicious message arrives", choices: ["Не открываю ссылку и показываю взрослому ¦ Havolani ochmayman va kattaga ko'rsataman ¦ Don't open the link, show a grown-up", "Пересылаю друзьям ¦ Do'stlarimga uzataman ¦ Forward it to friends"], correct: 0, explain: "Так ловушка не сработает ни на ком. ¦ Shunda tuzoq hech kimga ishlamaydi. ¦ Then the trap works on nobody." },
        { title: "Какая улика в сообщении 6? ¦ 6-xabardagi dalil qaysi? ¦ What's the clue in message 6?", choices: ["Просят секретный код ¦ Maxfiy kodni so'rashyapti ¦ They ask for a secret code", "В нём есть смайлик ¦ Unda smaylik bor ¦ It has an emoji"], correct: 0, explain: "Код из СМС никому не отдаём. ¦ SMS kodini hech kimga bermaymiz. ¦ Never share a code from a text." },
      ],
      notes: { min: 8 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: стоп, улика, взрослый ¦ Xulosa: to'xta, dalil, katta ¦ Wrap-up: stop, clue, grown-up",
      chat: "какая улика самая коварная? одно слово ¦ qaysi dalil eng makkor? bitta so'z ¦ which clue is sneakiest? one word",
      answer: "Обманщики обещают призы и подарки, торопят, просят пароль или код и присылают ссылки со странными адресами. Если видишь хотя бы одну улику — не открываем ссылку, ничего не отправляем и показываем сообщение взрослому. ¦ Firibgarlar sovrin va sovg'a va'da qiladi, shoshiltiradi, parol yoki kod so'raydi va g'alati manzilli havolalar yuboradi. Hech bo'lmasa bitta dalilni ko'rsang — havolani ochmaymiz, hech narsa yubormaymiz va xabarni kattaga ko'rsatamiz. ¦ Tricksters promise prizes, rush you, ask for passwords or codes and send links with strange addresses. If you see even one clue: don't open the link, don't send anything, and show the message to a grown-up.",
      icon: '🚩',
      badge: "Детектив сообщений ¦ Xabar detektivi ¦ Message detective",
      badgeSub: kick('cyber', 't', 3),
      homeworkTitle: HOME,
      homework: [
        "Нарисуй «плакат-предупреждение» с четырьмя уликами и повесь дома. ¦ To'rtta dalilli «ogohlantirish plakati» chiz va uyga osib qo'y. ¦ Draw a warning poster with the four clues and hang it at home.",
        "Нужны: бумага и карандаш. ¦ Kerak: qog'oz va qalam. ¦ You need: paper and a pencil.",
      ],
      notes: { min: 3 },
    },
  ],
});
