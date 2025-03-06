import React from "react";

type StepperPropsType = {
  handleStepNavigation: (i: number) => void;
  steps: string[];
  currentStep: number;
};

const Stepper = ({
  handleStepNavigation,
  steps,
  currentStep = 0,
}: StepperPropsType) => {
  return (
    <div className="w-full h-2 flex justify-between gap-2 items-center">
      {steps?.map((_, i) => (
        <>
          <button
            onClick={() => handleStepNavigation(i)}
            className={`w-2.5 min-w-2.5 h-2.5 inline-block rounded-full ${
              i <= currentStep ? "bg-amber-500" : "bg-amber-200"
            }`}
          />
          {i != steps?.length - 1 ? (
            <button
              className={`w-full h-0.5 inline-block rounded ${
                i < currentStep ? "bg-amber-500" : "bg-amber-200"
              }`}
            />
          ) : null}
        </>
      ))}
    </div>
  );
};

export default Stepper;
