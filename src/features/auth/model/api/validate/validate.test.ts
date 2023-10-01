import { AuthSchema, AuthValidateErrors } from "../../types";
import { validate } from "./validate";

const userData: Pick<AuthSchema, "username" | "password"> = {
  username: "roman",
  password: "123",
};

describe("validate", () => {
  test("success", () => {
    const result = validate(userData);
    expect(result).toEqual([]);
  });

  test("without username and password", () => {
    const result = validate({ ...userData, username: "", password: "" });
    expect(result).toEqual([AuthValidateErrors.INCORRECT_USER_DATA]);
  });
});
