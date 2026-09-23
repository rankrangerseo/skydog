const mongoose = require("mongoose");
const { formatAddress } = require("../utils/formatter"); // Assuming you have a utils file

const WhitelistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
      trim: true,
    },
    email: {
      type: String,
      required: false,
      lowercase: true,
      trim: true,
    },
    walletAddress: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    twitterHandle: {
      type: String,
      required: false,
      trim: true,
    },
  },
  { timestamps: true }
);

// Pre-save middleware to normalize wallet address
WhitelistSchema.pre("save", function (next) {
  try {
    // Only modify if walletAddress is provided and has changed
    if (this.walletAddress) {
      // Use formatAddress to normalize the wallet address
      this.walletAddress = formatAddress(this.walletAddress);
    }
    next();
  } catch (error) {
    next(error);
  }
});

// Add a validation hook to ensure unique wallet address
WhitelistSchema.pre("save", async function (next) {
  try {
    // Check for existing entry with same wallet address
    const existingEntry = await this.constructor.findOne({
      walletAddress: this.walletAddress,
      _id: { $ne: this._id }, // Exclude current document when updating
    });

    if (existingEntry) {
      return next(new Error("Wallet address must be unique"));
    }
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("Whitelist", WhitelistSchema);
