import { FC, useCallback } from "react";

import { Modal } from "@/shared/ui/modal";
import { AuthForm } from "./auth-form/AuthForm";

import {
  useActionCreators,
  useStateSelector,
} from "@/app/providers/rtk-provider";
import { authActions, authModalActions } from "..";

import styles from "./styles.module.scss";
import { getAuthModalVisibility } from "../model/selector/getAuthModalVisibility/getAuthModalVisibility";

type AuthModalProps = Record<string, never>;

const AuthModal: FC<AuthModalProps> = () => {
  const isOpenAuthModal = useStateSelector(getAuthModalVisibility);
  const authModal = useActionCreators(authModalActions);
  const authAction = useActionCreators(authActions);

  const closeAuthModal = useCallback(() => {
    authModal.close();
    authAction.setError("");
  }, [authModal, authAction]);

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
