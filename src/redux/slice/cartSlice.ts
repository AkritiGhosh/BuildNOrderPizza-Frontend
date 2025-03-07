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

const addNewToppings = (pizza: PizzaCart, toppingId: string) => {
  pizza.toppings.push({ id: toppingId, quantity: 1 });
};
const removeToppings = (pizza: PizzaCart, toppingId: string) => {
  pizza.toppings = pizza.toppings.filter((topping) => topping.id != toppingId);
};
const changeQuantity = (
  pizza: PizzaCart,
  toppingId: string,
  quantity: number
) => {
  const topping = pizza.toppings.find((topping) => topping.id === toppingId);
  if (topping) topping.quantity = quantity;
};

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

    changeToppings: (state, action) => {
      const { id, toppingId, quantity } = action.payload;
      const pizza = state.find((pizza) => pizza.id === id);
      if (!pizza) return;
      if (!quantity) {
        addNewToppings(pizza, toppingId);
        return;
      }
      const toppings = pizza?.toppings.map((topping) => topping.id);
      if (toppings.includes(toppingId)) {
        if (quantity == 0) removeToppings(pizza, toppingId);
        else changeQuantity(pizza, toppingId, quantity);
      }
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
  changeToppings,
  addNewPizza,
  removePizza,
  duplicatePizza,
} = cartSlice.actions;

export default cartSlice.reducer;
