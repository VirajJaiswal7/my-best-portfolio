import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String, require: true },
  description: { type: String, required: true },
});

export const Contact = mongoose.model("Contact", contactSchema);
