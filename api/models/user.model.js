import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        typr:String,
        required:true,
        unique:true
    },
    email:{
        typr:String,
        required:true,
        unique:true
    },
    password:{
        typr:String,
        required:true
    }
},{timestamps:true});

const User=mongoose.model('User',userSchema);

export default User;