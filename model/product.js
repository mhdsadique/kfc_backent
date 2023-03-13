



const mongoose=require("mongoose")
const productSchema=mongoose.Schema({
    image:{type:String,require:true},
    title:{type:String,require:true},
    discription:{type:String,require:true},
    price:{type:Number,require:true},
    itemfind:{type:String,require:true},
    findname:{type:String,require:true},
    user:{type:String,require:true}
},{
    versionKey:false
})
const ProductModel=mongoose.model("product",productSchema)

module.exports={
    ProductModel
}