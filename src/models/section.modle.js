const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
    cource_section: { type : String , required : true},
    breadcrump : { type : String , required : true},
    heading  : { type : String , required : true},
    para : { type : String , required : true},
    img  : { type : String , required : true}
})

const Section = new mongoose.model( "section",sectionSchema);
module.exports = Section;

// [
//     {
//         cource_section : "mba",
//         breadcrump : "MBA chai wala",
//         heading : "Online MBA Degrees from the World's Top B-schools",
//         para : "8 specialisations available",
//         img :"https://ik.imagekit.io/upgrad1/marketing-platform-assets/new-images%2Fprogram-backgrounds%2Funiversity%2Ftr%3Aq-2/mba__1635226231214.jpg"
//     },
//     {
//         cource_section : "datascience",
//         breadcrump : "data Scientist",
//         heading : "Online Tech Programs from the World’s Top Universities<",
//         para : "Cloud Computing | Blockchain | Cyber Security | Full Stack Development| DevOps | Big Data",
//         img : "https://ik.imagekit.io/upgrad1/marketing-platform-assets/new-images%2Fprogram-backgrounds%2Funiversity/software_banner__1632240749151.png"
//     }
// ]