const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const RequireLogin = require('../middleware/RequireLogin');
const POST = mongoose.model("post")

router.post("/Createpost",RequireLogin,(req , res)=>{
    const {title,body}=req.body
    if(!title || !body){
        return res.status(422).json({error:"please add all the fields"})
    }
    req.user
    const post = new POST({
        title,
        body,
        postedBy:req.user
    })
    post.save().then((result)=>{
        return res.json({post:result})
    }).catch(err=>console.log(err)
    )
})
module.exports=router