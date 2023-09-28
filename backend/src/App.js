/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 1000;
require("./DB/connection");
const hbs = require("hbs");
const collection = require("../src/models/schema");

const bcrypt = require("bcrypt");

// const static_path = path.join(__dirname, '../public');
const views_path = path.join(__dirname, "../Templates/Views");
const partials_path = path.join(__dirname, "../Templates/Partials");

// app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", views_path);
hbs.registerPartials(partials_path);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/home", (req, res) => {
  res.render("index");
});

app.post("/login", async (req, res) => {
  try {
    const pswrd = req.body.password;
    const cpswrd = req.body.cpassword;

    if (pswrd === cpswrd) {
      const data = new collection({
        name: req.body.fullName,
        email: req.body.email,
        number: req.body.pnumber,
        password: pswrd,
        confirmPassword: cpswrd,
      });

      res.render("login"); //resetting the fresh login page...
    } else if (pswrd !== cpswrd) {
      res.redirect("back"); //resetting the fresh login page...
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post("/home", async (req, res) => {
  try {
    const enteredEmail = req.body.inemail;
    const enteredPassword = req.body.inpassword;

    const userDetails = await collection.findOne({ email: enteredEmail });

    const isMatch = await bcrypt.compare(enteredPassword, userDetails.password);
    if (isMatch) {
      res.status(201).render("index");
    } else {
      res.send("Invalid login Credentials!!!");
    }
  } catch (err) {
    res.send("Invalid Credentials");
  }
});

// const securePassword = async (password) => {

//     console.log(hashedKey);

//     const comparedHashedKey = await bcrypt.compare(password, hashedKey);
//     console.log(comparedHashedKey);
// }

// securePassword("shashwat@gamil.com");

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
