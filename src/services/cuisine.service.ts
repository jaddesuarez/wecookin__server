import { getAllCuisinesRepository } from "../repositories/cuisine.repository";
import { TCuisine } from "../types/cuisine.types";

export const getAllCuisinesService = async (): Promise<TCuisine[]> => {
  const cuisines = await getAllCuisinesRepository();
  return cuisines;
};
