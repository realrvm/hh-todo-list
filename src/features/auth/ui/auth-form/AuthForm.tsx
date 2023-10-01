import { FC, FormEventHandler, useEffect, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";

import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";

import { AuthSchema } from "../../model/types";
import {
  useActionCreators,
  useAppDispatch,
  useStateSelector,
} from "@/app/providers/rtk-provider";
import { authActions } from "../..";
import { login } from "../../model/api/login/login";

import { getAuthIsLoading } from "../../model/selector/getAuthIsLoading/getAuthIsLoading";
import { Text, TextThemes } from "@/shared/ui/text";

import styles from "./styles.module.scss";
import { getAuthValidateErrors } from "../../model/selector/getAuthValidateErrors/getAuthValidateErrors";

type FormTarget = {
  username: { value: string };
  password: { value: string };
} & EventTarget;

type AuthFormProps = Record<string, never>;

export const AuthForm: FC<AuthFormProps> = () => {
  const { t } = useTranslation("auth");
  const usernameRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const isLoading = useStateSelector(getAuthIsLoading);
  const errors = useStateSelector(getAuthValidateErrors);

  const authErrors = useMemo(
    () => ({
      "incorrect user data": t("incorrect user data"),
      "no user found": t("no user found"),
      "no data": t("no data"),
      "server error": t("server error"),
    }),
    [t]
  );

  const loginDispatch = useAppDispatch();
  const authAction = useActionCreators(authActions);

  useEffect(() => {
    usernameRef.current?.focus();
  }, [usernameRef]);

  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();

    const target = e.target as FormTarget;

    const auth: Pick<AuthSchema, "username" | "password"> = {
      username: target.username.value,
      password: target.password.value,
    };

    // to-do
    // @ts-ignore
    loginDispatch(login(auth));

    authAction.setUsername("");
    authAction.setPassword("");
    authAction.setError();
  };

  const isError = errors ? (
    <div className={styles.amHeader}>
      <Text theme={TextThemes.ERROR}>
        {isLoading ? t("loading") : authErrors[errors[0]]}
      </Text>
    </div>
  ) : (
    <div className={styles.amHeader}>
      <Text>{isLoading ? t("loading") : t("Login")}</Text>
    </div>
  );

  return (
    <div className={styles.amWrapper}>
      {isError}
      <form ref={formRef} className={styles.amForm} onSubmit={submitHandler}>
        <Input ref={usernameRef} className={styles.amInput} name="username" />
        <Input className={styles.amInput} name="password" />
        <Button type="submit">{t("login")}</Button>
      </form>
    </div>
  );
};
