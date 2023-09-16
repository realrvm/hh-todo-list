import { memo } from "react";

import { IconContainer } from "shared/ui/icon-container";
import { Svg } from "shared/ui/svg";

import styles from "./styles.module.scss";

export const Ellipse = memo(() => {
  return (
    <IconContainer>
      <Svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className={styles.ellipse}
      >
        <circle cx="12" cy="12" r="12" />
      </Svg>
    </IconContainer>
  );
});
