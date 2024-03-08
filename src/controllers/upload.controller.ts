import { Request, Response } from "express";

export const uploadImage = (req: Request, res: Response) => {
  if (!req.file || !req.file.path) res.status(200).json("");
  else res.status(200).json(req.file.path);
};
