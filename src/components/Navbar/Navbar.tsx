import React from "react";
import Image from "next/image";
import Link from "next/link";
import { pages } from "./consts";
import { IPage } from "./Navbar.types";
import { BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="h-28 bg-black flex items-center justify-between px-7 text-lg sticky z-10 top-0 w-full max-w-[120rem] m-auto">
      <div>
        <Link href="/">
          <Image priority src="/logo.png" width={100} height={100} alt="logo" />
        </Link>
      </div>
      <ul className="nav-items flex w-2/4 justify-around">
        {pages.map((item: IPage, i: number) => (
          <li
            key={i}
            className="text-white text-xl hover:text-orangeLogo  hover:scale-150 transition-all duration-1000"
          >
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className="social">
        <div className="flex justify-between items-center">
          <Link href="https://www.instagram.com/stroy_level.kg/">
            <BsInstagram
              className="hover:fill-orangeLogo hover:rotate-12 transition-all duration-200"
              fill="white"
              size={32}
            />
          </Link>
          <Link href="mailto: stroylevel.kg@gmail.com">
            <MdEmail
              className="hover:fill-orangeLogo hover:rotate-12 transition-all duration-200"
              fill="white"
              size={40}
            />
          </Link>
        </div>
        <div className="text-white flex flex-col ">
          <Link
            href="tel:+996505545945"
            className="hover:text-orangeLogo hover:scale-110 transition-all duration-500"
          >
            0505 545-945
          </Link>
          <Link
            href="tel:+996555545945"
            className="hover:text-orangeLogo hover:scale-110 transition-all duration-500"
          >
            0555 545-945
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
