import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

export default kit({
  id: 'kids-g29',
  title: "Кошка или собака: учимся спорить по-доброму ¦ Mushukmi yoki itmi: mehr bilan bahslashishni o'rganamiz ¦ Cat or dog: learning to argue kindly",
  question: "Можно ли спорить и при этом оставаться друзьями? ¦ Bahslashib, do'st bo'lib qolish mumkinmi? ¦ Can you argue and still stay friends?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🐱',
      kicker: kick('reserve', 'g', 5),
      title: "Большой добрый спор ¦ Katta mehribon bahs ¦ The big friendly debate",
      chat: "ты за кого? 🐱 или 🐶 ¦ sen kim tarafdasan? 🐱 yoki 🐶 ¦ whose side are you on? 🐱 or 🐶",
      lead: "Чат делится на две команды: команда кошек 🐱 и команда собак 🐶. Каждая приводит доводы — причины, почему её питомец лучше. А потом… команды меняются сторонами! ¦ Chat ikki jamoaga bo'linadi: mushuklar jamoasi 🐱 va itlar jamoasi 🐶. Har biri dalil keltiradi — nega uning uy hayvoni yaxshiroq ekanining sabablari. Keyin esa… jamoalar tomonlarini almashtiradi! ¦ The chat splits into two teams: team cats 🐱 and team dogs 🐶. Each gives reasons why their pet is better. And then… the teams swap sides!",
      notes: { min: 3 },
    },
    {
      type: 'cards',
      stage: 1,
      title: "Правила доброго спора ¦ Mehribon bahs qoidalari ¦ Rules of a kind debate",
      chat: "какое правило самое важное? номер ¦ qaysi qoida eng muhim? raqam ¦ which rule matters most? a number",
      cards: [
        { icon: '🗣️', front: "1 · Довод, а не крик ¦ 1 · Baqiriq emas, dalil ¦ 1 · Reasons, not shouting", back: "«Кошка лучше, потому что…» ¦ «Mushuk yaxshiroq, chunki…» ¦ “Cats are better because…”" },
        { icon: '👂', front: "2 · Дослушай до конца ¦ 2 · Oxirigacha tingla ¦ 2 · Listen to the end", back: "Не перебивай соперника ¦ Raqibning gapini bo'lma ¦ Don't interrupt the other side" },
        { icon: '💛', front: "3 · Спорим с мнением, не с человеком ¦ 3 · Fikr bilan bahslashamiz, odam bilan emas ¦ 3 · Argue with the idea, not the person", back: "Без обидных слов ¦ Haqoratli so'zlarsiz ¦ No hurtful words" },
      ],
      notes: { min: 5 },
    },
    {
      type: 'compare',
      stage: 2,
      title: "Раунд 1: доводы команд ¦ 1-raund: jamoalar dalillari ¦ Round 1: the teams' reasons",
      chat: "пиши один довод своей команды ¦ jamoangning bitta dalilini yoz ¦ write one reason for your team",
      left: { label: "Команда кошек ¦ Mushuklar jamoasi ¦ Team cats", icon: '🐱', points: ["Сама умывается и чистая ¦ O'zini o'zi yuvadi va toza ¦ Washes itself and stays clean", "Не надо гулять в дождь ¦ Yomg'irda sayr qilish shart emas ¦ No walks in the rain", "Мурлычет и успокаивает ¦ Xurillab tinchlantiradi ¦ Purrs and calms you down"] },
      right: { label: "Команда собак ¦ Itlar jamoasi ¦ Team dogs", icon: '🐶', points: ["Учит командам и трюкам ¦ Buyruq va nayranglarni o'rganadi ¦ Learns commands and tricks", "Зовёт гулять — больше движения ¦ Sayrga chaqiradi — ko'proq harakat ¦ Takes you out — more exercise", "Радуется тебе у двери ¦ Eshik oldida senga quvonadi ¦ Greets you happily at the door"] },
      verdict: "У каждой стороны есть настоящие причины. Довод = мнение + «потому что». ¦ Har bir tomonda haqiqiy sabablar bor. Dalil = fikr + «chunki». ¦ Each side has real reasons. A reason = an opinion + “because”.",
      notes: { min: 8 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Раунд 2: меняемся сторонами! ¦ 2-raund: tomonlarni almashtiramiz! ¦ Round 2: swap sides!",
      chat: "защити чужую сторону: один довод ¦ boshqa tomonni himoya qil: bitta dalil ¦ defend the other side: one reason",
      goal: "Ты умеешь спорить честно и по-доброму! ¦ Halol va mehribon bahslasha olasan! ¦ You can argue fairly and kindly!",
      items: [
        { title: "Какой довод лучше? ¦ Qaysi dalil yaxshiroq? ¦ Which reason is better?", choices: ["«Собаки лучше, потому что их можно научить трюкам» ¦ «Itlar yaxshiroq, chunki ularga nayrang o'rgatish mumkin» ¦ “Dogs are better because you can teach them tricks”", "«Собаки лучше, и всё!» ¦ «Itlar yaxshiroq, tamom!» ¦ “Dogs are better, end of story!”"], correct: 0, explain: "В хорошем доводе есть «потому что». ¦ Yaxshi dalilda «chunki» bor. ¦ A good reason has a “because”." },
        { title: "Соперник привёл хороший довод. Что сказать? ¦ Raqib yaxshi dalil keltirdi. Nima deyish kerak? ¦ The other side made a good point. What do you say?", choices: ["«Хороший довод! А вот мой…» ¦ «Yaxshi dalil! Mana meniki…» ¦ “Good point! Here's mine…”", "«Ты ничего не понимаешь» ¦ «Sen hech narsani tushunmaysan» ¦ “You don't understand anything”"], correct: 0, explain: "Уважение делает спор интересным. ¦ Hurmat bahsni qiziqarli qiladi. ¦ Respect keeps a debate fun." },
      ],
      notes: { say: ['Ментор зачитывает доводы обеих сторон и хвалит тех, кто защитил чужую сторону убедительно.'], min: 9 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: у любого мнения есть причины ¦ Xulosa: har qanday fikrning sababi bor ¦ Wrap-up: every opinion has reasons",
      chat: "было ли трудно защищать чужую сторону? «да» или «нет» ¦ boshqa tomonni himoya qilish qiyin bo'ldimi? «ha» yoki «yo'q» ¦ was it hard to defend the other side? “yes” or “no”",
      answer: "Хороший спор — это доводы, а не крик: «я думаю так, потому что…». Мы дослушиваем соперника и спорим с мнением, а не с человеком. Когда мы защищали чужую сторону, стало видно: у любого мнения есть свои причины. ¦ Yaxshi bahs — baqiriq emas, dalillar: «men shunday deb o'ylayman, chunki…». Biz raqibni oxirigacha tinglaymiz va odam bilan emas, fikr bilan bahslashamiz. Boshqa tomonni himoya qilganimizda ko'rindi: har qanday fikrning o'z sabablari bor. ¦ A good debate is reasons, not shouting: “I think so because…”. We listen to the end and argue with the idea, not the person. Defending the other side showed us that every opinion has its reasons.",
      icon: '🤝',
      badge: "Добрый спорщик ¦ Mehribon bahschi ¦ Kind debater",
      badgeSub: kick('reserve', 'g', 5),
      homeworkTitle: HOME,
      homework: [
        "Устрой дома добрый спор: «лето или зима?». Каждый приводит 2 довода, потом меняетесь сторонами. ¦ Uyda mehribon bahs o'tkaz: «yozmi yoki qishmi?». Har kim 2 ta dalil keltiradi, keyin tomonlarni almashtirasizlar. ¦ Hold a kind debate at home: “summer or winter?” Everyone gives 2 reasons, then you swap sides.",
      ],
      notes: { min: 5 },
    },
  ],
});
