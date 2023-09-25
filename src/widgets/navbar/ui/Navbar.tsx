import { FC, useCallback } from "react";
import Hamburger from "hamburger-react";
import { useTranslation } from "react-i18next";

import { useWindowWidth } from "@/shared/lib/hooks/useWindowWidth";
import { TABLET_PAGE_WIDTH } from "@/shared/lib/constants";
import { Themes } from "@/app/providers/theme-provider";

import {
  DarkTheme,
  LightTheme,
  Login,
  LoginSmall,
  PlusMedium,
  PlusSmall,
} from "@/shared/assets/icons";
import { hrActions } from "../model/slice/hrSlice";
import { useActionCreators } from "@/app/providers/rtk-provider";
import { ActionButton } from "./action-button/ActionButton";
import { AppLink } from "@/shared/ui/app-link";
import { tasksModalActions } from "@/features/tasks";

import styles from "./styles.module.scss";
import { taskDetailsActions } from "@/pages/task-details";
import { authModalActions } from "@/features/auth";

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
  const authModal = useActionCreators(authModalActions);
  const taskDetails = useActionCreators(taskDetailsActions);

  const openTasksModal = useCallback(() => {
    taskDetails.reset();
    tasksModal.open();
  }, [tasksModal, taskDetails]);

  const openAuthModal = useCallback(() => {
    authModal.open();
  }, [authModal]);

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
            dataTestid="nav-modal-open"
          >
            {isMobile ? <PlusSmall /> : <PlusMedium />}
          </ActionButton>
          <ActionButton handleClick={toggleTheme}>
            {theme === Themes.DARK ? <DarkTheme /> : <LightTheme />}
          </ActionButton>
          <ActionButton
            handleClick={openAuthModal}
            className={styles.loginActive}
            dataTestid="auth-modal-open"
          >
            {isMobile ? <LoginSmall /> : <Login />}
          </ActionButton>
        </div>
      </div>
    </div>
  );
};
