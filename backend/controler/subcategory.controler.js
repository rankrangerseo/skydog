const Response = require("../middlewares/response");
const Validator = require("../middlewares/validator");
const BaseSchema = require("../schema/subcategory.schema");
require("dotenv").config();
const create = async (req, res) => {
  try {
    const { name, parentCategory } = req.body;
    let reqField = { name, parentCategory };
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
    let data = await BaseSchema.find(filter)
      .populate({ path: "parentCategory", select: "name" })
      .sort({
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
const groupByCategory = async (req, res) => {
  try {
    const categories = await BaseSchema.aggregate([
      {
        $group: {
          _id: "$parentCategory",
          data: { $push: "$$ROOT" }
        }

        // {
        //   $lookup: {
        //     from: "categories",
        //     localField: "parentCategory",
        //     foreignField: "_id",
        //     as: "parentCategoryData"
        //   }
      },
      {
        $project: {
          _id: 1,
          data: 1,
          count: 1
        }
      }
      // { $replaceRoot: { newRoot: "$data" } }
    ]);
    const categories1 = await BaseSchema.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "parentCategory",
          foreignField: "_id",
          as: "parentCategoryData"
        }
      },
      {
        $group: {
          _id: "$parentCategoryData",
          data: { $push: "$$ROOT" }
        }
      }

      // { $replaceRoot: { newRoot: "$data" } }
    ]);
    Response.success(res, "Data Fetched", categories1);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  create,
  get,
  update,
  remove,
  groupByCategory
};
