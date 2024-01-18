import mongoose from "mongoose";

const url = new mongoose.Schema({
  shortId: {
    type: String,
    required: true,
    unique: true,
  },
  redirectUrl: {
    type: String,
    required: true,
  },
  visitHistory: [{ ip: String }],
});
export const URL = mongoose.model("url", url);
