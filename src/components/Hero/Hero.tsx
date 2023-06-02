import React, { FC } from "react";
import Image from "next/image";
import { IHero } from "./Hero.types";

const Hero: FC<IHero> = ({ background, handleOpen }) => {
  return (
    <div className="header pt-32 relative h-[650px]">
      <div>
        <Image
          src={background}
          className="absolute -z-10 top-0 h-full saturate-150 object-cover"
          alt="background_hero"
        />
      </div>
      <div className="header_text w-2/3 md:w-1/5 m-auto flex justify-center">
        <div className="header_box  bg-desc rounded-3xl py-5 md:p-10 text-white flex flex-col items-center">
          <h1 className="text-2xl md:text-4xl  text-center">STROY LEVEL</h1>
          <hr className="w-16 my-6 h-1 bg-orangeLogo border-none" />
          <div className="text-xl w-full md:w-96 md:text-3xl  text-center mb-7">
            Доверьте ваш интерьер профессионалам своего дела!
          </div>
          <button
            onClick={handleOpen}
            className="bg-orangeLogo py-1 px-4 text-lg rounded-md mt-2 hover:shadow-black transition-all duration-300 hover:shadow-2xl hover:scale-110"
          >
            Заказать замер
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
