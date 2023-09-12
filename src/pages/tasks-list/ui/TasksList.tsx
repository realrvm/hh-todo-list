import { FC } from "react";

import styles from "./styles.module.scss";

type TasksListProps = Record<string, never>;

const TasksList: FC<TasksListProps> = () => {
  return <div className={`${styles.tasksList}`}>TasksList</div>;
};

export default TasksList;
