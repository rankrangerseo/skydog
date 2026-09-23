const mongoose = require("mongoose");

const strReq = {
    type: String,
    required: true
};
const numReq = {
    type: String,
    required: true
};
const schema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        image: {
            type: String,
            required: true
        },

        description: String,

    },
    { timestamps: true }
);

const EcosystemSchema = mongoose.model("ecosystem", schema);

module.exports = EcosystemSchema;
