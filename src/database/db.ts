// db.ts
/*import mongoose from "mongoose";

const url: string = process.env.MONGO_URI as string;
let connection: typeof mongoose;

/**
 * Makes a connection to a MongoDB database. If a connection already exists, does nothing
 * Call this function at the start of api routes and data fetches
 * @returns {Promise<typeof mongoose>}
 */
/*const connectDB = async () => {
  if (!connection) {
    connection = await mongoose.connect(url);
    return connection;
  }
};

export default connectDB;*/

import mongoose from "mongoose";

let connection: typeof mongoose | null = null;

const connectDB = async () => {
  if (connection) return connection;

  const rawUrl = process.env.MONGO_URI;

  if (!rawUrl) {
    throw new Error("MONGO_URI is not defined in environment variables");
  }

  // 🧼 Clean up common mistakes in .env (extra prefix, quotes, etc.)
  const url = rawUrl
    .trim()
    .replace(/^MONGO_URI=/, "")      // strip "MONGO_URI=" if it got copied
    .replace(/^"(.+)"$/, "$1")       // strip double quotes around whole value
    .replace(/^'(.+)'$/, "$1");      // strip single quotes

  connection = await mongoose.connect(url);
  return connection;
};

export default connectDB;