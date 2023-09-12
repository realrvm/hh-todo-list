import { FC, ReactElement, ReactNode } from "react";

import { cn } from "@/shared/lib/cn/classnames";

import styles from "./styles.module.scss";

type IconContainerSizes = "small" | "medium";

type IconContainerProps = {
  children?: ReactNode;
  size?: IconContainerSizes;
  icon?: ReactElement;
};

export const IconContainer: FC<IconContainerProps> = ({
  size = "medium",
  icon,
  children,
}) => {
  return (
    <div className={cn(styles.iconContainer, {}, [styles[size]])}>
      {icon || children}
    </div>
  );
};
