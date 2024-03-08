import mongoose, { model, Schema, Types } from "mongoose"

export interface User {
  _id?: Types.ObjectId;
  userName: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  accessToken?: string;
  lists?: Types.ObjectId[];  
}

const schema = new Schema<User>(
  {
    userName: {
      type: Schema.Types.String,
      maxlength: 50,
      unique: true,
    },
    password: {
      type: Schema.Types.String,
    },
    lists: [
      {
        type: Schema.Types.ObjectId,
        ref: "List",
      },
    ],
  },
  { timestamps: true }
);

export const UserModel = mongoose.model<User>("User", schema);