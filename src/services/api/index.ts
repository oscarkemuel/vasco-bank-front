import { AuthAPI } from "./urls/auth";
import { CurrentAccountAPI } from "./urls/currentAccount";

export const api = {
  auth: new AuthAPI(),
  currentAccount: new CurrentAccountAPI(),
}

export default api;