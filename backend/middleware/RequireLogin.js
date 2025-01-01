
const jwt =require("jsonwebtoken")
const {Jwt_secret} = require("../key")
const mongoose = require("mongoose")
const USER = mongoose.model("USER")

    module.exports=(res ,req ,next)=>{
    const {authorization}=res.headers;
    if(!authorization){
        return res.status(401).json({error:"you must have logged in 1"})
    }
    const token = authorization.replace("Bearer ","")

    jwt.verify(token , Jwt_secret ,(err ,payload)=>{
        if(err){
            return res.status(401).json({error:"You must have logged in 2"})
        };

        const {_id}=payload
        USER.findById(_id).then(userData=>{
            console.log(userData);
            
        })
    })
    next()
}