import { FC, useEffect } from "react";

import { useTheme } from "./providers/theme-provider";

type AppProps = Record<string, never>;

export const App: FC<AppProps> = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <h1>App</h1>
    </div>
  );
};
