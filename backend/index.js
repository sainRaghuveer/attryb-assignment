const express = require("express");
const cors = require("cors");
const { connection } = require("./configs/db");
const { carRouter } = require("./routes/cars.route");
const { authenticate } = require("./middleware/authentication");
const { userRouter } = require("./routes/user.route");
require('dotenv').config();


const app=express();

app.use(express.json());

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

const PORT = process.env.port || 8080

app.listen(PORT , async()=>{
    try{
        await connection;
        console.log("connected with attryb DB")
    }catch(error){
        console.log(error);
    }
    console.log(`Server is running at port ${PORT}`);
})
