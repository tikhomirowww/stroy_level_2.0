import React, { useRef, useState, FC } from "react";
import emailjs from "@emailjs/browser";
import Input from "../ui/Input/Input";
import MySelect from "../ui/Select/Select";

export const SendForm: FC<{ setState: any }> = ({ setState }) => {
  const form = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const [sel, setSel] = useState("");
  const [selError, setSelErr] = useState(false);

  const [num, setNum] = useState("");
  const [numError, setNumError] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name) {
      setNameError(false);
    } else if (!name) {
      setNameError(true);
      return;
    }

    if (sel) {
      setSelErr(false);
    } else if (!sel) {
      setSelErr(true);
      return;
    }

    if (num) {
      setNumError(false);
    } else if (!num) {
      setNumError(true);
      return;
    }

    emailjs
      .sendForm(
        "service_bym7x0b",
        "template_aetuew2",
        form.current as HTMLFormElement,
        "3sSRcgVOCVF9P0-w0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setState(true);
  };

  // console.log(sel, "sel");

  return (
    <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
      {nameError && (
        <div className="text-center text-red text-lg">Введите имя!</div>
      )}
      <Input
        className={`${nameError && "bg-inputError placeholder:text-white"} `}
        type="text"
        name="name"
        placeholder="Введите имя"
        onChange={setName}
      />
      {selError && (
        <div className="text-center text-red text-lg">
          Выберите тип изделия!
        </div>
      )}
      <MySelect
        className={`${selError && "placeholder:text-white"}`}
        onChange={setSel}
      />
      {numError && (
        <div className="text-center text-red text-lg">Введите номер!</div>
      )}
      <Input
        className={`${numError && "bg-inputError placeholder:text-white"} `}
        type="text"
        name="number"
        placeholder="Номер What's App"
        onChange={setNum}
      />
      <input
        className="bg-blend-saturation border-2 py-1 px-4 text-lg rounded-md mt-4 hover:shadow-black transition-all duration-500 hover:shadow-2xl hover:bg-black hover:text-white hover:border-none "
        type="submit"
        value="Send"
      />
    </form>
  );
};
