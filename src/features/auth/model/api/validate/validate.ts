import { AuthSchema, AuthValidateErrors } from "../../types";

type AuthData = Pick<AuthSchema, "username" | "password">;

export const validate = (authData: AuthData) => {
  const { password, username } = authData;

  const errors: AuthValidateErrors[] = [];

  if (!authData) {
    errors.push(AuthValidateErrors.NO_DATA);
  }

  if (!username || !password) {
    errors.push(AuthValidateErrors.INCORRECT_USER_DATA);
  }

  return errors;
};
