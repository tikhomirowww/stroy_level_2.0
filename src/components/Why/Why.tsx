import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { GoTools } from "react-icons/go";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { GrUserWorker } from "react-icons/gr";
import styles from "./Why.module.scss";
import { IWhy } from "@/screens/Home/consts";

// interface

const why_items: IWhy[] = [
  {
    title: "Международный опыт",
    svg: <AiOutlineGlobal />,
  },
  {
    title: "Своё производство",
    svg: <GoTools />,
  },
  {
    title: "Гарантия качества",
    svg: <IoShieldCheckmarkSharp />,
  },
  {
    title: "Команда профессионалов",
    svg: <GrUserWorker color="white" />,
  },
];

const whyItem = (text: string, svg: React.ReactNode) => {
  return (
    <div className={`${styles.whyItem} flex items-center justify-around my-9 `}>
      <center>{svg}</center>
      <p className="text-xl font-semibold text-center text-black w-4/6">
        {text}
      </p>
    </div>
  );
};

const Why = () => {
  return (
    <div className="bg-adv  mt-8 flex-wrap gap-7 rounded-2xl md:w-5/6 mx-auto p-3  justify-around md:px-[5%] w-11/12">
      {why_items.map((item) => (
        <div>{whyItem(item.title, item.svg)}</div>
      ))}
    </div>
  );
};

export default Why;
