import mongoose, { model, Schema, Types } from "mongoose";

export interface List {
  _id?: Types.ObjectId;
  user: Types.ObjectId; 
  listName: string;
  createdAt?: Date;
  updatedAt?: Date;
  words?: Types.ObjectId[]; 
}

const schema = new Schema<List>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to User model
    },
    listName: {
      type: Schema.Types.String,
      maxlength: 100,
    },
    words: [
      {
        type: Schema.Types.ObjectId,
        ref: "Word", 
      },
    ],
  },
  { timestamps: true }
);

export const ListModel = mongoose.model<List>("List", schema);
