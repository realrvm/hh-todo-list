export type AuthModalSchema = {
  isOpen: boolean;
};

export type AuthSchema = {
  username: string;
  password?: string;
  isLoading: boolean;
  error?: string;
  validate?: AuthValidateErrors[];
};

export enum AuthValidateErrors {
  INCORRECT_USER_DATA = "incorrect user data",
  NO_USER_FOUND = "no user found",
  NO_DATA = "no data",
  SERVER_ERROR = "server error",
}
