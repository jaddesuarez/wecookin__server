import cloudinary from "cloudinary";
import multer, { Multer } from "multer";
import { CloudinaryStorage, Options } from "multer-storage-cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    allowed_formats: ["jpg", "png"],
    folder: "wecookin",
  },
} as Options);

const multerInstance: Multer = multer({ storage });

export const imageUploadMiddleware = multerInstance.single("imageUrl");
