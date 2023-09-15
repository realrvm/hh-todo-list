import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export const usePriorities = () => {
  const { t } = useTranslation("task");

  const priorities: Record<string, string> = useMemo(
    () => ({
      low: t("low"),
      medium: t("medium"),
      high: t("high"),
    }),
    [t],
  );

  return priorities;
};
