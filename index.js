
const express=require("express")
require('dotenv').config()
var cors = require('cors')
const { connection } = require("./db/db")
const {userRouter}=require("./routes/user")
const {productRouter}=require("./routes/product")
const {authenticate}=require("./middlewear/authenticate")
const app=express()
app.use(express.json())
var cors = require('cors')

app.get("/",(req,res)=>{
    res.send("HOME PAGE kfc")
})
app.use("/users",userRouter)
app.use(authenticate)
app.use("/product",productRouter)

app.listen(process.env.port,async()=>{
    try{
     await  connection
    console.log(`server connected to DB`)

    }catch{
        console.log("can not connect ro db")
    }
    console.log(`"Server is Running at port ${process.env.port}"`)
})



