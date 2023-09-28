import { createAsyncThunk } from "@reduxjs/toolkit";

import { LOCAL_STORAGE_AUTH_KEY } from "@/shared/lib/constants";
import { authModalActions } from "../slice/auth-modal-slice/authModalSlice";
import { User, userActions } from "@/entities/user";
import { AuthSchema } from "../types";
import { ThunkConfig } from "@/app/providers/rtk-provider";

export const login = createAsyncThunk<
  User,
  Pick<AuthSchema, "username" | "password">,
  ThunkConfig<string>
>("login/login", async (authData, thunkAPI): Promise<any> => {
  const { rejectWithValue, dispatch, extra } = thunkAPI;

  try {
    const response = await extra.api.post<User>("/login", authData);

    if (!response.data) {
      return thunkAPI.rejectWithValue("Invalid username or password");
    }

    window.localStorage.setItem(
      LOCAL_STORAGE_AUTH_KEY,
      JSON.stringify(response.data)
    );

    dispatch(authModalActions.close());
    dispatch(userActions.setUserData(response.data));

    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});
