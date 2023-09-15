import { memo } from "react";

import { IconContainer } from "shared/ui/icon-container";
import { Svg } from "shared/ui/svg";
import { Sample } from "./Sample";

import styles from "./styles.module.scss";

export const SampleSmall = memo(() => {
  return (
    <IconContainer size="small">
      <Svg viewBox="0 0 30 30" width="19" height="19" className={styles.sample}>
        <Sample />
      </Svg>
    </IconContainer>
  );
});
