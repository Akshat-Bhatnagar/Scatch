const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

router.get("/", function (req, res) {
  res.send("hey owner");
});

// console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "development") {
  router.post("/create", async function (req, res) {
    // res.send("Hey its working");
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res.status(504).send("owner already exists");
    }
    let { fullname, email, password } = req.body;
    let createdOwner = await ownerModel.create({
      fullname,
      email,
      password,
    });
    // res.send("we can create new owner");
    res.status(201).send(createdOwner);
  });
}

module.exports = router;
