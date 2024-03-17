const mongoose=require("mongoose");
function connectDb(){
    mongoose.connect("mongodb://127.0.0.1:27017/thirukkuarl").
    then(()=>{
        console.log("connected successfully");
    }).catch((err)=>{
        console.log(`error ${err.message}`);
    })
}
module.exports=connectDb;