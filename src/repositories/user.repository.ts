import User from "../models/User.model";
import Restaurant from "../models/Restaurant.model";
import { TLoggedUser } from "../types/user.types";
import { TRestaurant } from "../types/restaurant.types";
import { IEditUser } from "../interfaces/user.interface";

export const favoriteRestaurantsRepository = async (
  user_id: string
): Promise<TLoggedUser | null> => {
  return User.findById(user_id).populate("favoriteRestaurants");
};

export const myRestaurantsRepository = async (
  user_id: string
): Promise<TRestaurant | null> => {
  return Restaurant.find({ owner: user_id }) as unknown as TRestaurant;
};

export const editUserByIdRepository = async (
  user_id: string,
  userData: IEditUser
): Promise<TLoggedUser | null> => {
  const { username, email, avatar } = userData;
  return User.findByIdAndUpdate(
    user_id,
    { username, email, avatar },
    { new: true }
  );
};

export const likeRestaurantRepository = async (
  user_id: string,
  restaurant_id: string
): Promise<TLoggedUser | null> => {
  return User.findByIdAndUpdate(
    user_id,
    { $addToSet: { favoriteRestaurants: restaurant_id } },
    { new: true }
  );
};

export const dislikeRestaurantRepository = async (
  user_id: string,
  restaurant_id: string
): Promise<TLoggedUser | null> => {
  return User.findByIdAndUpdate(
    user_id,
    { $pull: { favoriteRestaurants: restaurant_id } },
    { new: true }
  );
};
