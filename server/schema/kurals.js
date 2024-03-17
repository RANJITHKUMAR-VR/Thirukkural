const mongoose=require("mongoose");
const kuralSchema=mongoose.Schema({
    kural_id:{
        type:Number,
        required:true
    },
    line1:{
        type:String,
        required:true
    },
    line2:{
        type:String,
        required:true
    }
},{timestamps:true});
const kurals=mongoose.model("kurals",kuralSchema);
module.exports=kurals;