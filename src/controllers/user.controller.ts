import { Request, Response, NextFunction } from "express";
import { ExtendedPayloadRequest } from "../types/user.types";
import {
  dislikeRestaurantService,
  editUserByIdService,
  favoriteRestaurantsService,
  likeRestaurantService,
  myRestaurantsService,
} from "../services/user.service";

export const getFavoriteRestaurants = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const extendedReq = req as ExtendedPayloadRequest;
    const { _id: user_id } = extendedReq.payload;
    const loggedUser = await favoriteRestaurantsService(user_id);
    res.status(200).json(loggedUser?.favoriteRestaurants);
  } catch (error) {
    next(error);
  }
};

export const getMyRestaurants = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const extendedReq = req as ExtendedPayloadRequest;
    const { _id: user_id } = extendedReq.payload;
    const myRestaurants = await myRestaurantsService(user_id);
    res.status(200).json(myRestaurants);
  } catch (error) {
    next(error);
  }
};

export const editUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const extendedReq = req as ExtendedPayloadRequest;
    const { _id: user_id } = extendedReq.payload;
    const { username, email, avatar } = req.body;
    const updatedUser = await editUserByIdService(user_id, {
      username,
      email,
      avatar,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const likeRestaurant = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const extendedReq = req as ExtendedPayloadRequest;
    const { _id: user_id } = extendedReq.payload;
    const { restaurant_id } = req.params;
    const updatedUser = await likeRestaurantService(user_id, restaurant_id);
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const dislikeRestaurant = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const extendedReq = req as ExtendedPayloadRequest;
    const { _id: user_id } = extendedReq.payload;
    const { restaurant_id } = req.params;
    const updatedUser = await dislikeRestaurantService(user_id, restaurant_id);
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};
