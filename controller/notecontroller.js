 const  Notes = require("../models/notesmodel.js");

 exports.createnotes = async(req,res,next)=>{

    try{
        const note= await Notes.create({
            titile:req.body.titile,
            description:req.body.description,
            user:req.user.id
        });
        res.json(note);
    }catch(err){
        next(err);
    
 }
};

 exports.getnotes = async(req,res,next)=>{
   
    try{
    const find = await Notes.find({user:req.user.id});

    res.json(find);
    }catch(err){
        next(err);
    }
 }