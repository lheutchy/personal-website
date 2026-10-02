import mongoose, { Schema } from "mongoose";
import { commentSchema, IComment } from "./commentSchema";

type Project = {
  title: string;
  slug: string;
  description: string;
  image: string;
  image_alt: string;
  comments: IComment[];
};

const projectSchema = new Schema<Project>({
  title: { type: String, required: true },
  slug: { type: String, required: false },
  description: { type: String, required: true },
  image: { type: String, required: false },
  image_alt: { type: String, required: false },
  comments: {
    type: [commentSchema],
  },
});

const Project =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
