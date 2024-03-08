import { Router } from "express";
import { getAllCuisines } from "../controllers/cuisine.controller";

const router = Router();

router.get("/", getAllCuisines);

export default router;
