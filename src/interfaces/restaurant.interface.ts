import { TUser } from "../types/user.types";
import { TReview } from "../types/review.types";

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
  address: string;
  location: {
    type: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  image: string;
  cuisineType: string;
  operatingHours: OperatingHours;
  owner: TUser["_id"];
  reviews: TReview[];
}

export interface ICreateRestaurant {
  name: string;
  neighborhood: string;
  address: string;
  location: {
    type: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  image: string;
  cuisineType: string;
  operatingHours: OperatingHours;
  owner: string;
}
