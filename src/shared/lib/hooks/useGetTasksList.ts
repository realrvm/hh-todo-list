import { useStateSelector } from "@/app/providers/rtk-provider";
import { getTasks, TaskSchema } from "@/entities/task";
import { getExecution, getPriorities } from "@/widgets/sidebar";

export const useGetTaskList = () => {
  const tasksList = useStateSelector(getTasks) as TaskSchema[];

  const selectedExecId = useStateSelector(getExecution);

  const selectedPriorityId = useStateSelector(getPriorities);

  const selectedTaskList = (
    execId = 3,
    priorityId: number,
    tasksList: TaskSchema[],
  ) => {
    let list = tasksList;

    if (execId === 1) {
      list = tasksList.filter((task) => !task.completed);
    }

    if (execId === 2) {
      list = tasksList.filter((task) => task.completed);
    }

    switch (priorityId) {
      case 4:
        return list.filter((task) => task.priority === "high");
      case 5:
        return list.filter((task) => task.priority === "medium");
      case 6:
        return list.filter((task) => task.priority === "low");
      default:
        return list;
    }
  };

  return selectedTaskList(selectedExecId, selectedPriorityId, tasksList);
};
