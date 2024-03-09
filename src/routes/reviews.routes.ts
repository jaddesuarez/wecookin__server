import { Router } from "express";
import {
  getAllReviews,
  createReview,
  deleteReviewById,
} from "../controllers/reviews.controllers";
import verifyToken from "../middleware/verifyToken";

const router = Router();

router.get("/", getAllReviews);
router.post("/:restaurant_id", verifyToken, createReview);
router.delete("/:review_id/:restaurant_id", verifyToken, deleteReviewById);

export default router;
