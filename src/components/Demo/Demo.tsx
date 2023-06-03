import React, { FC, useState } from "react";
import Image from "next/image";
import { IDemo } from "./Demo.types";
import styles from "./Demo.module.scss";

const Demo: FC<IDemo> = ({ image, desc, title }) => {
  const [hover, setHover] = useState(false);
  console.log(hover, "demo_hover");

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseDown={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={styles.product_card}
    >
      <Image src={image} alt={title} width={800} height={800} />
      <div className={styles.product_desc}>
        {hover && (
          <div>
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Demo;
