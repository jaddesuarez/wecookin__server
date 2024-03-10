import Review from "../models/Review.model";
import Restaurant from "../models/Restaurant.model";
import { IReview } from "../interfaces/review.interface";
import { TNewRestaurant } from "../types/restaurant.types";

export const createReviewRepository = async (
  reviewData: IReview,
  restaurant_id: string
): Promise<TNewRestaurant | null> => {
  return (await Review.create(reviewData)
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
    .then(
      (updatedRestaurant) => updatedRestaurant
    )) as unknown as TNewRestaurant;
};

export const deleteReviewRepository = async (
  review_id: string,
  restaurant_id: string
): Promise<TNewRestaurant | null> => {
  return Review.findByIdAndDelete(review_id)
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
    .then(
      (updatedRestaurant) => updatedRestaurant
    ) as unknown as TNewRestaurant;
};
