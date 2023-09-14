import { ChangeEvent, FC, useCallback, useState } from "react";

import { Text } from "@/shared/ui/text";
import { Button, ButtonThemes } from "@/shared/ui/button";
import { Cross } from "@/shared/assets/icons";

import { TasksFormFooter } from "./tasks-form-footer/TasksFormFooter";
import { TasksFormTitle } from "./tasks-form-title/TasksFormTitle";
import { TasksFormLabel } from "./tasks-form-label/TasksFormLabel";
import { TasksFormDescription } from "./tasks-form-desciption/TasksFormDescription";
import { TasksFormDeadline } from "./tasks-form-deadline/TasksFormDeadline";
import { TasksFormPriority } from "./tasks-form-priority/TasksFormPriority";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

type TasksFormProps = {
  closeTasksModal: () => void;
};

export const TasksForm: FC<TasksFormProps> = ({ closeTasksModal }) => {
  const [deadlineDate, setDeadlineDate] = useState<Date>(new Date());
  const [labelColor, setLabelColor] = useState("#000000");
  const { t } = useTranslation("task");

  const task_id = "1";

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

  const removeTask = () => {};

  const clearModal = () => {};

  return (
    <div className={styles.tmWrapper}>
      <div className={styles.tmHeader}>
        <Text>{task_id ? t("edit-task") : t("add-task")}</Text>
        <Button theme={ButtonThemes.CLEAR} onClick={closeTasksModal}>
          <Cross />
        </Button>
      </div>
      <form className={styles.tmForm}>
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
          task_id={task_id}
        />
      </form>
    </div>
  );
};
