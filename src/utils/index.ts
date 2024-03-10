import { TLoginError, TAuthToken } from "../types/auth.types";

export function isLoginError(
  authToken: TLoginError | TAuthToken
): authToken is TLoginError {
  return (authToken as TLoginError).err !== undefined;
}
