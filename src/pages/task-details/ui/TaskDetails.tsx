import { FC } from "react";

import styles from "./styles.module.scss";

export type TaskDetailsProps = Record<string, never>;

const TaskDetails: FC<TaskDetailsProps> = () => {
  return <div className={styles.taskDetails}>TaskDetails</div>;
};

export default TaskDetails;
