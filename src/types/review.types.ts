import { TUser } from "./user.types";

export type TReview = {
  comment: string;
  rating: string;
  owner: TUser["_id"];
};
