const mongoose = require("mongoose")


const URLModel = new mongoose.Schema({
    mainSite:{
        type:String,
        required:true
    },
    shortenLink:{
        type:String,
        required:true
    },
    visites:{
        type:Number,
        required:true,
        default:0
    }
})

const URLs = mongoose.model("URLs",URLModel)

module.exports = URLs