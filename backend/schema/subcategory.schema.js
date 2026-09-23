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
    },
    parentCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category"
    }
  },
  { timestamps: true }
);

const TypeSchema = mongoose.model("subcategory", schema);

module.exports = TypeSchema;
