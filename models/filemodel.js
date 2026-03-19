 const mongoose = require("mongoose");
const { applyTimestamps } = require("./usermodel");

 const fileschema= mongoose.Schema({
    filename:String,
    orginalname:String,
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
 },{timestamps:true})

 module.exports=mongoose.model("File",fileschema)