const router = require("express").Router();
const { uploadImg, deleteImg, fetchImg } = require("../Controllers/GalleryController");

router.post("/upload", uploadImg);
router.get("/fetch", fetchImg);
router.delete("/delete/:id", deleteImg);

module.exports = router;