import { FC, ReactNode } from "react";

import { Button, ButtonThemes } from "@/shared/ui/button";

type ActionButtonProps = {
  className?: string;
  children: ReactNode;
  dataTestid?: string;
  handleClick: () => void;
};

export const ActionButton: FC<ActionButtonProps> = ({
  children,
  className,
  dataTestid,
  handleClick,
}) => {
  return (
    <Button
      onClick={handleClick}
      className={className}
      theme={ButtonThemes.ROUND}
      dataTestid={dataTestid}
    >
      {children}
    </Button>
  );
};
