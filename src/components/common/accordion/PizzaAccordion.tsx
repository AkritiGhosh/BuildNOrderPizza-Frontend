import { ReactNode, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { duplicatePizza, removePizza } from "../../../redux/slice/cartSlice";

const PizzaAccordion = ({
  pizzaId,
  children,
}: {
  pizzaId: number;
  children: ReactNode;
}) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const pizza = cart.find((pizza) => pizza.id === pizzaId);

  const [open, setOpen] = useState(true);

  if (!pizza) return null;
  const toggleAccordion = (): void => setOpen((prev) => !prev);
  const deletePizza = () => dispatch(removePizza(pizza.id));
  const copyPizzaData = () => dispatch(duplicatePizza(pizza));

  return (
    <div className="w-full p-2 rounded-lg border border-amber-300/50 dark:border-slate-400/50 bg-amber-50/80 dark:bg-slate-950/80 mb-4 last:mb-0">
      <div
        className={`w-full h-12 px-2 py-1 flex items-center justify-between text-base ${
          open
            ? "text-black dark:text-amber-600 font-semibold "
            : "text-amber-900 dark:text-amber-300 font-normal"
        } transition-colors duration-300`}
      >
        <span>{pizza.title}</span>
        <span className="inline-flex gap-4">
          <button
            onClick={copyPizzaData}
            className="p-2 hover:bg-amber-800/20 dark:hover:bg-amber-200/20 rounded-md size-10 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="size-6 stroke-amber-900 dark:stroke-amber-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
              />
            </svg>
          </button>
          <button
            onClick={deletePizza}
            disabled={cart?.length <= 1}
            className="p-2 hover:bg-amber-800/20 dark:hover:bg-amber-200/20 rounded-md size-10 flex items-center justify-center disabled:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="red"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
          <button
            onClick={toggleAccordion}
            className="p-2 hover:bg-amber-800/20 dark:hover:bg-amber-200/20 rounded-md size-10 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={open ? 2.5 : 2}
              stroke="currentColor"
              className={`size-4 ${
                open ? "-scale-y-100" : "scale-y-100"
              } transition-transform duration-300`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.99 16.5 3.75 3.75m0 0 3.75-3.75m-3.75 3.75V3.75H4.49"
              />
            </svg>
          </button>
        </span>
      </div>

      <div
        className={`${open ? "scale-y-100" : "scale-y-0 absolute"}
        transition-transform duration-300 origin-top
         p-2 pb-3 rounded-b-md `}
      >
        {children}
      </div>
    </div>
  );
};

export default PizzaAccordion;
