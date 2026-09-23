const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const { API_SECRET, API_KEY, CLOUD_NAME } = process.env;
// Configuration

cloudinary.config({
  secure: true,
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET
});
// Upload
const uploadOnCloudinary = async file => {
  try {
    const data = await cloudinary.uploader.upload(file.path);
    return data.secure_url;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = uploadOnCloudinary;
