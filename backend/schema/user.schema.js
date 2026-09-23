const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full Name is required"]
    },
    email: { type: String, unique: true },
    password: String,
    // walletAddress: {
    //   type: String,
    //   require: [true, "walletAddress is required"]
    // },

    role: {
      type: String,
      enum: ["admin"]
    }
  },
  { timestamps: true }
);

const SubsCriberSchema = mongoose.model("user", schema);

module.exports = SubsCriberSchema;
