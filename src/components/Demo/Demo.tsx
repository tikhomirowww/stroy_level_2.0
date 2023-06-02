import React, { FC, useState } from "react";
import Image from "next/image";
import { IDemo } from "./Demo.types";
import styles from "./Demo.module.scss";

const Demo: FC<IDemo> = ({ image, desc, title }) => {
  return (
    <div className={styles.product_card}>
      <Image src={image} alt={title} width={800} height={800} />
      <div className={styles.product_desc}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Demo;
