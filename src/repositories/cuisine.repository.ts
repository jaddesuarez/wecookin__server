import Cuisine from "../models/Cuisine.model";
import { TCuisine } from "../types/cuisine.types";

export const getAllCuisinesRepository = async (): Promise<TCuisine[]> => {
  return Cuisine.find().sort({ cuisine: 1 });
};
