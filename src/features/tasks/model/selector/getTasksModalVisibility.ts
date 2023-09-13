import { StateSchema } from "@/app/providers/rtk-provider";

export const getTasksModalVisibility = (state: StateSchema) =>
  state.tasksModal.isOpen;
