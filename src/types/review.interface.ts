import { HydratedDocument } from "mongoose";
import { TUser } from "./user.interface";

export interface ReviewModel {
  comment: string;
  rating: string;
  owner: TUser["_id"];
}

export type TReview = HydratedDocument<ReviewModel>;
