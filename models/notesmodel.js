 const mongoose= require("mongoose");

 const noteschema = mongoose.Schema({
    titile:{type:String,required:true},
    description:{type:String},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
 })

 module.exports=mongoose.model("Note",noteschema)