const express = require("express");
const contactControler = require("../controler/contact.controler");
const Authenticator = require("../middlewares/authentication");

const router = express.Router();

router.get("/get", contactControler.get);
router.post(
  "/create",
  // Authenticator.validateToken,
  contactControler.create
);
router.put("/update/:id", Authenticator.validateToken, contactControler.update);
router.delete(
  "/delete/:id",
  Authenticator.validateToken,
  contactControler.remove
);

module.exports = router;
