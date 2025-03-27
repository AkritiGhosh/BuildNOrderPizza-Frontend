import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const login = createAsyncThunk("auth/log", async () => {});

const logout = createAsyncThunk("auth/log", async () => {});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    token: "",
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builders) => {
    builders
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = {};
        state.token = "";
        state.error = null;
      });
  },
});

export default authSlice;
