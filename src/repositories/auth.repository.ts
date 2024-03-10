import User from "../models/User.model";
import { ISignupData, ILoginData } from "../interfaces/auth.interface";
import { TUser } from "../types/user.types";
import { TAuthToken, TLoginError } from "../types/auth.types";

export const signupRepository = async (
  userSignupData: ISignupData
): Promise<void> => {
  const { email, username, password } = userSignupData;
  User.create({ username, email, password });
};

export const loginRepository = async (
  userLoginData: ILoginData
): Promise<TLoginError | TAuthToken> => {
  const { email, password: plainPassword } = userLoginData;
  const signupData = User.findOne<TUser>({ email }).then((user) => {
    if (!user || !user.comparePassword(plainPassword)) {
      return { err: ["Wrong User or Password"] };
    }
    const authToken = user.signToken();
    return { authToken };
  });
  return signupData;
};

export const updateTokenRepository = async (
  user_id: string
): Promise<TAuthToken | undefined> => {
  const updateTokenData = User.findById<TUser>(user_id).then((user) => {
    const authToken = user?.signToken();
    return authToken ? { authToken } : undefined;
  });
  return updateTokenData;
};
