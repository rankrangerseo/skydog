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
    image: {
      type: String,
      required: true
    },
    nilValue: String,
    attributes: [
      {
        category: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
        SubCategory: []
      }
    ],
    showInHomeSlider: {
      type: Boolean,
      default: false
    },
    rating: Number,
    showInEcosystem: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const CollectionSchema = mongoose.model("collection", schema);

module.exports = CollectionSchema;
