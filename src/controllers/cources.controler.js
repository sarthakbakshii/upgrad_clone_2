const { Router } = require("express");
const express = require("express");
const router = express.Router();

const Cource = require("../models/cources.model")


// ====================  V I E W = C O N T R O L E R
router.get("")


// ==================== C R U D = C O N T R O L E R 
router.get( "/getAll", async (req, res ) =>{
    try {
        const courses = await Cource.find().lean().exec();
        return res.send(courses)
        
    } catch (e) {
        return res.status(500).send({cource_controler_error: e.message })
    }
})


module.exports = router