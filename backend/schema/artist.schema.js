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
    designation: String,
    image: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const CollectionSchema = mongoose.model("artist", schema);

module.exports = CollectionSchema;
