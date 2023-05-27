const express = require("express");
const cors = require("cors");
const { connection } = require("./configs/db");
const { carRouter } = require("./routes/cars.route");
const { authenticate } = require("./middleware/authentication");
const { userRouter } = require("./routes/user.route");
require('dotenv').config();

//created app using express
const app=express();

//parser
app.use(express.json());

//cross-origin-resource-sharing
app.use(cors());

//It is default route
app.get("/", (req, res)=>{
    res.send("Welcome to attryb backend..!");
});

//user route
app.use("/api/user", userRouter);

//user authentication
app.use(authenticate);

//car route
app.use("/api", carRouter);

//port
const PORT = process.env.port || 8080


//server
app.listen(PORT , async()=>{
    try{
        await connection;
        console.log("connected with attryb DB")
    }catch(error){
        console.log(error);
    }
    console.log(`Server is running at port ${PORT}`);
})
