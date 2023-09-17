import { FC, ReactNode, memo, useMemo } from "react";

import { cn } from "@/shared/lib/cn/classnames";
import { Text } from "@/shared/ui/text";
import { useActionCreators } from "@/app/providers/rtk-provider";
import { sidebarActions } from "../..";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

type SidebarTasksItemProps = {
  id: number;
  isClicked: boolean;
  title: string;
  icon?: ReactNode;
};

export const SidebarTasksItem: FC<SidebarTasksItemProps> = memo((props) => {
  const { id, icon, isClicked, title } = props;

  const sidebarAction = useActionCreators(sidebarActions);
  const { t } = useTranslation("sidebar");

  const titles: Record<string, string> = useMemo(
    () => ({
      new: t("new"),
      done: t("done"),
      all: t("all"),
      high: t("high"),
      medium: t("medium"),
      low: t("low"),
    }),
    [t],
  );

  const selectTasks = (id: number) => {
    if (id > 0 && id < 4) {
      sidebarAction.selectExecution(id);
    } else {
      sidebarAction.selectPriority(id);
    }
  };

  return (
    <li
      id={id.toString()}
      className={cn(
        styles.sbListItem,
        {
          [styles.sbActiveListItem]: isClicked,
        },
        [],
      )}
      onClick={() => selectTasks(id)}
    >
      {icon && icon} <Text>{titles[title]}</Text>
    </li>
  );
});
