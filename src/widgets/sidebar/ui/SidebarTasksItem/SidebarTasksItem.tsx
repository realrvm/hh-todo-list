import { FC, ReactNode } from "react";

import styles from "./styles.module.scss";
import { cn } from "@/shared/lib/cn/classnames";
import { Text } from "@/shared/ui/text";
import { useActionCreators } from "@/app/providers/rtk-provider";
import { sidebarActions } from "../..";

type SidebarTasksItemProps = {
  id: number;
  isClicked: boolean;
  title: string;
  icon?: ReactNode;
};

export const SidebarTasksItem: FC<SidebarTasksItemProps> = (props) => {
  const { id, icon, isClicked, title } = props;
  const sidebarAction = useActionCreators(sidebarActions);

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
      {icon && icon} <Text>{title}</Text>
    </li>
  );
};
