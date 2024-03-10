import {
  createRestaurantRepository,
  deleteRestaurantByIdRepository,
  editRestaurantByIdRepository,
  getAllRestaurantsRepository,
  getRandomRestaurantsRepository,
  getRestaurantByIdRepository,
} from "../repositories/restaurant.repository";
import { TRestaurant, TPopulatedRestaurant } from "../types/restaurant.types";
import { ICreateRestaurant } from "../interfaces/restaurant.interface";
import {
  restaurantIdValidation,
  restaurantValidation,
} from "../validations/restaurant.validation";

export const getAllRestaurantsService = async (): Promise<
  TPopulatedRestaurant[]
> => {
  return await getAllRestaurantsRepository();
};

export const getRestaurantByIdService = async (
  restaurantId: string
): Promise<TPopulatedRestaurant | null> => {
  const { restaurant_id } = await restaurantIdValidation.validateAsync({
    restaurant_id: restaurantId,
  });
  return await getRestaurantByIdRepository(restaurant_id);
};

export const getRandomRestaurantsService = async (): Promise<TRestaurant[]> => {
  return await getRandomRestaurantsRepository();
};

export const createRestaurantService = async (
  restaurantData: ICreateRestaurant
): Promise<TRestaurant> => {
  const newRestaurantData = await restaurantValidation.validateAsync(
    restaurantData
  );
  return createRestaurantRepository(newRestaurantData);
};

export const editRestaurantByIdService = async (
  restaurantId: string,
  restaurantData: ICreateRestaurant
): Promise<TRestaurant> => {
  const { restaurant_id } = await restaurantIdValidation.validateAsync({
    restaurant_id: restaurantId,
  });
  const editedRestaurantData = await restaurantValidation.validateAsync(
    restaurantData
  );
  return editRestaurantByIdRepository(restaurant_id, editedRestaurantData);
};

export const deleteRestaurantByIdService = async (
  restaurantId: string
): Promise<TRestaurant> => {
  const { restaurant_id } = await restaurantIdValidation.validateAsync({
    restaurant_id: restaurantId,
  });
  return await deleteRestaurantByIdRepository(restaurant_id);
};
