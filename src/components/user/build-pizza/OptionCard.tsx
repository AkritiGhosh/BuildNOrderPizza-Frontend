import React, { useState } from "react";

type CardPropType = {
  name: string;
  img?: string;
  price: number;
  isAvailable: Boolean;
};

const OptionCard = ({ name, img = "", price, isAvailable }: CardPropType) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div
      className={`relative p-2 rounded border flex flex-col gap-2
        ${
          !isAvailable
            ? "cursor-not-allowed pointer-events-none opacity-50"
            : null
        }
        ${quantity > 0 ? "border-amber-300" : "border-white"}`}
    >
      {!isAvailable && (
        <div className="absolute inset-0 w-full h-full z-10 bg-amber-50/60 cursor-not-allowed flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            className="size-10 stroke-amber-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
        </div>
      )}
      {img && <img src={img} className="" />}
      <h1>{name}</h1>
      <p>{price}</p>
      <div className="w-auto h-8 flex items-center">
        {quantity > 0 ? (
          <>
            <button
              onClick={() => setQuantity((prev) => prev - 1)}
              className="w-auto h-full py-1 px-2 text-sm rounded-l bg-amber-100 text-black font-bold font-mono hover:bg-amber-200"
            >
              -
            </button>
            <input
              className="w-auto h-full max-w-10 text-sm bg-amber-100 text-black font-bold font-mono focus:bg-amber-200 text-center"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(+e?.target?.value)}
            />
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="w-auto h-full py-1 px-2 text-sm rounded-r bg-amber-100 text-black font-bold font-mono hover:bg-amber-200"
            >
              +
            </button>
          </>
        ) : (
          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="w-auto h-full py-1 px-2 text-sm rounded bg-amber-100 text-black font-bold font-mono hover:bg-amber-200"
          >
            + Add
          </button>
        )}
      </div>
    </div>
  );
};

export default OptionCard;
