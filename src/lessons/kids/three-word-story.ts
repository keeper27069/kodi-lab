import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

export default kit({
  id: 'kids-g22',
  title: "История из трёх слов ¦ Uch so'zdan hikoya ¦ A story from three words",
  question: "Как связать верблюда, телефон и луну в одну историю? ¦ Tuya, telefon va oyni bitta hikoyaga qanday bog'lash mumkin? ¦ How do you link a camel, a phone and the moon in one story?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '📖',
      kicker: kick('blockly', 'g', 2),
      title: "Сочиняем вместе ¦ Birga to'qiymiz ¦ Making up a story together",
      chat: "предложи одно случайное слово ¦ bitta tasodifiy so'z taklif qil ¦ suggest one random word",
      lead: "Чат даёт три случайных слова: верблюд, телефон, луна. Ведущий начинает историю, а каждый добавляет по предложению. К концу история должна связать все три слова! ¦ Chat uchta tasodifiy so'z beradi: tuya, telefon, oy. Boshlovchi hikoyani boshlaydi, har kim bittadan gap qo'shadi. Oxirida hikoya uchala so'zni bog'lashi kerak! ¦ The chat picks three random words: camel, phone, moon. The host starts a story and everyone adds a sentence. By the end the story must link all three words!",
      facts: ["🐪 верблюд ¦ 🐪 tuya ¦ 🐪 camel", "📱 телефон ¦ 📱 telefon ¦ 📱 phone", "🌙 луна ¦ 🌙 oy ¦ 🌙 moon"],
      notes: { min: 3 },
    },
    {
      type: 'flow',
      stage: 1,
      title: "У любой истории три части ¦ Har qanday hikoyaning uch qismi bor ¦ Every story has three parts",
      chat: "что будет проблемой в нашей истории? ¦ hikoyamizda muammo nima bo'ladi? ¦ what will the problem be in our story?",
      nodes: [
        { icon: '🌅', label: "Начало ¦ Boshlanish ¦ Beginning", text: "Кто герой и где он? ¦ Qahramon kim va qayerda? ¦ Who's the hero and where?" },
        { icon: '⚡', label: "Проблема ¦ Muammo ¦ Problem", text: "Что случилось? ¦ Nima bo'ldi? ¦ What went wrong?" },
        { icon: '🎉', label: "Решение ¦ Yechim ¦ Solution", text: "Как всё закончилось? ¦ Hammasi qanday tugadi? ¦ How did it end?" },
      ],
      notes: { min: 5 },
    },
    {
      type: 'board',
      stage: 2,
      title: "Пишем историю по предложению ¦ Hikoyani gapma-gap yozamiz ¦ Writing the story one sentence at a time",
      chat: "добавь одно предложение ¦ bitta gap qo'sh ¦ add one sentence",
      seeds: [
        "Верблюд Бахтияр жил в пустыне. ¦ Baxtiyor ismli tuya cho'lda yashardi. ¦ A camel called Bakhtiyor lived in the desert.",
        "Однажды он нашёл в песке телефон. ¦ Bir kuni u qumdan telefon topib oldi. ¦ One day he found a phone in the sand.",
      ],
      hits: ['луна', 'луну', 'луне', 'oy', 'moon'],
      hitBadge: "луна появилась! ¦ oy paydo bo'ldi! ¦ the moon is in!",
      missBadge: "ещё нет луны ¦ hali oy yo'q ¦ no moon yet",
      placeholder: "Следующее предложение… ¦ Keyingi gap… ¦ The next sentence…",
      footer: "Каждое предложение должно продолжать предыдущее. ¦ Har bir gap oldingisini davom ettirishi kerak. ¦ Each sentence should follow on from the last.",
      notes: { say: ['Ментор зачитывает лучшие продолжения и следит, чтобы все три слова прозвучали.'], min: 10 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: какое предложение связывает? ¦ O'zing bajar: qaysi gap bog'laydi? ¦ Your turn: which sentence links them?",
      chat: "номер ответа в чат ¦ javob raqamini chatga ¦ answer number in the chat",
      goal: "Ты умеешь связывать мысли! ¦ Fikrlarni bog'lay olasan! ¦ You can connect ideas!",
      items: [
        { title: "Как закончить историю про верблюда с телефоном и луну? ¦ Telefonli tuya va oy haqidagi hikoyani qanday tugatish mumkin? ¦ How should the camel-and-phone story end with the moon?", choices: ["Ночью при свете луны он позвонил домой ¦ Kechasi oy yorug'ida u uyiga qo'ng'iroq qildi ¦ At night, by moonlight, he phoned home", "Он съел яблоко ¦ U olma yedi ¦ He ate an apple"], correct: 0, explain: "Здесь есть и телефон, и луна. ¦ Bu yerda telefon ham, oy ham bor. ¦ It has both the phone and the moon." },
        { title: "Что делает историю связной? ¦ Hikoyani nima bog'liq qiladi? ¦ What makes a story hang together?", choices: ["Каждое предложение продолжает прошлое ¦ Har bir gap oldingisini davom ettiradi ¦ Each sentence follows the last", "Случайные предложения ¦ Tasodifiy gaplar ¦ Random sentences"], correct: 0, explain: "Так получается цепочка. ¦ Shunday qilib zanjir hosil bo'ladi. ¦ That makes a chain." },
      ],
      notes: { min: 7 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: начало, проблема, решение ¦ Xulosa: boshlanish, muammo, yechim ¦ Wrap-up: beginning, problem, solution",
      chat: "дай три слова для истории дома ¦ uyda hikoya uchun uchta so'z ber ¦ give three words for a story at home",
      answer: "Связная история строится из трёх частей: начало, проблема и решение. Каждое новое предложение продолжает предыдущее, и тогда даже верблюд, телефон и луна оказываются в одной истории. Так тренируются речь и умение связывать мысли. ¦ Bog'liq hikoya uch qismdan quriladi: boshlanish, muammo va yechim. Har bir yangi gap oldingisini davom ettiradi va shunda hatto tuya, telefon va oy ham bitta hikoyaga tushadi. Shunday qilib nutq va fikrlarni bog'lash mashq qilinadi. ¦ A connected story has three parts: a beginning, a problem and a solution. Each new sentence follows the last, so even a camel, a phone and the moon end up in one tale. That trains speaking and linking ideas.",
      icon: '📖',
      badge: "Сказочник ¦ Ertakchi ¦ Storyteller",
      badgeSub: kick('blockly', 'g', 2),
      homeworkTitle: HOME,
      homework: [
        "Попроси родных назвать три слова и сочини с ними историю из 5 предложений. ¦ Yaqinlaringdan uchta so'z aytishni so'ra va ular bilan 5 gapdan iborat hikoya to'qi. ¦ Ask your family for three words and make a 5-sentence story with them.",
        "Нужны: бумага и карандаш. ¦ Kerak: qog'oz va qalam. ¦ You need: paper and a pencil.",
      ],
      notes: { min: 5 },
    },
  ],
});
