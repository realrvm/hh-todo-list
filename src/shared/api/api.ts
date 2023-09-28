import axios from "axios";
import { IS_DEV } from "../lib/constants";

const baseURL = IS_DEV ? "http://localhost:8000" : "http://localhost:8000";

export const $api = axios.create({
  baseURL,
});
