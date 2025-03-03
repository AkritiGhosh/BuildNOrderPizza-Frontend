import React, { useEffect, useState } from "react";
import Stepper from "./Stepper";
import { PizzaOptionByCategory } from "../../../../lib/type";
import { API, fetchAPI } from "../../../../lib/core";
import ToppingsAccordion from "../../../common/accordion/ToppingsAccordion";
import OptionCard from "../OptionCard";

const MultiStepForm = () => {
  const [pizzaComponents, setPizzaComponents]:Array<object> = useState([]);

  useEffect(() => {
    fetchPizzaData();
  }, []);

  const fetchPizzaData = async () => {
    const response = await fetchAPI("GET", API.OPTIONS.GET_OPTIONS, false);
    console.log(response);
    // if (response?.data) {
     
    // }
    setPizzaComponents([
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
    ]);
  };
  return (
    <div>
      <Stepper />
      {pizzaComponents?.map((component, x) => (
        <>
          <ToppingsAccordion title={component?.component}>
            {component?.data?.map((option) => (
              <OptionCard {...option} />
            ))}
          </ToppingsAccordion>
          {x != pizzaComponents?.length - 1 && (
            <hr className="border-amber-500" />
          )}
        </>
      ))}
    </div>
  );
};

export default MultiStepForm;
