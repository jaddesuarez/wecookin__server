import { HydratedDocument } from "mongoose";
import { RestaurantModel } from "../interfaces/restaurant.interface";
import { TCuisine } from "./cuisine.types";
import { TReview } from "./review.types";

export type TDayHours = {
  hours: string;
  isOpen: boolean;
};

export type TOperatingHours = {
  Monday: TDayHours;
  Tuesday: TDayHours;
  Wednesday: TDayHours;
  Thursday: TDayHours;
  Friday: TDayHours;
  Saturday: TDayHours;
  Sunday: TDayHours;
};

export type TNewRestaurant = {
  _id: string;
  name: string;
  neighborhood: string;
  location: {
    type: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  image: string;
  cuisineType: string;
  operatingHours: TOperatingHours;
  owner: string;
  reviews: string[];
};

export interface TPopulatedRestaurant {
  _id: string;
  name: string;
  neighborhood: string;
  location: {
    type: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  image: string;
  cuisineType: TCuisine;
  operatingHours: TOperatingHours;
  owner: string;
  reviews: TReview[];
}

export interface TRestaurantAvgReview {
  rating: number;
  totalRevirews: number;
}

export type TRestaurant = HydratedDocument<RestaurantModel>;
