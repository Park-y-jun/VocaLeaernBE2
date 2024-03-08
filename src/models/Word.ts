import mongoose, { model, Schema, Types } from "mongoose";

enum Difficulty {
  INITIAL = "INITIAL",
  EASY = "EASY",
  NORMAL = "NORMAL",
  HARD = "HARD",
}

interface Word {
  _id?: Types.ObjectId;
  list: Types.ObjectId; 
  question: string;
  answer: string;
  difficulty: Difficulty;
  nextReviewDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const schema = new Schema<Word>(
  {
    list: {
      type: Schema.Types.ObjectId,
      ref: "List", 
    },
    question: {
      type: Schema.Types.String,
    },
    answer: {
      type: Schema.Types.String,
    },
    difficulty: {
      type: Schema.Types.String,
      enum: Object.values(Difficulty),
      default: Difficulty.INITIAL,
    },
    nextReviewDate: {
      type: Schema.Types.Date,
    },
  },
  { timestamps: true }
);

export default mongoose.model<Word>("Word", schema);
