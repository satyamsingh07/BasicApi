import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: 'enter a first name',
  },
  lastName: {
    type: String,
    required: 'enter a last name',
  },
  email: {
    type: String,
  },
  company: {
    type: String,
  },
  phone: {
    type: Number,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});
