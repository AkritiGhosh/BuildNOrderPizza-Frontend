import PageLayout from "../../components/common/PageLayout";
import PizzaComponents from "../../components/user/build-pizza/PizzaComponents";
import { useState } from "react";

const BuildPizza = () => {
  const [cart, setCart] = useState<object>([]);
  // const [pizzaSelected, SetPizzaSelected] = useState(0);

  // const addItemToCart = (item) => {};
  // const removeItemFromCart = (item) => {};
  // const changeQuantity = (item, quantity) => {};

  return (
    <PageLayout>
      <main
        className={`relative w-screen h-auto min-h-screen lg:h-screen inset-0 bg-cover bg-right bg-fixed overflow-auto bg-[url("/background.jpg")] px-4 xl:px-[5%] pt-20 lg:pt-28 pb-8 flex justify-between gap-5 text-white`}
      >
        <div className="w-full h-full rounded-xl dark:bg-black/80 bg-white/60 backdrop-blur-2xl shadow-[0_0_30px] shadow-amber-600/30 border border-amber-700">
          <div className="w-3/5 p-4 overflow-y-auto">
            <PizzaComponents cart={cart} updateCart={setCart} />
          </div>
          <div className="w-1/3 p-4 overflow-y-auto ">
            {/* <PizzaCart cart={cart} /> */}
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default BuildPizza;
