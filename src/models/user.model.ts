import mongoose, { Document, Model } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
  name: string;
  email: string;
  bio?: string;
  profileImage?: string;
  password: string;
  isDoctor?: boolean;
  specialization?: string;
  experience?: number; // in years
  hospital?: string;

  followedDoctors: mongoose.Types.ObjectId[];
  followers: mongoose.Types.ObjectId[];
  posts: mongoose.Types.ObjectId[]; // only used if isDoctor is true
  likedPosts: mongoose.Types.ObjectId[];
  bookmarks: mongoose.Types.ObjectId[];

  comparePassword(password: string): Promise<boolean>;
}

const userSchema: mongoose.Schema<IUser> = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    bio: {
      type: String,
      trim: true,
    },
    profileImage: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    isDoctor: {
      type: Boolean,
      default: false,
    },
    specialization: {
      type: String,
      trim: true,
    },
    experience: {
      type: Number,
      min: 0,
    },
    hospital: {
      type: String,
      trim: true,
    },
    followedDoctors: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    followers: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    posts: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Post",
        index: true,
      },
    ],
    likedPosts: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Post",
        index: true,
      },
    ],
    bookmarks: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Post",
        index: true,
      },
    ],
  },
  { timestamps: true }
);

userSchema.pre<IUser>("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

export const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);
