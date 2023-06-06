import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { pages } from "./consts";
import { IPage } from "./Navbar.types";
import { BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { HiMenuAlt1 } from "react-icons/hi";
import { log } from "console";

const Navbar: FC<{ setSide: (state: boolean) => void }> = ({ setSide }) => {
  return (
    <div className="h-28 bg-black flex items-center justify-between px-7 text-lg sticky z-20 top-0 w-full max-w-[120rem] m-auto">
      <div className="block md:hidden">
        <HiMenuAlt1 onClick={() => setSide(true)} color="white" size={30} />
      </div>
      <div className="">
        <Link href="/">
          <Image
            className="w-32 sm:w-24"
            priority
            src="/logo.png"
            width={100}
            height={100}
            alt="logo"
          />
        </Link>
      </div>
      <ul className="nav-items md:flex w-2/4 justify-around hidden">
        {pages.map((item: IPage, i) => (
          <li
            key={i}
            className="text-white text-xl hover:text-orangeLogo  hover:scale-150 transition-all duration-1000"
          >
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className="social">
        <div className="flex justify-around sm:justify-between items-center">
          <Link
            target="_blank"
            href="https://www.instagram.com/stroy_level.kg/"
          >
            <BsInstagram
              className="hover:fill-orangeLogo hover:rotate-12 transition-all duration-200 sm:w-8 w-6"
              fill="white"
              size={32}
            />
          </Link>
          <Link target="_blank" href="mailto: stroylevel.kg@gmail.com">
            <MdEmail
              className="hover:fill-orangeLogo hover:rotate-12 transition-all duration-200 sm:w-10 w-8"
              fill="white"
              size={40}
            />
          </Link>
        </div>
        <div className="text-white flex flex-col text-base sm:text-lg">
          <Link
            target="_blank"
            href="tel:+996505545945"
            className="hover:text-orangeLogo  hover:scale-110 transition-all duration-500"
          >
            0505 545-945
          </Link>
          <Link
            target="_blank"
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
