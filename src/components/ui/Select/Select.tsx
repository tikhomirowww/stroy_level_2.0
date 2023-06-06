import React, { FC, useState } from "react";
import Select, { StylesConfig } from "react-select";
import { SelectProps } from "./Select.types";

const MySelect: FC<SelectProps> = ({ onChange, className }) => {
  const options = ["Душевая", "Лофт перегородка", "Потолок", "Биокамин"].map(
    (option) => ({ label: option, value: option })
  );

  console.log(className, "class");

  const customStyles: StylesConfig = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "lightgray" : provided.backgroundColor,
    }),
    control: (provided, state) => ({
      ...provided,
      borderRadius: "0.5rem",
      border: 0,
      outline: state.isFocused ? "2px solid black" : provided.outline,
      backgroundColor:
        className === "placeholder:text-white"
          ? "#e4090975"
          : provided.backgroundColor,
      "& .css-1jqq78o-placeholder": {
        color: className === "placeholder:text-white" ? "white" : "#676767",
      },
    }),
  };

  return (
    <Select
      className={className}
      placeholder="Выберите тип изделия"
      name="message"
      options={options}
      styles={customStyles}
      onChange={onChange}
      isSearchable={false}
    />
  );
};

export default MySelect;
