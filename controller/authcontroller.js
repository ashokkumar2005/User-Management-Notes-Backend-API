 const User = require("../models/usermodel.js");
 const bcrypt = require("bcrypt");
 const jwt = require("jsonwebtoken");

 exports.register = async(req,res,next)=>{
    try{
    const{name,email,password}=req.body;

    const hashing=bcrypt.hash(password,10);

    await User.create({name,email,password:hash});
    
    res.json({message:"User Registered"})

    }catch(err){
        next(err)
    }
 }