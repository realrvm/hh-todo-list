import { createSelector } from "@reduxjs/toolkit";
import { getAuthData } from "../getAuthData/getAuthData";
import { AuthSchema } from "../../types";

export const getAuthIsLoading = createSelector(
  getAuthData,
  (state: AuthSchema) => state.isLoading
);
