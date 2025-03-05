import { createSlice } from "@reduxjs/toolkit";
import { PizzaCart } from "../../lib/type";

const initialState: PizzaCart[] = [
  {
    id: 1,
    title: "Pizza 1",
    crust: "",
    size: "",
    sauce: "",
    toppings: [],
  },
];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    selectPizzaSize: (state, action) => {
      const { id, size } = action.payload;
      const pizza = state.find((pizza) => pizza.id === id);
      if (pizza) pizza.size = size;
    },
    selectCrustType: (state, action) => {
      const { id, crust } = action.payload;
      const pizza = state.find((pizza) => pizza.id === id);
      if (pizza) pizza.crust = crust;
    },
    selectSauce: (state, action) => {
      const { id, sauce } = action.payload;
      const pizza = state.find((pizza) => pizza.id === id);
      if (pizza) pizza.sauce = sauce;
    },
    addNewToppings: (state, action) => {
      const { id, topping } = action.payload;
      const pizza = state.find((pizza) => pizza.id === id);
      if (pizza) {
        if (!pizza?.toppings.includes(topping)) pizza.toppings.push(topping);
      }
    },
    removeToppings: (state, action) => {
      //   state.value -= 1
    },
    changeToppingsQuantity: (state, action) => {
      //   state.value += action.payload
    },
    addNewPizza: (state) => {
      const newData = {
        id: state.length + 1,
        title: `Pizza ${state.length + 1}`,
        crust: "",
        size: "",
        sauce: "",
        toppings: [],
      };
      state.push(newData);
    },
    removePizza: (state, action) => {
      const id = action.payload;
      state = state.filter((pizza) => pizza.id != id);
    },
    duplicatePizza: (state, action) => {
      const id = action.payload;
      const pizza = state.find((pizza) => pizza.id === id);
      const newData = {
        ...pizza,
        id: state.length + 1,
        title: `Pizza ${state.length + 1}`,
      };
      state.push(newData);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  selectPizzaSize,
  selectCrustType,
  selectSauce,
  addNewToppings,
  removeToppings,
  addQuantityOfExistingToppings,
  addNewPizza,
  removePizza,
  duplicatePizza,
} = cartSlice.actions;

export default cartSlice.reducer;
