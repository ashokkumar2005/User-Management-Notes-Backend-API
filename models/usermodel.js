 const mongoose=require("mongoose");

 const userschema= new mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true,unique:true,index:true},
        password:{type:String,require:true},
        role:{type:String,default:"User"},
        avatar:{type:String}
    },{timestamps:true})

    module.exports=mongoose.model("User",userschema);