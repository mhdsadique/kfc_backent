

const express=require("express")
const {UserModel}=require("../model/user")
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userRouter=express.Router()

userRouter.post("/register",async(req,res)=>{
    const {lastName,firstName,email,password}=req.body
    try{
        bcrypt.hash(password, 5,async(err, hash) =>{
            if(err){
        res.send({msg:"Can not register Something went wrong",err:err.message})
            }
            else{

                const user =new UserModel({lastName,firstName,email,password:hash})
                await user.save()
                // .insertOne()
                res.send({msg:"New Users Has Been registered"})
            }
        });

    }catch(err){
        res.send({msg:"Can not register Something went wrong",err:err.message})
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await UserModel.find({email})
        if(user.length>0){
          bcrypt.compare(password, user[0].password, (err, result)=> {
              if(result){
                  
                  var token = jwt.sign({ userID:user[0]._id }, 'kfctoken');
                    res.send({msg:"Logged in","token":token})
            }
            else{
                  res.send({msg:"Can not register Something went wrong",err:err.message})

              }
          });
      }else{
        res.send({msg:"Wrong Credentials---"})

      }
    }catch(err){
        res.send({msg:"Can not register Something went wrong",err:err.message})
    }
})

module.exports={
    userRouter
}