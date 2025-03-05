import {  useState } from "react";
// import { API, fetchAPI } from "../../../lib/core";
// import { PizzaOptionByCategory } from "../../../lib/type";
// import Stepper from "./multistepPizzaBuilder/Stepper";
import PizzaAccordion from "../../common/accordion/PizzaAccordion";
import MultiStepForm from "./multistepPizzaBuilder/MultiStepForm";
import { useAppSelector } from "../../../hooks/reduxHooks";
// const OptionCard = lazy(() => import("./OptionCard"));
// const Accordion = lazy(
//   () => import("../../common/accordion/ToppingsAccordion")
// );

const PizzaComponents = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <div className="w-full h-full p-4 overflow-y-auto rounded dark:bg-black/80 bg-white/60 backdrop-blur-2xl shadow-[0_0_30px] shadow-amber-600/30 border-2 border-black/80">
      <h1 className="mb-5 text-3xl text-center font-serif tracking-wider">Build your pizza</h1>
      {cart?.map((cartData) => (
        <PizzaAccordion pizzaId={cartData.id} key={cartData.id}>
          <MultiStepForm />
        </PizzaAccordion>
      ))}
    </div>
  );
};

export default PizzaComponents;
