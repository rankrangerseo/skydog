const express = require("express");
const upload = require("../middlewares/multer");
const ecosystem_controler = require("../controler/ecosystem.controler");
const Authenticator = require("../middlewares/authentication");

const router = express.Router();

router.get("/get", ecosystem_controler.get);
router.post(
    "/create",
    Authenticator.validateToken,
    upload.fields([{ name: "image", maxCount: 1 }]),
    ecosystem_controler.create
);
router.put(
    "/update/:id",
    Authenticator.validateToken,
    upload.fields([{ name: "image", maxCount: 1 }, { name: "backgroundImage", maxCount: 1 }]),
    ecosystem_controler.update
);
router.delete("/delete/:id",
    Authenticator.validateToken,
    ecosystem_controler.remove);

module.exports = router;
