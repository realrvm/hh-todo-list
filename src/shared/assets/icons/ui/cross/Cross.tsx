import { memo } from "react";

import { IconContainer } from "shared/ui/icon-container";
import { Svg } from "shared/ui/svg";

import styles from "./styles.module.scss";

export const Cross = memo(() => {
  return (
    <IconContainer>
      <Svg viewBox="0 0 30 30" width="30" height="30" className={styles.cross}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.11867 23.2855C5.96044 23.449 5.96044 23.7139 6.11867 23.8774C6.2769 24.0408 6.53343 24.0408 6.69166 23.8774L15 15.2959L23.3083 23.8774C23.4666 24.0408 23.7231 24.0408 23.8813 23.8774C24.0396 23.714 24.0396 23.449 23.8813 23.2856L15.573 14.7041L23.3084 6.7144C23.4666 6.55097 23.4666 6.286 23.3084 6.12257C23.1501 5.95914 22.8936 5.95914 22.7354 6.12257L15 14.1123L7.26463 6.12261C7.1064 5.95918 6.84986 5.95918 6.69164 6.12261C6.53341 6.28604 6.53341 6.55101 6.69164 6.71444L14.427 14.7041L6.11867 23.2855Z"
        />
      </Svg>
    </IconContainer>
  );
});
