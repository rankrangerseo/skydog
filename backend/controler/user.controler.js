const Response = require("../middlewares/response");
const Validator = require("../middlewares/validator");
const baseSchema = require("../schema/user.schema");
const { ethers } = require("ethers");
const bcrypt = require('bcrypt');
const Authenticator = require("../middlewares/authentication");

const saltRounds = 10;
const create = async (req, res, next) => {
  try {
    let { email, password, role } = req.body;
    if (!email || !password || !role) return Response.error(res, "Email/Password/Role  is required!")
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    if (!Validator.requiredFields({ email, password }, res)) return null;
    const createdUser = await baseSchema.create({
      ...req.body, password: hashedPassword
    });
    if (createdUser) {
      Response.created(res, `User Created`);
    }
  } catch (error) {
    console.log(error);
    if (error.code == 11000) {
      let key = Object.keys(error.keyPattern).map(item => item)
      return Response.fail(res, key[0] + " already in use. Please try with other " + key[0],);
    }
    Response.fail(res, "Error", error);
  }
};
const getByWalletAddress = async (req, res, next) => {
  try {
    let { walletAddress } = req.query;

    if (!Validator.requiredFields({ walletAddress }, res)) return null;
    let exactAddress = ethers.getAddress(walletAddress);
    let users = await baseSchema.find({ walletAddress: exactAddress });
    if (users.length) {
      Response.success(res, "User fetched", users);
    } else {
      Response.fail(res, "No User found", []);
    }
  } catch (error) {
    console.log(error);
    Response.error(res, "Error", error);
  }
};
const get = async (req, res) => {
  try {
    let users = await baseSchema.find(req.query).sort({
      createdAt: -1
    });
    if (users.length) Response.success(res, "Users fetched", users);
    else Response.fail(res, "You are not authorised to access it.", []);
  } catch (error) {
    Response.error(res, "Error", error);
  }
};
const userSessionValidated = (req, res) => {
  try {
    Response.success(res, "Session validated", [])
  } catch (error) {

  }
}
const login = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) return Response.error(res, "Email/Password is required", null)
    const user = await baseSchema.findOne({ email })
    if (!user) return Response.error(res, "User does not exist!", null)
    let isPasswordMatched = bcrypt.compareSync(password, user.password);
    if (!isPasswordMatched) return Response.error(res, "Invalid password!", null)
    let token = await Authenticator.generateToken({ email, role: user.role })

    Response.success(res, "Users fetched", { user, token });
    // else Response.fail(res, "You are not authorised to access it.", []);
  } catch (error) {
    Response.error(res, "Error", error);
  }
};

const USER_CONTROLER = {
  getByWalletAddress,
  create,
  userSessionValidated,
  get, login
};

module.exports = USER_CONTROLER;
