import React from "react";

const Loader = () => {
  return (
    <div className="w-screen h-screen fixed inset-0 bg-white/70 dark:bg-black/70 flex items-center justify-center z-[9999]">
      <img src="/pizzaLoader.gif" />
    </div>
  );
};

export default Loader;
