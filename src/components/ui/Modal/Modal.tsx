import React, { useEffect, FC } from "react";
import { IModal } from "./Modal.types";

const Modal: FC<IModal> = ({
  title,
  children,
  button,
  onClose,
  onClick,
  isOpen,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no_scroll");
    }
    return () => {
      document.body.classList.remove("no_scroll");
    };
  }, [isOpen]);

  console.log(isOpen);

  return (
    <div>
      {isOpen && (
        <div>
          <div
            onClick={onClose}
            className="bg-modalBg w-screen h-screen modal fixed flex items-center justify-center top-0"
          ></div>
          <div
            // onClick={(e) => e.preventDefault()}
            className="fixed top-0 bottom-0 right-0 left-0 m-auto w-[460px] h-fit p-7 bg-modalBox rounded-lg flex flex-col items-center z-30"
          >
            <h2 className="text-4xl text-center">{title}</h2>
            <div className="modal_children my-8">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
