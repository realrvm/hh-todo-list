import { StateSchema } from "@/app/providers/rtk-provider";

export const getAuthValidateErrors = (state: StateSchema) =>
  state.auth.validate;
