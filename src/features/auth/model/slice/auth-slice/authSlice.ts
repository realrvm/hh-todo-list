import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { AuthSchema } from "../../types";
import { login } from "../../api/login/login";

const initialState: AuthSchema = {
  isLoading: false,
  username: "",
  password: "",
  error: "",
  validate: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setError: (state) => {
      state.validate = undefined ;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.validate = undefined;
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.isLoading = false;
        state.validate = undefined;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.validate = action.payload;
      });
  },
});

export const { reducer: authReducer, actions: authActions } = authSlice;
