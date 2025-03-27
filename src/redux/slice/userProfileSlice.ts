import { apiSlice } from "./apiSlice";

const initialState = {
  profileId: "",
  email: "",
  name: "",
  address: [],
  phone: "",
};

// const profileSlice = createSlice({
//   name: "profile",
//   initialState,
//   reducers: {
//     loginUser: (state, action) => {},
//     registerUser: (state, action) => {},
//     createProfile: (state, action) => {},
//     updateProfile: (state, action) => {},
//     logoutUser: (state, action) => {},
//     getUserOrders: (state, action) => {},
//     getOrderDetails: (state, action) => {},
//     addAddress: (state, action) => {},
//     removeAddress: (state, action) => {},
//     updateAddress: (state, action) => {},
//     deleteAccount: (state, action) => {},
//   },
// });

const profileAPIs = {
  LOGIN: {
    url: ``,
    method: "POST",
  },
  REGISTER: {
    url: ``,
    method: "POST",
  },
};

export const profileSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({ ...profileAPIs.LOGIN, body: data }),
    }),
  }),
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
} = profileSlice.actions;
export default profileSlice.reducer;
