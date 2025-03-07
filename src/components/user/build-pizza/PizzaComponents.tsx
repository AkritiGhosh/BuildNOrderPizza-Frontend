import PizzaAccordion from "../../common/accordion/PizzaAccordion";
import MultiStepForm from "./multistepPizzaBuilder/MultiStepForm";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { addNewPizza } from "../../../redux/slice/cartSlice";

const PizzaComponents = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const handleAdd = () => dispatch(addNewPizza());
  console.log("<><><><>", cart);
  return (
    <div className="w-full h-full p-4 overflow-y-auto scroll-thin rounded dark:bg-black/80 bg-white/60 backdrop-blur-2xl shadow-[0_0_30px] shadow-amber-600/30 border-2 border-black/80">
      <h1 className="mb-5 text-3xl text-center font-serif tracking-wider">
        Build your pizza
      </h1>
      {cart?.map((cartData) => (
        <PizzaAccordion pizzaId={cartData.id} key={cartData.id}>
          <MultiStepForm pizzaId={cartData.id} />
        </PizzaAccordion>
      ))}
      <button onClick={handleAdd} className="w-auto h-10 px-3 flex items-center justify-center text-base bg-amber-500 border-black/80 text-black rounded-md font-semibold hover:bg-amber-600">
        Add another pizza
      </button>
    </div>
  );
};

export default PizzaComponents;
