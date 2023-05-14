import React, { FC } from "react";
import { IDesc } from "./Description.types";

const Description: FC<IDesc> = ({ title, description }) => {
  return (
    <div className="bg-adv w-1/3 text-center text-white p-7 rounded-2xl my-auto ">
      <h2 className="text-5xl font-medium">{title}</h2>
      <hr className="border-0 h-1 bg-orangeLogo w-1/3 m-auto my-4" />
      <p className="text-3xl leading-relaxed">{description}</p>
    </div>
  );
};

export default Description;
