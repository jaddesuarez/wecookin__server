import { Router } from "express";
import {
  login,
  signup,
  verify,
  updateToken,
} from "../controllers/auth.controller";
import verifyToken from "../middleware/verifyToken";

const router = Router();

router.post("/login", login);
router.post("/signup", signup);
router.get("/verify", verifyToken, verify);
router.get("/updateToken", verifyToken, updateToken);

export default router;
