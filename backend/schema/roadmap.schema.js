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
    description: String,
    step: Number,
    image: {
      type: String,
      required: true
    },
    date: Date
  },
  { timestamps: true }
);

const CollectionSchema = mongoose.model("roadmap", schema);

module.exports = CollectionSchema;
