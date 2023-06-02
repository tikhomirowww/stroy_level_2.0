import React, { FC } from "react";
import { pages } from "../Navbar/consts";
import { ISideBar } from "./SideBar.types";
import Link from "next/link";

const SideBar: FC<ISideBar> = ({ state, setSide }) => {
  console.log(state);

  return (
    <div>
      {state && (
        <div
          onClick={setSide}
          className="bg-modalBg z-10 w-screen h-screen modal fixed flex items-center justify-center top-0"
        ></div>
      )}
      <div
        className={`${
          state ? "w-2/3" : "w-0"
        } gradient h-screen z-30 text-white fixed left-0 transition-all duration-400`}
      >
        {state && (
          <>
            <h2 className="text-center text-2xl">Страницы:</h2>
            <ul className="mx-3 mt-3">
              {pages.map((item, i) => (
                <li key={i} className="text-xl mt-2 border-b-2 border-white">
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default SideBar;
