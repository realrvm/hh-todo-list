import { FC } from "react";
import { useTranslation } from "react-i18next";

import { TrashDelete } from "shared/assets/icons";

import { AppLink } from "shared/ui/app-link";
import { Button, ButtonThemes } from "shared/ui/button";

import styles from "./styles.module.scss";

type TasksFormFooterProps = {
  removeTask: () => void;
  clearModal: () => void;
  task_id: string;
};

export const TasksFormFooter: FC<TasksFormFooterProps> = ({
  removeTask,
  clearModal,
  task_id,
}) => {
  const { t } = useTranslation("task");

  return (
    <div
      className={styles.tmFooter}
      style={{ justifyContent: task_id ? "space-between" : "flex-end" }}
    >
      {task_id ? (
        <AppLink onClick={removeTask} to={"/"}>
          <TrashDelete />
        </AppLink>
      ) : null}
      <div>
        <Button onClick={clearModal} theme={ButtonThemes.CLEAR}>
          {t("clear")}
        </Button>
        <Button type="submit">{task_id ? t("change") : t("add")}</Button>
      </div>
    </div>
  );
};
