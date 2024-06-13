const express = require("express");
const router = express.Router();

router.get("/",funnction(req,res) {
    res.render("index");
});

module.exports = router