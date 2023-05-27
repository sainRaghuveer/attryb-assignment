const jwt = require("jsonwebtoken");
require('dotenv').config();


const authenticate=(req,res,next)=>{
    const token=req.headers.authorization

    try{
        jwt.verify(token, process.env.secret, function(err, decoded) {
            console.log(decoded) 
            if(decoded){
                next();
            }else{
                res.send({"msg":"Please login first"})
            }
          });
    }catch(error){
        res.send({"msg":"Please verify first"})
    }
}

module.exports={
    authenticate
}