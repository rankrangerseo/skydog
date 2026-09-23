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
    slug: {
      type: String,
      unique: true,
      require: [true, "Slug is required"]
    },
    bodyData: {
      type: String,
      required: true
    },
    page: {
      type: Number,
      unique: true,
      require: [true, "Page is required"]
    }
    // type: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "type"
    // }
  },
  { timestamps: true }
);

const CollectionSchema = mongoose.model("static_page", schema);

module.exports = CollectionSchema;
