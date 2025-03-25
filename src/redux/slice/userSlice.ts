import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  email: "",
  name: "",
  address: [],
  phone: "",
  profileId:""
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {},
    registerUser: (state, action) => {},
    createProfile: (state, action) => {},
    updateProfile: (state, action) => {},
    logoutUser: (state, action) => {},
    getUserOrders: (state, action) => {},
    getOrderDetails: (state, action) => {},
    addAddress: (state, action) => {},
    removeAddress: (state, action) => {},
    updateAddress: (state, action) => {},
    deleteAccount: (state, action) => {},
  },
});
export const {
  loginUser,
  registerUser,
  createProfile,
  updateProfile,
  logoutUser,
  getUserOrders,
  getOrderDetails,
  addAddress,
  removeAddress,
  updateAddress,
  deleteAccount,
} = userSlice.actions;
export default userSlice.reducer;
