import { memo } from "react";

import { Exclude } from "./Exclude";
import { IconContainer } from "shared/ui/icon-container";
import { Svg } from "shared/ui/svg";

import styles from "./styles.module.scss";

export const ExcludeMedium = memo(() => {
  return (
    <IconContainer>
      <Svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className={styles.exclude}
      >
        <Exclude />
      </Svg>
    </IconContainer>
  );
});
