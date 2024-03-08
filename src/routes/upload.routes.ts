import { Router } from "express";
import { imageUploadMiddleware } from "../middleware/upload";
import { uploadImage } from "../controllers/upload.controller";

const router = Router();

router.post("/", imageUploadMiddleware, uploadImage);

export default router;
