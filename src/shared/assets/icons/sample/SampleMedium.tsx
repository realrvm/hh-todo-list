import { memo } from "react";

import { IconContainer } from "shared/ui/icon-container";
import { Svg } from "shared/ui/svg";
import { Sample } from "./Sample";

import styles from "./styles.module.scss";

export const SampleMedium = memo(() => {
  return (
    <IconContainer>
      <Svg viewBox="0 0 30 30" width="24" height="24" className={styles.sample}>
        <Sample />
      </Svg>
    </IconContainer>
  );
});
