 require("dotenv").config();

 const express = require("express");
 const helmet = require("helmet");
 const cors = require("cors");
 const limit = require("express-rate-limit");
 const morgan = require("morgan");
 
 const dbconnect = require("./config/connectdb.js");

 const auth = require("./routes/authroutes.js");
 const file =require("./routes/filerouter.js");
 const note = require("./routes/notesroute.js");

 const errormiddleware = require("./middleware/errormiddleware.js");

 const app = express();

 dbconnect();

 app.use(helmet);
 app.use(cors);
 app.use(morgen("dev"));

 app.use(limit({windowMs:15*60*1000,max:100}));

 app.use("/api",auth);
 app.use("/api",file);
 app.use("/api",note);

 app.use(errormiddleware);

 app.listen(process.env.PORT,()=>{
    console.log("server is running")
 })