import React, { FC } from "react";
import { ISection } from "./Section.types";
import styles from "./Section.module.scss";

const Section: FC<ISection> = ({ className, children }) => {
  const dynamicClasses = className
    ? className.split(" ").map((cls) => styles[cls])
    : [];

  return (
    <div
      className={`${styles.product_list}  ${className} ${dynamicClasses.join(
        " "
      )}`}
    >
      {children}
    </div>
  );
};

export default Section;

// 0555 644 888 Ирина Викторовна Орехово
