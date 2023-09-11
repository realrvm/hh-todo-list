import { FC } from 'react';

import styles from './styles.module.scss';

type TasksListProps = {
  className?: string;
};

const TasksList:FC<TasksListProps> = ({ className }) => {
  return (
    <div className={`${styles.tasksList} ${className}`}>
      TasksList
    </div>
  )
}

export default TasksList;
