import { StateSchema } from "@/app/providers/rtk-provider";

export const getAuthModalVisibility = (state: StateSchema) =>
  state.authModal.isOpen;
