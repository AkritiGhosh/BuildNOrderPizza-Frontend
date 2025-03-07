import { Fragment, useEffect, useMemo, useState } from "react";
import Stepper from "./Stepper";
import { API, fetchAPI } from "../../../../lib/core";
import ToppingsAccordion from "../../../common/accordion/ToppingsAccordion";
import OptionCard from "./OptionCard";
import ToppingsCard from "./ToppingsCard";

const steps = [
  "Select Size",
  "Select Crust",
  "Select Toppings",
  "Select Cheese",
  "Select Sauce",
];
const MultiStepForm = ({ pizzaId }: { pizzaId: string }) => {
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
        return allComponents?.toppings;
      case 3:
        return allComponents?.sauce;
      case 4:
        return allComponents?.cheese;
      default:
        return allComponents?.size;
    }
  }, [currentStep, allComponents]);

  return (
    <div>
      <Stepper
        steps={steps}
        currentStep={currentStep}
        handleStepNavigation={handleStepNavigation}
      />
      {currentStep != 2 ? (
        <div
          className={`p-2 pb-3 rounded-b-md grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4`}
        >
          {currentComponents?.map((component, x: number) => (
            <OptionCard key={currentStep + x} {...component} />
          ))}
        </div>
      ) : (
        currentComponents?.map((component, x: number) => (
          <Fragment key={currentStep + x}>
            <ToppingsAccordion title={component?.category}>
              {component?.data?.map((option) => (
                <ToppingsCard {...option} pizzaId={pizzaId} />
              ))}
            </ToppingsAccordion>
            {x != allComponents?.length - 1 && (
              <hr className="border-amber-500" />
            )}
          </Fragment>
        ))
      )}
      <div className="w-full flex justify-between items-center mt-4">
        <button
          disabled={currentStep == 0}
          onClick={() => setCurrentStep((prev) => prev - 1)}
          className="disabled:opacity-0 h-8 px-4 text-base text-black dark:text-white bg-transparent border border-amber-800 dark:border-amber-300 flex items-center justify-center rounded-md hover:bg-amber-800/40 dark:hover:bg-amber-200/20"
        >
          Back
        </button>
        <button
          onClick={() => setCurrentStep((prev) => prev + 1)}
          disabled={currentStep == steps.length - 1}
          className="disabled:opacity-0 h-8 px-4 text-base text-black dark:text-white bg-transparent border border-amber-800 dark:border-amber-300 self-end flex items-center justify-center rounded-md hover:bg-amber-800/40 dark:hover:bg-amber-200/20"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MultiStepForm;
