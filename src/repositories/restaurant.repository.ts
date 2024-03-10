import { ICreateRestaurant } from "../interfaces/restaurant.interface";
import Restaurant from "../models/Restaurant.model";
import { TRestaurant, TPopulatedRestaurant } from "../types/restaurant.types";

export const getAllRestaurantsRepository = async (): Promise<
  TPopulatedRestaurant[]
> => {
  return Restaurant.find()
    .sort({ createdAt: -1 })
    .populate("cuisineType")
    .lean();
};

export const getRestaurantByIdRepository = async (
  restaurant_id: string
): Promise<TPopulatedRestaurant | null> => {
  return Restaurant.findById(restaurant_id)
    .populate({
      path: "reviews",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "owner",
        select: "username avatar",
      },
    })
    .populate("cuisineType");
};

export const getRandomRestaurantsRepository = async (): Promise<
  TRestaurant[]
> => {
  return Restaurant.aggregate([{ $sample: { size: 10 } }]);
};

export const createRestaurantRepository = async (
  restaurantData: ICreateRestaurant
): Promise<TRestaurant> => {
  return Restaurant.create(restaurantData) as unknown as TRestaurant;
};

export const editRestaurantByIdRepository = async (
  restaurant_id: string,
  restaurantData: ICreateRestaurant
): Promise<TRestaurant> => {
  return Restaurant.findByIdAndUpdate(restaurant_id, restaurantData, {
    new: true,
  }) as unknown as TRestaurant;
};

export const deleteRestaurantByIdRepository = async (
  restaurant_id: string
): Promise<TRestaurant> => {
  console.log("holii", restaurant_id);
  return Restaurant.findByIdAndDelete(restaurant_id) as unknown as TRestaurant;
};
