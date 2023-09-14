import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

type TasksFormDescriptionProps = {
  className?: string;
};

export const TasksFormDescription: FC<TasksFormDescriptionProps> = memo(
  ({ className }) => {
    const { t } = useTranslation("task");

    return (
      <div className={className}>
        <label>{t("description")}</label>
        <textarea name="description" />
      </div>
    );
  },
);
