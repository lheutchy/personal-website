import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type Blog = {
  title: string;
  slug: string;
  date: Date;
  description: string; // for preview
  content: string; // text content for individual blog page
  image: string; // url for string in public
  imageAlt: string; // alt for image
  comments: IComment[]; // array for comments
};

export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

//defining comments
const commentSchema = new Schema({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, default: Date.now },
});

// mongoose schema
const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  content: { type: String, required: true },
  comments: [commentSchema],
});

// defining the collection and model
const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;
