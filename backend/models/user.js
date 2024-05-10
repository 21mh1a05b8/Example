import mongoose from "mongoose";
const Schema=mongoose.Schema
const user =new Schema({
    userid :{
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    },
})
export default mongoose.model("user",user)