import { ChangeEvent, FC, InputHTMLAttributes, memo } from "react";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

type ColorInputType = InputHTMLAttributes<HTMLInputElement>;

type TaskFormLabelProps = {
  labelColor: string;
  changeColorPallette: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
} & ColorInputType;

export const TasksFormLabel: FC<TaskFormLabelProps> = memo((props) => {
  const { labelColor, changeColorPallette, className, ...other } = props;
  const { t } = useTranslation("task");

  return (
    <div className={className}>
      <label>{t("label")}</label>
      <div className={styles.tmLabelWrap} style={{ backgroundColor: "#fff" }}>
        <div className={styles.tmLabelInput}>
          <input
            type="color"
            onInput={changeColorPallette}
            name="label"
            {...other}
          />
        </div>
        <span>{labelColor}</span>
      </div>
    </div>
  );
});
