import { kit } from '@engine/kit';
import { HOME, KCSS, ROUTE, kick } from './_kids';

// Two "game screens" made of emoji cells; diff = indexes that differ on the right
const A = ['🌳', '☀️', '🏠', '🚗', '🐱', '⭐', '🍎', '🎈', '🌷'];
const B = ['🌳', '🌙', '🏠', '🚗', '🐶', '⭐', '🍎', '🎈', '🌻'];
const pic = (cells: string[], mark: number[] = []) =>
  `<div class="grid" style="grid-template-columns:repeat(3,64px)">${cells.map((c, i) => `<div class="cell ${mark.includes(i) ? 'on' : ''}">${c}</div>`).join('')}</div>`;
const pair = (mark: number[]) => `<div class="wrap"><div class="row">${pic(A)}<div class="big">↔</div>${pic(B, mark)}</div></div>`;

export default kit({
  id: 'kids-g03',
  title: "Найди отличия: внимание, как у тестировщика ¦ Farqini top: testerdek diqqat ¦ Spot the difference: attention like a tester's",
  question: "Сколько отличий ты найдёшь за минуту? ¦ Bir daqiqada nechta farq topasan? ¦ How many differences can you find in a minute?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🔍',
      kicker: kick('comp', 'g', 3),
      title: "Включаем супервнимание ¦ Super diqqatni yoqamiz ¦ Switch on super attention",
      chat: "оцени своё внимание от 1 до 5 ¦ diqqatingni 1 dan 5 gacha bahola ¦ rate your attention from 1 to 5",
      lead: "Есть профессия, где люди ищут ошибки в играх и сайтах раньше всех. Сегодня ты попробуешь эту работу! ¦ Shunday kasb borki, unda odamlar o'yin va saytlardagi xatolarni hammadan oldin topadi. Bugun sen bu ishni sinab ko'rasan! ¦ There's a job where people find mistakes in games and sites before anyone else. Today you'll try it!",
      facts: [
        "Тестировщик — это человек, который ищет ошибки ¦ Tester — xatolarni qidiradigan odam ¦ A tester is a person who hunts for mistakes",
        "Ошибку в программе называют «баг» — «жучок» ¦ Dasturdagi xatoni «bag» — «qo'ng'izcha» deyishadi ¦ A mistake in a program is called a “bug”",
      ],
      notes: { min: 3 },
    },
    {
      type: 'predict',
      stage: 1,
      title: "Сколько отличий на двух экранах игры? ¦ O'yinning ikki ekranida nechta farq bor? ¦ How many differences between the two game screens?",
      chat: "пиши число ¦ sonni yoz ¦ write a number",
      label: "Отличий ¦ Farqlar ¦ Differences",
      min: 0,
      max: 6,
      answer: 3,
      result: "Три отличия: солнце стало луной, кот — собакой, тюльпан — подсолнухом. ¦ Uchta farq: quyosh oyga, mushuk itga, lola kungaboqarga aylandi. ¦ Three: the sun became a moon, the cat a dog, the tulip a sunflower.",
      notes: { say: ['Сначала даём минуту на следующем слайде, потом собираем числа. Не подсказываем.'], min: 5 },
    },
    {
      type: 'show',
      stage: 2,
      title: "Минута поиска: игра «Сад» ¦ Bir daqiqalik qidiruv: «Bog'» o'yini ¦ One-minute search: the “Garden” game",
      chat: "сколько отличий нашёл? ¦ nechta farq topding? ¦ how many did you find?",
      lang: 'text',
      css: KCSS,
      steps: [
        { code: '⏱ 60', html: pair([]), say: "Сравни экраны клетку за клеткой: слева направо, сверху вниз. ¦ Ekranlarni katakma-katak solishtir: chapdan o'ngga, yuqoridan pastga. ¦ Compare the screens cell by cell: left to right, top to bottom." },
        { code: '1', html: pair([1]), say: "Отличие 1: вместо солнца — луна. ¦ 1-farq: quyosh o'rnida — oy. ¦ Difference 1: a moon instead of the sun." },
        { code: '2', html: pair([1, 4]), say: "Отличие 2: кот превратился в собаку. ¦ 2-farq: mushuk itga aylandi. ¦ Difference 2: the cat turned into a dog." },
        { code: '3', html: pair([1, 4, 8]), say: "Отличие 3: тюльпан стал подсолнухом. Все три найдены! ¦ 3-farq: lola kungaboqarga aylandi. Uchalasi ham topildi! ¦ Difference 3: the tulip became a sunflower. All three found!" },
      ],
      takeaway: "Секрет тестировщика — проверять по порядку, а не прыгать глазами. ¦ Testerning siri — ko'zni sakratmasdan, tartib bilan tekshirish. ¦ A tester's secret: check in order instead of jumping around.",
      notes: { min: 8 },
    },
    {
      type: 'cards',
      stage: 2,
      title: "Что ищет тестировщик ¦ Tester nimani qidiradi ¦ What a tester looks for",
      chat: "какую ошибку ты встречал в играх? ¦ o'yinlarda qanday xatoni uchratgansan? ¦ what bug have you seen in a game?",
      cards: [
        { icon: '🧱', front: "Герой проходит сквозь стену ¦ Qahramon devordan o'tib ketadi ¦ The hero walks through a wall", back: "Ошибка в правилах игры. ¦ O'yin qoidalaridagi xato. ¦ A mistake in the game's rules." },
        { icon: '🔤', front: "Опечатка в кнопке ¦ Tugmadagi imlo xatosi ¦ A typo on a button", back: "«Начть игру» вместо «Начать». ¦ «Boshlah» o'rniga «Boshlash». ¦ “Strat game” instead of “Start”." },
        { icon: '🖼️', front: "Картинка пропала ¦ Rasm yo'qoldi ¦ A picture is missing", back: "Файл не загрузился. ¦ Fayl yuklanmadi. ¦ The file didn't load." },
        { icon: '🔘', front: "Кнопка не нажимается ¦ Tugma bosilmaydi ¦ A button doesn't work", back: "Нажимаешь — ничего не происходит. ¦ Bosasan — hech narsa bo'lmaydi. ¦ You tap — nothing happens." },
      ],
      notes: { min: 6 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: найди ошибку ¦ O'zing bajar: xatoni top ¦ Your turn: find the bug",
      chat: "номер ответа в чат ¦ javob raqamini chatga ¦ answer number in the chat",
      goal: "Ты настоящий тестировщик! ¦ Sen haqiqiy testersan! ¦ You're a real tester!",
      items: [
        { title: "Что лишнее: 🍎 🍎 🍐 🍎 ¦ Nima ortiqcha: 🍎 🍎 🍐 🍎 ¦ What's different: 🍎 🍎 🍐 🍎", choices: ["Второе ¦ Ikkinchisi ¦ The 2nd", "Третье ¦ Uchinchisi ¦ The 3rd"], correct: 1, explain: "Груша среди яблок. ¦ Olmalar orasida nok. ¦ A pear among apples." },
        { title: "Где опечатка: «ИГРАТЬ», «НАСТРОЙКИ», «ВЫХДО»? ¦ Imlo xatosi qayerda: «O'YNASH», «SOZLAMALAR», «CHIQSIH»? ¦ Where's the typo: “PLAY”, “SETTINGS”, “EIXT”?", choices: ["В первой кнопке ¦ Birinchi tugmada ¦ Button 1", "В третьей кнопке ¦ Uchinchi tugmada ¦ Button 3"], correct: 1, explain: "Буквы переставлены местами. ¦ Harflar o'rni almashgan. ¦ Two letters are swapped." },
        { title: "Как искать отличия лучше? ¦ Farqlarni qanday qilib yaxshiroq qidirish kerak? ¦ What's the better way to search?", choices: ["По порядку, клетку за клеткой ¦ Tartib bilan, katakma-katak ¦ In order, cell by cell", "Смотреть куда попало ¦ Duch kelgan joyga qarash ¦ Look anywhere"], correct: 0, explain: "Так ничего не пропустишь. ¦ Shunda hech narsani o'tkazib yubormaysan. ¦ That way you miss nothing." },
      ],
      notes: { min: 5 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: внимание — суперсила ¦ Xulosa: diqqat — super kuch ¦ Wrap-up: attention is a superpower",
      chat: "сколько отличий ты нашёл сегодня всего? ¦ bugun jami nechta farq topding? ¦ how many differences did you find today?",
      answer: "Тестировщик ищет ошибки в играх и сайтах раньше пользователей. Главный приём — проверять по порядку: слева направо, сверху вниз, клетку за клеткой. Так внимание не прыгает, и ничего не теряется. ¦ Tester o'yin va saytlardagi xatolarni foydalanuvchilardan oldin topadi. Asosiy usul — tartib bilan tekshirish: chapdan o'ngga, yuqoridan pastga, katakma-katak. Shunda diqqat sakramaydi va hech narsa yo'qolmaydi. ¦ A tester finds bugs in games and sites before users do. The main trick is checking in order: left to right, top to bottom, cell by cell. Your attention doesn't jump, and nothing gets lost.",
      icon: '🐞',
      badge: "Охотник за багами ¦ Bag ovchisi ¦ Bug hunter",
      badgeSub: kick('comp', 'g', 3),
      homeworkTitle: HOME,
      homework: [
        "Нарисуй две картинки с тремя отличиями и загадай их родным. ¦ Uchta farqli ikki rasm chiz va yaqinlaringga topishmoq qilib ber. ¦ Draw two pictures with three differences and test your family.",
        "Нужны: бумага и карандаш. ¦ Kerak: qog'oz va qalam. ¦ You need: paper and a pencil.",
      ],
      notes: { min: 3 },
    },
  ],
});
