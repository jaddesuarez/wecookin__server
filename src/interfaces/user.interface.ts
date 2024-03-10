import { Request } from "express";
import { TRestaurant } from "../types/restaurant.types";

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

export interface IEditUser {
  username: string;
  email: string;
  avatar: string;
}
