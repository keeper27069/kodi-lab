import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

const LONG = `👏
🦶
🙌
👏
🦶
🙌
👏
🦶
🙌`;
const LOOP = `повтори 3:
  👏
  🦶
  🙌 ¦ 3 marta takrorla:
  👏
  🦶
  🙌 ¦ repeat 3:
  👏
  🦶
  🙌`;
const CSS = `.wrap{display:grid;place-items:center;height:100%;font-family:Inter,system-ui,sans-serif}
.dance{display:flex;gap:18px}
.dance span{display:grid;place-items:center;width:120px;height:120px;border-radius:20px;background:#fff;border:3px solid #e1e4ea;font-size:64px}
.dance span.on{border-color:#fa4f28;background:#fff1ec}
.n{margin-top:16px;text-align:center;font:800 30px Inter}`;
const moves = (on: number, round: number) =>
  `<div class="wrap"><div><div class="dance">${['👏', '🦶', '🙌'].map((m, i) => `<span class="${i === on ? 'on' : ''}">${m}</span>`).join('')}</div><div class="n">${round} / 3</div></div></div>`;

export default kit({
  id: 'kids-t19',
  title: "Танец по алгоритму: повтори 3 раза ¦ Algoritm bo'yicha raqs: 3 marta takrorla ¦ A dance by algorithm: repeat 3 times",
  question: "Как записать длинный танец короче? ¦ Uzun raqsni qanday qisqaroq yozish mumkin? ¦ How do you write a long dance more briefly?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '💃',
      kicker: kick('algo', 't', 3),
      title: "Танцуем по командам ¦ Buyruqlar bo'yicha raqsga tushamiz ¦ Dancing to commands",
      chat: "любишь танцевать? 💃 или 🙈 ¦ raqsga tushishni yaxshi ko'rasanmi? 💃 yoki 🙈 ¦ do you like dancing? 💃 or 🙈",
      lead: "Танец — это тоже алгоритм: хлопок, шаг на месте, руки вверх. А если повторить это три раза? Можно написать 9 строк… или одну команду «повтори 3 раза». Это и есть цикл! ¦ Raqs ham algoritm: qarsak, joyida qadam, qo'llar yuqoriga. Buni uch marta takrorlasak-chi? 9 qator yozish mumkin… yoki bitta «3 marta takrorla» buyrug'ini. Mana shu sikl! ¦ A dance is an algorithm too: clap, step on the spot, hands up. What about doing it three times? You could write 9 lines… or one command: “repeat 3 times”. That's a loop!",
      facts: [
        "Повторяем уроки 10–12 ¦ 10–12-darslarni takrorlaymiz ¦ We revise lessons 10–12",
        "Танцуем сидя или стоя, без прыжков ¦ O'tirib yoki turib, sakramasdan raqsga tushamiz ¦ Dance sitting or standing, no jumping",
      ],
      notes: { say: ['Можно выполнять только руками, если детям неудобно вставать. Без прыжков и поворотов.'], min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Танцуем вместе! ¦ Birga raqsga tushamiz! ¦ Let's dance together!",
      chat: "сколько раз повторили? число ¦ necha marta takrorladik? son ¦ how many times did we repeat? a number",
      lang: 'text',
      css: CSS,
      steps: [
        { code: '👏', html: moves(0, 1), say: "Хлопок! ¦ Qarsak! ¦ Clap!" },
        { code: '🦶', html: moves(1, 1), say: "Шаг на месте! ¦ Joyida qadam! ¦ Step on the spot!" },
        { code: '🙌', html: moves(2, 1), say: "Руки вверх! Это один круг. ¦ Qo'llar yuqoriga! Bu bir aylana. ¦ Hands up! That's one round." },
        { code: '🔁 2', html: moves(2, 2), say: "Ещё раз: хлопок, шаг, руки вверх — второй круг. ¦ Yana bir marta: qarsak, qadam, qo'llar yuqoriga — ikkinchi aylana. ¦ Again: clap, step, hands up — round two." },
        { code: '🔁 3 ✓', html: moves(2, 3), say: "И третий! Танец окончен. ¦ Va uchinchisi! Raqs tugadi. ¦ And round three! The dance is done." },
      ],
      notes: { min: 6 },
    },
    {
      type: 'compare',
      stage: 2,
      title: "9 строк или 4? ¦ 9 qatormi yoki 4? ¦ 9 lines or 4?",
      chat: "какая запись удобнее? «длинная» или «цикл» ¦ qaysi yozuv qulayroq? «uzun» yoki «sikl» ¦ which is handier? “long” or “loop”",
      left: { label: "Длинный список ¦ Uzun ro'yxat ¦ Long list", icon: '📜', code: LONG, lang: 'text' },
      right: { label: "Блок повторения ¦ Takrorlash bloki ¦ Repeat block", icon: '🔁', code: LOOP, lang: 'text' },
      verdict: "Результат один и тот же, а запись короче и понятнее. ¦ Natija bir xil, yozuv esa qisqaroq va tushunarliroq. ¦ Same result, shorter and clearer to read.",
      notes: { min: 7 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: сократи цепочку ¦ O'zing bajar: zanjirni qisqartir ¦ Your turn: shorten the chain",
      chat: "пиши блок и число повторов: «👏🦶 × 4» ¦ blok va takrorlar sonini yoz: «👏🦶 × 4» ¦ write the block and repeats: “👏🦶 × 4”",
      goal: "Ты умеешь писать циклы! ¦ Sikllar yoza olasan! ¦ You can write loops!",
      items: [
        { title: "👏🦶👏🦶👏🦶👏🦶 — как записать короче? ¦ 👏🦶👏🦶👏🦶👏🦶 — qanday qisqaroq yozish mumkin? ¦ 👏🦶👏🦶👏🦶👏🦶 — how do you write it shorter?", choices: ["повтори 4: 👏🦶 ¦ 4 marta takrorla: 👏🦶 ¦ repeat 4: 👏🦶", "повтори 8: 👏🦶 ¦ 8 marta takrorla: 👏🦶 ¦ repeat 8: 👏🦶"], correct: 0, explain: "Блок «👏🦶» встречается 4 раза. ¦ «👏🦶» bloki 4 marta uchraydi. ¦ The block “👏🦶” appears 4 times." },
        { title: "Что повторяется в «🙌🙌🙌🙌🙌»? ¦ «🙌🙌🙌🙌🙌»da nima takrorlanadi? ¦ What repeats in “🙌🙌🙌🙌🙌”?", choices: ["🙌 × 5", "🙌 × 3"], correct: 0, explain: "Пять раз руки вверх. ¦ Besh marta qo'llar yuqoriga. ¦ Hands up five times." },
      ],
      notes: { min: 9 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: цикл = блок × повторы ¦ Xulosa: sikl = blok × takror ¦ Wrap-up: loop = block × repeats",
      chat: "придумай свой танец-цикл смайликами ¦ smayliklar bilan o'z raqs-siklingni o'ylab top ¦ make up your own loop dance with emojis",
      answer: "Когда команды повторяются, их не нужно писать много раз. Находим блок, который повторяется, — «хлопок, шаг, руки вверх», — и пишем «повтори 3 раза». Результат тот же, а программа короче. Такой блок программисты называют циклом. ¦ Buyruqlar takrorlansa, ularni ko'p marta yozish shart emas. Takrorlanadigan blokni topamiz — «qarsak, qadam, qo'llar yuqoriga» — va «3 marta takrorla» deb yozamiz. Natija bir xil, dastur esa qisqaroq. Bunday blokni dasturchilar sikl deb atashadi. ¦ When commands repeat, you don't need to write them over and over. Find the repeating block — “clap, step, hands up” — and write “repeat 3 times”. Same result, shorter program. Programmers call this a loop.",
      icon: '🔁',
      badge: "Мастер циклов ¦ Sikl ustasi ¦ Loop master",
      badgeSub: kick('algo', 't', 3),
      homeworkTitle: HOME,
      homework: [
        "Придумай танец-цикл из трёх движений, запиши его блоком и станцуй с родными. ¦ Uchta harakatdan raqs-sikl o'ylab top, uni blok bilan yoz va yaqinlaring bilan raqsga tush. ¦ Invent a three-move loop dance, write it as a block and dance it with your family.",
        "Нужно: свободное место или стул. ¦ Kerak: bo'sh joy yoki stul. ¦ You need: some space or a chair.",
      ],
      notes: { min: 5 },
    },
  ],
});
