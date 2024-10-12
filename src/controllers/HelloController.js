exports.Hello = (req,res)=>{
    res.status(200).json({status:"OK",data:"Hello"});
}