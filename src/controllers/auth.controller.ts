import User from "../models/User.model";
import { Request, Response, NextFunction } from "express";
import { TUser, ExtendedPayloadRequest } from "../types/user.interface";

export const login = (req: Request, res: Response, next: NextFunction) => {
  const { email, password: plainPassword } = req.body;

  if (email === "" || plainPassword === "") {
    res.status(400).json({ err: ["Provide email and password."] });
    return;
  }

  User.findOne<TUser>({ email })
    .then((user) => {
      if (!user || !user.comparePassword(plainPassword)) {
        res.status(401).json({ err: ["Wrong User or Password"] });
        return;
      }

      const authToken = user.signToken();
      res.status(200).json({ authToken });
    })
    .catch((err) => next(err));
};

export const signup = (req: Request, res: Response, next: NextFunction) => {
  const { email, password }: { username: string; email: string; password: string } = req.body;
  const username = email.split("@")[0];

  User.create({ username, email, password })
    .then((createdUser) => {
      return User.findById<TUser>(createdUser._id);
    })
    .then((foundUser) => {
      const authToken = foundUser?.signToken();
      res.status(200).json({ authToken });
    })
    .catch((err) => next(err));
};

export const verify = (req: Request, res: Response) => {
  const extendedReq = req as ExtendedPayloadRequest;
  res.status(200).json(extendedReq.payload);
};

export const updateToken = (req: Request, res: Response, next: NextFunction) => {
  const extendedReq = req as ExtendedPayloadRequest;
  const user_id = extendedReq.payload._id;

  User.findById<TUser>(user_id)
    .then((user) => {
      const token = user?.signToken();
      res.json(token);
    })
    .catch((err) => next(err));
};
