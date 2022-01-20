const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    mobile:{type:Number,required:true,unique:true},
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true}
});

const User = mongoose.model("user",userSchema);

module.exports = User;