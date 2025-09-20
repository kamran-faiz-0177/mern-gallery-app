const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GallerySchema = new Schema({
    imgUrl: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const GalleryModel = mongoose.model("gallery",GallerySchema);
module.exports = GalleryModel;