import mongoose, { Schema } from "mongoose";

type User = {
  name: String;
  lastName: String;
  password: String;
  email: String;
  profile: String;
  active: Boolean;
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
