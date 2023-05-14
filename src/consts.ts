import { IDemo } from "./components/Demo/Demo.types";
import { IProductCard } from "./components/ProductCard/ProductCard.types";

export const cardsData: IProductCard[] = [
    {
      title: "Лофт перегородки",
      desc: "Стеклянные перегородки в металлическом профиле успешно применяются при офрмлении помещений в стиле ЛОФТ.",
      image: "/loft.jpg",
      link: "/loft",
    },
    {
      title: "Душевые перегородки",
      desc: "Душевые перегородки из стекла очень популярны в современных интерьерах ванных комнат.",
      image: "/dush.jpeg",
      link: "/shower",
    },
    {
      title: "Биокамины",
      desc: "Биокамин — это современное устройство с живым пламенем, не нуждающееся в дымовой вентиляции.",
      image: "/kamin.jpg",
      link: "/kaminy",
    },
    {
      title: "Потолки",
      desc: "Подвесные реечные потолки и грильято открыают новую перспективу в архитектуре подвесных потолков.",
      image: "/potolok.jpg",
      link: "/potolki",
    },
  ];

export  const loftCarousel: string[] = ["/loft1.jpeg", "/loft2.jpeg", "/loft3.jpeg"];

export const demoLoft: IDemo[] = [
  {
    image: "/static.jpg",
    title: "Статичная",
    desc: "Зонирует пространство, визуально увеличивая его площадь!",
  },
  {
    image: "/loft4.jpg",
    title: "Раздвижная",
    desc: "Отличное решение для больших проёмов. Совмещает в себе практичность и функциональность!",
  },
  {
    image: "/loft10.jpg",
    title: "Распашная",
    desc: "Сохраняя классический вид, придаёт интерьеру свою изюминку!",
  },
];

export const demoShower: IDemo[] = [
 {
    image: "/show1.jpeg",
    title: "Угловая распашная",
    desc: "Зонирует пространство, визуально увеличивая его площадь!",
  },
  {
    image: "/show4.jpeg",
    title: "Раздвижная",
    desc: "Отличное решение для больших проёмов. Совмещает в себе практичность и функциональность!",
  },
  {
    image: "/show6.jpeg",
    title: "Трапеция",
    desc: "Сохраняя классический вид, придаёт интерьеру свою изюминку!",
  },
  {
    image: "/show2.jpeg",
    title: "Гармошка",
    desc: "Сохраняя классический вид, придаёт интерьеру свою изюминку!",
  },
  {
    image: "/show3.jpeg",
    title: "Статичная",
    desc: "Сохраняя классический вид, придаёт интерьеру свою изюминку!",
  },
]

export const showerImg: string[] = [
  "show1.jpeg",
  "show2.jpeg",
  "show3.jpeg",
  "show4.jpeg",
  "show5.jpeg",
  "show6.jpeg",
];

export const kaminyImg: string[] = [
    'bio8.jpeg', 'bio4.jpeg', 'bio2.jpeg'
]

export const demoKaminy: IDemo[] = [
 {
    image: "/bio1.jpeg",
    title: "Торцевой",
    desc: "Зонирует пространство, визуально увеличивая его площадь!",
  },
  {
    image: "/bio6.jpeg",
    title: "Сквозной",
    desc: "Отличное решение для больших проёмов. Совмещает в себе практичность и функциональность!",
  },
  {
    image: "/bio9.jpeg",
    title: "Глухой",
    desc: "Сохраняя классический вид, придаёт интерьеру свою изюминку!",
  },
]

export const poptolkiImg: string[] = [
    'pot3.jpeg', 'pot2.jpeg', 'pot4.jpeg'
]

export const demoPotolki: IDemo[] = [
 {
    image: "/pot5.jpeg",
    title: "Торцевой",
    desc: "Зонирует пространство, визуально увеличивая его площадь!",
  },
  {
    image: "/pot6.jpeg",
    title: "Сквозной",
    desc: "Отличное решение для больших проёмов. Совмещает в себе практичность и функциональность!",
  },
  {
    image: "/pot7.jpeg",
    title: "Глухой",
    desc: "Сохраняя классический вид, придаёт интерьеру свою изюминку!",
  },
]