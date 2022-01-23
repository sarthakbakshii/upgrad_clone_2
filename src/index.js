const express = require("express");
const Razorpay = require("razorpay")
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs"); // root directory for views views/
app.use(express.static("public"));


const userController = require("./controllers/user.controller");
const purchasedCource = require("./controllers/purchasedCource.controler");


const courceControler = require("./controllers/cources.controler");
const adminControler = require("./controllers/admin.controler");
const homeCountroler = require("./controllers/homepage.controler");
const produtPageControler = require("./controllers/productpage.controler")

app.use("/adminpanel",adminControler); 


app.use("/home",homeCountroler);
app.use("/product",produtPageControler);

app.use("/users",userController);

app.use("/buy",purchasedCource)

app.use("/courses",courceControler);

// ========== payment gateway
const razorpay = new Razorpay({
    key_id : `rzp_test_Niuh6hOjeEJsU6`,
    key_secret : `KHoRpRKWulpTZhZD29pbzMSd`
})

app.post("/order", (req, res) =>{

    
    razorpay.orders.create({
        amount: Number(req.query.amount)*100,
        currency: "INR",
        receipt: "receipt#1",
        notes: {
            key1: "value3",
            key2: "value2"
        }
        }, (err, order) => {
            console.log(order);
            res.json(order)
        })
})


module.exports = app;

// rzp_test_Niuh6hOjeEJsU6
// KHoRpRKWulpTZhZD29pbzMSd