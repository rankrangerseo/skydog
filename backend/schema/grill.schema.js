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
    content: [
      {
        type: String,
        required: true
      }
    ]
  },
  { timestamps: true }
);

const TypeSchema = mongoose.model("grill", schema);

module.exports = TypeSchema;
