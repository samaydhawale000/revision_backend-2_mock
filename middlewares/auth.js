function auth(req,res,next){
    if(req.body.username && req.body.avatar && req.body.email && req.body.password){
        next()
    }
    else{
        res.json({msg:"All fields are mandatory"})
    }
}

module.exports = auth