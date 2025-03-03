import React, { ReactNode, useState } from "react";

const PizzaAccordion = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(true);

  const toggleAccordion = (): void => setOpen((prev) => !prev);

  return (
    <div className="w-full p-2 rounded-lg border border-amber-500 mb-4 last:mb-0">
      <div
        className={`w-full h-12 px-2 py-1 flex items-center justify-between text-base ${
          open
            ? "text-amber-600 font-semibold "
            : "text-amber-300 font-normal"
        } transition-colors duration-300`}
      >
        <span>Pizza N</span>
        <span className="inline-flex gap-4">
          <button className="p-2 hover:bg-amber-200/20 rounded-md size-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="size-6 stroke-amber-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
              />
            </svg>
          </button>
          <button className="p-2 hover:bg-amber-200/20 rounded-md size-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="red"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
          <button className="p-2 hover:bg-amber-200/20 rounded-md size-10 flex items-center justify-center">
            <svg
              onClick={toggleAccordion}
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
        </span>
      </div>

      <div
        className={`${open ? "scale-y-100" : "scale-y-0 absolute"}
        transition-transform duration-300 origin-top
         p-2 pb-3 rounded-b-md grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4`}
      >
        {children}
      </div>
    </div>
  );
};

export default PizzaAccordion;
