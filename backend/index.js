const express = require("express");
const app = express();
const cors =  require("cors");
const GalleryRouter = require("./Routes/GalleryRoute.js");

require("dotenv").config();
require("./Models/db.js");

const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());

app.use("/api/gallery",GalleryRouter);~

app.get("/", (req, res) => {
    res.send("hello from backend :)");
});

app.listen(PORT, () => {
    console.log("app is running at this port = ", PORT);
});