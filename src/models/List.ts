import mongoose, { model, Schema, Types } from "mongoose";

interface List {
  _id: Types.ObjectId;
  listName: string;
  userName: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const schema = new Schema<List>(
  {
    listName: {
      type: Schema.Types.String,
      maxlength: 100,
      unique: true,
    },
    userName: {
      type: Schema.Types.String,
      maxlength: 50,
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<List>("List", schema);
