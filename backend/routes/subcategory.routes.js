const express = require("express");
const type_controler = require("../controler/subcategory.controler");
const Authenticator = require("../middlewares/authentication");

const router = express.Router();

router.get("/group-by-category", type_controler.groupByCategory);
router.get("/get", type_controler.get);
router.post("/create", Authenticator.validateToken, type_controler.create);
router.put("/update/:id", Authenticator.validateToken, type_controler.update);
router.delete("/delete/:id", Authenticator.validateToken, type_controler.remove);

module.exports = router;
