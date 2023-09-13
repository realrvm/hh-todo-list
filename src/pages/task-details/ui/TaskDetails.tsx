import { FC } from "react";

import { Container } from "@/shared/ui/container";

import styles from "./styles.module.scss";

export type TaskDetailsProps = Record<string, never>;

const TaskDetails: FC<TaskDetailsProps> = () => {
  return (
    <Container>
      <div className={styles.taskDetails}>123</div>
    </Container>
  );
};

export default TaskDetails;
