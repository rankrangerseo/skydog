const express = require("express");
const upload = require("../middlewares/multer");
const Collection_controler = require("../controler/collection.controler");
const Authenticator = require("../middlewares/authentication");

const router = express.Router();
router.get("/nfts", Collection_controler.getNfts);
router.get("/get", Collection_controler.get);
router.get("/get-edit", Collection_controler.getEdit);
router.get("/get-filter", Collection_controler.getFilter);
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
router.delete(
  "/delete/:id",
  Authenticator.validateToken,
  Collection_controler.remove
);

module.exports = router;
