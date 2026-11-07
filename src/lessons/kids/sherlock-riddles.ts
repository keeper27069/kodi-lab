import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

export default kit({
  id: 'kids-g10',
  title: "Загадки Шерлока: что случилось по одной картинке ¦ Sherlok topishmoqlari: bitta rasmdan nima bo'lganini bilamiz ¦ Sherlock riddles: what happened, from one picture",
  question: "Кто съел пирожки, пока мамы не было дома? ¦ Onam uyda yo'qligida pirojkilarni kim yedi? ¦ Who ate the pies while Mum was out?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🔍',
      kicker: kick('logic', 'g', 2),
      title: "Включаем метод Шерлока ¦ Sherlok usulini yoqamiz ¦ Switching on Sherlock's method",
      chat: "напиши 🔍, если готов к расследованию ¦ tergovga tayyor bo'lsang 🔍 yoz ¦ send 🔍 if you're ready to investigate",
      lead: "Шерлок Холмс — сыщик из книжек. Он не угадывал, а замечал мелочи — улики — и складывал их в версию. Сегодня у нас дело о пропавших пирожках! ¦ Sherlok Xolms — kitoblardagi izquvar. U taxmin qilmagan, balki mayda narsalarni — dalillarni payqagan va ularni bitta taxminga yig'gan. Bugun bizda yo'qolgan pirojkilar ishi! ¦ Sherlock Holmes is a detective from books. He didn't guess — he noticed small things, clues, and pieced them into a theory. Today: the case of the missing pies!",
      facts: [
        "Улика — то, что можно увидеть и проверить ¦ Dalil — ko'rish va tekshirish mumkin bo'lgan narsa ¦ A clue is something you can see and check",
      ],
      notes: { say: ['Хвалим тех, кто называет улику, а не просто угадывает.'], min: 3 },
    },
    {
      type: 'cards',
      stage: 1,
      title: "Место происшествия: кухня ¦ Voqea joyi: oshxona ¦ The scene: the kitchen",
      chat: "какая улика самая важная? номер ¦ qaysi dalil eng muhim? raqam ¦ which clue matters most? a number",
      cards: [
        { icon: '☂️', front: "1 · Мокрый зонт у двери ¦ 1 · Eshik yonida ho'l soyabon ¦ 1 · A wet umbrella by the door", back: "Кто-то пришёл с улицы в дождь ¦ Kimdir yomg'irda ko'chadan kelgan ¦ Someone came in from the rain" },
        { icon: '👣', front: "2 · Грязные следы ботинок ¦ 2 · Loy botinka izlari ¦ 2 · Muddy shoe prints", back: "Ведут от двери к столу, размер детский ¦ Eshikdan stolgacha, bolalar o'lchami ¦ From the door to the table, child-sized" },
        { icon: '🪟', front: "3 · Окно открыто ¦ 3 · Deraza ochiq ¦ 3 · The window is open", back: "Но под окном сухо и следов нет ¦ Lekin deraza tagi quruq va iz yo'q ¦ But under it it's dry, no prints" },
        { icon: '🐱', front: "4 · Кот спит на диване ¦ 4 · Mushuk divanda uxlayapti ¦ 4 · The cat sleeps on the sofa", back: "Шерсть сухая, на усах ничего ¦ Juni quruq, mo'ylovida hech narsa yo'q ¦ Dry fur, nothing on its whiskers" },
      ],
      notes: { min: 6 },
    },
    {
      type: 'poll',
      stage: 2,
      title: "Твоя версия: кто съел пирожки? ¦ Taxminingcha: pirojkilarni kim yedi? ¦ Your theory: who ate the pies?",
      chat: "пиши ответ и номер улики: «брат — 2» ¦ javob va dalil raqamini yoz: «akam — 2» ¦ write the answer and a clue number: “brother — 2”",
      options: [
        { label: "🐱 Кот ¦ 🐱 Mushuk ¦ 🐱 The cat" },
        { label: "🧒 Брат, пришедший с улицы ¦ 🧒 Ko'chadan kelgan aka ¦ 🧒 Big brother, back from outside" },
        { label: "🐦 Птица через окно ¦ 🐦 Derazadan kirgan qush ¦ 🐦 A bird through the window" },
      ],
      correct: 1,
      result: "Брат! Мокрый зонт и детские следы ведут от двери к столу. Кот сухой, а под окном нет следов. ¦ Aka! Ho'l soyabon va bolalar izlari eshikdan stolga olib boradi. Mushuk quruq, deraza tagida esa iz yo'q. ¦ The brother! The wet umbrella and child-sized prints lead from the door to the table. The cat is dry and there are no prints under the window.",
      notes: { min: 6 },
    },
    {
      type: 'truefalse',
      stage: 2,
      title: "Улика или догадка? ¦ Dalilmi yoki taxminmi? ¦ Clue or guess?",
      chat: "пиши «улика» или «догадка» ¦ «dalil» yoki «taxmin» deb yoz ¦ write “clue” or “guess”",
      statements: [
        { text: "«Следы ведут от двери к столу» — это улика ¦ «Izlar eshikdan stolga olib boradi» — bu dalil ¦ “The prints lead from the door to the table” is a clue", truth: true, explain: "Это видно глазами. ¦ Buni ko'z bilan ko'rish mumkin. ¦ You can see it." },
        { text: "«Брат всегда всё ест» — это улика ¦ «Akam doim hammasini yeydi» — bu dalil ¦ “My brother always eats everything” is a clue", truth: false, explain: "Это мнение, его не видно на картинке. ¦ Bu fikr, rasmda ko'rinmaydi. ¦ That's an opinion, not something in the picture." },
      ],
      notes: { min: 4 },
    },
    {
      type: 'mission',
      stage: 3,
      title: "Сделай сам: новое дело ¦ O'zing bajar: yangi ish ¦ Your turn: a new case",
      chat: "версия + улика в чат ¦ taxmin + dalil chatga ¦ theory + clue in the chat",
      goal: "Ты раскрыл дело! ¦ Sen ishni ochding! ¦ You cracked the case!",
      items: [
        { title: "На снегу у сарая — маленькие следы лап и пропала морковка у снеговика. Кто это? ¦ Omborxona yonidagi qorda kichik panja izlari va qorbobodagi sabzi yo'qolgan. Bu kim? ¦ Small paw prints in the snow by the shed, and the snowman's carrot is gone. Who did it?", choices: ["Зайчик 🐇 ¦ Quyoncha 🐇 ¦ A rabbit 🐇", "Самолёт ✈️ ¦ Samolyot ✈️ ¦ A plane ✈️"], correct: 0, explain: "Следы лап + морковка — любимая еда зайца. ¦ Panja izlari + sabzi — quyonning sevimli ovqati. ¦ Paw prints + a carrot, a rabbit's favourite food." },
        { title: "Что делает сыщик сначала? ¦ Izquvar avval nima qiladi? ¦ What does a detective do first?", choices: ["Ищет улики ¦ Dalil qidiradi ¦ Looks for clues", "Сразу называет виноватого ¦ Darhol aybdorni aytadi ¦ Names the culprit at once"], correct: 0, explain: "Сначала факты, потом вывод. ¦ Avval faktlar, keyin xulosa. ¦ Facts first, then the conclusion." },
      ],
      notes: { min: 6 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: улики → версия ¦ Xulosa: dalillar → taxmin ¦ Wrap-up: clues → theory",
      chat: "какую загадку ты придумаешь? одно слово ¦ qanday topishmoq o'ylab topasan? bitta so'z ¦ what mystery will you invent? one word",
      answer: "Сыщик не угадывает: он замечает улики — то, что видно и можно проверить, — и складывает их в версию. Мокрый зонт и детские следы от двери показали, что пирожки съел брат. Мнение «он всегда всё ест» — не улика. ¦ Izquvar taxmin qilmaydi: u dalillarni — ko'rinadigan va tekshirsa bo'ladigan narsalarni — payqaydi va ularni bitta taxminga yig'adi. Ho'l soyabon va eshikdan boshlangan bolalar izlari pirojkilarni aka yeganini ko'rsatdi. «U doim hammasini yeydi» degan fikr — dalil emas. ¦ A detective doesn't guess: they notice clues — things you can see and check — and build a theory. The wet umbrella and child-sized prints from the door showed the brother ate the pies. “He always eats everything” is an opinion, not a clue.",
      icon: '🕵️',
      badge: "Юный сыщик ¦ Yosh izquvar ¦ Young detective",
      badgeSub: kick('logic', 'g', 2),
      homeworkTitle: HOME,
      homework: [
        "Нарисуй картинку-загадку с тремя уликами и загадай её родным. ¦ Uchta dalilli topishmoq-rasm chiz va yaqinlaringga top deb ber. ¦ Draw a mystery picture with three clues and challenge your family.",
        "Нужны: бумага и карандаш. ¦ Kerak: qog'oz va qalam. ¦ You need: paper and a pencil.",
      ],
      notes: { min: 5 },
    },
  ],
});
