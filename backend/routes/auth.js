const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const USER = mongoose.model("USER");
const bcrypt = require("bcrypt");
const jwt =require("jsonwebtoken");
const { Jwt_secrest } = require('../key');
const RequireLogin = require('../middleware/RequireLogin');

router.get('/', (req, res) => {
    res.send("hello");
});

router.get('/Createpost',RequireLogin,(req , res)=>{})
router.post("/SingUp", (req, res) => {
    const { name, username, email, password } = req.body;
    if (!username || !name || !password || !email) {
        return res.status(422).json({ error: "Please add all fields" }); // Improved message
    }

    USER.findOne({ $or: [{ email: email }, { username: username }] })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "User already exists with this email or username" }); // Improved message
            }
            bcrypt.hash(password, 12)
                .then((hashedPassword) => {
                    const user = new USER({
                        name,
                        email,
                        username,
                        password: hashedPassword
                    });

                    user.save()
                        .then(user => { res.status(201).json({ message: "Registration successful" }); })
                        .catch(err => {
                            console.error(err);
                            res.status(500).json({ error: "Error saving user" });
                        });
                })
                .catch(err => {
                    console.error(err); 
                    res.status(500).json({ error: "Error hashing password" }); 
                });
        })
        .catch(err => {
            console.error(err); 
            res.status(500).json({ error: "Error checking for existing user" });
        });
});

router.post("/SingIn", (req, res) => {
    const { email, password } = req.body;
    if (!password || !email) {
        return res.status(422).json({ error:"Please provide email and password"}); 
    }

    USER.findOne({email:email}).then((savedUser)=>{
        if(!savedUser){
            return res.status(422).json({ error: "Invalid email" });  
        }
        bcrypt.compare(password,savedUser.password).then((match)=>{
            if(match){
                // return res.status(200).json({message:"signed in successfully"})
                const token =jwt.sign({_id:savedUser.id},Jwt_secrest)
                res.json(token)
                console.log(tokenres.json(token));
            }
            else{
                return res.status(422).json({error:"Invalid password"})
            }
        })
        .catch(err=>console.log(err));
            
    })
});

module.exports = router;