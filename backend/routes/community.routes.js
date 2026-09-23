const express = require("express");
const upload = require("../middlewares/multer");
const community_controler = require("../controler/community.controler");
const Authenticator = require("../middlewares/authentication");

const router = express.Router();

router.get("/get", community_controler.get);
router.post(
  "/create",
  Authenticator.validateToken,
  upload.fields([{ name: "image", maxCount: 1 }]),
  community_controler.create
);
router.put(
  "/update/:id",
  Authenticator.validateToken,
  upload.fields([{ name: "image", maxCount: 1 }, { name: "backgroundImage", maxCount: 1 }]),
  community_controler.update
);
router.delete("/delete/:id",
  Authenticator.validateToken,
  community_controler.remove);

module.exports = router;
