const express = require("express")
const app = express()
const cors = require("cors")
const dbConnect = require("./db")
const userRoute = require("./routes/userRoute")
const blogRoute = require("./routes/blogRoute")
app.use(cors())

app.use(express.json())
app.use("/user", userRoute)
app.use("/blog", blogRoute)


app.get("/", (req,res)=>{
    res.send("revision-mern-2-backend")
})

app.listen(8080,async()=>{

    try{
        await dbConnect
    console.log("DB Connected ")

    console.log("backend running successfully")
    }

    catch(err){
        console.log(err)
    }
})