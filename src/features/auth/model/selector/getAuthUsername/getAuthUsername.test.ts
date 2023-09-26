import { StateSchema } from "@/app/providers/rtk-provider";
import { DeepPartial } from "@reduxjs/toolkit";
import { getAuthUsername } from "./getAuthUsername";

describe("getAuthUsername", () => {
  test("should return the username", () => {
    const state: DeepPartial<StateSchema> = {
      auth: {
        username: "test",
      },
    };

    expect(getAuthUsername(state as StateSchema)).toBe("test");
  });
});
