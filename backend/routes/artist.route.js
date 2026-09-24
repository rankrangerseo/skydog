const express = require("express");
const upload = require("../middlewares/multer");
const roadmap_controler = require("../controler/artist.controler");
const Authenticator = require("../middlewares/authentication");

const router = express.Router();

router.get("/get", roadmap_controler.get);
router.post(
  "/create",
  Authenticator.validateToken,
  upload.fields([{ name: "image", maxCount: 1 }]),
  roadmap_controler.create
);
router.put(
  "/update/:id",
  Authenticator.validateToken,
  upload.fields([{ name: "image", maxCount: 1 }]),
  roadmap_controler.update
);
router.delete("/delete/:id",
  Authenticator.validateToken
  , roadmap_controler.remove);
module.exports = router;

