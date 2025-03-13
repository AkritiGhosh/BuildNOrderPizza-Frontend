import { createContext, ReactNode, useContext, useEffect } from "react";
import { useState } from "react";

const CartContext = createContext({ openCart: false, toggleDialog: () => {} });

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [openCart, setOpenCart] = useState(false);
  const toggleDialog = () => setOpenCart((prev) => !prev);

  return (
    <CartContext.Provider value={{ openCart, toggleDialog }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartDialog = () => useContext(CartContext);

export default useCartDialog;
