import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      maxLength: 50
    },
    lastName: {
      type: String,
      maxLength: 50
    },
    email: {
      type: String,
      maxLength: 256
    },
    password: {
      type: String,
      maxLength: 50
    },
    status: {
      type: String,
      default: "Active",
      enum: ["Active", "InActive"]
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true, id: true },
    toObject: { virtuals: true, id: true }
  }
);

export default mongoose.model("users", userSchema);
