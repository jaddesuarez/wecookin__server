import Cuisine from "../models/Cuisine.model";
import { Request, Response, NextFunction } from "express";

export const getAllCuisines = (req: Request, res: Response, next: NextFunction) => {
  Cuisine.find()
    .sort({ cuisine: 1 })
    .then((allCuisines) => res.status(200).json(allCuisines))
    .catch((err) => next(err));
};
