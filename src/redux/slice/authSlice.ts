import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIResponse, User } from "../../lib/type";

export interface AuthState {
  loggedIn: boolean;
  user: User | object;
  token: string | null;
  loading: boolean;
  error: string | null | object;
}

const initialState: AuthState = {
  loggedIn: !!sessionStorage.getItem("token"),
  user: JSON.parse(sessionStorage.getItem("user") || "null"),
  token: sessionStorage.getItem("token"),
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const api = "http://localhost:8020/login";
      const response = await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const json: APIResponse = await response?.json();
      console.log(json);
      if (json?.success) {
        const { token, user } = json.data;
        if (!user || !token) throw new Error("No user found");
        console.log(Object.keys(user));
        for (const item of Object.keys(user))
          sessionStorage.setItem(item, user[item]);
        // console.log(item, user[item]);
        sessionStorage.setItem("token", token);
        return { token, user };
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk("auth/log", () =>
  sessionStorage.clear()
);

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
        state.loggedIn = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload ?? "Error occured";
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = {};
        state.token = "";
        state.error = null;
        state.loggedIn = false;
      });
  },
});

export default authSlice.reducer;
