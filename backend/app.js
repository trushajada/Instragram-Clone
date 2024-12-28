// const { log } = require('console');
// const http =require('http');

// const server =http.createServer((req,res)=>{
//     console.log("server created");
//     res.end("server working");
    
// });
// server.listen(5000,"localhost",()=>{
//     console.log("server is startrd........");
    
// })

const express=require("express");
const app =express();
const PORT =5000;
const data=require('./data.js')
app.get('/',(req,res)=>{
    res.json(data)
})

app.listen(PORT,()=>{
    console.log("SERVER RUNNING..."+PORT);
    
})