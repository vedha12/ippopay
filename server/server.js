const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const userPassword = require("./module");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

let port = process.env.PORT || 3003;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose.set("strictQuery", false);
mongoose.connect("Database Link");

app.post("/create", async (req, res, next) => {
  const { password } = req.body;
  const encryptpassword = await bcrypt.hash(password, 10);
  console.log(encryptpassword);
  try {
    userPassword.create({ passsword: encryptpassword });
    res.send({ status: "done" });
  } catch (error) {
    res.send({ status: "Error" });
  }
});

app.listen(port, () => {
  console.log("server is working");
});
