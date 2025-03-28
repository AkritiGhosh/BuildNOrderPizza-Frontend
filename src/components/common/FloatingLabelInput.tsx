import { ReactElement } from "react";

type InputProps = {
  id: string;
  name: string;
  type: string;
  label: string;
  value: string;
  setValue: (value: string | ((prevVar: string) => string)) => void;
  className?: string;
  icon?: ReactElement;
};

const FloatingLabelInput = ({
  id,
  name,
  value,
  label,
  type = "text",
  setValue,
  className,
  icon,
  ...props
}: InputProps) => {
  return (
    <div id={id} className="w-full relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
        className={`w-full h-10 rounded-lg text-base text-amber-700 dark:text-slate-300 px-4 bg-transparent border border-gray-300 focus:border-amber-500 dark:focus:border-slate-500 !outline-0 peer ${
          value?.length > 0 && "invalid:border-red-500"
        } ${className}`}
        {...props}
      />
      {icon}
      <label
        className={`pointer-events-none duration-300 absolute
          ${
            value?.length > 0
              ? "text-gray-500 left-4 -translate-y-1/2 text-xs top-0 px-1 bg-white dark:bg-slate-900 peer-invalid:text-red-500"
              : "text-base text-gray-500 left-4 top-2/4 -translate-y-1/2 peer-focus:text-xs peer-focus:top-0 peer-focus:px-1 peer-focus:bg-white dark:peer-focus:bg-slate-900 peer-valid:text-xs peer-valid:top-0 peer-valid:px-1 peer-valid:bg-white dark:peer-valid:bg-slate-900 peer-focus:text-amber-800 dark:peer-focus:text-slate-400"
          }`}
        htmlFor="floating_label_input"
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
