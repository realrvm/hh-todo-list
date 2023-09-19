import { memo } from "react";
import { Pen } from "./Pen";

import { IconContainer } from "shared/ui/icon-container";
import { Svg } from "shared/ui/svg";

import styles from "./styles.module.scss";

export const PenSmall = memo(() => {
  return (
    <IconContainer size="small">
      <Svg viewBox="0 0 15 16" width="15" height="16" className={styles.pen}>
        <Pen />
      </Svg>
    </IconContainer>
  );
});
