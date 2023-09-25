import { FC, useCallback } from "react";

import { Modal } from "@/shared/ui/modal";
import { AuthForm } from "./auth-form/AuthForm";

import {
  useActionCreators,
  useStateSelector,
} from "@/app/providers/rtk-provider";
import { authModalActions } from "..";

import styles from "./styles.module.scss";
import { getAuthModalVisibility } from "../model/selector/getAuthModalVisibility/getAuthModalVisibility";

type AuthModalProps = Record<string, never>;

const AuthModal: FC<AuthModalProps> = () => {
  const isOpenAuthModal = useStateSelector(getAuthModalVisibility);
  const authModal = useActionCreators(authModalActions);

  const closeAuthModal = useCallback(() => {
    authModal.close();
  }, [authModal]);

  return (
    <Modal
      onClose={closeAuthModal}
      isOpen={isOpenAuthModal}
      className={styles.AuthModal}
      element="modal"
    >
      <AuthForm />
    </Modal>
  );
};

export default AuthModal;
