import { FC, InputHTMLAttributes, forwardRef } from "react";

import styles from "./styles.module.scss";
import { cn } from "@/shared/lib/cn/classnames";

type InputProps = {
  className?: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = forwardRef((props) => {
  const { label, className, value, onChange, type = "text", ...other } = props;

  return (
    <div className={cn(styles.Input, {}, [className])}>
      {label && <label>{label}</label>}
      <input type={type} value={value} onChange={onChange} {...other} />
    </div>
  );
});
