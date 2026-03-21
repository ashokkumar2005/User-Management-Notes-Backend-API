 const express = require("express");

 const router = express.Router();
 const note = require("../controller/notecontroller.js");
 const auth = require("../controller/notecontroller.js");

 router.post("/",auth,note.createnotes);

 router.get("/",auth,note.getnotes);

 module.exports = router;