import { CSSProperties, FC, ReactNode } from "react";

import { cn } from "@/shared/lib/cn/classnames";

import styles from "./styles.module.scss";

type SvgProps = {
  children: ReactNode;
  viewBox: string;
  width: string;
  height: string;
  className?: string;
  style?: CSSProperties;
};

export const Svg: FC<SvgProps> = ({
  width = "32",
  height = "32",
  children,
  viewBox = "0 0 32 32",
  className,
  style,
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={cn(styles.svg, {}, [className])}
      style={style}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
    >
      {children}
    </svg>
  );
};
