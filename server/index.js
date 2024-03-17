const express=require("express");
const app= express();
const env=require("dotenv").config();
const cors=require("cors");
const connectDb=require("./db/connectDb");
const kurals=require("./schema/kurals");
connectDb();
app.use(cors());
const PORT=process.env.PORT||2000;
console.log(PORT);
app.get("/thirukkural-api/:id",async (req,res)=>{
    const id=req.params.id
    const kural=await kurals.find({kural_id:id});
    res.send(kural);
});
app.listen(PORT,()=>{console.log(`Server listen in Port ${PORT}`);});