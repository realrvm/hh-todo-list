import { lazy } from "react";

const AuthModal = lazy(() => import("./ui/AuthModal"));

export { AuthModal };

export {authModalReducer, authModalActions} from './model/slice/auth-modal-slice/authModalSlice'
