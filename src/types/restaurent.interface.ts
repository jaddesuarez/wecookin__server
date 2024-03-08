import { HydratedDocument } from "mongoose";
import { TUser } from "./user.interface";
import { TReview } from "./review.interface";

export interface DayHours {
  hours: string;
  isOpen: boolean;
}

export interface OperatingHours {
  Monday: DayHours;
  Tuesday: DayHours;
  Wednesday: DayHours;
  Thursday: DayHours;
  Friday: DayHours;
  Saturday: DayHours;
  Sunday: DayHours;
}

export interface RestaurantModel {
  name: string;
  neighborhood: string;
  location: {
    type: string;
    coordinates: number[];
  };
  image: string;
  cuisineType: string;
  operatingHours: OperatingHours;
  owner: TUser["_id"];
  reviews: TReview[];
}

export type TRestaurant = HydratedDocument<RestaurantModel>;
