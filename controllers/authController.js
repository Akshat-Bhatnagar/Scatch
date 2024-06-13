const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken");

module.exports.registerUser = function (req, res) {
  try {
    let { email, password, fullname } = req.body;

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) return res.send(err.message);
        else {
          //  res.send(hash);
          let user = await userModel.create({
            email,
            password,
            fullname,
          });
          // let token = jwt.sign({ email, id: user._id }, "heyheyhey", {
          //   expiresIn: "10h",
          // });
          let token = generateToken(user);
          res.cookie("token", token); //"token" is name of that token on browser(frontend/client)
          res.send("User created successfully");
        }
      });
    });
  } catch (err) {
    console.log(err.message);
  }
};