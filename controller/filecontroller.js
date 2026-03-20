 const File =require("../models/filemodel.js");

 exports.uploadfile = async(req,res,next)=>{

    try{
        const file = File.create({
            filename:req.body.filename,
            orginalfilename:req.body.orginalfilename,
            user:req.user.id

        });

        res.json(file);
    }catch(err){
        next(err);
    }
 }