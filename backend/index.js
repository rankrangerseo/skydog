// ------------------BASE TEMPLATE-----------------------

const express = require("express");
const app = express();
require("./dbConnect");
const PORT = process.env.port || 5000;
const path = require("path");

const IMAGES_DIR = path.join(__dirname, "nfts");
var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
var cors = require("cors");
app.use(cors({ origin: true, credentials: true }));

app.use(function (req, res, next) {
  console.log(req.originalUrl);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// check empty db error in remote

// -------------------------------------- REQUIRE ROUTES-----------------------
// const Email = require("./routes/subscriber.routes");
const USER = require("./routes/user.routes");
// const LEAD = require("./routes/leads.routes");
// const CONTROLER = require("./routes/traffic.routes");
const Type = require("./routes/category.routes");
const Collection = require("./routes/collection.routes");
const Contact = require("./routes/contact.routes");
// const ProductLead = require("./routes/productlead.routes");
const StaticPageControler = require("./routes/static.controler");
const WhitelistRoute = require("./routes/whitelist.routes");
const CommunityRoutes = require("./routes/community.routes");
const PartnerRoutes = require("./routes/partner.routes");
const sliderRoutes = require("./routes/slider.routes");
const subCategoryRoutes = require("./routes/subcategory.routes");
const grillRoutes = require("./routes/grill.routes");
const RoadMapControler = require("./routes/roadmap.routes");
const ARtistRoutes = require("./routes/artist.route");
const EcosystemRoutes = require("./routes/ecosystem.routes");
// const ServiceLead = require("./routes/servicelead.routes");

//  routes
app.use("/static", express.static("uploads"));
// app.use("/subscriber", Email);
app.use("/user", USER);
// app.use("/lead", LEAD);
// app.use("/session", CONTROLER);
app.use("/category", Type); // it is type before
app.use("/collection", Collection);
app.use("/artist", ARtistRoutes);
app.use("/grill", grillRoutes);
app.use("/roadmap", RoadMapControler);
app.use("/partner", PartnerRoutes);
app.use("/community", CommunityRoutes);
app.use("/ecosystem", EcosystemRoutes);
// app.use("/partner", PartnerRoutes);
app.use("/slider", sliderRoutes);
app.use("/sub-category", subCategoryRoutes);
// app.use("/product-lead", ProductLead);
app.use("/contact", Contact);
// app.use("/service-lead", ServiceLead);
app.use("/static-page", StaticPageControler);
app.use("/access", WhitelistRoute);
app.use("/assets", express.static(IMAGES_DIR));

app.listen(PORT, () => console.log("Server is running on PORT:", PORT));

module.exports = app;
