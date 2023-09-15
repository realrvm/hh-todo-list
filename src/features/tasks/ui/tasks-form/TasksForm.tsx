import {
  ChangeEvent,
  FC,
  FormEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";

import { Text } from "@/shared/ui/text";
import { Button, ButtonThemes } from "@/shared/ui/button";
import { Cross } from "@/shared/assets/icons";

import { TasksFormFooter } from "./tasks-form-footer/TasksFormFooter";
import { TasksFormTitle } from "./tasks-form-title/TasksFormTitle";
import { TasksFormLabel } from "./tasks-form-label/TasksFormLabel";
import { TasksFormDescription } from "./tasks-form-desciption/TasksFormDescription";
import { TasksFormDeadline } from "./tasks-form-deadline/TasksFormDeadline";
import { TasksFormPriority } from "./tasks-form-priority/TasksFormPriority";
import { createId } from "@/shared/lib/helpers/createId";
import {
  useActionCreators,
  useStateSelector,
} from "@/app/providers/rtk-provider";

import { taskActions, type TaskSchema } from "@/entities/task";

import { BLACK_COLOR } from "@/shared/lib/constants";
import styles from "./styles.module.scss";
import { getTaskDetails } from "@/pages/task-details";

type FormTarget = {
  title: { value: string };
  priority: { value: string };
  deadline: { value: string };
  description: { value: string };
  label: { value: string };
} & EventTarget;

type FormCurrent = {
  title: { value: string };
  priority: { value: string };
  deadline: { value: string };
  description: { value: string };
  label: { value: string };
} & HTMLFormElement;

type TasksFormProps = {
  closeTasksModal: () => void;
};

export const TasksForm: FC<TasksFormProps> = ({ closeTasksModal }) => {
  const [deadlineDate, setDeadlineDate] = useState<Date>(new Date());
  const [labelColor, setLabelColor] = useState(BLACK_COLOR);
  const taskDetails = useStateSelector(getTaskDetails);

  const { t } = useTranslation("task");
  const taskAction = useActionCreators(taskActions);

  const formRef = useRef<HTMLFormElement | null>(null);

  const taskId = taskDetails?.id || "";
  const isCompleted = false;

  const deadlineHandler = useCallback((date: Date) => {
    setDeadlineDate(date);
  }, []);

  const changeColorPallette = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const target = e.target;

      setLabelColor(target.value.toUpperCase());
    },
    [],
  );

  useEffect(() => {
    const form = formRef.current as FormCurrent;

    if (taskId.length && form) {
      form.title.value = taskDetails?.title || "";
      form.priority.value = taskDetails?.priority || "high";
      form.deadline.value = taskDetails?.deadline || new Date().toISOString();
      form.description.value = taskDetails?.description || "";
      form.label.value = taskDetails?.label || BLACK_COLOR;
    }
  }, [
    formRef,
    taskId,
    taskDetails?.title,
    taskDetails?.priority,
    taskDetails?.deadline,
    taskDetails?.description,
    taskDetails?.label,
  ]);

  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();
    const target = e.target as FormTarget;

    const task: TaskSchema = {
      id: taskId || createId(),
      title: target.title.value,
      priority: target.priority.value,
      deadline: target.deadline.value,
      description: target.description.value,
      label: target.label.value,
      completed: isCompleted,
    };

    taskAction.addTask(task);
    closeTasksModal();
  };

  const removeTask = useCallback(() => {
    taskAction.removeTask(taskId);
    closeTasksModal();
  }, [taskId, taskAction, closeTasksModal]);

  const clearModal = useCallback(() => {
    setDeadlineDate(new Date());
    setLabelColor(BLACK_COLOR);
    formRef.current?.reset();
  }, [formRef]);

  return (
    <div className={styles.tmWrapper}>
      <div className={styles.tmHeader}>
        <Text>{taskId ? t("edit-task") : t("add-task")}</Text>
        <Button theme={ButtonThemes.CLEAR} onClick={closeTasksModal}>
          <Cross />
        </Button>
      </div>
      <form ref={formRef} className={styles.tmForm} onSubmit={submitHandler}>
        <div className={styles.tmBody}>
          <TasksFormTitle className={styles.tmTitle} />
          <TasksFormDeadline
            className={styles.tmDeadline}
            deadlineHandler={deadlineHandler}
            deadlineDate={deadlineDate}
          />
          <TasksFormPriority className={styles.tmPriority} />
          <TasksFormLabel
            className={styles.tmLabel}
            changeColorPallette={changeColorPallette}
            labelColor={labelColor}
          />
          <TasksFormDescription className={styles.tmDescription} />
        </div>
        <TasksFormFooter
          removeTask={removeTask}
          clearModal={clearModal}
          taskId={taskId}
        />
      </form>
    </div>
  );
};
