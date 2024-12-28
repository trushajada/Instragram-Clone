// const { log } = require('console');
// const http =require('http');

// const server =http.createServer((req,res)=>{
//     console.log("server created");
//     res.end("server working");
    
// });
// server.listen(5000,"localhost",()=>{
//     console.log("server is startrd........");
    
// })

// const express=require("express");
// const app =express();
// const PORT =5000;
// const data=require('./data.js');
// const cors =require("cors");

// app.use(cors())
// app.get('/',(req,res)=>{
//     res.json(data)
// })

// app.listen(PORT,()=>{
//     console.log("SERVER RUNNING..."+PORT);
    
// })


const express = require('express');
const app =express();
const port =5000;
const mongoose =require("mongoose")

mongoose.connect("mongodb+srv://trushajada:<db_password>@cluster0.lx4uk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

app.listen(port,()=>{
    console.log("server running port " ,+ port);
    
})