// const mongoose =require("mongoose")
// const {ObjectId} =mongoose.Schema.Types

// const postSchema =new mongoose.Schema({
//     body:{
//         type:String,
//         require:true
//     },
//     photo:{
//         type:String,
//         require:true
//     },
//     postedBy:{
//         type:ObjectId,
//         ref:"USER"
//     }
// })
// mongoose.model("POST",postSchema)


const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema(
    {
        body: {
            type: String,
            required: true,
        },
        pic: {
            type: String,
            default: "no photo",
        },
        postedBy: {
            type: ObjectId,
            ref: "User",
        },
    },
    { timestamps: true } // Adds createdAt and updatedAt fields
);

mongoose.model("POST", postSchema);