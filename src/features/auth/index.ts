import { lazy } from "react";

const AuthModal = lazy(() => import("./ui/AuthModal"));

export { AuthModal };

export {
  authModalReducer,
  authModalActions,
} from "./model/slice/auth-modal-slice/authModalSlice";

export { authReducer, authActions } from "./model/slice/auth-slice/authSlice";

export { getAuthPassword } from "./model/selector/getAuthPassword/getAuthPassword";
export { getAuthUsername } from "./model/selector/getAuthUsername/getAuthUsername";
