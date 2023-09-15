import { FC, useMemo } from "react";

import { Container } from "@/shared/ui/container";
import { useTranslation } from "react-i18next";

import { Text } from "@/shared/ui/text";

import { Task } from "@/entities/task/ui/Task";
import { useStateSelector } from "@/app/providers/rtk-provider";
import { type TaskSchema, getTasks, taskReducer } from "@/entities/task";
import {
  ModuleLoader,
  ReducersList,
} from "@/shared/lib/components/ModuleLoader";

import styles from "./styles.module.scss";

type TasksListProps = Record<string, never>;

const intialReducers: ReducersList = {
  task: taskReducer,
};

const TasksList: FC<TasksListProps> = () => {
  const tasksList = useStateSelector(getTasks) as TaskSchema[];
  const { t } = useTranslation("task");

  const menuItems = useMemo(
    () => [t("title"), t("deadline"), t("priority")],
    [t],
  );

  return (
    <Container>
      <div className={`${styles.tasksList}`}>
        {menuItems.map((item) => (
          <Text key={item} className={styles.tasksListHeader}>
            {item}
          </Text>
        ))}
      </div>
      <ModuleLoader reducers={intialReducers}>
        {tasksList?.map((task) => <Task key={task.id} task={task} />)}
      </ModuleLoader>
    </Container>
  );
};

export default TasksList;
