const Response = require("../middlewares/response");
const Validator = require("../middlewares/validator");
const Waitlist = require("../schema/waitlist.schema");
const Whitelist = require("../schema/whitelist.schema");
const { formatAddress } = require("../utils/formatter");
const { checkBalanceMoreThanThreshold } = require("../utils/validate");
require("dotenv").config();
const axios = require("axios");
// Waitlist Controllers
const createWaitlistEntry = async (req, res) => {
  try {
    const { name, email, walletAddress, g_recaptcha_response } = req.body;

    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      {},
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: g_recaptcha_response,
        },
      }
    );

    const { success } = response.data;

    if (!success) {
      return Response.fail(res, "reCAPTCHA verification failed!", null);
    }

    const existingWhitelistEntry = await Whitelist.findOne({
      $or: [{ email }, { walletAddress }],
    });

    if (existingWhitelistEntry) {
      return Response.fail(
        res,
        "Email or wallet address already exists in whitelist",
        null
      );
    }

    const existingWaitlistEntry = await Waitlist.findOne({
      $or: [{ email }, { walletAddress }],
    });

    if (existingWaitlistEntry) {
      return Response.fail(
        res,
        "Email or wallet address already registered in waitlist",
        null
      );
    }

    // Validate required fields
    let reqField = { name, walletAddress };
    if (!Validator.requiredFields(reqField, res)) return null;

    // Validate Wallet Balance
    // const hasBalance = await checkBalanceMoreThanThreshold(walletAddress);
    // if (!hasBalance) {
    //   return Response.error(res, "Address should have 0.07 ETH", null);
    // }
    // Create waitlist entry
    const data = await Waitlist.create(req.body);

    if (data) {
      Response.created(res, "Waitlist entry created", data);
    } else {
      Response.error(res, "Error while creating waitlist entry", data);
    }
  } catch (error) {
    console.log(error);
    Response.error(
      res,
      error.message || "Error creating waitlist entry",
      error
    );
  }
};

const getWaitlist = async (req, res) => {
  try {
    let filter = { ...req.query };

    // Add search functionality
    if (req.query.search) {
      const searchTerm = req.query.search;
      filter = {
        ...filter,
        $or: [
          { name: { $regex: searchTerm, $options: "i" } },
          // { lastName: { $regex: searchTerm, $options: "i" } },
          { email: { $regex: searchTerm, $options: "i" } },
        ],
      };
    }

    const data = { list: await Waitlist.find(filter).sort({ createdAt: -1 }) };

    if (req.query.count) {
      // Get the filtered data and total count of users
      data.count = await Waitlist.countDocuments(filter);
    }

    Response.success(res, "Waitlist fetched", data);
  } catch (error) {
    Response.error(res, "Error while fetching waitlist", error);
  }
};

// Whitelist Controllers
const createWhitelistEntry = async (req, res) => {
  try {
    const { name, walletAddress } = req.body;

    // Check if email or wallet address already exists in whitelist
    // const existingWhitelistEntry = await Whitelist.findOne({
    //   $or: [{ email }, { walletAddress }],
    // });

    // if (existingWhitelistEntry) {
    //   return Response.fail(
    //     res,
    //     "Email or wallet address already exists in whitelist",
    //     null
    //   );
    // }

    // Validate required fields
    let reqField = { name, walletAddress };
    if (!Validator.requiredFields(reqField, res)) return null;

    // Create whitelist entry
    const data = await Whitelist.create(req.body);

    if (data) {
      Response.created(res, "Whitelist entry created", data);
    } else {
      Response.error(res, "Error while creating whitelist entry", data);
    }
  } catch (error) {
    console.log(error);
    Response.error(res, "Error creating whitelist entry", error);
  }
};

const getWhitelist = async (req, res) => {
  try {
    let filter = { ...req.query };

    if (req.query.search) {
      const searchTerm = req.query.search;
      filter = {
        ...filter,
        $or: [
          { name: { $regex: searchTerm, $options: "i" } },
          // { lastName: { $regex: searchTerm, $options: "i" } },
          { email: { $regex: searchTerm, $options: "i" } },
        ],
      };
    }

    const data = { list: await Whitelist.find(filter).sort({ createdAt: -1 }) };

    if (req.query.count) {
      // Get the filtered data and total count of users
      data.count = await Whitelist.countDocuments(filter);
    }
    Response.success(res, "Whitelist fetched", data);
  } catch (error) {
    Response.error(res, "Error while fetching whitelist", error);
  }
};

const checkIfExists = async (req, res) => {
  try {
    const { walletAddress } = req.params;

    if (!walletAddress) {
      return Response.fail(res, "Wallet address is required", null);
    }

    // Check in Whitelist first
    const whitelistEntry = await Whitelist.findOne({
      walletAddress: {
        $regex: new RegExp(`^${formatAddress(walletAddress)}$`, "i"),
      },
    });

    if (whitelistEntry) {
      return Response.success(res, "Wallet address exists in whitelist", {
        exists: true,
        type: "whitelist",
        details: whitelistEntry,
      });
    }

    // If not in whitelist, check in Waitlist
    const waitlistEntry = await Waitlist.findOne({
      walletAddress: { $regex: new RegExp(`^${walletAddress}$`, "i") },
    });

    if (waitlistEntry) {
      return Response.success(res, "Wallet address exists in waitlist", {
        exists: true,
        type: "waitlist",
        details: waitlistEntry,
      });
    }

    // If not found in either list
    Response.success(res, "Wallet address does not exist", {
      exists: false,
      type: null,
      details: null,
    });
  } catch (error) {
    console.log(error);
    Response.error(res, "Error while checking wallet address", error);
  }
};

// Convert Waitlist to Whitelist
const convertWaitlistToWhitelist = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return Response.fail(res, "Waitlist entry ID is required", null);

    // Find waitlist entry
    const waitlistEntry = await Waitlist.findById(id);

    if (!waitlistEntry) {
      return Response.fail(res, "Waitlist entry not found", null);
    }

    // Check if email or wallet address already exists in whitelist
    const existingWhitelistEntry = await Whitelist.findOne({
      $or: [
        { email: waitlistEntry.email },
        { walletAddress: formatAddress(waitlistEntry.walletAddress) },
      ],
    });

    if (existingWhitelistEntry) {
      return Response.fail(res, "Entry already exists in whitelist", null);
    }

    // Create whitelist entry
    const whitelistEntry = await Whitelist.create({
      name: waitlistEntry.name,
      ...(waitlistEntry.email ? { email: waitlistEntry.email } : {}),
      ...(waitlistEntry.twitterHandle
        ? { twitterHandle: waitlistEntry.twitterHandle }
        : {}),
      walletAddress: waitlistEntry.walletAddress,
    });

    // Remove from waitlist
    await Waitlist.findByIdAndDelete(id);

    Response.success(
      res,
      "Waitlist entry converted to whitelist",
      whitelistEntry
    );
  } catch (error) {
    console.log(error);
    Response.error(res, "Error converting waitlist to whitelist", error);
  }
};

module.exports = {
  // Waitlist controllers
  createWaitlistEntry,
  getWaitlist,

  // Whitelist controllers
  createWhitelistEntry,
  getWhitelist,
  convertWaitlistToWhitelist,
  checkIfExists,
};
