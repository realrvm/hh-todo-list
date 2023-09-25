import { FC, Suspense, useEffect } from "react";

import { useTheme } from "./providers/theme-provider";
import { AppRouter } from "./providers/router-dom-provider";
import { Navbar } from "@/widgets/navbar";
import { Sidebar } from "@/widgets/sidebar";
import { TasksModal, getTasksModalVisibility } from "@/features/tasks";
import { useStateSelector } from "./providers/rtk-provider";
import { AuthModal } from "@/features/auth";
import { getAuthModalVisibility } from "@/features/auth/model/selector/getAuthModalVisibility/getAuthModalVisibility";

type AppProps = Record<string, never>;

export const App: FC<AppProps> = () => {
  const { theme, toggleTheme } = useTheme();
  const isOpenTasksModal = useStateSelector(getTasksModalVisibility);
  const isOpenAuthModal = useStateSelector(getAuthModalVisibility);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="app-wrapper app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="app-container">
        <Sidebar />
        <AppRouter />
      </div>
      <Suspense fallback={null}>
        {isOpenAuthModal ? <AuthModal /> : null}
        {isOpenTasksModal ? <TasksModal /> : null}
      </Suspense>
    </div>
  );
};
