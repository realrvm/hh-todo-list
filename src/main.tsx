import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import { ThemeProvider } from "./app/providers/theme-provider";

import "./app/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
