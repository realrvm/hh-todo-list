import { FC, memo } from "react";

import { IconContainer } from "shared/ui/icon-container";
import { Svg } from "shared/ui/svg";
import { Sample } from "./Sample";

import styles from "./styles.module.scss";

type SampleMediumProps = {
  element?: boolean;
};

export const SampleMedium: FC<SampleMediumProps> = memo(({ element }) => {
  return (
    <IconContainer>
      <Svg
        viewBox="0 0 30 30"
        width="24"
        height="24"
        className={element ? styles.sampleSB : styles.sample}
      >
        <Sample />
      </Svg>
    </IconContainer>
  );
});
