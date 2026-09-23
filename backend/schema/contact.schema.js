const mongoose = require("mongoose");
const { isEmail } = require("validator");

const schema = mongoose.Schema(
  {
    firstName: {
      type: String
      // required: true
    },
    lastName: {
      type: String
      // required: true
    },
    message: String,
    company: String,
    email: {
      type: String,
      required: true,
      validate: [isEmail, "invalid email"]
    },
    mobile: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

const TypeSchema = mongoose.model("contact", schema);

module.exports = TypeSchema;
