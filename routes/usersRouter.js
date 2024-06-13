const express = require("express");
const router = express.Router();
const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken");

router.get("/", function (req, res) {
  res.send("hey user");
});

router.post("/register");

module.exports = router;
