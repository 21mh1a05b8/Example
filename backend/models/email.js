import mongoose from "mongoose";
const Schema=mongoose.Schema
const emailform =new Schema({
    username :{
        type:String,
        required:true
    },
    emaill :{
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    },
})
export default mongoose.model("emailform",emailform)