import { InputHTMLAttributes, LegacyRef, forwardRef } from "react";

import styles from "./styles.module.scss";
import { cn } from "@/shared/lib/cn/classnames";

type InputProps = {
  className?: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

type Ref = LegacyRef<HTMLInputElement>;

export const Input = forwardRef((props: InputProps, ref: Ref) => {
  const { label, className, value, onChange, type = "text", ...other } = props;

  return (
    <div className={cn(styles.Input, {}, [className])}>
      {label && <label>{label}</label>}
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChange}
        {...other}
      />
    </div>
  );
});
