import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { Button, ButtonThemes } from "@/shared/ui/button";

import styles from "./styles.module.scss";

type LangSwitcherProps = Record<string, never>;

export const LangSwitcher: FC<LangSwitcherProps> = memo(() => {
  const { t, i18n } = useTranslation();

  const toggleLangs = useCallback(async () => {
    await i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  }, [i18n]);

  return (
    <div className={styles.LangSwitcher}>
      <Button
        theme={ButtonThemes.CLEAR}
        onClick={toggleLangs}
        className={styles.langButton}
      >
        {t("changeLang")}
      </Button>
    </div>
  );
});
