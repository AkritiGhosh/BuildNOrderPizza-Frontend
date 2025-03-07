import React, { useState } from "react";
import { useAppSelector } from "../../../../hooks/reduxHooks";
// import { useAppDispatch } from "../../../../hooks/reduxHooks";

type CardPropType = {
  _id: string;
  name: string;
  img?: string;
  price: number;
  isAvailable: boolean;
  updateCart: React.Dispatch<React.SetStateAction<object>>;
};

const OptionCard = ({
  _id = "",
  name,
  img = "",
  price,
  isAvailable,
  category,
}: CardPropType) => {
  // const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const [selected, setSelected] = useState(
    cart.find((item) => item?.category === _id)
  );
  return (
    <div
      className={`relative p-2 rounded border flex flex-col gap-2
        ${
          !isAvailable
            ? "cursor-not-allowed pointer-events-none opacity-50"
            : null
        }
        ${selected > 0 ? "border-amber-300" : "border-white"}`}
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
    </div>
  );
};

export default OptionCard;
