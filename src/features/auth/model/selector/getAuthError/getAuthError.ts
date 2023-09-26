import { createSelector } from "@reduxjs/toolkit";
import { getAuthData } from "../getAuthData/getAuthData";
import { AuthSchema } from "../../types";

export const getAuthError = createSelector(
  getAuthData,
  (state: AuthSchema) => state.error || ""
);
