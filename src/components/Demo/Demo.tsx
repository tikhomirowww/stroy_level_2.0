import React, { FC, useState } from "react";
import Image from "next/image";
import { IDemo } from "./Demo.types";

const Demo: FC<IDemo> = ({ image, desc, title }) => {
  return (
    <div className="product-card relative w-[25rem] h-[25rem]">
      <Image
        className="absolute w-full h-full object-cover"
        src={image}
        alt={title}
        width={800}
        height={800}
      />
      <div className="product-desc absolute w-full h-36 flex flex-col text-center opacity-1 items-center justify-end transition-all duration-300">
        <h2 className="text-3xl my-7 font-semibold">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Demo;
