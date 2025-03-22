import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
  selectCrustType,
  selectPizzaSize,
  selectSauce,
} from "../../../../redux/slice/cartSlice";

type CardPropType = {
  pizzaId: number;
  _id: string;
  name: string;
  imgSrc?: string;
  price: number;
  isAvailable: boolean;
  category: "size" | "crust" | "toppings" | "cheese" | "sauce";
};

const OptionCard = ({
  pizzaId,
  _id = "",
  name,
  imgSrc = "",
  price,
  isAvailable,
  category,
}: CardPropType) => {
  const dispatch = useAppDispatch();
  const pizza = useAppSelector((state) =>
    state.cart?.find((p) => p.id === pizzaId)
  );
  if (!pizza) return null;
  const selected = pizza[category] === _id;

  const handleClick = () => {
    switch (category) {
      case "size": {
        dispatch(selectPizzaSize({ id: pizzaId, size: _id }));
        return;
      }
      case "crust": {
        dispatch(selectCrustType({ id: pizzaId, crust: _id }));
        return;
      }
      case "sauce": {
        dispatch(selectSauce({ id: pizzaId, sauce: _id }));
        return;
      }
      default:
        return;
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`relative py-2 px-4 rounded border flex flex-col gap-2 text-black dark:text-white bg-white dark:bg-black hover:shadow-[0_0_6px]  cursor-pointer text-left
        ${
          !isAvailable
            ? "cursor-not-allowed pointer-events-none opacity-50"
            : ""
        }
        ${
          selected
            ? "border-black dark:border-white hover:shadow-black dark:hover:shadow-white"
            : "border-amber-300 dark:border-slate-700 hover:shadow-amber-600 dark:hover:shadow-slate-500"
        }`}
    >
      {!isAvailable && (
        <div className="absolute inset-0 w-full h-full z-10 bg-amber-50/60 cursor-not-allowed flex flex-col gap-2 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            className="size-10 stroke-amber-500 drop-shadow-[0_0_2px_black]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
          <span className="text-base font-bold text-amber-400 drop-shadow-[0_0_2px_black]">
            Out of stock
          </span>
        </div>
      )}
      {imgSrc && <img src={imgSrc} className="" />}
      <h1>{name}</h1>
      <p>₹{price}</p>
    </button>
  );
};

export default OptionCard;
