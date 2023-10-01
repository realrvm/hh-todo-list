import { createAsyncThunk } from "@reduxjs/toolkit";

import { LOCAL_STORAGE_AUTH_KEY } from "@/shared/lib/constants";
import { User, userActions } from "@/entities/user";
import { ThunkConfig } from "@/app/providers/rtk-provider";
import { authModalActions } from "../../slice/auth-modal-slice/authModalSlice";
import { AuthSchema, AuthValidateErrors } from "../../types";
import { validate } from "../validate/validate";

const serverErrorMessages: Record<string, AuthValidateErrors[]> = {
  "Network Error": [AuthValidateErrors.SERVER_ERROR],
  "Request failed with status code 403": [AuthValidateErrors.NO_USER_FOUND],
};

export const login = createAsyncThunk<
  User,
  Pick<AuthSchema, "username" | "password">,
  ThunkConfig<AuthValidateErrors[]>
>("login/login", async (authData, thunkAPI): Promise<any> => {
  const { rejectWithValue, dispatch, extra } = thunkAPI;

  const errors = validate(authData);

  if (errors.length) {
    return rejectWithValue([AuthValidateErrors.INCORRECT_USER_DATA]);
  }

  try {
    const response = await extra.api.post<User>("/login", authData);
    console.log(response);

    if (!response.data) {
      return rejectWithValue([AuthValidateErrors.NO_DATA]);
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
      const { message } = error;
      return rejectWithValue(serverErrorMessages[message]);
    }
  }
});
