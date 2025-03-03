import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    selectPizzaSize: (state) => {},
    selectCrustType: (state) => {},
    selectSauce: (state) => {},
    addNewToppings: (state) => {
      //   state.value += 1
    },
    removeToppings: (state) => {
      //   state.value -= 1
    },
    addQuantityOfExistingToppings: (state, action) => {
      //   state.value += action.payload
    },
    addNewPizza: (state) => {},
    removePizza: (state) => {},
    duplicatePizza: (state) => {},
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
