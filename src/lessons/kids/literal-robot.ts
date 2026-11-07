import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

export default kit({
  id: 'kids-t17',
  title: "Буквальный исполнитель ¦ So'zma-so'z bajaruvchi ¦ The literal robot",
  question: "Почему робот положил бумагу на голову? ¦ Nega robot qog'ozni boshiga qo'ydi? ¦ Why did the robot put the paper on its head?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🤖',
      kicker: kick('algo', 't', 1),
      title: "Робот делает ровно то, что сказано ¦ Robot aynan aytilganini qiladi ¦ The robot does exactly what it's told",
      chat: "какую команду ты дашь роботу первой? одно слово ¦ robotga birinchi qanday buyruq berasan? bitta so'z ¦ what's the first command you'd give a robot? one word",
      lead: "Исполнитель — тот, кто выполняет команды. Робот-исполнитель не догадывается, что мы имели в виду: он делает буквально то, что сказано. Поэтому команды должны быть точными: что взять, куда положить, как сделать. ¦ Bajaruvchi — buyruqlarni bajaradigan kishi. Robot-bajaruvchi nimani nazarda tutganimizni taxmin qilmaydi: u aytilganini so'zma-so'z bajaradi. Shuning uchun buyruqlar aniq bo'lishi kerak: nimani olish, qayerga qo'yish, qanday qilish. ¦ An executor carries out commands. A robot executor doesn't guess what we meant — it does literally what it's told. So commands must be exact: what to take, where to put it, how to do it.",
      facts: [
        "Повторяем уроки 3–5: понятный шаг ¦ 3–5-darslarni takrorlaymiz: tushunarli qadam ¦ We revise lessons 3–5: clear steps",
      ],
      notes: { say: ['Ментор играет робота и выполняет команды из чата буквально, с юмором.'], min: 3 },
    },
    {
      type: 'animate',
      stage: 1,
      title: "Команда: «Положи бумагу» ¦ Buyruq: «Qog'ozni qo'y» ¦ Command: “Put the paper”",
      chat: "что не так с командой? ¦ buyruqda nima xato? ¦ what's wrong with the command?",
      actors: [
        { id: 'r', icon: '🤖', label: "Робот ¦ Robot ¦ Robot" },
        { id: 'p', icon: '📄' },
        { id: 't', icon: '🗄️', label: "Стол ¦ Stol ¦ Desk" },
        { id: 'box', icon: '📦', label: "Коробка ¦ Quti ¦ Box" },
      ],
      steps: [
        { say: "Мы хотели, чтобы бумага оказалась в коробке. Говорим: «Положи бумагу». ¦ Qog'oz qutiga tushishini xohlagan edik. Aytamiz: «Qog'ozni qo'y». ¦ We wanted the paper in the box. We say: “Put the paper.”", at: { r: [50, 60, 1.4], p: [30, 70], t: [20, 82, 1.3], box: [84, 78, 1.3] } },
        { say: "Куда положить? Робот не знает… и кладёт на свою голову! ¦ Qayerga qo'yish kerak? Robot bilmaydi… va boshiga qo'yadi! ¦ Put it where? The robot doesn't know… so it puts it on its head!", at: { p: [50, 34] }, pulse: ['r'] },
        { say: "Точная команда: «Возьми лист со стола и положи в коробку». ¦ Aniq buyruq: «Stoldan varaqni ol va qutiga qo'y». ¦ An exact command: “Take the sheet from the desk and put it in the box.”", at: { p: [84, 66] }, pulse: ['box'] },
      ],
      takeaway: "В точной команде есть: предмет, место и действие. ¦ Aniq buyruqda: narsa, joy va harakat bor. ¦ An exact command has an object, a place and an action.",
      notes: { min: 7 },
    },
    {
      type: 'compare',
      stage: 2,
      title: "Неточно или точно? ¦ Noaniqmi yoki aniqmi? ¦ Vague or exact?",
      chat: "пиши одну точную команду в чат ¦ chatga bitta aniq buyruq yoz ¦ write one exact command in the chat",
      left: { label: "Неточно ¦ Noaniq ¦ Vague", icon: '🤷', points: ["«Убери» ¦ «Yig'ishtir» ¦ “Tidy up”", "«Нарисуй что-нибудь» ¦ «Biror narsa chiz» ¦ “Draw something”", "«Иди туда» ¦ «U yerga bor» ¦ “Go over there”"] },
      right: { label: "Точно ¦ Aniq ¦ Exact", icon: '🎯', points: ["«Положи карандаш в стакан» ¦ «Qalamni stakanga sol» ¦ “Put the pencil in the cup”", "«Нарисуй красный круг в центре» ¦ «Markazda qizil doira chiz» ¦ “Draw a red circle in the middle”", "«Сделай 3 шага к двери» ¦ «Eshik tomon 3 qadam qo'y» ¦ “Take 3 steps towards the door”"] },
      verdict: "Точная команда работает одинаково у всех. ¦ Aniq buyruq hammada bir xil ishlaydi. ¦ An exact command works the same for everyone.",
      notes: { min: 7 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: инструкция из трёх шагов ¦ O'zing bajar: uch qadamli yo'riqnoma ¦ Your turn: a three-step instruction",
      chat: "номер ответа в чат ¦ javob raqamini chatga ¦ answer number in the chat",
      goal: "Твои команды понятны даже роботу! ¦ Buyruqlaring hatto robotga ham tushunarli! ¦ Even a robot understands your commands!",
      items: [
        { title: "Какая команда точнее? ¦ Qaysi buyruq aniqroq? ¦ Which command is more exact?", choices: ["«Возьми синюю чашку с полки» ¦ «Javondan ko'k piyolani ol» ¦ “Take the blue cup from the shelf”", "«Возьми ту штуку» ¦ «Anovi narsani ol» ¦ “Take that thing”"], correct: 0, explain: "Есть предмет, цвет и место. ¦ Narsa, rang va joy bor. ¦ It has an object, a colour and a place." },
        { title: "Чего не хватает в «Положи книгу»? ¦ «Kitobni qo'y»da nima yetishmaydi? ¦ What's missing in “Put the book”?", choices: ["Места: куда положить ¦ Joy: qayerga qo'yish ¦ The place: where", "Ничего ¦ Hech narsa ¦ Nothing"], correct: 0, explain: "Без места робот положит куда угодно. ¦ Joysiz robot istalgan joyga qo'yadi. ¦ Without a place, the robot puts it anywhere." },
      ],
      notes: { say: ['Каждый пишет инструкцию из 3 шагов «как налить стакан воды»; ментор выполняет одну буквально.'], min: 9 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: предмет, место, действие ¦ Xulosa: narsa, joy, harakat ¦ Wrap-up: object, place, action",
      chat: "какую смешную ошибку робота ты запомнил? ¦ robotning qaysi kulgili xatosini eslab qolding? ¦ which funny robot mistake do you remember?",
      answer: "Исполнитель выполняет команды буквально. «Положи бумагу» не говорит, куда, — поэтому робот положил её на голову. В точной команде есть предмет, место и действие: «Возьми лист со стола и положи в коробку». Программы пишутся так же точно. ¦ Bajaruvchi buyruqlarni so'zma-so'z bajaradi. «Qog'ozni qo'y» qayerga ekanini aytmaydi — shuning uchun robot uni boshiga qo'ydi. Aniq buyruqda narsa, joy va harakat bor: «Stoldan varaqni ol va qutiga qo'y». Dasturlar ham xuddi shunday aniq yoziladi. ¦ An executor follows commands literally. “Put the paper” doesn't say where — so the robot put it on its head. An exact command has an object, a place and an action: “Take the sheet from the desk and put it in the box.” Programs are written just as precisely.",
      icon: '🤖',
      badge: "Командир роботов ¦ Robotlar qo'mondoni ¦ Robot commander",
      badgeSub: kick('algo', 't', 1),
      homeworkTitle: HOME,
      homework: [
        "Поиграй с родными в «робота»: дай три точные команды и проверь, выполнят ли их буквально. ¦ Yaqinlaring bilan «robot» o'yinini o'yna: uchta aniq buyruq ber va ular so'zma-so'z bajarishadimi, tekshir. ¦ Play “robot” with your family: give three exact commands and see if they follow them literally.",
        "Нужна: бумага. ¦ Kerak: qog'oz. ¦ You need: paper.",
      ],
      notes: { min: 4 },
    },
  ],
});
