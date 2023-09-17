import { FC, useMemo } from "react";

import { Container } from "@/shared/ui/container";
import { useTranslation } from "react-i18next";

import { Task } from "@/entities/task/ui/Task";
import { Text } from "@/shared/ui/text";
import { useGetTaskList } from "@/shared/lib/hooks/useGetTasksList";

import styles from "./styles.module.scss";

type TasksListProps = Record<string, never>;

const TasksList: FC<TasksListProps> = () => {
  const tasksList = useGetTaskList();
  const { t } = useTranslation("task");

  const menuItems = useMemo(
    () => [t("title"), t("deadline"), t("priority")],
    [t],
  );

  return (
    <Container>
      <div className={styles.tasksList}>
        {menuItems.map((item) => (
          <Text key={item} className={styles.tasksListHeader}>
            {item}
          </Text>
        ))}
      </div>
      {tasksList?.map((task) => <Task key={task.id} task={task} />)}
    </Container>
  );
};

export default TasksList;
