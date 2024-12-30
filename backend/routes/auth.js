const express =require('express');
const router =express.Router();
const mongoose =require("mongoose");
const USER =mongoose.model("USER");
const bcrypt =require("bcrypt")
router.get('/',(req,res)=>{
res.send("hello");
})

router.post("/SingUp",(req,res)=>{
    const{name,username,email ,password}=req.body;    
    if(!username || !name|| !password|| !email){
       return res.status(422).json({error:"please add filed"});
    };
USER.findOne({$or:[{email:email},{username:username}]}).then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"user exited success email or username"})
        }
        bcrypt.hash(password,12).then((hashedPassword)=>{
            const user =new USER({
                name,
                email,
                username,
                password:hashedPassword
            })
        
            user.save()
            .then(user=>{res.json({message:"Register saved successfully"})})
            .catch(err=>{console.log(err )})
        })
    })
})
router.post("/SingIn",(req ,res)=>{
    const{email, password}=req.body;
    if(!password|| !email){
        return res.status(422).json({error:"please add filed"});
     };
})

USER.findOne({email:email}).then((savedUser)=>{
    if(!savedUser){
        return res.status(422).json({error:"Invailed email"})
    }
    console.log(savedUser);
    
})

module.exports =router;