import { StateSchema } from "@/app/providers/rtk-provider";
import { DeepPartial } from "@reduxjs/toolkit";
import { AuthValidateErrors } from "../../types";
import { getAuthValidateErrors } from "./getAuthValidateErrors";

describe("getAuthValidateErrors.test", () => {
  test("should return validate errors", () => {
    const state: DeepPartial<StateSchema> = {
      auth: { validate: [AuthValidateErrors.NO_DATA] },
    };

    expect(getAuthValidateErrors(state as StateSchema)).toEqual(["no data"]);
  });
});
