 const jwt =require("jsonwebtoken");

 module.exports = (req,res,next)=>{
 try{
    const token = req.headers.authorization;

    const decode = jwt.verify(token,process.env.JWT_SECRET);

    req.user=decode;
    next();
 }catch(error){
    res.status(401).json({message:"unauthorized"})
 };
 
};
