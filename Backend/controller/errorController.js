exports.get404=(req,res,next)=>{
    res.status(404).json("Error 404 : page not found");
}