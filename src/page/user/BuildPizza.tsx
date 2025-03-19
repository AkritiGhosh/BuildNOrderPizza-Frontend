import PizzaAccordion from "../../components/common/accordion/PizzaAccordion";
import Button from "../../components/common/button/Button";
import PageLayout from "../../components/common/PageLayout";
import MultiStepForm from "../../components/user/build-pizza/multistepPizzaBuilder/MultiStepForm";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { addNewPizza } from "../../redux/slice/cartSlice";

const BuildPizza = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const handleAdd = () => dispatch(addNewPizza());

  return (
    <PageLayout>
      <h1 className="mb-5 text-5xl text-amber-950 dark:text-slate-300 text-center font-cursive font-medium tracking-wider">
        Build your pizza
      </h1>
      {cart?.map((cartData) => (
        <PizzaAccordion pizzaId={cartData.id} key={cartData.id}>
          <MultiStepForm pizzaId={cartData.id} />
        </PizzaAccordion>
      ))}
      <Button onClick={handleAdd} type="filled">
        Add another pizza
      </Button>
     
    </PageLayout>
  );
};

export default BuildPizza;
