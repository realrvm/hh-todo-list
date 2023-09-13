import { FC, ReactNode, memo } from "react";

import { TextThemes } from "../types";

import { cn } from "@/shared/lib/cn/classnames";

import styles from "./styles.module.scss";

type TextProps = {
  children: ReactNode;
  className?: string;
  theme?: string;
};

export const Text: FC<TextProps> = memo((props) => {
  const { className, children, theme = TextThemes.PRIMARY } = props;

  return (
    <span className={cn("", { [styles[theme]]: true }, [className])}>
      {children}
    </span>
  );
});
