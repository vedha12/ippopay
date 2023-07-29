const mongoose = require("mongoose");

const userPassword = new mongoose.Schema(
  {
    passsword: {
      type: String,
    },
  },
  { timestamps: true }
);

const passwordData = mongoose.model("comments", userPassword);

module.exports = passwordData;
