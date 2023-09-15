import { FC, useCallback } from "react";

import { useWindowWidth } from "@/shared/lib/hooks/useWindowWidth";
import { usePriorities } from "@/shared/lib/hooks/usePriorities";
import { TABLET_PAGE_WIDTH } from "@/shared/lib/constants";
import { convertDateFormat } from "@/shared/lib/helpers/convertDateFormat";
import { limitTextLength } from "@/shared/lib/helpers/limitTextLen";
import { AppLink } from "@/shared/ui/app-link";
import { Text, TextThemes } from "@/shared/ui/text";

import {
  ExcludeMedium,
  ExcludeSmall,
  PenMedium,
  PenSmall,
  SampleMedium,
  SampleSmall,
} from "@/shared/assets/icons";

import type { TaskSchema } from "../model/types";

import styles from "./styles.module.scss";
import { useActionCreators } from "@/app/providers/rtk-provider";
import { tasksModalActions } from "@/features/tasks";
import { taskDetailsActions } from "@/pages/task-details";

type TaskProps = {
  task: TaskSchema;
};

export const Task: FC<TaskProps> = ({ task }) => {
  const { width } = useWindowWidth();
  const priorities = usePriorities();
  const taskAction = useActionCreators(taskDetailsActions);
  const taskModalAction = useActionCreators(tasksModalActions);

  const { id, title, description, deadline, priority, label, completed } = task;
  const isDesktop = width >= TABLET_PAGE_WIDTH;

  const [date, time] = convertDateFormat(deadline);

  const editTask = useCallback(() => {
    taskAction.setTaskDetails(task);
    taskModalAction.open();
  }, [taskAction, taskModalAction, task]);

  const showTask = useCallback(() => {
    taskAction.setTaskDetails(task);
  }, [taskAction, task]);

  return (
    <div className={styles.taskWrap}>
      <AppLink to={`/${id}`} className={styles.taskTitle} onClick={showTask}>
        <div className={styles.taskTitleIcon}>
          {completed ? (
            isDesktop ? (
              <ExcludeMedium />
            ) : (
              <ExcludeSmall />
            )
          ) : isDesktop ? (
            <SampleMedium />
          ) : (
            <SampleSmall />
          )}
          <div
            className={styles.taskLabel}
            style={{ backgroundColor: label }}
          />
        </div>
        <div className={styles.taskTitleDescr}>
          <Text>{limitTextLength(title, width)}</Text>
          <Text theme={TextThemes.SECONDARY}>
            {limitTextLength(description, width)}
          </Text>
        </div>
      </AppLink>
      <div className={styles.taskDeadline}>
        <Text>{date || ""}</Text>
        <Text theme={TextThemes.SECONDARY}>{time || ""}</Text>
      </div>
      <div className={styles.taskPriority}>
        <Text>{priorities[priority]}</Text>
      </div>
      <div className={styles.taskEdit} onClick={editTask}>
        {isDesktop ? <PenMedium /> : <PenSmall />}
      </div>
    </div>
  );
};
