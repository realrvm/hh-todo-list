import { DeepPartial } from "@reduxjs/toolkit";

import { StateSchema } from "@/app/providers/rtk-provider";
import { getAuthPassword } from "./getAuthPassword";

describe("getAuthPassword", () => {
  test("should return the password", () => {
    const state: DeepPartial<StateSchema> = {
      auth: {
        password: "test",
      },
    };

    expect(getAuthPassword(state as StateSchema)).toBe("test");
  });
});
