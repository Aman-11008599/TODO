import express from "express";

const app = express();

app.get('/',(req,res)=>{
    res.send({
        message:"basic API done",
        success: true
    })
}).listen(3200);