const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{typeString,required:true}
},{
    timestamps:true
})

const User=mongoose.model("user",userSchema)