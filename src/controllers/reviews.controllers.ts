import Review from "../models/Review.model";
import Restaurant from "../models/Restaurant.model";
import { Request, Response, NextFunction } from "express";
import { ExtendedPayloadRequest } from "../types/user.types";
import {
  createReviewService,
  deleteReviewService,
} from "../services/review.service";

export const createReview = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const extendedReq = req as ExtendedPayloadRequest;
    const { comment, rating } = req.body;
    const { restaurant_id } = req.params;
    const { _id: owner } = extendedReq.payload;
    const updatedRestaurant = await createReviewService(
      { owner, comment, rating },
      restaurant_id
    );
    res.status(201).json(updatedRestaurant);
  } catch (error) {
    next(error);
  }
};

export const deleteReviewById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { review_id, restaurant_id } = req.params;
    const updatedRestaurant = await deleteReviewService(
      review_id,
      restaurant_id
    );
    res.status(201).json(updatedRestaurant);
  } catch (error) {
    next(error);
  }
};
