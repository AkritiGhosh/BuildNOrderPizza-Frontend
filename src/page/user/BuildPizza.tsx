import PizzaAccordion from "../../components/common/accordion/PizzaAccordion";
import Button from "../../components/common/button/Button";
import Heading from "../../components/common/Heading";
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
      <Heading>Build your pizza</Heading>
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
