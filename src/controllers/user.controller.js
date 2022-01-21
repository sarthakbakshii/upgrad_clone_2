const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

router.post("/addUser",async(req,res)=>{
   // console.log(req.body);
    try{
    const user = await User.create(req.body);
    // window.localStorage.setItem("userData" ,JSON.stringify(user));
    console.log(user);
    return res.render("mainWebsite/home",{user:req.body});
    // return res.render("mainWebsite/home");

    }
    catch(err){
        return res.send(err.message).status(500);
    }
    
});

module.exports = router;