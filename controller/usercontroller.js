 const User =require("../models/usermodel.js");

 exports.getuser= async(req,res,next)=>{

    try{
        const user = User.find();

        res.json(user);
    }catch(err){
        next(err);
    }
 }