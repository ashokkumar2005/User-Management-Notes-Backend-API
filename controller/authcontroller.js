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
 };

 exports.login= async(req,res,next)=>{
    const {email,password}=req.body;
    try{

        const user = await User.findOne({email});

        if(!user){
            return res.status(500).json("User not found")
        }

        const match= await bcrypt.compare(password,user.password);
        if(!match){
           return res.status(500).json("password incorrect");
        }

     const token= jwt.sign(
     { id:user._id,role:user.role},
     process.env.JWT_SECRET,
     {expiresIn:"1h"}
     )

     res.json({token});

    }catch(err){
        next(err);
    }
 }

 