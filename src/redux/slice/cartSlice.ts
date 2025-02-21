import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addNewData: (state) => {
      //   state.value += 1
    },
    removeData: (state) => {
      //   state.value -= 1
    },
    addQuantityOfExistingData: (state, action) => {
      //   state.value += action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewData, removeData, addQuantityOfExistingData } =
  cartSlice.actions;

export default cartSlice.reducer;
