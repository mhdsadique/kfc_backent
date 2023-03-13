
const express=require("express")
const {ProductModel}=require("../model/product")
const productRouter=express.Router()

productRouter.get("/",async(req,res)=>{
    try{

        const product=await ProductModel.find()
            res.send(product)
    }catch(err){
        res.send({msg:"Prtoduct can note Created",err:err.message})
    }
})
productRouter.get("/:id",async(req,res)=>{
    const noteID=req.params.id
    try{
        const product= await ProductModel.findById(noteID)
            res.send(product)
    }catch(err){
        res.send({msg:"Single Prtoduct can note find",err:err.message})
    }
})

productRouter.post("/create",async(req,res)=>{
const payload=req.body
try{

    const note=new ProductModel(payload)
    await note.save()
        res.send("Prtoduct Has Been Created")
}catch(err){
    res.send({msg:"Prtoduct can note Created",err:err.message})
}
})
productRouter.delete("/delete/:id",async(req,res)=>{
    const noteID=req.params.id
    try{
      await ProductModel.findByIdAndDelete({_id:noteID})
            res.send({msg:`product (${noteID}) has been DELETED `})
    }catch(err){
        res.send({msg:"Prtoduct note DELETED",err:err.message})
    }
})
productRouter.put("/put/:id",async(req,res)=>{
    const payload=req.body
    const noteID=req.params.id
    try{
      await ProductModel.findByIdAndUpdate({_id:noteID})
            res.send({msg:`product (${noteID}) has been UPDATED `},payload)
    }catch(err){
        res.send({msg:"Prtoduct note UPDATED",err:err.message})
    }
})
productRouter.patch("/patch/:id",async(req,res)=>{
    const payload=req.body
    const noteID=req.params.id
    try{
      await ProductModel.findByIdAndUpdate({_id:noteID},payload)
            res.send({msg:`product (${noteID}) has been UPDATED `})
    }catch(err){
        res.send({msg:"Prtoduct note UPDATED",err:err.message})
    }
})

module.exports={
    productRouter
}