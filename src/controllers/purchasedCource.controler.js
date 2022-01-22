const express = require("express");
const Cource = require("../models/cources.model");
const router = express.Router();
// const cources = require("../models/cources.model")
const PurchasedCource = require("../models/purchasedCource.model");

router.get("",async(req,res)=>{
   // console.log(req.body);
    try{
        const test = await PurchasedCource.find({cource_id:req.query.cource_id, user_email:req.query.user_email}).lean().exec()
        console.log("test", test)

        if(test.length ==0){
            const buy = await PurchasedCource.create({
                cource_id : req.query.cource_id,
                user_email : req.query.user_email
        });
        }


    let user ;
    
    const info = await PurchasedCource.find({ user_email : req.query.user_email},{_id:0,cource_id:1}).lean().exec()
    console.log("info: ", info);
let courcearray =[]
// console.log(info)
for(var i=0;i<info.length;i++){
    // console.log(info[i])
    let courceinfo = await Cource.findById(info[i].cource_id).lean().exec()
    courcearray.push(courceinfo)
    console.log( courceinfo)
}
console.log("courcearray", courcearray)

return res.render("mainWebsite/checkout",{user:user,courcearray:courcearray});

    }
    catch(err){
        return res.send(err.message).status(500);
    }
    
});



module.exports = router;


// const books = await Section.aggregate([
//     {
//         $lookup : {
//             from : "books",
//             localField : "_id",
//             foreignField : "section",
//             as : "books_list"
//         }
//     },
//     { $match : {sectionName : section_name }}
// ]);