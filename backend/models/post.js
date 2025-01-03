const mongoose =require("mongoose")
const {ObjectId} =mongoose.Schema.Types

const postSchema =new mongoose.Schema({
    body:{
        type:String,
        require:true
    },
    photo:{
        type:String,
        default:true
    },
    postedBy:{
        type:ObjectId,
        ref:"USER"
    }
})
mongoose.model("posts",postSchema)