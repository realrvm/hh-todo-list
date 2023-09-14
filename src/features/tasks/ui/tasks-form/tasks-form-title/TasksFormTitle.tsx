import { FC, memo } from "react";

import { Input } from "@/shared/ui/input";
import { cn } from "@/shared/lib/cn/classnames";
import { useTranslation } from "react-i18next";

type TasksFormTitleProps = {
  className?: string;
};

export const TasksFormTitle: FC<TasksFormTitleProps> = memo(({ className }) => {
  const { t } = useTranslation("task");

  return (
    <Input
      className={cn("", {}, [className])}
      label={t("title")}
      name="title"
      required
    />
  );
});
