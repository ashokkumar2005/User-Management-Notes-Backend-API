const express = require("express");

const router = express.Router();
const auth = require("../controller/authcontroller.js");
const file = require("../controller/filecontroller.js");
const upload = require("../middleware/filemiddleware.js");

router.post("/upolad",auth,upload.single("file"),file.uploadfile);

module.exports=router;
