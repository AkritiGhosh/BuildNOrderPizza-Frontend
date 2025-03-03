import { useState } from "react";
import PageLayout from "../../components/common/PageLayout";
import PizzaComponents from "../../components/user/build-pizza/PizzaComponents";
// import { useState } from "react";

const BuildPizza = () => {
  return (
    <PageLayout>
      <main
        className={`relative w-screen h-auto min-h-screen lg:h-screen inset-0 bg-cover bg-right bg-fixed overflow-auto bg-[url("/background.jpg")] px-4 xl:px-[5%] pt-20 lg:pt-28 pb-8 flex flex-col justify-between gap-5 text-white`}
      >
        <PizzaComponents />
        <div className="w-full pr-8 md:pr-0 h-10 md:h-14 md:right-4 xl:right-[5%] bottom-4 md:bottom-8 fixed md:absolute flex justify-center md:justify-end">
          <button className="w-full md:w-14 h-10 md:h-14 bg-amber-700 rounded md:rounded-full flex items-center justify-center gap-2">
            <span className="inline-block md:hidden">View Cart</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-6 md:size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
        </div>
      </main>
    </PageLayout>
  );
};

export default BuildPizza;
