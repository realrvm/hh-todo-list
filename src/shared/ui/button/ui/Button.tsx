import { ButtonHTMLAttributes, FC, ReactNode, memo } from "react";

import { ButtonThemes } from "../types";
import { cn } from "@/shared/lib/cn/classnames";

import styles from "./styles.module.scss";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  theme?: ButtonThemes;
  dataTestid?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = memo((props) => {
  const { className, theme = ButtonThemes.PRIMARY, dataTestid, children, ...other } = props;
  return (
    <button
      className={cn(styles.Button, { [styles[theme]]: true }, [className])}
      data-testid={dataTestid}
      {...other}
    >
      {children}
    </button>
  );
});
