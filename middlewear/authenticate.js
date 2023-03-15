
var jwt = require('jsonwebtoken');

const authenticate=(req,res,next)=>{
   
    const token=req.headers.authorization
    if(token){
        jwt.verify(token,"kfctoken",(err,decoded)=>{
            if(decoded){
             req.body.user=decoded.userID
                next()
            }else{
                res.send({msg:"Please Login First",err:err})
            }
        })
    }else{
        res.send({msg:"Please Login First didnt get you"})

    }
}
module.exports={
    authenticate
}