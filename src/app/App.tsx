import { FC, useEffect } from "react";

import { useTheme } from "./providers/theme-provider";
import { AppRouter } from "./providers/router-dom-provider";

type AppProps = Record<string, never>;

export const App: FC<AppProps> = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <AppRouter />
    </div>
  );
};
