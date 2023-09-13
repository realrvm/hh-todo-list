import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: ReactNode;
  element?: string;
};

export const Portal: FC<PortalProps> = ({ children, element }) => {
  const node = element
    ? (document.getElementById(element) as HTMLElement)
    : document.body;

  return createPortal(children, node);
};
