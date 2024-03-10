import { Request, Response, NextFunction } from "express";
import { ExtendedPayloadRequest } from "../interfaces/user.interface";
import {
  signupService,
  loginService,
  updateTokenService,
} from "../services/auth.service";
import { isLoginError } from "../utils";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password } = req.body;
    const username = email.split("@")[0];
    await signupService({ username, email, password });
    res.status(200).json({ message: "User created in DB" });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password } = req.body;
    const authToken = await loginService({ email, password });
    isLoginError(authToken)
      ? res.status(401).json(authToken)
      : res.status(200).json(authToken);
  } catch (error) {
    next(error);
  }
};

export const verify = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const extendedReq = req as ExtendedPayloadRequest;
    res.status(200).json(extendedReq.payload);
  } catch (error) {
    next(error);
  }
};

export const updateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const extendedReq = req as ExtendedPayloadRequest;
    const user_id = extendedReq.payload._id;
    const authToken = await updateTokenService(user_id);
    res.status(200).json(authToken?.authToken);
  } catch (error) {
    next(error);
  }
};
