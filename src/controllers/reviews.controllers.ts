import Review from "../models/Review.model";
import Restaurant from "../models/Restaurant.model";
import { Request, Response, NextFunction } from "express";
import { ExtendedPayloadRequest } from "../types/user.interface";

export const getAllReviews = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Review.find()
    .then((createdReview) => res.status(200).json(createdReview))
    .catch((err) => next(err));
};

export const createReview = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const extendedReq = req as ExtendedPayloadRequest;
  const { comment, rating } = req.body;
  const { restaurant_id } = req.params;
  const { _id: owner } = extendedReq.payload;

  Review.create({ comment, rating, owner })
    .then((createdReview) =>
      Restaurant.findByIdAndUpdate(
        restaurant_id,
        {
          $addToSet: { reviews: createdReview._id },
        },
        { new: true }
      )
        .populate({
          path: "reviews",
          options: { sort: { createdAt: -1 } },
          populate: {
            path: "owner",
            select: "username avatar",
          },
        })
        .populate("cuisineType")
    )
    .then((updatedRestaurant) => res.status(201).json(updatedRestaurant))
    .catch((err) => next(err));
};

export const deleteReviewById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { review_id, restaurant_id } = req.params;

  Review.findByIdAndDelete(review_id)
    .then((deletedReview) =>
      Restaurant.findByIdAndUpdate(
        restaurant_id,
        {
          $pull: { reviews: deletedReview?._id },
        },
        { new: true }
      )
        .populate({
          path: "reviews",
          options: { sort: { createdAt: -1 } },
          populate: {
            path: "owner",
            select: "username avatar",
          },
        })
        .populate("cuisineType")
    )
    .then((updatedRestaurant) => res.status(200).json(updatedRestaurant))
    .catch((err) => next(err));
};
