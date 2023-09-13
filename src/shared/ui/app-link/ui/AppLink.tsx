import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

import { cn } from "@/shared/lib/cn/classnames";

import styles from "./styles.module.scss";

type AppLinkProps = {
  to: string;
  className?: string;
} & LinkProps;

export const AppLink: FC<AppLinkProps> = (props) => {
  const { to, className, children, ...other } = props;

  return (
    <Link to={to} className={cn(styles.Link, {}, [className])} {...other}>
      {children}
    </Link>
  );
};
