import { Request, Response, NextFunction } from "express";
import { getAllCuisinesService } from "../services/cuisine.service";

export const getAllCuisines = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const cuisines = await getAllCuisinesService();
    res.status(200).json(cuisines);
  } catch (error) {
    next(error);
  }
};
