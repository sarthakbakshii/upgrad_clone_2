const mongoose = require("mongoose");

const purchasedCourceSchema = new mongoose.Schema({
    cource_id : { type : mongoose.Schema.Types.ObjectId, ref : "cources" , required : true},
    user_email : { type :  String , required : true},
})

const PurchasedCource = new mongoose.model( "purchasedCource",purchasedCourceSchema);
module.exports = PurchasedCource;



