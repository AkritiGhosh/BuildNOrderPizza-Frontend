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
  img?: string;
  price: number;
  isAvailable: boolean;
  category: "size" | "crust" | "toppings" | "cheese" | "sauce";
};

const OptionCard = ({
  pizzaId,
  _id = "",
  name,
  img = "",
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
      className={`relative py-2 px-4 rounded border-2 flex flex-col gap-2 text-black dark:text-white hover:shadow-xl shadow-amber-950 dark:shadow-amber-200 cursor-pointer text-left
        ${
          !isAvailable
            ? "cursor-not-allowed pointer-events-none opacity-50"
            : null
        }
        ${
          selected
            ? "border-black bg-white/40 dark:bg-black/40"
            : "border-amber-300 bg-white/20 dark:border-white"
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
      {img && <img src={img} className="" />}
      <h1>{name}</h1>
      <p>₹{price}</p>
    </button>
  );
};

export default OptionCard;
