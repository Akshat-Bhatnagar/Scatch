const express = require("express");
const router = express.Router();
const isloggedin = require("../middlewares/isLoggedIn");

router.get("/", funnction(req,res){
    res.render("index")
})

router.get("/shop", isLoggedIn,function(req,res){
    res.render("shop");
})

module.exports = router