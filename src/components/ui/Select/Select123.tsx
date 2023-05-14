import React, { FC, useState, useEffect } from "react";
import Image from "next/image";
import { SelectProps } from "./Select.types";
import svg from "../../../assets/images/arrow-down.svg";
import { IoIosArrowDown } from "react-icons/io";

const Select: FC<SelectProps> = ({ options, onChange, value }) => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(value);
  const [sel, setSel] = useState(false);

  return (
    <div
      className={`relative bg-white rounded-lg h-9 text-secondary cursor-pointer py-2 w-full `}
    >
      <div
        onClick={() => {
          setActive((p) => !p);
        }}
        className={`flex h-full p-3 items-center  ${
          sel ? "text-black" : "text-placeholder"
        }`}
      >
        {selected}
        <IoIosArrowDown className="ml-2 absolute right-3" />
        {active && (
          <div
            className={` absolute z-10 py-2 left-0 top-[calc(100%+10px)] scrollbar-hide w-full h-20 bg-white rounded-[0.65rem] border border-gray bg-main-bg overflow-auto`}
          >
            {options.map((item) => (
              <p
                onClick={(e) => {
                  e.stopPropagation();
                  setActive(false);
                  setSelected(item);
                  onChange(item);
                  setSel(true);
                }}
                className="py-2 text-black px-[0.9rem] hover:bg-modalBg"
                key={item}
              >
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
