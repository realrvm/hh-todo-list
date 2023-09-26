import { StateSchema } from "@/app/providers/rtk-provider";
import { DeepPartial } from "@reduxjs/toolkit";
import { getAuthIsLoading } from "./getAuthIsLoading";

describe("getAuthIsLoading", () => {
  test("should return loading state", () => {
    const state: DeepPartial<StateSchema> = {
      auth: {
        isLoading: true,
      },
    };

    expect(getAuthIsLoading(state as StateSchema)).toBe(true);
  });
});
