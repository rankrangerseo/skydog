var jwt = require("jsonwebtoken");
require('dotenv').config()
const Response = require("./response");
const { JWT_SECRET } = process.env;


const generateToken = async data => {
    console.log("------> thisis jwt----", JWT_SECRET);
    let token = await jwt.sign(data, JWT_SECRET);
    return token;
};

const decodeToken = async (req, res, next) => {
    try {
        const authHeader = String(req.headers["authorization"] || "");

        if (authHeader.startsWith("Bearer ")) {
            const token = authHeader.substring(7, authHeader.length);
            var decoded = jwt.verify(token, JWT_SECRET);
            req.user = decoded;

            next();
        } else {
            Response.fail(res, "Please Login", {
                sessionExpired: "true"
            });
        }
    } catch (error) {
        Response.error(
            res,
            "Invalid Token!. Please login again",
            null
        );
    }
};

const verifyAdmin = async (req, res, next) => {
    let { role } = req.user;
    console.log(req.user.role);
    if (role == "ADMIN") {
        next();
    } else {
        Response.unauthorized(res, "You are not authorized to access API");
    }
};

const Authenticator = {
    generateToken,
    validateToken: decodeToken,
    verifyAdmin,
};

module.exports = Authenticator;
