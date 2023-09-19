import { memo } from "react";

import { IconContainer } from "shared/ui/icon-container";
import { Svg } from "shared/ui/svg";
import { Plus } from "./Plus";

import styles from "./styles.module.scss";

export const PlusSmall = memo(() => {
  return (
    <IconContainer size="small">
      <Svg
        viewBox="-2.5 -5 26 26"
        width="20"
        height="20"
        className={styles.plus}
      >
        <Plus />
      </Svg>
    </IconContainer>
  );
});
