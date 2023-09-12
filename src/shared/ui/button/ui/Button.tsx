import { ButtonHTMLAttributes, FC, ReactNode, memo } from "react";

import { ButtonThemes } from "../types";
import { cn } from "@/shared/lib/cn/classnames";

import styles from "./styles.module.scss";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  theme?: ButtonThemes;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = memo((props) => {
  const { className, theme = ButtonThemes.PRIMARY, children, ...other } = props;
  return (
    <button
      className={cn(styles.Button, { [styles[theme]]: true }, [className])}
      {...other}
    >
      {children}
    </button>
  );
});
