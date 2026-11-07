import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

export default kit({
  id: 'kids-g21',
  title: "Угадай звук: что это было? ¦ Tovushni top: bu nima edi? ¦ Guess the sound: what was that?",
  question: "Как в кино делают звук костра без огня? ¦ Kinoda olovsiz gulxan ovozini qanday qilishadi? ¦ How do films make a campfire sound without fire?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '👂',
      kicker: kick('blockly', 'g', 1),
      title: "Включаем уши ¦ Quloqlarni yoqamiz ¦ Ears on",
      chat: "какой звук ты слышишь прямо сейчас? одно слово ¦ hozir qanday tovushni eshityapsan? bitta so'z ¦ what sound can you hear right now? one word",
      lead: "Ведущий включит звуки: шуршание, стук, шипение. На каждый звук бывает несколько версий — и все интересные! Главное — объяснить, почему ты так думаешь. ¦ Boshlovchi tovushlarni qo'yadi: shitirlash, taqillash, vishillash. Har bir tovushga bir nechta taxmin bo'ladi — va hammasi qiziq! Asosiysi — nega shunday deb o'ylayotganingni tushuntirish. ¦ The host will play sounds: rustling, knocking, hissing. Every sound gets several guesses — and they're all interesting! The key is explaining why you think so.",
      facts: [
        "Звуки включает ментор ¦ Tovushlarni mentor qo'yadi ¦ The mentor plays the sounds",
        "Материалы не нужны ¦ Materiallar kerak emas ¦ No materials needed",
      ],
      notes: { say: ['Ментор заранее готовит 3–4 звука и проверяет громкость.'], min: 3 },
    },
    {
      type: 'board',
      stage: 1,
      title: "Звук 1: «шшшш…» — что это? ¦ 1-tovush: «shshsh…» — bu nima? ¦ Sound 1: “shhhh…” — what is it?",
      chat: "пиши свою версию одним словом ¦ taxminingni bitta so'z bilan yoz ¦ write your guess in one word",
      seeds: ["чайник ¦ choynak ¦ a kettle", "змея ¦ ilon ¦ a snake", "дождь ¦ yomg'ir ¦ rain"],
      placeholder: "Твоя версия ¦ Sening taxmining ¦ Your guess",
      footer: "Все версии подходят, если ты можешь объяснить почему. ¦ Nega ekanini tushuntira olsang, barcha taxminlar mos. ¦ Any guess works if you can explain why.",
      notes: { min: 6 },
    },
    {
      type: 'cards',
      stage: 2,
      title: "Секреты звукорежиссёров кино ¦ Kino ovoz rejissyorlarining sirlari ¦ Film sound-makers' secrets",
      chat: "какой секрет удивил тебя больше всего? номер ¦ qaysi sir seni ko'proq hayron qoldirdi? raqam ¦ which secret surprised you most? a number",
      cards: [
        { icon: '🔥', front: "1 · Треск костра ¦ 1 · Gulxan chirsillashi ¦ 1 · A crackling fire", back: "Мнут шуршащий пакет ¦ Shitirlovchi paketni g'ijimlashadi ¦ They crumple a crinkly bag" },
        { icon: '🐎', front: "2 · Стук копыт ¦ 2 · Tuyoq tovushi ¦ 2 · Horse hooves", back: "Стучат половинками кокоса ¦ Kokos yarimtalarini taqillatishadi ¦ They knock coconut halves together" },
        { icon: '❄️', front: "3 · Хруст снега ¦ 3 · Qor g'irchillashi ¦ 3 · Crunching snow", back: "Мнут мешочек с крахмалом ¦ Kraxmalli qopchani g'ijimlashadi ¦ They squeeze a bag of starch" },
        { icon: '⛈️', front: "4 · Гром ¦ 4 · Momaqaldiroq ¦ 4 · Thunder", back: "Трясут большой лист металла ¦ Katta temir listni silkitishadi ¦ They shake a big metal sheet" },
      ],
      takeaway: "Похожие звуки делают разные предметы — мозг связывает их по ассоциации. ¦ O'xshash tovushlarni turli narsalar chiqaradi — miya ularni bog'lab qo'yadi. ¦ Different objects make similar sounds — the brain links them by association.",
      notes: { min: 7 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: на что похож звук? ¦ O'zing bajar: tovush nimaga o'xshaydi? ¦ Your turn: what does it sound like?",
      chat: "номер ответа в чат ¦ javob raqamini chatga ¦ answer number in the chat",
      goal: "У тебя уши настоящего звукорежиссёра! ¦ Sening quloqlaring haqiqiy ovoz rejissyorining quloqlari! ¦ You've got a sound designer's ears!",
      items: [
        { title: "Чем изобразить шум дождя? ¦ Yomg'ir shovqinini nima bilan tasvirlash mumkin? ¦ How could you make the sound of rain?", choices: ["Сыпать рис на поднос ¦ Patnisga guruch sepish ¦ Pour rice onto a tray", "Молчать ¦ Jim turish ¦ Stay silent"], correct: 0, explain: "Много мелких ударов похожи на капли. ¦ Ko'p mayda zarbalar tomchilarga o'xshaydi. ¦ Lots of tiny taps sound like drops." },
        { title: "Звук «тук-тук» может быть… ¦ «Tuk-tuk» tovushi bo'lishi mumkin… ¦ A “knock-knock” could be…", choices: ["И дверью, и дятлом ¦ Eshik ham, qizilishton ham ¦ A door or a woodpecker", "Только дверью ¦ Faqat eshik ¦ Only a door"], correct: 0, explain: "У одного звука бывает несколько версий. ¦ Bitta tovushning bir nechta taxmini bo'ladi. ¦ One sound can have several explanations." },
      ],
      notes: { min: 9 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: одна загадка — много версий ¦ Xulosa: bitta topishmoq — ko'p taxmin ¦ Wrap-up: one riddle, many guesses",
      chat: "какой звук ты попробуешь сделать дома? ¦ uyda qanday tovush chiqarib ko'rasan? ¦ which sound will you try to make at home?",
      answer: "Один и тот же звук можно объяснить по-разному: шипение — это и чайник, и змея, и дождь. В кино этим пользуются: треск костра делают шуршащим пакетом, стук копыт — половинками кокоса. Это ассоциативное мышление: мы находим, на что похоже. ¦ Bitta tovushni turlicha tushuntirish mumkin: vishillash — choynak ham, ilon ham, yomg'ir ham. Kinoda bundan foydalanishadi: gulxan chirsillashini shitirlovchi paket bilan, tuyoq tovushini esa kokos yarimtalari bilan qilishadi. Bu assotsiativ fikrlash: nima nimaga o'xshashini topamiz. ¦ One sound can be explained many ways: a hiss could be a kettle, a snake or rain. Films use this: a campfire crackle is a crinkly bag, hooves are coconut halves. That's associative thinking — finding what something is like.",
      icon: '👂',
      badge: "Звукорежиссёр ¦ Ovoz rejissyori ¦ Sound designer",
      badgeSub: kick('blockly', 'g', 1),
      homeworkTitle: HOME,
      homework: [
        "Найди дома предмет, который звучит как дождь, ветер или шаги, и покажи родным. ¦ Uyda yomg'ir, shamol yoki qadamlarga o'xshab ovoz chiqaradigan narsani top va yaqinlaringga ko'rsat. ¦ Find something at home that sounds like rain, wind or footsteps and show your family.",
      ],
      notes: { min: 5 },
    },
  ],
});
