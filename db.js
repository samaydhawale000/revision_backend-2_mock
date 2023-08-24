const mongoose = require("mongoose")

const dbConnect = mongoose.connect("mongodb+srv://samaydhawale1:Samay123@cluster0.fcetjfm.mongodb.net/revision-mern-2?retryWrites=true&w=majority")

module.exports = dbConnect