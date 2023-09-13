import { ChangeEvent, FC, InputHTMLAttributes } from "react";

import styles from "./styles.module.scss";
import { cn } from "@/shared/lib/cn/classnames";

type InputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  label?: string;
  element?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = (props) => {
  const {
    label,
    className,
    value,
    onChange,
    element = "input",
    type = "text",
    ...other
  } = props;

  return (
    <div className={cn(styles.Input, {}, [className])}>
      {label && <label>{label}</label>}
      {element === "input" && (
        <input type={type} value={value} onChange={onChange} {...other} />
      )}
      {element === "select" && <select />}
      {element === "textarea" && <textarea />}
    </div>
  );
};
