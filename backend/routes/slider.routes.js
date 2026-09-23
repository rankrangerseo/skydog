const express = require("express");
const upload = require("../middlewares/multer");
const Collection_controler = require("../controler/slider.controler");
const Authenticator = require("../middlewares/authentication");

const router = express.Router();

router.get("/get", Collection_controler.get);
router.post(
  "/create",
  Authenticator.validateToken,
  upload.fields([{ name: "image", maxCount: 1 }]),
  Collection_controler.create
);
router.put(
  "/update/:id",
  Authenticator.validateToken,
  upload.fields([{ name: "image", maxCount: 1 }]),
  Collection_controler.update
);
router.delete("/delete/:id",
  Authenticator.validateToken
  , Collection_controler.remove);

module.exports = router;
