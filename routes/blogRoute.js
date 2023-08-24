const express = require("express")
const blogRoute = express.Router()
var jwt = require('jsonwebtoken');
const blogModel = require("../models/blog");
const authorization = require("../middlewares/authorization");

blogRoute.use(authorization)

blogRoute.post("/api/blogs",async(req,res)=>{
    try{
        var decoded = jwt.verify(req.headers.authorization, 'shhhhh');

        const obj={...req.body,userid:decoded.userid}
        await blogModel.create(obj)
        res.json({msg:"Blog posted Successfully"})
    }
    catch(err){
        res.send(err)
    }
})

blogRoute.get("/api/blogs",async(req,res)=>{
    try{

        if(req.query.title){
            var decoded = jwt.verify(req.headers.authorization, 'shhhhh');
            const data = await blogModel.find({userid:decoded.userid, title:req.query.title}) || []
    
            res.json({data})
        }
        else if(req.query.category){
            var decoded = jwt.verify(req.headers.authorization, 'shhhhh');
            const data = await blogModel.find({userid:decoded.userid, category:req.query.category}) || []
    
            res.json({data})
        }
        else if(req.query.sort && req.query.order){
            var decoded = jwt.verify(req.headers.authorization, 'shhhhh');
            const data = await blogModel.find({userid:decoded.userid}).sort({[req.query.sort]:req.query.order}) || []
    
            res.json({data})
        }
        else{
            var decoded = jwt.verify(req.headers.authorization, 'shhhhh');
            const data = await blogModel.find({userid:decoded.userid}) || []
    
            res.json({data})
        }

        
    }
    catch(err){
        res.send(err)
    }
})



blogRoute.put("/api/blogs/:id",async(req,res)=>{
    try{

        if(req.params){
        
            const data = await blogModel.findOneAndUpdate({_id:req.params.id},req.body) || []
    
            res.json({msg:"data updated successfully"})
        
    }
}
    catch(err){
        res.send(err)
    }

})


blogRoute.delete("/api/blogs/:id",async(req,res)=>{
    try{

        if(req.params){
        
            await blogModel.deleteOne({_id:req.params.id})
    
            res.json({msg:"data deleted successfully"})
        
    }
}
    catch(err){
        res.send(err)
    }

})




module.exports = blogRoute
