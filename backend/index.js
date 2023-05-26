const express = require("express");
const cors = require("cors");
const { connection } = require("./configs/db");
require('dotenv').config();


const app=express();

app.use(express.json());

app.use(cors());


app.get("/", (req, res)=>{
    res.send("Welcome to attryb backend..!");
});

app.listen(process.env.port, async()=>{
    try{
        await connection;
        console.log("connected with DB")
    }catch(error){
        console.log(error);
    }
    console.log(`Server is running at port ${process.env.port}`);
})
