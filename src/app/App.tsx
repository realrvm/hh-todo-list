import { FC, Suspense, useEffect } from "react";

import { useTheme } from "./providers/theme-provider";
import { AppRouter } from "./providers/router-dom-provider";
import { Navbar } from "@/widgets/navbar";
import { Sidebar } from "@/widgets/sidebar";
import { TasksModal, getTasksModalVisibility } from "@/features/tasks";
import { useStateSelector } from "./providers/rtk-provider";

type AppProps = Record<string, never>;

export const App: FC<AppProps> = () => {
  const { theme, toggleTheme } = useTheme();
  const isOpenTasksModal = useStateSelector(getTasksModalVisibility);

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
        {isOpenTasksModal ? <TasksModal /> : null}
      </Suspense>
    </div>
  );
};
