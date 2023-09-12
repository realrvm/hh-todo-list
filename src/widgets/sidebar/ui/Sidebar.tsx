import { FC, Suspense, memo } from "react";

import styles from "./styles.module.scss";
import { LangSwitcher } from "@/features/internationalization/";

type SidebarProps = Record<string, never>;

export const Sidebar: FC<SidebarProps> = memo(() => {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.sbInner}>
        <div></div>
        <Suspense fallback={null}>
          <LangSwitcher />
        </Suspense>
      </div>
    </div>
  );
});
