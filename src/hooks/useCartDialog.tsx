import { createContext, ReactNode, useContext } from "react";
import { useState } from "react";
import CartDrawer from "../components/common/cart/Drawer";

const CartContext = createContext({
  isCartOpen: false,
  openDrawer: () => {},
  closeDrawer: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const openDrawer = () => setIsCartOpen(true);
  const closeDrawer = () => setIsCartOpen(false);

  console.log(isCartOpen);
  return (
    <CartContext.Provider value={{ isCartOpen, closeDrawer, openDrawer }}>
      {children}
      {isCartOpen ? <CartDrawer /> : null}
    </CartContext.Provider>
  );
};

const useCartDialog = () => useContext(CartContext);

export default useCartDialog;
