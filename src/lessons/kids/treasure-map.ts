import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

// 6×6 map: columns A–F, rows 1–6 (row 1 at the bottom)
const COLS = 'ABCDEF';
const CSS = `.wrap{display:grid;place-items:center;height:100%;font-family:Inter,system-ui,sans-serif}
.map{display:grid;grid-template-columns:40px repeat(6,70px);grid-template-rows:repeat(6,70px) 40px;gap:4px}
.m{border-radius:10px;background:#e9fbf2;border:2px solid #bfe9d3;display:grid;place-items:center;font-size:40px}
.m.p{background:#fff1ec;border-color:#fa4f28}
.l{display:grid;place-items:center;font:800 22px Inter;color:#6b7280}`;
const cellId = (c: number, r: number) => `${COLS[c]}${r}`;
const map = (marks: Record<string, string>, path: string[] = []) => {
  let h = '';
  for (let r = 6; r >= 1; r--) {
    h += `<div class="l">${r}</div>`;
    for (let c = 0; c < 6; c++) {
      const id = cellId(c, r);
      h += `<div class="m ${path.includes(id) ? 'p' : ''}">${marks[id] ?? ''}</div>`;
    }
  }
  h += `<div></div>${COLS.split('').map((c) => `<div class="l">${c}</div>`).join('')}`;
  return `<div class="wrap"><div class="map">${h}</div></div>`;
};

export default kit({
  id: 'kids-t13',
  title: "Клад на клетчатой карте ¦ Katakli xaritadagi xazina ¦ Treasure on a grid map",
  question: "Где спрятан клад, если каждая команда двигает нас по карте? ¦ Har bir buyruq bizni xaritada siljitsa, xazina qayerda yashiringan? ¦ Where's the treasure if every command moves us across the map?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🗺️',
      kicker: kick('logic', 't', 5),
      title: "Карта пирата ¦ Qaroqchi xaritasi ¦ The pirate's map",
      chat: "что бы ты спрятал в клад? одно слово ¦ xazinaga nima yashirarding? bitta so'z ¦ what would you hide as treasure? one word",
      lead: "У каждой клетки карты есть адрес: буква столбца и номер строки, например B2. Пират оставил старт и правило: «1 клетка вправо, 2 вверх». Пройдём по нему и найдём клад! ¦ Xaritaning har bir katagida manzil bor: ustun harfi va qator raqami, masalan B2. Qaroqchi start va qoidani qoldirgan: «1 katak o'ngga, 2 ta yuqoriga». Shu bo'yicha yurib, xazinani topamiz! ¦ Every square on the map has an address: a column letter and a row number, like B2. The pirate left a start and a rule: “1 right, 2 up.” Let's follow it and find the treasure!",
      facts: [
        "Повторяем уроки 13–14 ¦ 13–14-darslarni takrorlaymiz ¦ We revise lessons 13–14",
        "Нужен лист в клетку ¦ Katakli varaq kerak ¦ You need squared paper",
      ],
      notes: { min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Старт B2, правило «→1, ↑2» дважды ¦ Start B2, «→1, ↑2» qoidasi ikki marta ¦ Start at B2, rule “→1, ↑2” twice",
      chat: "в какой клетке финиш? пиши адрес ¦ marra qaysi katakda? manzilni yoz ¦ which square is the finish? write its address",
      lang: 'text',
      css: CSS,
      steps: [
        { code: 'start B2', html: map({ B2: '🚩' }, ['B2']), say: "Старт — клетка B2. ¦ Start — B2 katak. ¦ Start: square B2." },
        { code: 'B2 → C4', html: map({ B2: '🚩', C4: '👣' }, ['B2', 'C4']), say: "Шаг 1: на 1 вправо — C, на 2 вверх — 4. Мы в C4. ¦ 1-qadam: 1 ta o'ngga — C, 2 ta yuqoriga — 4. Biz C4 damiz. ¦ Step 1: one right is C, two up is 4. We're at C4." },
        { code: 'C4 → D6', html: map({ B2: '🚩', C4: '👣', D6: '💰' }, ['B2', 'C4', 'D6']), say: "Шаг 2: ещё раз — D6. Клад здесь! ¦ 2-qadam: yana bir marta — D6. Xazina shu yerda! ¦ Step 2: once more — D6. The treasure is here!" },
      ],
      notes: { min: 8 },
    },
    {
      type: 'show',
      stage: 2,
      title: "Обратный ход: найди старт ¦ Teskari yurish: startni top ¦ Going backwards: find the start",
      chat: "где был старт? пиши адрес ¦ start qayerda edi? manzilni yoz ¦ where was the start? write its address",
      lang: 'text',
      css: CSS,
      steps: [
        { code: 'finish E5, rule →1 ↑2', html: map({ E5: '💰' }, ['E5']), say: "Клад в E5. Пират сделал один шаг «→1, ↑2». Откуда он вышел? ¦ Xazina E5 da. Qaroqchi bitta «→1, ↑2» qadam qilgan. U qayerdan chiqqan? ¦ The treasure is at E5. The pirate made one “→1, ↑2” move. Where did he start?" },
        { code: 'E5 → D3', html: map({ E5: '💰', D3: '🚩' }, ['E5', 'D3']), say: "Делаем всё наоборот: 1 влево, 2 вниз. Старт — D3! ¦ Hammasini teskarisiga qilamiz: 1 ta chapga, 2 ta pastga. Start — D3! ¦ Do everything in reverse: one left, two down. The start was D3!" },
      ],
      takeaway: "Чтобы идти назад, меняем каждое действие на противоположное. ¦ Orqaga yurish uchun har bir harakatni teskarisiga almashtiramiz. ¦ To go backwards, reverse every move.",
      notes: { min: 7 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: новый клад ¦ O'zing bajar: yangi xazina ¦ Your turn: a new treasure",
      chat: "пиши адрес клетки ¦ katak manzilini yoz ¦ write the square's address",
      goal: "Ты нашёл все клады! ¦ Barcha xazinalarni topding! ¦ You found every treasure!",
      items: [
        { title: "Старт A1, правило «→2, ↑1». Где ты после одного шага? ¦ Start A1, qoida «→2, ↑1». Bir qadamdan keyin qayerdasan? ¦ Start A1, rule “→2, ↑1”. Where are you after one move?", choices: ['C2', 'B3'], correct: 0, explain: "A → C, 1 → 2 ¦ A → C, 1 → 2 ¦ A → C, 1 → 2" },
        { title: "Клад в F4 после шага «→1, ↑1». Где старт? ¦ «→1, ↑1» qadamidan keyin xazina F4 da. Start qayerda? ¦ Treasure at F4 after “→1, ↑1”. Where's the start?", choices: ['E3', 'F5'], correct: 0, explain: "Назад: 1 влево, 1 вниз. ¦ Orqaga: 1 ta chapga, 1 ta pastga. ¦ Back: one left, one down." },
      ],
      notes: { min: 8 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: адрес клетки и обратный ход ¦ Xulosa: katak manzili va teskari yurish ¦ Wrap-up: square addresses and going back",
      chat: "какое правило придумаешь для своей карты? ¦ xaritang uchun qanday qoida o'ylab topasan? ¦ what rule will you invent for your map?",
      answer: "У каждой клетки есть адрес: буква и цифра. Правило «1 вправо, 2 вверх» превращает B2 в C4, а C4 — в D6, где спрятан клад. Чтобы найти старт по финишу, делаем всё наоборот: влево и вниз. ¦ Har bir katakning manzili bor: harf va raqam. «1 ta o'ngga, 2 ta yuqoriga» qoidasi B2 ni C4 ga, C4 ni esa xazina yashiringan D6 ga aylantiradi. Marradan startni topish uchun hammasini teskari qilamiz: chapga va pastga. ¦ Every square has an address: a letter and a number. The rule “1 right, 2 up” turns B2 into C4 and C4 into D6, where the treasure is. To find the start from the finish, reverse it: left and down.",
      icon: '💰',
      badge: "Искатель кладов ¦ Xazina izlovchi ¦ Treasure hunter",
      badgeSub: kick('logic', 't', 5),
      homeworkTitle: HOME,
      homework: [
        "Нарисуй карту 6×6, спрячь клад и запиши старт и правило для родных. ¦ 6×6 xarita chiz, xazinani yashir va yaqinlaring uchun start va qoidani yoz. ¦ Draw a 6×6 map, hide a treasure and write the start and rule for your family.",
        "Нужен: лист в клетку. ¦ Kerak: katakli varaq. ¦ You need: squared paper.",
      ],
      notes: { min: 4 },
    },
  ],
});
