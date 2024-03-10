import { Request } from "express";
import { Document, HydratedDocument } from "mongoose";
import { TRestaurant } from "./restaurant.types";

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

export interface TLoggedUser {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  password: string;
  username: string;
  role: "USER" | "ADMIN";
  avatar: string;
  favoriteRestaurants: TRestaurant[];
}

export type TUser = HydratedDocument<UserModel>;
