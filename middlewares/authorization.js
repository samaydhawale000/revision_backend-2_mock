function authorization(req,res,next){
    if( req.headers.authorization){
        next()
    }
    else{
        res.json({msg:"You need to login first, token not provided"})
    }
}

module.exports = authorization