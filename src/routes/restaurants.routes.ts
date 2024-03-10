import { Router } from "express";
import {
  getAllRestaurants,
  getRestaurantById,
  getRandomRestaurants,
  createRestaurant,
  editRestaurantById,
  deleteRestaurantById,
} from "../controllers/restaurants.controller";
import verifyToken from "../middleware/verifyToken";

const router = Router();

router.get("/getAll", getAllRestaurants);
router.get("/getById/:restaurant_id", getRestaurantById);
router.get("/getRandom", getRandomRestaurants);
router.post("/create", verifyToken, createRestaurant);
router.put("/edit/:restaurant_id", verifyToken, editRestaurantById);
router.delete("/delete/:restaurant_id", verifyToken, deleteRestaurantById);

export default router;
