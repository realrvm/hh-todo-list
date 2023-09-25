import { createSlice } from "@reduxjs/toolkit";
import { AuthModalSchema } from "../../types";

const initialState: AuthModalSchema = {
  isOpen: false,
};

const authModalSlice = createSlice({
  name: "authModal",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { reducer: authModalReducer, actions: authModalActions } =
  authModalSlice;
