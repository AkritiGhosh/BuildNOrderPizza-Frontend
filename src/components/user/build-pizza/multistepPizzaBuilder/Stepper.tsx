import React from "react";

const Stepper = () => {
  const step = 0;
  const steps = ["", "", "", ""];
  return (
    <div className="w-full h-2 flex justify-between gap-2 items-center">
      {steps?.map((_, i) => (
        <>
          <span
            className={`w-2.5 min-w-2.5 h-2.5 inline-block rounded-full ${
              i <= step ? "bg-amber-500" : "bg-amber-200"
            }`}
          />
          {i != steps?.length -1 ? (
            <span
              className={`w-full h-0.5 inline-block rounded ${
                i < step ? "bg-amber-500" : "bg-amber-200"
              }`}
            />
          ) : null}
        </>
      ))}
    </div>
  );
};

export default Stepper;
