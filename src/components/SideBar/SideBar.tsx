import React, { FC } from "react";
import { pages } from "../Navbar/consts";
import { ISideBar } from "./SideBar.types";
import Link from "next/link";
import Why from "../Why/Why";

const SideBar: FC<ISideBar> = ({ state, setSide }) => {
  console.log(state);

  return (
    <div className="relative">
      {state && (
        <div
          onClick={setSide}
          className="bg-modalBg z-10 w-screen h-screen modal fixed flex items-center justify-center left-0 right-0 top-0 bottom-0 m-auto"
        ></div>
      )}
      <div
        className={`${
          state ? "w-2/3" : "w-0"
        } gradient h-screen z-30 text-white fixed left-0 transition-all duration-400`}
      >
        {state && (
          <>
            <h2 className="text-center text-3xl">Страницы:</h2>
            <ul className="mx-3 my-3 mb-7 ">
              {pages.map((item, i) => (
                <li
                  key={i}
                  className="text-2xl mt-2 before:content-['-'] hover:text-orangeLogo"
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <Why />
          </>
        )}
      </div>
    </div>
  );
};

export default SideBar;
