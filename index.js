
const express=require("express")
require('dotenv').config()
var cors = require('cors')
const { connection } = require("./db/db")
const {userRouter}=require("./routes/user")
const {productRouter}=require("./routes/product")
const {authenticate}=require("./middlewear/authenticate")
const app=express()
app.use(express.json())
app.use(cors())
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
    }catch(e){
        console.log(e.message)
    }
    console.log(`"Server is Running at port ${process.env.port}"`)
})



