import { Schema, model } from "mongoose";

const cuisineSchema = new Schema(
  {
    cuisine: {
      type: String,
      required: [true, "Cuisine is Required"],
    },
  },
  {
    timestamps: true,
  }
);

const Cuisine = model("Cuisine", cuisineSchema);

export default Cuisine;
