import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { LOCAL_STORAGE_AUTH_KEY } from "@/shared/lib/constants";
import { authModalActions } from "../slice/auth-modal-slice/authModalSlice";
import { User, userActions } from "@/entities/user";
import { AuthSchema } from "../types";

export const login = createAsyncThunk<
  User,
  Pick<AuthSchema, "username" | "password">,
  { rejectValue: string }
>("login/login", async (authData, thunkAPI): Promise<any> => {
  try {
    const response = await axios.post<User>(
      "http://localhost:8000/login",
      authData
    );

    if (!response.data) {
      return thunkAPI.rejectWithValue("Invalid username or password");
    }

    window.localStorage.setItem(
      LOCAL_STORAGE_AUTH_KEY,
      JSON.stringify(response.data)
    );

    thunkAPI.dispatch(authModalActions.close());
    thunkAPI.dispatch(userActions.setUserData(response.data));

    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});
