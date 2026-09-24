const express = require("express");
const USER_CONTROLER = require("../controler/user.controler");
const Authenticator = require("../middlewares/authentication");

const router = express.Router();

router.post("/create", USER_CONTROLER.create);
router.post("/login", USER_CONTROLER.login);
router.post("/validate-session", Authenticator.validateToken, USER_CONTROLER.userSessionValidated);
router.get("/get-by-wallet", USER_CONTROLER.getByWalletAddress);
router.get("/get", USER_CONTROLER.get);
module.exports = router;

