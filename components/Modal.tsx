"use client";

import React, { useState } from "react";

interface obj {
  title: string;
  content: string;
  bullets: Array<string>;
}

const Modal = ({
  data,
  setHandler,
}: {
  setHandler: (open: boolean) => void;
  data: obj;
}) => {
  return (
    <div>
      {/* Backdrop with adjustable opacity */}
      <div
        className="fixed z-50 top-0 left-0 w-full h-full bg-gray-300 bg-opacity-80 flex justify-center items-center"
        onClick={() => setHandler(false)} // Close modal on backdrop click
      >
        {/* Modal content */}
        <div
          className="w-[90vw] max-w-[600px] h-auto max-h-[90vh] overflow-y-auto bg-white shadow-lg sm:px-10 px-6 py-5 sm:py-7 rounded-md relative"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          {/* Title */}
          <h2 className="text-xl sm:text-3xl font-semibold text-center text-primary border-b border-gray-300 py-3 px-4 mb-4">
            {data.title}
          </h2>

          {/* Content */}
          <div className="px-4 pb-4">
            <p className="text-sm sm:text-md font-medium text-primary">
              {data.content}
            </p>
          </div>

          {/* Bullet Points */}
          <ul className="py-2 pl-5">
            {data.bullets.map((item, index) => (
              <li
                key={index}
                className="text-primary text-sm sm:text-lg list-disc"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Close Button */}
          <div className="absolute top-2 right-4 flex justify-between items-center px-4 pt-2">
            <button
              type="button"
              className="h-10 w-10 flex items-center justify-center rounded-full text-2xl font-bold text-secondary hover:text-orange-500 transition-all duration-200 ease-in-out hover:scale-90"
              onClick={() => setHandler(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 sm:w-8 sm:h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export function ModalButton({ text, data }: { text: string; data: obj }) {
  const [openModal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!openModal);
  };

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleModal();
        }}
        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-orange-500 transition-all"
      >
        <span className="flex items-center gap-1  hover:gap-2 transition-all">
          {text}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </button>

      {/* Render the modal if open */}
      {openModal && (
        <Modal data={data} setHandler={setModal} key={data.title} />
      )}
    </>
  );
}
