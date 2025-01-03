const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const RequireLogin = require('../middleware/RequireLogin');
const POST = mongoose.model("POST")



router.get("/allposts",RequireLogin, (req,res)=>{
    POST.find()
    .populate("postedBy","id_name")
    .then(posts => res.json(posts))
    .catch(err => console.log(err))
})

router.post("/Createpost",RequireLogin,(req , res)=>{

    const {body,pic}=req.body
    console.log(pic);
    
    if(!body || !pic){
        return res.status(422).json({error:"please add all the fields"})
    }
    
    const posts = new POST({
        body,
        photo:pic,
        postedBy: req.user
    })
    console.log( req.user);

    posts.save().then((result)=>{
        return res.json({post:result})
    }).catch(err=>console.log(err)
    )
})
module.exports=router