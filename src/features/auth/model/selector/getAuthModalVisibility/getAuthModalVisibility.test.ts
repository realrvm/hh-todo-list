import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/rtk-provider";
import { getAuthModalVisibility } from "./getAuthModalVisibility";

describe("getAuthModalVisibility.test", () => {
  test("should toggle getAuthModalVisibility value", () => {
    const state: DeepPartial<StateSchema> = {
      authModal: {
        isOpen: true,
      },
    };

    expect(getAuthModalVisibility(state as StateSchema)).toBe(true);
  });
});
