import { kit } from '@engine/kit';
import { HOME, ROUTE, kick } from './_kids';

export default kit({
  id: 'kids-g28',
  title: "Животные-инженеры: чему люди научились у природы ¦ Hayvon-muhandislar: odamlar tabiatdan nimani o'rgandi ¦ Animal engineers: what people learned from nature",
  question: "Как клюв птицы помог построить быстрый поезд? ¦ Qush tumshug'i tez poyezd qurishga qanday yordam berdi? ¦ How did a bird's beak help build a fast train?",
  route: ROUTE,
  scenes: [
    {
      type: 'intro',
      stage: 0,
      icon: '🐦',
      kicker: kick('reserve', 'g', 4),
      title: "Природа — лучший изобретатель ¦ Tabiat — eng yaxshi ixtirochi ¦ Nature is the best inventor",
      chat: "какое животное, по-твоему, самый умный строитель? ¦ sencha qaysi hayvon eng aqlli quruvchi? ¦ which animal do you think is the smartest builder?",
      lead: "Миллионы лет животные «испытывали» свои формы и приёмы. Инженеры смотрят на них и переносят идеи в технику. Это называется изобретение по аналогии: «у птицы так — значит, и у поезда можно так». ¦ Millionlab yillar davomida hayvonlar o'z shakl va usullarini «sinab» kelgan. Muhandislar ularga qarab, g'oyalarni texnikaga ko'chiradi. Bu o'xshatish orqali ixtiro deyiladi: «qushda shunday — demak, poyezdda ham shunday qilsa bo'ladi». ¦ For millions of years animals have been “testing” their shapes and tricks. Engineers look at them and carry the ideas into technology. That's invention by analogy: “a bird does it this way, so a train can too.”",
      notes: { min: 3 },
    },
    {
      type: 'compare',
      stage: 1,
      title: "Клюв зимородка и скоростной поезд ¦ Zumrad qush tumshug'i va tezyurar poyezd ¦ The kingfisher's beak and the bullet train",
      chat: "что общего у клюва и носа поезда? одно слово ¦ tumshuq va poyezd burnining qanday umumiy tomoni bor? bitta so'z ¦ what do the beak and the train's nose share? one word",
      left: { label: "Зимородок ¦ Zumrad qush ¦ Kingfisher", icon: '🐦', points: ["Ныряет в воду почти без брызг ¦ Suvga deyarli sachratmasdan sho'ng'iydi ¦ Dives into water with almost no splash", "Клюв длинный и острый, как клин ¦ Tumshug'i uzun va o'tkir, ponaga o'xshaydi ¦ A long, sharp, wedge-like beak"] },
      right: { label: "Скоростной поезд ¦ Tezyurar poyezd ¦ Bullet train", icon: '🚄', points: ["Раньше громко «хлопал» на выезде из тоннеля ¦ Ilgari tunneldan chiqishda baland «gursillardi» ¦ Used to make a loud “boom” leaving tunnels", "Нос сделали длинным, как клюв, — стало тише ¦ Burnini tumshuqdek uzun qilishdi — jimroq bo'ldi ¦ They gave it a long beak-like nose — and it got quieter"] },
      verdict: "Общий признак — обтекаемая форма: она легко «режет» воду и воздух. ¦ Umumiy belgi — silliq shakl: u suv va havoni oson «kesadi». ¦ The shared feature is a streamlined shape that slices through water and air.",
      notes: { min: 7 },
    },
    {
      type: 'cards',
      stage: 2,
      title: "Найди пару: природа → изобретение ¦ Juftini top: tabiat → ixtiro ¦ Find the pair: nature → invention",
      chat: "пиши номер пары и общий признак ¦ juftlik raqami va umumiy belgini yoz ¦ write the pair number and the shared feature",
      cards: [
        { icon: '🌰', front: "1 · Репейник цепляется к шерсти ¦ 1 · Qariqiz junga yopishadi ¦ 1 · Burrs stick to fur", back: "Липучка на кроссовках: крючки + петельки ¦ Krossovkadagi yopishqoq tasma: ilmoqlar + halqachalar ¦ Velcro on trainers: hooks + loops" },
        { icon: '🦇', front: "2 · Летучая мышь «видит» звуком ¦ 2 · Ko'rshapalak tovush bilan «ko'radi» ¦ 2 · Bats “see” with sound", back: "Датчик парковки в машине ¦ Mashinadagi parkovka datchigi ¦ A car's parking sensor" },
        { icon: '🦈', front: "3 · Кожа акулы в мелких бугорках ¦ 3 · Akula terisi mayda do'mboqchali ¦ 3 · Shark skin has tiny ridges", back: "Быстрые купальники для пловцов ¦ Suzuvchilar uchun tez kostyumlar ¦ Fast swimsuits for racers" },
        { icon: '🍃', front: "4 · Лист лотоса не пачкается ¦ 4 · Lotos bargi kirlanmaydi ¦ 4 · Lotus leaves stay clean", back: "Краска, с которой стекает грязь ¦ Kir oqib ketadigan bo'yoq ¦ Paint that dirt washes off" },
      ],
      takeaway: "Чтобы изобрести по аналогии, спроси: «Кто в природе уже решил эту задачу?» ¦ O'xshatish orqali ixtiro qilish uchun so'ra: «Tabiatda bu masalani kim allaqachon hal qilgan?» ¦ To invent by analogy, ask: “Who in nature has already solved this?”",
      notes: { min: 8 },
    },
    {
      type: 'board',
      stage: 3,
      title: "Сделай сам: твоё изобретение ¦ O'zing bajar: sening ixtirong ¦ Your turn: your invention",
      chat: "пиши: «животное → идея» ¦ yoz: «hayvon → g'oya» ¦ write: “animal → idea”",
      seeds: [
        "🐢 панцирь → крепкий рюкзак ¦ 🐢 kosa → mustahkam ryukzak ¦ 🐢 shell → a tough backpack",
        "🦎 геккон на стене → перчатки для лазания ¦ 🦎 devordagi gekkon → tirmashish qo'lqoplari ¦ 🦎 a gecko on the wall → climbing gloves",
      ],
      placeholder: "Животное → идея ¦ Hayvon → g'oya ¦ Animal → idea",
      footer: "Любая идея подходит, если ты можешь назвать общий признак. ¦ Umumiy belgini ayta olsang, har qanday g'oya mos. ¦ Any idea works if you can name the shared feature.",
      notes: { min: 7 },
    },
    {
      type: 'finale',
      stage: 4,
      title: "Итог: изобретаем по аналогии ¦ Xulosa: o'xshatish orqali ixtiro qilamiz ¦ Wrap-up: invent by analogy",
      chat: "какая пара удивила тебя больше всего? ¦ qaysi juftlik seni ko'proq hayron qoldirdi? ¦ which pair surprised you most?",
      answer: "Люди многому научились у животных: клюв зимородка подсказал форму носа скоростного поезда, репейник — липучку, летучая мышь — датчик парковки. Это изобретение по аналогии: находим в природе похожую задачу и переносим решение. ¦ Odamlar hayvonlardan ko'p narsani o'rgandi: zumrad qush tumshug'i tezyurar poyezd burnining shaklini, qariqiz — yopishqoq tasmani, ko'rshapalak — parkovka datchigini taklif qildi. Bu o'xshatish orqali ixtiro: tabiatda o'xshash masalani topib, yechimni ko'chiramiz. ¦ People have learned a lot from animals: the kingfisher's beak shaped the bullet train's nose, burrs gave us Velcro, bats inspired parking sensors. That's invention by analogy — find a similar problem in nature and carry the solution over.",
      icon: '🐦',
      badge: "Бионик ¦ Bionik ¦ Bionic inventor",
      badgeSub: kick('reserve', 'g', 4),
      homeworkTitle: HOME,
      homework: [
        "Нарисуй изобретение, которое подсказало тебе животное, и подпиши общий признак. ¦ Hayvon senga taklif qilgan ixtironi chiz va umumiy belgisini yozib qo'y. ¦ Draw an invention an animal gave you the idea for and label the shared feature.",
        "Нужны: бумага и карандаш. ¦ Kerak: qog'oz va qalam. ¦ You need: paper and a pencil.",
      ],
      notes: { min: 5 },
    },
  ],
});
