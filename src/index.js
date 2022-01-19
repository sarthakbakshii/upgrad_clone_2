const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs"); // root directory for views views/
app.use(express.static("public"));


const courceControler = require("./controllers/cources.controler");
const adminControler = require("./controllers/admin.controler");
const homeCountroler = require("./controllers/homepage.controler");
const produtPageControler = require("./controllers/productpage.controler")

app.use("/adminpanel",adminControler); 


app.use("/home",homeCountroler);
app.use("/product",produtPageControler)



app.use("/courses",courceControler);


module.exports = app;