import { FC, memo } from "react";

import { Button, ButtonThemes } from "@/shared/ui/button";

import styles from "./styles.module.scss";

type LangSwitcherProps = Record<string, never>;

export const LangSwitcher: FC<LangSwitcherProps> = memo(() => {
  return (
    <div className={styles.LangSwitcher}>
      <Button
        theme={ButtonThemes.CLEAR}
        onClick={() => {}}
        className={styles.langButton}
      >
        Lang
      </Button>
    </div>
  );
});
