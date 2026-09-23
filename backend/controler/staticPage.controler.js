const Response = require("../middlewares/response");
const Validator = require("../middlewares/validator");
const BaseSchema = require("../schema/staticPages.schema");
require("dotenv").config();

const create = async (req, res) => {
  try {
    const { title, bodyData, page } = req.body;
    let reqField = { title, bodyData, page };
    if (!Validator.requiredFields(reqField, res)) return null;
    const data = await BaseSchema.create({
      ...req.body
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
    let data = await BaseSchema.find(filter).sort({
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
    else {
      let data = await BaseSchema.findByIdAndUpdate(
        id,
        { ...req.body },
        { new: true }
      );
      Response.success(res, "Updated", data);
    }
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
