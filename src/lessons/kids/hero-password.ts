import { kit } from '@engine/kit';
import { HOME, ROUTE, rkick } from './_kids';

export default kit({
  id: 'kids-t27',
  title: "Пароль выдуманного героя ¦ To'qima qahramonning paroli ¦ A made-up hero's password",
  question: "Почему пароль «zarina1» — плохая идея? ¦ «zarina1» paroli nega yomon g'oya? ¦ Why is “zarina1” a bad password?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🦸',
      kicker: rkick('cyber'),
      title: "Герой без защиты ¦ Himoyasiz qahramon ¦ A hero with no shield",
      chat: "как зовут твоего любимого героя мультфильма? ¦ sevimli multfilm qahramoning ismi nima? ¦ what's your favourite cartoon hero called?",
      lead: "Выдуманная героиня Зарина — супер-изобретатель. Её пароль в учебной игре — «zarina1». Его легко угадать: имя и цифра. Сегодня поможем Зарине выбрать пароль понадёжнее. Важно: свои настоящие пароли мы никому не пишем — ни в чат, ни ментору! ¦ To'qima qahramon Zarina — super ixtirochi. O'quv o'yinidagi paroli — «zarina1». Uni topish oson: ism va raqam. Bugun Zarinaga ishonchliroq parol tanlashga yordam beramiz. Muhim: o'z haqiqiy parollarimizni hech kimga yozmaymiz — na chatga, na mentorga! ¦ Zarina is a made-up super-inventor. Her password in a practice game is “zarina1”. It's easy to guess: a name and a digit. Today we'll help her pick a stronger one. Important: we never write our real passwords to anyone — not in the chat, not to the mentor!",
      facts: [
        "Повторяем уроки 6–9 ¦ 6–9-darslarni takrorlaymiz ¦ We revise lessons 6–9",
        "🔒 Все пароли сегодня — только учебные примеры ¦ 🔒 Bugungi barcha parollar — faqat o'quv misollari ¦ 🔒 Every password today is a practice example",
      ],
      notes: { say: ['Если ребёнок начинает писать свой пароль — модератор сразу удаляет сообщение, ментор мягко напоминает правило.'], min: 3 },
    },
    {
      type: 'poll',
      stage: 1,
      title: "Какой учебный пароль надёжнее? ¦ Qaysi o'quv paroli ishonchliroq? ¦ Which practice password is stronger?",
      chat: "пиши номер варианта ¦ variant raqamini yoz ¦ write the option number",
      options: [
        { label: "1 · zarina1" },
        { label: "2 · 12345678" },
        { label: "3 · kok-tuya-oyda-raqs-7" },
      ],
      correct: 2,
      result: "Вариант 3: длинная фраза из нескольких слов. Её трудно угадать, а Зарине легко запомнить картинку: «синий верблюд танцует на луне». ¦ 3-variant: bir nechta so'zdan iborat uzun ibora. Uni topish qiyin, Zarinaga esa tasvirni eslab qolish oson: «ko'k tuya oyda raqs tushyapti». ¦ Option 3: a long phrase of several words. It's hard to guess, and the picture is easy to remember: “a blue camel dancing on the moon”.",
      notes: { min: 6 },
    },
    {
      type: 'cards',
      stage: 2,
      title: "Четыре правила надёжного пароля ¦ Ishonchli parolning to'rt qoidasi ¦ Four rules for a strong password",
      chat: "какое правило нарушила Зарина? номер ¦ Zarina qaysi qoidani buzdi? raqam ¦ which rule did Zarina break? a number",
      cards: [
        { icon: '📏', front: "1 · Длинный ¦ 1 · Uzun ¦ 1 · Long", back: "Несколько слов — лучше одного ¦ Bir nechta so'z — bittasidan yaxshi ¦ Several words beat one" },
        { icon: '🙈', front: "2 · Не про тебя ¦ 2 · Sen haqingda emas ¦ 2 · Not about you", back: "Без имени и дня рождения ¦ Ismsiz va tug'ilgan kunsiz ¦ No name, no birthday" },
        { icon: '🔀', front: "3 · Уникальный ¦ 3 · Takrorlanmas ¦ 3 · Unique", back: "Для каждой игры — свой ¦ Har bir o'yin uchun — alohida ¦ A different one for each game" },
        { icon: '🤫', front: "4 · Секретный ¦ 4 · Maxfiy ¦ 4 · Secret", back: "Знают только ты и родители ¦ Faqat sen va ota-onang biladi ¦ Only you and your parents know it" },
      ],
      takeaway: "«zarina1» короткий и сделан из имени — его угадает любой, кто знает героиню. ¦ «zarina1» qisqa va ismdan tuzilgan — qahramonni biladigan har kim uni topadi. ¦ “zarina1” is short and made from a name — anyone who knows her could guess it.",
      notes: { min: 8 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: помоги Зарине ¦ O'zing bajar: Zarinaga yordam ber ¦ Your turn: help Zarina",
      chat: "номер ответа в чат — без своих паролей! ¦ javob raqamini chatga — o'z parollaringsiz! ¦ answer number in the chat — no real passwords!",
      goal: "Ты защитил аккаунт героини! ¦ Qahramonning akkauntini himoya qilding! ¦ You protected the hero's account!",
      items: [
        { title: "Зарина хочет один пароль для всех игр. Хорошо? ¦ Zarina barcha o'yinlar uchun bitta parol xohlaydi. Yaxshimi? ¦ Zarina wants one password for every game. Good idea?", choices: ["Нет — если узнают один, откроют все ¦ Yo'q — bittasini bilib olishsa, hammasini ochishadi ¦ No — if one leaks, they all open", "Да, так удобнее ¦ Ha, shunday qulayroq ¦ Yes, it's easier"], correct: 0, explain: "Уникальный пароль — как свой ключ для каждой двери. ¦ Takrorlanmas parol — har bir eshikning o'z kaliti. ¦ A unique password is like a separate key for each door." },
        { title: "Друг просит пароль от игры. Что сказать? ¦ Do'sting o'yin parolini so'rayapti. Nima deysan? ¦ A friend asks for your game password. What do you say?", choices: ["«Пароль — секрет, знают только родители» ¦ «Parol — sir, faqat ota-onam biladi» ¦ “It's a secret — only my parents know”", "Сказать, раз это друг ¦ Do'st bo'lgani uchun aytish ¦ Tell them, they're a friend"], correct: 0, explain: "Даже друзьям пароль не говорим. ¦ Hatto do'stlarga ham parolni aytmaymiz. ¦ We don't share passwords even with friends." },
      ],
      notes: { min: 8 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: длинный, уникальный, секретный ¦ Xulosa: uzun, takrorlanmas, maxfiy ¦ Wrap-up: long, unique, secret",
      chat: "какое правило ты расскажешь родным? номер ¦ yaqinlaringga qaysi qoidani aytib berasan? raqam ¦ which rule will you tell your family? a number",
      answer: "Пароль «zarina1» плохой: он короткий и сделан из имени. Надёжный пароль длинный (лучше фраза из нескольких слов), не связан с тобой, свой для каждой игры и секретный — его знают только ты и родители. Свои настоящие пароли никогда не пишем в чат. ¦ «zarina1» paroli yomon: u qisqa va ismdan tuzilgan. Ishonchli parol uzun (bir nechta so'zli ibora yaxshiroq), sen bilan bog'liq emas, har bir o'yin uchun alohida va maxfiy — uni faqat sen va ota-onang biladi. O'z haqiqiy parollarimizni hech qachon chatga yozmaymiz. ¦ “zarina1” is weak: it's short and made from a name. A strong password is long (a phrase of several words is best), not about you, different for each game, and secret — only you and your parents know it. We never type our real passwords in a chat.",
      icon: '🛡️',
      badge: "Страж паролей ¦ Parollar qo'riqchisi ¦ Password guard",
      badgeSub: rkick('cyber'),
      homeworkTitle: HOME,
      homework: [
        "Расскажи родным 4 правила надёжного пароля и проверьте вместе пароли для твоих игр (не записывая их на бумагу). ¦ Yaqinlaringga ishonchli parolning 4 qoidasini aytib ber va o'yinlaring parollarini birga tekshiring (qog'ozga yozmasdan). ¦ Tell your family the 4 rules and check your game passwords together (without writing them down).",
      ],
      notes: { min: 5 },
    },
  ],
});
