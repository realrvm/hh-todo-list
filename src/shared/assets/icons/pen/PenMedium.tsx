import { memo } from "react";
import { Pen } from "./Pen";

import { IconContainer } from "shared/ui/icon-container";
import { Svg } from "shared/ui/svg";

import styles from "./styles.module.scss";

export const PenMedium = memo(() => {
  return (
    <IconContainer>
      <Svg viewBox="0 0 19 20" width="19" height="20" className={styles.pen}>
        <Pen />
      </Svg>
    </IconContainer>
  );
});
