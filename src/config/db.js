const mongoose = require("mongoose");

const connect = () =>{
    return mongoose.connect("mongodb+srv://upgrad:12345@cluster0.ezvmv.mongodb.net/test")
}

module.exports = connect 