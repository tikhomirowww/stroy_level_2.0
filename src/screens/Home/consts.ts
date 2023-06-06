import { IProductCard } from "@/components/ProductCard/ProductCard.types";
import { AiOutlineGlobal } from "react-icons/ai";
import { GoTools } from "react-icons/go";
import { GrUserWorker } from "react-icons/gr";
import { IoShieldCheckmarkSharp } from "react-icons/io5";


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

export interface IWhy {
  title: string;
  icon?: typeof AiOutlineGlobal;
  svg?:  React.ReactNode;
  image?: string
}

export const WhyItems: IWhy[] = [
  {
    title: "Международный опыт",
    icon: AiOutlineGlobal 
  },
  {
    title: "Гарантия качества",
    icon: IoShieldCheckmarkSharp 
  },
  {
    title: "Команда профессионалов",
    icon: GrUserWorker 
  },
  {
    title: "Своё производство",
    icon: GoTools 
  }
];

export const clients = [
  {
    title: 'KFC',
    image: '/KFC.webp'
  },
  {
    title: 'O!',
    image: '/o3.png'
  },
  {
    title: 'StarШина',
    image: '/shina.png'
  },
  {
    title: 'Мед. центр Назаралиева',
    image: '/med.jpeg'
  }
]