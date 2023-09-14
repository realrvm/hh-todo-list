import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

//react-datepicker
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
registerLocale("ru", ru);

import styles from "./styles.module.scss";

type TasksFormDeadlineProps = {
  deadlineHandler: (date: Date) => void;
  deadlineDate: Date;
  className?: string;
};

export const TasksFormDeadline: FC<TasksFormDeadlineProps> = memo(
  ({ deadlineHandler, deadlineDate, className }) => {
    const { t } = useTranslation("task");

    return (
      <div className={className}>
        <label>{t("deadline")}</label>
        <DatePicker
          className={styles.tmDatePicker}
          selected={deadlineDate}
          onChange={deadlineHandler}
          showTimeSelect
          dateFormat="dd/MM/yyyy HH:mm"
          locale="ru"
          name="deadline"
        />
      </div>
    );
  },
);
