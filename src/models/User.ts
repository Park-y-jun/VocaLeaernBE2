import mongoose, { model, Schema, Types } from "mongoose"

interface User {
  _id: Types.ObjectId;
  userName: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
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
  },
  { timestamps: true }
);

export default mongoose.model<User>('User', schema);