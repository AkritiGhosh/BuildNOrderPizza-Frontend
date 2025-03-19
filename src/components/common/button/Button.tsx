import { ReactElement } from "react";

type ButtonPropsType = {
  children: ReactElement | string;
  type: "filled" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  onClick: () => void;
};

const Button = ({
  children,
  type,
  size,
  className,
  ...props
}: ButtonPropsType) => {
  const style =
    type == "filled"
      ? "border-amber-400 dark:border-slate-600 bg-amber-400 dark:bg-slate-600 hover:bg-amber-200 dark:hover:bg-slate-800 "
      : type == "outline"
      ? "border-amber-600 dark:border-slate-600 bg-transparent hover:bg-amber-600/50 dark:hover:bg-slate-600/50"
      : "";

  const btnSize =
    size == "sm"
      ? "h-8 px-2 gap-2 text-sm"
      : size == "lg"
      ? "h-12 px-3 gap-4 text-md"
      : "h-10 px-2.5 gap-3 text-base";

  return (
    <button
      {...props}
      className={`relative w-auto ${btnSize} flex items-center border rounded hover:shadow hover:shadow-amber-200 dark:hover:shadow-slate-300 font-medium hover:font-semibold text-black dark:text-white ${style}  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
