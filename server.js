const express = require("express")
const app = express()
const routemain = require("./routes/main")
const mongoose = require("mongoose")


app.use(express.json())

app.use(async (req,res,next)=>{
    console.log(req.path)
    next()
})


mongoose.connect('mongodb://localhost:27017/urlshortner').then(()=>{
    console.log("database connection success")
})



app.use("/shortner",routemain)






app.listen(8000,()=>{
    console.log("server listning at 8000 port")
})