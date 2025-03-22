import React, { ReactElement } from "react";

const Heading = ({ children }: { children: ReactElement | string }) => {
  return (
    <h1 className="w-full mb-5 text-5xl text-amber-950 dark:text-slate-300 text-center font-cursive font-medium tracking-wider">
      {children}
    </h1>
  );
};

export default Heading;
