const mongoose = require("mongoose");

const strReq = {
  type: String,
  required: true
};
const numReq = {
  type: String,
  required: true
};
const schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    nilValue: { type: String },
    url: String,
    category: {
      type: String
    },
    showInHomeSlider: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const CollectionSchema = mongoose.model("slider", schema);

module.exports = CollectionSchema;
