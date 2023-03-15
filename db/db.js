require('dotenv').config()

const mongoose=require("mongoose")
const connection=mongoose.connect(process.env.url,{useNewUrlParser:true,
    useUnifiedTopology:true,useCreateIndex:true})

module.exports={
    connection
}