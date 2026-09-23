const express = require("express");
const upload = require("../middlewares/multer");
const partner_controler = require("../controler/partners.controler");
const Authenticator = require("../middlewares/authentication");

const router = express.Router();

router.get("/get", partner_controler.get);
router.post(
  "/create",
  Authenticator.validateToken,
  upload.fields([{ name: "image", maxCount: 1 }]),
  partner_controler.create
);
router.put(
  "/update/:id",
  Authenticator.validateToken,
  upload.fields([{ name: "image", maxCount: 1 }]),
  partner_controler.update
);
router.delete("/delete/:id",

  Authenticator.validateToken, partner_controler.remove);

module.exports = router;
