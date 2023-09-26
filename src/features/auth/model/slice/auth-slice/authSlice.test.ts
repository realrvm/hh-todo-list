import { DeepPartial } from "@reduxjs/toolkit";
import { authActions, authReducer } from "./authSlice";
import { AuthSchema } from "../../types";

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

  test("should set error", () => {
    const state: DeepPartial<AuthSchema> = {
      error: "",
    };

    expect(
      authReducer(state as AuthSchema, authActions.setError("fatality error"))
    ).toEqual({ error: "fatality error" });
  });
});
