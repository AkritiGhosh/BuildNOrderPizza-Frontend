import React, { ReactNode, useState } from "react";

const Accordion = ({
  children,
  title,
}: {
  children: ReactNode;
  title: String;
}) => {
  const [open, setOpen] = useState(false);

  const toggleAccordion = (e: React.MouseEvent<Element, MouseEvent>): void =>
    setOpen((prev) => !prev);
  return (
    <div className="w-full relative my-2">
      <button
        onClick={toggleAccordion}
        className={`w-full h-12 px-2 py-1 flex items-center justify-between text-base ${
          open
            ? "text-amber-600 font-semibold bg-black/70 rounded-t-md"
            : "text-amber-300 font-normal bg-black/30 rounded-md"
        } transition-colors duration-300`}
      >
        <span>{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={open ? 3 : 2}
          stroke="currentColor"
          className={`size-4 ${
            open ? "-scale-y-100" : "scale-y-100"
          } transition-transform duration-300`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.99 16.5 3.75 3.75m0 0 3.75-3.75m-3.75 3.75V3.75H4.49"
          />
        </svg>
      </button>
      {open ? (
        <div className="bg-black/50 p-2 rounded-b-md grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {children}
        </div>
      ) : null}
    </div>
  );
};

export default Accordion;
