import React, { FC } from "react";
import styles from "./Marquee.module.scss";
import { IMarquee } from "./Marquee.types";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const MyMarquee: FC<IMarquee> = ({ elem }) => {
  return (
    <div
      className={`top-0 flex overflow-hidden relative gap-40 bg-adv w-5/6 m-auto rounded-lg p-5 justify-center`}
    >
      <div
        className={`absolute ${styles.start} h-full w-[4%] left-0 z-10`}
      ></div>
      <div
        className={`absolute ${styles.end} h-full w-[4%] right-0 z-10`}
      ></div>
      <Marquee speed={70}>
        <div className="flex gap-20">
          {elem.map((item, i) => (
            <div
              key={i}
              className={`${styles.whyItem} w-56 mx-1 mr-1 flex flex-col items-center`}
            >
              <div>
                {item.icon ? (
                  <item.icon className="m-auto" size={120} />
                ) : (
                  <img width={100} src={item.image} />
                )}
              </div>
              <h2 className="text-3xl text-white text-center font-medium mt-8 ">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};
export default MyMarquee;
