import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIResponse, User } from "../../lib/type";

export interface AuthState {
  user: User | object;
  token: string | null;
  loading: boolean;
  error: string | null | object;
}

const initialState: AuthState = {
  user: JSON.parse(sessionStorage.getItem("user") || "null"),
  token: sessionStorage.getItem("token"),
  loading: false,
  error: null,
};

const login = createAsyncThunk(
  "auth/log",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const api = "";
      const response : APIResponse = await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (response?.success) {
        const { token, user } = response.data;
        sessionStorage.setItem("user", JSON.stringify(user));
        sessionStorage.setItem("token", token);
        return { token, user };
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const logout = createAsyncThunk("auth/log", async () => {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("user");
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action?.payload?.user;
        state.token = action?.payload?.token;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload ?? 'Error occured';
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
