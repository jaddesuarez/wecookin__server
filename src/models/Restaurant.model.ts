import { DEFAULT_RESTAURANT_PIC } from "../constants/index";
import { Schema, model } from "mongoose";

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "A Restaurant name is required!"],
      unique: true,
      trim: true,
    },
    neighborhood: {
      type: String,
    },
    address: {
      type: String,
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: [true, "Location is required!"],
        default: "Point",
      },
      coordinates: {
        type: {
          lat: { type: Number, required: [true, "latitud is required!"] },
          lng: { type: Number, required: [true, "longitud is required!"] },
        },
        default: { lat: 0, lng: 0 },
      },
    },
    image: {
      type: String,
      default: DEFAULT_RESTAURANT_PIC,
      set: (value: string) => (!value ? DEFAULT_RESTAURANT_PIC : value),
    },
    cuisineType: {
      type: Schema.Types.ObjectId,
      ref: "Cuisine",
      required: true,
    },
    operatingHours: {
      Monday: { hours: String, isOpen: Boolean },
      Tuesday: { hours: String, isOpen: Boolean },
      Wednesday: { hours: String, isOpen: Boolean },
      Thursday: { hours: String, isOpen: Boolean },
      Friday: { hours: String, isOpen: Boolean },
      Saturday: { hours: String, isOpen: Boolean },
      Sunday: { hours: String, isOpen: Boolean },
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  },
  {
    timestamps: true,
  }
);

const Restaurant = model("Restaurant", restaurantSchema);

export default Restaurant;
