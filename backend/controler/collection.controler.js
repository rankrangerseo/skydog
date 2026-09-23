const Response = require("../middlewares/response");
const Validator = require("../middlewares/validator");
const BaseSchema = require("../schema/collection.schema");
const uploadOnCloudinary = require("../middlewares/cloudinary");
const fs = require("fs").promises;
const path = require("path");
const IMAGES_DIR = path.join(__dirname, "../nfts");

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

    const { title, attributes } = req.body;
    let reqField = { title, attributes };

    if (!Validator.requiredFields(reqField, res)) return null;
    const data = await BaseSchema.create({
      ...req.body,
      image: link,
      attributes: JSON.parse(attributes),
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
            name: { $regex: searchTerm, $options: "i" },
          },
        ],
      };
    }
    let data = await BaseSchema.find(filter)
      .populate("attributes.category")
      .sort({
        createdAt: -1,
      });
    if (data.length) Response.success(res, "Data fetched", data);
    else Response.fail(res, "No Data found", []);
  } catch (error) {
    Response.error(res, "Error while fetching data", error);
  }
};
const getNfts = async (req, res) => {
  try {
    // Get pagination parameters from query string
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;

    // Read all files from the images directory
    const files = await fs.readdir(IMAGES_DIR);

    // Filter only image files
    const imageFiles = files
      .filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return [".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(ext);
      })
      .sort((a, b) => {
        const numA = parseInt(path.basename(a, path.extname(a)), 10);
        const numB = parseInt(path.basename(b, path.extname(b)), 10);
        return numA - numB;
      });

    // Calculate total pages
    const totalItems = imageFiles.length;
    const totalPages = Math.ceil(totalItems / limit);

    // Get paginated subset of files
    const paginatedFiles = imageFiles.slice(startIndex, startIndex + limit);

    // Create array of image objects with additional information
    const imagesData = await Promise.all(
      paginatedFiles.map(async (file) => {
        const stats = await fs.stat(path.join(IMAGES_DIR, file));
        return {
          name: file,
          path: `/assets/${file}`,
          size: stats.size,
          lastModified: stats.mtime,
          type: path.extname(file).slice(1),
        };
      })
    );

    res.json({
      success: true,
      pagination: {
        currentPage: page,
        totalPages: totalPages,
        limit: limit,
        totalItems: totalItems,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
      count: imagesData.length,
      images: imagesData,
    });
  } catch (error) {
    console.error("Error reading images:", error);
    res.status(500).json({
      success: false,
      error: "Failed to read images directory",
    });
  }
};
const getFilter = async (req, res, next) => {
  try {
    console.log(req.query);
    const subCat = req?.query?.subCategoryId;
    if (!subCat || subCat == "null")
      return Response.error(res, "subCategoryId is required");
    if (JSON.parse(subCat).length && subCat != "null") {
      const data = await BaseSchema.aggregate([
        {
          $unwind: "$attributes", // Unwind the attributes array
        },
        {
          $match: {
            "attributes.SubCategory._id": { $in: JSON.parse(subCat) }, // Match the desired _id in SubCategory
            // 'attributes.SubCategory._id': subCat, // Match the desired _id in SubCategory
          },
        },
        {
          $group: {
            _id: "$_id", // Group by the original document's _id
            title: { $first: "$title" }, // Retrieve other fields you need
            image: { $first: "$image" },
            attributes: { $first: "$attributes" },
            nilValue: { $first: "$nilValue" },
            // Add more fields as needed
          },
        },
      ]);
      Response.success(res, "Attribute", data);
    } else {
      const data = await BaseSchema.find(req.query);
      Response.success(res, "Attribute", data);
    }
  } catch (error) {
    console.log(error);
  }
};
const getEdit = async (req, res) => {
  try {
    let filter = { ...req.query };

    if (req.query.search) {
      const searchTerm = req.query.search;
      filter = {
        ...filter,
        $or: [
          {
            name: { $regex: searchTerm, $options: "i" },
          },
        ],
      };
    }
    let data = await BaseSchema.find(filter).sort({
      createdAt: -1,
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

    let image = null;
    if (req?.files?.image?.length) image = req.files.image[0];
    let link = null;
    if (image != null) {
      link = await uploadOnCloudinary(image);

      console.log(link, "<<<tisis image");
    }
    let payload = { ...req.body };
    delete payload.attributes;
    if (req.body.attributes)
      payload.attributes = JSON.parse(req.body.attributes);
    if (link) payload.image = link;
    let data = await BaseSchema.findByIdAndUpdate(id, payload, { new: true });
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
  remove,
  getEdit,
  getFilter,
  getNfts,
};
