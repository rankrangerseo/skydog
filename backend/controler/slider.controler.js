const Response = require("../middlewares/response");
const Validator = require("../middlewares/validator");
const BaseSchema = require("../schema/slider.schema");
const uploadOnCloudinary = require("../middlewares/cloudinary")
require("dotenv").config();
const create = async (req, res) => {
  try {
    let image = null;
    if (req?.files?.image?.length) image = req.files.image[0];
    let link = null;
    if (image != null) {
      link = await uploadOnCloudinary(image);

      console.log(link, "<<<tisis image");
    } else {
      return Response.fail(res, "Image is required");
    }

    const { title, category, url } = req.body;
    let reqField = { title, category };
    if (!Validator.requiredFields(reqField, res)) return null;
    const data = await BaseSchema.create({
      ...req.body,
      image: link
    });
    if (data) {
      Response.created(res, "Data saved", data);
    } else {
      Response.error(res, "Error while saving data", data);
    }
  } catch (error) {
    console.log(error);
    Response.error(res, "Error", error);
  }
};
const get = async (req, res) => {
  try {
    let filter = { ...req.query };

    if (req.query.search) {
      const searchTerm = req.query.search;
      filter = {
        ...filter,
        $or: [
          {
            name: { $regex: searchTerm, $options: "i" }
          }
        ]
      };
    }
    let data = await BaseSchema.find(filter).populate("category").sort({
      createdAt: -1
    });
    if (data.length) Response.success(res, "Data fetched", data);
    else Response.fail(res, "No Data found", []);
  } catch (error) {
    Response.error(res, "Error while fetching data", error);
  }
};

const update = async (req, res) => {
  try {


    const { id } = req.params;
    if (!id) return Response.fail(res, "id is required");

    let link = null
    if (req?.files?.image?.length) {
      const image = req.files.image[0]
      link = await uploadOnCloudinary(image);
      console.log(link, "<<<thisislink")
    }

    let payload = req.body
    if (link) {
      payload.image = link
    }
    let data = await BaseSchema.findByIdAndUpdate(
      id,
      payload,
      { new: true }
    );
    console.log("updated")
    Response.success(res, "Updated", data);

  } catch (error) {
    console.log(error);
    Response.error(res, error.message);
  }
};
const remove = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return Response.fail(res, "id is requried", null);
    const data = await BaseSchema.findByIdAndDelete(id);
    if (data) Response.success(res, "Query Deleted", null);
    else Response.fail(res, "Error while deleting", null);
  } catch (error) {
    console.log(error);
    Response.error(res, error.message);
  }
};

module.exports = {
  create,
  get,
  update,
  remove
};
