const express = require("express")
const router = express.Router();

const Cource = require("../models/cources.model")
const Section = require("../models/section.modle")

// ====================  V I E W = C O N T R O L E R

// *------ home page
router.get( "", async (req, res) =>{
    try{            
            const cources = await Cource.find({cource_section: req.query.section}).lean().exec();
            const sections = await Section.find({cource_section: req.query.section}).lean().exec();
            console.log(cources);
            console.log(sections);

            let user ;
            
            
            return res.render("mainWebsite/product", { cources : cources,sections : sections, user:user })
    }
    catch(e){
        console.log(e.message);
        
        return res.send(e.message)
    }
})


// ==================== C R U D = C O N T R O L E R 

router.get( "/cource", async (req, res) =>{
    try{           
        console.log(req.query.cource, " line 32");
         let user ;
         
            const cources = await Cource.findOne({ _id : req.query.cource}).lean().exec();
            console.log(cources);
               return res.render("mainWebsite/specificProduct", { cources : cources,  user:user })
    }
    catch(e){
        console.log(e.message);
        
        return res.send(e.message)
    }
})


module.exports = router