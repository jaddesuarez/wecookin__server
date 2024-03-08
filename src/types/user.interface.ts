import { Request } from "express";
import { Document, HydratedDocument } from "mongoose";
import { TRestaurant } from "./restaurent.interface";

export interface ExtendedPayloadRequest extends Request {
  payload: {
    _id: string;
  };
}

export interface UserModel extends Document {
  signToken: () => string;
  comparePassword: (plainPwd: string) => boolean;
  username: string;
  email: string;
  password: string;
  avatar: string;
  favoriteRestaurants: TRestaurant["_id"][];
}

export type TUser = HydratedDocument<UserModel>;
