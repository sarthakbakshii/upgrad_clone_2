const mongoose = require("mongoose");

const courceSchema = new mongoose.Schema({
    cource_section: { type : String , required : true},
    hp_institute : { type : String , required : true},
    hp_imgUrl  : { type : String , required : true},
    hp_title : { type : String , required : true},
    hp_duration  : { type : String , required : true},
    hp_promise  : { type : String , required : true},
    hp_des  : { type : String , required : true},

    prodP_imgUrl : { type : String , required : true},
    prodP_title : { type : String , required : true},
    prodP_des_a : { type : String , required : true},
    prodP_des_b : { type : String , required : true},
    prodP_StartsOn : { type : String , required : true},

    gen_title : { type : String , required : true},
    gen_des : { type : String , required : true},
    gen_emi : { type : String , required : true},
})

const Cource = new mongoose.model( "cource",courceSchema);
module.exports = Cource