import { FC } from "react";
import Hamburger from "hamburger-react";
import { useTranslation } from "react-i18next";

import { useWindowWidth } from "@/shared/lib/hooks/useWindowWidth";
import { TABLET_PAGE_WIDTH } from "@/shared/lib/constants";
import { Themes } from "@/app/providers/theme-provider";

import { DarkTheme, LightTheme } from "@/shared/assets/icons";
import { hrActions } from "../model/slice/hrSlice";
import { useActionCreators } from "@/app/providers/rtk-provider";
import { ActionButton } from "./action-button/ActionButton";

import styles from "./styles.module.scss";

type NavbarProps = {
  toggleTheme: () => void;
  theme: Themes;
};

export const Navbar: FC<NavbarProps> = ({ toggleTheme, theme }) => {
  const { width } = useWindowWidth();
  const isMobile = width < TABLET_PAGE_WIDTH;
  const { t } = useTranslation("navbar");
  const hrAction = useActionCreators(hrActions);

  return (
    <div className={styles.Navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navHamburger}>
          {isMobile ? (
            <Hamburger
              color={`#FFFFFF`}
              size={24}
              onToggle={() => hrAction.toggle()}
            />
          ) : null}
          <h1 className={styles.navTitle}>{t("title")}</h1>
        </div>
        <div className={styles.navActions}>
          <ActionButton handleClick={toggleTheme}>
            {theme === Themes.DARK ? <DarkTheme /> : <LightTheme />}
          </ActionButton>
        </div>
      </div>
    </div>
  );
};
