const express = require("express");
const controller = require("../controler/whitelist.controller");
const Authenticator = require("../middlewares/authentication");

// Waitlist Routes
const router = express.Router();

router.get(
  "/waitlist/getAll",
  Authenticator.validateToken,
  controller.getWaitlist
);

router.post("/waitlist/create", controller.createWaitlistEntry);
router.post(
  "/waitlist/convert/:id",
  Authenticator.validateToken,
  controller.convertWaitlistToWhitelist
);

router.get(
  "/whitelist/getAll",
  Authenticator.validateToken,
  controller.getWhitelist
);

router.get(
  "/whitelist/checkIfExists/:walletAddress",
  // Authenticator.validateToken,
  controller.checkIfExists
);
// router.post(
//   "/whitelist/create",
//   Authenticator.validateToken,
//   controller.createWhitelistEntry
// );

module.exports = router;
