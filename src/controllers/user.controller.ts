import User from "../models/User.model";
import { ObjectId } from "mongoose";
import Restaurant from "../models/Restaurant.model";
import { Request, Response, NextFunction } from "express";
import { ExtendedPayloadRequest } from "../types/user.interface";

interface IUser {
  _id: ObjectId;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  password: string;
  username: string;
  role: "USER" | "ADMIN";
  avatar: string;
  favoriteRestaurants: ObjectId[]; // Or replace ObjectId[] with the actual type if favoriteRestaurants is populated
}

export const getFavoriteRestaurants = (req: Request, res: Response): void => {
  const extendedReq = req as ExtendedPayloadRequest;
  const { _id: user_id } = extendedReq.payload;

  User.findById(user_id)
    .populate("favoriteRestaurants")
    .then((result) => {
      const user = result?.toObject() as Document & IUser;
      if (user && user.favoriteRestaurants)
        // Ensure user and favoriteRestaurants exist
        res.status(200).json(user.favoriteRestaurants);
      else res.status(404).json({ error: "User not found or has no favorite restaurants" });
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

export const getMyRestaurants = (req: Request, res: Response): void => {
  const extendedReq = req as ExtendedPayloadRequest;
  const { _id: user_id } = extendedReq.payload;

  Restaurant.find({ owner: user_id })
    .then((myRestaurants) => res.status(200).json(myRestaurants))
    .catch((err) => res.status(500).json({ error: err.message }));
};

export const editUserById = (req: Request, res: Response, next: NextFunction) => {
  const extendedReq = req as ExtendedPayloadRequest;
  const { _id: user_id } = extendedReq.payload;
  const { username, email } = req.body;

  User.findByIdAndUpdate(user_id, { username, email }, { new: true })
    .then((editedUser) => res.status(200).json(editedUser))
    .catch((err) => next(err));
};

export const likeRestaurant = (req: Request, res: Response): void => {
  const extendedReq = req as ExtendedPayloadRequest;
  const { _id: user_id } = extendedReq.payload;
  const { restaurant_id } = req.params;

  User.findByIdAndUpdate(
    user_id,
    { $addToSet: { favoriteRestaurants: restaurant_id } },
    { new: true }
  )
    .then((updatedUser) => res.status(200).json(updatedUser))
    .catch((err) => res.status(500).json({ error: err.message }));
};

export const dislikeRestaurant = (req: Request, res: Response): void => {
  const extendedReq = req as ExtendedPayloadRequest;
  const { _id: user_id } = extendedReq.payload;
  const { restaurant_id } = req.params;

  User.findByIdAndUpdate(user_id, { $pull: { favoriteRestaurants: restaurant_id } }, { new: true })
    .then((updatedUser) => res.status(200).json(updatedUser))
    .catch((err) => res.status(500).json({ error: err.message }));
};
