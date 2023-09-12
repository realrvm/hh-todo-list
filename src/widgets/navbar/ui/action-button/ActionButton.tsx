import { FC, ReactNode } from "react";

import { Button, ButtonThemes } from "@/shared/ui/button";

type ActionButtonProps = {
  className?: string;
  children: ReactNode;
  handleClick: () => void;
};

export const ActionButton: FC<ActionButtonProps> = ({
  children,
  className,
  handleClick,
}) => {
  return (
    <Button
      onClick={handleClick}
      className={className}
      theme={ButtonThemes.ROUND}
    >
      {children}
    </Button>
  );
};
