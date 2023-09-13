import { FC, useCallback } from "react";
import Hamburger from "hamburger-react";
import { useTranslation } from "react-i18next";

import { useWindowWidth } from "@/shared/lib/hooks/useWindowWidth";
import { TABLET_PAGE_WIDTH } from "@/shared/lib/constants";
import { Themes } from "@/app/providers/theme-provider";

import {
  DarkTheme,
  LightTheme,
  PlusMedium,
  PlusSmall,
} from "@/shared/assets/icons";
import { hrActions } from "../model/slice/hrSlice";
import { useActionCreators } from "@/app/providers/rtk-provider";
import { ActionButton } from "./action-button/ActionButton";
import { AppLink } from "@/shared/ui/app-link";
import { tasksModalActions } from "@/features/tasks";

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

  const tasksModal = useActionCreators(tasksModalActions);

  const openTasksModal = useCallback(() => {
    tasksModal.open();
  }, [tasksModal]);

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
          <AppLink to="/">
            <h1 className={styles.navTitle}>{t("title")}</h1>
          </AppLink>
        </div>
        <div className={styles.navActions}>
          <ActionButton
            handleClick={openTasksModal}
            className={styles.navBtnTasks}
          >
            {isMobile ? <PlusSmall /> : <PlusMedium />}
          </ActionButton>
          <ActionButton handleClick={toggleTheme}>
            {theme === Themes.DARK ? <DarkTheme /> : <LightTheme />}
          </ActionButton>
        </div>
      </div>
    </div>
  );
};
