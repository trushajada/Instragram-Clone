const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const RequireLogin = require('../middleware/RequireLogin');
const POST = mongoose.model("post")

router.post("/Createpost",RequireLogin,(req , res)=>{
    const {body,pic}=req.body
    console.log(pic);
    
    if(!pic || !body){
        return res.status(422).json({error:"please add all the fields"})
    }
    console.log( req.user);
    
    const post = new POST({
        photo:pic,
        body,
        postedBy:req.user
    })
    post.save().then((result)=>{
        return res.json({post:result})
    }).catch(err=>console.log(err)
    )
})
module.exports=router