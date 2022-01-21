const express = require("express");
const router = express.Router();

const PurchasedCource = require("../models/purchasedCource.model");

router.get("",async(req,res)=>{
   // console.log(req.body);
    try{
    const buy = await PurchasedCource.create({
            cource_id : req.query.cource_id,
            user_email : req.query.user_email
    });

    let user
    
    // return res.render("mainWebsite/home",{user:user});
    
    return res.send(buy)

    }
    catch(err){
        return res.send(err.message).status(500);
    }
    
});

module.exports = router;