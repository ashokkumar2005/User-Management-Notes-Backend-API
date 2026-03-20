 module.exports=(req,res,next)=>{
    if(req.user.role !=="admin"){
        res.status(500).json("admin only");
        next()
    }
 }