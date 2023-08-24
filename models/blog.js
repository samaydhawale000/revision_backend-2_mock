const mongoose = require("mongoose")



const  blogSchema = mongoose.Schema({
    username:String,
    title:String,
    content:String,
    category:String,
    date:String,
    likes:Number,
    comments:Array,
    userid:String
})

const blogModel = mongoose.model("blogs", blogSchema)

module.exports = blogModel