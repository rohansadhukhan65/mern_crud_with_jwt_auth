import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: false, // If optional, you can remove 'required'
      trim: true,
    },
    address: {
      street: { type: String, required: false, trim: true },
      city: { type: String, required: false, trim: true },
      state: { type: String, required: false, trim: true },
      zip: { type: String, required: false, trim: true },
      country: { type: String, required: false, trim: true },
    },
    phone: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^\+?[1-9]\d{1,14}$/.test(v); // E.164 format validation
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
    email: {
      type: String,
      required: false,
      trim: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Email validation
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
  },
  { timestamps: true }
);

export const ContactModel = mongoose.model("contact", contactSchema);
