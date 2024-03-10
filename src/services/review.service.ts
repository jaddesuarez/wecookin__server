import { IReview } from "../interfaces/review.interface";
import {
  createReviewRepository,
  deleteReviewRepository,
} from "../repositories/review.repository";
import { TNewRestaurant } from "../types/restaurant.types";
import { restaurantIdValidation } from "../validations/restaurant.validation";
import {
  createReviewValidation,
  reviewIdValidation,
} from "../validations/review.validation";

export const createReviewService = async (
  reviewData: IReview,
  restaurantId: string
): Promise<TNewRestaurant | null> => {
  const newReviewData = await createReviewValidation.validateAsync(reviewData);
  const { restaurant_id } = await restaurantIdValidation.validateAsync({
    restaurant_id: restaurantId,
  });
  const updatedRestaurant = await createReviewRepository(
    newReviewData,
    restaurant_id
  );
  return updatedRestaurant;
};

export const deleteReviewService = async (
  reviewId: string,
  restaurantId: string
): Promise<TNewRestaurant | null> => {
  const { review_id } = await reviewIdValidation.validateAsync({
    review_id: reviewId,
  });
  const { restaurant_id } = await restaurantIdValidation.validateAsync({
    restaurant_id: restaurantId,
  });
  const updatedRestaurant = await deleteReviewRepository(
    review_id,
    restaurant_id
  );
  return updatedRestaurant;
};
