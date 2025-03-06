import  { Fragment, useEffect, useMemo, useState } from "react";
import Stepper from "./Stepper";
import { API, fetchAPI } from "../../../../lib/core";
import ToppingsAccordion from "../../../common/accordion/ToppingsAccordion";
import OptionCard from "../OptionCard";

const steps = [
  "Select Size",
  "Select Crust",
  "Select Toppings",
  "Select Cheese",
  "Select Sauce",
];
const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [allComponents, setAllComponents]: object[] = useState([]);
  console.log(allComponents, currentStep);

  useEffect(() => {
    fetchPizzaData();
  }, []);

  const fetchPizzaData = async () => {
    const response = await fetchAPI("GET", API.OPTIONS.GET_OPTIONS, false);
    setAllComponents(response?.data);
  };

  const handleStepNavigation = (stepNo: number): void => {
    setCurrentStep(stepNo);
  };

  const currentComponents = useMemo(() => {
    switch (currentStep) {
      case 1:
        return allComponents?.crust;
      case 2:
        return allComponents.toppings;
      case 3:
        return allComponents.sauce;
      case 4:
        return allComponents.cheese;
      default:
        return allComponents.size;
    }
  }, [currentStep, allComponents]);

  return (
    <div>
      <Stepper
        steps={steps}
        currentStep={currentStep}
        handleStepNavigation={handleStepNavigation}
      />
      {currentStep != 2
        ? currentComponents?.map((component, x: number) => (
            <OptionCard key={currentStep + x} {...component} />
          ))
        : currentComponents?.map((component, x: number) => (
            <Fragment key={currentStep + x}>
              <ToppingsAccordion title={component?.category}>
                {component?.data?.map((option) => (
                  <OptionCard {...option} />
                ))}
              </ToppingsAccordion>
              {x != allComponents?.length - 1 && (
                <hr className="border-amber-500" />
              )}
            </Fragment>
          ))}
      <div className="w-full flex justify-between items-center">
        <button
          disabled={currentStep == 0}
          onClick={() => setCurrentStep((prev) => prev - 1)}
        >
          Back
        </button>
        <button onClick={() => setCurrentStep((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
};

export default MultiStepForm;
