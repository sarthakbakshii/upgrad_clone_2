const { Router } = require("express");
const express = require("express");
const router = express.Router();

const Cource = require("../models/cources.model")


// ====================  V I E W = C O N T R O L E R

// === loading home page of admin panel
router.get("", async (req, res) =>{
     try {
        const cource = await Cource.find().lean().exec();
         return res.render("adminPanel/user/index" , { item : cource});
        
    } catch (e) {
        return res.status(500).send({error : e.message})
    }
})

// === loding add cource page of admin panel
router.get("/NewCourcePg", (req, res) =>{
    
    return res.render("adminPanel/user/newUser" );
})


// ==================== C R U D = C O N T R O L E R 
router.get( "/getAll", async (req, res ) =>{
    try {
        const courses = await Cource.find().lean().exec();
        return res.send(courses)
        
    } catch (e) {
        return res.status(500).send({cource_controler_error: e.message })
    }
})
router.post("/addCourcer", async (req, res) =>{
    try {
        console.log(req.body)
        const courses = await Cource.create(req.body);
        // return res.send(courses)

        const cource = await Cource.find().lean().exec();
         return res.render("adminPanel/user/index" , { item : cource});
        
    } catch (e) {
        console.log({error : e.message})
        
        return res.status(500)
        .send({error : e.message})
    }

});


module.exports = router