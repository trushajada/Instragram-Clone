const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

router.post("/Createpost",(req , res)=>{
    const {title ,body}=req.body
    if(!title || !body){
        return res.status(422).json({error:"please add all the fields"})
    }
    res.json("ok")
})
module.exports=router