import { FC } from "react";

import styles from "./styles.module.scss";

type TasksListProps = Record<string, never>;

const TasksList: FC<TasksListProps> = () => {
  return <div className={`${styles.tasksList}`}>456</div>;
};

export default TasksList;
