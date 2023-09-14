import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

type TakksFormPriorityProps = {
  className?: string;
};

export const TasksFormPriority: FC<TakksFormPriorityProps> = memo(
  ({ className }) => {
    const { t } = useTranslation("task");

    return (
      <div className={className}>
        <label>{t("priority")}</label>
        <select
          name="priority"
          style={{ backgroundColor: "#fff", padding: "0 10px" }}
        >
          <option value="high">{t("high")}</option>
          <option value="medium">{t("medium")}</option>
          <option value="low">{t("low")}</option>
        </select>
      </div>
    );
  },
);
