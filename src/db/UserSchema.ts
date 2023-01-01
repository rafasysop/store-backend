import mongoose, { Schema } from "mongoose";

type User = {
  name: string;
  lastName: string;
  password: string;
  email: string;
  profile: string;
  active: boolean;
};

const UserSchema = new Schema({
  name: String,
  lastName: String,
  password: String,
  email: {
    type: String,
    lowercase: true,
    trim: true,
    index: true,
    unique: true,
  },
  profile: String,
  active: Boolean,
});

export default mongoose.model<User>("User", UserSchema);
