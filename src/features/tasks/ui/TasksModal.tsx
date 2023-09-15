import { FC, useCallback } from "react";

import { Modal } from "@/shared/ui/modal";
import {
  useActionCreators,
  useStateSelector,
} from "@/app/providers/rtk-provider";
import { getTasksModalVisibility } from "../model/selector/getTasksModalVisibility";
import { tasksModalActions } from "../model/slice/tasksModalSlice";

import styles from "./styles.module.scss";
import { TasksForm } from "./tasks-form/TasksForm";

type TasksModalProps = Record<string, never>;

const TasksModal: FC<TasksModalProps> = () => {
  const isOpenTaskModal = useStateSelector(getTasksModalVisibility);
  const tasksModal = useActionCreators(tasksModalActions);

  const closeTasksModal = useCallback(() => {
    tasksModal.close();
  }, [tasksModal]);

  return (
    <Modal
      isOpen={isOpenTaskModal}
      onClose={closeTasksModal}
      element="modal"
      className={styles.TasksModal}
    >
      <TasksForm closeTasksModal={closeTasksModal} />
    </Modal>
  );
};

export default TasksModal;
