import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

type P = [number, number];
const SLOT: P[] = [[20, 46], [40, 46], [60, 46], [80, 46]];
const WAIT: Record<string, P> = { g: [14, 86], v: [38, 86], b: [62, 86], a: [86, 86] };

export default kit({
  id: 'kids-t11',
  title: "Кто стоит в очереди ¦ Navbatda kim turibdi ¦ Who is in the queue",
  question: "Как расставить четверых по трём подсказкам? ¦ To'rt kishini uchta ishora bo'yicha qanday joylashtirish mumkin? ¦ How do you line up four people from three clues?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🧍',
      kicker: kick('logic', 't', 3),
      title: "Очередь за мороженым ¦ Muzqaymoq navbati ¦ The ice-cream queue",
      chat: "ты любишь стоять первым или последним? 1 или 4 ¦ birinchi turishni yaxshi ko'rasanmi yoki oxirgi? 1 yoki 4 ¦ do you like being first or last in line? 1 or 4",
      lead: "Гоша, Вика, Бек и Аня стояли в очереди за мороженым и перепутали места. Помоги вспомнить порядок по подсказкам «перед», «после» и «между». ¦ Gosha, Vika, Bek va Anya muzqaymoq navbatida turgan edi va joylarini adashtirib qo'yishdi. «Oldida», «keyin» va «o'rtasida» ishoralari bo'yicha tartibni eslashga yordam ber. ¦ Gosha, Vika, Bek and Anya were queuing for ice cream and forgot their places. Use the clues “before”, “after” and “between” to work out the order.",
      facts: [
        "Повторяем уроки 6–8 ¦ 6–8-darslarni takrorlaymiz ¦ We revise lessons 6–8",
        "Нужны: 4 карточки с именами ¦ Kerak: ismli 4 ta kartochka ¦ You need: 4 name cards",
      ],
      notes: { min: 3 },
    },
    {
      type: 'animate',
      stage: 1,
      title: "Расставляем по подсказкам ¦ Ishoralar bo'yicha joylashtiramiz ¦ Placing them by the clues",
      chat: "кто второй? пиши имя ¦ ikkinchi kim? ismni yoz ¦ who is second? write a name",
      actors: [
        { id: 'g', icon: '👦', label: "Гоша ¦ Gosha ¦ Gosha" },
        { id: 'v', icon: '👧', label: "Вика ¦ Vika ¦ Vika" },
        { id: 'b', icon: '🧒', label: "Бек ¦ Bek ¦ Bek" },
        { id: 'a', icon: '👩‍🦰', label: "Аня ¦ Anya ¦ Anya" },
        { id: 'ice', icon: '🍦', label: "Начало очереди ¦ Navbat boshi ¦ Front of the queue" },
      ],
      steps: [
        { say: "Все ждут. Окошко с мороженым — слева. ¦ Hamma kutyapti. Muzqaymoq darchasi — chapda. ¦ Everyone's waiting. The ice-cream window is on the left.", at: { ...WAIT, ice: [5, 46, 0.9] } },
        { say: "Подсказка 1: «Гоша — первый». ¦ 1-ishora: «Gosha — birinchi». ¦ Clue 1: “Gosha is first.”", at: { g: SLOT[0] }, pulse: ['g'] },
        { say: "Подсказка 2: «Вика стоит между Гошей и Беком». Значит, Вика — вторая, Бек — третий. ¦ 2-ishora: «Vika Gosha bilan Bek o'rtasida turibdi». Demak, Vika — ikkinchi, Bek — uchinchi. ¦ Clue 2: “Vika is between Gosha and Bek.” So Vika is 2nd and Bek is 3rd.", at: { v: SLOT[1], b: SLOT[2] }, pulse: ['v', 'b'] },
        { say: "Подсказка 3: «Аня стоит после Бека». Последнее место — её. ¦ 3-ishora: «Anya Bekdan keyin turibdi». Oxirgi joy — uniki. ¦ Clue 3: “Anya is after Bek.” The last place is hers.", at: { a: SLOT[3] }, pulse: ['a'] },
        { say: "Проверяем все три подсказки — все выполняются: Гоша, Вика, Бек, Аня. ¦ Uchala ishorani tekshiramiz — hammasi bajarildi: Gosha, Vika, Bek, Anya. ¦ Check all three clues — they all hold: Gosha, Vika, Bek, Anya.", pulse: ['g', 'v', 'b', 'a'] },
      ],
      notes: { min: 9 },
    },
    {
      type: 'poll',
      stage: 2,
      title: "Если убрать подсказку 1 — порядок один? ¦ 1-ishorani olib tashlasak — tartib bittami? ¦ Without clue 1, is there still one order?",
      chat: "пиши «один» или «несколько» ¦ «bitta» yoki «bir nechta» deb yoz ¦ write “one” or “several”",
      options: [
        { label: "Один ¦ Bitta ¦ One" },
        { label: "Несколько ¦ Bir nechta ¦ Several" },
      ],
      correct: 1,
      result: "Несколько! Например, подходят «Гоша, Вика, Бек, Аня» и «Бек, Вика, Гоша, Аня». Когда порядков несколько, называем все. ¦ Bir nechta! Masalan, «Gosha, Vika, Bek, Anya» ham, «Bek, Vika, Gosha, Anya» ham mos keladi. Tartib bir nechta bo'lsa, hammasini aytamiz. ¦ Several! For example, both “Gosha, Vika, Bek, Anya” and “Bek, Vika, Gosha, Anya” work. When several orders fit, name them all.",
      notes: { say: ['Без подсказки 1 подходят: Г-В-Б-А, Б-В-Г-А, Б-В-А-Г, Б-А-В-Г.'], min: 5 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: новая очередь ¦ O'zing bajar: yangi navbat ¦ Your turn: a new queue",
      chat: "пиши порядок имён ¦ ismlar tartibini yoz ¦ write the order of names",
      goal: "Ты расставил всех по местам! ¦ Hammani o'z joyiga qo'yding! ¦ You got everyone in place!",
      items: [
        { title: "🐱 последний. 🐶 перед 🐰. 🐰 перед 🐱. Кто первый? ¦ 🐱 oxirgi. 🐶 🐰 dan oldin. 🐰 🐱 dan oldin. Birinchi kim? ¦ 🐱 is last. 🐶 is before 🐰. 🐰 is before 🐱. Who's first?", choices: ['🐶', '🐰'], correct: 0, explain: "🐶 → 🐰 → 🐱 ¦ 🐶 → 🐰 → 🐱 ¦ 🐶 → 🐰 → 🐱" },
        { title: "После каждой подсказки нужно… ¦ Har bir ishoradan keyin… ¦ After every clue you should…", choices: ["Проверить все условия ¦ Barcha shartlarni tekshirish ¦ Check all the conditions", "Сразу угадать ответ ¦ Darhol javobni topish ¦ Guess the answer"], correct: 0, explain: "Так ошибка не проскочит. ¦ Shunda xato o'tib ketmaydi. ¦ That way no mistake slips through." },
      ],
      notes: { min: 9 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: подсказка за подсказкой ¦ Xulosa: ishora ketidan ishora ¦ Wrap-up: clue by clue",
      chat: "какое слово-подсказка самое полезное: «перед», «после» или «между»? ¦ qaysi ishora so'zi eng foydali: «oldida», «keyin» yoki «o'rtasida»? ¦ which clue word helps most: “before”, “after” or “between”?",
      answer: "Начинаем с самой точной подсказки — «Гоша первый». Потом «между» ставит Вику и Бека, а «после» отдаёт последнее место Ане. В конце проверяем, что все подсказки выполняются. Если подсказок мало, порядков может быть несколько — тогда называем все. ¦ Eng aniq ishoradan boshlaymiz — «Gosha birinchi». Keyin «o'rtasida» Vika va Bekni joylashtiradi, «keyin» esa oxirgi joyni Anyaga beradi. Oxirida barcha ishoralar bajarilganini tekshiramiz. Ishoralar kam bo'lsa, tartiblar bir nechta bo'lishi mumkin — unda hammasini aytamiz. ¦ Start with the most exact clue: “Gosha is first.” Then “between” places Vika and Bek, and “after” gives Anya the last spot. Finally check every clue holds. With too few clues there can be several orders — then name them all.",
      icon: '🧍',
      badge: "Распорядитель очереди ¦ Navbat boshqaruvchisi ¦ Queue manager",
      badgeSub: kick('logic', 't', 3),
      homeworkTitle: HOME,
      homework: [
        "Придумай три подсказки для очереди из своей семьи и проверь, что порядок только один. ¦ Oilang a'zolari navbati uchun uchta ishora o'ylab top va tartib faqat bitta ekanini tekshir. ¦ Write three clues for a queue of your family and check there's only one order.",
        "Нужны: 4 карточки. ¦ Kerak: 4 ta kartochka. ¦ You need: 4 cards.",
      ],
      notes: { min: 4 },
    },
  ],
});
