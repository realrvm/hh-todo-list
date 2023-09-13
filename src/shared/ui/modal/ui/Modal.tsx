import {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Portal } from "../../portal";
import { cn } from "@/shared/lib/cn/classnames";
import { ANIMATION_DELAY } from "@/shared/lib/constants";

import styles from "./styles.module.scss";

type ModalProps = {
  children: ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  element?: string;
};

export const Modal: FC<ModalProps> = ({
  className,
  isOpen,
  onClose,
  children,
  element,
}) => {
  const [isClosed, setIsClosed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const closeTimerRef = useRef < ReturnType < typeof setTimeout >> ();

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosed(true);
      closeTimerRef.current = setTimeout(() => {
        onClose();
        setIsClosed(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onEsc);
    }

    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, ANIMATION_DELAY);

    return () => {
      clearTimeout(closeTimerRef.current);
      clearTimeout(timeout);
      window.removeEventListener("keydown", onEsc);
    };
  }, [closeTimerRef, isOpen, onEsc]);

  const mods: Record<string, boolean> = useMemo(
    () => ({
      [styles.opened]: isMounted,
      [styles.closed]: isClosed,
    }),
    [isClosed, isMounted],
  );

  return (
    <Portal element={element}>
      <div className={cn(styles.Modal, mods)}>
        <div className={styles.overlay} onClick={closeHandler}>
          <div
            className={cn(styles.content, {}, [className])}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
