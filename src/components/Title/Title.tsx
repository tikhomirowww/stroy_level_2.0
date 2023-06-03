import React, { FC } from "react";
import { ITitle } from "./Title.types";

const Title: FC<ITitle> = ({ name }) => {
  return (
    <div className="h-32 bg-black border-orangeLogo border-y-4 text-4xl text-white text-center flex justify-center items-center">
      {name}
    </div>
  );
};

export default Title;
