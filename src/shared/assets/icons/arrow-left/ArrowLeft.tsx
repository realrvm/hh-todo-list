import { FC, memo } from "react";

import { cn } from "@/shared/lib/cn/classnames";
import { IconContainer } from "shared/ui/icon-container";
import { Svg } from "shared/ui/svg";

import styles from "./styles.module.scss";

type ArrowLeftProps = {
  className?: string;
};

export const ArrowLeft: FC<ArrowLeftProps> = memo(({ className }) => {
  return (
    <IconContainer>
      <Svg
        viewBox="0 0 12 21"
        width="12"
        height="21"
        className={cn(styles.arrowLeft, {}, [className])}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.3621 0.155173C11.5525 0.355139 11.5448 0.671627 11.3448 0.86207L1.225 10.5L11.3448 20.1379C11.5448 20.3284 11.5525 20.6449 11.3621 20.8448C11.1716 21.0448 10.8551 21.0525 10.6552 20.8621L0.155172 10.8621C0.0560825 10.7677 0 10.6368 0 10.5C0 10.3632 0.0560825 10.2323 0.155172 10.1379L10.6552 0.137932C10.8551 -0.0525111 11.1716 -0.0447918 11.3621 0.155173Z"
        />
      </Svg>
    </IconContainer>
  );
});
