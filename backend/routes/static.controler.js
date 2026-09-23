const express = require("express");
const {
  create,
  get,
  update,
  remove
} = require("../controler/staticPage.controler");
const Authenticator = require("../middlewares/authentication");
const router = express.Router();

router.get("/get", get);
router.post("/create", Authenticator.validateToken, create);
router.delete("/delete/:id", Authenticator.validateToken, remove);
router.post("/update/:id", Authenticator.validateToken, update);
module.exports = router;
