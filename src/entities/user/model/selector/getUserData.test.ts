import { DeepPartial } from "@reduxjs/toolkit";

import { StateSchema } from "@/app/providers/rtk-provider";
import { getUserData } from "./getUserData";

describe("getUserData", () => {
  test("should return user data", () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        userData: {
          id: "1",
          username: "test",
        },
      },
    };

    expect(getUserData(state as StateSchema)).toEqual({
      id: "1",
      username: "test",
    });
  });
});
