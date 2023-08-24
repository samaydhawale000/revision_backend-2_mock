const express = require("express")
const auth = require("../middlewares/auth")
const bcrypt = require('bcrypt');
const userModel = require("../models/user");
const loginMiddle = require("../middlewares/loginmiddle");
const userRoute = express.Router()
var jwt = require('jsonwebtoken');

userRoute.get("/", (req, res)=>{
    res.send("user Route")
})

userRoute.post("/api/register",auth, async (req,res)=>{
    try{
        bcrypt.hash(req.body.password, 10, async(err, hash) =>{
            // Store hash in your password DB.
            if(hash){
               await userModel.create({...req.body, password:hash})
               res.json({msg:"user register successfully"})
            }
        });
    }
    catch(err){
        res.send(err)
    }
   
})


userRoute.post("/api/login", async (req,res)=>{
    try{
            
        const data = await userModel.findOne({email:req.body.email})||null
        
        
if(data){
    bcrypt.compare(req.body.password, data.password, function(err, result) {
      
        if(result){
            var token = jwt.sign({ userid:data._id }, 'shhhhh');
            res.json({msg:"Login Successfull", token})
        }
        else{
            res.json({msg:"Wrong credencials"})
        }
    });
}
else{
    res.json({msg:"Wrong credencials"})
}
       
    }
    catch(err){
        console.log(err)
    }
   
})



module.exports = userRoute