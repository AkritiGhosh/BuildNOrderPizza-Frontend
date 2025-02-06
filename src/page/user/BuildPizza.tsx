import React from "react";
import PageLayout from "../../components/common/PageLayout";

const BuildPizza = () => {
  return (
    <PageLayout>
      <main
        className={`w-screen h-screen inset-0 bg-cover bg-right bg-fixed overflow-auto bg-[url("/background.jpg")] px-4 xl:px-[5%] pt-28 pb-5`}
      >
        <div className="w-full h-auto min-h-[50%] overflow-y-auto rounded dark:bg-black/90 bg-white/90 blur-lg">
          <div className="flex justify-between gap-5">
            <div className="w-1/2 p-4"></div>
            <div className="w-1/2 p-4"></div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default BuildPizza;
