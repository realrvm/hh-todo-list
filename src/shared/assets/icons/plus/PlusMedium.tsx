import { memo } from "react";
import { Plus } from "./Plus";

import { IconContainer } from "shared/ui/icon-container";
import { Svg } from "shared/ui/svg";

import styles from "./styles.module.scss";

export const PlusMedium = memo(() => {
  return (
    <IconContainer>
      <Svg viewBox="-4 -6 26 26" width="32" height="32" className={styles.plus}>
        <Plus />
      </Svg>
    </IconContainer>
  );
});
