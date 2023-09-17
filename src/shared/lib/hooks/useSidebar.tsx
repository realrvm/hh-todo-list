import { ReactNode, useState } from "react";

import { Ellipse, ExcludeMedium, SampleMedium } from "@/shared/assets/icons";

const enum Titles {
  NEW = "new",
  DONE = "done",
  ALL = "all",
  HIGH = "high",
  MEDIUM = "medium",
  LOW = "low",
}

type Sidebar = {
  id: number;
  title: Titles;
  isClicked: boolean;
  icon?: ReactNode;
};

export const useSidebar = () => {
  const list: Sidebar[] = [
    {
      id: 1,
      title: Titles.NEW,
      icon: <SampleMedium element />,
      isClicked: false,
    },
    {
      id: 2,
      title: Titles.DONE,
      icon: <ExcludeMedium element />,
      isClicked: false,
    },
    { id: 3, title: Titles.ALL, icon: <Ellipse />, isClicked: true },
    { id: 4, title: Titles.HIGH, isClicked: false },
    { id: 5, title: Titles.MEDIUM, isClicked: false },
    { id: 6, title: Titles.LOW, isClicked: false },
  ];

  const [sortByExecution, setSortByExecution] = useState < Sidebar[] > (
    list.slice(0, 3),
  );
  const [sortByPriority, setSortByPriority] = useState < Sidebar[] > (
    list.slice(3),
  );

  return {
    list,
    sortByExecution,
    sortByPriority,
    setSortByExecution,
    setSortByPriority,
  };
};
