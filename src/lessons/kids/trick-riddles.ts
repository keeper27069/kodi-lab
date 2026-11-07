import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

export default kit({
  id: 'kids-g27',
  title: "Загадки с подвохом: почему мы попадаемся ¦ Hiylali topishmoqlar: nega aldanib qolamiz ¦ Trick riddles: why we fall for them",
  question: "Что тяжелее: килограмм ваты или килограмм железа? ¦ Nima og'irroq: bir kilo paxtami yoki bir kilo temirmi? ¦ Which is heavier: a kilo of cotton or a kilo of iron?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🪤',
      kicker: kick('reserve', 'g', 3),
      title: "Мозг любит спешить ¦ Miya shoshilishni yaxshi ko'radi ¦ The brain loves to rush",
      chat: "отвечай быстро: что тяжелее — вата или железо? ¦ tez javob ber: nima og'irroq — paxtami yoki temirmi? ¦ answer fast: which is heavier — cotton or iron?",
      lead: "Мозг экономит силы и отвечает по привычке: «железо тяжёлое — значит, железо!». Но в загадке спрятан подвох. Сегодня учимся ловить подвохи: читать вопрос до конца и перечитывать его. ¦ Miya kuchni tejaydi va odat bo'yicha javob beradi: «temir og'ir — demak, temir!». Lekin topishmoqda hiyla yashiringan. Bugun hiylalarni ushlashni o'rganamiz: savolni oxirigacha o'qish va qayta o'qish. ¦ The brain saves effort and answers out of habit: “iron is heavy — so iron!” But the riddle hides a trick. Today we learn to catch tricks: read the question to the end and read it again.",
      notes: { min: 3 },
    },
    {
      type: 'poll',
      stage: 1,
      title: "Что тяжелее? ¦ Nima og'irroq? ¦ Which is heavier?",
      chat: "пиши номер ¦ raqamini yoz ¦ write the number",
      options: [
        { label: "1 · Килограмм железа ¦ 1 · Bir kilo temir ¦ 1 · A kilo of iron" },
        { label: "2 · Килограмм ваты ¦ 2 · Bir kilo paxta ¦ 2 · A kilo of cotton" },
        { label: "3 · Одинаково ¦ 3 · Bir xil ¦ 3 · They're the same" },
      ],
      correct: 2,
      result: "Одинаково! Килограмм — это килограмм. Просто вата пушистая и занимает больше места, а мозг перепутал «тяжёлый» и «большой». ¦ Bir xil! Kilo — bu kilo. Faqat paxta momiq va ko'proq joy egallaydi, miya esa «og'ir» bilan «katta»ni adashtirdi. ¦ The same! A kilo is a kilo. Cotton is fluffy and takes up more space, so the brain mixed up “heavy” and “big”.",
      notes: { min: 5 },
    },
    {
      type: 'truefalse',
      stage: 2,
      title: "Ещё подвохи: правда или нет? ¦ Yana hiylalar: rostmi yoki yo'q? ¦ More tricks: true or not?",
      chat: "пиши «правда» или «нет» ¦ «rost» yoki «yo'q» deb yoz ¦ write “true” or “no”",
      statements: [
        { text: "У Ани 3 сестры, у каждой сестры есть брат Тимур. Детей в семье 5 ¦ Azizaning 3 ta singlisi bor, har bir singlisining Temur ismli akasi bor. Oilada 5 ta bola ¦ Ann has 3 sisters, and each sister has a brother, Tim. There are 5 children", truth: true, explain: "Брат один и тот же: Аня, 3 сестры и Тимур. ¦ Aka bitta: Aziza, 3 ta singlisi va Temur. ¦ It's the same brother: Ann, 3 sisters and Tim." },
        { text: "Если обогнать второго бегуна, станешь первым ¦ Ikkinchi yuguruvchini quvib o'tsang, birinchi bo'lasan ¦ If you overtake the runner in second, you become first", truth: false, explain: "Ты займёшь его место — станешь вторым. ¦ Uning o'rnini egallaysan — ikkinchi bo'lasan. ¦ You take their place — you're second." },
        { text: "В каждом месяце есть 28-е число ¦ Har bir oyda 28-sana bor ¦ Every month has a 28th day", truth: true, explain: "Даже в самом коротком месяце — феврале. Подвох в том, что думаешь про «только февраль». ¦ Hatto eng qisqa oy — fevralda ham. Hiyla shundaki, «faqat fevral» deb o'ylaysan. ¦ Even in the shortest month, February. The trick is thinking “only February”." },
      ],
      notes: { say: ['Главное — не «поймать» детей, а показать, где мысль свернула. Хвалим за перечитывание.'], min: 9 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: поймай подвох ¦ O'zing bajar: hiylani ushla ¦ Your turn: catch the trick",
      chat: "номер ответа в чат ¦ javob raqamini chatga ¦ answer number in the chat",
      goal: "Тебя не проведёшь! ¦ Seni aldab bo'lmaydi! ¦ You can't be fooled!",
      items: [
        { title: "Петух снёс яйцо на крыше. Куда оно скатится? ¦ Xo'roz tomda tuxum qo'ydi. U qayerga dumalaydi? ¦ A rooster laid an egg on a roof. Which way does it roll?", choices: ["Никуда: петухи не несут яиц ¦ Hech qayerga: xo'rozlar tuxum qo'ymaydi ¦ Nowhere: roosters don't lay eggs", "Влево ¦ Chapga ¦ To the left"], correct: 0, explain: "Подвох спрятан в начале вопроса. ¦ Hiyla savolning boshida yashiringan. ¦ The trick hides at the start of the question." },
        { title: "Что делать, чтобы не попасться? ¦ Aldanib qolmaslik uchun nima qilish kerak? ¦ How do you avoid falling for it?", choices: ["Перечитать вопрос и не спешить ¦ Savolni qayta o'qish va shoshilmaslik ¦ Reread the question and take your time", "Отвечать как можно быстрее ¦ Iloji boricha tez javob berish ¦ Answer as fast as possible"], correct: 0, explain: "Медленное чтение ловит подвохи. ¦ Sekin o'qish hiylalarni ushlaydi. ¦ Slow reading catches tricks." },
      ],
      notes: { min: 8 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: перечитай вопрос ¦ Xulosa: savolni qayta o'qi ¦ Wrap-up: reread the question",
      chat: "загадай свою загадку с подвохом ¦ o'z hiylali topishmog'ingni ayt ¦ share your own trick riddle",
      answer: "Мы попадаемся на подвохи, потому что мозг спешит и отвечает по привычке: «железо тяжелее», хотя килограмм — это всегда килограмм. Чтобы не попасться, читаем вопрос до конца, перечитываем его и проверяем каждое слово. ¦ Biz hiylalarga aldanamiz, chunki miya shoshadi va odat bo'yicha javob beradi: «temir og'irroq», vaholanki kilo doim kilo. Aldanmaslik uchun savolni oxirigacha o'qiymiz, qayta o'qiymiz va har bir so'zni tekshiramiz. ¦ We fall for tricks because the brain rushes and answers out of habit: “iron is heavier”, though a kilo is always a kilo. To avoid it, read the question to the end, read it again and check every word.",
      icon: '🪤',
      badge: "Ловец подвохов ¦ Hiyla tutuvchi ¦ Trick catcher",
      badgeSub: kick('reserve', 'g', 3),
      homeworkTitle: HOME,
      homework: [
        "Загадай родным загадку про вату и железо и посмотри, попадутся ли они. ¦ Yaqinlaringga paxta va temir haqidagi topishmoqni ayt va ular aldanishadimi, ko'r. ¦ Ask your family the cotton-and-iron riddle and see if they fall for it.",
      ],
      notes: { min: 5 },
    },
  ],
});
