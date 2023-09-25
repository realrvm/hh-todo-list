import { FC } from "react";

import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";

import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

type AuthFormProps = Record<string, never>;

export const AuthForm: FC<AuthFormProps> = () => {
  const { t } = useTranslation("auth");

  return (
    <div className={styles.amWrapper}>
      <div className={styles.amHeader}>{t("Login")}</div>
      <form className={styles.amForm}>
        <Input className={styles.amInput} />
        <Input className={styles.amInput} />
        <Button>{t("login")}</Button>
      </form>
    </div>
  );
};
