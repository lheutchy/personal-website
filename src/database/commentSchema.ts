import { Schema } from "mongoose";

export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

export const commentSchema = new Schema({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, default: Date.now },
});
