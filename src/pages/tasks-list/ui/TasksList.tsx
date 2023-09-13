import { FC } from "react";

import { Container } from "@/shared/ui/container";

import styles from "./styles.module.scss";

type TasksListProps = Record<string, never>;

const TasksList: FC<TasksListProps> = () => {
  return (
    <Container>
      <div className={`${styles.tasksList}`}>456</div>
    </Container>
  );
};

export default TasksList;
