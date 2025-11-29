import express from "express";
// import { collectionName, connection } from "./dbconfig";
import createConnection from "./connection/connect.js";
import model from "./model/task-model.js"
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

await createConnection();

app.get('/', async(req,res)=>{
    res.send({
        message:"basic API done",
        success: true
    })
})

app.post('/add-task', async(req,res)=>{
    const insertData = req.body;
    const r = await model.create(insertData);
    res.send({"result":"successfully inserted"})
})

app.get('/tasks', async(req,res)=>{
    const r = await model.find();
    res.send(r);
})

app.listen(3200);

// app.post('/add-task', async(req,res)=>{
//     const db=await connection();
//     const collection = await db.collection(collectionName);
//     const result=await collection.insertOne(req.body);
//     if(result){
//         res.send({message:"New task Added", success:true, result});
//     }else{
//         res.send({message:"New task not added", success:false});
//     }
//     res.send('Working .....');
// })