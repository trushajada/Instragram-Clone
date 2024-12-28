const express =require('express');
const router =express.Router();
const mongoose =require("mongoose");
const USER =mongoose.model("USER")
router.get('/',(req,res)=>{
res.send("hello");
})

router.post("/SingUp",(req,res)=>{
    const{name,username,email ,password}=req.body;    
    if(!username || !name|| !password|| !email){
        res.status(422).json({error:"please add filed"});
    };
    USER.findOne({$or:[{email:email},{username:username}]}).then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"user exited success email or username"})
        }
        const user =new USER({
            name,
            email,
            username,
            password,
        })
    
        user.save()
        .then(user=>{res.json({message:"saved successfully"})})
        .catch(err=>{console.log(err )})
    
    })
   
    
  
})

module.exports =router;