import React, { FC } from "react";
import { ISection } from "./Section.types";

const Section: FC<ISection> = ({ className, children }) => {
  return <div className={`product_list ${className}`}>{children}</div>;
};

export default Section;

// 0555 644 888 Ирина Викторовна Орехово
