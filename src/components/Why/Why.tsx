import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { GoTools } from "react-icons/go";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { GrUserWorker } from "react-icons/gr";

const whyItem = (text: string, svg: React.ReactNode) => {
  return (
    <div className="w-56 mx-1 flex flex-col items-center">
      <div className="bg-orangeLogo rounded-lg p-3">{svg}</div>
      <h2 className="text-3xl text-center font-medium mt-8 ">{text}</h2>
    </div>
  );
};

const Why = () => {
  return (
    <div className="bg-adv rounded-2xl w-3/4 mx-auto py-20 flex justify-around">
      {whyItem(
        "Международный опыт",
        <AiOutlineGlobal className="m-auto" size={120} />
      )}
      {whyItem("Своё производство", <GoTools className="m-auto" size={120} />)}
      {whyItem(
        "Гарантия качества",
        <IoShieldCheckmarkSharp className="m-auto" size={120} />
      )}
      {whyItem(
        "Команда профессионалов",
        <GrUserWorker className="m-auto" size={120} />
      )}
    </div>
  );
};

export default Why;
