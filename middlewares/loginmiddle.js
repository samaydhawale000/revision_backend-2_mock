function loginMiddle(req,res,next){
    if( req.body.email && req.body.password){
        next()
    }
    else{
        res.json({msg:"All fields are mandatory"})
    }
}

module.exports = loginMiddle