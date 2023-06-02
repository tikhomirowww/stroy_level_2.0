import React, { FC } from "react";
import styles from "./Marquee.module.scss";
import { IMarquee } from "./Marquee.types";
import Marquee from "react-fast-marquee";

const MyMarquee: FC<IMarquee> = ({ elem }) => {
  const textItems = ["Пример 1", "Пример 2", "Пример 3"];
  //   console.log(elem);

  //   console.log(typeof elem[0].icon);

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
              <div className="bg-orangeLogo rounded-lg p-3">
                {<item.icon className="m-auto" size={120} />}
              </div>
              <h2 className="text-3xl text-center font-medium mt-8 ">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
    // <div
    //   className={`flex relative h-[290px] bg-adv w-5/6 m-auto rounded-lg p-5 justify-center`}
    // >
    //   <div className={`${styles.marquee} absolute w-3/4 m-auto`}>
    //     <span className={styles.marq1}>
    //       {elem.map((item, i) => (
    //         <div
    //           key={i}
    //           className={`${styles.whyItem} sm:w-56 mx-1 flex flex-col items-center`}
    //         >
    //           <div className="bg-orangeLogo rounded-lg p-3">
    //             {<item.icon className="m-auto" size={120} />}
    //           </div>
    //           <h2 className="text-3xl text-center font-medium mt-8 ">
    //             {item.title}
    //           </h2>
    //         </div>
    //       ))}
    //     </span>
    //     <span aria-hidden="true" className={styles.marq1}>
    //       {elem.map((item, i) => (
    //         <div
    //           key={i}
    //           className={`${styles.whyItem} sm:w-56 mx-1 flex flex-col items-center`}
    //         >
    //           <div className="bg-orangeLogo rounded-lg p-3">
    //             {<item.icon className="m-auto" size={120} />}
    //           </div>
    //           <h2 className="text-3xl text-center font-medium mt-8 ">
    //             {item.title}
    //           </h2>
    //         </div>
    //       ))}
    //     </span>
    //   </div>
    // </div>
  );
};
export default MyMarquee;
