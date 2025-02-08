import { lazy, useEffect, useState } from "react";
import OptionCard from "./OptionCard";
import { API, fetchAPI } from "../../../lib/core";
import {  PizzaOptionByCategory } from "../../../lib/type";
// import Accordion from "../../common/accordion/Accordion";

const Accordion = lazy(() => import("../../common/accordion/Accordion"));

type PizzaComponentProps = {
  cart: object;
  updateCart: React.Dispatch<React.SetStateAction<object>>;
};

const PizzaComponents = ({ cart, updateCart }: PizzaComponentProps) => {
  const [pizzaComponents, setPizzaComponents] = useState<[PizzaOptionByCategory]>([]);
 
  useEffect(() => {
    fetchPizzaData();
  }, []);

  const fetchPizzaData = async () => {
    const response = await fetchAPI("GET", API.OPTIONS.GET_OPTIONS, false);
    console.log(response);
    if (response?.data) {
      setPizzaComponents(response?.data);
    }
  };
  return (
    <>
      <h1>Choose your pizza selection</h1>
      {pizzaComponents?.map((component, x) => (
        <>
          <Accordion title={component?.category}>
            {component?.data?.map((option) => (
              <OptionCard {...option} updateCart={updateCart} />
            ))}
          </Accordion>
          {x != pizzaComponents?.length - 1 && <hr className="border-amber-500" />}
        </>
      ))}
    </>
  );
};

export default PizzaComponents;
