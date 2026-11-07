import { kit } from '@engine/kit';
import { HOME, ROUTE, kick, tri } from './_kids';

// [ru, uz, en, minutes, colour, start in the parallel plan]
type Step = [string, string, string, number, string, number];
const STEPS: Step[] = [
  ['🍚 Замочить рис', '🍚 Guruchni ivitish', '🍚 Soak the rice', 30, '#5b6ef5', 0],
  ['🔪 Нарезать морковь и лук', "🔪 Sabzi va piyozni to'g'rash", '🔪 Chop carrots and onions', 20, '#ffb000', 0],
  ['🥩 Обжарить мясо и овощи', "🥩 Go'sht va sabzavotni qovurish", '🥩 Fry meat and vegetables', 25, '#fa4f28', 20],
  ['🍲 Положить рис и варить', "🍲 Guruchni solib pishirish", '🍲 Add rice and cook', 30, '#0cd678', 45],
];
const PX = 6;
const CSS = `.wrap{display:grid;place-items:center;height:100%;font-family:Inter,system-ui,sans-serif}
.tl{display:grid;grid-template-columns:330px 640px;gap:10px 14px;align-items:center}
.tl b{font-size:21px;text-align:right}
.lane{position:relative;height:40px;background:#f1f3f6;border-radius:10px}
.bar{position:absolute;top:0;height:40px;border-radius:10px;color:#fff;font:800 18px Inter;display:grid;place-items:center}
.tot{grid-column:2;font:800 30px Inter;margin-top:8px}`;
const chart = (parallel: boolean) =>
  tri((l) => {
    const k = l === 'ru' ? 0 : l === 'uz' ? 1 : 2;
    let t = 0;
    const rows = STEPS.map((s) => {
      const start = parallel ? s[5] : t;
      t += s[3];
      return `<b>${s[k]}</b><div class="lane"><div class="bar" style="left:${start * PX}px;width:${s[3] * PX}px;background:${s[4]}">${s[3]}′</div></div>`;
    }).join('');
    const total = parallel ? 75 : 105;
    const word = l === 'ru' ? 'Всего' : l === 'uz' ? 'Jami' : 'Total';
    return `<div class="wrap"><div class="tl">${rows}<div class="tot">${word}: ${total}′</div></div></div>`;
  });

export default kit({
  id: 'kids-g19',
  title: "Рецепт плова как алгоритм: что делать одновременно ¦ Palov retsepti algoritm sifatida: nimani bir vaqtda qilish mumkin ¦ A plov recipe as an algorithm: what to do at the same time",
  question: "Как приготовить плов быстрее, ничего не пропустив? ¦ Hech narsani qoldirmay palovni qanday tezroq pishirish mumkin? ¦ How do you cook plov faster without skipping a step?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🍲',
      kicker: kick('algo', 'g', 3),
      title: "Алгоритм на кухне ¦ Oshxonadagi algoritm ¦ An algorithm in the kitchen",
      chat: "кто у вас дома готовит плов? одно слово ¦ uyingizda palovni kim pishiradi? bitta so'z ¦ who cooks plov in your home? one word",
      lead: "Рецепт — это алгоритм: шаги в нужном порядке. Но некоторые шаги можно делать одновременно: пока рис замачивается, режем морковь. Так плов будет готов быстрее! ¦ Retsept — bu algoritm: kerakli tartibdagi qadamlar. Lekin ba'zi qadamlarni bir vaqtda qilish mumkin: guruch ivib turganda sabzi to'g'raymiz. Shunda palov tezroq tayyor bo'ladi! ¦ A recipe is an algorithm: steps in the right order. But some steps can happen at the same time — while the rice soaks, we chop carrots. Then plov is ready sooner!",
      facts: [
        "Готовим на карточках, не у плиты ¦ Kartochkalarda pishiramiz, plita oldida emas ¦ We cook with cards, not at the stove",
      ],
      notes: { say: ['В эфире работаем только с карточками. К плите дети не подходят.'], min: 3 },
    },
    {
      type: 'show',
      stage: 1,
      title: "Шаг за шагом: 105 минут ¦ Qadamma-qadam: 105 daqiqa ¦ One step at a time: 105 minutes",
      chat: "какие шаги можно делать одновременно? ¦ qaysi qadamlarni bir vaqtda qilish mumkin? ¦ which steps can happen at the same time?",
      lang: 'text',
      css: CSS,
      steps: [
        { code: '30 + 20 + 25 + 30', html: chart(false), say: "Если делать всё по очереди: 30 + 20 + 25 + 30 = 105 минут. Долго! ¦ Hammasini navbat bilan qilsak: 30 + 20 + 25 + 30 = 105 daqiqa. Uzoq! ¦ Doing everything in turn: 30 + 20 + 25 + 30 = 105 minutes. That's long!" },
      ],
      notes: { min: 5 },
    },
    {
      type: 'show',
      stage: 2,
      title: "Делаем одновременно ¦ Bir vaqtda qilamiz ¦ Doing things at once",
      chat: "сколько минут сэкономили? число ¦ necha daqiqa tejadik? son ¦ how many minutes did we save? a number",
      lang: 'text',
      css: CSS,
      steps: [
        { code: 'parallel', html: chart(true), say: "Рис замачивается сам — в это время режем и начинаем жарить. Готово за 75 минут! ¦ Guruch o'zi ivib turadi — shu vaqtda to'g'raymiz va qovurishni boshlaymiz. 75 daqiqada tayyor! ¦ The rice soaks on its own — meanwhile we chop and start frying. Done in 75 minutes!" },
      ],
      takeaway: "105 − 75 = 30 минут экономии. Но рис варим только после обжарки — порядок важен! ¦ 105 − 75 = 30 daqiqa tejaldi. Lekin guruchni faqat qovurishdan keyin pishiramiz — tartib muhim! ¦ 105 − 75 = 30 minutes saved. But the rice still goes in after frying — order matters!",
      notes: { min: 7 },
    },
    {
      type: 'sort',
      stage: 2,
      title: "Можно одновременно или только по очереди? ¦ Bir vaqtdami yoki faqat navbat bilanmi? ¦ At the same time or only in turn?",
      chat: "пиши: «1 — одновременно» ¦ yoz: «1 — bir vaqtda» ¦ write: “1 — same time”",
      zones: [
        { id: 'p', label: "Одновременно ¦ Bir vaqtda ¦ Same time", icon: '⏸️' },
        { id: 's', label: "По очереди ¦ Navbat bilan ¦ In turn", icon: '➡️' },
      ],
      items: [
        { text: "Рис мокнет, а я режу морковь ¦ Guruch ivyapti, men sabzi to'g'rayapman ¦ Rice soaks while I chop carrots", zone: 'p' },
        { text: "Сначала обжарить, потом положить рис ¦ Avval qovurish, keyin guruch solish ¦ Fry first, then add the rice", zone: 's' },
        { text: "Чайник кипит, а я ставлю тарелки ¦ Choynak qaynayapti, men likopchalarni qo'yyapman ¦ The kettle boils while I set plates", zone: 'p' },
        { text: "Сначала помыть руки, потом резать ¦ Avval qo'lni yuvish, keyin to'g'rash ¦ Wash hands first, then chop", zone: 's' },
      ],
      notes: { min: 5 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: сэкономь время ¦ O'zing bajar: vaqtni teja ¦ Your turn: save time",
      chat: "пиши, сколько минут сэкономил ¦ necha daqiqa tejaganingni yoz ¦ write how many minutes you saved",
      goal: "Ты планируешь время как шеф-повар! ¦ Vaqtni oshpazdek rejalashtirasan! ¦ You plan time like a chef!",
      items: [
        { title: "Тесто поднимается 40 минут, начинку готовить 20. По очереди — 60 минут. А одновременно? ¦ Xamir 40 daqiqa ko'tariladi, ichini tayyorlash 20 daqiqa. Navbat bilan — 60 daqiqa. Bir vaqtda-chi? ¦ Dough rises for 40 minutes, the filling takes 20. In turn: 60. At the same time?", choices: ["40 минут ¦ 40 daqiqa ¦ 40 minutes", "60 минут ¦ 60 daqiqa ¦ 60 minutes"], correct: 0, explain: "Пока тесто поднимается, готовим начинку: экономия 20 минут. ¦ Xamir ko'tarilayotganda ichini tayyorlaymiz: 20 daqiqa tejaladi. ¦ Make the filling while the dough rises: 20 minutes saved." },
      ],
      notes: { min: 6 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: ждём — значит, делаем другое ¦ Xulosa: kutyapmizmi — demak, boshqa ish qilamiz ¦ Wrap-up: while you wait, do something else",
      chat: "что дома можно делать одновременно? одно слово ¦ uyda nimani bir vaqtda qilish mumkin? bitta so'z ¦ what can you do at the same time at home? one word",
      answer: "Рецепт — это алгоритм. Если делать всё по очереди, плов готовится 105 минут. Пока рис замачивается сам, можно резать и жарить — тогда хватит 75 минут, экономия 30 минут. Но некоторые шаги нельзя менять местами: рис кладём только после обжарки. ¦ Retsept — bu algoritm. Hammasini navbat bilan qilsak, palov 105 daqiqada pishadi. Guruch o'zi ivib turganda to'g'rash va qovurish mumkin — shunda 75 daqiqa yetadi, 30 daqiqa tejaladi. Lekin ba'zi qadamlarning o'rnini almashtirib bo'lmaydi: guruch faqat qovurishdan keyin solinadi. ¦ A recipe is an algorithm. In strict turn, plov takes 105 minutes. While the rice soaks on its own, you can chop and fry — then 75 minutes is enough, saving 30. But some steps can't swap: the rice goes in only after frying.",
      icon: '🍲',
      badge: "Шеф-алгоритмист ¦ Oshpaz-algoritmchi ¦ Algorithm chef",
      badgeSub: kick('algo', 'g', 3),
      homeworkTitle: HOME,
      homework: [
        "Запиши утренние дела и найди два, которые можно делать одновременно. ¦ Ertalabki ishlaringni yoz va bir vaqtda qilsa bo'ladigan ikkitasini top. ¦ List your morning jobs and find two you can do at the same time.",
        "Нужны: карточки. ¦ Kerak: kartochkalar. ¦ You need: cards.",
      ],
      notes: { min: 4 },
    },
  ],
});
