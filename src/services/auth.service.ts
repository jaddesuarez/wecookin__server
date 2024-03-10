import { ISignupData, ILoginData } from "../interfaces/auth.interface";
import { TLoginError, TAuthToken } from "../types/auth.types";
import {
  loginValidation,
  signupValidation,
} from "../validations/auth.validation";
import { userIdValidation } from "../validations/user.validation";
import {
  loginRepository,
  signupRepository,
  updateTokenRepository,
} from "../repositories/auth.repository";

export const signupService = async (signupData: ISignupData): Promise<void> => {
  const userSignupData = await signupValidation.validateAsync(signupData);
  await signupRepository(userSignupData);
};

export const loginService = async (
  loginData: ILoginData
): Promise<TLoginError | TAuthToken> => {
  const userLoginData = await loginValidation.validateAsync(loginData);
  return loginRepository(userLoginData);
};

export const updateTokenService = async (
  userId: string
): Promise<TAuthToken | undefined> => {
  const { user_id } = await userIdValidation.validateAsync({
    user_id: userId,
  });
  return updateTokenRepository(user_id);
};
