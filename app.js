//jshint esversion: 6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const request = require("request");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine","ejs");


app.get("/", function(req, res) {
  res.render("pages/signup");
});

app.post("/", function(req, res) {

  const firstName = req.body.fname;
  const lastName = req.body.lname;
  const email = req.body.email;
  var object = [{
    firstname: firstName,
    lastname: lastName,
    email1: email,
  }];

  console.log(firstName, lastName, email);

  res.render("pages/success", {details: object});

});


app.listen(3000, ()=>{
  console.log("Port at 3000");
});
