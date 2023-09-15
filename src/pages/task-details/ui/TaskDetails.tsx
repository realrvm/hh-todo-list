import { FC, useCallback } from "react";

import { Container } from "@/shared/ui/container";

import {
  useActionCreators,
  useStateSelector,
} from "@/app/providers/rtk-provider";
import { useNavigate, useParams } from "react-router-dom";
import { Text } from "@/shared/ui/text";

import { limitTextLength } from "@/shared/lib/helpers/limitTextLen";
import {
  ArrowLeft,
  ExcludeMedium,
  PenMedium,
  SampleMedium,
  TrashBin,
} from "@/shared/assets/icons";
import { useWindowWidth } from "@/shared/lib/hooks/useWindowWidth";
import { usePriorities } from "@/shared/lib/hooks/usePriorities";
import { useTranslation } from "react-i18next";
import { convertDateFormat } from "@/shared/lib/helpers/convertDateFormat";
import { DESKTOP_PAGE_WIDTH } from "@/shared/lib/constants";

import { Button } from "@/shared/ui/button";
import { getTasks, taskActions } from "@/entities/task";
import { taskDetailsActions } from "../model/slice/taskDetailsSlice";
import { tasksModalActions } from "@/features/tasks/model/slice/tasksModalSlice";

import styles from "./styles.module.scss";

type TaskDetailsProps = Record<string, never>;

const TaskDetails: FC<TaskDetailsProps> = () => {
  const state = useStateSelector(getTasks);
  const navigate = useNavigate();
  const { width } = useWindowWidth();
  const priorities = usePriorities();
  const { t } = useTranslation("task");
  const { id: taskId } = useParams();
  const taskAction = useActionCreators(taskActions);
  const taskDetailsAction = useActionCreators(taskDetailsActions);
  const taskModalAction = useActionCreators(tasksModalActions);

  const taskDetails = state?.find((task) => task.id === taskId);

  const deadline = convertDateFormat(taskDetails?.deadline);
  const isWideDesktop = width >= DESKTOP_PAGE_WIDTH;

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const toggleCompleted = useCallback(() => {
    if (taskId) taskAction.editTask(taskId);
  }, [taskAction, taskId]);

  const removeTask = useCallback(() => {
    if (taskId) taskAction.removeTask(taskId);
    goBack();
  }, [taskId, goBack, taskAction]);

  const editTask = useCallback(() => {
    taskDetailsAction.setTaskDetails(taskDetails);
    taskModalAction.open();
  }, [taskDetailsAction, taskModalAction, taskDetails]);

  if (!taskDetails?.title) {
    return (
      <Container>
        <div className={styles.taskDetailsHeader}>
          <div className={styles.taskDetailsTitle} onClick={goBack}>
            <ArrowLeft />
            <div></div>
            <Text>{t("not-found")}</Text>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className={styles.taskDetailsHeader}>
        <div className={styles.taskDetailsTitle} onClick={goBack}>
          <ArrowLeft />
          <div></div>
          <Text>{limitTextLength(taskDetails?.title || "", width)}</Text>
        </div>
        <div className={styles.taskDetailsActions}>
          <Button onClick={toggleCompleted}>
            {taskDetails?.completed ? <SampleMedium /> : <ExcludeMedium />}
            {isWideDesktop ? (
              <Text>{taskDetails?.completed ? t("new") : t("done")}</Text>
            ) : null}
          </Button>
          <Button onClick={removeTask}>
            <TrashBin />
            {isWideDesktop ? <Text>{t("remove")}</Text> : null}
          </Button>
          <Button onClick={editTask}>
            <PenMedium />
            {isWideDesktop ? <Text>{t("edit")}</Text> : null}
          </Button>
        </div>
      </div>
      <div className={styles.taskDetailsBody}>
        <div className={styles.taskDetailsBodyItem}>
          <div>
            <Text>{t("status")}</Text>
            <Text>{taskDetails?.completed ? t("done") : t("new")}</Text>
          </div>
        </div>
        <div className={styles.taskDetailsBodyItem}>
          <Text>{t("priority")}</Text>
          <Text>{priorities[taskDetails?.priority || "high"]}</Text>
        </div>
        <div className={styles.taskDetailsBodyItem}>
          <Text>{t("deadline")}</Text>
          <Text>{deadline[0] ? `${deadline[0]}, ${deadline[1]}` : "-"}</Text>
        </div>
        <div className={styles.taskDetailsBodyItem}>
          <Text>{t("label")}</Text>
          <div
            className={styles.taskDetailsBodyItemLabel}
            style={{ backgroundColor: taskDetails?.label || "#000000" }}
          />
        </div>
      </div>
      <div className={styles.taskDetailsContent}>
        {taskDetails?.description}
      </div>
    </Container>
  );
};

export default TaskDetails;
