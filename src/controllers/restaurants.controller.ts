import Restaurant from "../models/Restaurant.model";
import { Request, Response, NextFunction } from "express";
import { ExtendedPayloadRequest } from "../types/user.interface";

export const getAllRestaurants = (_req: Request, res: Response) => {
  Restaurant.find()
    .sort({ createdAt: -1 })
    .populate("cuisineType")
    .lean()
    .then((restaurants) => {
      res.status(200).json(restaurants);
    })
    .catch((err) => res.status(500).json({ err: err.message }));
};

export const getRestaurantById = (req: Request, res: Response) => {
  const { restaurant_id } = req.params;

  Restaurant.findById(restaurant_id)
    .populate({
      path: "reviews",
      populate: {
        path: "owner",
        select: "username avatar",
      },
    })
    .populate("cuisineType")
    .then((restaurant) => res.status(200).json(restaurant))
    .catch((err) => res.status(500).json({ err: err.message }));
};

export const getRestaurantByOwner = (req: Request, res: Response) => {
  const extendedReq = req as ExtendedPayloadRequest;
  const { _id: owner } = extendedReq.payload;

  Restaurant.find({ owner })
    .then((restaurant) => res.status(200).json(restaurant))
    .catch((err) => res.status(500).json({ err: err.message }));
};

export const getRandomRestaurants = (req: Request, res: Response) => {
  Restaurant.aggregate([{ $sample: { size: 10 } }])
    .then((randomRestaurants) => res.status(200).json(randomRestaurants))
    .catch((err) => res.status(500).json({ err: err.message }));
};

export const createRestaurant = (req: Request, res: Response, next: NextFunction) => {
  const extendedReq = req as ExtendedPayloadRequest;
  const { name, neighborhood, address, location, image, cuisineType, operatingHours } = req.body;
  const { _id: owner } = extendedReq.payload;

  Restaurant.create({
    name,
    neighborhood,
    address,
    location,
    image,
    cuisineType,
    operatingHours,
    owner,
  })
    .then((createdRestaurant) => res.status(200).json(createdRestaurant))
    .catch((err) => next(err));
};

export const editRestaurantById = (req: Request, res: Response, next: NextFunction) => {
  const { restaurant_id } = req.params;
  const { name, neighborhood, address, location, image, cuisineType, operatingHours } = req.body;

  Restaurant.findByIdAndUpdate(
    restaurant_id,
    { name, neighborhood, address, location, image, cuisineType, operatingHours },
    { new: true }
  )
    .then((editedRestaurant) => res.status(200).json(editedRestaurant))
    .catch((err) => next(err));
};

export const deleteRestaurantById = (req: Request, res: Response) => {
  const { restaurant_id } = req.params;

  Restaurant.findByIdAndDelete(restaurant_id)
    .then(() => res.status(200).json({ msg: "Restaurant successfully deleted!" }))
    .catch((err) => res.status(500).json({ err: err.message }));
};
