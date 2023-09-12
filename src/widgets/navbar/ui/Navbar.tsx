import { FC } from "react";
import Hamburger from "hamburger-react";

import { useWindowWidth } from "@/shared/lib/hooks/useWindowWidth";
import { TABLET_PAGE_WIDTH } from "@/shared/lib/constants";
import { Button, ButtonThemes } from "@/shared/ui/button";
import { Themes } from "@/app/providers/theme-provider";

import styles from "./styles.module.scss";
import { DarkTheme, LightTheme } from "@/shared/assets/icons";
import { useTranslation } from "react-i18next";

type NavbarProps = {
  toggleTheme: () => void;
  theme: Themes;
};

export const Navbar: FC<NavbarProps> = ({ toggleTheme, theme }) => {
  const { width } = useWindowWidth();
  const isMobile = width < TABLET_PAGE_WIDTH;
  const { t } = useTranslation("navbar");

  return (
    <div className={styles.Navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navHamburger}>
          {isMobile ? (
            <Hamburger color={`#FFFFFF`} size={24} onToggle={() => {}} />
          ) : null}
          <h1 className={styles.navTitle}>{t("title")}</h1>
        </div>
        <div className={styles.navActions}>
          <Button onClick={toggleTheme} theme={ButtonThemes.ROUND}>
            {theme === Themes.DARK ? <DarkTheme /> : <LightTheme />}
          </Button>
        </div>
      </div>
    </div>
  );
};
