import { StateSchema } from "@/app/providers/rtk-provider";
import { DeepPartial } from "@reduxjs/toolkit";
import { getAuthData } from "./getAuthData";

describe("getAuthData", () => {
  test("should return auth data", () => {
    const state: DeepPartial<StateSchema> = {
      auth: {
        error: "",
        password: "test",
        username: "test",
        isLoading: false,
      },
    };

    expect(getAuthData(state as StateSchema)).toEqual({
      error: "",
      password: "test",
      username: "test",
      isLoading: false,
    });
  });
});
