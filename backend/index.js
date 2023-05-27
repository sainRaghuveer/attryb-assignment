const express = require("express");
const cors = require("cors");
const { connection } = require("./configs/db");
const { carRouter } = require("./routes/cars.route");
const { authenticate } = require("./middleware/authentication");
require('dotenv').config();


const app=express();

app.use(express.json());

app.use(cors());

//It is default route
app.get("/", (req, res)=>{
    res.send("Welcome to attryb backend..!");
});


//user authentication
app.use(authenticate)

//car route
app.use("/api", carRouter);

app.listen(process.env.port, async()=>{
    try{
        await connection;
        console.log("connected with DB")
    }catch(error){
        console.log(error);
    }
    console.log(`Server is running at port ${process.env.port}`);
})
