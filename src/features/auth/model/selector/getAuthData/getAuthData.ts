import { StateSchema } from "@/app/providers/rtk-provider";

export const getAuthData = (state: StateSchema) => state.auth;
