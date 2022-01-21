const express = require("express")
const router = express.Router();

// ====================  V I E W = C O N T R O L E R

// *------ home page
router.get( "", async (req, res) =>{
    try{
        let user  ;
            return res.render("mainWebsite/home",{user:user})
            // return res.render("mainWebsite/home")
    }
    catch(e){
        console.log(e.message);
        
        return res.send(e.message)
    }
})


// ==================== C R U D = C O N T R O L E R 

module.exports = router