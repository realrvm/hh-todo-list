import { StateSchema } from "@/app/providers/rtk-provider";

export const getHRToggledValue = (state: StateSchema) => state.hr.isOpen;
