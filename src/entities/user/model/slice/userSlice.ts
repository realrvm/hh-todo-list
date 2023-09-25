import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { User, UserSchema } from "../types";
import { LOCAL_STORAGE_AUTH_KEY } from "@/shared/lib/constants";

const initialState: UserSchema = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state.userData = action.payload;
    },
    initUserData: (state) => {
      const user = window.localStorage.getItem(LOCAL_STORAGE_AUTH_KEY);

      if (user) state.userData = JSON.parse(user);
    },
    logout: (state) => {
      state.userData = undefined;

      window.localStorage.removeItem(LOCAL_STORAGE_AUTH_KEY);
    },
  },
});

export const { reducer: userReducer, actions: userActions } = userSlice;
