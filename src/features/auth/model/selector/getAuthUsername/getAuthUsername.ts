import { createSelector } from "@reduxjs/toolkit";
import { getAuthData } from "../getAuthData/getAuthData";
import { AuthSchema } from "../../types";

export const getAuthUsername = createSelector(
  getAuthData,
  (state: AuthSchema) => state.username || ""
);
