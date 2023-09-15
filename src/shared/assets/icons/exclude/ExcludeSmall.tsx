import { memo } from "react";

import { Exclude } from "./Exclude";
import { IconContainer } from "shared/ui/icon-container";
import { Svg } from "shared/ui/svg";

import styles from "./styles.module.scss";

export const ExcludeSmall = memo(() => {
  return (
    <IconContainer size="small">
      <Svg viewBox="0 0 24 24" width="19" height="19" className={styles.exclude}>
        <Exclude />
      </Svg>
    </IconContainer>
  );
});
