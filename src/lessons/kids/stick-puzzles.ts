import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

// Seven-segment "stick" digits: a top, b top-right, c bottom-right, d bottom, e bottom-left, f top-left, g middle
const SEG: Record<string, string> = { '0': 'abcdef', '2': 'abdeg', '3': 'abcdg', '4': 'bcfg', '5': 'acdfg', '6': 'acdefg' };
const POS: Record<string, string> = {
  a: 'M10 4 H50', b: 'M54 8 V48', c: 'M54 56 V96', d: 'M10 100 H50', e: 'M6 56 V96', f: 'M6 8 V48', g: 'M10 52 H50',
};
const digit = (segs: string, x: number, moved = '', from = '') =>
  `<g transform="translate(${x} 0)">${'abcdefg'
    .split('')
    .map((s) => {
      if (s === from) return `<path d="${POS[s]}" stroke="#d80000" stroke-width="9" stroke-linecap="round" stroke-dasharray="4 10" fill="none"/>`;
      if (!segs.includes(s) && s !== moved) return '';
      const col = s === moved ? '#0cd678' : '#c46a1b';
      return `<path d="${POS[s]}" stroke="${col}" stroke-width="9" stroke-linecap="round" fill="none"/><circle cx="${POS[s].split(' ')[0].slice(1)}" cy="${POS[s].split(' ')[1]}" r="6" fill="#d80000"/>`;
    })
    .join('')}</g>`;
const plus = (x: number) => `<g transform="translate(${x} 0)" stroke="#c46a1b" stroke-width="9" stroke-linecap="round"><path d="M10 52 H50"/><path d="M30 32 V72"/></g>`;
const eq = (x: number) => `<g transform="translate(${x} 0)" stroke="#c46a1b" stroke-width="9" stroke-linecap="round"><path d="M10 40 H50"/><path d="M10 64 H50"/></g>`;
const CSS = `.wrap{display:grid;place-items:center;height:100%;font-family:Inter,system-ui,sans-serif}`;
const sum = (a: string, b: string, c: string, moveA = '', fromA = '') =>
  `<div class="wrap"><svg viewBox="-10 -10 440 130" width="620">${digit(a, 0, moveA, fromA)}${plus(80)}${digit(SEG[b], 160)}${eq(240)}${digit(SEG[c], 320)}</svg></div>`;

export default kit({
  id: 'kids-t16',
  title: "Палочки-головоломки: переложи одну ¦ Cho'p boshqotirmalar: bittasini ko'chir ¦ Stick puzzles: move just one",
  question: "Можно ли исправить неверное равенство одной палочкой? ¦ Noto'g'ri tenglikni bitta cho'p bilan tuzatsa bo'ladimi? ¦ Can you fix a wrong sum by moving one stick?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🥢',
      kicker: kick('logic', 't', 8),
      title: "Цифры из палочек ¦ Cho'plardan raqamlar ¦ Digits made of sticks",
      chat: "сколько палочек нужно для цифры 8? число ¦ 8 raqami uchun nechta cho'p kerak? son ¦ how many sticks make the digit 8? a number",
      lead: "Любую цифру можно выложить из счётных палочек, как на электронных часах. Сегодня равенства написаны с ошибкой. Исправить можно только одним движением — переложив одну палочку. ¦ Har qanday raqamni elektron soatdagidek sanoq cho'plaridan terish mumkin. Bugun tengliklar xato bilan yozilgan. Ularni faqat bitta harakat bilan — bitta cho'pni ko'chirib tuzatish mumkin. ¦ Any digit can be laid out with counting sticks, like on a digital clock. Today the sums have mistakes. You can fix them with one move — by moving a single stick.",
      facts: [
        "Повторяем урок 22 «Какой способ подходит» ¦ 22-dars «Qaysi usul mos»ni takrorlaymiz ¦ We revise lesson 22 “Which method fits”",
        "Используем счётные палочки, не спички ¦ Gugurt emas, sanoq cho'plaridan foydalanamiz ¦ We use counting sticks, not matches",
      ],
      notes: { say: ['Спички не используем — только счётные палочки.'], min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "6 + 4 = 4 — неверно. Переложи одну палочку ¦ 6 + 4 = 4 — noto'g'ri. Bitta cho'pni ko'chir ¦ 6 + 4 = 4 is wrong. Move one stick",
      chat: "какую цифру ты бы поменял? ¦ qaysi raqamni o'zgartirarding? ¦ which digit would you change?",
      lang: 'text',
      css: CSS,
      steps: [
        { code: '6 + 4 = 4 ✗', html: sum(SEG['6'], '4', '4'), say: "Шесть плюс четыре — не четыре. Что изменить, чтобы стало верно? ¦ Olti qo'shuv to'rt — to'rt emas. To'g'ri bo'lishi uchun nimani o'zgartirish kerak? ¦ Six plus four isn't four. What can we change to make it true?" },
        { code: '6 → 0', html: sum(SEG['6'], '4', '4', 'b', 'g'), say: "Берём среднюю палочку у шестёрки и ставим её справа вверху — получается ноль! ¦ Oltilikning o'rta cho'pini olamiz va uni o'ng yuqoriga qo'yamiz — nol hosil bo'ladi! ¦ Take the middle stick of the 6 and put it top right — it becomes a 0!" },
        { code: '0 + 4 = 4 ✓', html: sum(SEG['0'], '4', '4'), say: "0 + 4 = 4. Верно, и мы переложили всего одну палочку! ¦ 0 + 4 = 4. To'g'ri, va biz faqat bitta cho'pni ko'chirdik! ¦ 0 + 4 = 4. Correct — and we moved just one stick!" },
      ],
      notes: { min: 8 },
    },
    {
      type: 'compare',
      stage: 2,
      title: "Как искать решение ¦ Yechimni qanday qidirish kerak ¦ How to search for the answer",
      chat: "какой способ тебе удобнее? «перебор» или «проба» ¦ qaysi usul senga qulay? «saralash» yoki «sinash» ¦ which method suits you? “try all” or “test small”",
      left: { label: "Перебор ¦ Saralash ¦ Try them all", icon: '🔁', points: ["Пробуем каждую палочку по очереди ¦ Har bir cho'pni navbat bilan sinaymiz ¦ Try each stick in turn", "Надёжно, но долго ¦ Ishonchli, lekin uzoq ¦ Reliable but slow"] },
      right: { label: "Рисунок и проба ¦ Rasm va sinash ¦ Draw and test", icon: '✏️', points: ["Рисуем, какой цифрой может стать каждая ¦ Har biri qaysi raqamga aylanishi mumkinligini chizamiz ¦ Sketch what each digit could become", "6 → 0, 3 → 2, 9 → 6… ¦ 6 → 0, 3 → 2, 9 → 6… ¦ 6 → 0, 3 → 2, 9 → 6…"] },
      verdict: "Сначала думаем, какой способ подходит, — так решаем быстрее. ¦ Avval qaysi usul mosligini o'ylaymiz — shunda tezroq yechamiz. ¦ First pick the method that fits — then you solve faster.",
      notes: { min: 5 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: 3 + 3 = 5 ¦ O'zing bajar: 3 + 3 = 5 ¦ Your turn: 3 + 3 = 5",
      chat: "пиши, какую цифру получил ¦ qaysi raqamni olganingni yoz ¦ write which digit you made",
      goal: "Ты исправляешь равенства одним движением! ¦ Tengliklarni bitta harakat bilan tuzatasan! ¦ You fix sums with one move!",
      items: [
        { title: "Какую тройку меняем? ¦ Qaysi uchlikni o'zgartiramiz? ¦ Which 3 do we change?", choices: ["Первую: 3 → 2 ¦ Birinchisini: 3 → 2 ¦ The first: 3 → 2", "Пятёрку: 5 → 6 ¦ Beshlikni: 5 → 6 ¦ The 5: 5 → 6"], correct: 0, explain: "Палочка справа снизу у тройки уходит налево вниз: 2 + 3 = 5. ¦ Uchlikning o'ng pastki cho'pi chap pastga o'tadi: 2 + 3 = 5. ¦ The 3's bottom-right stick moves bottom-left: 2 + 3 = 5." },
        { title: "Сколько палочек можно переложить? ¦ Nechta cho'pni ko'chirish mumkin? ¦ How many sticks may you move?", choices: ["Одну ¦ Bitta ¦ One", "Сколько хочешь ¦ Xohlagancha ¦ As many as you like"], correct: 0, explain: "Таково правило головоломки. ¦ Boshqotirma qoidasi shunday. ¦ That's the puzzle's rule." },
      ],
      notes: { min: 10 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: одно движение — верный ответ ¦ Xulosa: bitta harakat — to'g'ri javob ¦ Wrap-up: one move, the right answer",
      chat: "какую головоломку из палочек ты загадаешь? ¦ qanday cho'p boshqotirmasini top deb berasan? ¦ which stick puzzle will you set?",
      answer: "Цифры из палочек можно превращать друг в друга, переложив одну палочку: 6 становится 0, а 3 становится 2. Так 6 + 4 = 4 превращается в 0 + 4 = 4, а 3 + 3 = 5 — в 2 + 3 = 5. Сначала выбираем способ: перебор или рисунок, — и проверяем ответ. ¦ Cho'plardan qilingan raqamlarni bitta cho'pni ko'chirib bir-biriga aylantirish mumkin: 6 nolga, 3 esa 2 ga aylanadi. Shunday qilib 6 + 4 = 4 0 + 4 = 4 ga, 3 + 3 = 5 esa 2 + 3 = 5 ga aylanadi. Avval usulni tanlaymiz: saralash yoki rasm — va javobni tekshiramiz. ¦ Stick digits turn into one another when you move one stick: 6 becomes 0 and 3 becomes 2. So 6 + 4 = 4 becomes 0 + 4 = 4, and 3 + 3 = 5 becomes 2 + 3 = 5. Pick a method — trying all or sketching — and check the answer.",
      icon: '🥢',
      badge: "Мастер палочек ¦ Cho'plar ustasi ¦ Stick master",
      badgeSub: kick('logic', 't', 8),
      homeworkTitle: HOME,
      homework: [
        "Выложи из палочек неверное равенство, которое чинится одной палочкой, и загадай родным. ¦ Cho'plardan bitta cho'p bilan tuzaladigan noto'g'ri tenglik ter va yaqinlaringga top deb ber. ¦ Lay out a wrong sum that one stick can fix and challenge your family.",
        "Нужны: счётные палочки. ¦ Kerak: sanoq cho'plari. ¦ You need: counting sticks.",
      ],
      notes: { min: 4 },
    },
  ],
});
