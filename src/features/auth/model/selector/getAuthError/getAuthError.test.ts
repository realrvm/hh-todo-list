import { StateSchema } from "@/app/providers/rtk-provider";
import { DeepPartial } from "@reduxjs/toolkit";
import { getAuthError } from "./getAuthError";

describe("getAuthError", () => {
  test("should return the correct error", () => {
    const state: DeepPartial<StateSchema> = {
      auth: {
        error: "fatality error",
      },
    };

    expect(getAuthError(state as StateSchema)).toBe("fatality error");
  });
});
