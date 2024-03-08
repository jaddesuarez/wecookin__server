import { Router } from "express";
import {
  getFavoriteRestaurants,
  getMyRestaurants,
  likeRestaurant,
  dislikeRestaurant,
  editUserById,
} from "../controllers/user.controller";
import verifyToken from "../middleware/verifyToken";

const router = Router();

router.get("/getFavoriteRestaurants", verifyToken, getFavoriteRestaurants);
router.get("/getMyRestaurants", verifyToken, getMyRestaurants);
router.put("/likeRestaurant/:restaurant_id", verifyToken, likeRestaurant);
router.put("/dislikeRestaurant/:restaurant_id", verifyToken, dislikeRestaurant);
router.put("/editUser", verifyToken, editUserById);

export default router;
