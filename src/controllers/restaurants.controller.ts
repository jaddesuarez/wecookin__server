import { Request, Response, NextFunction } from "express";
import { ExtendedPayloadRequest } from "../types/user.types";
import {
  deleteRestaurantByIdService,
  createRestaurantService,
  editRestaurantByIdService,
  getAllRestaurantsService,
  getRandomRestaurantsService,
  getRestaurantByIdService,
  getRestaurantAvgRatingByIdService,
} from "../services/restaurant.service";

export const getAllRestaurants = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const restaurants = await getAllRestaurantsService();
    res.status(200).json(restaurants);
  } catch (error) {
    next(error);
  }
};

export const getRestaurantById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { restaurant_id } = req.params;
    const restaurant = await getRestaurantByIdService(restaurant_id);
    res.status(200).json(restaurant);
  } catch (error) {
    next(error);
  }
};

export const getRestaurantAvgRatingById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { restaurant_id } = req.params;
    const ratingData = await getRestaurantAvgRatingByIdService(restaurant_id);
    res.status(200).json(ratingData);
  } catch (error) {
    next(error);
  }
};

export const getRandomRestaurants = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const restaurants = await getRandomRestaurantsService();
    res.status(200).json(restaurants);
  } catch (error) {
    next(error);
  }
};

export const createRestaurant = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const extendedReq = req as ExtendedPayloadRequest;
    const {
      name,
      neighborhood,
      address,
      location,
      image,
      cuisineType,
      operatingHours,
    } = req.body;
    const { _id: owner } = extendedReq.payload;
    const newRestaurant = await createRestaurantService({
      name,
      neighborhood,
      address,
      location,
      image,
      cuisineType,
      operatingHours,
      owner,
    });
    res.status(200).json(newRestaurant);
  } catch (error) {
    next(error);
  }
};

export const editRestaurantById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { restaurant_id } = req.params;
    const extendedReq = req as ExtendedPayloadRequest;
    const {
      name,
      neighborhood,
      address,
      location,
      image,
      cuisineType,
      operatingHours,
    } = req.body;
    const { _id: owner } = extendedReq.payload;
    const newRestaurant = await editRestaurantByIdService(restaurant_id, {
      name,
      neighborhood,
      address,
      location,
      image,
      cuisineType,
      operatingHours,
      owner,
    });
    res.status(200).json(newRestaurant);
  } catch (error) {
    next(error);
  }
};

export const deleteRestaurantById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { restaurant_id } = req.params;
    const deletedRestaurant = await deleteRestaurantByIdService(restaurant_id);
    res.status(200).json(deletedRestaurant);
  } catch (error) {
    next(error);
  }
};
