import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { changeToppings } from "../../../../redux/slice/cartSlice";

type CardPropType = {
  _id: string;
  name: string;
  img?: string;
  price: number;
  isAvailable: boolean;
  updateCart: React.Dispatch<React.SetStateAction<object>>;
};

const ToppingsCard = ({
  pizzaId,
  _id,
  name,
  img = "",
  price,
  isAvailable,
}: CardPropType) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    dispatch(changeToppings({ pizzaId, _id, quantity }));
  }, [quantity]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!/^\d+$/.test(e.target.value)) return;
    if (+e.target.value < 0 || +e.target.value > 10) return;
    setQuantity(+e?.target?.value);
  };

  return (
    <div
      className={`relative py-2 px-4 rounded border-2 flex flex-col gap-2 text-black dark:text-white hover:shadow-xl shadow-amber-950 dark:shadow-amber-200 cursor-pointer text-left
        ${
          !isAvailable
            ? "cursor-not-allowed pointer-events-none opacity-50"
            : null
        }
        ${
          quantity > 0
            ? "border-amber-300 bg-white/40 dark:bg-black/40"
            : "border-black dark:border-white"
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
      <p>{price}</p>
      <div className="w-auto h-6 flex items-center">
        {quantity > 0 ? (
          <>
            <button
              onClick={() => setQuantity((prev) => prev - 1)}
              className="w-auto h-full p-1 text-sm rounded-l bg-amber-700 dark:bg-amber-100 text-white dark:text-black font-bold font-mono hover:bg-amber-800 dark:hover:bg-amber-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
              </svg>
            </button>
            <input
              className="w-auto h-full max-w-6 text-sm bg-amber-700 dark:bg-amber-100 text-white dark:text-black font-bold font-mono focus:bg-amber-800 dark:focus:bg-amber-200 text-center focus:outline-none"
              value={quantity}
              type="number"
              onChange={handleInput}
            />
            <button
              disabled={quantity >= 10}
              onClick={() => setQuantity((prev) => prev + 1)}
              className="w-auto h-full p-1 text-sm rounded-r bg-amber-700 dark:bg-amber-100 text-white dark:text-black font-bold font-mono hover:bg-amber-800 dark:hover:bg-amber-200 disabled:pointer-events-none disabled:opacity-60"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </>
        ) : (
          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="w-auto h-full flex items-center justify-center px-3 text-sm rounded bg-amber-700 dark:bg-amber-100 text-white dark:text-black font-bold font-mono hover:bg-amber-800 dark:hover:bg-amber-200"
          >
            + Add
          </button>
        )}
      </div>
    </div>
  );
};

export default ToppingsCard;
