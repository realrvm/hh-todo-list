import { memo } from "react";

import { IconContainer } from "shared/ui/icon-container";
import { Svg } from "shared/ui/svg";

import styles from "./styles.module.scss";

export const TrashBin = memo(() => {
  return (
    <IconContainer>
      <Svg
        viewBox="0 0 18 24"
        width="18"
        height="24"
        className={styles.trashBin}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5 2.18182H16.875C17.4963 2.18182 18 2.67023 18 3.27273H0C0 2.67023 0.50368 2.18182 1.125 2.18182H4.5C4.5 0.976833 5.50736 0 6.75 0H11.25C12.4926 0 13.5 0.976833 13.5 2.18182ZM1.06581 4.27705H16.8949L16.1053 22.6255C16.1053 22.6255 15.8073 24 14.6838 24H3.31533C2.19223 24 1.89428 22.6255 1.89428 22.6255L1.06581 4.27705ZM13.3875 6.54546H12.2625L11.7 22.2957H12.825L13.3875 6.54546ZM6.18751 22.2957L5.6252 6.54546H4.50001L5.06232 22.2957H6.18751ZM8.43751 6.54546V22.2957H9.56251V6.54546H8.43751Z"
        />
      </Svg>
    </IconContainer>
  );
});
