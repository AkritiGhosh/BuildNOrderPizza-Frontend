import { lazy } from "react";
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
  ];
  return (
    <>
      <h1>Choose your pizza selection</h1>
      {components?.map((component) => (
        <Accordion title={component?.component}>
          {component?.data?.map((option) => (
            <div>{option.name}</div>
          ))}
        </Accordion>
      ))}
    </>
  );
};

export default PizzaComponents;
