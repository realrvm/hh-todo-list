import { FC } from "react";
import { useTranslation } from "react-i18next";

import { TrashDelete } from "shared/assets/icons";

import { AppLink } from "shared/ui/app-link";
import { Button, ButtonThemes } from "shared/ui/button";

import styles from "./styles.module.scss";

type TasksFormFooterProps = {
  removeTask: () => void;
  clearModal: () => void;
  taskId: string;
};

export const TasksFormFooter: FC<TasksFormFooterProps> = ({
  removeTask,
  clearModal,
  taskId,
}) => {
  const { t } = useTranslation("task");

  return (
    <div
      className={styles.tmFooter}
      style={{ justifyContent: taskId ? "space-between" : "flex-end" }}
    >
      {taskId ? (
        <AppLink onClick={removeTask} to={"/"}>
          <TrashDelete />
        </AppLink>
      ) : null}
      <div>
        <Button onClick={clearModal} theme={ButtonThemes.CLEAR}>
          {t("clear")}
        </Button>
        <Button type="submit">{taskId ? t("change") : t("add")}</Button>
      </div>
    </div>
  );
};
