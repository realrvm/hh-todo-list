import { DeepPartial } from "@reduxjs/toolkit";
import { authActions, authReducer } from "./authSlice";
import { AuthSchema, AuthValidateErrors } from "../../types";
import { login } from "../../api/login/login";

describe("authSlice", () => {
  test("should set username", () => {
    const state: DeepPartial<AuthSchema> = {
      username: "",
    };

    expect(
      authReducer(state as AuthSchema, authActions.setUsername("roman"))
    ).toEqual({ username: "roman" });
  });

  test("should set password", () => {
    const state: DeepPartial<AuthSchema> = {
      password: "",
    };

    expect(
      authReducer(state as AuthSchema, authActions.setPassword("secret"))
    ).toEqual({ password: "secret" });
  });

  test("should reset error", () => {
    const state: DeepPartial<AuthSchema> = {
      validate: [AuthValidateErrors.NO_USER_FOUND],
    };

    expect(authReducer(state as AuthSchema, authActions.setError())).toEqual({
      validate: undefined,
    });
  });

  test("should update state during pending", () => {
    const state: DeepPartial<AuthSchema> = {
      validate: [AuthValidateErrors.NO_USER_FOUND],
      isLoading: false,
    };
    expect(authReducer(state as AuthSchema, login.pending)).toEqual({
      validate: undefined,
      isLoading: true,
    });
  });

  test("should update state when fulfilled", () => {
    const state: DeepPartial<AuthSchema> = {
      isLoading: true,
    };
    expect(authReducer(state as AuthSchema, login.fulfilled)).toEqual({
      isLoading: false,
    });
  });
});
