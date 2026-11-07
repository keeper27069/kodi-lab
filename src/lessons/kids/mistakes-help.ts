import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

export default kit({
  id: 'kids-g30',
  title: "Как мозг учится и почему ошибки помогают ¦ Miya qanday o'rganadi va xatolar nega yordam beradi ¦ How the brain learns and why mistakes help",
  question: "Почему то, что было трудно, однажды становится лёгким? ¦ Nega qiyin bo'lgan narsa bir kun oson bo'lib qoladi? ¦ Why does something hard one day become easy?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🌱',
      kicker: kick('reserve', 'g', 6),
      title: "Тропинка в траве ¦ O'tlar orasidagi so'qmoq ¦ A trail in the grass",
      chat: "что ты научился делать в этом году? одно слово ¦ bu yil nimani o'rganding? bitta so'z ¦ what did you learn to do this year? one word",
      lead: "Представь поле с высокой травой. В первый раз идти трудно. Но если ходить по одному месту каждый день, появится тропинка, а потом — настоящая дорога. Так и в мозге: каждая попытка протаптывает дорожку для нового умения. ¦ Baland o'tli dalani tasavvur qil. Birinchi marta yurish qiyin. Lekin har kuni bir joydan yursang, so'qmoq paydo bo'ladi, keyin esa — haqiqiy yo'l. Miyada ham shunday: har bir urinish yangi mahorat uchun yo'lchani ochadi. ¦ Picture a field of tall grass. Walking through it the first time is hard. But walk the same way every day and a trail appears, then a real road. The brain is the same: every try treads a path for a new skill.",
      notes: { min: 3 },
    },
    {
      type: 'flow',
      stage: 1,
      title: "Как появляется умение ¦ Mahorat qanday paydo bo'ladi ¦ How a skill grows",
      chat: "на каком шаге ты сейчас с чем-то новым? номер ¦ yangi narsada hozir qaysi qadamdasan? raqam ¦ which step are you on with something new? a number",
      nodes: [
        { icon: '🌾', label: "1 · Трудно ¦ 1 · Qiyin ¦ 1 · Hard", text: "Высокая трава, много ошибок ¦ Baland o'tlar, ko'p xato ¦ Tall grass, lots of mistakes" },
        { icon: '👣', label: "2 · Пробуем снова ¦ 2 · Yana urinamiz ¦ 2 · Try again", text: "Каждая ошибка подсказывает, куда не ходить ¦ Har bir xato qayerga yurmaslikni ko'rsatadi ¦ Each mistake shows where not to step" },
        { icon: '🛤️', label: "3 · Тропинка ¦ 3 · So'qmoq ¦ 3 · A trail", text: "Получается чаще ¦ Ko'proq uddalanadi ¦ It works more often" },
        { icon: '🛣️', label: "4 · Дорога ¦ 4 · Yo'l ¦ 4 · A road", text: "Делаем легко, почти не думая ¦ Oson, deyarli o'ylamasdan bajaramiz ¦ We do it easily, almost without thinking" },
      ],
      notes: { min: 7 },
    },
    {
      type: 'compare',
      stage: 2,
      title: "Две мысли после ошибки ¦ Xatodan keyingi ikki fikr ¦ Two thoughts after a mistake",
      chat: "какая мысль помогает учиться? «1» или «2» ¦ qaysi fikr o'rganishga yordam beradi? «1» yoki «2» ¦ which thought helps you learn? “1” or “2”",
      left: { label: "1 · «Я не умею» ¦ 1 · «Men qila olmayman» ¦ 1 · “I can't do it”", icon: '😞', points: ["Бросаю попытки ¦ Urinishni tashlayman ¦ I give up", "Тропинка зарастает ¦ So'qmoq o'sib ketadi ¦ The trail grows over"] },
      right: { label: "2 · «Я пока не умею» ¦ 2 · «Men hozircha qila olmayman» ¦ 2 · “I can't do it yet”", icon: '💪', points: ["Ищу, что пошло не так ¦ Nima noto'g'ri ketganini qidiraman ¦ I look for what went wrong", "Пробую снова по-другому ¦ Boshqacha qilib yana urinaman ¦ I try again a different way"] },
      verdict: "Маленькое слово «пока» превращает ошибку в шаг вперёд. ¦ Kichkina «hozircha» so'zi xatoni oldinga qadamga aylantiradi. ¦ The little word “yet” turns a mistake into a step forward.",
      notes: { min: 7 },
    },
    {
      type: 'board',
      stage: 3,
      title: "Сделай сам: раньше не умел — теперь умею ¦ O'zing bajar: avval qila olmasdim — endi qila olaman ¦ Your turn: couldn't before, can now",
      chat: "пиши: «раньше не умел …, теперь умею» ¦ yoz: «avval … qila olmasdim, endi qila olaman» ¦ write: “I couldn't …, now I can”",
      seeds: [
        "Раньше не умел кататься на велосипеде — теперь умею! ¦ Avval velosiped hayday olmasdim — endi hayday olaman! ¦ I couldn't ride a bike — now I can!",
        "Раньше путал буквы — теперь читаю книги ¦ Avval harflarni adashtirardim — endi kitob o'qiyman ¦ I used to mix up letters — now I read books",
      ],
      placeholder: "Раньше не умел… ¦ Avval qila olmasdim… ¦ I couldn't…",
      footer: "Сколько ошибок было по дороге? Каждая помогла! ¦ Yo'lda nechta xato bo'ldi? Har biri yordam berdi! ¦ How many mistakes along the way? Each one helped!",
      notes: { min: 8 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: ошибка — это шаг ¦ Xulosa: xato — bu qadam ¦ Wrap-up: a mistake is a step",
      chat: "чему ты хочешь научиться дальше? ¦ keyin nimani o'rganmoqchisan? ¦ what do you want to learn next?",
      answer: "Мозг учится, как протаптывают тропинку в траве: чем чаще пробуешь, тем легче идти. Ошибки — часть дороги: они подсказывают, что поменять. Вместо «я не умею» говорим «я пока не умею» и пробуем снова. ¦ Miya o'tlar orasida so'qmoq ochilgandek o'rganadi: qancha ko'p urinsang, yurish shuncha oson. Xatolar — yo'lning bir qismi: ular nimani o'zgartirishni ko'rsatadi. «Men qila olmayman» o'rniga «men hozircha qila olmayman» deymiz va yana urinamiz. ¦ The brain learns the way a trail is trodden through grass: the more you try, the easier it gets. Mistakes are part of the road — they show what to change. Instead of “I can't” we say “I can't yet” and try again.",
      icon: '🌱',
      badge: "Упорный ученик ¦ Qat'iyatli o'quvchi ¦ Never-give-up learner",
      badgeSub: kick('reserve', 'g', 6),
      homeworkTitle: HOME,
      homework: [
        "Напиши на листке одно умение, которое ты «пока не умеешь», и попробуй его 3 дня подряд. ¦ Varaqqa «hozircha qila olmaydigan» bitta mahoratni yoz va uni 3 kun ketma-ket sinab ko'r. ¦ Write down one skill you “can't do yet” and try it 3 days in a row.",
        "Нужны: бумага и карандаш. ¦ Kerak: qog'oz va qalam. ¦ You need: paper and a pencil.",
      ],
      notes: { min: 5 },
    },
  ],
});
