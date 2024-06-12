const mongoose = require("mongoose");
const config = require("config");
const dbgr = require("debug")("development:mongoose");

mongoose
  // .connect("/scatch")
  .connect(`${config.get("MONGODB_URI")}/scatch`)
  .then(function () {
    // console.log("connected");
    dbgr("connected");
  })
  .catch(function (err) {
    // console.log(err);
    dbgr(err);
  });

module.exports = mongoose.connection;
