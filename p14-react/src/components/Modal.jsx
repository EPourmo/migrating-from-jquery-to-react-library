import React from "react";
import closeIcon from "../assets/closeIcon.svg";

const Modal = ({ setOpenModal, message }) => {
  return (
    <div className="bg-black bg-opacity-60 fixed inset-0 z-50">
      <div className="flex h-screen justify-center items-center">
        <div className="flex-col justify-center bg-white py-5 px-10 border-4 border-primary rounded-xl relative">
          <div className="flex text-base text-zinc-600">{message}</div>
          <button
            className="absolute -right-2 -top-1.5 z-100"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <img src={closeIcon} alt="close button" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
