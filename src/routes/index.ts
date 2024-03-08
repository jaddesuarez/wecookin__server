import { Router } from "express";
import authRoutes from "./auth.routes";
import restaurantRoutes from "./restaurants.routes";
import uploadRoutes from "./upload.routes";
import userRoutes from "./user.routes";
import cuisinesRoutes from "./cuisine.routes";
import reviewsRoutes from "./reviews.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/upload", uploadRoutes);
router.use("/restaurants", restaurantRoutes);
router.use("/users", userRoutes);
router.use("/cuisines", cuisinesRoutes);
router.use("/reviews", reviewsRoutes);

export default router;
