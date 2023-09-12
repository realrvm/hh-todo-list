import { FC, Suspense, memo } from "react";

import { LangSwitcher } from "@/features/internationalization/";
import { getHRToggledValue } from "@/widgets/navbar/";
import { useStateSelector } from "@/app/providers/rtk-provider";
import { cn } from "@/shared/lib/cn/classnames";

import styles from "./styles.module.scss";

type SidebarProps = Record<string, never>;

export const Sidebar: FC<SidebarProps> = memo(() => {
  const isOpen = useStateSelector(getHRToggledValue);

  return (
    <div className={cn(styles.Sidebar, { [styles.sidebarOpen]: isOpen })}>
      <div className={styles.sbInner}>
        <div></div>
        <Suspense fallback={null}>
          <LangSwitcher />
        </Suspense>
      </div>
    </div>
  );
});
