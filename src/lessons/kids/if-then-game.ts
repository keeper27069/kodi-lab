import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

export default kit({
  id: 'kids-t20',
  title: "Если… то…: придумываем правила своей игры ¦ Agar… unda…: o'z o'yinimiz qoidalarini o'ylab topamiz ¦ If… then…: inventing rules for our own game",
  question: "Какое правило подходит для любого броска кубика? ¦ Qaysi qoida kubikning har qanday tashlanishiga mos keladi? ¦ What rule works for every roll of the dice?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🎲',
      kicker: kick('algo', 't', 4),
      title: "Правила, которые решают ¦ Hal qiladigan qoidalar ¦ Rules that decide",
      chat: "какая твоя любимая настольная игра? ¦ sevimli stol o'yining qaysi? ¦ what's your favourite board game?",
      lead: "Светофор работает по правилу: если красный — стоим, если зелёный — идём. Это условие «если… то…». Сегодня придумаем правила своей игры с кубиком и проверим, нет ли в них дыр. ¦ Svetofor qoida bo'yicha ishlaydi: qizil bo'lsa — turamiz, yashil bo'lsa — yuramiz. Bu «agar… unda…» sharti. Bugun kubikli o'yinimiz qoidalarini o'ylab topamiz va ularda teshik yo'qligini tekshiramiz. ¦ Traffic lights follow a rule: if red, stop; if green, go. That's an “if… then…” condition. Today we invent rules for a dice game and check them for holes.",
      facts: [
        "Повторяем уроки 20–23 ¦ 20–23-darslarni takrorlaymiz ¦ We revise lessons 20–23",
        "Нужны: кубик и бумага ¦ Kerak: kubik va qog'oz ¦ You need: a dice and paper",
      ],
      notes: { min: 3 },
    },
    {
      type: 'cards',
      stage: 1,
      title: "Светофор — правило «если… то…» ¦ Svetofor — «agar… unda…» qoidasi ¦ Traffic lights: an “if… then…” rule",
      chat: "что делать, если жёлтый? ¦ sariq bo'lsa nima qilish kerak? ¦ what do you do on yellow?",
      cards: [
        { icon: '🔴', front: "Если красный… ¦ Agar qizil bo'lsa… ¦ If red…", back: "…то стоим ¦ …unda turamiz ¦ …then stop" },
        { icon: '🟡', front: "Если жёлтый… ¦ Agar sariq bo'lsa… ¦ If yellow…", back: "…то ждём и готовимся ¦ …unda kutamiz va tayyorlanamiz ¦ …then wait and get ready" },
        { icon: '🟢', front: "Если зелёный… ¦ Agar yashil bo'lsa… ¦ If green…", back: "…то идём, посмотрев по сторонам ¦ …unda atrofga qarab, yuramiz ¦ …then go, after looking both ways" },
      ],
      takeaway: "Правило покрывает все три цвета — ни один случай не забыт. ¦ Qoida uchala rangni qamraydi — birorta holat unutilmagan. ¦ The rule covers all three colours — no case is forgotten.",
      notes: { min: 6 },
    },
    {
      type: 'poll',
      stage: 2,
      title: "Правило: «Если выпало 6 — ещё ход. Если выпало 1 — пропускаешь ход». Что будет при 4? ¦ Qoida: «6 tushsa — yana yurish. 1 tushsa — yurishni o'tkazib yuborasan». 4 tushsa nima bo'ladi? ¦ Rule: “If you roll 6, go again. If you roll 1, miss a turn.” What happens on a 4?",
      chat: "пиши номер ¦ raqamini yoz ¦ write the number",
      options: [
        { label: "1 · Ещё ход ¦ 1 · Yana yurish ¦ 1 · Go again" },
        { label: "2 · Пропуск ¦ 2 · O'tkazib yuborish ¦ 2 · Miss a turn" },
        { label: "3 · Правило ничего не говорит! ¦ 3 · Qoida hech narsa demaydi! ¦ 3 · The rule doesn't say!" },
      ],
      correct: 2,
      result: "Дыра в правиле! Для 2, 3, 4 и 5 ничего не сказано. Нужно «иначе»: «иначе — идёшь вперёд на столько клеток, сколько выпало». ¦ Qoidada teshik! 2, 3, 4 va 5 uchun hech narsa aytilmagan. «Aks holda» kerak: «aks holda — tushgan son qadar oldinga yurasan». ¦ A hole in the rule! It says nothing about 2, 3, 4 or 5. We need an “else”: “else, move forward as many squares as you rolled.”",
      notes: { say: ['Ведущий играет по правилам чата и ищет случай, который правило не покрывает.'], min: 7 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: правило без дыр ¦ O'zing bajar: teshiksiz qoida ¦ Your turn: a rule with no holes",
      chat: "пиши своё правило «если… иначе…» ¦ o'z «agar… aks holda…» qoidangni yoz ¦ write your own “if… else…” rule",
      goal: "Твои правила работают для любого случая! ¦ Qoidalaring har qanday holatda ishlaydi! ¦ Your rules work in every case!",
      items: [
        { title: "Какое правило покрывает все броски? ¦ Qaysi qoida barcha tashlashlarni qamraydi? ¦ Which rule covers every roll?", choices: ["«Если 6 — ещё ход, иначе — иди вперёд» ¦ «6 bo'lsa — yana yurish, aks holda — oldinga yur» ¦ “If 6, go again, else move forward”", "«Если 6 — ещё ход» ¦ «6 bo'lsa — yana yurish» ¦ “If 6, go again”"], correct: 0, explain: "«Иначе» ловит все остальные числа. ¦ «Aks holda» qolgan barcha sonlarni ushlaydi. ¦ “Else” catches every other number." },
        { title: "Если идёт дождь — берём зонт, иначе… ¦ Yomg'ir yog'sa — soyabon olamiz, aks holda… ¦ If it rains, take an umbrella, else…", choices: ["…выходим без зонта ¦ …soyabonsiz chiqamiz ¦ …go out without one", "…ничего не известно ¦ …hech narsa ma'lum emas ¦ …nobody knows"], correct: 0, explain: "Теперь у правила есть ответ для любой погоды. ¦ Endi qoidada har qanday ob-havo uchun javob bor. ¦ Now the rule has an answer for any weather." },
      ],
      notes: { min: 9 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: «если… то… иначе…» ¦ Xulosa: «agar… unda… aks holda…» ¦ Wrap-up: “if… then… else…”",
      chat: "какое правило ты добавишь в свою игру? ¦ o'yiningga qanday qoida qo'shasan? ¦ what rule will you add to your game?",
      answer: "Условие «если… то…» выбирает действие: если красный — стоим, если 6 — ещё ход. Но правило должно покрывать все случаи. Если забыть «иначе», для некоторых бросков ничего не сказано — это дыра. «Иначе» ловит всё остальное, и тогда игра работает при любом броске. ¦ «Agar… unda…» sharti harakatni tanlaydi: qizil bo'lsa — turamiz, 6 bo'lsa — yana yurish. Lekin qoida barcha holatlarni qamrashi kerak. «Aks holda»ni unutsak, ba'zi tashlashlar uchun hech narsa aytilmaydi — bu teshik. «Aks holda» qolgan hammasini ushlaydi va shunda o'yin har qanday tashlashda ishlaydi. ¦ An “if… then…” condition chooses an action: if red, stop; if 6, go again. But a rule must cover every case. Forget the “else” and some rolls have no answer — that's a hole. “Else” catches everything else, so the game works on any roll.",
      icon: '🎲',
      badge: "Создатель игр ¦ O'yin yaratuvchisi ¦ Game designer",
      badgeSub: kick('algo', 't', 4),
      homeworkTitle: HOME,
      homework: [
        "Придумай игру с кубиком, запиши правила «если… иначе…» и сыграй с родными. ¦ Kubikli o'yin o'ylab top, «agar… aks holda…» qoidalarini yoz va yaqinlaring bilan o'yna. ¦ Invent a dice game, write its “if… else…” rules and play it with your family.",
        "Нужны: кубик и бумага. ¦ Kerak: kubik va qog'oz. ¦ You need: a dice and paper.",
      ],
      notes: { min: 5 },
    },
  ],
});
