import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { DEFAULT_AVATAR } from "../constants/index";
import { Schema, model, CallbackError } from "mongoose";

const saltRounds: number = parseInt(process.env.SALT || "0", 10);

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "A username is needed!"],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "An email is needed"],
      unique: true,
      minLength: 1,
      lowercase: true,
      trim: true,
      match: [
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        "Choose a valid email",
      ],
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
    password: {
      type: String,
      required: [true, "A password is needed!"],
      minLength: [1, "Password too short"],
    },
    avatar: {
      type: String,
      default: DEFAULT_AVATAR,
      set: (value: string) => (!value ? DEFAULT_AVATAR : value),
    },
    favoriteRestaurants: [{ type: Schema.Types.ObjectId, ref: "Restaurant" }],
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPwd = await bcrypt.hash(this.password, salt);
    this.password = hashedPwd;
    next();
  } catch (error) {
    next(error as CallbackError);
  }
});

userSchema.methods.comparePassword = function (plainPwd: string) {
  return bcrypt.compareSync(plainPwd, this.password);
};

userSchema.methods.signToken = function () {
  const { _id, email, username, avatar, favoriteRestaurants, role } = this;
  const payload = { _id, email, username, avatar, favoriteRestaurants, role };

  const authToken = jwt.sign(payload, process.env.TOKEN_SECRET || "your_default_secret", {
    algorithm: "HS256",
    expiresIn: "48h",
  });

  return authToken;
};

const User = model("User", userSchema);

export default User;
