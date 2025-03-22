import { ReactElement } from "react";

const FormLayout = ({ children }: { children: ReactElement | string }) => {
  return (
    <div className="w-full min-h-full sm:w-2/3 md:w-1/2 mx-auto flex items-center">
      <div className="w-full border rounded border-amber-500/50 dark:border-slate-500/50 py-6 px-4 md:px-6 lg:px-10  flex flex-col items-start justify-center gap-4">
        {children}
      </div>
    </div>
  );
};

export default FormLayout;
