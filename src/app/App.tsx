import { FC } from "react";
import { IS_DEV, IS_PROD } from "../shared/lib/constants";

type AppProps = Record<string, never>;

export const App: FC<AppProps> = () => {
  console.log(IS_DEV, IS_PROD);

  return (
    <div>
      <h1>App</h1>
    </div>
  );
};
