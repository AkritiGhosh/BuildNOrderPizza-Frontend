import { createSlice } from "@reduxjs/toolkit";
import { PizzaCart } from "../../lib/type";

type OrderType = {
  orderId: string;
  userId: string;
  pizzaList: PizzaCart[];
  basePrice: number;
  totalPrice: number;
  orderDate: string;
  addressUsed: string;
  paymentMethod: string;
  status: string;
};

const initialState: OrderType = {
  orderId: "",
  orderDate: "",
  userId: "",
  addressUsed: "",
  pizzaList: [],
  basePrice: 0,
  totalPrice: 0,
  paymentMethod: "",
  status: "",
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    calculatePrice: (state, action) => {},
    placeOrder: (state, action) => {},
    setAddress: (state, action) => {},
    setPaymentMethod: (state, action) => {},
    getOrderStatus: (state, action) => {},
    cancelOrder : (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { calculatePrice, placeOrder } = orderSlice.actions;

export default orderSlice.reducer;
