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
const mongoose =require("mongoose");
const mongoUrl =require("./key");
const cors =require("cors");

app.use(cors())

mongoose.connect(mongoUrl);
require('./models/model');
app.use(express.json())
app.use(require('./routes/auth'));

mongoose.connection.on("connected",()=>{
    console.log("successfully coonect in mogooes");
});

mongoose.connection.on("error",()=>{
    console.log("not successfully  in error mogooes");
});

app.listen(port,()=>{
    console.log("server running port " ,+ port);
    
})