import React, { FC, useState } from "react";

import { IInput } from "./Input.types";

const Input: FC<IInput> = ({
  onChange,
  placeholder,
  width,
  // value,
  type,
  name,
  className,
}) => {
  // const [value, setValue] = useState('')
  return (
    <div className="my-2">
      <input
        name={name}
        className={`h-9 rounded-lg border-none p-3 placeholder:text-placeholder ${className}`}
        style={{ width: width }}
        type={type}
        onChange={(e) => onChange(e.target.value)}
        // onChange={onChange}
        placeholder={placeholder}
        // value={value}
      />
    </div>
  );
};

export default Input;
