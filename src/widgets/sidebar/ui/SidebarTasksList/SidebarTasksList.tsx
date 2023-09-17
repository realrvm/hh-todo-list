import { FC, MouseEventHandler, memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { useSidebar } from "@/shared/lib/hooks/useSidebar";
import { SidebarTasksItem } from "../SidebarTasksItem/SidebarTasksItem";
import { Text } from "@/shared/ui/text";

import { ArrowLeft } from "@/shared/assets/icons";
import { cn } from "@/shared/lib/cn/classnames";
import { useActionCreators } from "@/app/providers/rtk-provider";
import { sidebarActions } from "../../model/slice/sidebarSlice";

import styles from "./styles.module.scss";

type SidebarTasksListProps = Record<string, never>;
type Ul = HTMLUListElement;

export const SidebarTasksList: FC<SidebarTasksListProps> = memo(() => {
  const { t } = useTranslation();
  const [priority, setPriority] = useState(false);
  const sidebarAction = useActionCreators(sidebarActions);

  const {
    list,
    sortByExecution,
    sortByPriority,
    setSortByExecution,
    setSortByPriority,
  } = useSidebar();

  const sortByHandler: MouseEventHandler<Ul> = (e) => {
    const { id } = e.target as Ul;

    const items = {
      exec: list.slice(0, 3),
      priority: list.slice(3),
    };

    function getByItems(itemId: number) {
      const isExec = itemId > 0 && itemId < 4;

      const itemsList = (isExec ? items["exec"] : items["priority"]).map(
        (item) => {
          return item.id === itemId
            ? { ...item, isClicked: true }
            : { ...item, isClicked: false };
        },
      );

      isExec ? setSortByExecution(itemsList) : setSortByPriority(itemsList);
    }

    getByItems(Number(id));
  };

  const priorityHandler = useCallback(() => {
    if (priority) {
      sidebarAction.reset();
    } else {
      setSortByPriority(list.slice(3));
    }
    setPriority(!priority);
  }, [priority, list, sidebarAction, setSortByPriority]);

  return (
    <>
      <ul className={styles.sbExecList} onClick={sortByHandler}>
        {sortByExecution.map((item) => {
          const { id } = item;
          return <SidebarTasksItem key={id} {...item} />;
        })}
      </ul>
      <div className={styles.sbPriority}>
        <div className={styles.sbPriorityTitle} onClick={priorityHandler}>
          <ArrowLeft
            className={
              priority ? styles.arrowRotateDown : styles.arrowRotateRight
            }
          />
          <Text>{t("priority")}</Text>
        </div>
        <div
          className={cn(styles.sbPriorityListWrap, {
            [styles["sbPriorityVisible"]]: priority,
          })}
        >
          <ul className={styles.sbPriorityList} onClick={sortByHandler}>
            {sortByPriority.map((item) => {
              const { id } = item;
              return <SidebarTasksItem key={id} {...item} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
});
