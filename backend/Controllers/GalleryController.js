const GalleryModel = require("../Models/GalleryModel");

const uploadImg = async (req, res) => {
    try {
        const { imgUrl, title } = req.body;
        const pic = new GalleryModel({ imgUrl, title });
        await pic.save();

        res.status(200).json({
            message: "image save successfully",
            success: true,
        })

    } catch (error) {
        res.status(500).json({
            message: "internal server error failed to save image",
            error: error.message,
        })
    }
};

const fetchImg = async (req, res) => {
    try {
        const imgList = await GalleryModel.find();
        res.status(200).json({
            message: "images fetched successfully",
            success: true,
            imgList,
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error failed to fetch image",
            error: error.message,
        })
    }
};


const deleteImg = async (req, res) => {
    try {
        const { id } = req.params;

        // Correct usage: pass id directly
        await GalleryModel.findByIdAndDelete(id);

        // If you want to send updated list after deletion
        const imgList = await GalleryModel.find();

        res.status(200).json({
            message: "image deleted successfully",
            success: true,
            imgList,
        });
    } catch (error) {
        res.status(500).json({
            message: "internal server error failed to delete image",
            error: error.message,
        });
    }
};


module.exports = {
    uploadImg,
    fetchImg,
    deleteImg
}