import { lazy } from "react";
import OptionCard from "./OptionCard";
// import Accordion from "../../common/accordion/Accordion";

const Accordion = lazy(() => import("../../common/accordion/Accordion"));

const PizzaComponents = () => {
  const components = [
    {
      component: "Veg",
      data: [
        {
          name: "Onion",
          price: 20,
          isAvailable: true,
        },
        {
          name: "Mushroom",
          price: 30,
          isAvailable: true,
        },
      ],
    },
    {
      component: "Veg",
      data: [
        {
          name: "Onion",
          price: 20,
          isAvailable: false,
        },
        {
          name: "Mushroom",
          price: 30,
          isAvailable: true,
        },
      ],
    },
  ];
  return (
    <>
      <h1>Choose your pizza selection</h1>
      {components?.map((component, x) => (
        <>
          <Accordion title={component?.component}>
            {component?.data?.map((option) => (
              <OptionCard {...option}/>
            ))}
          </Accordion>
          {x != components?.length - 1 && <hr className="border-amber-500" />}
        </>
      ))}
    </>
  );
};

export default PizzaComponents;
