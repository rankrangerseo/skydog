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
    name: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const TypeSchema = mongoose.model("category", schema);

module.exports = TypeSchema;
