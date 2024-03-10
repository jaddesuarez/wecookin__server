import { IEditUser } from "../interfaces/user.interface";
import {
  editUserByIdRepository,
  favoriteRestaurantsRepository,
  likeRestaurantRepository,
  myRestaurantsRepository,
  dislikeRestaurantRepository,
} from "../repositories/user.repository";
import { TRestaurant } from "../types/restaurant.types";
import { TLoggedUser } from "../types/user.types";
import { restaurantIdValidation } from "../validations/restaurant.validation";
import {
  editUserValidation,
  userIdValidation,
} from "../validations/user.validation";

export const favoriteRestaurantsService = async (
  userId: string
): Promise<TLoggedUser | null> => {
  const { user_id } = await userIdValidation.validateAsync({
    user_id: userId,
  });
  return favoriteRestaurantsRepository(user_id);
};

export const myRestaurantsService = async (
  userId: string
): Promise<TRestaurant | null> => {
  const { user_id } = await userIdValidation.validateAsync({
    user_id: userId,
  });
  return myRestaurantsRepository(user_id);
};

export const editUserByIdService = async (
  userId: string,
  userData: IEditUser
): Promise<TLoggedUser | null> => {
  const { user_id } = await userIdValidation.validateAsync({
    user_id: userId,
  });
  const editUserData = await editUserValidation.validateAsync(userData);
  return editUserByIdRepository(user_id, editUserData);
};

export const likeRestaurantService = async (
  userId: string,
  restaurantId: string
): Promise<TLoggedUser | null> => {
  const { user_id } = await userIdValidation.validateAsync({
    user_id: userId,
  });
  const { restaurant_id } = await restaurantIdValidation.validateAsync({
    restaurant_id: restaurantId,
  });
  return likeRestaurantRepository(user_id, restaurant_id);
};

export const dislikeRestaurantService = async (
  userId: string,
  restaurantId: string
): Promise<TLoggedUser | null> => {
  const { user_id } = await userIdValidation.validateAsync({
    user_id: userId,
  });
  const { restaurant_id } = await restaurantIdValidation.validateAsync({
    restaurant_id: restaurantId,
  });
  return dislikeRestaurantRepository(user_id, restaurant_id);
};
