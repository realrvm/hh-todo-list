import { FC, memo } from "react";

import { Exclude } from "./Exclude";
import { IconContainer } from "shared/ui/icon-container";
import { Svg } from "shared/ui/svg";

import styles from "./styles.module.scss";

type ExcludeMediumProps = {
  element?: boolean;
};

export const ExcludeMedium: FC<ExcludeMediumProps> = memo(({ element }) => {
  return (
    <IconContainer>
      <Svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className={element ? styles.excludeSB : styles.exclude}
      >
        <Exclude />
      </Svg>
    </IconContainer>
  );
});
