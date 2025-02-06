import PageLayout from "../../components/common/PageLayout";
import PizzaComponents from "../../components/user/build-pizza/PizzaComponents";
import PizzaCart from "../../components/user/build-pizza/PizzaCart";
import { useState } from "react";

const BuildPizza = () => {
  const [cart, setCart] = useState([]);
  return (
    <PageLayout>
      <main
        className={`w-screen h-screen inset-0 bg-cover bg-right bg-fixed overflow-auto bg-[url("/background.jpg")] px-4 xl:px-[5%] pt-28 pb-10 flex justify-between gap-5 text-white`}
      >
        <div className="w-3/5 p-4 overflow-y-auto rounded-xl dark:bg-black/60 bg-white/60 backdrop-blur-lg shadow-[0_0_30px_rgb(0,0,0,0.6)]">
          <PizzaComponents />
        </div>
        <div className="w-1/3 p-4 overflow-y-auto rounded-xl dark:bg-black/60 bg-white/60 backdrop-blur-lg shadow-[0_0_30px_rgb(0,0,0,0.6)]">
          <PizzaCart />
        </div>
      </main>
    </PageLayout>
  );
};

export default BuildPizza;
